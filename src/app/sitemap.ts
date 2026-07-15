import type { MetadataRoute } from 'next';
import { KNOWLEDGE_BASE, EXPERTS_DATA } from '@/lib/constants';
import { CITIES, MODEL_SLUGS } from '@/lib/seo-data';
import { TOPICS } from '@/lib/topics';
import { localePath } from '@/i18n/link';
import COMPARISON_ARTICLES from '@/i18n/data/vi/comparison/articles';
import BLOG_POSTS from '@/i18n/data/vi/blog';
import OWNER_STORIES from '@/i18n/data/vi/stories';

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

  // Topical hubs (high authority pages — link to articles + experts + cities)
  const topicPages = TOPICS.map((t) => entry(`/chu-de/${t.slug}`, 'weekly', 0.92));

  // Comparison pages (so-sanh) — long-tail SEO for "X vs Y" queries
  const comparisonPages = COMPARISON_ARTICLES.map((a) =>
    entry(`/so-sanh/${a.slug}`, 'monthly', 0.75),
  );

  // Blog posts — editorial content
  const blogPages = BLOG_POSTS.map((p) =>
    entry(`/blog/${p.slug}`, 'monthly', 0.7),
  );

  // Owner stories — post-launch operator case studies
  const storyPages = OWNER_STORIES.map((s) =>
    entry(`/cau-chuyen-chu-quan/${s.slug}`, 'monthly', 0.85),
  );

  return [
    entry('', 'weekly', 1),
    entry('/fnb', 'weekly', 0.95),
    entry('/survival-score', 'monthly', 0.9),
    entry('/ai-chat', 'monthly', 0.85),
    entry('/kien-thuc', 'monthly', 0.9),
    entry('/goc-nhin-chuyen-gia', 'monthly', 0.9),
    entry('/cau-chuyen-chu-quan', 'weekly', 0.9),
    entry('/thi-truong-fnb', 'monthly', 0.85),
    entry('/checklist-mo-quan', 'monthly', 0.8),
    entry('/vi-sao-fnb', 'monthly', 0.75),
    entry('/so-sanh', 'monthly', 0.85),
    entry('/blog', 'monthly', 0.75),
    entry('/about', 'monthly', 0.7),
    entry('/doi-tac', 'monthly', 0.6),
    entry('/faq', 'monthly', 0.6),
    entry('/chinh-sach-bao-mat', 'monthly', 0.4),
    entry('/dieu-khoan', 'monthly', 0.4),
    ...featurePages,
    ...topicPages,
    ...knowledgePages,
    ...expertPages,
    ...storyPages,
    ...comparisonPages,
    ...blogPages,
    ...seoPages,
  ];
}
