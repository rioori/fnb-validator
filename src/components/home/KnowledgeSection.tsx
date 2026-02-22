'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import KBTopicCard from '@/components/knowledge/KBTopicCard';
import Icon from '@/components/ui/Icon';
import { useTranslation, useLocale } from '@/i18n/LocaleProvider';
import { localePath } from '@/i18n/link';
import type { KBCategory, KBTopic } from '@/types';
import KNOWLEDGE_BASE_VI from '@/i18n/data/vi/knowledge';
import KNOWLEDGE_BASE_EN from '@/i18n/data/en/knowledge';

function getKB(locale: string): KBTopic[] {
  return locale === 'en' ? KNOWLEDGE_BASE_EN : KNOWLEDGE_BASE_VI;
}

type FilterType = 'all' | KBCategory;

export default function KnowledgeSection() {
  const { t } = useTranslation();
  const locale = useLocale();
  const kb = getKB(locale);
  const [filter, setFilter] = useState<FilterType>('all');

  const filtered = filter === 'all'
    ? kb
    : kb.filter((item) => item.category === filter);

  const CATEGORY_CONFIG: Record<'all' | KBCategory, { label: string }> = {
    all: { label: t.knowledge.section.filterAll },
    cost: { label: t.knowledge.categories.cost },
    operations: { label: t.knowledge.categories.operations },
    strategy: { label: t.knowledge.categories.strategy },
    legal: { label: t.knowledge.categories.legal },
  };

  const filterOptions = Object.entries(CATEGORY_CONFIG) as [FilterType, { label: string }][];

  return (
    <div className="mb-4">
      {/* Header */}
      <div className="clay-card-static bg-pastel-mint p-6 mb-3">
        <div className="text-center">
          <Icon name="book" size={48} className="mx-auto mb-2" />
          <h2 className="text-lg font-bold text-text font-[family-name:var(--font-heading)]">
            {t.knowledge.section.heading}
          </h2>
          <p className="text-[13px] text-text-muted mt-1 max-w-[520px] mx-auto">
            {t.knowledge.section.desc}
          </p>
        </div>
      </div>

      {/* Stats banner */}
      <motion.div
        className="clay-card-static bg-white p-4 mb-3"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        <h3 className="text-[11px] font-bold font-[family-name:var(--font-heading)] uppercase tracking-wider text-text-muted mb-3 text-center">
          {t.knowledge.section.needToKnow}
        </h3>
        <div className="grid grid-cols-4 gap-2 max-md:grid-cols-2">
          {t.knowledge.sectionStats.map((stat) => (
            <div key={stat.label} className="text-center p-2 rounded-xl bg-surface3/50">
              <span className="text-[18px] font-bold font-[family-name:var(--font-heading)] text-text block max-md:text-[15px]">
                {stat.value}
              </span>
              <span className="text-[10px] text-text-muted block leading-tight">{stat.label}</span>
              <span className="text-[9px] text-text-light">{stat.sub}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Filter pills */}
      <motion.div
        className="flex flex-wrap gap-2 justify-center mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        {filterOptions.map(([key, cfg]) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`px-3.5 py-1.5 rounded-full text-[12px] font-semibold border-2 transition-all cursor-pointer ${
              filter === key
                ? 'border-cta bg-cta text-white shadow-[2px_2px_0_var(--color-text)]'
                : 'border-border bg-white text-text-muted hover:border-text'
            }`}
          >
            {cfg.label}
          </button>
        ))}
      </motion.div>

      {/* Topic cards */}
      <motion.div
        key={filter}
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.06 } },
        }}
      >
        {filtered.map((topic, index) => (
          <motion.div
            key={topic.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
          >
            <KBTopicCard topic={topic} defaultOpen={index === 0} />
            <div className="text-right -mt-1 mb-3 mr-2">
              <Link
                href={localePath(`/kien-thuc/${topic.slug}`, locale)}
                className="text-[11px] text-cta hover:underline"
              >
                {t.knowledge.section.viewArticle}
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="text-center py-8 text-text-muted text-[13px]">
          {t.knowledge.section.emptyState}
        </div>
      )}

      {/* Footer note */}
      <p className="text-center text-[11px] text-text-muted italic mt-4">
        {t.knowledge.section.footerNote}
        <br />
        {t.knowledge.section.footerNoteLine2}
      </p>
    </div>
  );
}
