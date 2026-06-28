import type { Metadata } from 'next';
import { defaultLocale, type Locale } from '@/i18n/config';
import { localePath } from '@/i18n/link';
import SurvivalScoreShell from './SurvivalScoreShell';

const BASE_URL = 'https://www.validator.vn';
const VI_PATH = '/survival-score';

const META = {
  vi: {
    title: 'Survival Score — Dự đoán quán F&B của bạn sẽ sống bao lâu?',
    description: 'Tính Survival Score 1-10 cho quán F&B của bạn dựa trên 8 yếu tố quan trọng (vốn dự trữ, rent ratio, food cost, menu size...). Dựa data thực tế VN. Miễn phí.',
  },
  en: {
    title: 'F&B Survival Score — Will your shop survive Year 1?',
    description: 'Calculate 1-10 Survival Score for your F&B shop based on 8 critical factors (cash reserves, rent ratio, food cost, menu size...). Based on real Vietnam data. Free.',
  },
} as const;

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const m = META[locale === 'en' ? 'en' : 'vi'];
  const canonical = locale === defaultLocale ? `${BASE_URL}${VI_PATH}` : `${BASE_URL}${localePath(VI_PATH, 'en' as Locale)}`;
  return {
    title: m.title,
    description: m.description,
    openGraph: {
      title: m.title,
      description: m.description,
      url: canonical,
      images: [{ url: `/api/og?locale=${locale}&page=feature&title=${encodeURIComponent(m.title)}&subtitle=${encodeURIComponent(m.description)}`, width: 1200, height: 630 }],
    },
    alternates: {
      canonical,
      languages: { vi: `${BASE_URL}${VI_PATH}`, en: `${BASE_URL}${localePath(VI_PATH, 'en' as Locale)}` },
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  return <SurvivalScoreShell locale={locale} />;
}
