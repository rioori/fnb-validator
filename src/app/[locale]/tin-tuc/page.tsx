import type { Metadata } from 'next';
import Link from 'next/link';
import { defaultLocale, type Locale } from '@/i18n/config';
import { localePath } from '@/i18n/link';
import { listPublishedNews } from '@/lib/news-server';

export const revalidate = 300; // 5 min ISR

const BASE_URL = 'https://www.validator.vn';

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';
  const canonical = isEn ? `${BASE_URL}/en/tin-tuc` : `${BASE_URL}/tin-tuc`;
  const title = isEn ? 'F&B News for Operators — Validator.vn' : 'Tin tức F&B cho chủ quán — Validator.vn';
  const description = isEn
    ? 'Curated F&B news with operator commentary and instant profit calculators. Weekly briefs plus monthly deep reports.'
    : 'Tin F&B qua góc nhìn người mở quán, kèm công cụ tính tác động ngay. Weekly brief + monthly deep report.';

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

export default async function NewsListingPage({ params }: PageProps) {
  const { locale } = await params;
  const isEn = locale === 'en';
  const posts = await listPublishedNews(isEn ? 'en' : 'vi', 40);

  const heading = isEn ? 'F&B Operator Brief' : 'Bản tin F&B cho chủ quán';
  const desc = isEn
    ? 'Weekly curated news with operator angle. Every story links to a Validator calculator so you can measure the impact on your shop.'
    : 'Tin F&B tổng hợp mỗi tuần, kèm góc nhìn người mở quán. Mỗi tin có link công cụ tính để bạn đo tác động lên quán mình.';

  const dateFmt = new Intl.DateTimeFormat(isEn ? 'en-US' : 'vi-VN', { year: 'numeric', month: 'short', day: 'numeric' });

  return (
    <div className="max-w-3xl mx-auto py-6">
      <div className="clay-card-static bg-pastel-mint p-6 mb-6 text-center">
        <div className="text-[11px] font-bold uppercase tracking-widest text-emerald-700 mb-1">
          {isEn ? 'Since Aug 2026' : 'Từ Tháng 8, 2026'}
        </div>
        <h1 className="text-2xl font-bold text-text font-[family-name:var(--font-heading)]">{heading}</h1>
        <p className="text-[14px] text-text-muted mt-2 max-w-[540px] mx-auto">{desc}</p>
      </div>

      {posts.length === 0 && (
        <div className="clay-card-static bg-white p-6 text-center text-text-muted">
          {isEn ? 'No published posts yet. Check back soon.' : 'Chưa có bài. Quay lại sau nhé.'}
        </div>
      )}

      <div className="space-y-4">
        {posts.map((p) => {
          const href = isEn ? `/en/tin-tuc/${p.slug}` : `/tin-tuc/${p.slug}`;
          return (
            <Link key={p.id} href={href} className="clay-card-static bg-white p-0 block hover:shadow-[3px_3px_0_var(--color-text)] transition-shadow overflow-hidden">
              {p.cover_image_url && (
                <div className="aspect-[16/9] bg-slate-100 overflow-hidden border-b-2 border-slate-900">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.cover_image_url} alt="" className="w-full h-full object-cover" loading="lazy" />
                </div>
              )}
              <div className="p-5">
                <div className="flex items-center gap-3 text-[11px] text-text-muted mb-2">
                  <span className="uppercase font-bold tracking-wider text-emerald-700">{p.source_name}</span>
                  <span>·</span>
                  <span>{dateFmt.format(new Date(p.published_at))}</span>
                </div>
                <h2 className="text-lg font-bold text-text mb-2">{p.title}</h2>
                <p className="text-[14px] text-text-muted leading-relaxed">{p.summary.slice(0, 180)}{p.summary.length > 180 ? '…' : ''}</p>
                {p.operator_angle && (
                  <div className="mt-3 text-[13px] text-emerald-800 border-l-4 border-emerald-500 pl-3 italic">
                    {isEn ? 'Operator angle:' : 'Góc nhìn chủ quán:'} {p.operator_angle}
                  </div>
                )}
              </div>
            </Link>
          );
        })}
      </div>

      <div className="text-center mt-8">
        <Link href={localePath('/fnb', locale as Locale)} className="clay-btn clay-btn-primary text-[14px] px-6 py-2.5 inline-flex items-center gap-2">
          {isEn ? 'Try the wizard →' : 'Thử tính quán bạn →'}
        </Link>
      </div>

      {/* JSON-LD ItemList for the news listing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            itemListElement: posts.slice(0, 20).map((p, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              url: `${BASE_URL}${isEn ? '/en/tin-tuc/' : '/tin-tuc/'}${p.slug}`,
              name: p.title,
            })),
          }),
        }}
      />
    </div>
  );
}

// Silence lint for unused defaultLocale — kept for symmetry with kien-thuc
void defaultLocale;
