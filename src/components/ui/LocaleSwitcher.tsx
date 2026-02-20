'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useLocale } from '@/i18n/LocaleProvider';
import { defaultLocale } from '@/i18n/config';

function getTargetPath(pathname: string, targetLocale: 'vi' | 'en') {
  if (targetLocale === 'en') {
    // Add /en prefix (from vi which has no prefix)
    return `/en${pathname}`;
  }
  // Remove /en prefix (going back to vi)
  return pathname.replace(/^\/en/, '') || '/';
}

export default function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className="fixed top-3 right-3 z-50 inline-flex rounded-full border-2 border-text overflow-hidden text-[11px] font-bold font-[family-name:var(--font-heading)] shadow-[2px_2px_0_var(--color-text)] no-print">
      {(['vi', 'en'] as const).map((lang) => {
        const isActive = locale === lang;
        if (isActive) {
          return (
            <span
              key={lang}
              className="px-3 py-1 bg-text text-white cursor-default select-none uppercase"
            >
              {lang}
            </span>
          );
        }
        return (
          <Link
            key={lang}
            href={getTargetPath(pathname, lang)}
            className="px-3 py-1 bg-white text-text hover:bg-surface3 transition-colors uppercase"
          >
            {lang}
          </Link>
        );
      })}
    </div>
  );
}
