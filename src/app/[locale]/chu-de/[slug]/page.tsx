import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { defaultLocale, type Locale } from '@/i18n/config';
import { localePath } from '@/i18n/link';
import { getTopicBySlug, getAllTopicSlugs, type Topic } from '@/lib/topics';
import { CITIES, MODEL_SEO_NAMES } from '@/lib/seo-data';
import type { ModelKey } from '@/types';
import EXPERTS_VI from '@/i18n/data/vi/experts';
import EXPERTS_EN from '@/i18n/data/en/experts';
import KNOWLEDGE_BASE_VI from '@/i18n/data/vi/knowledge';
import KNOWLEDGE_BASE_EN from '@/i18n/data/en/knowledge';
import COMPARISON_VI from '@/i18n/data/vi/comparison';
import COMPARISON_EN from '@/i18n/data/en/comparison';
import Icon from '@/components/ui/Icon';

const BASE_URL = 'https://www.validator.vn';

export function generateStaticParams() {
  return getAllTopicSlugs().map((slug) => ({ slug }));
}

type PageProps = { params: Promise<{ locale: string; slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const topic = getTopicBySlug(slug);
  if (!topic) return {};
  const t = topic.copy[locale === 'en' ? 'en' : 'vi'];
  const viUrl = `${BASE_URL}/chu-de/${slug}`;
  const enUrl = `${BASE_URL}${localePath(`/chu-de/${slug}`, 'en' as Locale)}`;
  const canonical = locale === defaultLocale ? viUrl : enUrl;
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    openGraph: {
      title: t.metaTitle,
      description: t.metaDescription,
      url: canonical,
      images: [{ url: `/api/og?locale=${locale}&page=hub&title=${encodeURIComponent(t.title)}&subtitle=${encodeURIComponent(t.subtitle)}`, width: 1200, height: 630 }],
    },
    alternates: {
      canonical,
      languages: { vi: viUrl, en: enUrl },
    },
  };
}

function getExperts(locale: string) {
  return locale === 'en' ? EXPERTS_EN : EXPERTS_VI;
}

function getKB(locale: string) {
  return locale === 'en' ? KNOWLEDGE_BASE_EN : KNOWLEDGE_BASE_VI;
}

function getComparisons(locale: string) {
  return locale === 'en' ? COMPARISON_EN : COMPARISON_VI;
}

function HubJsonLd({ topic, locale, t }: { topic: Topic; locale: string; t: ReturnType<typeof getTopicCopy> }) {
  const prefix = locale === defaultLocale ? '' : '/en';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: t.title,
    description: t.subtitle,
    url: `${BASE_URL}${prefix}/chu-de/${topic.slug}`,
    inLanguage: locale,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

function getTopicCopy(topic: Topic, locale: string) {
  return topic.copy[locale === 'en' ? 'en' : 'vi'];
}

export default async function HubPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const topic = getTopicBySlug(slug);
  if (!topic) notFound();
  const t = getTopicCopy(topic, locale);

  // Match experts by tag overlap
  const matchTags = locale === 'en' ? topic.expertTagsEn : topic.expertTagsVi;
  const matchedExperts = getExperts(locale)
    .filter((e) => e.tags.some((tag) => matchTags.some((mt) => tag.toLowerCase().includes(mt.toLowerCase()))))
    .slice(0, 12);

  // Match articles by slug
  const allKB = getKB(locale);
  const matchedArticles = topic.articleSlugs
    .map((s) => allKB.find((a) => a.slug === s))
    .filter((a): a is NonNullable<typeof a> => a !== undefined);

  // Match comparison articles
  const allComp = getComparisons(locale);
  const matchedComparisons = (topic.comparisonSlugs || [])
    .map((s) => allComp.find((c) => c.slug === s))
    .filter((c): c is NonNullable<typeof c> => c !== undefined);

  const modelName = MODEL_SEO_NAMES[topic.modelKey as ModelKey]?.[locale as 'vi' | 'en'] || topic.modelKey;
  const wizardHref = `${localePath('/fnb', locale as Locale)}?model=${topic.modelKey}&mode=quick&utm_source=hub&utm_medium=topical-hub-cta`;
  const knowledgePrefix = locale === defaultLocale ? '/kien-thuc' : '/en/knowledge';
  const expertsPrefix = locale === defaultLocale ? '/goc-nhin-chuyen-gia' : '/en/experts';
  const comparisonPrefix = locale === defaultLocale ? '/so-sanh' : '/en/comparison';
  const cityPrefix = locale === defaultLocale ? '/chi-phi-mo' : '/en/opening-costs';

  return (
    <>
      <HubJsonLd topic={topic} locale={locale} t={t} />

      <article className="max-w-[920px] mx-auto py-6 max-md:py-3">
        {/* Breadcrumb */}
        <nav className="text-[13px] text-text-muted mb-4 px-3">
          <Link href={localePath('/', locale as Locale)} className="hover:text-cta">
            {locale === 'en' ? 'Home' : 'Trang chủ'}
          </Link>
          <span className="mx-2">/</span>
          <Link href={localePath('/kien-thuc', locale as Locale)} className="hover:text-cta">
            {locale === 'en' ? 'Knowledge' : 'Kiến thức'}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-text">{t.title}</span>
        </nav>

        {/* Hero */}
        <div className="clay-card-static bg-pastel-mint p-6 mb-6 max-md:p-5">
          <h1 className="text-[26px] font-bold font-[family-name:var(--font-heading)] text-text leading-tight mb-2 max-md:text-[22px]">
            {t.title}
          </h1>
          <p className="text-[14px] text-text leading-relaxed max-md:text-[13px]">
            {t.subtitle}
          </p>
          <div className="mt-4">
            <Link
              href={wizardHref}
              className="inline-flex items-center gap-2 bg-cta hover:bg-cta-hover text-white font-bold text-[14px] px-5 py-2.5 rounded-xl transition-colors"
            >
              {t.ctaCalculator}
            </Link>
          </div>
        </div>

        {/* Section 1: Experts */}
        {matchedExperts.length > 0 && (
          <section className="mb-6">
            <h2 className="text-[16px] font-bold font-[family-name:var(--font-heading)] text-text mb-3 px-3">
              {t.sectionExperts}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-md:px-3">
              {matchedExperts.map((expert) => (
                <Link
                  key={expert.slug}
                  href={localePath(`/goc-nhin-chuyen-gia/${expert.slug}`, locale as Locale)}
                  className="clay-card-static bg-white p-3 hover:shadow-[3px_3px_0_var(--color-text)] transition-shadow"
                >
                  <div className="flex items-start gap-2.5">
                    {expert.photo && (
                      <Image
                        src={expert.photo}
                        alt={expert.name}
                        width={48}
                        height={48}
                        className="rounded-lg object-cover w-12 h-12 shrink-0"
                      />
                    )}
                    <div className="min-w-0">
                      <div className="text-[13px] font-bold text-text leading-tight truncate">{expert.name}</div>
                      <div className="text-[11px] text-text-muted leading-tight line-clamp-2 mt-0.5">{expert.descriptor}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Section 2: Articles */}
        {matchedArticles.length > 0 && (
          <section className="mb-6">
            <h2 className="text-[16px] font-bold font-[family-name:var(--font-heading)] text-text mb-3 px-3">
              {t.sectionArticles}
            </h2>
            <div className="space-y-2 max-md:px-3">
              {matchedArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`${knowledgePrefix}/${article.slug}`}
                  className="block clay-card-static bg-white p-4 hover:shadow-[3px_3px_0_var(--color-text)] transition-shadow"
                >
                  <div className="flex items-start gap-3">
                    <Icon name={article.icon || 'book'} size={24} className="shrink-0" />
                    <div className="min-w-0">
                      <div className="text-[14px] font-bold text-text leading-tight">{article.title}</div>
                      <div className="text-[12px] text-text-muted leading-relaxed mt-1">{article.subtitle}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Section 3: Comparison articles */}
        {matchedComparisons.length > 0 && (
          <section className="mb-6">
            <h2 className="text-[16px] font-bold font-[family-name:var(--font-heading)] text-text mb-3 px-3">
              {locale === 'en' ? 'Comparisons' : 'So sánh'}
            </h2>
            <div className="space-y-2 max-md:px-3">
              {matchedComparisons.map((c) => (
                <Link
                  key={c.slug}
                  href={`${comparisonPrefix}/${c.slug}`}
                  className="block clay-card-static bg-white p-4 hover:shadow-[3px_3px_0_var(--color-text)] transition-shadow"
                >
                  <div className="flex items-start gap-3">
                    <Icon name={c.icon || 'calculator'} size={24} className="shrink-0" />
                    <div className="min-w-0">
                      <div className="text-[14px] font-bold text-text leading-tight">{c.title}</div>
                      <div className="text-[12px] text-text-muted leading-relaxed mt-1">{c.subtitle}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Section 4: Cities — link to city-model pages */}
        <section className="mb-6">
          <h2 className="text-[16px] font-bold font-[family-name:var(--font-heading)] text-text mb-1 px-3">
            {t.sectionCities}
          </h2>
          <p className="text-[12px] text-text-muted px-3 mb-3">{t.cityListIntro}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-md:px-3">
            {CITIES.map((city) => (
              <Link
                key={city.slug}
                href={`${cityPrefix}/${topic.modelKey}/tai/${city.slug}`}
                className="clay-card-static bg-white px-3 py-2 hover:shadow-[3px_3px_0_var(--color-text)] transition-shadow text-[13px]"
              >
                <span className="font-bold text-text">{locale === 'en' ? city.nameEn : city.nameVi}</span>
                <span className="text-text-muted text-[11px] ml-1">· {city.avgRentRange}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <div className="clay-card-static bg-cta/5 border-cta/20 p-5 text-center mb-6">
          <h3 className="text-[15px] font-bold font-[family-name:var(--font-heading)] text-text mb-2">
            {t.sectionCalculator}
          </h3>
          <Link
            href={wizardHref}
            className="inline-flex items-center gap-2 bg-cta hover:bg-cta-hover text-white font-bold text-[13px] px-6 py-3 rounded-xl transition-colors"
          >
            {t.ctaCalculator}
          </Link>
        </div>
      </article>
    </>
  );
}
