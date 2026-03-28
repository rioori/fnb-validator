import { redirect } from 'next/navigation';
import type { Metadata } from 'next';
import { getDictionary } from '@/i18n/get-dictionary';
import { defaultLocale, type Locale } from '@/i18n/config';
import { localePath } from '@/i18n/link';

const BASE_URL = 'https://www.validator.vn';

function OrganizationJsonLd({ locale }: { locale: string }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Validator.vn',
    url: BASE_URL,
    description: locale === 'vi'
      ? 'Công cụ thẩm định và tối ưu kinh doanh F&B miễn phí — phân tích tài chính, AI Advisor, kiến thức ngành.'
      : 'Free F&B business validation & optimization tool — financial analysis, AI Advisor, industry knowledge.',
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
  const canonical = locale === defaultLocale ? `${BASE_URL}/fnb` : `${BASE_URL}/en/fnb`;

  return {
    title: dict.landing.meta.title,
    description: dict.landing.meta.description,
    openGraph: {
      title: dict.landing.meta.title,
      description: dict.landing.meta.description,
      url: canonical,
      images: [{ url: `/api/og?locale=${locale}&page=fnb`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      images: [`/api/og?locale=${locale}&page=fnb`],
    },
    alternates: {
      canonical,
      languages: { vi: `${BASE_URL}/fnb`, en: `${BASE_URL}/en/fnb` },
    },
  };
}

export default async function LandingPage({ params }: PageProps) {
  const { locale } = await params;
  redirect(localePath('/fnb', locale as Locale));
}
