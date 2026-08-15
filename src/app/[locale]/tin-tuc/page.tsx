import type { Metadata } from 'next';
import Link from 'next/link';
import { type Locale } from '@/i18n/config';
import { localePath } from '@/i18n/link';
import { listTickerItems } from '@/lib/news-server';
import TickerList from '@/components/news/TickerList';

export const revalidate = 300;

const BASE_URL = 'https://www.validator.vn';

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';
  const canonical = isEn ? `${BASE_URL}/en/tin-tuc` : `${BASE_URL}/tin-tuc`;
  const title = isEn ? 'F&B News Ticker — Validator.vn' : 'Tin F&B mỗi ngày — Validator.vn';
  const description = isEn
    ? 'Daily curated F&B news for Vietnamese restaurant operators. Aggregated from CafeF, VnExpress, Vietnambiz, Tuổi Trẻ and more.'
    : 'Tin F&B chọn lọc mỗi ngày cho chủ quán Việt Nam. Tổng hợp từ CafeF, VnExpress, Vietnambiz, Tuổi Trẻ, VNA.';

  return {
    title,
    description,
    openGraph: { title, description, url: canonical, type: 'website' },
    twitter: { card: 'summary_large_image' },
    alternates: {
      canonical,
      languages: { vi: `${BASE_URL}/tin-tuc`, en: `${BASE_URL}/en/tin-tuc` },
    },
  };
}

export default async function NewsTickerPage({ params }: PageProps) {
  const { locale } = await params;
  const isEn = locale === 'en';
  const items = await listTickerItems(50);

  const heading = isEn ? 'F&B News Ticker' : 'Tin F&B mỗi ngày';
  const desc = isEn
    ? 'Curated headlines from Vietnam\'s top business publications. Click any headline to read the full story at the source. Updated 3× daily.'
    : 'Tin F&B chọn lọc từ các nguồn tin uy tín Việt Nam. Bấm tin bất kỳ để đọc bài đầy đủ tại báo gốc. Cập nhật 3 lần mỗi ngày.';

  return (
    <div className="max-w-3xl mx-auto py-6">
      <div className="clay-card-static bg-pastel-yellow p-6 mb-4 text-center">
        <div className="text-[11px] font-bold uppercase tracking-widest text-emerald-700 mb-1">
          {isEn ? 'Curated daily · Aug 2026' : 'Cập nhật mỗi ngày · Tháng 8/2026'}
        </div>
        <h1 className="text-2xl font-bold text-text font-[family-name:var(--font-heading)]">{heading}</h1>
        <p className="text-[13px] text-text-muted mt-2 max-w-[560px] mx-auto">{desc}</p>
      </div>

      {items.length === 0 ? (
        <div className="clay-card-static bg-white p-6 text-center text-text-muted">
          {isEn ? 'No news yet. Check back soon.' : 'Chưa có tin. Quay lại sau nhé.'}
        </div>
      ) : (
        <TickerList items={items} locale={isEn ? 'en' : 'vi'} />
      )}

      <div className="text-center mt-8">
        <Link href={localePath('/fnb', locale as Locale)} className="clay-btn clay-btn-primary text-[14px] px-6 py-2.5 inline-flex items-center gap-2">
          {isEn ? 'Try the wizard →' : 'Thử tính quán bạn →'}
        </Link>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            itemListElement: items.slice(0, 20).map((it, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              url: it.source_url,
              name: it.title,
            })),
          }),
        }}
      />
    </div>
  );
}
