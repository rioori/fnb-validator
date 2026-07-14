'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Icon from '@/components/ui/Icon';
import { useTranslation } from '@/i18n/LocaleProvider';
import { localePath } from '@/i18n/link';
import type { Locale } from '@/i18n/config';
import type { OwnerStory, StoryMetric } from '@/types';
import STORIES_VI from '@/i18n/data/vi/stories';
import STORIES_EN from '@/i18n/data/en/stories';

// Pick a headline metric — the one whose delta feels most "wow" (biggest %/most positive change)
function pickHeadlineMetric(story: OwnerStory): StoryMetric | undefined {
  if (!story.metrics || story.metrics.length === 0) return undefined;
  // Prefer positive deltas expressed as %/gấp
  const scored = story.metrics.map((m) => {
    const d = m.delta || '';
    const num = parseFloat(d.replace(/[^\d.-]/g, ''));
    // Boost score if delta uses + prefix or "gấp" (multiplier)
    const positive = /\+|gấp|\bx\d/i.test(d) ? 1 : 0;
    return { m, s: (isNaN(num) ? 0 : Math.abs(num)) + positive * 10 };
  });
  scored.sort((a, b) => b.s - a.s);
  return scored[0]?.m;
}

export default function OwnerStoriesPreview() {
  const { t, locale } = useTranslation();
  const stories = (locale === 'en' ? STORIES_EN : STORIES_VI).slice(0, 3);
  const dict = t.stories;
  const [hero, ...rest] = stories;
  const heroMetric = pickHeadlineMetric(hero);

  const heroHref = localePath(`/cau-chuyen-chu-quan/${hero.slug}`, locale as Locale);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      className="space-y-3"
    >
      {/* Section header */}
      <div className="flex items-end justify-between gap-3 flex-wrap px-1">
        <div>
          <p className="text-[10px] font-bold tracking-[0.15em] text-cta uppercase font-[family-name:var(--font-heading)]">
            {dict.index.eyebrow}
          </p>
          <h2 className="text-[18px] font-bold text-text font-[family-name:var(--font-heading)] leading-tight mt-0.5">
            {dict.homeLink.label}
          </h2>
          <p className="text-[12px] text-text-muted mt-0.5">{dict.homeLink.desc}</p>
        </div>
        <Link
          href={localePath('/cau-chuyen-chu-quan', locale as Locale)}
          className="text-[12px] font-semibold text-cta hover:underline whitespace-nowrap"
        >
          {dict.homeLink.cta}
        </Link>
      </div>

      {/* Asymmetric grid: hero (2 cols) + 2 stacked small (1 col) */}
      <div className="grid grid-cols-3 gap-3 max-md:grid-cols-1">
        {/* Hero card — spans 2 cols, includes headline metric */}
        <Link
          href={heroHref}
          className="clay-card-lift col-span-2 max-md:col-span-1 block p-5 bg-pastel-mint relative overflow-hidden group"
        >
          <div className="flex items-center gap-2 text-[10px] text-text-muted mb-2 flex-wrap">
            <span className="uppercase font-bold bg-white/70 rounded-full px-2 py-0.5">{hero.model}</span>
            <span>·</span>
            <span>{hero.city}</span>
            <span>·</span>
            <span>{hero.scale}</span>
          </div>
          <h3 className="text-[18px] font-bold text-text font-[family-name:var(--font-heading)] leading-tight mb-2 max-md:text-[16px]">
            {hero.headline}
          </h3>
          <p className="text-[12px] text-text-muted leading-relaxed mb-3 line-clamp-2">{hero.summary}</p>

          {heroMetric && (
            <div className="flex items-end gap-3 bg-white/70 rounded-xl p-3 mb-3 border-2 border-text/20">
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-wider text-text-muted mb-0.5">
                  {heroMetric.label}
                </p>
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-[11px] text-text-light line-through">{heroMetric.before}</span>
                  <span className="text-[11px] text-text-light">→</span>
                  <span className="text-[22px] font-extrabold text-cta font-[family-name:var(--font-heading)] leading-none tabular-nums">
                    {heroMetric.after}
                  </span>
                </div>
              </div>
              {heroMetric.delta && (
                <span className="clay-pill bg-cta text-white text-[11px] font-bold whitespace-nowrap shrink-0">
                  {heroMetric.delta}
                </span>
              )}
            </div>
          )}

          <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-cta group-hover:gap-2 transition-all">
            {dict.index.readMore}
            <span>→</span>
          </span>
        </Link>

        {/* 2 stacked small cards */}
        <div className="col-span-1 flex flex-col gap-3">
          {rest.map((s, i) => (
            <Link
              key={s.slug}
              href={localePath(`/cau-chuyen-chu-quan/${s.slug}`, locale as Locale)}
              className={`clay-card block p-3 flex-1 ${i === 0 ? 'bg-pastel-blue' : 'bg-pastel-cream'}`}
            >
              <div className="flex items-center gap-1.5 text-[10px] text-text-muted mb-1 flex-wrap">
                <span className="uppercase font-bold">{s.model}</span>
                <span>·</span>
                <span>{s.city}</span>
              </div>
              <h3 className="text-[12px] font-bold text-text font-[family-name:var(--font-heading)] leading-snug mb-1.5 line-clamp-3">
                {s.headline}
              </h3>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-cta">
                <Icon name="book" size={12} className="!border-0 !shadow-none !bg-transparent" />
                {dict.index.readMore}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
