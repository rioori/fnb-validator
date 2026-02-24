import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/home/Footer';
import KBLayoutShell from '@/components/knowledge/KBLayoutShell';
import KBSidebar from '@/components/knowledge/KBSidebar';
import { getDictionary } from '@/i18n/get-dictionary';
import type { Locale } from '@/i18n/config';
import { localePath } from '@/i18n/link';
import type { KBTopic } from '@/types';
import KNOWLEDGE_BASE_VI from '@/i18n/data/vi/knowledge';
import KNOWLEDGE_BASE_EN from '@/i18n/data/en/knowledge';

function getKB(locale: string): KBTopic[] {
  return locale === 'en' ? KNOWLEDGE_BASE_EN : KNOWLEDGE_BASE_VI;
}

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function KienThucLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const kb = getKB(locale);

  // Pre-compute locale-prefixed paths for client sidebar
  const localePrefixedPaths: Record<string, string> = {};
  for (const topic of kb) {
    localePrefixedPaths[topic.slug] = localePath(`/kien-thuc/${topic.slug}`, locale as Locale);
  }

  const homeHref = localePath('/fnb', locale as Locale);

  const sidebar = (
    <KBSidebar
      topics={kb}
      categoryLabels={dict.knowledge.categories}
      localePrefixedPaths={localePrefixedPaths}
      exploreLabels={{
        stories: dict.knowledge.explore.stories,
        trends: dict.knowledge.explore.trends,
      }}
      homeHref={homeHref}
    />
  );

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="clay-card-static bg-pastel-cream py-2.5 px-6 text-center relative max-md:px-4">
        <Link
          href={localePath('/', locale as Locale)}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[12px] text-text-muted hover:text-cta transition-colors"
        >
          {dict.knowledge.layout.backHome}
        </Link>
        <Link href={localePath('/', locale as Locale)}>
          <Image src="/logo.png" alt={dict.knowledge.layout.logoAlt} width={56} height={56} className="mx-auto" />
        </Link>
        <Link
          href={localePath('/kien-thuc', locale as Locale)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[12px] text-text-muted hover:text-cta transition-colors"
        >
          {dict.knowledge.layout.knowledgeLink}
        </Link>
      </header>

      {/* Content with sidebar */}
      <div className="flex-1 py-6 max-md:py-4">
        <KBLayoutShell sidebar={sidebar} menuLabel={dict.knowledge.layout.menuLabel}>
          {children}
        </KBLayoutShell>
      </div>

      {/* Footer */}
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
}
