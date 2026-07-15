import type { Metadata } from 'next';
import { defaultLocale, type Locale } from '@/i18n/config';
import { localePath } from '@/i18n/link';
import ChecklistPage from '@/components/home/ChecklistPage';
import PageChrome from '@/components/home/PageChrome';

const BASE_URL = 'https://www.validator.vn';
const VI_PATH = '/checklist-mo-quan';

const META = {
  vi: {
    title: 'Checklist mở quán F&B — 80+ mục pháp lý, thi công, vận hành | Validator.vn',
    description: 'Danh sách 80+ mục cần chuẩn bị khi mở quán cafe, nhà hàng, trà sữa: pháp lý, thi công, thiết bị, vận hành, marketing. Đánh dấu tiến độ ngay trong trình duyệt.',
  },
  en: {
    title: 'F&B Opening Checklist — 80+ legal, build, ops items | Validator.vn',
    description: '80+ item checklist for opening a cafe, restaurant, or bubble tea shop in Vietnam: legal, construction, equipment, operations, marketing. Track progress in your browser.',
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
      <ChecklistPage />
    </PageChrome>
  );
}
