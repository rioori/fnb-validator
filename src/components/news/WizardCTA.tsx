'use client';

import Link from 'next/link';
import { track } from '@/lib/analytics';

interface WizardCTAProps {
  postId: string;
  postSlug: string;
  presetLabel: string;
  wizardUrl: string;
  locale: 'vi' | 'en';
}

export default function WizardCTA({ postId, postSlug, presetLabel, wizardUrl, locale }: WizardCTAProps) {
  const isEn = locale === 'en';
  const onClick = () => {
    track('news_wizard_click', { post_id: postId, post_slug: postSlug, locale });
    // Fire-and-forget backend increment
    fetch('/api/news/click', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ post_id: postId, kind: 'wizard' }),
      keepalive: true,
    }).catch(() => {});
  };

  const finalUrl = wizardUrl.includes('?')
    ? `${wizardUrl}&utm_source=news&utm_medium=inline-cta&utm_campaign=${postSlug}`
    : `${wizardUrl}?utm_source=news&utm_medium=inline-cta&utm_campaign=${postSlug}`;

  return (
    <div className="mt-6 p-5 bg-emerald-50 border-2 border-slate-900 rounded-xl shadow-[3px_3px_0_theme(colors.slate.900)]">
      <div className="text-[11px] font-bold uppercase tracking-widest text-emerald-700 mb-1">
        {isEn ? 'Calculate the impact' : 'Tính tác động ngay'}
      </div>
      <div className="font-semibold text-slate-900 mb-3">
        {presetLabel}
      </div>
      <Link
        href={finalUrl}
        onClick={onClick}
        className="inline-block bg-emerald-600 text-white px-5 py-2.5 rounded-lg font-bold border-2 border-slate-900 shadow-[2px_2px_0_theme(colors.slate.900)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition"
      >
        {isEn ? 'Open the calculator →' : 'Mở công cụ tính →'}
      </Link>
    </div>
  );
}
