'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Icon from '@/components/ui/Icon';
import { useTranslation } from '@/i18n/LocaleProvider';
import { localePath } from '@/i18n/link';
import type { Locale } from '@/i18n/config';
import STORIES_VI from '@/i18n/data/vi/stories';
import STORIES_EN from '@/i18n/data/en/stories';

const CARD_BG = ['bg-pastel-cream', 'bg-pastel-mint', 'bg-pastel-blue'];

export default function OwnerStoriesPreview() {
  const { t, locale } = useTranslation();
  const stories = (locale === 'en' ? STORIES_EN : STORIES_VI).slice(0, 3);
  const dict = t.stories;

  return (
    <motion.section
      className="clay-card-static bg-white p-5 max-md:p-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
        <div>
          <p className="text-[10px] font-bold tracking-[0.15em] text-text-muted uppercase font-[family-name:var(--font-heading)]">
            {dict.index.eyebrow}
          </p>
          <h2 className="text-[16px] font-bold text-text font-[family-name:var(--font-heading)]">
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

      <div className="grid grid-cols-3 gap-3 max-md:grid-cols-1">
        {stories.map((s, i) => (
          <Link
            key={s.slug}
            href={localePath(`/cau-chuyen-chu-quan/${s.slug}`, locale as Locale)}
            className={`clay-card block p-4 ${CARD_BG[i % CARD_BG.length]}`}
          >
            <div className="flex items-center gap-1.5 text-[10px] text-text-muted mb-1.5 flex-wrap">
              <span className="uppercase font-bold">{s.model}</span>
              <span>·</span>
              <span>{s.city}</span>
            </div>
            <h3 className="text-[13px] font-bold text-text font-[family-name:var(--font-heading)] leading-snug mb-1.5">
              {s.headline}
            </h3>
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-cta">
              <Icon name="book" size={14} className="!border-0 !shadow-none !bg-transparent" />
              {dict.index.readMore}
            </span>
          </Link>
        ))}
      </div>
    </motion.section>
  );
}
