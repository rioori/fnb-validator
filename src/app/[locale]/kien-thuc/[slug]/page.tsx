import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { KNOWLEDGE_BASE, getKBTopicBySlug, getAllKBSlugs } from '@/lib/constants';
import KBSectionRenderer from '@/components/knowledge/KBSectionRenderer';
import Icon from '@/components/ui/Icon';
import { getDictionary } from '@/i18n/get-dictionary';
import { defaultLocale, type Locale } from '@/i18n/config';
import { localePath } from '@/i18n/link';
import type { KBTopic } from '@/types';

const BASE_URL = 'https://www.validator.vn';

// ── SSG: generate all topic pages at build time ──
export function generateStaticParams() {
  return getAllKBSlugs().map((slug) => ({ slug }));
}

// ── Per-page metadata ──
type PageProps = { params: Promise<{ locale: string; slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const topic = getKBTopicBySlug(slug);
  if (!topic) return {};

  const dict = await getDictionary(locale as Locale);
  const title = `${topic.title} ${dict.knowledge.article.metaTitleSuffix}`;
  const description = `${topic.subtitle}${dict.knowledge.article.metaDescSuffix}`;
  const viUrl = `${BASE_URL}/kien-thuc/${topic.slug}`;
  const enUrl = `${BASE_URL}/en/kien-thuc/${topic.slug}`;
  const canonical = locale === defaultLocale ? viUrl : enUrl;

  return {
    title,
    description,
    openGraph: { title, description, type: 'article', url: canonical },
    alternates: {
      canonical,
      languages: { vi: viUrl, en: enUrl },
    },
  };
}

// ── Helpers ──
const colorMap: Record<string, string> = {
  'primary-light': 'bg-primary-light',
  'secondary-light': 'bg-secondary-light',
  'mint-light': 'bg-mint-light',
};

function getAdjacentTopics(slug: string): { prev: KBTopic | null; next: KBTopic | null } {
  const idx = KNOWLEDGE_BASE.findIndex((t) => t.slug === slug);
  return {
    prev: idx > 0 ? KNOWLEDGE_BASE[idx - 1] : null,
    next: idx < KNOWLEDGE_BASE.length - 1 ? KNOWLEDGE_BASE[idx + 1] : null,
  };
}

// ── JSON-LD Structured Data ──
function ArticleJsonLd({ topic, categoryLabel, locale }: { topic: KBTopic; categoryLabel: string; locale: string }) {
  const prefix = locale === defaultLocale ? '' : '/en';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: topic.title,
    description: topic.subtitle,
    author: { '@type': 'Person', name: 'Khang Pham', url: 'https://linkedin.com/in/phamdinhkhang' },
    publisher: { '@type': 'Organization', name: 'Validator.vn', url: BASE_URL },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}${prefix}/kien-thuc/${topic.slug}`,
    },
    inLanguage: locale,
    articleSection: categoryLabel,
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  );
}

function BreadcrumbJsonLd({ topic, locale, dict }: { topic: KBTopic; locale: string; dict: { knowledge: { breadcrumb: { home: string; knowledge: string } } } }) {
  const prefix = locale === defaultLocale ? '' : '/en';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: dict.knowledge.breadcrumb.home, item: `${BASE_URL}${prefix}` || BASE_URL },
      { '@type': 'ListItem', position: 2, name: dict.knowledge.breadcrumb.knowledge, item: `${BASE_URL}${prefix}/kien-thuc` },
      { '@type': 'ListItem', position: 3, name: topic.title, item: `${BASE_URL}${prefix}/kien-thuc/${topic.slug}` },
    ],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  );
}

// ── Page Component ──
export default async function KienThucTopicPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const dict = await getDictionary(locale as Locale);
  const topic = getKBTopicBySlug(slug);
  if (!topic) notFound();

  const { prev, next } = getAdjacentTopics(slug);
  const categoryLabel = dict.knowledge.categories[topic.category as keyof typeof dict.knowledge.categories];

  return (
    <>
      <ArticleJsonLd topic={topic} categoryLabel={categoryLabel} locale={locale} />
      <BreadcrumbJsonLd topic={topic} locale={locale} dict={dict} />

      <article className="max-w-3xl mx-auto px-4 py-8 max-md:px-3 max-md:py-6">
        {/* Breadcrumbs */}
        <nav className="text-[13px] text-text-muted mb-6">
          <Link href={localePath('/', locale as Locale)} className="hover:text-cta transition-colors">{dict.knowledge.breadcrumb.home}</Link>
          <span className="mx-2">/</span>
          <Link href={localePath('/kien-thuc', locale as Locale)} className="hover:text-cta transition-colors">{dict.knowledge.breadcrumb.knowledge}</Link>
          <span className="mx-2">/</span>
          <span className="text-text font-semibold">{topic.title}</span>
        </nav>

        {/* Topic Header */}
        <div className={`clay-card-static ${colorMap[topic.color] || 'bg-surface'} p-6 mb-6`}>
          <div className="flex items-center gap-4 max-md:flex-col max-md:text-center">
            <Icon name={topic.icon} size={48} className="shrink-0" />
            <div>
              <span className="clay-pill bg-white/80 !text-[10px] !py-0.5 mb-1.5 inline-flex">
                {categoryLabel}
              </span>
              <h1 className="text-xl font-bold font-[family-name:var(--font-heading)] text-text">
                {topic.title}
              </h1>
              <p className="text-[14px] text-text-muted mt-1">{topic.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Highlight pills */}
        {topic.highlights && (
          <div className="flex flex-wrap gap-2 mb-6">
            {topic.highlights.map((h, i) => (
              <span key={i} className="clay-pill bg-surface !py-1 !px-3 !text-[12px]">
                <strong className="text-cta">{h.value}</strong> {h.label}
                {h.note && <span className="text-text-light ml-1">({h.note})</span>}
              </span>
            ))}
          </div>
        )}

        {/* Sections — fully expanded for SEO */}
        <div className="clay-card-static p-5 mb-6 max-md:p-4">
          {topic.sections.map((section, i) => (
            <KBSectionRenderer key={i} section={section} />
          ))}
        </div>

        {/* Prev / Next navigation */}
        <nav className="flex gap-4 mt-8 max-md:flex-col">
          {prev ? (
            <Link
              href={localePath(`/kien-thuc/${prev.slug}`, locale as Locale)}
              className="clay-card-static p-3 flex-1 hover:shadow-[3px_3px_0_var(--color-text)] transition-shadow"
            >
              <span className="text-[11px] text-text-muted block">{dict.knowledge.article.prevArticle}</span>
              <span className="text-[13px] font-bold font-[family-name:var(--font-heading)]">
                {prev.title}
              </span>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
          {next ? (
            <Link
              href={localePath(`/kien-thuc/${next.slug}`, locale as Locale)}
              className="clay-card-static p-3 flex-1 text-right hover:shadow-[3px_3px_0_var(--color-text)] transition-shadow"
            >
              <span className="text-[11px] text-text-muted block">{dict.knowledge.article.nextArticle}</span>
              <span className="text-[13px] font-bold font-[family-name:var(--font-heading)]">
                {next.title}
              </span>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </nav>

        {/* CTA */}
        <div className="text-center mt-8">
          <Link
            href={localePath('/fnb', locale as Locale)}
            className="clay-btn clay-btn-primary text-[14px] px-6 py-2.5 inline-flex items-center gap-2"
          >
            <Icon name="wizard" size={18} className="!border-0 !shadow-none !bg-transparent" />
            {dict.knowledge.cta.validateIdea}
          </Link>
        </div>
      </article>
    </>
  );
}
