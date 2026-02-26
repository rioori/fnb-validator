import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/home/Footer';
import { getDictionary } from '@/i18n/get-dictionary';
import type { Locale } from '@/i18n/config';
import { localePath } from '@/i18n/link';

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function ExpertsLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="clay-card-static bg-pastel-cream py-2.5 px-6 text-center relative max-md:px-4">
        <Link
          href={localePath('/fnb', locale as Locale)}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[12px] text-text-muted hover:text-cta transition-colors"
        >
          {dict.experts.layout.backHome}
        </Link>
        <Link href={localePath('/fnb', locale as Locale)}>
          <Image src="/logo.png" alt={dict.experts.layout.logoAlt} width={56} height={56} className="mx-auto" />
        </Link>
        <Link
          href={localePath('/goc-nhin-chuyen-gia', locale as Locale)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[12px] text-text-muted hover:text-cta transition-colors"
        >
          {dict.experts.layout.expertsLink}
        </Link>
      </header>

      {/* Content */}
      <div className="flex-1 py-6 max-md:py-4">
        <div className="max-w-[1080px] mx-auto px-4">
          {children}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
}
