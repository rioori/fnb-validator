import type { Metadata } from 'next';
import { getDictionary } from '@/i18n/get-dictionary';
import { defaultLocale, type Locale } from '@/i18n/config';

const BASE_URL = 'https://www.validator.vn';

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const canonical = locale === defaultLocale ? `${BASE_URL}/fnb` : `${BASE_URL}/en/fnb`;

  return {
    title: dict.fnbHome.meta.title,
    description: dict.fnbHome.meta.description,
    alternates: {
      canonical,
      languages: { vi: `${BASE_URL}/fnb`, en: `${BASE_URL}/en/fnb` },
    },
  };
}

export default function FnbLayout({ children }: LayoutProps) {
  return children;
}
