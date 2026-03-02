import type { Metadata } from 'next';
import { Montserrat, Roboto } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleAnalytics } from '@next/third-parties/google';
import { notFound } from 'next/navigation';
import { locales, defaultLocale, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';
import { LocaleProvider } from '@/i18n/LocaleProvider';
import LocaleSwitcher from '@/components/ui/LocaleSwitcher';
import GlobalNav from '@/components/ui/GlobalNav';
import UTMCapture from '@/components/ui/UTMCapture';
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
    verification: {
      google: 'jUFdkkhA1xsBLBo7HHmC4jIJbQymBh443LKjsUz9SM0',
      other: { 'msvalidate.01': '4A78EE795BC9BA3BF3BD19F3D74D642B' },
    },
    icons: {
      icon: [
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      ],
      apple: '/apple-touch-icon.png',
    },
    metadataBase: new URL(BASE_URL),
    openGraph: {
      title: dict.landing.meta.title,
      description: dict.landing.meta.description,
      url: canonical,
      siteName: 'Validator.vn',
      images: [{ url: `/api/og?locale=${locale}&page=landing`, width: 1200, height: 630 }],
      locale: locale === 'vi' ? 'vi_VN' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.landing.meta.title,
      description: dict.landing.meta.description,
      images: [`/api/og?locale=${locale}&page=landing`],
    },
    alternates: {
      canonical,
      languages: { vi: BASE_URL, en: `${BASE_URL}/en` },
    },
  };
}

function GlobalJsonLd({ locale }: { locale: string }) {
  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Validator.vn',
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    description: locale === 'vi'
      ? 'Công cụ thẩm định và tối ưu kinh doanh miễn phí cho doanh nghiệp Việt Nam.'
      : 'Free business validation & optimization tool for Vietnamese businesses.',
    founder: {
      '@type': 'Person',
      name: 'Khang Pham',
      url: 'https://linkedin.com/in/phamdinhkhang',
    },
    sameAs: [
      'https://www.facebook.com/people/Validatorvn/61588208866760/',
      'https://linkedin.com/company/validator-vn',
    ],
  };
  const site = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Validator.vn',
    url: BASE_URL,
    inLanguage: [locale === 'vi' ? 'vi-VN' : 'en-US'],
    potentialAction: {
      '@type': 'SearchAction',
      target: `${BASE_URL}${locale === 'vi' ? '' : '/en'}/kien-thuc?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(site) }} />
    </>
  );
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  const dict = await getDictionary(locale as Locale);

  return (
    <html lang={locale}>
      <body className={`${montserrat.variable} ${roboto.variable} antialiased`}>
        <GlobalJsonLd locale={locale} />
        <LocaleProvider locale={locale as Locale} dictionary={dict}>
          <GlobalNav />
          <LocaleSwitcher />
          <UTMCapture />
          {children}
        </LocaleProvider>
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
