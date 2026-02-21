'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useWizardStore } from '@/hooks/useWizardStore';
import Icon from '@/components/ui/Icon';
import { useTranslation } from '@/i18n/LocaleProvider';
import { useModels } from '@/hooks/useModels';
import type { ModelKey, FnBModel } from '@/types';
import type { HomeView } from './HomePage';

const CTA_ICONS = ['wizard', 'bolt', 'chat'] as const;
const CTA_CLS = ['clay-btn-primary', 'bg-pastel-mint', 'bg-pastel-blue'] as const;

const spring = { type: 'spring' as const, stiffness: 300, damping: 22 };

interface HeroSectionProps {
  onNavigate: (view: HomeView) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  const { t } = useTranslation();
  const models = useModels();
  const setStep = useWizardStore((s) => s.setStep);
  const [quoteIdx, setQuoteIdx] = useState(0);
  const quotes = t.fnbHome.quotes;

  useEffect(() => {
    const timer = setInterval(() => {
      setQuoteIdx((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [quotes.length]);

  const handleCta = (i: number) => {
    if (i === 0) setStep(1);
    else if (i === 1) onNavigate('quick-calc');
    else onNavigate('ai-chat');
  };

  return (
    <div className="clay-card-static bg-pastel-cream px-6 py-4 mb-4 text-center max-md:px-4 max-md:py-3 overflow-hidden relative hero-ambient">
      {/* Logo — blur-to-sharp */}
      <motion.div
        initial={{ opacity: 0, filter: 'blur(10px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.6 }}
      >
        <Image src="/logo.png" alt={t.fnbHome.hero.logoAlt} width={120} height={120} className="mx-auto mb-1" />
      </motion.div>

      {/* Tagline — fade up */}
      <motion.p
        className="text-[11px] text-text-muted font-[family-name:var(--font-heading)] font-medium mb-3"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {t.fnbHome.hero.tagline}
      </motion.p>

      {/* Heading — fade up */}
      <motion.h2
        className="text-xl font-bold text-text font-[family-name:var(--font-heading)] mb-2 max-md:text-lg"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.5 }}
      >
        {t.fnbHome.hero.heading}
      </motion.h2>

      {/* Rotating quotes — AnimatePresence crossfade + slide */}
      <div className="h-[24px] max-md:h-[20px] flex items-center justify-center mb-4 overflow-hidden">
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

      {/* CTA buttons — staggered spring pop */}
      <motion.div
        className="flex gap-3 justify-center flex-wrap max-md:flex-col max-md:items-center"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } },
        }}
      >
        {t.fnbHome.cta.map((btn, i) => (
          <motion.div
            key={btn.label}
            className="flex flex-col items-center w-[180px]"
            variants={{
              hidden: { opacity: 0, scale: 0.85 },
              show: { opacity: 1, scale: 1 },
            }}
            transition={spring}
          >
            <motion.button
              onClick={() => handleCta(i)}
              className={`clay-btn text-[14px] w-full py-2.5 justify-center whitespace-nowrap ${CTA_CLS[i]}`}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Icon name={CTA_ICONS[i]} size={18} className="inline-flex align-text-bottom !border-0 !shadow-none !bg-transparent mr-1" />
              {btn.label}
            </motion.button>
            <span className="text-[10px] text-text-muted mt-1.5">{btn.desc}</span>
          </motion.div>
        ))}
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
  );
}
