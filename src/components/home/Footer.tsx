import Icon from '@/components/ui/Icon';
import { SocialIcon } from '@/components/ui/Icon';

export default function Footer() {
  return (
    <div className="clay-sm bg-pastel-cream p-4 text-center">
      <p className="text-[11px] text-text font-[family-name:var(--font-heading)] font-medium mb-2">
        Built with <Icon name="heart" size={14} className="inline-flex align-text-bottom !border-0 !shadow-none !bg-transparent" /> by{' '}
        <a href="https://linkedin.com/in/phamdinhkhang" target="_blank" rel="noopener noreferrer" className="text-cta hover:underline font-bold">Khang Pham</a>
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
        &copy; {new Date().getFullYear()} F&B Validator. All rights reserved.
      </p>
    </div>
  );
}
