import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import Footer from '@/components/home/Footer';
import { localePath } from '@/i18n/link';
import { defaultLocale, type Locale } from '@/i18n/config';

const BASE_URL = 'https://www.validator.vn';

interface Highlight {
  icon: string;
  title: string;
  desc: string;
}

interface Vertical {
  name: string;
  desc: string;
  icon: string;
  active: boolean;
}

interface FeatureData {
  heading: string;
  desc: string;
  icon: string;
  color: string;
  highlights: Highlight[];
  verticalAction: string | null;
  knowledgeLink?: string;
}

interface FeaturePageProps {
  feature: FeatureData;
  breadcrumb: { home: string; features: string };
  verticalCta: { heading: string; comingSoon: string; start: string };
  verticals: Vertical[];
  locale: string;
}

export default function FeaturePage({ feature, breadcrumb, verticalCta, verticals, locale }: FeaturePageProps) {
  const prefix = locale === defaultLocale ? '' : '/en';
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: breadcrumb.home, item: `${BASE_URL}${prefix}` || BASE_URL },
      { '@type': 'ListItem', position: 2, name: feature.heading, item: `${BASE_URL}${prefix}/tinh-nang` },
    ],
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 max-md:px-3 max-md:py-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {/* Breadcrumb */}
      <nav className="text-[13px] text-text-muted mb-6">
        <Link href={localePath('/', locale as Locale)} className="hover:text-cta transition-colors">
          {breadcrumb.home}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-text font-semibold">{feature.heading}</span>
      </nav>

      {/* Hero */}
      <div className={`clay-card-static ${feature.color} p-6 mb-6 text-center`}>
        <Icon name={feature.icon} size={56} className="mx-auto mb-3" />
        <h1 className="text-xl font-bold text-text font-[family-name:var(--font-heading)] mb-2">
          {feature.heading}
        </h1>
        <p className="text-[14px] text-text-muted max-w-[520px] mx-auto leading-relaxed">
          {feature.desc}
        </p>
      </div>

      {/* Highlights */}
      <div className="grid grid-cols-3 gap-3 mb-6 max-md:grid-cols-1">
        {feature.highlights.map((h) => (
          <div key={h.title} className="clay-card-static bg-white p-4 text-center">
            <Icon name={h.icon} size={36} className="mx-auto mb-2" />
            <h3 className="text-[13px] font-bold font-[family-name:var(--font-heading)] text-text mb-1">
              {h.title}
            </h3>
            <p className="text-[11px] text-text-muted leading-relaxed">{h.desc}</p>
          </div>
        ))}
      </div>

      {/* Vertical CTA */}
      <div className="clay-card-static bg-white p-5 mb-6">
        <h2 className="text-[15px] font-bold font-[family-name:var(--font-heading)] text-text mb-4 text-center">
          {verticalCta.heading}
        </h2>
        <div className="grid grid-cols-2 gap-3 max-[480px]:grid-cols-1">
          {verticals.map((v) => {
            if (v.active) {
              const href = feature.knowledgeLink
                ? localePath(feature.knowledgeLink, locale as Locale)
                : `${localePath('/fnb', locale as Locale)}?view=${feature.verticalAction}`;
              return (
                <Link
                  key={v.name}
                  href={href}
                  className="clay-card bg-pastel-cream p-4 text-center flex flex-col items-center h-full"
                >
                  <Icon name={v.icon} size={40} className="mb-2" />
                  <h3 className="text-[14px] font-bold font-[family-name:var(--font-heading)] text-text mb-1">
                    {v.name}
                  </h3>
                  <p className="text-[11px] text-text-muted leading-relaxed mb-2 flex-1">{v.desc}</p>
                  <span className="clay-pill bg-cta text-white !text-[11px] !border-cta">
                    {verticalCta.start}
                  </span>
                </Link>
              );
            }
            return (
              <div
                key={v.name}
                className="clay-card-static bg-white p-4 text-center flex flex-col items-center opacity-50"
              >
                <Icon name={v.icon} size={40} className="mb-2" />
                <h3 className="text-[14px] font-bold font-[family-name:var(--font-heading)] text-text mb-1">
                  {v.name}
                </h3>
                <p className="text-[11px] text-text-muted leading-relaxed mb-2 flex-1">{v.desc}</p>
                <span className="clay-pill bg-surface3 text-text-light !text-[11px]">
                  {verticalCta.comingSoon}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}
