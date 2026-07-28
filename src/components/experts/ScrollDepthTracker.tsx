'use client';

import { useEffect, useRef } from 'react';
import { track } from '@vercel/analytics';

// Fires `scroll_depth` events at 25/50/75/100% of the article, one per session
// per page, so we can distinguish "landed and bounced" from "read to the end
// but ignored the CTA". Without this we can't tell if the ExpertFinalCTA is
// invisible-below-the-fold or visible-but-unpersuasive.
//
// Uses % of scrollable height (documentElement.scrollHeight - viewport) as the
// depth measure — matches how GA/GTM standard scroll-depth trackers work.

interface Props {
  page: string;
  slug: string;
}

const THRESHOLDS = [25, 50, 75, 100] as const;

export default function ScrollDepthTracker({ page, slug }: Props) {
  const firedRef = useRef<Set<number>>(new Set());

  useEffect(() => {
    let raf = 0;
    let ticking = false;

    const measure = () => {
      ticking = false;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const pct = Math.round(((window.scrollY || 0) / scrollable) * 100);
      for (const t of THRESHOLDS) {
        if (pct >= t && !firedRef.current.has(t)) {
          firedRef.current.add(t);
          try {
            track('scroll_depth', { page, slug, depth: t });
          } catch {}
        }
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      raf = requestAnimationFrame(measure);
    };

    // Fire an initial measurement in case the page loaded already scrolled.
    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [page, slug]);

  return null;
}
