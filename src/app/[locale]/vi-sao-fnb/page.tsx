import type { Metadata } from 'next';
import { defaultLocale, type Locale } from '@/i18n/config';
import { localePath } from '@/i18n/link';
import WhyFnBPage from '@/components/home/WhyFnBPage';
import PageChrome from '@/components/home/PageChrome';

const BASE_URL = 'https://www.validator.vn';
const VI_PATH = '/vi-sao-fnb';

const META = {
  vi: {
    title: 'Vì sao F&B? — Thị trường $32 tỷ, 100 triệu dân | Validator.vn',
    description: 'Vì sao F&B Việt Nam là cơ hội — và cũng là ngành khắc nghiệt bậc nhất. Số liệu thị trường, động lực tăng trưởng, tỉ lệ thất bại. Đọc trước khi mở quán.',
  },
  en: {
    title: 'Why F&B? — $32B market, 100M population | Validator.vn',
    description: 'Why Vietnam F&B is a huge opportunity — and one of the toughest industries. Market data, growth drivers, failure rates. Read before you open.',
  },
} as const;

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const m = META[locale === 'en' ? 'en' : 'vi'];
  const canonical = locale === defaultLocale ? `${BASE_URL}${VI_PATH}` : `${BASE_URL}${localePath(VI_PATH, 'en')}`;

  return {
    title: m.title,
    description: m.description,
    openGraph: {
      title: m.title,
      description: m.description,
      url: canonical,
      images: [{ url: `/api/og?locale=${locale}&page=feature&title=${encodeURIComponent(m.title)}&subtitle=${encodeURIComponent(m.description)}`, width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image' },
    alternates: {
      canonical,
      languages: { vi: `${BASE_URL}${VI_PATH}`, en: `${BASE_URL}${localePath(VI_PATH, 'en')}` },
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  return (
    <PageChrome locale={locale}>
      <WhyFnBPage />
    </PageChrome>
  );
}
