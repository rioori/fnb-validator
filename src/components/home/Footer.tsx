'use client';

import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/components/ui/Icon';
import { SocialIcon } from '@/components/ui/Icon';
import { useTranslation } from '@/i18n/LocaleProvider';
import { localePath } from '@/i18n/link';
import type { Locale } from '@/i18n/config';

export default function Footer() {
  const { t, locale } = useTranslation();
  const footer = t.common.footer;

  return (
    <footer className="clay-card-static bg-pastel-cream overflow-hidden">
      {/* Decorative illustration border */}
      <div className="h-[40px] overflow-hidden opacity-30">
        <Image
          src="/illustrations/footer-scene.webp"
          alt=""
          width={1200}
          height={80}
          className="w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="px-6 py-5 max-md:px-4">
        {/* Three columns */}
        <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1 max-md:gap-4">
          {/* Column 1: About */}
          <div>
            <h4 className="text-[12px] font-bold font-[family-name:var(--font-heading)] uppercase tracking-wider text-text mb-2">
              {footer.aboutTitle}
            </h4>
            <p className="text-[11px] text-text-muted leading-relaxed">
              {footer.aboutDesc}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-[12px] font-bold font-[family-name:var(--font-heading)] uppercase tracking-wider text-text mb-2">
              {footer.linksTitle}
            </h4>
            <ul className="space-y-1.5">
              {footer.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={localePath(link.href, locale as Locale)}
                    className="text-[11px] text-text-muted hover:text-cta transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div>
            <h4 className="text-[12px] font-bold font-[family-name:var(--font-heading)] uppercase tracking-wider text-text mb-2">
              {footer.connectTitle}
            </h4>
            <p className="text-[11px] text-text-muted mb-3">
              {footer.connectDesc}
            </p>
            <div className="flex gap-2.5">
              <a href="https://linkedin.com/company/validator-vn" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <SocialIcon name="linkedin" size={34} className="hover:opacity-80 transition-opacity" />
              </a>
              <a href="https://www.facebook.com/people/Validatorvn/61588208866760/" target="_blank" rel="noopener noreferrer" title="Facebook">
                <SocialIcon name="facebook" size={34} className="hover:opacity-80 transition-opacity" />
              </a>
              <a href="mailto:vn.validator@gmail.com" title="Email">
                <SocialIcon name="email" size={34} className="hover:opacity-80 transition-opacity" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border-light mt-4 pt-3 flex items-center justify-between max-md:flex-col max-md:gap-2">
          <p className="text-[11px] text-text font-[family-name:var(--font-heading)] font-medium">
            {footer.builtWith}{' '}
            <Icon name="heart" size={14} className="inline-flex align-text-bottom !border-0 !shadow-none !bg-transparent" />{' '}
            {footer.forCommunity}
          </p>
          <p className="text-[11px] text-text-light">
            &copy; {new Date().getFullYear()} Validator.vn
          </p>
        </div>
      </div>
    </footer>
  );
}
