import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/components/ui/Icon';
import { SocialIcon } from '@/components/ui/Icon';
import ShareBlock from '@/components/ui/ShareBlock';
import Footer from '@/components/home/Footer';
import DonateButton from '@/components/about/DonateButton';
import { getDictionary } from '@/i18n/get-dictionary';
import { defaultLocale, type Locale } from '@/i18n/config';
import { localePath } from '@/i18n/link';

const BASE_URL = 'https://www.validator.vn';

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const about = dict.knowledge.about;
  const canonical = locale === defaultLocale ? `${BASE_URL}/about` : `${BASE_URL}/en/about`;

  return {
    title: about.meta.title,
    description: about.meta.description,
    openGraph: {
      title: about.meta.title,
      description: about.meta.description,
      url: canonical,
      type: 'profile',
      images: [{ url: `/api/og?locale=${locale}&page=landing`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      images: [`/api/og?locale=${locale}&page=landing`],
    },
    alternates: {
      canonical,
      languages: { vi: `${BASE_URL}/about`, en: `${BASE_URL}/en/about` },
    },
  };
}

function PersonJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Khang Pham',
    url: `${BASE_URL}/about`,
    image: `${BASE_URL}/about/khang-pham.webp`,
    sameAs: [
      'https://linkedin.com/in/phamdinhkhang',
      'https://facebook.com/phamdinhkhang',
    ],
    jobTitle: 'Founder',
    worksFor: { '@type': 'Organization', name: 'Validator.vn', url: BASE_URL },
    alumniOf: { '@type': 'CollegeOrUniversity', name: 'National University of Singapore' },
    knowsAbout: ['Business Strategy', 'F&B', 'E-commerce', 'AI', 'Fintech'],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

// Fallback icons for entries without logos
const INDUSTRY_ICONS: Record<string, string> = {
  'Bán lẻ': 'retail',
  'Retail': 'retail',
  'AI': 'chat',
};

// Industry pill colors
const INDUSTRY_COLORS: Record<string, string> = {
  'Giáo dục': 'bg-pastel-blue',
  'Education': 'bg-pastel-blue',
  'Công nghệ': 'bg-pastel-mint',
  'Tech': 'bg-pastel-mint',
  'Bán lẻ': 'bg-pastel-gold',
  'Retail': 'bg-pastel-gold',
  'F&B': 'bg-pastel-cream',
  'Hospitality': 'bg-pastel-blush',
  'E-commerce': 'bg-pastel-blue',
  'Food Tech': 'bg-pastel-mint',
  'Fintech': 'bg-pastel-gold',
  'AI': 'bg-pastel-blush',
  'Cộng đồng': 'bg-pastel-cream',
  'Community': 'bg-pastel-cream',
};

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const about = dict.knowledge.about;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 max-md:px-3 max-md:py-6">
      <PersonJsonLd />

      {/* Breadcrumb */}
      <nav className="text-[13px] text-text-muted mb-6">
        <Link href={localePath('/', locale as Locale)} className="hover:text-cta transition-colors">
          {dict.knowledge.breadcrumb.home}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-text font-semibold">{about.breadcrumbTitle}</span>
      </nav>

      {/* ===== Profile Hero ===== */}
      <div className="clay-card-static bg-white p-6 mb-6 text-center">
        <Image
          src="/about/khang-pham.webp"
          alt={about.profile.photoAlt}
          width={120}
          height={120}
          className="mx-auto mb-3 rounded-full border-4 border-white shadow-lg object-cover"
        />
        <h1 className="text-xl font-bold text-text font-[family-name:var(--font-heading)]">
          {about.profile.name}
        </h1>
        <p className="text-[13px] text-cta font-semibold mt-0.5">
          {about.profile.title}
        </p>
        <p className="text-[12px] text-text-muted mt-2 max-w-[440px] mx-auto leading-relaxed">
          {about.profile.tagline}
        </p>

        {/* Social */}
        <div className="flex gap-3 justify-center mt-4 pt-3 border-t border-border-light">
          <a href="https://linkedin.com/in/phamdinhkhang" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <SocialIcon name="linkedin" size={38} className="hover:opacity-80 transition-opacity" />
          </a>
          <a href="https://facebook.com/phamdinhkhang" target="_blank" rel="noopener noreferrer" title="Facebook">
            <SocialIcon name="facebook" size={38} className="hover:opacity-80 transition-opacity" />
          </a>
          <a href="mailto:phamdinhkhang@gmail.com" title="Email">
            <SocialIcon name="email" size={38} className="hover:opacity-80 transition-opacity" />
          </a>
        </div>
      </div>

      {/* ===== Career Journey ===== */}
      <div className="clay-card-static bg-white p-5 mb-6">
        <h2 className="text-[15px] font-bold text-text font-[family-name:var(--font-heading)] mb-4 text-center">
          {about.journey.heading}
        </h2>

        <div className="relative pl-6 max-md:pl-5">
          {/* Vertical line */}
          <div className="absolute left-[9px] top-2 bottom-2 w-[2px] bg-border-light max-md:left-[7px]" />

          <div className="space-y-4">
            {about.journey.entries.map((entry, i) => {
              const isCurrent = 'current' in entry && entry.current;
              const pillBg = INDUSTRY_COLORS[entry.industry] || 'bg-surface3';

              return (
                <div key={i} className="relative">
                  {/* Dot on timeline */}
                  <div className={`absolute -left-6 top-3 w-3 h-3 rounded-full border-2 border-white max-md:-left-5 ${isCurrent ? 'bg-cta' : 'bg-text-muted'}`} />

                  <div className={`clay-sm bg-white p-3.5 ${isCurrent ? 'border-l-3 border-l-cta' : ''}`}>
                    <div className="flex items-start gap-3">
                      {/* Logo */}
                      <div className="w-[48px] h-[48px] shrink-0 rounded-lg bg-surface2 flex items-center justify-center overflow-hidden">
                        {entry.logo ? (
                          <Image
                            src={`/about/${entry.logo}`}
                            alt={entry.company}
                            width={48}
                            height={48}
                            className="object-contain p-1"
                          />
                        ) : (
                          <Icon name={INDUSTRY_ICONS[entry.industry] || 'retail'} size={36} className="!border-0 !shadow-none !bg-transparent" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-[13px] font-bold font-[family-name:var(--font-heading)] text-text">
                            {entry.company}
                          </h3>
                          <span className={`clay-pill !text-[10px] ${pillBg}`}>
                            {entry.industry}
                          </span>
                        </div>
                        <p className="text-[11px] text-text-muted mt-0.5">
                          {entry.role} · {entry.period}
                        </p>
                        <p className="text-[12px] text-text leading-relaxed mt-1">
                          {entry.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ===== Expertise ===== */}
      <div className="clay-card-static bg-white p-5 mb-6">
        <h2 className="text-[15px] font-bold text-text font-[family-name:var(--font-heading)] mb-3 text-center">
          {about.expertise.heading}
        </h2>
        <div className="grid grid-cols-2 gap-3 max-md:grid-cols-1">
          {about.expertise.areas.map((area, i) => (
            <div key={i} className="clay-sm bg-pastel-cream p-4 text-center">
              <Icon name={area.icon} size={32} className="mx-auto mb-2 !border-0 !shadow-none !bg-transparent" />
              <h3 className="text-[13px] font-bold font-[family-name:var(--font-heading)] text-text mb-1">
                {area.title}
              </h3>
              <p className="text-[11px] text-text-muted leading-relaxed">{area.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Vision ===== */}
      <div className="clay-card-static bg-white p-5 mb-6">
        <h2 className="text-[15px] font-bold text-text font-[family-name:var(--font-heading)] mb-3 text-center">
          {about.vision.heading}
        </h2>

        <div className="space-y-3 text-[13px] text-text leading-relaxed">
          <p dangerouslySetInnerHTML={{ __html: about.vision.story }} />
          <p>{about.vision.purpose}</p>

          <ul className="space-y-1.5 pl-1">
            {about.vision.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-cta font-bold mt-0.5 shrink-0">{'>'}</span>
                {bullet}
              </li>
            ))}
          </ul>

          <div className="clay-card-static bg-pastel-mint p-4 text-center">
            <p className="text-[14px] font-bold font-[family-name:var(--font-heading)] text-text">
              {about.vision.born}
            </p>
            <p className="text-[12px] text-text-muted mt-1.5 max-w-[400px] mx-auto">
              {about.vision.bornDesc}
            </p>
          </div>

          <p className="text-center text-[12px] text-text-muted italic">
            {about.product.feedback}
          </p>
          <p className="text-center font-bold font-[family-name:var(--font-heading)] text-[14px] mt-1">
            {about.product.signoff}
          </p>
        </div>
      </div>

      {/* ===== Buy me a coffee ===== */}
      <div className="clay-card-static bg-pastel-gold p-5 mb-6 text-center">
        <p className="text-[22px] mb-1">&#9749;</p>
        <h2 className="text-[15px] font-bold text-text font-[family-name:var(--font-heading)] mb-1.5">
          {about.coffee.heading}
        </h2>
        <p className="text-[12px] text-text-muted leading-relaxed max-w-[380px] mx-auto mb-3">
          {about.coffee.desc}
        </p>
        <DonateButton />
      </div>

      {/* Share */}
      <div className="mb-6">
        <ShareBlock {...dict.common.share} />
      </div>

      {/* CTA */}
      <div className="text-center mb-6">
        <Link
          href={localePath('/fnb', locale as Locale)}
          className="clay-btn clay-btn-primary text-[14px] px-6 py-2.5 inline-flex items-center gap-2"
        >
          <Icon name="wizard" size={18} className="!border-0 !shadow-none !bg-transparent" />
          {dict.knowledge.cta.validateIdea}
        </Link>
      </div>

      <Footer />
    </div>
  );
}
