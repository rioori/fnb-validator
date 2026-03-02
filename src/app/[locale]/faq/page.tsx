import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/home/Footer';
import { getDictionary } from '@/i18n/get-dictionary';
import { defaultLocale, type Locale } from '@/i18n/config';
import { localePath } from '@/i18n/link';

const BASE_URL = 'https://www.validator.vn';

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const faq = dict.legal.faq;
  const canonical = locale === defaultLocale ? `${BASE_URL}/faq` : `${BASE_URL}/en/faq`;

  return {
    title: faq.meta.title,
    description: faq.meta.description,
    alternates: {
      canonical,
      languages: { vi: `${BASE_URL}/faq`, en: `${BASE_URL}/en/faq` },
    },
  };
}

function FAQJsonLd({ items }: { items: { q: string; a: string }[] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export default async function FAQPage({ params }: PageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const faq = dict.legal.faq;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 max-md:px-3 max-md:py-6">
      <FAQJsonLd items={faq.items} />

      <nav className="text-[13px] text-text-muted mb-6">
        <Link href={localePath('/', locale as Locale)} className="hover:text-cta transition-colors">
          {dict.common.nav.home}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-text font-semibold">{faq.title}</span>
      </nav>

      <div className="clay-card-static bg-white p-6 mb-6">
        <h1 className="text-xl font-bold text-text font-[family-name:var(--font-heading)] mb-5">
          {faq.title}
        </h1>

        <div className="space-y-3">
          {faq.items.map((item, i) => (
            <details key={i} className="clay-sm bg-white group">
              <summary className="p-4 cursor-pointer text-[13px] font-semibold font-[family-name:var(--font-heading)] text-text list-none flex items-center justify-between">
                <span>{item.q}</span>
                <span className="text-text-muted text-lg transition-transform group-open:rotate-45 ml-2 shrink-0">+</span>
              </summary>
              <div className="px-4 pb-4 text-[13px] text-text leading-relaxed border-t border-border-light pt-3">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mb-6">
        <Link
          href={localePath('/fnb', locale as Locale)}
          className="clay-btn clay-btn-primary text-[14px] px-6 py-2.5 inline-flex items-center gap-2"
        >
          {locale === 'en' ? 'Try the Validation Tool' : 'Thử công cụ thẩm định'}
        </Link>
      </div>

      <Footer />
    </div>
  );
}
