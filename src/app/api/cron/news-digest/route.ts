import { NextResponse, type NextRequest } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase-server';
import { sendEmail } from '@/lib/email';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 30;

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
  ingested_at: string;
}

const SOURCE_LABELS: Record<string, string> = {
  'vnexpress-kinhdoanh': 'VnExpress',
  'cafef-thi-truong': 'CafeF',
  'vietnambiz-hang-tieu-dung': 'Vietnambiz',
  'vna-kinhte': 'VNA',
};

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) return NextResponse.json({ error: 'unauthorized' }, { status: 401 });

  const to = process.env.NEWS_DIGEST_TO || process.env.GMAIL_USER;
  if (!to) return NextResponse.json({ error: 'NEWS_DIGEST_TO not configured' }, { status: 500 });

  // Fetch top pending candidates from last 36h
  const since = new Date(Date.now() - 36 * 60 * 60 * 1000).toISOString();
  const { data, error } = await supabaseAdmin
    .from('news_candidates')
    .select('id,source,source_url,title,excerpt,relevance_score,matched_keywords,published_at,ingested_at')
    .eq('status', 'pending')
    .gte('ingested_at', since)
    .order('relevance_score', { ascending: false })
    .order('published_at', { ascending: false })
    .limit(8);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  const candidates = (data ?? []) as Candidate[];
  if (candidates.length === 0) {
    return NextResponse.json({ sent: 0, reason: 'no_pending_candidates' });
  }

  const adminUrl = `https://www.validator.vn/admin/news`;
  const dateStr = new Date().toLocaleDateString('vi-VN');

  const rows = candidates
    .map(
      (c) => `
    <tr>
      <td style="padding:14px;border-bottom:1px solid #E2E8F0;vertical-align:top;">
        <div style="font-size:11px;color:#16A34A;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">
          ${SOURCE_LABELS[c.source] || c.source} · score ${c.relevance_score} ${(c.matched_keywords ?? []).map((k) => `#${k}`).join(' ')}
        </div>
        <div style="font-weight:700;font-size:15px;color:#0F172A;margin-bottom:6px;">
          <a href="${c.source_url}" style="color:#0F172A;text-decoration:none;">${escapeHtml(c.title)}</a>
        </div>
        <div style="font-size:13px;color:#475569;line-height:1.5;">${escapeHtml(c.excerpt.slice(0, 240))}${c.excerpt.length > 240 ? '…' : ''}</div>
        <div style="margin-top:8px;">
          <a href="${adminUrl}" style="font-size:12px;color:#16A34A;font-weight:700;">→ Draft in admin</a>
        </div>
      </td>
    </tr>`
    )
    .join('');

  const html = `
<!DOCTYPE html>
<html><body style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Arial,sans-serif;background:#F8FAFC;padding:20px;color:#0F172A;">
  <div style="max-width:620px;margin:0 auto;background:#FFF;border:2px solid #0F172A;border-radius:12px;box-shadow:3px 3px 0 #0F172A;overflow:hidden;">
    <div style="padding:24px;text-align:center;background:#FAF3E3;border-bottom:2px solid #0F172A;">
      <div style="font-size:11px;font-weight:700;letter-spacing:2px;color:#16A34A;text-transform:uppercase;">Validator News Digest</div>
      <h1 style="font-size:22px;margin:8px 0 4px;">${candidates.length} tin F&B đáng xem hôm nay</h1>
      <p style="font-size:12px;color:#64748B;margin:0;">${dateStr}</p>
    </div>
    <table style="width:100%;border-collapse:collapse;">${rows}</table>
    <div style="padding:20px;text-align:center;">
      <a href="${adminUrl}" style="display:inline-block;background:#16A34A;color:#FFF;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:700;font-size:14px;border:2px solid #0F172A;box-shadow:2px 2px 0 #0F172A;">
        Mở admin để draft →
      </a>
    </div>
    <p style="font-size:11px;color:#94A3B8;text-align:center;padding:0 20px 16px;">Digest tự động từ Vercel Cron — 12PM daily. Pick 2-3 tin và publish để giữ /tin-tuc luôn tươi.</p>
  </div>
</body></html>
  `.trim();

  try {
    await sendEmail(to, `📰 F&B digest: ${candidates.length} tin (${dateStr})`, html);
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : 'send failed' }, { status: 500 });
  }

  return NextResponse.json({ sent: 1, candidateCount: candidates.length });
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
