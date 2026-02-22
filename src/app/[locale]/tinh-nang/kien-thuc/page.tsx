import type { Metadata } from 'next';
import { getDictionary } from '@/i18n/get-dictionary';
import { defaultLocale, type Locale } from '@/i18n/config';
import FeaturePage from '@/components/features/FeaturePage';

const BASE_URL = 'https://www.validator.vn';
const SLUG = 'kien-thuc';

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const meta = dict.features.knowledgeBase.meta;
  const canonical = locale === defaultLocale ? `${BASE_URL}/tinh-nang/${SLUG}` : `${BASE_URL}/en/tinh-nang/${SLUG}`;

  return {
    title: meta.title,
    description: meta.description,
    openGraph: { title: meta.title, description: meta.description, url: canonical },
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
      feature={dict.features.knowledgeBase}
      breadcrumb={dict.features.breadcrumb}
      verticalCta={dict.features.verticalCta}
      verticals={dict.features.verticals}
      locale={locale}
    />
  );
}
