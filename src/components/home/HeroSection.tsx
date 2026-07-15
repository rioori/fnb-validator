'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { track } from '@vercel/analytics';
import { useWizardStore } from '@/hooks/useWizardStore';
import Icon from '@/components/ui/Icon';
import { useTranslation } from '@/i18n/LocaleProvider';
import { useModels } from '@/hooks/useModels';
import { localePath } from '@/i18n/link';
import type { Locale } from '@/i18n/config';
import type { ModelKey, FnBModel } from '@/types';
import type { HomeView } from './HomePage';

interface HeroSectionProps {
  onNavigate: (view: HomeView) => void;
}

// A/B test — hero primary CTA copy.
// Variant A = original ("Hỏi AI về quán của bạn"), Variant B = benchmark-forward
// ("Kiểm tra sức khỏe quán trong 60 giây"). Persisted per-visitor in localStorage
// so the same user sees the same variant across sessions and the analytics stays
// clean. Track fires on: initial view (once/session), form submit, secondary click.
type HeroVariant = 'A' | 'B';
const HERO_VARIANT_KEY = 'hero_cta_variant_v1';
const HERO_CLIENT_ID_KEY = 'hero_ab_client_id_v1';
const HERO_EXPERIMENT = 'hero_cta_v1';

function resolveHeroVariant(): HeroVariant {
  if (typeof window === 'undefined') return 'A';
  try {
    const existing = localStorage.getItem(HERO_VARIANT_KEY);
    if (existing === 'A' || existing === 'B') return existing;
    const assigned: HeroVariant = Math.random() < 0.5 ? 'A' : 'B';
    localStorage.setItem(HERO_VARIANT_KEY, assigned);
    return assigned;
  } catch {
    return 'A';
  }
}

function resolveClientId(): string {
  if (typeof window === 'undefined') return 'ssr';
  try {
    const existing = localStorage.getItem(HERO_CLIENT_ID_KEY);
    if (existing) return existing;
    const fresh = 'c_' + Math.random().toString(36).slice(2, 12) + Date.now().toString(36);
    localStorage.setItem(HERO_CLIENT_ID_KEY, fresh);
    return fresh;
  } catch {
    return 'anon';
  }
}

function postAbEvent(variant: HeroVariant, event: 'view' | 'ask') {
  try {
    void fetch('/api/ab-track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        experiment: HERO_EXPERIMENT,
        variant,
        event,
        clientId: resolveClientId(),
      }),
      keepalive: true,
    }).catch(() => {});
  } catch {}
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  const { t, locale } = useTranslation();
  const models = useModels();
  const setStep = useWizardStore((s) => s.setStep);
  const router = useRouter();
  const [quoteIdx, setQuoteIdx] = useState(0);
  const [aiQuestion, setAiQuestion] = useState('');
  const [variant, setVariant] = useState<HeroVariant>('A');
  const quotes = t.fnbHome.quotes;
  const primary = variant === 'B'
    ? t.fnbHome.hero.primaryCtaB
    : t.fnbHome.hero.primaryCta;
  const secondary = t.fnbHome.hero.secondaryLinks;

  useEffect(() => {
    const timer = setInterval(() => {
      setQuoteIdx((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [quotes.length]);

  useEffect(() => {
    const v = resolveHeroVariant();
    setVariant(v);
    // Fire once per session so we can compute impression → conversion rate per variant.
    try {
      const seenKey = `hero_variant_seen_${v}`;
      if (!sessionStorage.getItem(seenKey)) {
        track('hero_variant_view', { variant: v });
        postAbEvent(v, 'view');
        sessionStorage.setItem(seenKey, '1');
      }
    } catch {}
  }, []);

  const handleAskAi = (e?: React.FormEvent) => {
    e?.preventDefault();
    track('hero_ai_ask', { has_question: aiQuestion.trim().length > 0, variant });
    track('north_star_action', { source: 'hero_ai', variant });
    postAbEvent(variant, 'ask');
    if (aiQuestion.trim().length > 0) {
      try {
        sessionStorage.setItem('ai_chat_seed_question', aiQuestion.trim());
      } catch {}
    }
    onNavigate('ai-chat');
  };

  const handleSecondary = (target: 'wizard' | 'knowledge') => {
    track('hero_secondary_click', { target, variant });
    if (target === 'wizard') setStep(1);
    else router.push(localePath('/kien-thuc', locale as Locale));
  };

  return (
    <div className="clay-card-static bg-white pb-4 text-center max-md:pb-3 overflow-hidden">
      {/* Storefront banner — flush top, no padding */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src="/illustrations/hero-shops-v6.webp"
          alt="Cafe, restaurant, and bubble tea shopfronts illustration — Validator.vn F&B business validation"
          width={1584}
          height={672}
          className="w-full"
          priority
        />
      </motion.div>

      {/* Content area */}
      <div className="px-6 pt-1 max-md:px-4 max-md:pt-1">
        {/* Logo — blur-to-sharp */}
        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.6 }}
        >
          <Image src="/logo.png" alt={t.fnbHome.hero.logoAlt} width={72} height={72} className="mx-auto mb-0.5" />
        </motion.div>

        {/* Tagline — fade up */}
        <motion.p
          className="text-[11px] text-text-muted font-[family-name:var(--font-heading)] font-medium mb-2"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {t.fnbHome.hero.tagline}
        </motion.p>

        {/* Heading — fade up (h1 for SEO; page-level primary heading) */}
        <motion.h1
          className="text-xl font-bold text-text font-[family-name:var(--font-heading)] mb-1.5 max-md:text-lg"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
        >
          {t.fnbHome.hero.heading}
        </motion.h1>

        {/* Rotating quotes — AnimatePresence crossfade + slide */}
        <div className="h-[24px] max-md:h-[20px] flex items-center justify-center mb-3 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={quoteIdx}
              className="text-text-muted text-[13px] max-md:text-[11px] italic whitespace-nowrap"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              &ldquo;{quotes[quoteIdx]}&rdquo;
            </motion.p>
          </AnimatePresence>
        </div>

        {/* PRIMARY: AI Chat inline input (hero of hero) */}
        <motion.form
          onSubmit={handleAskAi}
          className="max-w-[560px] mx-auto"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="mb-2 flex items-center justify-center gap-1.5">
            <span className="inline-flex w-2 h-2 rounded-full bg-cta animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-cta font-[family-name:var(--font-heading)]">
              {primary.label}
            </span>
          </div>
          <div className="clay-card-static bg-white p-2 flex items-center gap-2 max-md:flex-col max-md:p-2.5">
            <div className="flex items-center gap-2 flex-1 w-full px-2">
              <Icon name="chat" size={20} className="!border-0 !shadow-none !bg-transparent shrink-0" />
              <input
                type="text"
                value={aiQuestion}
                onChange={(e) => setAiQuestion(e.target.value)}
                placeholder={primary.placeholder}
                className="flex-1 bg-transparent text-[13px] py-2 outline-none text-text placeholder:text-text-light max-md:w-full"
                aria-label={primary.label}
              />
            </div>
            <motion.button
              type="submit"
              className="clay-btn clay-btn-primary text-[13px] px-5 py-2.5 whitespace-nowrap max-md:w-full max-md:justify-center"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              {primary.button}
              <span className="ml-1">→</span>
            </motion.button>
          </div>
          <p className="text-[11px] text-text-muted mt-2 text-center">{primary.desc}</p>
        </motion.form>

        {/* SECONDARY: 2 supporting links (demoted from equal-weight buttons) */}
        <motion.div
          className="mt-4 flex items-center justify-center gap-5 flex-wrap max-md:gap-3 max-md:flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.4 }}
        >
          <button
            onClick={() => handleSecondary('wizard')}
            className="text-[12px] font-semibold text-text-muted hover:text-cta transition-colors flex items-center gap-1"
          >
            <Icon name="wizard" size={14} className="!border-0 !shadow-none !bg-transparent" />
            {secondary.wizard}
          </button>
          <span className="text-text-light text-[10px] max-md:hidden">·</span>
          <button
            onClick={() => handleSecondary('knowledge')}
            className="text-[12px] font-semibold text-text-muted hover:text-cta transition-colors flex items-center gap-1"
          >
            <Icon name="book" size={14} className="!border-0 !shadow-none !bg-transparent" />
            {secondary.knowledge}
          </button>
        </motion.div>

        {/* Model grid — staggered fade in */}
        <motion.div
          className="border-t border-border-light mt-4 pt-4"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.04, delayChildren: 0.7 } },
          }}
        >
          <h3 className="text-[12px] font-bold font-[family-name:var(--font-heading)] uppercase tracking-wider text-text-muted mb-3">
            {t.fnbHome.models.sectionTitle}
          </h3>
          <div className="grid grid-cols-8 gap-2 max-[480px]:grid-cols-4">
            {(Object.entries(models) as [ModelKey, FnBModel][]).map(([key, m]) => (
              <motion.div
                key={key}
                className="rounded-xl py-4 px-2 text-center border border-border-light bg-white/60"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.35 }}
              >
                <Icon name={m.icon} size={40} className="mx-auto mb-1.5 !border-[1.5px] !shadow-none" />
                <span className="text-[12px] font-semibold font-[family-name:var(--font-heading)] block text-text leading-tight">{m.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
