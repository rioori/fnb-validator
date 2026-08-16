import { NextResponse, type NextRequest } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase-server';
import { fetchOgMeta } from '@/lib/og-scraper';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 60;

function isAuthorized(req: NextRequest): boolean {
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!serviceKey) return false;
  const auth = req.headers.get('authorization') || '';
  const bearer = auth.replace(/^Bearer\s+/i, '').trim();
  const query = req.nextUrl.searchParams.get('key')?.trim() || '';
  return bearer === serviceKey || query === serviceKey;
}

export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) return NextResponse.json({ error: 'unauthorized' }, { status: 401 });

  // Fetch all published rows missing og_image_url
  const { data, error } = await supabaseAdmin
    .from('news_published')
    .select('id,source_url')
    .eq('locale', 'vi')
    .eq('status', 'published')
    .is('og_image_url', null)
    .limit(30);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  const rows = (data ?? []) as Array<{ id: string; source_url: string }>;
  if (rows.length === 0) return NextResponse.json({ ok: true, updated: 0 });

  let updated = 0;
  const results: Array<{ id: string; ok: boolean; url?: string }> = [];
  for (const row of rows) {
    const og = await fetchOgMeta(row.source_url);
    if (og.imageUrl) {
      await supabaseAdmin.from('news_published').update({ og_image_url: og.imageUrl }).eq('id', row.id);
      updated++;
    }
    results.push({ id: row.id.slice(0, 8), ok: !!og.imageUrl, url: og.imageUrl?.slice(0, 80) });
  }

  return NextResponse.json({ ok: true, updated, attempted: rows.length, results });
}
