import { NextResponse, type NextRequest } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase-server';
import { sendEmail } from '@/lib/email';
import { slugify, mondayOf, hasFnbCoreTag, isBlocked } from '@/lib/news';
import { enrichCandidate, generateCoverImage } from '@/lib/gemini';
import { findStockImage } from '@/lib/stock-images';
import { uploadCoverImage, mirrorRemoteImage } from '@/lib/news-storage';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 300;

const AUTO_SCORE_THRESHOLD = Number(process.env.NEWS_AUTO_SCORE_THRESHOLD || 40);
const MAX_PER_DAY = Number(process.env.NEWS_MAX_PER_DAY || 3);
const MAX_PER_WEEK = Number(process.env.NEWS_MAX_PER_WEEK || 15);
const MIN_GAP_MINUTES = Number(process.env.NEWS_MIN_GAP_MINUTES || 240);

const SOURCE_LABELS: Record<string, string> = {
  'vnexpress-kinhdoanh': 'VnExpress',
  'cafef-thi-truong': 'CafeF',
  'vietnambiz-hang-tieu-dung': 'Vietnambiz',
  'vna-kinhte': 'VNA',
};

function isAuthorized(req: NextRequest): boolean {
  const auth = req.headers.get('authorization') || '';
  const cronSecret = process.env.CRON_SECRET;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (cronSecret && auth === `Bearer ${cronSecret}`) return true;
  if (serviceKey && auth === `Bearer ${serviceKey}`) return true;
  if (req.headers.get('x-vercel-cron')) return true;
  return false;
}

interface Candidate {
  id: string;
  source: string;
  source_url: string;
  title: string;
  excerpt: string;
  relevance_score: number;
  matched_keywords: string[] | null;
  published_at: string | null;
}

interface PresetRow {
  id: string;
  slug: string;
  label_vi: string;
  label_en: string;
}

interface PublishOutcome {
  slug: string;
  title: string;
  source: string;
  image_source: string;
}

async function acquirePreset(slug: string | null, presets: PresetRow[]): Promise<PresetRow | null> {
  if (!slug) return null;
  return presets.find((p) => p.slug === slug) || null;
}

// Legal safety: even after Gemini rewrite, guarantee word count
function enforceWordCap(text: string, max: number): string {
  const w = text.trim().split(/\s+/);
  if (w.length <= max) return text.trim();
  return w.slice(0, max).join(' ') + '…';
}

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  if (process.env.AUTO_PUBLISH_DISABLED === 'true') {
    return NextResponse.json({ ok: true, skipped: 'AUTO_PUBLISH_DISABLED=true' });
  }

  const startedAt = new Date();

  // Cap enforcement — count posts already published today + this week
  const dayStart = new Date(startedAt);
  dayStart.setUTCHours(0, 0, 0, 0);
  const weekStart = new Date(mondayOf(startedAt) + 'T00:00:00Z');

  const [{ count: dayCount }, { count: weekCount }, { data: lastRow }] = await Promise.all([
    supabaseAdmin
      .from('news_published')
      .select('id', { count: 'exact', head: true })
      .eq('locale', 'vi')
      .eq('published_by', 'auto')
      .gte('published_at', dayStart.toISOString()),
    supabaseAdmin
      .from('news_published')
      .select('id', { count: 'exact', head: true })
      .eq('locale', 'vi')
      .eq('published_by', 'auto')
      .gte('published_at', weekStart.toISOString()),
    supabaseAdmin
      .from('news_published')
      .select('published_at')
      .eq('locale', 'vi')
      .eq('published_by', 'auto')
      .order('published_at', { ascending: false })
      .limit(1)
      .maybeSingle(),
  ]);

  const dayHave = dayCount ?? 0;
  const weekHave = weekCount ?? 0;

  // Min gap check
  if (lastRow?.published_at) {
    const gapMin = (startedAt.getTime() - new Date(lastRow.published_at as string).getTime()) / 60000;
    if (gapMin < MIN_GAP_MINUTES) {
      return NextResponse.json({
        ok: true,
        skipped: 'min_gap_not_reached',
        gapMinutes: Math.round(gapMin),
        minGap: MIN_GAP_MINUTES,
      });
    }
  }

  const slotsLeftDay = Math.max(0, MAX_PER_DAY - dayHave);
  const slotsLeftWeek = Math.max(0, MAX_PER_WEEK - weekHave);
  const slotsToFill = Math.min(slotsLeftDay, slotsLeftWeek);

  if (slotsToFill === 0) {
    return NextResponse.json({
      ok: true,
      skipped: 'caps_reached',
      dayHave,
      weekHave,
      caps: { day: MAX_PER_DAY, week: MAX_PER_WEEK },
    });
  }

  // Fetch qualifying candidates (over-fetch so we can reject noise while walking down)
  const { data: candidatesRaw, error: candErr } = await supabaseAdmin
    .from('news_candidates')
    .select('id,source,source_url,title,excerpt,relevance_score,matched_keywords,published_at')
    .eq('status', 'pending')
    .gte('relevance_score', AUTO_SCORE_THRESHOLD)
    .order('relevance_score', { ascending: false })
    .order('published_at', { ascending: false })
    .limit(20);

  if (candErr) return NextResponse.json({ error: candErr.message }, { status: 500 });
  const candidates = (candidatesRaw ?? []) as Candidate[];

  if (candidates.length === 0) {
    return NextResponse.json({ ok: true, skipped: 'no_qualifying_candidates', threshold: AUTO_SCORE_THRESHOLD });
  }

  // Load wizard presets once
  const { data: presetsRaw } = await supabaseAdmin
    .from('news_wizard_presets')
    .select('id,slug,label_vi,label_en')
    .eq('active', true);
  const presets = (presetsRaw ?? []) as PresetRow[];

  const outcomes: PublishOutcome[] = [];
  const rejected: Array<{ id: string; reason: string }> = [];

  for (const c of candidates) {
    if (outcomes.length >= slotsToFill) break;

    const combined = `${c.title}\n${c.excerpt}`;
    // Double-check blocklist (defense in depth against ingest-time miss)
    if (isBlocked(combined)) {
      await supabaseAdmin.from('news_candidates').update({ status: 'rejected', rejected_at: new Date().toISOString() }).eq('id', c.id);
      rejected.push({ id: c.id, reason: 'blocked_keyword' });
      continue;
    }
    if (!hasFnbCoreTag(c.matched_keywords ?? [])) {
      await supabaseAdmin.from('news_candidates').update({ status: 'rejected', rejected_at: new Date().toISOString() }).eq('id', c.id);
      rejected.push({ id: c.id, reason: 'no_fnb_core_tag' });
      continue;
    }

    // 1. Enrich with Gemini
    const enriched = await enrichCandidate({
      title: c.title,
      excerpt: c.excerpt,
      source_name: SOURCE_LABELS[c.source] || c.source,
      matched_keywords: c.matched_keywords ?? [],
    });
    if (!enriched) {
      rejected.push({ id: c.id, reason: 'enrich_failed' });
      continue;
    }

    // 2. Build slug from Gemini VI title
    const baseSlug = slugify(enriched.title_vi);
    const slug = `${baseSlug}-${new Date().toISOString().slice(0, 10)}`;

    // 3. Cover image: try stock chain -> fallback Gemini gen
    let coverUrl: string | null = null;
    let coverCredit: string | null = null;
    let coverSource: string | null = null;

    const stock = await findStockImage(enriched.image_search_query);
    if (stock) {
      const mirrored = await mirrorRemoteImage(stock.url, slug);
      if (mirrored) {
        coverUrl = mirrored.publicUrl;
        coverCredit = stock.credit;
        coverSource = stock.source;
      }
    }
    if (!coverUrl) {
      const gen = await generateCoverImage(enriched.image_search_query);
      if (gen) {
        const uploaded = await uploadCoverImage(gen.bytes, gen.mimeType, slug);
        if (uploaded) {
          coverUrl = uploaded.publicUrl;
          coverCredit = 'AI-generated illustration';
          coverSource = 'gemini';
        }
      }
    }
    // No image is OK — public page renders without hero (rare edge)

    // 4. Attach preset
    const preset = await acquirePreset(enriched.wizard_preset_slug, presets);

    // 5. Insert VI parent then EN child (transactional-ish)
    const now = new Date();
    const weekOf = mondayOf(now);

    const { data: parentRow, error: parentErr } = await supabaseAdmin
      .from('news_published')
      .insert({
        candidate_id: c.id,
        slug,
        locale: 'vi',
        title: enriched.title_vi,
        summary: enforceWordCap(enriched.summary_vi, 100),
        operator_angle: enriched.operator_angle_vi,
        wizard_preset_id: preset?.id || null,
        source_name: SOURCE_LABELS[c.source] || c.source,
        source_url: c.source_url,
        cover_image_url: coverUrl,
        cover_image_credit: coverCredit,
        cover_image_source: coverSource,
        week_of: weekOf,
        status: 'published',
        published_at: now.toISOString(),
        published_by: 'auto',
      })
      .select('id')
      .single();

    if (parentErr || !parentRow) {
      rejected.push({ id: c.id, reason: `parent_insert_fail:${parentErr?.message || 'unknown'}` });
      continue;
    }

    const { error: childErr } = await supabaseAdmin.from('news_published').insert({
      parent_id: parentRow.id,
      candidate_id: c.id,
      slug,
      locale: 'en',
      title: enriched.title_en,
      summary: enforceWordCap(enriched.summary_en, 100),
      operator_angle: enriched.operator_angle_en,
      wizard_preset_id: preset?.id || null,
      source_name: SOURCE_LABELS[c.source] || c.source,
      source_url: c.source_url,
      cover_image_url: coverUrl,
      cover_image_credit: coverCredit,
      cover_image_source: coverSource,
      week_of: weekOf,
      status: 'published',
      published_at: now.toISOString(),
      published_by: 'auto',
    });

    if (childErr) {
      // Rollback parent
      await supabaseAdmin.from('news_published').delete().eq('id', parentRow.id);
      rejected.push({ id: c.id, reason: `child_insert_fail:${childErr.message}` });
      continue;
    }

    outcomes.push({
      slug,
      title: enriched.title_vi,
      source: SOURCE_LABELS[c.source] || c.source,
      image_source: coverSource || 'none',
    });
  }

  // Email digest to Khang
  if (outcomes.length > 0) {
    const to = process.env.NEWS_DIGEST_TO || process.env.GMAIL_USER;
    if (to) {
      const rows = outcomes
        .map(
          (o) => `
        <tr>
          <td style="padding:12px;border-bottom:1px solid #E2E8F0;">
            <div style="font-size:11px;color:#16A34A;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">
              ${o.source} · image: ${o.image_source}
            </div>
            <div style="font-weight:700;font-size:15px;color:#0F172A;margin-bottom:6px;">
              <a href="https://www.validator.vn/tin-tuc/${o.slug}" style="color:#0F172A;text-decoration:none;">${escapeHtml(o.title)}</a>
            </div>
            <a href="https://www.validator.vn/tin-tuc/${o.slug}" style="font-size:12px;color:#16A34A;font-weight:700;">→ View live</a>
            &nbsp;·&nbsp;
            <a href="https://www.validator.vn/admin/news" style="font-size:12px;color:#EF4444;font-weight:700;">→ Unpublish in admin</a>
          </td>
        </tr>`
        )
        .join('');
      const html = `
<!DOCTYPE html>
<html><body style="font-family:-apple-system,Segoe UI,Roboto,Arial,sans-serif;background:#F8FAFC;padding:20px;color:#0F172A;">
  <div style="max-width:620px;margin:0 auto;background:#FFF;border:2px solid #0F172A;border-radius:12px;box-shadow:3px 3px 0 #0F172A;overflow:hidden;">
    <div style="padding:20px;text-align:center;background:#FAF3E3;border-bottom:2px solid #0F172A;">
      <div style="font-size:11px;font-weight:700;letter-spacing:2px;color:#16A34A;text-transform:uppercase;">🤖 Auto-published</div>
      <h1 style="font-size:20px;margin:8px 0 4px;">Validator publish ${outcomes.length} tin F&B hôm nay</h1>
      <p style="font-size:12px;color:#64748B;margin:0;">${startedAt.toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })}</p>
    </div>
    <table style="width:100%;border-collapse:collapse;">${rows}</table>
    <div style="padding:16px;text-align:center;font-size:11px;color:#94A3B8;">
      Nếu tin sai/dở, mở admin → unpublish trong 5 giây.<br>
      Cap: max ${MAX_PER_DAY}/ngày, ${MAX_PER_WEEK}/tuần. Threshold: score ≥ ${AUTO_SCORE_THRESHOLD}.
    </div>
  </div>
</body></html>`.trim();

      try {
        await sendEmail(to, `🤖 ${outcomes.length} tin F&B auto-published`, html);
      } catch (err) {
        console.error('digest email fail:', err instanceof Error ? err.message : err);
      }
    }
  }

  return NextResponse.json({
    ok: true,
    published: outcomes.length,
    outcomes,
    rejected,
    caps: { dayHave: dayHave + outcomes.length, weekHave: weekHave + outcomes.length, maxDay: MAX_PER_DAY, maxWeek: MAX_PER_WEEK },
    slotsToFill,
    threshold: AUTO_SCORE_THRESHOLD,
    at: startedAt.toISOString(),
  });
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
