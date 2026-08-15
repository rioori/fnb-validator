'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';
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
}

interface Props {
  locale: Locale;
}

export default function NewsTickerHome({ locale }: Props) {
  const [items, setItems] = useState<TickerItem[] | null>(null);
  const isEn = locale === 'en';

  useEffect(() => {
    fetch('/api/news/ticker?limit=10', { cache: 'force-cache', next: { revalidate: 300 } })
      .then((r) => r.ok ? r.json() : { items: [] })
      .then((json: { items: TickerItem[] }) => setItems(json.items || []))
      .catch(() => setItems([]));
  }, []);

  // Hide entirely while loading or when empty — don't show a shimmer for a
  // section the user hasn't asked for.
  if (items === null || items.length === 0) return null;

  return (
    <section className="mt-6 mb-6 max-w-3xl mx-auto">
      <div className="clay-card-static bg-pastel-yellow p-5 pb-3 border-b-0 rounded-b-none">
        <div className="flex items-center gap-2 mb-1">
          <Icon name="lightbulb" size={22} />
          <h2 className="text-lg font-bold text-text font-[family-name:var(--font-heading)]">
            {isEn ? "Today's F&B Ticker" : 'Tin F&B hôm nay'}
          </h2>
          <span className="ml-auto text-[11px] font-bold uppercase tracking-widest text-emerald-700">
            {isEn ? `${items.length} updates` : `${items.length} tin mới`}
          </span>
        </div>
        <p className="text-[12px] text-text-muted">
          {isEn
            ? 'Curated from 6 trusted VN sources · updated 3× daily · click any headline to read the full story at the source'
            : 'Tổng hợp từ 6 nguồn tin uy tín · cập nhật 3 lần/ngày · bấm tin bất kỳ để đọc bài đầy đủ tại báo gốc'}
        </p>
      </div>

      <TickerList items={items} locale={isEn ? 'en' : 'vi'} initialShow={5} expandable={true} />

      <div className="text-center mt-4">
        <Link
          href={localePath('/tin-tuc', locale)}
          className="text-[13px] text-emerald-700 font-semibold hover:underline"
        >
          {isEn ? 'View full ticker archive →' : 'Xem tất cả tin lưu trữ →'}
        </Link>
      </div>
    </section>
  );
}
