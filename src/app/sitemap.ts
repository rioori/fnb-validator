import type { MetadataRoute } from 'next';
import { KNOWLEDGE_BASE } from '@/lib/constants';

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
        en: `${BASE_URL}/en${path}`,
      },
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const knowledgePages = KNOWLEDGE_BASE.map((topic) =>
    entry(`/kien-thuc/${topic.slug}`, 'monthly', 0.8),
  );

  return [
    entry('', 'weekly', 1),
    entry('/fnb', 'weekly', 0.95),
    entry('/kien-thuc', 'monthly', 0.9),
    entry('/about', 'monthly', 0.6),
    ...knowledgePages,
  ];
}
