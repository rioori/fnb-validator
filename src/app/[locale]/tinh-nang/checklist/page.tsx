import type { Metadata } from 'next';
import { getDictionary } from '@/i18n/get-dictionary';
import { defaultLocale, type Locale } from '@/i18n/config';
import FeaturePage from '@/components/features/FeaturePage';

const BASE_URL = 'https://www.validator.vn';
const SLUG = 'checklist';

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const meta = dict.features.checklist.meta;
  const canonical = locale === defaultLocale ? `${BASE_URL}/tinh-nang/${SLUG}` : `${BASE_URL}/en/tinh-nang/${SLUG}`;

  const ogImage = `/api/og?locale=${locale}&page=feature&title=${encodeURIComponent(meta.title)}&subtitle=${encodeURIComponent(meta.description)}`;

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonical,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      images: [ogImage],
    },
    alternates: {
      canonical,
      languages: { vi: `${BASE_URL}/tinh-nang/${SLUG}`, en: `${BASE_URL}/en/tinh-nang/${SLUG}` },
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <FeaturePage
      feature={dict.features.checklist}
      breadcrumb={dict.features.breadcrumb}
      verticalCta={dict.features.verticalCta}
      verticals={dict.features.verticals}
      locale={locale}
    />
  );
}
