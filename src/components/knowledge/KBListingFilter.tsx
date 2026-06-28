'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '@/components/ui/Icon';
import type { KBCategory, KBTopic } from '@/types';

type FilterType = 'all' | KBCategory;

const CATEGORY_KEYS: KBCategory[] = ['trends', 'cost', 'operations', 'strategy', 'legal', 'technology'];

const colorMap: Record<string, string> = {
  'primary-light': 'bg-primary-light',
  'secondary-light': 'bg-secondary-light',
  'mint-light': 'bg-mint-light',
};

interface Props {
  topics: KBTopic[];
  categoryLabels: Record<KBCategory, string>;
  filterAllLabel: string;
  locale: string;
  localePrefixedPaths: Record<string, string>;
  featuredBadge: string;
  featuredReadNow: string;
  clusterIntros?: Record<KBCategory, string>;
}

export default function KBListingFilter({ topics, categoryLabels, filterAllLabel, localePrefixedPaths, featuredBadge, featuredReadNow, clusterIntros }: Props) {
  const [filter, setFilter] = useState<FilterType>('all');

  const filterOptions: [FilterType, string][] = [
    ['all', filterAllLabel],
    ...CATEGORY_KEYS.map((key) => [key, categoryLabels[key]] as [FilterType, string]),
  ];

  const filtered = filter === 'all'
    ? topics
    : topics.filter((t) => t.category === filter);

  // Group by category for section headers
  const grouped = CATEGORY_KEYS
    .map((key) => ({
      key,
      label: categoryLabels[key],
      items: filtered.filter((t) => t.category === key),
    }))
    .filter((g) => g.items.length > 0);

  const featuredTopic = topics[0];

  return (
    <>
      {/* Featured article — only when showing all */}
      {filter === 'all' && featuredTopic && (
        <Link
          href={localePrefixedPaths[featuredTopic.slug] || `/kien-thuc/${featuredTopic.slug}`}
          className="clay-card-static block mb-6 overflow-hidden hover:shadow-[3px_3px_0_var(--color-text)] transition-shadow bg-pastel-gold"
        >
          <div className="overflow-hidden bg-pastel-cream/50">
            <Image
              src="/illustrations/kb-featured-banner.webp"
              alt=""
              width={1584}
              height={672}
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          <div className="p-4">
            <span className="clay-pill bg-cta text-white !text-[10px] !border-cta mb-2 inline-flex">
              {featuredBadge}
            </span>
            <h3 className="text-[16px] font-bold font-[family-name:var(--font-heading)] text-text">
              {featuredTopic.title}
            </h3>
            <p className="text-[13px] text-text-muted mt-1">{featuredTopic.subtitle}</p>
            {featuredTopic.highlights && (
              <div className="flex flex-wrap gap-1.5 mt-2">
                {featuredTopic.highlights.slice(0, 3).map((h, i) => (
                  <span key={i} className="clay-pill bg-white/80 !py-0.5 !px-2 !text-[10px]">
                    <strong className="text-cta">{h.value}</strong> {h.label}
                  </span>
                ))}
              </div>
            )}
            <span className="inline-block mt-3 text-[13px] font-semibold text-cta">
              {featuredReadNow}
            </span>
          </div>
        </Link>
      )}

      {/* Filter pills */}
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {filterOptions.map(([key, label]) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`px-3.5 py-1.5 rounded-full text-[12px] font-semibold border-2 transition-all cursor-pointer ${
              filter === key
                ? 'border-cta bg-cta text-white shadow-[2px_2px_0_var(--color-text)]'
                : 'border-border bg-white text-text-muted hover:border-text'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Topic listing by category */}
      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
        >
          {grouped.map(({ key, label, items }) => (
            <section key={key} className="mb-8">
              <h2 className="text-[14px] font-bold font-[family-name:var(--font-heading)] uppercase tracking-wider text-text-muted mb-3">
                {label}
              </h2>
              {clusterIntros && clusterIntros[key as KBCategory] && (
                <p className="text-[13px] text-text-muted leading-relaxed mb-4 max-w-2xl">
                  {clusterIntros[key as KBCategory]}
                </p>
              )}
              <div className="grid grid-cols-2 gap-3 max-md:grid-cols-1">
                {items.map((topic) => (
                  <Link
                    key={topic.id}
                    href={localePrefixedPaths[topic.slug] || `/kien-thuc/${topic.slug}`}
                    className="clay-card-static block overflow-hidden hover:shadow-[3px_3px_0_var(--color-text)] transition-shadow"
                  >
                    {/* Thumbnail area */}
                    <div className={`${colorMap[topic.color] || 'bg-surface'} flex items-center justify-center py-5`}>
                      <Icon name={topic.icon} size={48} />
                    </div>
                    {/* Content */}
                    <div className="p-3.5">
                      <h3 className="text-[14px] font-bold font-[family-name:var(--font-heading)] text-text leading-tight mb-1">
                        {topic.title}
                      </h3>
                      <p className="text-[11px] text-text-muted leading-relaxed line-clamp-2">{topic.subtitle}</p>
                      {topic.publishDate && (
                        <span className="text-[10px] text-text-light mt-1.5 block">
                          {new Date(topic.publishDate + 'T00:00:00').toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' })}
                        </span>
                      )}
                      {topic.highlights && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {topic.highlights.slice(0, 2).map((h, i) => (
                            <span
                              key={i}
                              className="clay-pill bg-surface !py-0.5 !px-2 !text-[10px]"
                            >
                              <strong className="text-cta">{h.value}</strong> {h.label}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
