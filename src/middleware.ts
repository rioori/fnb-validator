import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale } from '@/i18n/config';
import { PATH_VI_FROM_EN } from '@/i18n/link';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static files, API routes, _next, embed widgets (no locale)
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/embed') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
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
