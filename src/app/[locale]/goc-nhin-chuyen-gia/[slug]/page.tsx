import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getAllExpertSlugs } from '@/lib/constants';
import Icon, { SocialIcon } from '@/components/ui/Icon';
import { getDictionary } from '@/i18n/get-dictionary';
import { defaultLocale, type Locale } from '@/i18n/config';
import { localePath } from '@/i18n/link';
import type { Expert } from '@/types';
import PageTracker from '@/components/ui/PageTracker';
import ShareBlock from '@/components/ui/ShareBlock';
import EXPERTS_VI from '@/i18n/data/vi/experts';
import EXPERTS_EN from '@/i18n/data/en/experts';

function getExperts(locale: string): Expert[] {
  return locale === 'en' ? EXPERTS_EN : EXPERTS_VI;
}

const BASE_URL = 'https://www.validator.vn';

// Deterministic pastel gradient for avatar fallback
const AVATAR_GRADIENTS = [
  'from-[#FDEEC4] to-[#FDBCB4]',
  'from-[#D2ECD0] to-[#E5F4F8]',
  'from-[#E5F4F8] to-[#D4EDFC]',
  'from-[#FDE8E4] to-[#FDEEC4]',
  'from-[#FAF3E3] to-[#D2ECD0]',
];

// ── SSG: generate all expert pages at build time ──
export function generateStaticParams() {
  return getAllExpertSlugs().map((slug) => ({ slug }));
}

// ── Per-page metadata ──
type PageProps = { params: Promise<{ locale: string; slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const experts = getExperts(locale);
  const expert = experts.find((e) => e.slug === slug);
  if (!expert) return {};

  const dict = await getDictionary(locale as Locale);
  const title = `${expert.name} — ${dict.experts.breadcrumb.experts} | Validator.vn`;
  const description = expert.shortBio;
  const viUrl = `${BASE_URL}/goc-nhin-chuyen-gia/${expert.slug}`;
  const enUrl = `${BASE_URL}/en/goc-nhin-chuyen-gia/${expert.slug}`;
  const canonical = locale === defaultLocale ? viUrl : enUrl;

  const ogImage = `/api/og?locale=${locale}&page=expert&title=${encodeURIComponent(expert.name)}&subtitle=${encodeURIComponent(expert.descriptor)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'profile',
      url: canonical,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      images: [ogImage],
    },
    alternates: {
      canonical,
      languages: { vi: viUrl, en: enUrl },
    },
  };
}

// ── JSON-LD Structured Data ──
function PersonJsonLd({ expert, locale }: { expert: Expert; locale: string }) {
  const prefix = locale === defaultLocale ? '' : '/en';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: expert.name,
    description: expert.shortBio,
    jobTitle: expert.descriptor,
    url: `${BASE_URL}${prefix}/goc-nhin-chuyen-gia/${expert.slug}`,
    ...(expert.photo && { image: `${BASE_URL}${expert.photo}` }),
    sameAs: expert.socials.map((s) => s.url),
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  );
}

function BreadcrumbJsonLd({ expert, locale, dict }: { expert: Expert; locale: string; dict: { experts: { breadcrumb: { home: string; experts: string } } } }) {
  const prefix = locale === defaultLocale ? '' : '/en';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: dict.experts.breadcrumb.home, item: `${BASE_URL}${prefix}/fnb` },
      { '@type': 'ListItem', position: 2, name: dict.experts.breadcrumb.experts, item: `${BASE_URL}${prefix}/goc-nhin-chuyen-gia` },
      { '@type': 'ListItem', position: 3, name: expert.name, item: `${BASE_URL}${prefix}/goc-nhin-chuyen-gia/${expert.slug}` },
    ],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  );
}

// ── Link type icon mapping ──
const linkTypeIcons: Record<string, string> = {
  article: 'book',
  video: 'play',
  podcast: 'mic',
  social: 'globe',
};

// ── Avatar component (matches listing page style) ──
function ExpertAvatar({ expert, size, gradientIndex }: { expert: Expert; size: number; gradientIndex: number }) {
  const gradient = AVATAR_GRADIENTS[gradientIndex % AVATAR_GRADIENTS.length];
  const fontSize = Math.round(size * 0.38);

  return (
    <div
      className="rounded-full border-2 border-text overflow-hidden shrink-0 shadow-[2px_2px_0_var(--color-text)]"
      style={{ width: size, height: size }}
    >
      {expert.photo ? (
        <Image
          src={expert.photo}
          alt={expert.name}
          width={size}
          height={size}
          className="object-cover w-full h-full"
          priority
        />
      ) : (
        <div
          className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${gradient}`}
          style={{ fontSize }}
        >
          <span className="font-bold text-text/70 font-[family-name:var(--font-heading)]">
            {expert.name.split(' ').pop()?.charAt(0) || expert.name.charAt(0)}
          </span>
        </div>
      )}
    </div>
  );
}

// ── Section divider (matches listing page style) ──
function SectionDivider({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3 mb-4 mt-8">
      <div className="h-[1.5px] flex-1 bg-border" />
      <h2 className="text-[13px] font-bold font-[family-name:var(--font-heading)] text-text-muted whitespace-nowrap">
        {title}
      </h2>
      <div className="h-[1.5px] flex-1 bg-border" />
    </div>
  );
}

// ── Page Component ──
export default async function ExpertDetailPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const dict = await getDictionary(locale as Locale);
  const experts = getExperts(locale);
  const expert = experts.find((e) => e.slug === slug);
  if (!expert) notFound();

  const expertIndex = experts.findIndex((e) => e.slug === slug);
  const otherExperts = experts.filter((e) => e.slug !== slug).slice(0, 4);

  return (
    <>
      <PageTracker event="expert_view" data={{ slug: expert.slug, category: expert.category }} />
      <PersonJsonLd expert={expert} locale={locale} />
      <BreadcrumbJsonLd expert={expert} locale={locale} dict={dict} />

      <article className="py-2 max-md:py-0 max-w-[720px] mx-auto">
        {/* Breadcrumbs */}
        <nav className="text-[13px] text-text-muted mb-6">
          <Link href={localePath('/fnb', locale as Locale)} className="hover:text-cta transition-colors">
            {dict.experts.breadcrumb.home}
          </Link>
          <span className="mx-2">/</span>
          <Link href={localePath('/goc-nhin-chuyen-gia', locale as Locale)} className="hover:text-cta transition-colors">
            {dict.experts.breadcrumb.experts}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-text font-semibold">{expert.name}</span>
        </nav>

        {/* ── 1. Profile Header — Avatar + Name + Descriptor ── */}
        <div className="clay-card-static bg-pastel-gold p-6 mb-2">
          <div className="flex items-center gap-5 max-md:flex-col max-md:text-center">
            <ExpertAvatar expert={expert} size={80} gradientIndex={expertIndex} />
            <div>
              <h1 className="text-xl font-bold font-[family-name:var(--font-heading)] text-text">
                {expert.name}
              </h1>
              <p className="text-[14px] text-text-muted mt-0.5">{expert.descriptor}</p>
            </div>
          </div>
        </div>

        {/* ── 2. Signature Quotes — The hero element ── */}
        {expert.quotes.length > 0 && (
          <>
            <SectionDivider title={dict.experts.detail.quotes} />
            <div className="space-y-3">
              {expert.quotes.map((q, i) => (
                <blockquote
                  key={i}
                  className="clay-card-static bg-pastel-cream p-5"
                >
                  <p className="text-[15px] text-text italic leading-relaxed border-l-[3px] border-text/20 pl-4">
                    &ldquo;{q.text}&rdquo;
                  </p>
                  <footer className="mt-2.5 pl-4 text-[12px] text-text-muted">
                    {dict.experts.detail.source}{' '}
                    {q.sourceUrl ? (
                      <a
                        href={q.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cta hover:underline"
                      >
                        {q.source}
                      </a>
                    ) : (
                      q.source
                    )}
                  </footer>
                </blockquote>
              ))}
            </div>
          </>
        )}

        {/* ── 3. Advice — Actionable takeaways ── */}
        {expert.advice.length > 0 && (
          <>
            <SectionDivider title={dict.experts.detail.advice} />
            <div className="space-y-3">
              {expert.advice.map((a, i) => {
                const adviceBgs = ['bg-pastel-mint', 'bg-pastel-blue', 'bg-pastel-cream'];
                return (
                  <div key={i} className={`clay-card-static p-4 ${adviceBgs[i % adviceBgs.length]}`}>
                    <h3 className="text-[14px] font-bold text-text mb-1 font-[family-name:var(--font-heading)]">
                      {a.title}
                    </h3>
                    <p className="text-[13px] text-text-muted leading-relaxed">{a.desc}</p>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* ── 4. Highlights — Key achievements ── */}
        {expert.highlights.length > 0 && (
          <>
            <SectionDivider title={dict.experts.detail.highlights} />
            <div className="clay-card-static p-5 max-md:p-4">
              <ul className="space-y-2">
                {expert.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-[13px] text-text">
                    <span className="text-cta font-bold mt-0.5 shrink-0">&#10003;</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

        {/* ── 5. Biography — Full story ── */}
        <SectionDivider title={dict.experts.detail.bio} />
        <div className="clay-card-static p-5 max-md:p-4 bg-pastel-cream/50">
          <p className="text-[14px] text-text leading-[1.75] whitespace-pre-line">
            {expert.fullBio}
          </p>
        </div>

        {/* ── 6. Links, Articles & Socials ── */}
        {(expert.links.length > 0 || expert.socials.length > 0) && (
          <>
            <SectionDivider title={dict.experts.detail.links} />

            {expert.links.length > 0 && (
              <div className="space-y-2">
                {expert.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="clay-card block p-3 bg-surface"
                  >
                    <div className="flex items-center gap-3">
                      <Icon name={linkTypeIcons[link.type] || 'book'} size={28} />
                      <div className="min-w-0 flex-1">
                        <span className="text-[13px] font-semibold text-text block truncate">
                          {link.label}
                        </span>
                        <span className="text-[11px] text-text-muted">
                          {dict.experts.linkTypes[link.type as keyof typeof dict.experts.linkTypes]}
                        </span>
                      </div>
                      <span className="text-cta text-[12px] shrink-0">&#8599;</span>
                    </div>
                  </a>
                ))}
              </div>
            )}

            {expert.socials.length > 0 && (
              <div className={`flex flex-wrap gap-2 ${expert.links.length > 0 ? 'mt-3' : ''}`}>
                {expert.socials.map((s) => (
                  <a
                    key={s.platform}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 clay-pill bg-surface hover:bg-surface3/50 !py-1.5 !px-3 transition-colors"
                  >
                    <SocialIcon name={s.platform} size={24} />
                    <span className="text-[12px] font-semibold text-text capitalize">{s.platform}</span>
                  </a>
                ))}
              </div>
            )}
          </>
        )}

        {/* ── Other Experts ── */}
        {otherExperts.length > 0 && (
          <>
            <SectionDivider title={dict.experts.detail.otherExperts} />
            <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
              {otherExperts.map((e, i) => {
                const otherIndex = experts.findIndex((ex) => ex.slug === e.slug);
                return (
                  <Link
                    key={e.id}
                    href={localePath(`/goc-nhin-chuyen-gia/${e.slug}`, locale as Locale)}
                    className={`clay-card block p-4 ${
                      ['bg-pastel-cream', 'bg-pastel-mint', 'bg-pastel-blue', 'bg-pastel-blush'][i % 4]
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <ExpertAvatar expert={e} size={40} gradientIndex={otherIndex} />
                      <div className="min-w-0">
                        <h3 className="text-[13px] font-bold font-[family-name:var(--font-heading)] text-text">
                          {e.name}
                        </h3>
                        <p className="text-[11px] text-text-muted leading-snug mt-0.5">{e.descriptor}</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </>
        )}

        {/* Back to all */}
        <div className="mt-6 text-center">
          <Link
            href={localePath('/goc-nhin-chuyen-gia', locale as Locale)}
            className="text-[13px] font-semibold text-cta hover:underline"
          >
            {dict.experts.detail.allExperts}
          </Link>
        </div>

        {/* Share */}
        <div className="mt-6">
          <ShareBlock {...dict.common.share} />
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <Link
            href={localePath('/fnb', locale as Locale)}
            className="clay-btn clay-btn-primary text-[14px] px-6 py-2.5 inline-flex items-center gap-2"
          >
            <Icon name="wizard" size={18} className="!border-0 !shadow-none !bg-transparent" />
            {dict.experts.cta.validateIdea}
          </Link>
        </div>
      </article>
    </>
  );
}
