import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale } from '@/i18n/config';
import { PATH_VI_FROM_EN, localePath } from '@/i18n/link';

// Legacy /fnb?view=X links (from older builds when HomePage hosted every sub-view)
// now redirect to the canonical standalone routes.
const VIEW_REDIRECT_MAP: Record<string, string> = {
  trends: '/thi-truong-fnb',
  checklist: '/checklist-mo-quan',
  'why-fnb': '/vi-sao-fnb',
  'ai-chat': '/ai-chat',
  stories: '/cau-chuyen-chu-quan',
  knowledge: '/kien-thuc',
  experts: '/goc-nhin-chuyen-gia',
};

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // Skip static files, API routes, _next, embed widgets (no locale)
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/embed') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Legacy sub-view redirect: /fnb?view=trends → /thi-truong-fnb (canonical).
  // Runs BEFORE the locale rewrite so we can inspect the raw path + query.
  const isFnbPath = pathname === '/fnb'
    || pathname === '/vi/fnb'
    || pathname === '/en/fnb';
  const viewParam = searchParams.get('view');
  if (isFnbPath && viewParam && VIEW_REDIRECT_MAP[viewParam]) {
    // Detect locale from the incoming path so /en/fnb?view=trends lands on /en/fnb-market
    const localePrefix = pathname.startsWith('/en/') ? 'en' : defaultLocale;
    const target = localePath(VIEW_REDIRECT_MAP[viewParam], localePrefix as typeof defaultLocale);
    return NextResponse.redirect(new URL(target, request.url), 308);
  }

  // Check if pathname starts with a supported locale
  const pathnameLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameLocale) {
    // /vi/... → redirect to unprefixed (canonical)
    if (pathnameLocale === defaultLocale) {
      const newPath = pathname.replace(`/${defaultLocale}`, '') || '/';
      return NextResponse.redirect(new URL(newPath, request.url));
    }

    // /en/... → translate English slugs back to Vietnamese file-system paths
    const rest = pathname.slice(3); // strip "/en"
    let rewritten = rest;
    for (const [en, vi] of PATH_VI_FROM_EN) {
      if (rest === en || rest.startsWith(en + '/')) {
        rewritten = rest.replace(en, vi);
        break;
      }
    }

    // If slug was translated, rewrite to the actual file-system path
    if (rewritten !== rest) {
      const newUrl = new URL(`/en${rewritten}`, request.url);
      return NextResponse.rewrite(newUrl);
    }

    return NextResponse.next();
  }

  // No locale prefix → rewrite internally to /vi/...
  const newUrl = new URL(`/${defaultLocale}${pathname}`, request.url);
  return NextResponse.rewrite(newUrl);
}

export const config = {
  matcher: ['/((?!_next|api|favicon\\.ico|.*\\.).*)'],
};
