import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import { getDictionary } from '@/i18n/get-dictionary';
import { defaultLocale, type Locale } from '@/i18n/config';
import { localePath } from '@/i18n/link';
import type { KBTopic } from '@/types';
import COMPARISON_VI from '@/i18n/data/vi/comparison';
import COMPARISON_EN from '@/i18n/data/en/comparison';

function getComparisons(locale: string): KBTopic[] {
  return locale === 'en' ? COMPARISON_EN : COMPARISON_VI;
}

const BASE_URL = 'https://www.validator.vn';

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const canonical = locale === defaultLocale ? `${BASE_URL}/so-sanh` : `${BASE_URL}/en/comparison`;
  const title = locale === 'vi' ? 'So sánh các giải pháp F&B' : 'F&B Solutions Comparison';
  const description = locale === 'vi'
    ? 'So sánh chi tiết các hệ thống, công cụ, cách thức kinh doanh F&B phổ biến — giúp bạn chọn đúng giải pháp cho quán.'
    : 'Detailed comparison of popular F&B systems, tools, and business structures — find the right solution for your restaurant.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'website',
    },
    alternates: {
      canonical,
      languages: { vi: `${BASE_URL}/so-sanh`, en: `${BASE_URL}/en/comparison` },
    },
  };
}

const colorMap: Record<string, string> = {
  'primary-light': 'bg-primary-light',
  'secondary-light': 'bg-secondary-light',
  'mint-light': 'bg-mint-light',
};

export default async function ComparisonIndexPage({ params }: PageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const comparisons = getComparisons(locale);

  const groupedByCategory = comparisons.reduce(
    (acc, comparison) => {
      if (!acc[comparison.category]) acc[comparison.category] = [];
      acc[comparison.category].push(comparison);
      return acc;
    },
    {} as Record<string, KBTopic[]>
  );

  const categoryLabels = dict.knowledge.categories;

  return (
    <div className="py-2 max-md:py-0">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 mb-8 rounded-lg">
        <h1 className="text-3xl font-bold font-[family-name:var(--font-heading)] mb-3">
          {locale === 'vi' ? 'So sánh các giải pháp F&B' : 'F&B Solutions Comparison'}
        </h1>
        <p className="text-lg text-slate-200 mb-4">
          {locale === 'vi'
            ? 'So sánh chi tiết các hệ thống, công cụ, cách thức kinh doanh phổ biến — giúp bạn chọn đúng giải pháp cho quán.'
            : 'Detailed comparisons of popular systems, tools, and business models — find the right solution for your restaurant.'}
        </p>
      </div>

      {/* Breadcrumbs */}
      <nav className="text-[13px] text-text-muted mb-6">
        <Link href={localePath('/fnb', locale as Locale)} className="hover:text-cta transition-colors">
          {locale === 'vi' ? 'Trang chủ' : 'Home'}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-text font-semibold">{locale === 'vi' ? 'So sánh' : 'Comparisons'}</span>
      </nav>

      {/* Comparisons by Category */}
      {Object.entries(groupedByCategory).map(([category, items]) => (
        <div key={category} className="mb-10">
          <h2 className="text-[18px] font-bold font-[family-name:var(--font-heading)] uppercase tracking-wider text-text-muted mb-4">
            {categoryLabels[category as keyof typeof categoryLabels]}
          </h2>
          <div className="space-y-3">
            {items.map((comparison) => (
              <Link
                key={comparison.id}
                href={localePath(`/so-sanh/${comparison.slug}`, locale as Locale)}
                className={`clay-card-static block p-5 hover:shadow-[3px_3px_0_var(--color-text)] transition-shadow ${colorMap[comparison.color] || ''}`}
              >
                <div className="flex items-start gap-4">
                  <Icon name={comparison.icon} size={40} className="shrink-0 mt-1" />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[16px] font-bold font-[family-name:var(--font-heading)] text-text mb-1">
                      {comparison.title}
                    </h3>
                    <p className="text-[13px] text-text-muted mb-3">{comparison.subtitle}</p>
                    {comparison.highlights && (
                      <div className="flex flex-wrap gap-2">
                        {comparison.highlights.slice(0, 2).map((h, i) => (
                          <span key={i} className="clay-pill bg-white/30 !py-0.5 !px-2 !text-[11px]">
                            <strong className="text-cta">{h.value}</strong> {h.label}
                          </span>
                        ))}
                        {comparison.highlights.length > 2 && (
                          <span className="text-[11px] text-text-muted italic">
                            +{comparison.highlights.length - 2} {locale === 'vi' ? 'khác' : 'more'}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}

      {/* CTA */}
      <div className="text-center mt-10">
        <Link
          href={localePath('/fnb', locale as Locale)}
          className="clay-btn clay-btn-primary text-[14px] px-6 py-2.5 inline-flex items-center gap-2"
        >
          <Icon name="wizard" size={18} className="!border-0 !shadow-none !bg-transparent" />
          {dict.knowledge.cta.validateIdea}
        </Link>
      </div>
    </div>
  );
}
