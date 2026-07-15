import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import { localePath } from '@/i18n/link';
import type { Locale } from '@/i18n/config';
import Footer from './Footer';

interface Props {
  locale: string;
  children: React.ReactNode;
}

// Shared page shell for standalone sub-views migrated out of the /fnb?view=* pattern.
// Provides the same header (home button + logo) that HomePage used to inject on sub-pages,
// plus the Footer at bottom. Keeps the visual continuity while the page owns its own URL.
export default function PageChrome({ locale, children }: Props) {
  const homeHref = localePath('/', locale as Locale);
  return (
    <div className="max-w-[1200px] mx-auto px-8 pt-4 pb-[80px] max-lg:px-5 max-md:px-3">
      <div className="clay-card-static bg-pastel-cream py-2.5 px-6 mb-4 text-center relative max-md:py-2 max-md:px-5">
        <Link
          href={homeHref}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border-2 border-text bg-white flex items-center justify-center text-[16px] hover:bg-surface3 transition-colors cursor-pointer shadow-[2px_2px_0_var(--color-text)]"
          title="Về trang chủ"
          aria-label="Về trang chủ"
        >
          <Icon name="home" size={20} className="!border-0 !shadow-none !bg-transparent" />
        </Link>
        <Image src="/logo.png" alt="Validator.vn" width={56} height={56} className="mx-auto" />
      </div>
      {children}
      <Footer />
    </div>
  );
}
