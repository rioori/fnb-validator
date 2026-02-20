import type { Metadata } from 'next';
import Link from 'next/link';
import { KNOWLEDGE_BASE } from '@/lib/constants';
import Icon from '@/components/ui/Icon';
import { getDictionary } from '@/i18n/get-dictionary';
import { defaultLocale, type Locale } from '@/i18n/config';
import { localePath } from '@/i18n/link';
import type { KBCategory } from '@/types';

const BASE_URL = 'https://www.validator.vn';

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const canonical = locale === defaultLocale ? `${BASE_URL}/kien-thuc` : `${BASE_URL}/en/kien-thuc`;

  return {
    title: dict.knowledge.meta.title,
    description: dict.knowledge.meta.description,
    openGraph: {
      title: dict.knowledge.meta.title,
      description: dict.knowledge.meta.description,
      type: 'website',
    },
    alternates: {
      canonical,
      languages: { vi: `${BASE_URL}/kien-thuc`, en: `${BASE_URL}/en/kien-thuc` },
    },
  };
}

const CATEGORY_KEYS: KBCategory[] = ['cost', 'operations', 'strategy', 'legal'];

const colorMap: Record<string, string> = {
  'primary-light': 'bg-primary-light',
  'secondary-light': 'bg-secondary-light',
  'mint-light': 'bg-mint-light',
};

function BreadcrumbJsonLd({ locale }: { locale: string }) {
  const isEn = locale === 'en';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: isEn ? 'Home' : 'Trang chủ', item: isEn ? `${BASE_URL}/en` : BASE_URL },
      {
        '@type': 'ListItem',
        position: 2,
        name: isEn ? 'F&B Knowledge' : 'Kiến thức F&B',
        item: isEn ? `${BASE_URL}/en/kien-thuc` : `${BASE_URL}/kien-thuc`,
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function KienThucPage({ params }: PageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <>
      <BreadcrumbJsonLd locale={locale} />

      <div className="max-w-3xl mx-auto px-4 py-8 max-md:px-3 max-md:py-6">
        {/* Breadcrumb */}
        <nav className="text-[13px] text-text-muted mb-6">
          <Link href={localePath('/', locale as Locale)} className="hover:text-cta transition-colors">
            {dict.knowledge.breadcrumb.home}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-text font-semibold">{dict.knowledge.breadcrumb.knowledge}</span>
        </nav>

        {/* Header */}
        <div className="clay-card-static bg-pastel-mint p-6 mb-6 text-center">
          <Icon name="book" size={48} className="mx-auto mb-2" />
          <h1 className="text-xl font-bold text-text font-[family-name:var(--font-heading)]">
            {dict.knowledge.index.heading}
          </h1>
          <p className="text-[14px] text-text-muted mt-2 max-w-[520px] mx-auto">
            {dict.knowledge.index.desc}
          </p>
        </div>

        {/* Topic listing by category */}
        {CATEGORY_KEYS.map((key) => {
          const label = dict.knowledge.categories[key];
          const topics = KNOWLEDGE_BASE.filter((t) => t.category === key);
          if (topics.length === 0) return null;
          return (
            <section key={key} className="mb-8">
              <h2 className="text-[14px] font-bold font-[family-name:var(--font-heading)] uppercase tracking-wider text-text-muted mb-3">
                {label}
              </h2>
              <div className="space-y-3">
                {topics.map((topic) => (
                  <Link
                    key={topic.id}
                    href={localePath(`/kien-thuc/${topic.slug}`, locale as Locale)}
                    className={`clay-card-static block p-4 hover:shadow-[3px_3px_0_var(--color-text)] transition-shadow ${colorMap[topic.color] || ''}`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon name={topic.icon} size={36} />
                      <div className="min-w-0">
                        <h3 className="text-[15px] font-bold font-[family-name:var(--font-heading)] text-text">
                          {topic.title}
                        </h3>
                        <p className="text-[12px] text-text-muted">{topic.subtitle}</p>
                      </div>
                    </div>
                    {topic.highlights && (
                      <div className="flex flex-wrap gap-1.5 mt-2 ml-[48px]">
                        {topic.highlights.slice(0, 3).map((h, i) => (
                          <span
                            key={i}
                            className="clay-pill bg-white/80 !py-0.5 !px-2 !text-[10px]"
                          >
                            <strong className="text-cta">{h.value}</strong> {h.label}
                          </span>
                        ))}
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            </section>
          );
        })}

        {/* CTA */}
        <div className="text-center mt-8">
          <Link
            href={localePath('/fnb', locale as Locale)}
            className="clay-btn clay-btn-primary text-[14px] px-6 py-2.5 inline-flex items-center gap-2"
          >
            <Icon
              name="wizard"
              size={18}
              className="!border-0 !shadow-none !bg-transparent"
            />
            {dict.knowledge.cta.validateIdea}
          </Link>
        </div>
      </div>
    </>
  );
}
