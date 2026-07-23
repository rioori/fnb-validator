'use client';

import { track } from '@vercel/analytics';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import { defaultLocale, type Locale } from '@/i18n/config';
import { localePath } from '@/i18n/link';

// Final CTA card at the end of every expert bio. Anchors the reader with a
// context-specific hook ("after reading X, do Y") instead of a generic button.
// Tracks `expert_bio_cta_click` per slug + action so we can measure which
// framing converts on which expert.

interface Props {
  locale: string;
  expertName: string;
  expertSlug: string;
  expertDescriptor: string;
  model?: string;
}

const COPY = {
  vi: {
    eyebrow: 'Sau khi đọc',
    headline: (name: string) => `Insight từ ${name} là điểm khởi đầu — quán của bạn cần con số cụ thể.`,
    body: (descriptor: string) =>
      `Đừng chỉ đọc rồi để đó. Áp dụng lối tư duy của ${descriptor} vào chính mô hình của bạn: kiểm tra khả thi, so benchmark, hoặc hỏi AI câu hỏi cụ thể.`,
    primaryTitle: 'Kiểm tra khả thi quán',
    primaryDesc: 'Nhập vốn + doanh thu kỳ vọng → biết lời/lỗ tháng đầu',
    primaryCta: 'Bắt đầu thẩm định',
    secondaryTitle: 'Hỏi AI về insight cụ thể',
    secondaryDesc: (name: string) => `"Áp dụng lối làm của ${name} vào quán em thế nào?"`,
    secondaryCta: 'Hỏi ngay',
  },
  en: {
    eyebrow: 'After reading',
    headline: (name: string) => `${name}'s insight is a starting point — your shop needs concrete numbers.`,
    body: (descriptor: string) =>
      `Don't just read and forget. Apply ${descriptor}'s thinking to your own model: check feasibility, benchmark costs, or ask AI a specific question.`,
    primaryTitle: 'Check your shop feasibility',
    primaryDesc: 'Enter capital + expected revenue → month-one profit/loss',
    primaryCta: 'Start validation',
    secondaryTitle: 'Ask AI a specific question',
    secondaryDesc: (name: string) => `"How do I apply ${name}'s approach to my shop?"`,
    secondaryCta: 'Ask now',
  },
} as const;

function buildWizardUrl(locale: string, model?: string): string {
  const base = locale === defaultLocale ? '/fnb' : '/en/fnb';
  const params = new URLSearchParams();
  params.set('start', '1');
  if (model) params.set('model', model);
  params.set('utm_source', 'expert');
  params.set('utm_medium', 'final-cta');
  return `${base}?${params.toString()}`;
}

function buildAIChatUrl(locale: string, expertSlug: string, expertName: string, isEn: boolean): string {
  const path = localePath('/ai-chat', locale as Locale);
  const seed = isEn
    ? `How do I apply ${expertName}'s approach to my F&B shop? What specific numbers should I check?`
    : `Áp dụng lối làm của ${expertName} vào quán của em thế nào? Em cần check số cụ thể nào?`;
  const params = new URLSearchParams({
    q: seed,
    utm_source: 'expert',
    utm_medium: 'final-cta',
    utm_campaign: expertSlug,
  });
  return `${path}?${params.toString()}`;
}

export default function ExpertFinalCTA({
  locale,
  expertName,
  expertSlug,
  expertDescriptor,
  model,
}: Props) {
  const isEn = locale === 'en';
  const c = isEn ? COPY.en : COPY.vi;

  const handleClick = (action: 'wizard' | 'ai') => {
    try {
      track('expert_bio_cta_click', { slug: expertSlug, action, locale });
      track('north_star_action', { source: 'expert_bio_cta', action });
    } catch {}
  };

  return (
    <section
      className="clay-card-static bg-pastel-blush p-6 mt-10 max-md:p-5"
      aria-label="After-reading call to action"
    >
      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-cta font-[family-name:var(--font-heading)] mb-1">
        {c.eyebrow} {expertName}
      </p>
      <h2 className="text-[18px] font-bold text-text font-[family-name:var(--font-heading)] leading-snug mb-2 max-md:text-[16px]">
        {c.headline(expertName)}
      </h2>
      <p className="text-[13px] text-text-muted leading-relaxed mb-4">
        {c.body(expertDescriptor.toLowerCase())}
      </p>

      <div className="grid grid-cols-2 gap-3 max-md:grid-cols-1">
        {/* Primary — wizard */}
        <Link
          href={buildWizardUrl(locale, model)}
          onClick={() => handleClick('wizard')}
          className="clay-card block p-4 bg-white hover:bg-pastel-mint transition-colors group"
        >
          <div className="flex items-center gap-2 mb-1.5">
            <Icon
              name="wizard"
              size={22}
              className="!border-[1.5px] !shadow-none shrink-0"
            />
            <h3 className="text-[13px] font-bold text-text font-[family-name:var(--font-heading)]">
              {c.primaryTitle}
            </h3>
          </div>
          <p className="text-[12px] text-text-muted leading-relaxed mb-2">
            {c.primaryDesc}
          </p>
          <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-cta group-hover:gap-2 transition-all">
            {c.primaryCta}
            <span>→</span>
          </span>
        </Link>

        {/* Secondary — AI chat with seeded question */}
        <Link
          href={buildAIChatUrl(locale, expertSlug, expertName, isEn)}
          onClick={() => handleClick('ai')}
          className="clay-card block p-4 bg-white hover:bg-pastel-blue transition-colors group"
        >
          <div className="flex items-center gap-2 mb-1.5">
            <Icon
              name="chat"
              size={22}
              className="!border-[1.5px] !shadow-none shrink-0"
            />
            <h3 className="text-[13px] font-bold text-text font-[family-name:var(--font-heading)]">
              {c.secondaryTitle}
            </h3>
          </div>
          <p className="text-[12px] text-text-muted leading-relaxed mb-2 italic">
            {c.secondaryDesc(expertName)}
          </p>
          <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-cta group-hover:gap-2 transition-all">
            {c.secondaryCta}
            <span>→</span>
          </span>
        </Link>
      </div>
    </section>
  );
}
