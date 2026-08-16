'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import TickerList from '@/components/news/TickerList';
import { localePath } from '@/i18n/link';
import type { Locale } from '@/i18n/config';

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
  locale: Locale;
}

export default function NewsTickerHome({ locale }: Props) {
  const [items, setItems] = useState<TickerItem[] | null>(null);
  const isEn = locale === 'en';

  useEffect(() => {
    fetch('/api/news/ticker?limit=9', { cache: 'no-store' })
      .then((r) => (r.ok ? r.json() : { items: [] }))
      .then((json: { items: TickerItem[] }) => setItems(json.items || []))
      .catch(() => setItems([]));
  }, []);

  if (items === null || items.length === 0) return null;

  return (
    <section>
      <div className="clay-card-static bg-white p-4 md:p-5">
        {/* Slim rail header inside the container */}
        <div className="flex items-baseline justify-between mb-3">
          <div className="flex items-baseline gap-2 flex-wrap">
            <div className="text-[11px] font-bold uppercase tracking-widest text-emerald-700">
              {isEn ? 'F&B Ticker' : 'Tin F&B mỗi ngày'}
            </div>
            <div className="text-[11px] text-text-muted">
              {isEn ? `${items.length} updates · from 6 sources` : `${items.length} tin · 6 nguồn`}
            </div>
          </div>
          <Link
            href={localePath('/tin-tuc', locale)}
            className="text-[11px] text-emerald-700 font-semibold hover:underline whitespace-nowrap"
          >
            {isEn ? 'View all →' : 'Xem tất cả →'}
          </Link>
        </div>

        <TickerList items={items} locale={isEn ? 'en' : 'vi'} />
      </div>
    </section>
  );
}
