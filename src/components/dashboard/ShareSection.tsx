'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import { track } from '@vercel/analytics';
import { useTranslation } from '@/i18n/LocaleProvider';
import { SocialIcon } from '@/components/ui/Icon';
import Icon from '@/components/ui/Icon';
import ResultCard, { type ResultCardData } from '@/components/dashboard/ResultCard';
import { generateResultImage, downloadBlob } from '@/lib/generateResultImage';

const SITE_URL = 'https://www.validator.vn';
const FB_PAGE = 'https://www.facebook.com/people/Validatorvn/61588208866760/';
const LI_PAGE = 'https://linkedin.com/company/validator-vn';

interface ShareSectionProps {
  resultData?: ResultCardData;
}

export default function ShareSection({ resultData }: ShareSectionProps) {
  const { t, locale } = useTranslation();
  const labels = t.wizard.share;
  const cardRef = useRef<HTMLDivElement>(null);
  const [generating, setGenerating] = useState(false);

  // Dynamic share text with KPIs
  const shareText = resultData
    ? (locale === 'vi'
        ? `Mình vừa thẩm định mô hình ${resultData.modelName} trên Validator.vn — Score: ${resultData.score}/100, hòa vốn ${resultData.paybackMonth ? `${resultData.paybackMonth} tháng` : '>24 tháng'}. Thử miễn phí 👉`
        : `Just validated my ${resultData.modelName} business on Validator.vn — Score: ${resultData.score}/100, break-even ${resultData.paybackMonth ? `${resultData.paybackMonth} months` : '>24 months'}. Try it free 👉`)
    : labels.shareText;

  const [copied, setCopied] = useState(false);

  // Build share URL with result params for dynamic OG preview
  const shareUrl = resultData
    ? `${SITE_URL}/fnb?score=${resultData.score}&model=${encodeURIComponent(resultData.modelName)}&payback=${resultData.paybackMonth || ''}&margin=${resultData.netMargin.toFixed(1)}`
    : SITE_URL;

  const fbShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`;
  const liShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;

  const handleShare = (platform: string) => {
    track('social_share', { platform, hasResult: !!resultData });
  };

  const handleCopyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
      setCopied(true);
      handleShare('copy_link');
    } catch {
      // fallback
    }
  }, [shareText]);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const handleDownloadImage = useCallback(async () => {
    if (!cardRef.current || generating) return;
    setGenerating(true);
    try {
      track('download_result_image', { model: resultData?.modelName || 'unknown' });
      const blob = await generateResultImage(cardRef.current);
      const filename = `validator-${resultData?.modelName?.toLowerCase().replace(/\s+/g, '-') || 'result'}.png`;
      downloadBlob(blob, filename);
    } catch {
      // silently fail
    } finally {
      setGenerating(false);
    }
  }, [generating, resultData]);

  return (
    <div className="mt-3 no-print">
      <div className="clay-card-static bg-white p-4 text-center">
        <p className="text-[13px] font-bold font-[family-name:var(--font-heading)] text-text mb-0.5">
          {labels.heading}
        </p>
        <p className="text-[11px] text-text-muted mb-3">
          {labels.desc}
        </p>

        {/* Share buttons — 3 columns */}
        <div className="grid grid-cols-3 gap-2 max-w-[480px] mx-auto mb-3 max-sm:grid-cols-1">
          <a
            href={fbShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleShare('facebook')}
            className="clay-pill flex items-center justify-center gap-2 px-3 py-2 text-[12px] font-semibold bg-[#E7F0FE] text-[#1877F2] hover:brightness-95 transition-all cursor-pointer"
          >
            <SocialIcon name="facebook" size={20} className="!bg-[#1877F2]" />
            {labels.shareFacebook}
          </a>
          <a
            href={liShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleShare('linkedin')}
            className="clay-pill flex items-center justify-center gap-2 px-3 py-2 text-[12px] font-semibold bg-[#E8F4FD] text-[#0A66C2] hover:brightness-95 transition-all cursor-pointer"
          >
            <SocialIcon name="linkedin" size={20} className="!bg-[#0A66C2]" />
            {labels.shareLinkedin}
          </a>
          <button
            onClick={handleCopyLink}
            className="clay-pill flex items-center justify-center gap-2 px-3 py-2 text-[12px] font-semibold bg-[#F0FDF4] text-[#16A34A] hover:brightness-95 transition-all cursor-pointer"
          >
            <Icon name={copied ? 'check' : 'link'} size={20} className="!border-0 !shadow-none !bg-transparent !p-0 !w-5 !h-5" />
            {copied ? labels.copied : labels.copyLink}
          </button>
        </div>

        {/* Download result image button */}
        {resultData && (
          <button
            onClick={handleDownloadImage}
            disabled={generating}
            className="clay-pill inline-flex items-center justify-center gap-2 px-5 py-2.5 text-[12px] font-semibold bg-cta text-white cursor-pointer hover:brightness-95 transition-all disabled:opacity-50 mb-3"
          >
            <Icon name="download" size={18} className="!border-0 !shadow-none !bg-transparent !p-0" />
            {generating
              ? (locale === 'vi' ? 'Đang tạo...' : 'Generating...')
              : labels.downloadImage}
          </button>
        )}

        {/* Follow us */}
        <div className="flex flex-col items-center gap-1.5 pt-2 border-t border-border-light">
          <span className="text-[11px] text-text-muted font-medium">{labels.followUs}</span>
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

      {/* Hidden result card for image capture */}
      {resultData && (
        <div style={{ position: 'absolute', left: '-9999px', top: 0 }} aria-hidden>
          <ResultCard ref={cardRef} {...resultData} />
        </div>
      )}
    </div>
  );
}
