import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import ExpertListingFilter from '@/components/experts/ExpertListingFilter';
import { getDictionary } from '@/i18n/get-dictionary';
import { defaultLocale, type Locale } from '@/i18n/config';
import { localePath } from '@/i18n/link';
import type { Expert } from '@/types';
import EXPERTS_VI from '@/i18n/data/vi/experts';
import EXPERTS_EN from '@/i18n/data/en/experts';

function getExperts(locale: string): Expert[] {
  return locale === 'en' ? EXPERTS_EN : EXPERTS_VI;
}

const BASE_URL = 'https://www.validator.vn';

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const canonical = locale === defaultLocale
    ? `${BASE_URL}/goc-nhin-chuyen-gia`
    : `${BASE_URL}/en/goc-nhin-chuyen-gia`;

  return {
    title: dict.experts.meta.title,
    description: dict.experts.meta.description,
    openGraph: {
      title: dict.experts.meta.title,
      description: dict.experts.meta.description,
      url: canonical,
      type: 'website',
      images: [{ url: `/api/og?locale=${locale}&page=experts`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      images: [`/api/og?locale=${locale}&page=experts`],
    },
    alternates: {
      canonical,
      languages: {
        vi: `${BASE_URL}/goc-nhin-chuyen-gia`,
        en: `${BASE_URL}/en/goc-nhin-chuyen-gia`,
      },
    },
  };
}

function BreadcrumbJsonLd({ locale }: { locale: string }) {
  const isEn = locale === 'en';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: isEn ? 'Home' : 'Trang chủ',
        item: isEn ? `${BASE_URL}/en/fnb` : `${BASE_URL}/fnb`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: isEn ? 'Expert Perspectives' : 'Góc nhìn chuyên gia',
        item: isEn ? `${BASE_URL}/en/goc-nhin-chuyen-gia` : `${BASE_URL}/goc-nhin-chuyen-gia`,
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

export default async function ExpertsPage({ params }: PageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const experts = getExperts(locale);

  // Pre-compute locale-prefixed paths for the client component
  const localePrefixedPaths: Record<string, string> = {};
  for (const expert of experts) {
    localePrefixedPaths[expert.slug] = localePath(`/goc-nhin-chuyen-gia/${expert.slug}`, locale as Locale);
  }

  return (
    <>
      <BreadcrumbJsonLd locale={locale} />

      <div className="py-2 max-md:py-0">
        {/* Header — compact */}
        <div className="mb-5 text-center">
          <h1 className="text-lg font-bold text-text font-[family-name:var(--font-heading)]">
            {dict.experts.index.heading}
          </h1>
          <p className="text-[13px] text-text-muted mt-1">
            {dict.experts.index.desc}
          </p>
        </div>

        {/* Filterable expert listing */}
        <ExpertListingFilter
          experts={experts}
          categoryLabels={dict.experts.categories}
          filterAllLabel={dict.experts.section.filterAll}
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
            {dict.experts.cta.validateIdea}
          </Link>
        </div>
      </div>
    </>
  );
}
