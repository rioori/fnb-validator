'use client';

import { useEffect } from 'react';
import { create } from 'zustand';
import { motion, AnimatePresence } from 'framer-motion';

type ToastKind = 'success' | 'error' | 'info';

interface ToastItem {
  id: string;
  kind: ToastKind;
  message: string;
  timeout: number;
}

interface ToastStore {
  items: ToastItem[];
  push: (kind: ToastKind, message: string, timeout?: number) => void;
  dismiss: (id: string) => void;
}

export const useToast = create<ToastStore>((set) => ({
  items: [],
  push: (kind, message, timeout = 3200) => {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    set((s) => ({ items: [...s.items, { id, kind, message, timeout }] }));
  },
  dismiss: (id) => set((s) => ({ items: s.items.filter((i) => i.id !== id) })),
}));

const KIND_STYLE: Record<ToastKind, { bg: string; border: string; icon: string }> = {
  success: { bg: 'bg-mint-light', border: 'border-cta', icon: '✓' },
  error: { bg: 'bg-rose-100', border: 'border-danger', icon: '✕' },
  info: { bg: 'bg-pastel-blue', border: 'border-secondary', icon: 'ℹ' },
};

export function ToastViewport() {
  const items = useToast((s) => s.items);
  const dismiss = useToast((s) => s.dismiss);

  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 max-md:left-4 max-md:right-4 max-md:bottom-4 pointer-events-none">
      <AnimatePresence>
        {items.map((item) => (
          <AutoDismiss key={item.id} item={item} onDismiss={dismiss}>
            <motion.div
              layout
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 40, scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 320, damping: 26 }}
              className={`pointer-events-auto clay-card-static ${KIND_STYLE[item.kind].bg} border-2 ${KIND_STYLE[item.kind].border} px-4 py-3 flex items-center gap-2.5 min-w-[220px] max-w-[360px]`}
            >
              <span className="text-[16px] font-bold shrink-0">{KIND_STYLE[item.kind].icon}</span>
              <span className="text-[13px] text-text flex-1">{item.message}</span>
              <button
                onClick={() => dismiss(item.id)}
                aria-label="Dismiss"
                className="text-[14px] text-text-muted hover:text-text px-1"
              >
                ✕
              </button>
            </motion.div>
          </AutoDismiss>
        ))}
      </AnimatePresence>
    </div>
  );
}

function AutoDismiss({ item, onDismiss, children }: { item: ToastItem; onDismiss: (id: string) => void; children: React.ReactNode }) {
  useEffect(() => {
    const t = setTimeout(() => onDismiss(item.id), item.timeout);
    return () => clearTimeout(t);
  }, [item.id, item.timeout, onDismiss]);
  return <>{children}</>;
}
