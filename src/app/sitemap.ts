import type { MetadataRoute } from 'next';
import { KNOWLEDGE_BASE, EXPERTS_DATA } from '@/lib/constants';
import { CITIES, MODEL_SLUGS } from '@/lib/seo-data';
import { localePath } from '@/i18n/link';

const BASE_URL = 'https://www.validator.vn';

function entry(
  path: string,
  changeFrequency: 'weekly' | 'monthly',
  priority: number,
): MetadataRoute.Sitemap[number] {
  return {
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
    alternates: {
      languages: {
        vi: `${BASE_URL}${path}`,
        en: `${BASE_URL}${localePath(path || '/', 'en')}`,
      },
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const knowledgePages = KNOWLEDGE_BASE.map((topic) =>
    entry(`/kien-thuc/${topic.slug}`, 'monthly', 0.8),
  );

  const featurePages = [
    '/tinh-nang/phan-tich-tai-chinh',
    '/tinh-nang/ai-advisor',
    '/tinh-nang/kien-thuc',
    '/tinh-nang/checklist',
  ].map((path) => entry(path, 'monthly', 0.85));

  const expertPages = EXPERTS_DATA.map((expert) =>
    entry(`/goc-nhin-chuyen-gia/${expert.slug}`, 'monthly', 0.8),
  );

  // Programmatic SEO: 8 models × 13 cities = 104 pages
  const seoPages = MODEL_SLUGS.flatMap((model) =>
    CITIES.map((city) =>
      entry(`/chi-phi-mo/${model}/tai/${city.slug}`, 'monthly', 0.7),
    ),
  );

  return [
    entry('', 'weekly', 1),
    entry('/fnb', 'weekly', 0.95),
    entry('/kien-thuc', 'monthly', 0.9),
    entry('/goc-nhin-chuyen-gia', 'monthly', 0.9),
    entry('/faq', 'monthly', 0.6),
    entry('/chinh-sach-bao-mat', 'monthly', 0.4),
    entry('/dieu-khoan', 'monthly', 0.4),
    ...featurePages,
    ...knowledgePages,
    ...expertPages,
    ...seoPages,
  ];
}
