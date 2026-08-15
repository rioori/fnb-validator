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
  const showCount = expanded || !initialShow ? items.length : Math.min(initialShow, items.length);
  const remaining = items.length - showCount;

  const onClick = (item: TickerItem) => {
    track('news_ticker_click', { item_id: item.id, source: item.source_name });
  };

  return (
    <div>
      <ol className="divide-y divide-slate-200 border-y-2 border-slate-900 bg-white">
        {items.slice(0, showCount).map((it) => {
          const tags = (it.matched_keywords || []).slice(0, 3);
          return (
            <li key={it.id} className="p-4 hover:bg-amber-50/40 transition-colors">
              <div className="flex flex-wrap items-center gap-2 mb-1.5 text-[11px]">
                <span className="bg-slate-900 text-white px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                  {it.source_name}
                </span>
                {tags.map((t) => (
                  <span key={t} className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-semibold">
                    {tagLabels[t] || t}
                  </span>
                ))}
                <span className="text-slate-500 ml-auto">{relativeTime(it.published_at, locale)}</span>
              </div>
              <a
                href={it.source_url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onClick(it)}
                className="block text-[15px] font-semibold text-slate-900 leading-snug hover:text-emerald-700 transition-colors"
              >
                {it.title}
              </a>
              {it.summary && (
                <p className="mt-1 text-[13px] text-slate-600 leading-relaxed line-clamp-2">{it.summary}</p>
              )}
              <a
                href={it.source_url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onClick(it)}
                className="inline-block mt-1.5 text-[12px] text-emerald-700 font-semibold hover:underline"
              >
                {isEn ? 'Read at source →' : 'Đọc bài gốc →'}
              </a>
            </li>
          );
        })}
      </ol>

      {expandable && remaining > 0 && !expanded && (
        <div className="text-center mt-4">
          <button
            onClick={() => setExpanded(true)}
            className="clay-btn clay-btn-primary text-[13px] px-5 py-2 font-semibold"
          >
            {isEn ? `Show ${remaining} more news` : `Xem ${remaining} tin nữa`}
          </button>
        </div>
      )}
    </div>
  );
}
