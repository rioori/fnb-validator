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
  const canonical = locale === defaultLocale ? `${BASE_URL}/kien-thuc` : `${BASE_URL}/en/kien-thuc`;

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
      languages: { vi: `${BASE_URL}/kien-thuc`, en: `${BASE_URL}/en/kien-thuc` },
    },
  };
}

function BreadcrumbJsonLd({ locale }: { locale: string }) {
  const isEn = locale === 'en';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: isEn ? 'Home' : 'Trang chủ', item: isEn ? `${BASE_URL}/en` : BASE_URL },
      {
        '@type': 'ListItem',
        position: 2,
        name: isEn ? 'F&B Knowledge' : 'Kiến thức F&B',
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

      <div className="max-w-3xl mx-auto px-4 py-8 max-md:px-3 max-md:py-6">
        {/* Breadcrumb */}
        <nav className="text-[13px] text-text-muted mb-6">
          <Link href={localePath('/', locale as Locale)} className="hover:text-cta transition-colors">
            {dict.knowledge.breadcrumb.home}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-text font-semibold">{dict.knowledge.breadcrumb.knowledge}</span>
        </nav>

        {/* Header */}
        <div className="clay-card-static bg-pastel-mint p-6 mb-6 text-center">
          <Icon name="book" size={48} className="mx-auto mb-2" />
          <h1 className="text-xl font-bold text-text font-[family-name:var(--font-heading)]">
            {dict.knowledge.index.heading}
          </h1>
          <p className="text-[14px] text-text-muted mt-2 max-w-[520px] mx-auto">
            {dict.knowledge.index.desc}
          </p>
        </div>

        {/* Filterable topic listing */}
        <KBListingFilter
          topics={kb}
          categoryLabels={dict.knowledge.categories}
          filterAllLabel={dict.knowledge.section.filterAll}
          locale={locale}
          localePrefixedPaths={localePrefixedPaths}
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
