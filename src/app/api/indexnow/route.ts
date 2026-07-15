import { NextResponse } from 'next/server';

// IndexNow ping endpoint — notifies Bing (and other supporting engines) about
// new or updated URLs so they can crawl faster than the natural cadence.
//
// Auth: guarded by INDEXNOW_ADMIN_TOKEN env var. Client passes ?token=... .
// Usage: POST /api/indexnow?token=XXX with JSON body { "urls": ["https://www.validator.vn/..."] }
// or GET  /api/indexnow?token=XXX for a default sweep of high-value pages.

const HOST = 'www.validator.vn';
const KEY = '1a0117d07afe2243dfbf4979697a5bc8';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';

// Default sweep — high-value pages we want re-crawled after ships.
const DEFAULT_URLS = [
  '',
  '/fnb',
  '/survival-score',
  '/ai-chat',
  '/kien-thuc',
  '/goc-nhin-chuyen-gia',
  '/cau-chuyen-chu-quan',
  '/so-sanh',
  '/blog',
  '/about',
  '/chu-de/kinh-doanh-cafe',
  '/chu-de/kinh-doanh-nha-hang',
  '/chu-de/mo-tiem-banh-ngot',
  '/chu-de/kinh-doanh-tra-sua',
  '/chu-de/cloud-kitchen-fnb',
].map((p) => `https://${HOST}${p}`);

async function ping(urls: string[]) {
  const body = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  };

  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  });

  return { status: res.status, ok: res.ok, count: urls.length };
}

function unauthorized() {
  return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
}

export async function POST(request: Request) {
  const token = process.env.INDEXNOW_ADMIN_TOKEN;
  const url = new URL(request.url);
  if (!token || url.searchParams.get('token') !== token) return unauthorized();

  try {
    const body = await request.json();
    const urls: string[] = Array.isArray(body?.urls) ? body.urls : [];
    if (urls.length === 0) return NextResponse.json({ error: 'no urls' }, { status: 400 });
    const result = await ping(urls);
    return NextResponse.json(result);
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}

export async function GET(request: Request) {
  const token = process.env.INDEXNOW_ADMIN_TOKEN;
  const url = new URL(request.url);
  if (!token || url.searchParams.get('token') !== token) return unauthorized();

  try {
    const result = await ping(DEFAULT_URLS);
    return NextResponse.json({ ...result, urls: DEFAULT_URLS });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}
