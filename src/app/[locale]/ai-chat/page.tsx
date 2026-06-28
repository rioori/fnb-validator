import type { Metadata } from 'next';
import { getDictionary } from '@/i18n/get-dictionary';
import { defaultLocale, type Locale } from '@/i18n/config';
import { localePath } from '@/i18n/link';
import GuestChatShell from './GuestChatShell';

const BASE_URL = 'https://www.validator.vn';
const VI_PATH = '/ai-chat';

const META = {
  vi: {
    title: 'AI Tư vấn F&B miễn phí — Validator.vn',
    description: 'Hỏi AI chuyên gia F&B Việt Nam mọi câu hỏi về kinh doanh quán cafe, nhà hàng, trà sữa. Free 5 câu/ngày, không cần đăng ký.',
  },
  en: {
    title: 'Free F&B AI Advisor — Validator.vn',
    description: 'Ask Vietnam F&B AI expert anything about running a cafe, restaurant, or bubble tea shop. Free 5 questions/day, no signup needed.',
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
    twitter: {
      card: 'summary_large_image',
    },
    alternates: {
      canonical,
      languages: { vi: `${BASE_URL}${VI_PATH}`, en: `${BASE_URL}${localePath(VI_PATH, 'en')}` },
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  await getDictionary(locale as Locale); // ensure dict loaded
  return <GuestChatShell locale={locale} />;
}
