// Ticker mode auto-publish.
// No LLM rewrite, no image, no landing page — this route just marks the top N
// pending candidates as "published" so they surface on /tin-tuc + homepage ticker.
// The public UI links directly to the source URL (aggregator format).
// Legal: title + short RSS excerpt + link back = fair quotation.

import { NextResponse, type NextRequest } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase-server';
import { sendEmail } from '@/lib/email';
import { hasFnbCoreTag, isBlocked } from '@/lib/news';
import { fetchOgMeta } from '@/lib/og-scraper';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 60;

const AUTO_SCORE_THRESHOLD = Number(process.env.NEWS_AUTO_SCORE_THRESHOLD || 15);
const MAX_PER_DAY = Number(process.env.NEWS_MAX_PER_DAY || 10);
const MAX_PER_WEEK = Number(process.env.NEWS_MAX_PER_WEEK || 50);

const SOURCE_LABELS: Record<string, string> = {
  'vnexpress-kinhdoanh': 'VnExpress',
  'cafef-thi-truong': 'CafeF',
  'cafef-doanh-nghiep': 'CafeF',
  'vietnambiz-kinh-doanh': 'Vietnambiz',
  'tuoitre-kinh-doanh': 'Tuổi Trẻ',
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

interface PublishOutcome {
  candidateId: string;
  title: string;
  source: string;
  source_url: string;
  score: number;
}

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  if (process.env.AUTO_PUBLISH_DISABLED === 'true') {
    return NextResponse.json({ ok: true, skipped: 'AUTO_PUBLISH_DISABLED=true' });
  }

  const startedAt = new Date();
  const dayStart = new Date(startedAt);
  dayStart.setUTCHours(0, 0, 0, 0);
  const weekAgo = new Date(startedAt.getTime() - 7 * 24 * 60 * 60 * 1000);

  const [{ count: dayCount }, { count: weekCount }] = await Promise.all([
    supabaseAdmin
      .from('news_published')
      .select('id', { count: 'exact', head: true })
      .eq('locale', 'vi')
      .gte('published_at', dayStart.toISOString()),
    supabaseAdmin
      .from('news_published')
      .select('id', { count: 'exact', head: true })
      .eq('locale', 'vi')
      .gte('published_at', weekAgo.toISOString()),
  ]);

  const slotsLeftDay = Math.max(0, MAX_PER_DAY - (dayCount ?? 0));
  const slotsLeftWeek = Math.max(0, MAX_PER_WEEK - (weekCount ?? 0));
  const slotsToFill = Math.min(slotsLeftDay, slotsLeftWeek);

  if (slotsToFill === 0) {
    return NextResponse.json({
      ok: true,
      skipped: 'caps_reached',
      caps: { day: MAX_PER_DAY, week: MAX_PER_WEEK, dayHave: dayCount, weekHave: weekCount },
    });
  }

  const { data: candidatesRaw, error: candErr } = await supabaseAdmin
    .from('news_candidates')
    .select('id,source,source_url,title,excerpt,relevance_score,matched_keywords,published_at')
    .eq('status', 'pending')
    .gte('relevance_score', AUTO_SCORE_THRESHOLD)
    .order('relevance_score', { ascending: false })
    .order('published_at', { ascending: false })
    .limit(30);
  if (candErr) return NextResponse.json({ error: candErr.message }, { status: 500 });

  const candidates = (candidatesRaw ?? []) as Candidate[];
  const outcomes: PublishOutcome[] = [];
  const rejected: Array<{ id: string; reason: string }> = [];

  for (const c of candidates) {
    if (outcomes.length >= slotsToFill) break;

    const combined = `${c.title}\n${c.excerpt}`;
    if (isBlocked(combined)) {
      await supabaseAdmin.from('news_candidates').update({ status: 'rejected', rejected_at: new Date().toISOString() }).eq('id', c.id);
      rejected.push({ id: c.id, reason: 'blocked' });
      continue;
    }
    if (!hasFnbCoreTag(c.matched_keywords ?? [])) {
      await supabaseAdmin.from('news_candidates').update({ status: 'rejected', rejected_at: new Date().toISOString() }).eq('id', c.id);
      rejected.push({ id: c.id, reason: 'no_fnb_core_tag' });
      continue;
    }

    const now = new Date();
    const sourceName = SOURCE_LABELS[c.source] || c.source;

    // Ticker mode: title + short excerpt as-is (no LLM rewrite). Slug is unique
    // via candidate id (not used for landing page, only for React key + admin).
    const slug = `ticker-${c.id}`;

    // Clean excerpt: strip common wire-service prefixes, cap at 260 chars
    // (fits 3 lines in the 2-column ticker card without truncating mid-sentence)
    const cleanExcerpt = c.excerpt
      .replace(/^(TPO|TT|TTO|VNA|Vietnamplus|VOV|VOH|Zing|VnExpress|Znews|VOX)\s*[-–—:]\s*/i, '')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 260);

    // Scrape OG image from source (best-effort — null is ok, card falls back
    // to a gradient placeholder)
    const og = await fetchOgMeta(c.source_url);

    // Insert single VI row (no bilingual duplication needed for ticker; users
    // click through to the source in their preferred language).
    const { error: insErr } = await supabaseAdmin.from('news_published').insert({
      candidate_id: c.id,
      slug,
      locale: 'vi',
      title: c.title,
      summary: cleanExcerpt,
      operator_angle: null,
      wizard_preset_id: null,
      source_name: sourceName,
      source_url: c.source_url,
      cover_image_url: null,
      cover_image_credit: null,
      cover_image_source: null,
      og_image_url: og.imageUrl,
      week_of: dayStart.toISOString().slice(0, 10),
      status: 'published',
      published_at: now.toISOString(),
      published_by: 'auto',
    });

    if (insErr) {
      rejected.push({ id: c.id, reason: `insert_fail:${insErr.message.slice(0, 50)}` });
      continue;
    }

    outcomes.push({
      candidateId: c.id,
      title: c.title,
      source: sourceName,
      source_url: c.source_url,
      score: c.relevance_score,
    });
  }

  // Email digest (once/day: only fire if it's the morning cron OR first run today)
  if (outcomes.length > 0 && (dayCount ?? 0) === 0) {
    const to = process.env.NEWS_DIGEST_TO || process.env.GMAIL_USER;
    if (to) {
      const rows = outcomes
        .map(
          (o) => `
        <tr>
          <td style="padding:10px 14px;border-bottom:1px solid #E2E8F0;">
            <div style="font-size:11px;color:#16A34A;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:3px;">
              ${o.source} · score ${o.score}
            </div>
            <div style="font-weight:600;font-size:14px;color:#0F172A;margin-bottom:4px;">
              <a href="${o.source_url}" style="color:#0F172A;text-decoration:none;">${escapeHtml(o.title)}</a>
            </div>
          </td>
        </tr>`
        )
        .join('');
      const html = `
<!DOCTYPE html>
<html><body style="font-family:-apple-system,Segoe UI,Roboto,Arial,sans-serif;background:#F8FAFC;padding:20px;color:#0F172A;">
  <div style="max-width:620px;margin:0 auto;background:#FFF;border:2px solid #0F172A;border-radius:12px;box-shadow:3px 3px 0 #0F172A;overflow:hidden;">
    <div style="padding:20px;text-align:center;background:#FAF3E3;border-bottom:2px solid #0F172A;">
      <div style="font-size:11px;font-weight:700;letter-spacing:2px;color:#16A34A;text-transform:uppercase;">🤖 F&B Ticker</div>
      <h1 style="font-size:19px;margin:8px 0 4px;">Validator publish ${outcomes.length} tin F&B hôm nay</h1>
    </div>
    <table style="width:100%;border-collapse:collapse;">${rows}</table>
    <div style="padding:16px;text-align:center;font-size:11px;color:#94A3B8;">
      Xem live: <a href="https://www.validator.vn/tin-tuc" style="color:#16A34A;font-weight:700;">/tin-tuc</a> · Unpublish trong admin
    </div>
  </div>
</body></html>`.trim();
      try {
        await sendEmail(to, `📰 ${outcomes.length} tin F&B mới trên Validator`, html);
      } catch (err) {
        console.error('digest email fail:', err instanceof Error ? err.message : err);
      }
    }
  }

  return NextResponse.json({
    ok: true,
    published: outcomes.length,
    outcomes: outcomes.map((o) => ({ title: o.title.slice(0, 60), source: o.source, url: o.source_url })),
    rejected: rejected.slice(0, 10),
    caps: { dayHave: (dayCount ?? 0) + outcomes.length, weekHave: (weekCount ?? 0) + outcomes.length, maxDay: MAX_PER_DAY, maxWeek: MAX_PER_WEEK },
    threshold: AUTO_SCORE_THRESHOLD,
    at: startedAt.toISOString(),
  });
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
