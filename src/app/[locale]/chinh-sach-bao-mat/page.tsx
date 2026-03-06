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
  const p = dict.legal.privacy;
  const canonical = locale === defaultLocale ? `${BASE_URL}/chinh-sach-bao-mat` : `${BASE_URL}${localePath('/chinh-sach-bao-mat', 'en')}`;

  return {
    title: p.meta.title,
    description: p.meta.description,
    robots: { index: false, follow: true },
    alternates: {
      canonical,
      languages: { vi: `${BASE_URL}/chinh-sach-bao-mat`, en: `${BASE_URL}${localePath('/chinh-sach-bao-mat', 'en')}` },
    },
  };
}

/** Convert **bold** → <strong> and split bullet lines into <ul>/<li> */
function renderContent(raw: string) {
  const html = raw
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br/>');

  // Split into intro paragraph + bullet list
  const lines = raw.split('\n');
  const bullets = lines.filter((l) => l.startsWith('•'));
  const intro = lines.filter((l) => !l.startsWith('•')).join(' ').trim();

  if (bullets.length === 0) {
    return <p dangerouslySetInnerHTML={{ __html: html }} />;
  }

  const introHtml = intro.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  return (
    <>
      {intro && <p className="mb-2" dangerouslySetInnerHTML={{ __html: introHtml }} />}
      <ul className="space-y-1.5 pl-1">
        {bullets.map((b, i) => (
          <li
            key={i}
            className="flex items-start gap-2"
            dangerouslySetInnerHTML={{
              __html: `<span class="text-cta font-bold mt-0.5 shrink-0">•</span><span>${b.slice(2).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')}</span>`,
            }}
          />
        ))}
      </ul>
    </>
  );
}

export default async function PrivacyPage({ params }: PageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const p = dict.legal.privacy;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 max-md:px-3 max-md:py-6">
      <nav className="text-[13px] text-text-muted mb-6">
        <Link href={localePath('/', locale as Locale)} className="hover:text-cta transition-colors">
          {dict.common.nav.home}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-text font-semibold">{p.title}</span>
      </nav>

      <div className="clay-card-static bg-white p-6 mb-6">
        <h1 className="text-xl font-bold text-text font-[family-name:var(--font-heading)] mb-1">
          {p.title}
        </h1>
        <p className="text-[12px] text-text-muted mb-5">{p.lastUpdated}</p>

        <div className="space-y-5">
          {p.sections.map((section, i) => (
            <div key={i}>
              <h2 className="text-[14px] font-bold font-[family-name:var(--font-heading)] text-text mb-2">
                {section.heading}
              </h2>
              <div className="text-[13px] text-text leading-relaxed">
                {renderContent(section.content)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
