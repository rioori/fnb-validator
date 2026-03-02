import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import ShareBlock from '@/components/ui/ShareBlock';
import Footer from '@/components/home/Footer';
import PageTracker from '@/components/ui/PageTracker';
import { localePath } from '@/i18n/link';
import { defaultLocale, type Locale } from '@/i18n/config';

const BASE_URL = 'https://www.validator.vn';

interface Highlight {
  title: string;
  desc: string;
}

interface Persona {
  label: string;
  desc: string;
}

interface FeatureData {
  heading: string;
  tagline: string;
  desc: string;
  icon: string;
  color: string;
  accentDot: string;
  slug: string;
  highlights: Highlight[];
  personas: Persona[];
  verticalAction: string | null;
  knowledgeLink?: string;
}

interface ShareLabels {
  heading: string;
  desc: string;
  shareFacebook: string;
  shareLinkedin: string;
  followUs: string;
  shareText: string;
}

interface FeaturePageProps {
  feature: FeatureData;
  breadcrumb: { home: string };
  locale: string;
  share?: ShareLabels;
  ctaLabel: string;
  freeLabel: string;
  whatYouGet: string;
  whoIsFor: string;
}

export default function FeaturePage({ feature, breadcrumb, locale, share, ctaLabel, freeLabel, whatYouGet, whoIsFor }: FeaturePageProps) {
  const prefix = locale === defaultLocale ? '' : '/en';
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: breadcrumb.home, item: `${BASE_URL}${prefix}` || BASE_URL },
      { '@type': 'ListItem', position: 2, name: feature.heading, item: `${BASE_URL}${prefix}/tinh-nang` },
    ],
  };

  const ctaHref = feature.knowledgeLink
    ? localePath(feature.knowledgeLink, locale as Locale)
    : feature.verticalAction
      ? `${localePath('/fnb', locale as Locale)}?view=${feature.verticalAction}`
      : localePath('/fnb', locale as Locale);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 max-md:px-3 max-md:py-6">
      <PageTracker event="feature_page_view" data={{ feature: feature.heading }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Breadcrumb */}
      <nav className="text-[13px] text-text-muted mb-5">
        <Link href={localePath('/', locale as Locale)} className="hover:text-cta transition-colors">
          {breadcrumb.home}
        </Link>
        <span className="mx-2 opacity-40">/</span>
        <span className="text-text font-semibold">{feature.heading}</span>
      </nav>

      {/* Hero — clean, bold */}
      <div className={`clay-card-static ${feature.color} p-8 mb-6 max-md:p-5`}>
        <p className="text-[11px] font-bold uppercase tracking-widest text-text-muted mb-3 max-md:text-[10px]">
          {feature.tagline}
        </p>
        <h1 className="text-2xl font-bold text-text font-[family-name:var(--font-heading)] mb-3 leading-tight max-md:text-xl">
          {feature.heading}
        </h1>
        <p className="text-[14px] text-text-muted leading-relaxed mb-5 max-w-[540px] max-md:text-[13px]">
          {feature.desc}
        </p>
        <div className="flex items-center gap-3 flex-wrap">
          <Link
            href={ctaHref}
            className="clay-pill bg-cta text-white !border-cta !text-[13px] !px-6 !py-2.5 cursor-pointer inline-block font-semibold hover:brightness-110 transition-all"
          >
            {ctaLabel}
          </Link>
          <span className="text-[11px] text-text-muted">{freeLabel}</span>
        </div>
      </div>

      {/* What you get — left-aligned list */}
      <div className="clay-card-static bg-white p-6 mb-4 max-md:p-4">
        <h2 className="text-[13px] font-bold uppercase tracking-wider text-text-muted mb-4 max-md:text-[12px]">
          {whatYouGet}
        </h2>
        <div className="space-y-4">
          {feature.highlights.map((h) => (
            <div key={h.title} className="flex gap-3 items-start">
              <span className={`w-2 h-2 rounded-full ${feature.accentDot} mt-1.5 flex-shrink-0`} />
              <div>
                <p className="text-[13px] font-semibold text-text leading-tight mb-0.5">{h.title}</p>
                <p className="text-[12px] text-text-muted leading-relaxed">{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Who is this for */}
      <div className="clay-card-static bg-white p-6 mb-6 max-md:p-4">
        <h2 className="text-[13px] font-bold uppercase tracking-wider text-text-muted mb-4 max-md:text-[12px]">
          {whoIsFor}
        </h2>
        <div className="grid grid-cols-2 gap-3 max-md:grid-cols-1">
          {feature.personas.map((p) => (
            <div key={p.label} className={`rounded-xl ${feature.color} p-4 max-md:p-3`}>
              <p className="text-[13px] font-bold text-text mb-1">{p.label}</p>
              <p className="text-[11px] text-text-muted leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA band */}
      <div className="clay-card-static bg-cta/5 border-cta/20 p-6 mb-6 text-center max-md:p-4">
        <p className="text-[15px] font-bold text-text font-[family-name:var(--font-heading)] mb-3 max-md:text-[14px]">
          {feature.heading}
        </p>
        <Link
          href={ctaHref}
          className="clay-pill bg-cta text-white !border-cta !text-[13px] !px-8 !py-2.5 cursor-pointer inline-block font-semibold hover:brightness-110 transition-all"
        >
          {ctaLabel}
        </Link>
        <p className="text-[10px] text-text-muted mt-2">{freeLabel}</p>
      </div>

      {/* Share */}
      {share && (
        <div className="mb-6">
          <ShareBlock {...share} />
        </div>
      )}

      <Footer />
    </div>
  );
}
