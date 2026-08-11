'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { track } from '@vercel/analytics';
import { useTranslation } from '@/i18n/LocaleProvider';
import { localePath } from '@/i18n/link';

const DISMISS_KEY = 'sticky_article_cta_dismissed_v1';
const REVEAL_AT_SCROLL_PCT = 25;

export default function StickyArticleCTA() {
  const { t, locale } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    let isDismissed = false;
    try {
      isDismissed = window.sessionStorage.getItem(DISMISS_KEY) === '1';
    } catch {}
    setDismissed(isDismissed);
    if (isDismissed) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        const height = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
        const pct = (scrolled / height) * 100;
        if (pct >= REVEAL_AT_SCROLL_PCT) {
          setVisible((v) => {
            if (!v) track('sticky_cta_shown', { locale });
            return true;
          });
        }
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [locale]);

  const handleDismiss = () => {
    try {
      window.sessionStorage.setItem(DISMISS_KEY, '1');
    } catch {}
    setDismissed(true);
    track('sticky_cta_dismissed', { locale });
  };

  const handleClick = () => {
    track('sticky_cta_clicked', { locale });
  };

  if (dismissed || !visible) return null;

  const href = `${localePath('/fnb', locale)}?start=1&utm_source=article&utm_medium=sticky-cta`;

  return (
    <div
      className="fixed bottom-3 left-3 right-3 z-40 no-print animate-in fade-in slide-in-from-bottom-4 duration-300 max-w-[720px] mx-auto"
      role="complementary"
      aria-label={t.common.stickyCta.aria}
    >
      <div className="clay-card-static bg-cta text-white p-3 flex items-center gap-3 shadow-lg">
        <span className="text-2xl shrink-0" aria-hidden>🎯</span>
        <div className="flex-1 min-w-0">
          <p className="text-[13px] font-bold font-[family-name:var(--font-heading)] leading-tight">
            {t.common.stickyCta.heading}
          </p>
          <p className="text-[11px] opacity-90 leading-tight mt-0.5 max-md:hidden">
            {t.common.stickyCta.subheading}
          </p>
        </div>
        <Link
          href={href}
          onClick={handleClick}
          className="clay-pill bg-white text-cta px-4 py-2 text-[12px] font-bold shrink-0 hover:brightness-95 transition-all whitespace-nowrap"
        >
          {t.common.stickyCta.button}
        </Link>
        <button
          onClick={handleDismiss}
          className="text-white/80 hover:text-white text-lg leading-none px-1 shrink-0"
          aria-label={t.common.stickyCta.dismiss}
        >
          ×
        </button>
      </div>
    </div>
  );
}
