import type { Metadata } from 'next';
import { Montserrat, Roboto } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { notFound } from 'next/navigation';
import { locales, defaultLocale, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';
import { LocaleProvider } from '@/i18n/LocaleProvider';
import LocaleSwitcher from '@/components/ui/LocaleSwitcher';
import '../globals.css';

const BASE_URL = 'https://www.validator.vn';

const montserrat = Montserrat({
  subsets: ['latin', 'latin-ext', 'vietnamese'],
  variable: '--font-heading',
  weight: ['400', '500', '600', '700', '800'],
});

const roboto = Roboto({
  subsets: ['latin', 'latin-ext', 'vietnamese'],
  variable: '--font-body',
  weight: ['400', '500', '700'],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const canonical = locale === defaultLocale ? BASE_URL : `${BASE_URL}/en`;

  return {
    title: dict.landing.meta.title,
    description: dict.landing.meta.description,
    icons: { icon: '/logo.png', apple: '/logo.png' },
    alternates: {
      canonical,
      languages: { vi: BASE_URL, en: `${BASE_URL}/en` },
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  const dict = await getDictionary(locale as Locale);

  return (
    <html lang={locale}>
      <body className={`${montserrat.variable} ${roboto.variable} antialiased`}>
        <LocaleProvider locale={locale as Locale} dictionary={dict}>
          <LocaleSwitcher />
          {children}
        </LocaleProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
