'use client';

import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import { SocialIcon } from '@/components/ui/Icon';
import { useTranslation } from '@/i18n/LocaleProvider';
import { localePath } from '@/i18n/link';

export default function Footer() {
  const { t, locale } = useTranslation();

  return (
    <div className="clay-sm bg-pastel-cream p-4 text-center">
      <p className="text-[11px] text-text font-[family-name:var(--font-heading)] font-medium mb-2">
        {t.common.footer.builtWith} <Icon name="heart" size={14} className="inline-flex align-text-bottom !border-0 !shadow-none !bg-transparent" /> {t.common.footer.forCommunity}{' '}
        <Link href={localePath('/about', locale)} className="text-cta hover:underline font-bold">{t.common.footer.author}</Link>
      </p>
      <div className="flex gap-3 justify-center">
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
      <p className="text-[11px] text-text-light mt-2">
        &copy; {new Date().getFullYear()} Validator.vn — All rights reserved.
      </p>
    </div>
  );
}
