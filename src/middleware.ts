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

// External backlinks and typed URLs commonly land on English slugs without the
// /en/ prefix, or on short/legacy paths. Each entry redirects a 404-prone path
// to its canonical VI page (which the middleware will then handle normally).
// Confirmed 404 sources: GSC Coverage report 2026-07-28 (32 not-found pages).
const LEGACY_REDIRECT_MAP: Record<string, string> = {
  // English slug without /en/ prefix
  '/experts': '/goc-nhin-chuyen-gia',
  '/expert': '/goc-nhin-chuyen-gia',
  '/knowledge': '/kien-thuc',
  '/comparison': '/so-sanh',
  '/fnb-market': '/thi-truong-fnb',
  '/opening-checklist': '/checklist-mo-quan',
  '/why-fnb': '/vi-sao-fnb',
  '/owner-stories': '/cau-chuyen-chu-quan',
  '/partners': '/doi-tac',
  '/privacy': '/chinh-sach-bao-mat',
  '/terms': '/dieu-khoan',
  '/topics': '/chu-de',
  '/opening-costs': '/chi-phi-mo',
  '/features': '/tinh-nang',
  // Short / legacy Vietnamese paths
  '/tinh-nang': '/tinh-nang/phan-tich-tai-chinh',
  '/thi-truong': '/thi-truong-fnb',
  '/checklist': '/checklist-mo-quan',
  '/vi-sao': '/vi-sao-fnb',
  '/goc-nhin': '/goc-nhin-chuyen-gia',
  '/chuyen-gia': '/goc-nhin-chuyen-gia',
  '/mo-quan-cafe': '/chi-phi-mo/coffee/tai/ho-chi-minh',
  '/mo-quan-tra-sua': '/chi-phi-mo/bubbletea/tai/ho-chi-minh',
  '/mo-nha-hang': '/chi-phi-mo/restaurant/tai/ho-chi-minh',
  '/blogs': '/blog',
};

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // Skip static files, API routes, _next, embed widgets, admin (no locale)
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/embed') ||
    pathname.startsWith('/admin') ||
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

  // Legacy path redirect: common 404 patterns identified from GSC Coverage report.
  // Matches exact path only (no query, no trailing subpath) — safe because these
  // are all top-level slugs the codebase never generates. 308 preserves method +
  // signals permanence to Google.
  if (LEGACY_REDIRECT_MAP[pathname]) {
    return NextResponse.redirect(new URL(LEGACY_REDIRECT_MAP[pathname], request.url), 308);
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
