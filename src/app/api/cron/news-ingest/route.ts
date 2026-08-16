import { NextResponse, type NextRequest } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase-server';
import { NEWS_SOURCES, parseFeed, scoreText, hashUrl, isBlocked } from '@/lib/news';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 60;

function isAuthorized(req: NextRequest): boolean {
  const auth = req.headers.get('authorization') || '';
  const cronSecret = process.env.CRON_SECRET;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (cronSecret && auth === `Bearer ${cronSecret}`) return true;
  if (serviceKey && auth === `Bearer ${serviceKey}`) return true;
  if (req.headers.get('x-vercel-cron')) return true;
  return false;
}

async function fetchWithTimeout(url: string, ms = 15000): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), ms);
  try {
    return await fetch(url, {
      signal: controller.signal,
      headers: {
        // Some VN news CDNs 503/500 generic bot UAs. Present as a browser —
        // same reason og-scraper uses this; RSS is public data + rel canonical.
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
        accept: 'application/rss+xml, application/xml, text/xml, */*',
      },
      cache: 'no-store',
    });
  } finally {
    clearTimeout(timer);
  }
}

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  }

  const results: Array<{ source: string; ok: boolean; ingested: number; skipped: number; error?: string }> = [];

  for (const source of NEWS_SOURCES) {
    try {
      const res = await fetchWithTimeout(source.rssUrl);
      if (!res.ok) {
        results.push({ source: source.key, ok: false, ingested: 0, skipped: 0, error: `HTTP ${res.status}` });
        continue;
      }
      const xml = await res.text();
      const items = parseFeed(xml);

      let ingested = 0;
      let skipped = 0;

      // Batch: fetch existing hashes for dedupe (single round-trip)
      const hashes = items.map((it) => hashUrl(it.link));
      const { data: existingRows } = await supabaseAdmin
        .from('news_candidates')
        .select('source_url_hash')
        .in('source_url_hash', hashes);
      const existing = new Set((existingRows ?? []).map((r) => (r as { source_url_hash: string }).source_url_hash));

      const toInsert: Array<Record<string, unknown>> = [];
      for (const it of items) {
        const h = hashUrl(it.link);
        if (existing.has(h)) {
          skipped++;
          continue;
        }
        const combined = `${it.title}\n${it.description}`;
        if (isBlocked(combined)) {
          skipped++;
          continue;
        }
        const { score, matched } = scoreText(combined);
        if (score < 15) {
          // Ingest floor low; strict auto-publish gate handles quality
          skipped++;
          continue;
        }
        toInsert.push({
          source: source.key,
          source_url: it.link,
          source_url_hash: h,
          title: it.title.slice(0, 500),
          excerpt: it.description.slice(0, 500),
          published_at: it.pubDate ? new Date(it.pubDate).toISOString() : null,
          relevance_score: score,
          matched_keywords: matched,
          language: source.language,
        });
      }

      if (toInsert.length > 0) {
        const { error: insErr } = await supabaseAdmin.from('news_candidates').insert(toInsert);
        if (insErr) {
          results.push({ source: source.key, ok: false, ingested: 0, skipped, error: insErr.message });
          continue;
        }
        ingested = toInsert.length;
      }

      results.push({ source: source.key, ok: true, ingested, skipped });
    } catch (err) {
      results.push({ source: source.key, ok: false, ingested: 0, skipped: 0, error: err instanceof Error ? err.message : 'unknown' });
    }
  }

  const totalIngested = results.reduce((s, r) => s + r.ingested, 0);
  return NextResponse.json({
    ok: true,
    totalIngested,
    results,
    at: new Date().toISOString(),
  });
}
