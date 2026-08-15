import crypto from 'crypto';

export type NewsLocale = 'vi' | 'en';
export type NewsCandidateStatus = 'pending' | 'picked' | 'rejected' | 'published' | 'archived';
export type NewsPublishedStatus = 'draft' | 'scheduled' | 'published' | 'archived';

export interface NewsSource {
  key: string;
  label: string;
  rssUrl: string;
  language: NewsLocale;
}

export const NEWS_SOURCES: NewsSource[] = [
  { key: 'vnexpress-kinhdoanh', label: 'VnExpress Kinh doanh', rssUrl: 'https://vnexpress.net/rss/kinh-doanh.rss', language: 'vi' },
  { key: 'cafef-thi-truong', label: 'CafeF Thị trường', rssUrl: 'https://cafef.vn/thi-truong.rss', language: 'vi' },
  { key: 'vietnambiz-hang-tieu-dung', label: 'Vietnambiz Hàng tiêu dùng', rssUrl: 'https://vietnambiz.vn/hang-tieu-dung.rss', language: 'vi' },
  { key: 'vna-kinhte', label: 'Vietnam News Agency Kinh tế', rssUrl: 'https://www.vietnamplus.vn/rss/kinhte.rss', language: 'vi' },
];

// Keyword scoring for relevance to F&B operators. Higher weight = more relevant.
export const KEYWORDS: Array<{ pattern: RegExp; weight: number; tag: string }> = [
  { pattern: /\b(quán ăn|quán cà phê|quán cafe|nhà hàng|restaurant|cafe|coffee shop|trà sữa|milk tea|bakery|tiệm bánh)\b/gi, weight: 30, tag: 'venue' },
  { pattern: /\b(F&B|food service|dịch vụ ăn uống|ẩm thực|food and beverage)\b/gi, weight: 25, tag: 'fnb' },
  { pattern: /\b(grabfood|shopeefood|gofood|beamin|delivery|giao hàng|hoa hồng|commission)\b/gi, weight: 20, tag: 'delivery' },
  { pattern: /\b(nguyên liệu|giá thịt|giá cà phê|giá sữa|giá bột mì|ingredient|pork price|coffee price)\b/gi, weight: 20, tag: 'ingredient' },
  { pattern: /\b(mặt bằng|thuê nhà|rent|tiền thuê|real estate)\b/gi, weight: 15, tag: 'rent' },
  { pattern: /\b(VSATTP|an toàn thực phẩm|food safety|quy định|regulation|giấy phép|license|thuế|tax)\b/gi, weight: 20, tag: 'regulation' },
  { pattern: /\b(khai trương|mở quán|đóng cửa|phá sản|khởi nghiệp|startup|franchise|nhượng quyền|chuỗi)\b/gi, weight: 18, tag: 'openings' },
  { pattern: /\b(xu hướng|trend|matcha|sourdough|tea-based|specialty coffee|cold brew|artisan)\b/gi, weight: 15, tag: 'trend' },
  { pattern: /\b(Highlands|Phúc Long|The Coffee House|Starbucks|Trung Nguyên|KOI|Gong Cha|Katinat|Cheese Coffee)\b/gi, weight: 12, tag: 'brand' },
  { pattern: /\b(doanh thu|lợi nhuận|margin|revenue|profit|BEP|break-even|điểm hoà vốn)\b/gi, weight: 15, tag: 'financial' },
];

export interface KeywordMatch {
  score: number;
  matched: string[];
}

export function scoreText(text: string): KeywordMatch {
  if (!text) return { score: 0, matched: [] };
  let score = 0;
  const matched = new Set<string>();
  for (const { pattern, weight, tag } of KEYWORDS) {
    const hits = text.match(pattern);
    if (hits && hits.length > 0) {
      score += Math.min(weight * hits.length, weight * 3); // cap per-keyword
      matched.add(tag);
    }
  }
  return { score: Math.min(score, 100), matched: Array.from(matched) };
}

export function hashUrl(url: string): string {
  return crypto.createHash('sha256').update(url.trim().toLowerCase()).digest('hex');
}

export function slugify(input: string, maxLen = 80): string {
  const noDiacritics = input
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D');
  const kebab = noDiacritics
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  return kebab.slice(0, maxLen).replace(/-$/, '');
}

export function wordCount(text: string): number {
  if (!text) return 0;
  return text.trim().split(/\s+/).length;
}

export const MAX_SUMMARY_WORDS = 100;

export function validateSummaryLength(summary: string): { ok: boolean; count: number } {
  const c = wordCount(summary);
  return { ok: c <= MAX_SUMMARY_WORDS, count: c };
}

export function mondayOf(date: Date): string {
  const d = new Date(date);
  const day = d.getDay(); // 0=Sun..6=Sat
  const diff = day === 0 ? -6 : 1 - day; // Monday-based week
  d.setDate(d.getDate() + diff);
  return d.toISOString().slice(0, 10);
}

// Very small RSS/XML parser — no external dep. Handles <item>/<entry> with title/link/description/pubDate.
export interface RawFeedItem {
  title: string;
  link: string;
  description: string;
  pubDate: string | null;
}

export function parseFeed(xml: string): RawFeedItem[] {
  const items: RawFeedItem[] = [];
  const itemBlocks = xml.match(/<item\b[\s\S]*?<\/item>/gi) || xml.match(/<entry\b[\s\S]*?<\/entry>/gi) || [];
  for (const block of itemBlocks) {
    const title = pickTag(block, 'title');
    const link = pickTag(block, 'link') || pickLinkHref(block);
    const description = pickTag(block, 'description') || pickTag(block, 'summary') || pickTag(block, 'content:encoded') || pickTag(block, 'content');
    const pubDate = pickTag(block, 'pubDate') || pickTag(block, 'published') || pickTag(block, 'updated');
    if (title && link) {
      items.push({
        title: stripHtml(title).trim(),
        link: link.trim(),
        description: stripHtml(description || '').trim().slice(0, 800),
        pubDate: pubDate?.trim() || null,
      });
    }
  }
  return items;
}

function pickTag(block: string, tag: string): string {
  const rex = new RegExp(`<${tag}\\b[^>]*>([\\s\\S]*?)</${tag}>`, 'i');
  const m = block.match(rex);
  if (!m) return '';
  return stripCdata(m[1]);
}

function pickLinkHref(block: string): string {
  const m = block.match(/<link\b[^>]*href=["']([^"']+)["']/i);
  return m ? m[1] : '';
}

function stripCdata(s: string): string {
  return s.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1');
}

function stripHtml(s: string): string {
  return s.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'");
}
