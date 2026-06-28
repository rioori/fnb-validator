import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import KBListingFilter from '@/components/knowledge/KBListingFilter';
import { getDictionary } from '@/i18n/get-dictionary';
import { defaultLocale, type Locale } from '@/i18n/config';
import { localePath } from '@/i18n/link';
import type { KBTopic } from '@/types';
import KNOWLEDGE_BASE_VI from '@/i18n/data/vi/knowledge';
import KNOWLEDGE_BASE_EN from '@/i18n/data/en/knowledge';

function getKB(locale: string): KBTopic[] {
  return locale === 'en' ? KNOWLEDGE_BASE_EN : KNOWLEDGE_BASE_VI;
}

const BASE_URL = 'https://www.validator.vn';

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const canonical = locale === defaultLocale ? `${BASE_URL}/kien-thuc` : `${BASE_URL}${localePath('/kien-thuc', 'en')}`;

  return {
    title: dict.knowledge.meta.title,
    description: dict.knowledge.meta.description,
    openGraph: {
      title: dict.knowledge.meta.title,
      description: dict.knowledge.meta.description,
      url: canonical,
      type: 'website',
      images: [{ url: `/api/og?locale=${locale}&page=knowledge`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      images: [`/api/og?locale=${locale}&page=knowledge`],
    },
    alternates: {
      canonical,
      languages: { vi: `${BASE_URL}/kien-thuc`, en: `${BASE_URL}${localePath('/kien-thuc', 'en')}` },
    },
  };
}

function BreadcrumbJsonLd({ locale }: { locale: string }) {
  const isEn = locale === 'en';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: isEn ? 'Home' : 'Trang chủ', item: isEn ? `${BASE_URL}/en/fnb` : `${BASE_URL}/fnb` },
      {
        '@type': 'ListItem',
        position: 2,
        name: isEn ? 'Knowledge Library' : 'Thư viện kiến thức',
        item: isEn ? `${BASE_URL}/en/kien-thuc` : `${BASE_URL}/kien-thuc`,
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function KienThucPage({ params }: PageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const kb = getKB(locale);

  // Pre-compute locale-prefixed paths for the client component
  const localePrefixedPaths: Record<string, string> = {};
  for (const topic of kb) {
    localePrefixedPaths[topic.slug] = localePath(`/kien-thuc/${topic.slug}`, locale as Locale);
  }

  return (
    <>
      <BreadcrumbJsonLd locale={locale} />

      <div className="py-2 max-md:py-0">
        {/* Header */}
        <div className="clay-card-static bg-pastel-mint p-6 mb-4 text-center">
          <Icon name="book" size={48} className="mx-auto mb-2" />
          <h1 className="text-xl font-bold text-text font-[family-name:var(--font-heading)]">
            {dict.knowledge.index.heading}
          </h1>
          <p className="text-[14px] text-text-muted mt-2 max-w-[520px] mx-auto">
            {dict.knowledge.index.desc}
          </p>
        </div>

        {/* Topical hubs — quick entry to mega-pages */}
        <div className="clay-card-static bg-white p-4 mb-4">
          <div className="text-[11px] font-bold uppercase tracking-wider text-text-muted mb-2">
            {locale === 'en' ? 'Quick guides by business type' : 'Hướng dẫn nhanh theo loại quán'}
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href={localePath('/chu-de/kinh-doanh-cafe', locale as Locale)}
              className="clay-pill bg-pastel-cream !text-[12px] !py-1.5 px-3 hover:shadow-[2px_2px_0_var(--color-text)] transition-shadow"
            >
              ☕ {locale === 'en' ? 'Coffee Business' : 'Kinh doanh cà phê'}
            </Link>
            <Link
              href={localePath('/chu-de/kinh-doanh-nha-hang', locale as Locale)}
              className="clay-pill bg-pastel-cream !text-[12px] !py-1.5 px-3 hover:shadow-[2px_2px_0_var(--color-text)] transition-shadow"
            >
              🍽️ {locale === 'en' ? 'Restaurant Business' : 'Kinh doanh nhà hàng'}
            </Link>
          </div>
        </div>

        {/* Filterable topic listing */}
        <KBListingFilter
          topics={kb}
          categoryLabels={dict.knowledge.categories}
          filterAllLabel={dict.knowledge.section.filterAll}
          locale={locale}
          localePrefixedPaths={localePrefixedPaths}
          featuredBadge={dict.knowledge.featured.badge}
          featuredReadNow={dict.knowledge.featured.readNow}
          clusterIntros={dict.knowledge.clusterIntros}
        />

        {/* CTA */}
        <div className="text-center mt-8">
          <Link
            href={localePath('/fnb', locale as Locale)}
            className="clay-btn clay-btn-primary text-[14px] px-6 py-2.5 inline-flex items-center gap-2"
          >
            <Icon
              name="wizard"
              size={18}
              className="!border-0 !shadow-none !bg-transparent"
            />
            {dict.knowledge.cta.validateIdea}
          </Link>
        </div>
      </div>
    </>
  );
}
