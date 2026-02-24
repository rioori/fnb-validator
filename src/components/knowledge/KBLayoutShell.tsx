'use client';

import { useState, useCallback, useEffect } from 'react';
import Icon from '@/components/ui/Icon';

interface KBLayoutShellProps {
  sidebar: React.ReactNode;
  children: React.ReactNode;
  menuLabel: string;
}

export default function KBLayoutShell({ sidebar, children, menuLabel }: KBLayoutShellProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  // Close drawer on ESC
  useEffect(() => {
    if (!drawerOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeDrawer();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [drawerOpen, closeDrawer]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  return (
    <>
      {/* Mobile menu button — hidden on desktop (>=1024px) */}
      <div className="min-[1024px]:hidden px-4 py-2">
        <button
          onClick={() => setDrawerOpen(true)}
          className="clay-pill !px-3 !py-1.5 bg-white text-text text-[12px] font-semibold flex items-center gap-1.5 cursor-pointer"
        >
          <Icon name="menu" size={16} className="!border-0 !shadow-none !bg-transparent" />
          {menuLabel}
        </button>
      </div>

      {/* Two-column layout */}
      <div className="max-w-6xl mx-auto px-4 max-md:px-3">
        <div className="min-[1024px]:grid min-[1024px]:grid-cols-[260px_1fr] min-[1024px]:gap-6">
          {/* Desktop sidebar — hidden below 1024px */}
          <aside className="hidden min-[1024px]:block">
            <div className="sticky top-4 clay-card-static bg-white/80 p-4 rounded-2xl max-h-[calc(100vh-2rem)] overflow-y-auto">
              {sidebar}
            </div>
          </aside>

          {/* Main content */}
          <main className="min-w-0">
            {children}
          </main>
        </div>
      </div>

      {/* Mobile drawer overlay — hidden on desktop */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 min-[1024px]:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={closeDrawer}
          />
          {/* Drawer */}
          <div className="absolute inset-y-0 left-0 w-[280px] max-w-[80vw] bg-white shadow-xl p-5 overflow-y-auto animate-slide-in-left">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[13px] font-bold font-[family-name:var(--font-heading)] text-text">
                {menuLabel}
              </span>
              <button
                onClick={closeDrawer}
                className="w-8 h-8 rounded-full bg-surface3 flex items-center justify-center text-text-muted hover:text-text cursor-pointer"
              >
                <Icon name="close" size={16} className="!border-0 !shadow-none !bg-transparent" />
              </button>
            </div>
            {sidebar}
          </div>
        </div>
      )}
    </>
  );
}
