'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/components/ui/Icon';
import { useTranslation } from '@/i18n/LocaleProvider';
import { localePath } from '@/i18n/link';
import type { Locale } from '@/i18n/config';

const NAV_ITEMS = [
  { key: 'home', href: '/', icon: 'home' },
  { key: 'wizard', href: '/fnb', icon: 'wizard' },
  { key: 'knowledge', href: '/kien-thuc', icon: 'book' },
  { key: 'experts', href: '/goc-nhin-chuyen-gia', icon: 'person' },
  { key: 'about', href: '/about', icon: 'lightbulb' },
] as const;

export default function GlobalNav() {
  const [open, setOpen] = useState(false);
  const { t, locale } = useTranslation();
  const pathname = usePathname();

  // Close drawer on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const nav = t.common.nav as Record<string, string>;

  return (
    <>
      {/* Hamburger button — fixed top-left */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-3 left-3 z-50 w-9 h-9 rounded-full border-2 border-text bg-white flex items-center justify-center cursor-pointer shadow-[2px_2px_0_var(--color-text)] hover:bg-surface3 transition-colors no-print"
        aria-label={nav.menu || 'Menu'}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1="3" y1="5" x2="15" y2="5" />
          <line x1="3" y1="9" x2="15" y2="9" />
          <line x1="3" y1="13" x2="15" y2="13" />
        </svg>
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[998] no-print"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <nav
        className={`fixed top-0 left-0 h-full w-[260px] bg-white border-r-2 border-text z-[999] transform transition-transform duration-300 no-print ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b-2 border-border-light">
          <Link href={localePath('/', locale as Locale)} onClick={() => setOpen(false)}>
            <Image src="/logo.png" alt="Validator.vn" width={40} height={40} />
          </Link>
          <button
            onClick={() => setOpen(false)}
            className="w-8 h-8 rounded-full border-2 border-text bg-white flex items-center justify-center cursor-pointer hover:bg-surface3 transition-colors text-[14px]"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Nav links */}
        <ul className="py-2">
          {NAV_ITEMS.map(({ key, href, icon }) => {
            const fullHref = localePath(href, locale as Locale);
            const isActive = pathname === fullHref ||
              (href !== '/' && pathname.startsWith(fullHref));

            return (
              <li key={key}>
                <Link
                  href={fullHref}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 px-5 py-3 text-[14px] font-semibold transition-colors ${
                    isActive
                      ? 'bg-pastel-mint text-text border-l-4 border-l-cta'
                      : 'text-text-muted hover:bg-surface3 hover:text-text border-l-4 border-l-transparent'
                  }`}
                >
                  <Icon name={icon} size={28} />
                  {nav[key] || key}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
