'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import type { Expert, ExpertCategory } from '@/types';

type FilterType = 'all' | ExpertCategory;

const CATEGORY_KEYS: ExpertCategory[] = ['consultant', 'inspiration'];

const AVATAR_GRADIENTS = [
  'from-[#FDEEC4] to-[#FDBCB4]',
  'from-[#D2ECD0] to-[#E5F4F8]',
  'from-[#E5F4F8] to-[#D4EDFC]',
  'from-[#FDE8E4] to-[#FDEEC4]',
  'from-[#FAF3E3] to-[#D2ECD0]',
];

const CARD_BGS = [
  'bg-pastel-cream',
  'bg-pastel-mint',
  'bg-pastel-blue',
  'bg-pastel-gold',
  'bg-pastel-blush',
];

const BORDER_ACCENTS = [
  'border-l-[#C8A96E]',  // warm gold
  'border-l-[#7CB98B]',  // sage green
  'border-l-[#7BAFCB]',  // soft blue
  'border-l-[#D4956A]',  // terracotta
  'border-l-[#B88BAF]',  // muted mauve
];

interface Props {
  experts: Expert[];
  categoryLabels: Record<ExpertCategory, string>;
  filterAllLabel: string;
  locale: string;
  localePrefixedPaths: Record<string, string>;
}

/** Vietnamese names: use first char of the given name (last word) */
function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    // Vietnamese: Họ Đệm Tên → show first char of Tên (given name)
    return parts[parts.length - 1].charAt(0);
  }
  return name.charAt(0);
}

function ExpertAvatar({ expert, size, index }: { expert: Expert; size: number; index: number }) {
  const gradient = AVATAR_GRADIENTS[index % AVATAR_GRADIENTS.length];
  const fontSize = Math.round(size * 0.4);
  const borderW = size >= 64 ? 'border-2' : 'border-[1.5px]';
  const shadow = size >= 64 ? 'shadow-[2px_2px_0_var(--color-text)]' : 'shadow-[1px_1px_0_var(--color-text)]';

  return (
    <div
      className={`rounded-full ${borderW} border-text overflow-hidden shrink-0 ${shadow}`}
      style={{ width: size, height: size }}
    >
      {expert.photo ? (
        <Image
          src={expert.photo}
          alt={expert.name}
          width={size}
          height={size}
          className="object-cover w-full h-full"
          loading="lazy"
        />
      ) : (
        <div
          className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${gradient}`}
          style={{ fontSize }}
        >
          <span className="font-bold text-text/60 font-[family-name:var(--font-heading)]">
            {getInitials(expert.name)}
          </span>
        </div>
      )}
    </div>
  );
}

/** Truncate at word boundary, never mid-word */
function smartTruncate(text: string, max: number): string {
  if (text.length <= max) return text;
  const cut = text.lastIndexOf(' ', max);
  return text.slice(0, cut > 0 ? cut : max) + '…';
}

function ExpertQuoteCard({ expert, href, index }: { expert: Expert; href: string; index: number }) {
  const cardBg = CARD_BGS[index % CARD_BGS.length];
  const borderAccent = BORDER_ACCENTS[index % BORDER_ACCENTS.length];
  const signatureQuote = expert.quotes[0];

  return (
    <Link
      href={href}
      className={`clay-card block p-5 h-full flex flex-col ${cardBg}`}
    >
      {/* Quote with colored left accent */}
      {signatureQuote && (
        <div className="mb-4 flex-1">
          <p className={`text-[14px] text-text italic leading-relaxed border-l-[3px] ${borderAccent} pl-3.5`}>
            &ldquo;{smartTruncate(signatureQuote.text, 100)}&rdquo;
          </p>
        </div>
      )}

      {/* Avatar + Name */}
      <div className="flex items-center gap-3 mt-auto">
        <ExpertAvatar expert={expert} size={48} index={index} />
        <div className="min-w-0 flex-1">
          <h3 className="text-[14px] font-bold font-[family-name:var(--font-heading)] text-text leading-tight">
            {expert.name}
          </h3>
          <p className="text-[11px] text-text-muted mt-0.5 leading-snug">{expert.descriptor}</p>
        </div>
      </div>
    </Link>
  );
}

export default function ExpertListingFilter({
  experts,
  categoryLabels,
  filterAllLabel,
  localePrefixedPaths,
}: Props) {
  const [filter, setFilter] = useState<FilterType>('all');

  const filterOptions: [FilterType, string][] = [
    ['all', filterAllLabel],
    ...CATEGORY_KEYS.map((key) => [key, categoryLabels[key]] as [FilterType, string]),
  ];

  const filtered = filter === 'all'
    ? experts
    : experts.filter((e) => e.category === filter);

  return (
    <>
      {/* Filter pills */}
      <div className="flex flex-wrap gap-2 justify-center mb-4">
        {filterOptions.map(([key, label]) => {
          const count = key === 'all'
            ? experts.length
            : experts.filter((e) => e.category === key).length;
          return (
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
              <span className={`ml-1.5 text-[10px] ${filter === key ? 'text-white/70' : 'text-text-light'}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Expert grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          className="grid grid-cols-3 gap-3 max-lg:grid-cols-2 max-md:grid-cols-1"
          initial="hidden"
          animate="show"
          exit="hidden"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.05 },
            },
          }}
        >
          {filtered.map((expert, idx) => (
            <motion.div
              key={expert.id}
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.96 },
                show: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ type: 'spring', stiffness: 320, damping: 24 }}
            >
              <ExpertQuoteCard
                expert={expert}
                href={localePrefixedPaths[expert.slug] || `/goc-nhin-chuyen-gia/${expert.slug}`}
                index={idx}
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
