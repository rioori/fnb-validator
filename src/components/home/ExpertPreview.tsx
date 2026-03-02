'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from '@/i18n/LocaleProvider';
import { localePath } from '@/i18n/link';
import type { Locale } from '@/i18n/config';
import type { Expert } from '@/types';
import EXPERTS_VI from '@/i18n/data/vi/experts';
import EXPERTS_EN from '@/i18n/data/en/experts';

const FEATURED_IDS = [
  'do-duy-thanh',
  'nguyen-hai-ninh',
  'ha-chu',
  'ly-quy-trung',
  'nguyen-ha-linh',
  'yosuke-masuko',
];

const CARD_BGS = ['bg-pastel-cream', 'bg-pastel-mint', 'bg-pastel-blue', 'bg-pastel-gold', 'bg-pastel-blush', 'bg-pastel-cream'];
const BORDER_ACCENTS = ['border-l-[#C8A96E]', 'border-l-[#7CB98B]', 'border-l-[#7BAFCB]', 'border-l-[#D4956A]', 'border-l-[#B88BAF]', 'border-l-[#C8A96E]'];

function smartTruncate(text: string, max: number): string {
  if (text.length <= max) return text;
  const cut = text.lastIndexOf(' ', max);
  return text.slice(0, cut > 0 ? cut : max) + '…';
}

interface Props {
  heading: string;
  desc: string;
  viewAllLabel: string;
}

export default function ExpertPreview({ heading, desc, viewAllLabel }: Props) {
  const { locale } = useTranslation();
  const allExperts: Expert[] = locale === 'en' ? EXPERTS_EN : EXPERTS_VI;
  const featured = FEATURED_IDS.map((id) => allExperts.find((e) => e.id === id)).filter(Boolean) as Expert[];

  return (
    <div className="mb-4">
      {/* Section header */}
      <div className="text-center mb-4">
        <h2 className="text-[15px] font-bold font-[family-name:var(--font-heading)] text-text">
          {heading}
        </h2>
        <p className="text-[12px] text-text-muted mt-1">{desc}</p>
      </div>

      {/* Expert cards — 3 cols desktop, 2 cols tablet, 1 col mobile */}
      <div className="grid grid-cols-3 gap-3 max-lg:grid-cols-2 max-md:grid-cols-1">
        {featured.map((expert, i) => {
          const quote = expert.quotes[0];
          return (
            <Link
              key={expert.id}
              href={localePath(`/goc-nhin-chuyen-gia/${expert.slug}`, locale as Locale)}
              className={`clay-card block p-4 h-full flex flex-col ${CARD_BGS[i]}`}
            >
              {/* Quote */}
              {quote && (
                <p className={`text-[13px] text-text italic leading-relaxed border-l-[3px] ${BORDER_ACCENTS[i]} pl-3 mb-3 flex-1`}>
                  &ldquo;{smartTruncate(quote.text, 80)}&rdquo;
                </p>
              )}
              {/* Avatar + Name */}
              <div className="flex items-center gap-2.5 mt-auto">
                <div className="w-10 h-10 rounded-full border-[1.5px] border-text overflow-hidden shrink-0 shadow-[1px_1px_0_var(--color-text)]">
                  {expert.photo ? (
                    <Image
                      src={expert.photo}
                      alt={expert.name}
                      width={40}
                      height={40}
                      className="object-cover object-top w-full h-full"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#FDEEC4] to-[#FDBCB4]">
                      <span className="font-bold text-text/60 text-[14px]">
                        {expert.name.split(' ').pop()?.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <div className="min-w-0">
                  <h3 className="text-[13px] font-bold font-[family-name:var(--font-heading)] text-text leading-tight truncate">
                    {expert.name}
                  </h3>
                  <p className="text-[10px] text-text-muted leading-snug mt-0.5 line-clamp-1">{expert.descriptor}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* View all link */}
      <div className="text-center mt-3">
        <Link
          href={localePath('/goc-nhin-chuyen-gia', locale as Locale)}
          className="text-[13px] font-semibold text-cta hover:underline"
        >
          {viewAllLabel}
        </Link>
      </div>
    </div>
  );
}
