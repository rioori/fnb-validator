import type { Metadata } from 'next';
import { getDictionary } from '@/i18n/get-dictionary';
import { defaultLocale, type Locale } from '@/i18n/config';
import LandingHero from '@/components/home/LandingHero';

const BASE_URL = 'https://www.validator.vn';

function OrganizationJsonLd({ locale }: { locale: string }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Validator.vn',
    url: BASE_URL,
    description: locale === 'vi'
      ? 'Công cụ thẩm định và tối ưu kinh doanh miễn phí — phân tích tài chính, AI Advisor, kiến thức ngành.'
      : 'Free business validation & optimization tool — financial analysis, AI Advisor, industry knowledge.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'VND' },
    author: {
      '@type': 'Person',
      name: 'Khang Pham',
      url: 'https://linkedin.com/in/phamdinhkhang',
    },
    inLanguage: [locale === 'vi' ? 'vi-VN' : 'en-US'],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const canonical = locale === defaultLocale ? BASE_URL : `${BASE_URL}/en`;

  return {
    title: dict.landing.meta.title,
    description: dict.landing.meta.description,
    openGraph: {
      title: dict.landing.meta.title,
      description: dict.landing.meta.description,
      url: canonical,
      images: [{ url: `/api/og?locale=${locale}&page=landing`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      images: [`/api/og?locale=${locale}&page=landing`],
    },
    alternates: {
      canonical,
      languages: { vi: BASE_URL, en: `${BASE_URL}/en` },
    },
  };
}

export default async function LandingPage({ params }: PageProps) {
  const { locale } = await params;
  return (
    <>
      <OrganizationJsonLd locale={locale} />
      <LandingHero />
    </>
  );
}
