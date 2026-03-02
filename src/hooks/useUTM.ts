'use client';
import { useEffect } from 'react';

const UTM_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const;
type UTMData = Partial<Record<(typeof UTM_PARAMS)[number], string>>;

export function useUTM() {
  useEffect(() => {
    try {
      const existing = sessionStorage.getItem('utm_data');
      if (existing) return;

      const params = new URLSearchParams(window.location.search);
      const utm: UTMData = {};
      let hasUTM = false;

      for (const key of UTM_PARAMS) {
        const val = params.get(key);
        if (val) { utm[key] = val; hasUTM = true; }
      }

      if (!hasUTM) return;

      sessionStorage.setItem('utm_data', JSON.stringify(utm));

      if ('gtag' in window) {
        (window as unknown as { gtag: (...args: unknown[]) => void }).gtag(
          'event', 'utm_capture', utm,
        );
      }
    } catch { /* SSR / privacy mode */ }
  }, []);
}

export function getStoredUTM(): UTMData {
  try {
    return JSON.parse(sessionStorage.getItem('utm_data') ?? '{}');
  } catch { return {}; }
}
