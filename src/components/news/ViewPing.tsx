'use client';

import { useEffect, useRef } from 'react';
import { track } from '@/lib/analytics';

export default function ViewPing({ postId, postSlug, locale }: { postId: string; postSlug: string; locale: 'vi' | 'en' }) {
  const pinged = useRef(false);
  useEffect(() => {
    if (pinged.current) return;
    pinged.current = true;
    track('news_view', { post_id: postId, post_slug: postSlug, locale });
    fetch('/api/news/click', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ post_id: postId, kind: 'view' }),
      keepalive: true,
    }).catch(() => {});
  }, [postId, postSlug, locale]);
  return null;
}
