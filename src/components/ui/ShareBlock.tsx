'use client';

import { track } from '@vercel/analytics';
import { SocialIcon } from '@/components/ui/Icon';

const SITE_URL = 'https://www.validator.vn';
const FB_PAGE = 'https://www.facebook.com/people/Validatorvn/61588208866760/';
const LI_PAGE = 'https://linkedin.com/company/validator-vn';

interface ShareBlockProps {
  heading: string;
  desc: string;
  shareFacebook: string;
  shareLinkedin: string;
  followUs: string;
  shareText: string;
}

export default function ShareBlock({ heading, desc, shareFacebook, shareLinkedin, followUs, shareText }: ShareBlockProps) {
  const fbShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SITE_URL)}&quote=${encodeURIComponent(shareText)}`;
  const liShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(SITE_URL)}`;

  const handleShare = (platform: string) => {
    track('social_share', { platform });
  };

  return (
    <div className="clay-card-static bg-white p-4 text-center">
      <p className="text-[13px] font-bold font-[family-name:var(--font-heading)] text-text mb-0.5">
        {heading}
      </p>
      <p className="text-[11px] text-text-muted mb-3">
        {desc}
      </p>

      {/* Share buttons — equal width */}
      <div className="grid grid-cols-2 gap-2 max-w-[360px] mx-auto mb-3 max-sm:grid-cols-1">
        <a
          href={fbShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleShare('facebook')}
          className="clay-pill flex items-center justify-center gap-2 px-4 py-2 text-[12px] font-semibold bg-[#E7F0FE] text-[#1877F2] hover:brightness-95 transition-all cursor-pointer"
        >
          <SocialIcon name="facebook" size={22} className="!bg-[#1877F2]" />
          {shareFacebook}
        </a>
        <a
          href={liShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleShare('linkedin')}
          className="clay-pill flex items-center justify-center gap-2 px-4 py-2 text-[12px] font-semibold bg-[#E8F4FD] text-[#0A66C2] hover:brightness-95 transition-all cursor-pointer"
        >
          <SocialIcon name="linkedin" size={22} className="!bg-[#0A66C2]" />
          {shareLinkedin}
        </a>
      </div>

      {/* Follow us — label on its own line, icons below */}
      <div className="flex flex-col items-center gap-1.5 pt-2 border-t border-border-light">
        <span className="text-[11px] text-text-muted font-medium">{followUs}</span>
        <div className="flex gap-2">
          <a href={FB_PAGE} target="_blank" rel="noopener noreferrer" title="Facebook" onClick={() => handleShare('follow_facebook')}>
            <SocialIcon name="facebook" size={28} className="hover:opacity-80 transition-opacity" />
          </a>
          <a href={LI_PAGE} target="_blank" rel="noopener noreferrer" title="LinkedIn" onClick={() => handleShare('follow_linkedin')}>
            <SocialIcon name="linkedin" size={28} className="hover:opacity-80 transition-opacity" />
          </a>
        </div>
      </div>
    </div>
  );
}
