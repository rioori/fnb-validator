import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import { getDictionary } from '@/i18n/get-dictionary';
import { defaultLocale, type Locale } from '@/i18n/config';
import { localePath } from '@/i18n/link';
import type { OwnerStory } from '@/types';
import STORIES_VI from '@/i18n/data/vi/stories';
import STORIES_EN from '@/i18n/data/en/stories';

function getStories(locale: string): OwnerStory[] {
  return locale === 'en' ? STORIES_EN : STORIES_VI;
}

const BASE_URL = 'https://www.validator.vn';

const CARD_BG = ['bg-pastel-cream', 'bg-pastel-mint', 'bg-pastel-blue', 'bg-pastel-blush', 'bg-pastel-gold'];

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const canonical =
    locale === defaultLocale
      ? `${BASE_URL}/cau-chuyen-chu-quan`
      : `${BASE_URL}${localePath('/cau-chuyen-chu-quan', 'en')}`;

  return {
    title: dict.stories.meta.title,
    description: dict.stories.meta.description,
    openGraph: {
      title: dict.stories.meta.title,
      description: dict.stories.meta.description,
      url: canonical,
      type: 'website',
    },
    alternates: {
      canonical,
      languages: {
        vi: `${BASE_URL}/cau-chuyen-chu-quan`,
        en: `${BASE_URL}${localePath('/cau-chuyen-chu-quan', 'en')}`,
      },
    },
  };
}

function BreadcrumbJsonLd({ locale, dict }: { locale: string; dict: { stories: { detail: { breadcrumbHome: string; breadcrumbStories: string } } } }) {
  const prefix = locale === defaultLocale ? '' : '/en';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: dict.stories.detail.breadcrumbHome, item: `${BASE_URL}${prefix}/fnb` },
      { '@type': 'ListItem', position: 2, name: dict.stories.detail.breadcrumbStories, item: `${BASE_URL}${prefix}/cau-chuyen-chu-quan` },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export default async function StoriesIndexPage({ params }: PageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const stories = getStories(locale);

  return (
    <>
      <BreadcrumbJsonLd locale={locale} dict={dict} />

      <div className="py-2 max-md:py-0 max-w-[880px] mx-auto">
        {/* Header */}
        <div className="mb-6 text-center">
          <p className="text-[11px] font-bold tracking-[0.15em] text-text-muted mb-1.5 font-[family-name:var(--font-heading)]">
            {dict.stories.index.eyebrow}
          </p>
          <h1 className="text-2xl font-bold text-text font-[family-name:var(--font-heading)] max-md:text-xl">
            {dict.stories.index.heading}
          </h1>
          <p className="text-[13px] text-text-muted mt-2 max-w-[620px] mx-auto leading-relaxed">
            {dict.stories.index.desc}
          </p>
        </div>

        {stories.length === 0 ? (
          <div className="clay-card-static p-8 text-center bg-pastel-cream/50">
            <p className="text-text-muted text-[14px]">{dict.stories.index.empty}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {stories.map((s, i) => (
              <Link
                key={s.slug}
                href={localePath(`/cau-chuyen-chu-quan/${s.slug}`, locale as Locale)}
                className={`clay-card block p-5 ${CARD_BG[i % CARD_BG.length]}`}
              >
                <div className="flex items-start gap-2 mb-3 text-[11px] text-text-muted flex-wrap">
                  <span className="clay-pill bg-white/70 !py-0.5 !px-2 text-[10px] font-semibold">{s.model.toUpperCase()}</span>
                  <span>·</span>
                  <span>{s.city}</span>
                  <span>·</span>
                  <span>{s.scale}</span>
                </div>
                <h2 className="text-[17px] font-bold text-text font-[family-name:var(--font-heading)] leading-snug mb-2 max-md:text-[16px]">
                  {s.headline}
                </h2>
                <p className="text-[13px] text-text-muted leading-relaxed mb-3">{s.summary}</p>
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-[12px] text-text-muted">
                    {s.ownerName} — {s.ownerRole} · {s.timeframe}
                  </span>
                  <span className="text-[13px] font-semibold text-cta">{dict.stories.index.readMore}</span>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Disclaimer */}
        <p className="text-[11px] text-text-muted italic mt-6 text-center max-w-[620px] mx-auto leading-relaxed">
          {dict.stories.index.disclaimer}
        </p>

        {/* CTA back to tools */}
        <div className="text-center mt-8 flex gap-3 justify-center flex-wrap">
          <Link
            href={localePath('/ai-chat', locale as Locale)}
            className="clay-btn clay-btn-primary text-[14px] px-6 py-2.5 inline-flex items-center gap-2"
          >
            <Icon name="chat" size={18} className="!border-0 !shadow-none !bg-transparent" />
            {dict.stories.detail.ctaAskAI}
          </Link>
          <Link
            href={localePath('/fnb', locale as Locale)}
            className="clay-btn bg-pastel-cream text-[14px] px-6 py-2.5 inline-flex items-center gap-2"
          >
            <Icon name="bolt" size={18} className="!border-0 !shadow-none !bg-transparent" />
            {dict.stories.detail.ctaCalc}
          </Link>
        </div>
      </div>
    </>
  );
}
