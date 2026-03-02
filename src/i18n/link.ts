import { defaultLocale, type Locale } from './config';

/**
 * Vietnamese → English slug map.
 * Only top-level route segments that appear in the URL bar.
 * Order matters: longer prefixes first to avoid partial matches.
 */
const PATH_EN: [string, string][] = [
  ['/goc-nhin-chuyen-gia', '/experts'],
  ['/kien-thuc', '/knowledge'],
  ['/chi-phi-mo', '/opening-costs'],
  ['/tinh-nang/phan-tich-tai-chinh', '/features/financial-analysis'],
  ['/tinh-nang/ai-advisor', '/features/ai-advisor'],
  ['/tinh-nang/kien-thuc', '/features/knowledge'],
  ['/tinh-nang/checklist', '/features/checklist'],
  ['/tinh-nang', '/features'],
  ['/chinh-sach-bao-mat', '/privacy'],
  ['/dieu-khoan', '/terms'],
];

/** Reverse map: English slug → Vietnamese slug (for middleware rewrite) */
export const PATH_VI_FROM_EN = PATH_EN.map(([vi, en]) => [en, vi] as const);

export function localePath(path: string, locale: Locale): string {
  if (locale === defaultLocale) return path;

  // Translate Vietnamese slugs to English for the /en/ prefix
  let translated = path;
  for (const [vi, en] of PATH_EN) {
    if (translated === vi || translated.startsWith(vi + '/')) {
      translated = translated.replace(vi, en);
      break;
    }
  }

  return `/${locale}${translated}`;
}
