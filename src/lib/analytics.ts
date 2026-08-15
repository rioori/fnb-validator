import { track as vercelTrack } from '@vercel/analytics';

type GtagFn = (command: string, eventName: string, params?: Record<string, unknown>) => void;
type WindowWithGtag = Window & { gtag?: GtagFn };

/**
 * Fires an event to both Vercel Analytics and GA4 in one call.
 * Use everywhere instead of Vercel's raw track() so both dashboards stay in sync.
 */
export function track(eventName: string, params?: Record<string, string | number | boolean | null | undefined>) {
  try {
    vercelTrack(eventName, params);
  } catch {}

  if (typeof window === 'undefined') return;
  const w = window as WindowWithGtag;
  if (typeof w.gtag !== 'function') return;
  try {
    w.gtag('event', eventName, params ?? {});
  } catch {}
}
