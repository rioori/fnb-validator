'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { track } from '@/lib/analytics';
import { TAG_LABELS_VI, TAG_LABELS_EN } from '@/lib/news';

interface TickerItem {
  id: string;
  title: string;
  summary: string;
  source_name: string;
  source_url: string;
  published_at: string;
  matched_keywords: string[];
  og_image_url: string | null;
}

interface Props {
  items: TickerItem[];
  locale: 'vi' | 'en';
  // Deprecated (kept for /tin-tuc which passes them). Slider mode ignores them
  // and always paginates by CARDS_PER_PAGE.
  initialShow?: number;
  expandable?: boolean;
  // When true, render as static grid instead of auto-slider (for the archive
  // page where user wants to browse everything).
  staticGrid?: boolean;
}

const CARDS_PER_PAGE = 3;
const AUTO_ADVANCE_MS = 6000;
const TRANSITION_MS = 500;

const CARD_BG_ROTATION = [
  'bg-pastel-cream',
  'bg-pastel-mint',
  'bg-pastel-blue',
  'bg-pastel-blush',
  'bg-pastel-gold',
] as const;

const NEW_THRESHOLD_MS = 3 * 60 * 60 * 1000;

function relativeTime(iso: string, locale: 'vi' | 'en'): string {
  const then = new Date(iso).getTime();
  const now = Date.now();
  const diffMin = Math.round((now - then) / 60000);
  const isEn = locale === 'en';
  if (diffMin < 60) return isEn ? `${Math.max(1, diffMin)}m ago` : `${Math.max(1, diffMin)} phút trước`;
  const h = Math.round(diffMin / 60);
  if (h < 24) return isEn ? `${h}h ago` : `${h} giờ trước`;
  const d = Math.round(h / 24);
  if (d < 7) return isEn ? `${d}d ago` : `${d} ngày trước`;
  return new Date(iso).toLocaleDateString(isEn ? 'en-US' : 'vi-VN', { month: 'short', day: 'numeric' });
}

// One news card with OG image, meta chips, title, and short excerpt.
function TickerCard({
  item,
  bg,
  isFresh,
  locale,
  onClick,
}: {
  item: TickerItem;
  bg: string;
  isFresh: boolean;
  locale: 'vi' | 'en';
  onClick: () => void;
}) {
  const isEn = locale === 'en';
  const tagLabels = isEn ? TAG_LABELS_EN : TAG_LABELS_VI;
  const tags = (item.matched_keywords || []).slice(0, 2);

  return (
    <a
      href={item.source_url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={`clay-card-static ${bg} p-0 flex flex-col group hover:shadow-[4px_4px_0_var(--color-text)] transition-shadow overflow-hidden`}
    >
      {/* OG image on top — 16:9 aspect, cover fit */}
      <div className="relative aspect-[16/9] bg-slate-200 overflow-hidden border-b-2 border-slate-900">
        {item.og_image_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.og_image_url}
            alt=""
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
            onError={(e) => {
              // Hide broken images cleanly — parent shows gradient fallback
              (e.currentTarget as HTMLImageElement).style.display = 'none';
            }}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-emerald-100 via-amber-50 to-slate-100" />
        )}
        {isFresh && (
          <div className="absolute top-2 right-2">
            <span className="relative inline-flex items-center gap-1 bg-emerald-500 text-white px-2 py-1 rounded font-bold uppercase tracking-wider text-[10px] shadow-[2px_2px_0_var(--color-text)] border-2 border-slate-900">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping absolute left-2" />
              <span className="w-1.5 h-1.5 bg-white rounded-full" />
              <span className="ml-2">{isEn ? 'NEW' : 'MỚI'}</span>
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <div className="flex flex-wrap items-center gap-1.5 mb-2 text-[10px] leading-none">
          <span className="bg-slate-900 text-white px-1.5 py-1 rounded font-bold uppercase tracking-wider">
            {item.source_name}
          </span>
          {tags.map((t) => (
            <span
              key={t}
              className="bg-white/60 text-slate-700 border border-slate-300 px-1.5 py-1 rounded font-semibold"
            >
              {tagLabels[t] || t}
            </span>
          ))}
          <span className="text-slate-600 ml-auto text-[11px] font-medium">
            {relativeTime(item.published_at, locale)}
          </span>
        </div>

        <div className="text-[14px] font-bold text-slate-900 leading-snug group-hover:text-emerald-800 transition-colors line-clamp-2 min-h-[2.6rem]">
          {item.title}
        </div>

        {item.summary && (
          <p className="mt-2 text-[12px] text-slate-700 leading-relaxed line-clamp-2 flex-1">
            {item.summary}
          </p>
        )}

        <div className="mt-3 text-[11px] font-semibold text-emerald-700">
          {isEn ? 'Read at source →' : 'Đọc bài gốc →'}
        </div>
      </div>
    </a>
  );
}

export default function TickerList({ items, locale, staticGrid = false }: Props) {
  const isEn = locale === 'en';
  const [now] = useState(() => Date.now());
  const [pageIdx, setPageIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
  });
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pages = useMemo(() => {
    const chunks: TickerItem[][] = [];
    for (let i = 0; i < items.length; i += CARDS_PER_PAGE) {
      chunks.push(items.slice(i, i + CARDS_PER_PAGE));
    }
    return chunks;
  }, [items]);

  const onClick = useCallback(
    (item: TickerItem) => {
      track('news_ticker_click', { item_id: item.id, source: item.source_name });
    },
    []
  );

  // Respect prefers-reduced-motion (WCAG 2.2.2). Initial value comes from
  // useState initializer above; effect only subscribes to future changes.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Auto-advance (no-op when staticGrid, only 1 page, paused, or reduced motion)
  useEffect(() => {
    if (staticGrid || pages.length <= 1 || isPaused || reducedMotion) return;
    timerRef.current = setTimeout(() => {
      setPageIdx((p) => (p + 1) % pages.length);
    }, AUTO_ADVANCE_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [pageIdx, pages.length, isPaused, reducedMotion, staticGrid]);

  // Static grid mode (used by /tin-tuc archive page) — plain grid, no slider
  if (staticGrid) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((it, idx) => (
          <TickerCard
            key={it.id}
            item={it}
            bg={CARD_BG_ROTATION[idx % CARD_BG_ROTATION.length]}
            isFresh={now - new Date(it.published_at).getTime() < NEW_THRESHOLD_MS}
            locale={locale}
            onClick={() => onClick(it)}
          />
        ))}
      </div>
    );
  }

  if (pages.length === 0) return null;

  const goTo = (idx: number) => {
    const target = ((idx % pages.length) + pages.length) % pages.length;
    setPageIdx(target);
  };
  const prev = () => goTo(pageIdx - 1);
  const next = () => goTo(pageIdx + 1);

  const hasMultiplePages = pages.length > 1;

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={isEn ? 'F&B news slider' : 'Slider tin F&B'}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* Viewport: fixed height container that clips overflow, inner track slides */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform ease-out"
          style={{
            width: `${pages.length * 100}%`,
            transform: `translateX(-${(pageIdx * 100) / pages.length}%)`,
            transitionDuration: reducedMotion ? '0ms' : `${TRANSITION_MS}ms`,
          }}
        >
          {pages.map((page, pi) => (
            <div
              key={pi}
              className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
              style={{ width: `${100 / pages.length}%`, flexShrink: 0 }}
              aria-hidden={pi !== pageIdx}
            >
              {page.map((it, ci) => {
                const globalIdx = pi * CARDS_PER_PAGE + ci;
                return (
                  <TickerCard
                    key={it.id}
                    item={it}
                    bg={CARD_BG_ROTATION[globalIdx % CARD_BG_ROTATION.length]}
                    isFresh={now - new Date(it.published_at).getTime() < NEW_THRESHOLD_MS}
                    locale={locale}
                    onClick={() => onClick(it)}
                  />
                );
              })}
              {/* Pad short pages (last page might have <3 cards) to keep layout stable */}
              {Array.from({ length: CARDS_PER_PAGE - page.length }).map((_, i) => (
                <div key={`pad-${i}`} className="hidden lg:block" aria-hidden />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Controls: arrows + dots. Hidden entirely when there's only 1 page. */}
      {hasMultiplePages && (
        <div className="mt-4 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={prev}
            aria-label={isEn ? 'Previous slide' : 'Trang trước'}
            className="clay-btn bg-white text-slate-900 !px-2.5 !py-1.5 text-[14px] font-bold"
          >
            ←
          </button>

          {/* Dots — jump-to-page */}
          <div className="flex items-center gap-1.5" role="tablist">
            {pages.map((_, i) => {
              const active = i === pageIdx;
              return (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-label={isEn ? `Go to slide ${i + 1}` : `Chuyển sang trang ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={`transition-all rounded-full ${
                    active
                      ? 'w-6 h-2 bg-slate-900'
                      : 'w-2 h-2 bg-slate-300 hover:bg-slate-500'
                  }`}
                />
              );
            })}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label={isEn ? 'Next slide' : 'Trang sau'}
            className="clay-btn bg-white text-slate-900 !px-2.5 !py-1.5 text-[14px] font-bold"
          >
            →
          </button>
        </div>
      )}
    </div>
  );
}
