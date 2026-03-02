'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from '@/i18n/LocaleProvider';

export default function SocialProof() {
  const { locale } = useTranslation();
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch('/api/stats')
      .then((r) => r.json())
      .then((d) => setCount(d.validations))
      .catch(() => {});
  }, []);

  if (count === null || count < 10) return null;

  // Round down to nearest nice number for display
  const display = count >= 1000
    ? `${Math.floor(count / 1000)}K+`
    : `${Math.floor(count / 10) * 10}+`;

  const label = locale === 'en'
    ? `${display} business plans validated`
    : `${display} lượt thẩm định`;

  return (
    <div className="flex items-center justify-center gap-2 text-[11px] text-text-muted mt-3 mb-1">
      <span className="inline-block w-1.5 h-1.5 rounded-full bg-cta animate-pulse" />
      <span>{label}</span>
    </div>
  );
}
