'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { track } from '@vercel/analytics';
import { useTranslation } from '@/i18n/LocaleProvider';

interface Insight {
  emoji: string;
  headline: string;
  detail: string;
  action: string;
}

interface Props {
  businessContext: string;
  score: number;
  netMargin: number;
  paybackMonth: number | null;
}

const CACHE_KEY = 'validator_ai_insights_cache';

const SESSION_COPY = {
  vi: {
    heading: 'AI phát hiện 3 điều về dự án của bạn',
    loading: 'AI đang phân tích dữ liệu...',
    error: 'Không lấy được insight lúc này — thử refresh sau.',
    refresh: 'Sinh lại',
    action: 'Việc nên làm tuần này',
  },
  en: {
    heading: 'AI found 3 things about your project',
    loading: 'AI is analyzing your data...',
    error: 'Could not fetch insights — try refresh later.',
    refresh: 'Regenerate',
    action: 'This week action',
  },
} as const;

export default function AIInsightCards({ businessContext, score, netMargin, paybackMonth }: Props) {
  const { locale } = useTranslation();
  const t = SESSION_COPY[locale === 'en' ? 'en' : 'vi'];
  const [insights, setInsights] = useState<Insight[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fetchedRef = useRef(false);

  const cacheKey = `${CACHE_KEY}_${score}_${netMargin.toFixed(1)}_${paybackMonth ?? 'null'}_${locale}`;

  const fetchInsights = async (bypassCache = false) => {
    if (!bypassCache) {
      try {
        const cached = sessionStorage.getItem(cacheKey);
        if (cached) {
          setInsights(JSON.parse(cached));
          return;
        }
      } catch {}
    }

    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/insights', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ businessContext, score, netMargin, paybackMonth, locale }),
      });
      if (!res.ok) throw new Error('fetch failed');
      const data = await res.json();
      if (!data.insights || !Array.isArray(data.insights) || data.insights.length === 0) {
        throw new Error('empty');
      }
      setInsights(data.insights);
      try { sessionStorage.setItem(cacheKey, JSON.stringify(data.insights)); } catch {}
      track('ai_insights_generated', { count: data.insights.length, score_bucket: score >= 65 ? 'good' : score >= 45 ? 'mid' : 'low' });
    } catch {
      setError(t.error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (fetchedRef.current) return;
    fetchedRef.current = true;
    fetchInsights(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading && !insights) {
    return (
      <div className="clay-card-static bg-white p-4 mt-3 no-print">
        <div className="flex items-center gap-2">
          <span className="inline-flex w-2 h-2 rounded-full bg-cta animate-pulse" />
          <p className="text-[12px] text-text-muted">{t.loading}</p>
        </div>
      </div>
    );
  }

  if (error && !insights) {
    return (
      <div className="clay-card-static bg-pastel-blush p-3 mt-3 no-print flex items-center justify-between">
        <p className="text-[12px] text-text-muted">{error}</p>
        <button
          onClick={() => fetchInsights(true)}
          className="text-[12px] font-semibold text-cta hover:underline"
        >
          {t.refresh}
        </button>
      </div>
    );
  }

  if (!insights || insights.length === 0) return null;

  return (
    <motion.section
      className="clay-card-static bg-white p-4 mt-3 no-print"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="inline-flex w-1.5 h-1.5 rounded-full bg-cta animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-cta font-[family-name:var(--font-heading)]">
            AI insights
          </span>
        </div>
        <button
          onClick={() => fetchInsights(true)}
          disabled={loading}
          className="text-[11px] font-semibold text-text-muted hover:text-cta disabled:opacity-50"
        >
          {loading ? '...' : t.refresh}
        </button>
      </div>
      <h3 className="text-[13px] font-bold text-text font-[family-name:var(--font-heading)] mb-3">{t.heading}</h3>
      <div className="grid grid-cols-3 gap-2 max-md:grid-cols-1">
        {insights.map((ins, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * i }}
            className="clay-card block p-3 bg-pastel-cream"
          >
            <div className="text-[22px] mb-1.5">{ins.emoji}</div>
            <h4 className="text-[12px] font-bold text-text font-[family-name:var(--font-heading)] leading-snug mb-1.5">
              {ins.headline}
            </h4>
            <p className="text-[11px] text-text-muted leading-snug mb-2">{ins.detail}</p>
            <div className="pt-1.5 border-t border-border-light">
              <p className="text-[10px] font-bold uppercase tracking-wider text-cta mb-0.5">{t.action}</p>
              <p className="text-[11px] text-text leading-snug">{ins.action}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
