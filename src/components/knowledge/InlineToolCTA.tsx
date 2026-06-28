import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import { defaultLocale } from '@/i18n/config';

type Locale = 'vi' | 'en';

interface InlineToolCTAProps {
  locale: string;
  model?: string;
  city?: string;
  variant?: 'inline' | 'final';
}

const COPY = {
  vi: {
    inlineHeading: 'Áp dụng cho quán của bạn ngay',
    inlineBody: 'Nhập số liệu cụ thể (vốn, doanh thu kỳ vọng, chi phí) → biết quán có lãi hay không trong 5 phút. Miễn phí, không cần đăng ký.',
    finalHeading: 'Đừng để 7 nguyên nhân trên giết ý tưởng của bạn',
    finalBody: 'Validate mô hình kinh doanh trước khi đầu tư 300-800 triệu. Validator tính break-even, cash flow, sensitivity scenarios cho bạn.',
    cta: 'Test miễn phí — 5 phút',
    quick: 'Hoặc tính nhanh với 6 ô input',
    quickLink: 'tại đây',
    badge: 'TOOL MIỄN PHÍ',
  },
  en: {
    inlineHeading: 'Apply this to your shop right now',
    inlineBody: 'Enter your specific numbers (capital, expected revenue, costs) → know if your shop is viable in 5 minutes. Free, no signup.',
    finalHeading: 'Don\'t let those 7 causes kill your idea',
    finalBody: 'Validate your business model before investing $12-32K. Validator calculates break-even, cash flow, sensitivity scenarios for you.',
    cta: 'Test free — 5 minutes',
    quick: 'Or quick-estimate with 6 input fields',
    quickLink: 'here',
    badge: 'FREE TOOL',
  },
} as const;

function buildWizardUrl(locale: string, model?: string, city?: string): string {
  const base = locale === defaultLocale ? '/fnb' : '/en/fnb';
  const params = new URLSearchParams();
  params.set('start', '1');
  params.set('utm_source', 'article');
  params.set('utm_medium', 'inline-cta');
  if (model) params.set('model', model);
  if (city) params.set('city', city);
  return `${base}?${params.toString()}`;
}

function buildEmbedUrl(locale: string): string {
  return `/embed/break-even?lang=${locale === 'en' ? 'en' : 'vi'}&utm_source=article&utm_medium=inline-cta-quick`;
}

export default function InlineToolCTA({ locale, model, city, variant = 'inline' }: InlineToolCTAProps) {
  const t = COPY[locale === 'en' ? 'en' : 'vi'];
  const heading = variant === 'final' ? t.finalHeading : t.inlineHeading;
  const body = variant === 'final' ? t.finalBody : t.inlineBody;
  const wizardUrl = buildWizardUrl(locale, model, city);
  const embedUrl = buildEmbedUrl(locale);

  return (
    <div className="my-6 p-5 rounded-2xl border-2 border-cta bg-cta/5 max-md:p-4">
      <div className="flex items-start gap-3">
        <div className="shrink-0 w-12 h-12 rounded-xl bg-cta flex items-center justify-center text-white">
          <Icon name="bolt" size={26} className="text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[10px] font-bold tracking-widest text-cta mb-1">{t.badge}</div>
          <h3 className="text-[16px] font-bold font-[family-name:var(--font-heading)] text-text leading-tight mb-1.5">
            {heading}
          </h3>
          <p className="text-[13px] text-text leading-relaxed mb-3">{body}</p>
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href={wizardUrl}
              className="inline-flex items-center gap-2 bg-cta hover:bg-cta-hover text-white font-semibold text-[13px] px-4 py-2 rounded-lg transition-colors"
            >
              {t.cta}
              <span className="text-[14px]">→</span>
            </Link>
            <span className="text-[11px] text-text-muted">
              {t.quick}{' '}
              <a href={embedUrl} target="_blank" rel="noopener" className="underline text-cta hover:text-cta-hover font-medium">
                {t.quickLink}
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
