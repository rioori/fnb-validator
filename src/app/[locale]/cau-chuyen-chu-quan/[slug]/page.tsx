import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Icon from '@/components/ui/Icon';
import { getDictionary } from '@/i18n/get-dictionary';
import { defaultLocale, type Locale } from '@/i18n/config';
import { localePath } from '@/i18n/link';
import type { OwnerStory } from '@/types';
import PageTracker from '@/components/ui/PageTracker';
import ShareBlock from '@/components/ui/ShareBlock';
import STORIES_VI from '@/i18n/data/vi/stories';
import STORIES_EN from '@/i18n/data/en/stories';

function getStories(locale: string): OwnerStory[] {
  return locale === 'en' ? STORIES_EN : STORIES_VI;
}

const BASE_URL = 'https://www.validator.vn';

// SSG: pre-render every story slug — VI + EN reuse the same slugs so we can dedupe
export function generateStaticParams() {
  const slugs = new Set<string>();
  [...STORIES_VI, ...STORIES_EN].forEach((s) => slugs.add(s.slug));
  return Array.from(slugs).map((slug) => ({ slug }));
}

type PageProps = { params: Promise<{ locale: string; slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const story = getStories(locale).find((s) => s.slug === slug);
  if (!story) return {};

  const title = story.seoTitle ? `${story.seoTitle} | Validator.vn` : `${story.headline} | Validator.vn`;
  const description = story.seoDescription || story.summary;
  const viUrl = `${BASE_URL}/cau-chuyen-chu-quan/${story.slug}`;
  const enUrl = `${BASE_URL}${localePath(`/cau-chuyen-chu-quan/${story.slug}`, 'en')}`;
  const canonical = locale === defaultLocale ? viUrl : enUrl;
  const ogImage = `/api/og?locale=${locale}&page=story&title=${encodeURIComponent(story.headline)}&subtitle=${encodeURIComponent(`${story.ownerName} — ${story.city}`)}`;

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

function ArticleJsonLd({ story, locale }: { story: OwnerStory; locale: string }) {
  const prefix = locale === defaultLocale ? '' : '/en';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: story.headline,
    description: story.summary,
    author: { '@type': 'Organization', name: 'Validator.vn' },
    publisher: { '@type': 'Organization', name: 'Validator.vn', url: BASE_URL },
    url: `${BASE_URL}${prefix}/cau-chuyen-chu-quan/${story.slug}`,
    inLanguage: locale === 'en' ? 'en' : 'vi',
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

function BreadcrumbJsonLd({ story, locale, dict }: { story: OwnerStory; locale: string; dict: { stories: { detail: { breadcrumbHome: string; breadcrumbStories: string } } } }) {
  const prefix = locale === defaultLocale ? '' : '/en';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: dict.stories.detail.breadcrumbHome, item: `${BASE_URL}${prefix}/fnb` },
      { '@type': 'ListItem', position: 2, name: dict.stories.detail.breadcrumbStories, item: `${BASE_URL}${prefix}/cau-chuyen-chu-quan` },
      { '@type': 'ListItem', position: 3, name: story.headline, item: `${BASE_URL}${prefix}/cau-chuyen-chu-quan/${story.slug}` },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

function SectionDivider({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3 mb-4 mt-8">
      <div className="h-[1.5px] flex-1 bg-border" />
      <h2 className="text-[13px] font-bold font-[family-name:var(--font-heading)] text-text-muted whitespace-nowrap uppercase tracking-wider">
        {title}
      </h2>
      <div className="h-[1.5px] flex-1 bg-border" />
    </div>
  );
}

const OTHER_CARD_BG = ['bg-pastel-cream', 'bg-pastel-mint', 'bg-pastel-blue', 'bg-pastel-blush'];

export default async function StoryDetailPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const dict = await getDictionary(locale as Locale);
  const stories = getStories(locale);
  const story = stories.find((s) => s.slug === slug);
  if (!story) notFound();

  const otherStories = stories.filter((s) => s.slug !== slug).slice(0, 3);
  const labels = dict.stories.detail.labels;
  const sections = dict.stories.detail.sections;

  return (
    <>
      <PageTracker event="story_view" data={{ slug: story.slug, model: story.model }} />
      <ArticleJsonLd story={story} locale={locale} />
      <BreadcrumbJsonLd story={story} locale={locale} dict={dict} />

      <article className="py-2 max-md:py-0 max-w-[760px] mx-auto">
        {/* Breadcrumbs */}
        <nav className="text-[13px] text-text-muted mb-4">
          <Link href={localePath('/fnb', locale as Locale)} className="hover:text-cta transition-colors">
            {dict.stories.detail.breadcrumbHome}
          </Link>
          <span className="mx-2">/</span>
          <Link href={localePath('/cau-chuyen-chu-quan', locale as Locale)} className="hover:text-cta transition-colors">
            {dict.stories.detail.breadcrumbStories}
          </Link>
        </nav>

        {/* Hero card */}
        <div className="clay-card-static bg-pastel-cream p-6 mb-4 max-md:p-5">
          <div className="flex items-center gap-2 text-[11px] text-text-muted flex-wrap mb-2">
            <span className="clay-pill bg-white/70 !py-0.5 !px-2 text-[10px] font-semibold uppercase">{story.model}</span>
            <span>·</span>
            <span>{story.city}</span>
            <span>·</span>
            <span>{story.timeframe}</span>
          </div>
          <h1 className="text-[22px] font-bold text-text font-[family-name:var(--font-heading)] leading-snug max-md:text-[19px]">
            {story.headline}
          </h1>
          <p className="text-[14px] text-text-muted mt-3 leading-relaxed">{story.summary}</p>
        </div>

        {/* Owner + shop meta */}
        <div className="grid grid-cols-2 gap-3 mb-2 max-md:grid-cols-1">
          <div className="clay-card-static bg-white p-4">
            <p className="text-[11px] text-text-muted uppercase tracking-wider font-semibold mb-1">{labels.owner}</p>
            <p className="text-[14px] text-text font-semibold">{story.ownerName}</p>
            <p className="text-[12px] text-text-muted">{story.ownerRole}</p>
          </div>
          <div className="clay-card-static bg-white p-4">
            <p className="text-[11px] text-text-muted uppercase tracking-wider font-semibold mb-1">{labels.scale}</p>
            <p className="text-[13px] text-text">{story.scale}</p>
            <p className="text-[12px] text-text-muted mt-1">
              {labels.monthsOpen}: {story.monthsOpen} {labels.months}
            </p>
          </div>
        </div>

        {/* Context */}
        <SectionDivider title={sections.context} />
        <div className="clay-card-static bg-pastel-cream/40 p-5">
          <p className="text-[14px] text-text leading-[1.75] whitespace-pre-line">{story.context}</p>
        </div>

        {/* Pain points */}
        <SectionDivider title={sections.painPoints} />
        <div className="clay-card-static bg-white p-5">
          <ul className="space-y-3">
            {story.painPoints.map((p, i) => (
              <li key={i} className="flex items-start gap-3 text-[13px] text-text leading-relaxed">
                <span className="text-red-500 font-bold mt-0.5 shrink-0">▲</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Turning point */}
        <SectionDivider title={sections.turningPoint} />
        <div className="clay-card-static bg-pastel-mint p-5">
          <p className="text-[14px] text-text leading-[1.75]">{story.turningPoint}</p>
        </div>

        {/* Actions */}
        <SectionDivider title={sections.actions} />
        <div className="space-y-3">
          {story.actions.map((a, i) => {
            const bgs = ['bg-pastel-blue', 'bg-pastel-cream', 'bg-pastel-blush', 'bg-pastel-mint'];
            return (
              <div key={i} className={`clay-card-static p-4 ${bgs[i % bgs.length]}`}>
                <div className="flex items-baseline gap-2 mb-1.5">
                  <span className="text-[11px] font-bold text-cta">{i + 1}</span>
                  <h3 className="text-[14px] font-bold font-[family-name:var(--font-heading)] text-text">{a.title}</h3>
                </div>
                <p className="text-[13px] text-text-muted leading-relaxed pl-4">{a.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Metrics table */}
        <SectionDivider title={sections.metrics} />
        <div className="clay-card-static bg-white overflow-x-auto">
          <table className="w-full text-[13px]">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-3 font-bold text-text font-[family-name:var(--font-heading)] text-[12px] uppercase tracking-wider">Metric</th>
                <th className="text-left p-3 font-bold text-text-muted text-[12px] uppercase tracking-wider">{labels.before}</th>
                <th className="text-left p-3 font-bold text-text-muted text-[12px] uppercase tracking-wider">{labels.after}</th>
                <th className="text-left p-3 font-bold text-cta text-[12px] uppercase tracking-wider">{labels.change}</th>
              </tr>
            </thead>
            <tbody>
              {story.metrics.map((m, i) => (
                <tr key={i} className={i > 0 ? 'border-t border-border/40' : ''}>
                  <td className="p-3 text-text font-semibold">{m.label}</td>
                  <td className="p-3 text-text-muted">{m.before}</td>
                  <td className="p-3 text-text">{m.after}</td>
                  <td className="p-3 text-cta font-semibold">{m.delta || '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Lessons */}
        <SectionDivider title={sections.lessons} />
        <div className="clay-card-static bg-pastel-gold p-5">
          <ul className="space-y-3">
            {story.lessons.map((l, i) => (
              <li key={i} className="flex items-start gap-3 text-[14px] text-text leading-relaxed">
                <span className="text-cta font-bold mt-0.5 shrink-0">✓</span>
                <span>{l}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tools used */}
        <SectionDivider title={sections.tools} />
        <div className="grid grid-cols-1 gap-2">
          {story.toolsUsed.map((t, i) => (
            <Link
              key={i}
              href={t.href}
              className="clay-card block p-3 bg-surface flex items-center gap-3 hover:bg-pastel-cream/60 transition-colors"
            >
              <Icon name="bolt" size={24} className="!border-[1.5px] !shadow-none shrink-0" />
              <span className="text-[13px] font-semibold text-text flex-1">{t.label}</span>
              <span className="text-cta text-[14px] shrink-0">→</span>
            </Link>
          ))}
        </div>

        {/* Inline CTA */}
        <div className="clay-card-static bg-pastel-mint p-6 mt-8 text-center">
          <h3 className="text-[17px] font-bold text-text font-[family-name:var(--font-heading)] mb-2">
            {dict.stories.detail.ctaHeadline}
          </h3>
          <p className="text-[13px] text-text-muted mb-4 max-w-[480px] mx-auto leading-relaxed">
            {dict.stories.detail.ctaDesc}
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href={localePath('/ai-chat', locale as Locale)}
              className="clay-btn clay-btn-primary text-[14px] px-5 py-2.5 inline-flex items-center gap-2"
            >
              <Icon name="chat" size={18} className="!border-0 !shadow-none !bg-transparent" />
              {dict.stories.detail.ctaAskAI}
            </Link>
            <Link
              href={localePath('/fnb', locale as Locale)}
              className="clay-btn bg-white text-[14px] px-5 py-2.5 inline-flex items-center gap-2"
            >
              <Icon name="bolt" size={18} className="!border-0 !shadow-none !bg-transparent" />
              {dict.stories.detail.ctaCalc}
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-[11px] text-text-muted italic mt-6 text-center max-w-[620px] mx-auto leading-relaxed">
          {story.disclaimer}
        </p>

        {/* Other stories */}
        {otherStories.length > 0 && (
          <>
            <SectionDivider title={dict.stories.detail.otherStories} />
            <div className="grid grid-cols-1 gap-3">
              {otherStories.map((os, i) => (
                <Link
                  key={os.slug}
                  href={localePath(`/cau-chuyen-chu-quan/${os.slug}`, locale as Locale)}
                  className={`clay-card block p-4 ${OTHER_CARD_BG[i % OTHER_CARD_BG.length]}`}
                >
                  <div className="flex items-center gap-2 text-[10px] text-text-muted mb-1.5 flex-wrap">
                    <span className="uppercase font-semibold">{os.model}</span>
                    <span>·</span>
                    <span>{os.city}</span>
                  </div>
                  <h3 className="text-[14px] font-bold font-[family-name:var(--font-heading)] text-text leading-snug">
                    {os.headline}
                  </h3>
                </Link>
              ))}
            </div>
          </>
        )}

        {/* Back to all */}
        <div className="mt-6 text-center">
          <Link
            href={localePath('/cau-chuyen-chu-quan', locale as Locale)}
            className="text-[13px] font-semibold text-cta hover:underline"
          >
            {dict.stories.detail.allStories}
          </Link>
        </div>

        {/* Share */}
        <div className="mt-6">
          <ShareBlock {...dict.common.share} />
        </div>
      </article>
    </>
  );
}
