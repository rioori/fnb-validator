'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useTranslation } from '@/i18n/LocaleProvider';

interface Stats {
  validations: number;
  subscribers: number;
  messages: number;
  totalVndAnalyzed: number;
}

const COPY = {
  vi: {
    eyebrow: 'Số liệu cộng đồng',
    kicker: 'chủ quán đã soi bằng Validator',
    vnd: 'tổng vốn đã phân tích',
    msg: 'câu hỏi AI đã trả lời',
    footnote: 'Cập nhật thời gian thực · Không kể phiên demo · Free forever',
  },
  en: {
    eyebrow: 'Community stats',
    kicker: 'owners already used Validator',
    vnd: 'total capital analyzed',
    msg: 'AI questions answered',
    footnote: 'Live updated · Excludes demo sessions · Free forever',
  },
} as const;

function formatVndCompact(n: number, locale: 'vi' | 'en'): string {
  if (n >= 1_000_000_000) {
    const v = n / 1_000_000_000;
    return locale === 'vi' ? `${v.toFixed(1)} tỷ` : `${v.toFixed(1)}B`;
  }
  if (n >= 1_000_000) {
    const v = n / 1_000_000;
    return locale === 'vi' ? `${v.toFixed(0)} triệu` : `${v.toFixed(0)}M`;
  }
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K`;
  return n.toString();
}

function CountUp({ to, format }: { to: number; format?: (n: number) => string }) {
  const count = useMotionValue(0);
  const display = useTransform(count, (v) => (format ? format(Math.round(v)) : Math.round(v).toString()));
  useEffect(() => {
    const controls = animate(count, to, { duration: 1.4, ease: 'easeOut' });
    return controls.stop;
  }, [count, to]);
  return <motion.span>{display}</motion.span>;
}

export default function SignatureCounter() {
  const { locale } = useTranslation();
  const t = COPY[locale === 'en' ? 'en' : 'vi'];
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch('/api/stats', { cache: 'default' })
      .then((r) => r.json())
      .then((data: Stats) => {
        if (!cancelled) setStats(data);
      })
      .catch(() => {});
    return () => { cancelled = true; };
  }, []);

  if (!stats || stats.validations < 3) {
    // Suppress the signature moment until there's meaningful signal —
    // showing "1 owner" would break the credibility promise. Ships hidden
    // until Validator has >=3 scenarios (baseline: 18 as of Jul 2026).
    return null;
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="clay-card-lift bg-gradient-to-br from-pastel-cream via-white to-pastel-mint p-6 max-md:p-4 text-center"
    >
      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cta mb-3 font-[family-name:var(--font-heading)]">
        {t.eyebrow}
      </p>
      <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1 max-md:gap-3">
        <div>
          <div className="text-[36px] max-md:text-[28px] font-extrabold text-text font-[family-name:var(--font-heading)] leading-none tabular-nums">
            <CountUp to={stats.validations} />
          </div>
          <p className="text-[11px] text-text-muted mt-2 leading-snug">{t.kicker}</p>
        </div>
        <div>
          <div className="text-[36px] max-md:text-[28px] font-extrabold text-cta font-[family-name:var(--font-heading)] leading-none tabular-nums">
            <CountUp to={stats.totalVndAnalyzed} format={(n) => formatVndCompact(n, locale === 'en' ? 'en' : 'vi')} />
          </div>
          <p className="text-[11px] text-text-muted mt-2 leading-snug">{t.vnd}</p>
        </div>
        <div>
          <div className="text-[36px] max-md:text-[28px] font-extrabold text-text font-[family-name:var(--font-heading)] leading-none tabular-nums">
            <CountUp to={stats.messages} />
          </div>
          <p className="text-[11px] text-text-muted mt-2 leading-snug">{t.msg}</p>
        </div>
      </div>
      <p className="text-[10px] text-text-light mt-4">{t.footnote}</p>
    </motion.section>
  );
}
