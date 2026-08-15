import { NextResponse } from 'next/server';
import { listTickerItems } from '@/lib/news-server';

export const runtime = 'nodejs';
// Cache 5 minutes at the edge — same cadence as ISR on /tin-tuc
export const revalidate = 300;

export async function GET(req: Request) {
  const url = new URL(req.url);
  const limit = Math.min(Math.max(Number(url.searchParams.get('limit') || 10), 1), 50);
  const items = await listTickerItems(limit);
  return NextResponse.json({ items }, {
    headers: {
      'cache-control': 'public, s-maxage=300, stale-while-revalidate=600',
    },
  });
}
