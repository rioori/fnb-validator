import type { Metadata } from 'next';
import { getDictionary } from '@/i18n/get-dictionary';
import { defaultLocale, type Locale } from '@/i18n/config';
import LandingHero from '@/components/home/LandingHero';

const BASE_URL = 'https://www.validator.vn';

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const canonical = locale === defaultLocale ? BASE_URL : `${BASE_URL}/en`;

  return {
    title: dict.landing.meta.title,
    description: dict.landing.meta.description,
    alternates: {
      canonical,
      languages: { vi: BASE_URL, en: `${BASE_URL}/en` },
    },
  };
}

export default function LandingPage() {
  return <LandingHero />;
}
