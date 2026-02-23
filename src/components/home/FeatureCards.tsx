'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useWizardStore } from '@/hooks/useWizardStore';
import Icon from '@/components/ui/Icon';
import { useTranslation } from '@/i18n/LocaleProvider';
import { localePath } from '@/i18n/link';
import type { Locale } from '@/i18n/config';
import type { HomeView } from './HomePage';

const FEATURE_META = [
  { icon: 'trendingup', action: 'why-fnb' as const, bg: 'bg-pastel-gold' },
  { icon: 'wizard', action: 'start-wizard' as const, bg: 'bg-pastel-blush' },
  { icon: 'bolt', action: 'quick-calc' as const, bg: 'bg-pastel-mint' },
  { icon: 'chat', action: 'ai-chat' as const, bg: 'bg-pastel-blue' },
  { icon: 'book', action: 'knowledge' as const, bg: 'bg-pastel-cream' },
  { icon: 'checklist', action: 'checklist' as const, bg: 'bg-pastel-blue' },
];

interface FeatureCardsProps {
  onNavigate: (view: HomeView) => void;
}

export default function FeatureCards({ onNavigate }: FeatureCardsProps) {
  const { t, locale } = useTranslation();
  const setStep = useWizardStore((s) => s.setStep);
  const router = useRouter();

  const comingSoon: string[] = [];

  const handleAction = (action: string) => {
    if (comingSoon.includes(action)) return;
    if (action === 'start-wizard') {
      setStep(1);
    } else if (action === 'knowledge') {
      router.push(localePath('/kien-thuc', locale as Locale));
    } else {
      onNavigate(action as HomeView);
    }
  };

  return (
    <motion.div
      className="grid grid-cols-3 gap-3 mb-4 max-md:grid-cols-2"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.05 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.06 } },
      }}
    >
      {FEATURE_META.map((meta, i) => {
        const f = t.fnbHome.features[i];
        const isDisabled = comingSoon.includes(meta.action);
        return (
          <motion.div
            key={meta.action}
            onClick={() => handleAction(meta.action)}
            className={`clay-card ${meta.bg} p-5 text-center flex flex-col items-center ${isDisabled ? 'opacity-50 cursor-default' : 'cursor-pointer'}`}
            variants={{
              hidden: { opacity: 0, y: 24, scale: 0.95 },
              show: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          >
            <Icon name={meta.icon} size={44} className="mx-auto mb-2" />
            <h3 className="text-[14px] font-bold font-[family-name:var(--font-heading)] text-text mb-1">
              {f.title}
            </h3>
            <p className="text-[12px] text-text-muted leading-relaxed mb-3 flex-1">{f.desc}</p>
            <span className={`clay-pill text-[11px] ${isDisabled ? 'bg-surface3 text-text-light' : 'bg-white text-text'}`}>
              {f.cta}
            </span>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
