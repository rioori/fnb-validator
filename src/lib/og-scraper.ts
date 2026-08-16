// Fetch Open Graph image + title from an article URL.
// Best-effort: swallows all errors and returns null when the source blocks
// scraping, ships bad HTML, or times out.

interface OgMeta {
  imageUrl: string | null;
  title: string | null;
}

const FETCH_TIMEOUT_MS = 8000;
const MAX_BYTES = 200_000; // Enough for the <head> of any modern news page

export async function fetchOgMeta(url: string): Promise<OgMeta> {
  try {
    const res = await fetch(url, {
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
      headers: {
        // VN news sites (CafeF, Vietnambiz, VnExpress) block generic bot UAs
        // with 503. Present as a real desktop browser instead — legit for OG
        // scraping, which is what social apps like Facebook do.
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
        accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'accept-language': 'vi,en;q=0.9',
      },
      redirect: 'follow',
    });
    if (!res.ok) return { imageUrl: null, title: null };

    // Stream first N bytes only — no need to download full article
    const reader = res.body?.getReader();
    if (!reader) return { imageUrl: null, title: null };
    const chunks: Uint8Array[] = [];
    let received = 0;
    while (received < MAX_BYTES) {
      const { done, value } = await reader.read();
      if (done) break;
      chunks.push(value);
      received += value.byteLength;
    }
    try {
      await reader.cancel();
    } catch {}
    const html = new TextDecoder('utf-8', { fatal: false }).decode(
      Buffer.concat(chunks.map((c) => Buffer.from(c)))
    );

    return parseOgMeta(html, url);
  } catch {
    return { imageUrl: null, title: null };
  }
}

export function parseOgMeta(html: string, baseUrl: string): OgMeta {
  const imageUrl =
    findMeta(html, 'og:image:secure_url') ||
    findMeta(html, 'og:image') ||
    findMeta(html, 'twitter:image') ||
    findMeta(html, 'twitter:image:src') ||
    null;

  const title =
    findMeta(html, 'og:title') ||
    findMeta(html, 'twitter:title') ||
    null;

  return {
    imageUrl: imageUrl ? resolveUrl(imageUrl, baseUrl) : null,
    title: title ? decodeEntities(title) : null,
  };
}

function findMeta(html: string, key: string): string | null {
  // property="og:image" or name="og:image", content="…"
  const patterns = [
    new RegExp(
      `<meta[^>]+(?:property|name)=["']${escapeReg(key)}["'][^>]*content=["']([^"']+)["']`,
      'i'
    ),
    new RegExp(
      `<meta[^>]+content=["']([^"']+)["'][^>]*(?:property|name)=["']${escapeReg(key)}["']`,
      'i'
    ),
  ];
  for (const p of patterns) {
    const m = html.match(p);
    if (m?.[1]) return decodeEntities(m[1].trim());
  }
  return null;
}

function escapeReg(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function decodeEntities(s: string): string {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCharCode(parseInt(code, 16)));
}

function resolveUrl(url: string, base: string): string | null {
  try {
    if (url.startsWith('//')) return `https:${url}`;
    if (url.startsWith('http://') || url.startsWith('https://')) return url;
    return new URL(url, base).toString();
  } catch {
    return null;
  }
}
