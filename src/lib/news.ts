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
  { key: 'cafef-doanh-nghiep', label: 'CafeF Doanh nghiệp', rssUrl: 'https://cafef.vn/doanh-nghiep.rss', language: 'vi' },
  { key: 'vietnambiz-kinh-doanh', label: 'Vietnambiz Kinh doanh', rssUrl: 'https://vietnambiz.vn/rss/kinh-doanh.rss', language: 'vi' },
  { key: 'tuoitre-kinh-doanh', label: 'Tuổi Trẻ Kinh doanh', rssUrl: 'https://tuoitre.vn/rss/kinh-doanh.rss', language: 'vi' },
  { key: 'vna-kinhte', label: 'Vietnam News Agency Kinh tế', rssUrl: 'https://www.vietnamplus.vn/rss/kinhte.rss', language: 'vi' },
];

// Keyword scoring for relevance to F&B operators. Higher weight = more relevant.
// Tags in FNB_CORE_TAGS gate auto-publish (must have >=1 of these).
export const FNB_CORE_TAGS = new Set(['venue', 'fnb', 'delivery', 'ingredient', 'brand']);

export const KEYWORDS: Array<{ pattern: RegExp; weight: number; tag: string }> = [
  { pattern: /\b(quán ăn|quán cà phê|quán cafe|nhà hàng|restaurant|cafe|coffee shop|trà sữa|milk tea|bakery|tiệm bánh|đồ uống|thức uống|ăn uống)\b/gi, weight: 30, tag: 'venue' },
  { pattern: /\b(F&B|food service|dịch vụ ăn uống|ẩm thực|food and beverage|đồ ăn)\b/gi, weight: 25, tag: 'fnb' },
  { pattern: /\b(grabfood|shopeefood|gofood|beamin|delivery|giao hàng|hoa hồng|commission|shipper)\b/gi, weight: 20, tag: 'delivery' },
  { pattern: /\b(nguyên liệu|giá thịt|giá cà phê|giá sữa|giá bột mì|ingredient|pork price|coffee price|thịt heo|cà phê nhân)\b/gi, weight: 20, tag: 'ingredient' },
  { pattern: /\b(mặt bằng|thuê nhà|rent|tiền thuê)\b/gi, weight: 12, tag: 'rent' },
  { pattern: /\b(VSATTP|an toàn thực phẩm|food safety|giấy phép|thuế khoán)\b/gi, weight: 15, tag: 'regulation' },
  { pattern: /\b(khai trương|mở quán|đóng cửa|phá sản|khởi nghiệp F&B|franchise|nhượng quyền|chuỗi cà phê|chuỗi nhà hàng)\b/gi, weight: 18, tag: 'openings' },
  { pattern: /\b(xu hướng|matcha|sourdough|tea-based|specialty coffee|cold brew|artisan|omakase|fine dining|street food)\b/gi, weight: 15, tag: 'trend' },
  { pattern: /\b(Highlands|Phúc Long|The Coffee House|Starbucks|Trung Nguyên|KOI|Gong Cha|Katinat|Cheese Coffee|Golden Gate|Redsun|Al Fresco|Pizza 4Ps|Ba Con Cừu|Coffee Bike)\b/gi, weight: 20, tag: 'brand' },
  { pattern: /\b(doanh thu|lợi nhuận|margin|revenue|profit|BEP|break-even|điểm hoà vốn)\b/gi, weight: 8, tag: 'financial' },
];

// Hard blocklist — instantly reject if any of these appear anywhere in title+excerpt.
// Grown from real ingest noise: BĐS, finance, mining, celebrity crime, industrial.
export const BLOCKLIST_PATTERNS: RegExp[] = [
  /\b(bất động sản|BĐS|chung cư|căn hộ|dự án nhà ở|nhà phố|biệt thự|đất nền|dự án bất động sản|môi giới đất)\b/gi,
  /\b(khoáng sản|khai khoáng|dầu khí|xăng dầu|than đá|thép|xi măng|cụm công nghiệp|khu công nghiệp|hạ tầng cụm|Bầu Đức)\b/gi,
  /\b(chứng khoán|cổ phiếu|VN-Index|IPO|phát hành trái phiếu|niêm yết|thị trường chứng)\b/gi,
  /\b(ngân hàng|tín dụng|lãi suất|Thông tư 06|NHNN|tỷ giá|ngân sách tỉnh)\b/gi,
  /\b(ô tô|xe máy|xe điện|VinFast|Hyundai|Toyota|xe hơi)\b/gi,
  /\b(Huấn Hoa Hồng|nước hoa|khởi tố|bắt giam|tạm giam|lừa đảo|tham ô|hình sự|truy tố|vi phạm quy định về kế toán)\b/gi,
  /\b(sao Việt|showbiz|nghệ sĩ|ca sĩ|diễn viên|người mẫu|hoa hậu|MC nổi tiếng|streamer|YouTuber|TikToker)\b/gi,
];

export function isBlocked(text: string): boolean {
  if (!text) return false;
  for (const p of BLOCKLIST_PATTERNS) {
    p.lastIndex = 0; // stateful global regex
    if (p.test(text)) return true;
  }
  return false;
}

export function hasFnbCoreTag(matched: string[]): boolean {
  return matched.some((t) => FNB_CORE_TAGS.has(t));
}

// User-facing labels for matched_keywords tags. Missing tags fall through to raw tag name.
export const TAG_LABELS_VI: Record<string, string> = {
  venue: 'Quán',
  fnb: 'F&B',
  delivery: 'Delivery',
  ingredient: 'Nguyên liệu',
  brand: 'Thương hiệu',
  rent: 'Mặt bằng',
  regulation: 'Quy định',
  openings: 'Mở/đóng quán',
  trend: 'Xu hướng',
  financial: 'Tài chính',
};

export const TAG_LABELS_EN: Record<string, string> = {
  venue: 'Venue',
  fnb: 'F&B',
  delivery: 'Delivery',
  ingredient: 'Ingredient',
  brand: 'Brand',
  rent: 'Rent',
  regulation: 'Regulation',
  openings: 'Openings',
  trend: 'Trend',
  financial: 'Finance',
};

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
  let out = s.replace(/<[^>]+>/g, '');
  // Named entities
  out = out
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&ldquo;|&rdquo;/g, '"')
    .replace(/&lsquo;|&rsquo;/g, "'")
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–')
    .replace(/&hellip;/g, '…');
  // Numeric entities (decimal + hex) — critical for VN diacritics from CafeF/Vietnambiz feeds
  out = out.replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)));
  out = out.replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCharCode(parseInt(code, 16)));
  return out;
}
