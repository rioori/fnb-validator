// Stock image chain: Pexels -> Unsplash -> Pixabay. First hit wins.
// Falls back to Gemini image gen (via caller) when all three return empty.
// Each source no-ops when its API key is absent.

const PEXELS_KEY = process.env.PEXELS_API_KEY || '';
const UNSPLASH_KEY = process.env.UNSPLASH_ACCESS_KEY || '';
const PIXABAY_KEY = process.env.PIXABAY_API_KEY || '';

export interface StockImage {
  url: string;
  credit: string;
  source: 'pexels' | 'unsplash' | 'pixabay';
}

const TIMEOUT_MS = 12000;

async function fetchWithTimeout(url: string, init?: RequestInit): Promise<Response> {
  return fetch(url, { ...init, signal: AbortSignal.timeout(TIMEOUT_MS) });
}

async function fromPexels(query: string): Promise<StockImage | null> {
  if (!PEXELS_KEY) return null;
  try {
    const res = await fetchWithTimeout(
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=5&orientation=landscape`,
      { headers: { Authorization: PEXELS_KEY } }
    );
    if (!res.ok) return null;
    const data = (await res.json()) as {
      photos?: Array<{ src?: { large2x?: string; large?: string }; photographer?: string; photographer_url?: string }>;
    };
    const p = data.photos?.[0];
    const url = p?.src?.large2x || p?.src?.large;
    if (!url) return null;
    return {
      url,
      credit: `Photo by ${p?.photographer || 'unknown'} on Pexels`,
      source: 'pexels',
    };
  } catch {
    return null;
  }
}

async function fromUnsplash(query: string): Promise<StockImage | null> {
  if (!UNSPLASH_KEY) return null;
  try {
    const res = await fetchWithTimeout(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=5&orientation=landscape&content_filter=high`,
      { headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` } }
    );
    if (!res.ok) return null;
    const data = (await res.json()) as {
      results?: Array<{ urls?: { regular?: string }; user?: { name?: string; links?: { html?: string } } }>;
    };
    const p = data.results?.[0];
    const url = p?.urls?.regular;
    if (!url) return null;
    return {
      url,
      credit: `Photo by ${p?.user?.name || 'unknown'} on Unsplash`,
      source: 'unsplash',
    };
  } catch {
    return null;
  }
}

async function fromPixabay(query: string): Promise<StockImage | null> {
  if (!PIXABAY_KEY) return null;
  try {
    const res = await fetchWithTimeout(
      `https://pixabay.com/api/?key=${PIXABAY_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true&per_page=5`
    );
    if (!res.ok) return null;
    const data = (await res.json()) as { hits?: Array<{ largeImageURL?: string; webformatURL?: string; user?: string }> };
    const p = data.hits?.[0];
    const url = p?.largeImageURL || p?.webformatURL;
    if (!url) return null;
    return {
      url,
      credit: `Image by ${p?.user || 'unknown'} on Pixabay`,
      source: 'pixabay',
    };
  } catch {
    return null;
  }
}

export async function findStockImage(query: string): Promise<StockImage | null> {
  const chain = [fromPexels, fromUnsplash, fromPixabay];
  for (const fn of chain) {
    const hit = await fn(query);
    if (hit) return hit;
  }
  return null;
}
