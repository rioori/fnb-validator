import type { KBTopic, BlogPost } from '@/types';

export interface NewsletterArticle {
  title: string;
  slug: string;
  subtitle: string;
  category: string;
  locale: string;
}

export interface NewsletterBlogPost {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
}

export interface NewsletterContent {
  articles: NewsletterArticle[];
  blogPosts: NewsletterBlogPost[];
  period: { from: string; to: string };
}

/**
 * Collect new KB articles published within the last `days` days.
 */
function recentArticles(
  topics: KBTopic[],
  locale: string,
  cutoff: Date,
): NewsletterArticle[] {
  return topics
    .filter((t) => t.publishDate && new Date(t.publishDate) >= cutoff)
    .map((t) => ({
      title: t.title,
      slug: t.slug,
      subtitle: t.subtitle,
      category: t.category,
      locale,
    }));
}

/**
 * Collect blog posts published within the last `days` days.
 */
function recentBlogPosts(posts: BlogPost[], cutoff: Date): NewsletterBlogPost[] {
  return posts
    .filter((p) => new Date(p.date) >= cutoff)
    .map((p) => ({
      title: p.title,
      slug: p.slug,
      excerpt: p.excerpt,
      date: p.date,
    }));
}

/**
 * Aggregate all recent content for a given locale.
 * @param days Number of days to look back (default 14 for bi-weekly)
 */
export async function aggregateContent(locale: 'vi' | 'en', days = 14): Promise<NewsletterContent> {
  const now = new Date();
  const cutoff = new Date(now.getTime() - days * 24 * 60 * 60 * 1000);
  const from = cutoff.toISOString().slice(0, 10);
  const to = now.toISOString().slice(0, 10);

  // Dynamic imports to avoid bundling all data at build time
  const knowledgeMod = await import(`@/i18n/data/${locale}/knowledge/index`);
  const blogMod = await import(`@/i18n/data/${locale}/blog`);

  const allTopics: KBTopic[] = knowledgeMod.default ?? [];
  const allPosts: BlogPost[] = blogMod.default ?? [];

  const articles = recentArticles(allTopics, locale, cutoff);
  const blogPosts = recentBlogPosts(allPosts, cutoff);

  return { articles, blogPosts, period: { from, to } };
}

/**
 * Check if there's any content worth sending.
 */
export function hasContent(content: NewsletterContent): boolean {
  return content.articles.length > 0 || content.blogPosts.length > 0;
}
