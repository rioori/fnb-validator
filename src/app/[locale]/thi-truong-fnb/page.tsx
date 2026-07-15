import type { Metadata } from 'next';
import { defaultLocale, type Locale } from '@/i18n/config';
import { localePath } from '@/i18n/link';
import TrendsPage from '@/components/home/TrendsPage';
import PageChrome from '@/components/home/PageChrome';

const BASE_URL = 'https://www.validator.vn';
const VI_PATH = '/thi-truong-fnb';

const META = {
  vi: {
    title: 'Thị trường F&B Việt Nam 2026 — Số liệu & Xu hướng | Validator.vn',
    description: 'Cập nhật số liệu ngành F&B Việt Nam: quy mô thị trường, xu hướng tiêu dùng, benchmark cost, mô hình mới nổi 2025-2026. Dữ liệu để chủ quán ra quyết định.',
  },
  en: {
    title: 'Vietnam F&B Market 2026 — Data & Trends | Validator.vn',
    description: 'Vietnam F&B industry data: market size, consumer trends, cost benchmarks, emerging models 2025-2026. Data for owners to make decisions.',
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
      <TrendsPage />
    </PageChrome>
  );
}
