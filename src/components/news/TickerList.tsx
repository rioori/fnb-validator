'use client';

import { useState } from 'react';
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
}

interface Props {
  items: TickerItem[];
  locale: 'vi' | 'en';
  initialShow?: number;
  expandable?: boolean;
}

// Pastel palette rotation — uses the same 5 pastel tokens as feature cards
// (cream/mint/blue/blush/gold) so the ticker feels part of the homepage grid,
// not a bolted-on utility strip.
const CARD_BG_ROTATION = [
  'bg-pastel-cream',
  'bg-pastel-mint',
  'bg-pastel-blue',
  'bg-pastel-blush',
  'bg-pastel-gold',
] as const;

// Anything published within the last 3 hours gets a pulsing "NEW" chip so the
// "site alive" signal survives casual scanning.
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

export default function TickerList({ items, locale, initialShow, expandable = false }: Props) {
  const isEn = locale === 'en';
  const tagLabels = isEn ? TAG_LABELS_EN : TAG_LABELS_VI;
  const [expanded, setExpanded] = useState(false);
  // Fresh-badge cutoff captured once at mount; ok if a tick stale during a
  // long session, freshness re-evaluates on next navigation.
  const [now] = useState(() => Date.now());

  // Grid layout policy: keep even count so the 2-col grid never orphans a lonely
  // last card. If initialShow is set but items.length - initialShow is 1 (only
  // one hidden), just show them all — a "show 1 more" button is more friction
  // than value.
  let showCount = items.length;
  if (initialShow && items.length > initialShow) {
    const wouldHide = items.length - initialShow;
    if (expanded || wouldHide <= 1) {
      showCount = items.length;
    } else {
      // Round initialShow down to nearest even to avoid odd row at the bottom
      showCount = initialShow - (initialShow % 2);
    }
  }
  // Force even count regardless (drop the last odd item if grid would leave it hanging)
  if (!expanded && items.length > 2 && showCount % 2 === 1 && showCount < items.length) {
    showCount -= 1;
  }
  const remaining = items.length - showCount;

  const onClick = (item: TickerItem) => {
    track('news_ticker_click', { item_id: item.id, source: item.source_name });
  };

  return (
    <div>
      <div className="grid gap-3 md:grid-cols-2">
        {items.slice(0, showCount).map((it, idx) => {
          const tags = (it.matched_keywords || []).slice(0, 2);
          const bg = CARD_BG_ROTATION[idx % CARD_BG_ROTATION.length];
          // Only show NEW pulse on the top 2 items so the signal stays meaningful
          // instead of tagging every visible card.
          const isFresh = idx < 2 && now - new Date(it.published_at).getTime() < NEW_THRESHOLD_MS;

          return (
            <a
              key={it.id}
              href={it.source_url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onClick(it)}
              className={`clay-card-static ${bg} p-4 flex flex-col group hover:shadow-[4px_4px_0_var(--color-text)] transition-shadow`}
            >
              {/* Meta row: source (dark) · tags (outlined) · fresh badge · time */}
              <div className="flex flex-wrap items-center gap-1.5 mb-2 text-[10px] leading-none">
                <span className="bg-slate-900 text-white px-1.5 py-1 rounded font-bold uppercase tracking-wider">
                  {it.source_name}
                </span>
                {tags.map((t) => (
                  <span
                    key={t}
                    className="bg-white/60 text-slate-700 border border-slate-300 px-1.5 py-1 rounded font-semibold"
                  >
                    {tagLabels[t] || t}
                  </span>
                ))}
                {isFresh && (
                  <span className="relative inline-flex items-center gap-1 bg-emerald-500 text-white px-1.5 py-1 rounded font-bold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping absolute left-1.5" />
                    <span className="w-1.5 h-1.5 bg-white rounded-full" />
                    <span className="ml-2">{isEn ? 'NEW' : 'MỚI'}</span>
                  </span>
                )}
                <span className="text-slate-600 ml-auto text-[11px] font-medium">
                  {relativeTime(it.published_at, locale)}
                </span>
              </div>

              {/* Title — reserve 2 lines so 1-line titles don't shrink the card */}
              <div className="text-[14px] font-bold text-slate-900 leading-snug group-hover:text-emerald-800 transition-colors line-clamp-2 min-h-[2.6rem]">
                {it.title}
              </div>

              {/* Excerpt — up to 3 lines, fills the card */}
              {it.summary && (
                <p className="mt-2 text-[12px] text-slate-700 leading-relaxed line-clamp-3 flex-1">
                  {it.summary}
                </p>
              )}

              <div className="mt-3 text-[11px] font-semibold text-emerald-700">
                {isEn ? 'Read at source →' : 'Đọc bài gốc →'}
              </div>
            </a>
          );
        })}
      </div>

      {expandable && remaining > 0 && !expanded && (
        <div className="text-center mt-4">
          <button
            onClick={() => setExpanded(true)}
            className="clay-btn text-[12px] px-4 py-2 font-semibold bg-white"
          >
            {isEn ? `Show ${remaining} more →` : `Xem ${remaining} tin nữa →`}
          </button>
        </div>
      )}
    </div>
  );
}
