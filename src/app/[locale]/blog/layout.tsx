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

export default async function BlogLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="clay-card-static bg-pastel-cream py-2.5 px-6 text-center relative max-md:px-4">
        <Link
          href={localePath('/fnb', locale as Locale)}
          className="absolute left-6 top-1/2 -translate-y-1/2 text-[12px] text-text-muted hover:text-cta transition-colors max-md:left-4"
        >
          {dict.blog.layout.backHome}
        </Link>
        <Link href={localePath('/fnb', locale as Locale)}>
          <Image src="/logo.png" alt={dict.blog.layout.logoAlt} width={56} height={56} className="mx-auto" />
        </Link>
        <Link
          href={localePath('/blog', locale as Locale)}
          className="absolute right-6 top-1/2 -translate-y-1/2 text-[12px] text-text-muted hover:text-cta transition-colors max-md:right-4"
        >
          {dict.blog.layout.blogLink}
        </Link>
      </header>

      {/* Content */}
      <main className="flex-1 max-w-[720px] mx-auto w-full px-4 py-6 max-md:py-4">
        {children}
      </main>

      {/* Footer */}
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
}
