import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import { SocialIcon } from '@/components/ui/Icon';
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
      type: 'profile',
    },
    alternates: {
      canonical,
      languages: { vi: `${BASE_URL}/about`, en: `${BASE_URL}/en/about` },
    },
  };
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const about = dict.knowledge.about;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 max-md:px-3 max-md:py-6">
      {/* Breadcrumb */}
      <nav className="text-[13px] text-text-muted mb-6">
        <Link href={localePath('/', locale as Locale)} className="hover:text-cta transition-colors">{dict.knowledge.breadcrumb.home}</Link>
        <span className="mx-2">/</span>
        <span className="text-text font-semibold">{about.breadcrumbTitle}</span>
      </nav>

      {/* Page title */}
      <div className="clay-card-static bg-pastel-cream p-6 mb-6 text-center">
        <Icon name="heart" size={48} className="mx-auto mb-2" />
        <h1 className="text-xl font-bold text-text font-[family-name:var(--font-heading)]">
          {about.pageTitle}
        </h1>
      </div>

      {/* === Tac gia === */}
      <div className="clay-card-static bg-white p-5 mb-6">
        <div className="text-center mb-4">
          <h2 className="text-[16px] font-bold text-text font-[family-name:var(--font-heading)]">
            {about.authorName}
          </h2>
          <p className="text-[12px] text-text-muted mt-1 italic max-w-[360px] mx-auto">
            &ldquo;{about.authorQuote}&rdquo;
          </p>
        </div>

        <div className="space-y-3 text-[13px] text-text leading-relaxed">
          <p dangerouslySetInnerHTML={{ __html: about.bio.intro }} />

          <div className="clay-card-static bg-pastel-gold p-4">
            <p className="font-bold font-[family-name:var(--font-heading)] text-[13px] mb-1.5 flex items-center gap-1.5">
              <Icon name="home" size={20} className="shrink-0" /> {about.bio.sadecTitle}
            </p>
            <p className="text-[12px] leading-relaxed" dangerouslySetInnerHTML={{ __html: about.bio.sadecDesc }} />
          </div>

          <p dangerouslySetInnerHTML={{ __html: about.bio.noExperience }} />

          <div className="clay-card-static bg-pastel-blue p-4">
            <p className="text-[12px] italic leading-relaxed text-text-muted">
              &ldquo;{about.bio.regretQuote}&rdquo;
            </p>
          </div>

          <p>{about.bio.passion}</p>

          <p className="font-medium">{about.bio.comeback}</p>
        </div>

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

      {/* === Buy me a coffee === */}
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

      {/* === Tac pham === */}
      <div className="clay-card-static bg-white p-5 mb-6">
        <h2 className="text-[15px] font-bold text-text font-[family-name:var(--font-heading)] mb-3 text-center">
          {about.product.heading}
        </h2>

        <div className="space-y-3 text-[13px] text-text leading-relaxed">
          <p dangerouslySetInnerHTML={{ __html: about.product.story }} />

          <p>{about.product.purpose}</p>

          <ul className="space-y-1.5 pl-1">
            {about.product.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-cta font-bold mt-0.5 shrink-0">{'>'}</span>
                {bullet}
              </li>
            ))}
          </ul>

          <div className="clay-card-static bg-pastel-mint p-4 text-center">
            <p className="text-[14px] font-bold font-[family-name:var(--font-heading)] text-text">
              {about.product.born}
            </p>
            <p className="text-[12px] text-text-muted mt-1.5 max-w-[400px] mx-auto">
              {about.product.bornDesc}
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
