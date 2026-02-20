'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '@/i18n/LocaleProvider';

export default function QuoteRotator() {
  const { t } = useTranslation();
  const quotes = t.landing.quotes;
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIdx((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [quotes.length]);

  return (
    <div className="h-[24px] max-md:h-[20px] flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.p
          key={idx}
          className="text-text-muted text-[13px] max-md:text-[11px] italic whitespace-nowrap"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          &ldquo;{quotes[idx]}&rdquo;
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
