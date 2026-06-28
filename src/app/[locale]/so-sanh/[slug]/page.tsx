import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import KBSectionRenderer from '@/components/knowledge/KBSectionRenderer';
import Icon from '@/components/ui/Icon';
import { getDictionary } from '@/i18n/get-dictionary';
import { defaultLocale, type Locale } from '@/i18n/config';
import { localePath } from '@/i18n/link';
import type { KBTopic } from '@/types';
import PageTracker from '@/components/ui/PageTracker';
import ShareBlock from '@/components/ui/ShareBlock';
import COMPARISON_VI from '@/i18n/data/vi/comparison';
import COMPARISON_EN from '@/i18n/data/en/comparison';

function getComparisons(locale: string): KBTopic[] {
  return locale === 'en' ? COMPARISON_EN : COMPARISON_VI;
}

const BASE_URL = 'https://www.validator.vn';

// ── SSG: generate all comparison pages at build time ──
export function generateStaticParams() {
  const viSlugs = COMPARISON_VI.map((c) => ({ slug: c.slug, locale: 'vi' }));
  const enSlugs = COMPARISON_EN.map((c) => ({ slug: c.slug, locale: 'en' }));
  return [...viSlugs, ...enSlugs];
}

// ── Per-page metadata ──
type PageProps = { params: Promise<{ locale: string; slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const comparisons = getComparisons(locale);
  const comparison = comparisons.find((c) => c.slug === slug);
  if (!comparison) return {};

  const dict = await getDictionary(locale as Locale);
  const title = comparison.seoTitle
    ? `${comparison.seoTitle} | Validator.vn`
    : `${comparison.title} | Validator.vn`;
  const description = comparison.seoDescription || comparison.subtitle;
  const viUrl = `${BASE_URL}/so-sanh/${comparison.slug}`;
  const enUrl = `${BASE_URL}${localePath(`/so-sanh/${comparison.slug}`, 'en')}`;
  const canonical = locale === defaultLocale ? viUrl : enUrl;

  const ogImage = `/api/og?locale=${locale}&page=article&title=${encodeURIComponent(comparison.title)}&subtitle=${encodeURIComponent(comparison.subtitle)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url: canonical,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      images: [ogImage],
    },
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

function getRelatedComparisons(slug: string, category: string, locale: string): KBTopic[] {
  const comparisons = getComparisons(locale);
  return comparisons.filter((c) => c.category === category && c.slug !== slug).slice(0, 3);
}

function getPrevNext(slug: string, locale: string): { prev: KBTopic | null; next: KBTopic | null } {
  const comparisons = getComparisons(locale);
  const idx = comparisons.findIndex((c) => c.slug === slug);
  return {
    prev: idx > 0 ? comparisons[idx - 1] : null,
    next: idx < comparisons.length - 1 ? comparisons[idx + 1] : null,
  };
}

// ── JSON-LD Structured Data ──
function ComparisonJsonLd({ comparison, categoryLabel, locale }: { comparison: KBTopic; categoryLabel: string; locale: string }) {
  const prefix = locale === defaultLocale ? '' : '/en';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: comparison.title,
    description: comparison.subtitle,
    ...(comparison.publishDate && { datePublished: comparison.publishDate }),
    author: { '@type': 'Person', name: 'Khang Pham', url: 'https://linkedin.com/in/phamdinhkhang' },
    publisher: { '@type': 'Organization', name: 'Validator.vn', url: BASE_URL },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}${prefix}/so-sanh/${comparison.slug}`,
    },
    inLanguage: locale,
    articleSection: categoryLabel,
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  );
}

function BreadcrumbJsonLd({ comparison, locale, dict }: { comparison: KBTopic; locale: string; dict: any }) {
  const prefix = locale === defaultLocale ? '' : '/en';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: locale === 'vi' ? 'Trang chủ' : 'Home', item: `${BASE_URL}${prefix}/fnb` },
      { '@type': 'ListItem', position: 2, name: locale === 'vi' ? 'So sánh' : 'Comparisons', item: `${BASE_URL}${prefix}/so-sanh` },
      { '@type': 'ListItem', position: 3, name: comparison.title, item: `${BASE_URL}${prefix}/so-sanh/${comparison.slug}` },
    ],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  );
}

// ── Page Component ──
export default async function ComparisonPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const dict = await getDictionary(locale as Locale);
  const comparisons = getComparisons(locale);
  const comparison = comparisons.find((c) => c.slug === slug);
  if (!comparison) notFound();

  const related = getRelatedComparisons(slug, comparison.category, locale);
  const { prev, next } = getPrevNext(slug, locale);
  const categoryLabel = dict.knowledge.categories[comparison.category as keyof typeof dict.knowledge.categories];

  return (
    <>
      <PageTracker event="article_read" data={{ slug: comparison.slug, category: comparison.category, type: 'comparison' }} />
      <ComparisonJsonLd comparison={comparison} categoryLabel={categoryLabel} locale={locale} />
      <BreadcrumbJsonLd comparison={comparison} locale={locale} dict={dict} />

      <article className="py-2 max-md:py-0">
        {/* Breadcrumbs */}
        <nav className="text-[13px] text-text-muted mb-6">
          <Link href={localePath('/fnb', locale as Locale)} className="hover:text-cta transition-colors">
            {locale === 'vi' ? 'Trang chủ' : 'Home'}
          </Link>
          <span className="mx-2">/</span>
          <Link href={localePath('/so-sanh', locale as Locale)} className="hover:text-cta transition-colors">
            {locale === 'vi' ? 'So sánh' : 'Comparisons'}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-text font-semibold">{comparison.title}</span>
        </nav>

        {/* Topic Header */}
        <div className={`clay-card-static ${colorMap[comparison.color] || 'bg-surface'} p-6 mb-6`}>
          <div className="flex items-center gap-4 max-md:flex-col max-md:text-center">
            <Icon name={comparison.icon} size={48} className="shrink-0" />
            <div>
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                <span className="clay-pill bg-white/80 !text-[10px] !py-0.5 inline-flex">
                  {categoryLabel}
                </span>
                {comparison.publishDate && (
                  <span className="text-[11px] text-text-light">
                    {new Date(comparison.publishDate + 'T00:00:00').toLocaleDateString(locale === 'vi' ? 'vi-VN' : 'en-US', { day: '2-digit', month: '2-digit', year: 'numeric' })}
                  </span>
                )}
              </div>
              <h1 className="text-xl font-bold font-[family-name:var(--font-heading)] text-text">
                {comparison.title}
              </h1>
              <p className="text-[14px] text-text-muted mt-1">{comparison.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Highlight pills */}
        {comparison.highlights && (
          <div className="flex flex-wrap gap-2 mb-6">
            {comparison.highlights.map((h, i) => (
              <span key={i} className="clay-pill bg-surface !py-1 !px-3 !text-[12px]">
                <strong className="text-cta">{h.value}</strong> {h.label}
                {h.note && <span className="text-text-light ml-1">({h.note})</span>}
              </span>
            ))}
          </div>
        )}

        {/* Sections — fully expanded for SEO */}
        <div className="clay-card-static p-5 mb-6 max-md:p-4">
          {comparison.sections.map((section, i) => (
            <KBSectionRenderer key={i} section={section} />
          ))}
        </div>

        {/* Prev / Next navigation */}
        {(prev || next) && (
          <div className="flex gap-3 mt-6 mb-6">
            {prev ? (
              <Link
                href={localePath(`/so-sanh/${prev.slug}`, locale as Locale)}
                className="clay-card-static flex-1 p-4 hover:shadow-[3px_3px_0_var(--color-text)] transition-shadow bg-surface3/30"
              >
                <span className="text-[11px] text-text-muted block">{locale === 'vi' ? 'Bài trước' : 'Previous'}</span>
                <span className="text-[13px] font-semibold font-[family-name:var(--font-heading)] text-text">{prev.title}</span>
              </Link>
            ) : <div className="flex-1" />}
            {next ? (
              <Link
                href={localePath(`/so-sanh/${next.slug}`, locale as Locale)}
                className="clay-card-static flex-1 p-4 hover:shadow-[3px_3px_0_var(--color-text)] transition-shadow bg-surface3/30 text-right"
              >
                <span className="text-[11px] text-text-muted block">{locale === 'vi' ? 'Bài tiếp' : 'Next'}</span>
                <span className="text-[13px] font-semibold font-[family-name:var(--font-heading)] text-text">{next.title}</span>
              </Link>
            ) : <div className="flex-1" />}
          </div>
        )}

        {/* Share */}
        <div className="mt-6">
          <ShareBlock {...dict.common.share} />
        </div>

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
