import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import KBSectionRenderer from '@/components/knowledge/KBSectionRenderer';
import Icon from '@/components/ui/Icon';
import { getDictionary } from '@/i18n/get-dictionary';
import { defaultLocale, type Locale } from '@/i18n/config';
import { localePath } from '@/i18n/link';
import type { BlogPost } from '@/types';
import PageTracker from '@/components/ui/PageTracker';
import ShareBlock from '@/components/ui/ShareBlock';
import BLOG_VI from '@/i18n/data/vi/blog';
import BLOG_EN from '@/i18n/data/en/blog';

function getBlog(locale: string): BlogPost[] {
  return locale === 'en' ? BLOG_EN : BLOG_VI;
}

/** All unique slugs across both locales (they share the same slugs) */
function getAllBlogSlugs(): string[] {
  return BLOG_VI.map((p) => p.slug);
}

const BASE_URL = 'https://www.validator.vn';

// ── SSG: generate all blog post pages at build time ──
export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

// ── Per-page metadata ──
type PageProps = { params: Promise<{ locale: string; slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const posts = getBlog(locale);
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};

  const dict = await getDictionary(locale as Locale);
  const title = `${post.title} — ${dict.blog.title}`;
  const description = post.excerpt;
  const viUrl = `${BASE_URL}/blog/${post.slug}`;
  const enUrl = `${BASE_URL}/en/blog/${post.slug}`;
  const canonical = locale === defaultLocale ? viUrl : enUrl;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url: canonical,
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
    },
    alternates: {
      canonical,
      languages: { vi: viUrl, en: enUrl },
    },
  };
}

// ── Helpers ──
function formatDate(dateStr: string, locale: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString(locale === 'en' ? 'en-US' : 'vi-VN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function getPrevNext(slug: string, locale: string): { prev: BlogPost | null; next: BlogPost | null } {
  const posts = getBlog(locale);
  const idx = posts.findIndex((p) => p.slug === slug);
  return {
    prev: idx > 0 ? posts[idx - 1] : null,
    next: idx < posts.length - 1 ? posts[idx + 1] : null,
  };
}

function getRelatedPosts(slug: string, tags: string[], locale: string): BlogPost[] {
  const posts = getBlog(locale);
  return posts
    .filter((p) => p.slug !== slug && p.tags.some((t) => tags.includes(t)))
    .slice(0, 2);
}

// ── JSON-LD ──
function ArticleJsonLd({ post, locale }: { post: BlogPost; locale: string }) {
  const prefix = locale === defaultLocale ? '' : '/en';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { '@type': 'Person', name: post.author, url: 'https://linkedin.com/in/phamdinhkhang' },
    publisher: { '@type': 'Organization', name: 'Validator.vn', url: BASE_URL },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}${prefix}/blog/${post.slug}`,
    },
    inLanguage: locale,
    keywords: post.tags.join(', '),
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  );
}

function BreadcrumbJsonLd({ post, locale, dict }: { post: BlogPost; locale: string; dict: { blog: { breadcrumb: { home: string; blog: string } } } }) {
  const prefix = locale === defaultLocale ? '' : '/en';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: dict.blog.breadcrumb.home, item: `${BASE_URL}${prefix}/fnb` },
      { '@type': 'ListItem', position: 2, name: dict.blog.breadcrumb.blog, item: `${BASE_URL}${prefix}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${BASE_URL}${prefix}/blog/${post.slug}` },
    ],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  );
}

// ── Page Component ──
export default async function BlogPostPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const dict = await getDictionary(locale as Locale);
  const posts = getBlog(locale);
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const { prev, next } = getPrevNext(slug, locale);
  const related = getRelatedPosts(slug, post.tags, locale);

  return (
    <>
      <PageTracker event="blog_read" data={{ slug: post.slug }} />
      <ArticleJsonLd post={post} locale={locale} />
      <BreadcrumbJsonLd post={post} locale={locale} dict={dict} />

      <article className="py-2 max-md:py-0">
        {/* Breadcrumbs */}
        <nav className="text-[13px] text-text-muted mb-6">
          <Link href={localePath('/fnb', locale as Locale)} className="hover:text-cta transition-colors">{dict.blog.breadcrumb.home}</Link>
          <span className="mx-2">/</span>
          <Link href={localePath('/blog', locale as Locale)} className="hover:text-cta transition-colors">{dict.blog.breadcrumb.blog}</Link>
          <span className="mx-2">/</span>
          <span className="text-text font-semibold">{post.title}</span>
        </nav>

        {/* Post Header */}
        <div className="clay-card-static bg-pastel-mint p-6 mb-6">
          <div className="flex items-start gap-2 flex-wrap mb-3">
            {post.tags.map((tag) => (
              <span key={tag} className="clay-pill bg-white/80 !text-[10px] !py-0.5">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-xl font-bold font-[family-name:var(--font-heading)] text-text mb-2">
            {post.title}
          </h1>
          <p className="text-[13px] text-text-muted">
            {dict.blog.publishedOn} {formatDate(post.date, locale)} &middot; {dict.blog.author}: {post.author}
          </p>
        </div>

        {/* Sections — rendered using KBSectionRenderer */}
        <div className="clay-card-static p-5 mb-6 max-md:p-4">
          {post.sections.map((section, i) => (
            <KBSectionRenderer key={i} section={section} />
          ))}
        </div>

        {/* Prev / Next navigation */}
        {(prev || next) && (
          <div className="flex gap-3 mt-6 mb-6">
            {prev ? (
              <Link
                href={localePath(`/blog/${prev.slug}`, locale as Locale)}
                className="clay-card-static flex-1 p-4 hover:shadow-[3px_3px_0_var(--color-text)] transition-shadow bg-surface3/30"
              >
                <span className="text-[11px] text-text-muted block">{dict.blog.prevPost}</span>
                <span className="text-[13px] font-semibold font-[family-name:var(--font-heading)] text-text">{prev.title}</span>
              </Link>
            ) : <div className="flex-1" />}
            {next ? (
              <Link
                href={localePath(`/blog/${next.slug}`, locale as Locale)}
                className="clay-card-static flex-1 p-4 hover:shadow-[3px_3px_0_var(--color-text)] transition-shadow bg-surface3/30 text-right"
              >
                <span className="text-[11px] text-text-muted block">{dict.blog.nextPost}</span>
                <span className="text-[13px] font-semibold font-[family-name:var(--font-heading)] text-text">{next.title}</span>
              </Link>
            ) : <div className="flex-1" />}
          </div>
        )}

        {/* Related posts */}
        {related.length > 0 && (
          <div className="mt-6">
            <h2 className="text-[13px] font-bold font-[family-name:var(--font-heading)] uppercase tracking-wider text-text-muted mb-3">
              {dict.blog.relatedPosts}
            </h2>
            <div className="space-y-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={localePath(`/blog/${r.slug}`, locale as Locale)}
                  className="clay-card-static block p-4 hover:shadow-[3px_3px_0_var(--color-text)] transition-shadow"
                >
                  <h3 className="text-[14px] font-bold font-[family-name:var(--font-heading)] text-text">
                    {r.title}
                  </h3>
                  <p className="text-[11px] text-text-muted mt-1">{r.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Share */}
        <div className="mt-6">
          <ShareBlock {...dict.common.share} />
        </div>

        {/* Back to list */}
        <div className="text-center mt-6">
          <Link
            href={localePath('/blog', locale as Locale)}
            className="text-[13px] text-text-muted hover:text-cta transition-colors"
          >
            {dict.blog.backToList}
          </Link>
        </div>

        {/* CTA */}
        <div className="text-center mt-4">
          <Link
            href={localePath('/fnb', locale as Locale)}
            className="clay-btn clay-btn-primary text-[14px] px-6 py-2.5 inline-flex items-center gap-2"
          >
            <Icon name="wizard" size={18} className="!border-0 !shadow-none !bg-transparent" />
            {dict.blog.cta.validateIdea}
          </Link>
        </div>
      </article>
    </>
  );
}
