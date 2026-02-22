'use client';

import { useEffect, useRef } from 'react';
import { track } from '@vercel/analytics';

interface PageTrackerProps {
  event: string;
  data?: Record<string, string | number | boolean>;
}

/** Drop into any server component to fire a one-time Vercel analytics event on mount. */
export default function PageTracker({ event, data }: PageTrackerProps) {
  const fired = useRef(false);
  useEffect(() => {
    if (!fired.current) {
      fired.current = true;
      track(event, data ?? {});
    }
  }, [event, data]);
  return null;
}
