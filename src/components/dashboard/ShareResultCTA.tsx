'use client';

import { useRef, useState } from 'react';
import { track } from '@vercel/analytics';
import { useTranslation } from '@/i18n/LocaleProvider';
import Icon from '@/components/ui/Icon';
import ResultCard, { type ResultCardData } from '@/components/dashboard/ResultCard';
import { generateResultImage, downloadBlob } from '@/lib/generateResultImage';

const SITE_URL = 'https://www.validator.vn';

const COPY = {
  vi: {
    headingGood: '🎉 Chia sẻ kết quả khả thi này',
    headingWarn: '💪 Share để rủ đồng đội cùng phân tích',
    headingBad: '⚠️ Cảnh báo này nên share cho ai đang định mở quán',
    bodyGood: 'Inspire 1 người bạn cũng đang ấp ủ mở quán — mất 5 giây, có thể cứu họ 200-500 triệu.',
    bodyWarn: 'Gửi cho bạn đồng kinh doanh xem lại — 2 góc nhìn tốt hơn 1.',
    bodyBad: 'Đừng giữ một mình. Bạn nào đang dự định mở quán mô hình này — nên thấy con số này trước.',
    download: 'Tải hình share',
    downloading: 'Đang tạo hình...',
    facebook: 'Share FB',
    zalo: 'Share Zalo',
    copyLink: 'Copy link',
    copied: '✓ Đã copy',
  },
  en: {
    headingGood: '🎉 Share this viable result',
    headingWarn: '💪 Get a second opinion from a co-founder',
    headingBad: '⚠️ Warn friends planning the same model',
    bodyGood: 'Inspire one friend also dreaming of opening — 5 seconds, could save them $10-30K.',
    bodyWarn: 'Send to your co-founder — two perspectives beat one.',
    bodyBad: 'Don\'t keep it to yourself. Anyone planning this model needs to see these numbers first.',
    download: 'Download share image',
    downloading: 'Generating...',
    facebook: 'Share FB',
    zalo: 'Share Zalo',
    copyLink: 'Copy link',
    copied: '✓ Copied',
  },
} as const;

interface ShareResultCTAProps {
  resultData: ResultCardData;
}

export default function ShareResultCTA({ resultData }: ShareResultCTAProps) {
  const { locale } = useTranslation();
  const t = COPY[locale === 'en' ? 'en' : 'vi'];
  const cardRef = useRef<HTMLDivElement>(null);
  const [generating, setGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const score = resultData.score;
  const heading = score >= 70 ? t.headingGood : score >= 45 ? t.headingWarn : t.headingBad;
  const body = score >= 70 ? t.bodyGood : score >= 45 ? t.bodyWarn : t.bodyBad;

  const shareText = locale === 'vi'
    ? `Mình vừa thẩm định mô hình ${resultData.modelName} trên Validator.vn — Score: ${score}/100, hòa vốn ${resultData.paybackMonth ? `${resultData.paybackMonth} tháng` : '>24 tháng'}. Thử miễn phí 👉`
    : `Just validated my ${resultData.modelName} on Validator.vn — Score: ${score}/100, break-even ${resultData.paybackMonth ? `${resultData.paybackMonth} months` : '>24 months'}. Try free 👉`;

  const shareUrl = `${SITE_URL}/fnb?score=${score}&model=${encodeURIComponent(resultData.modelName)}&payback=${resultData.paybackMonth || ''}&utm_source=share&utm_medium=result-cta`;

  const fbShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`;
  const zaloShareUrl = `https://zalo.me/share?u=${encodeURIComponent(shareUrl)}`;

  const handleDownload = async () => {
    if (!cardRef.current || generating) return;
    setGenerating(true);
    try {
      track('share_result_cta_download', { score, model: resultData.modelName });
      const blob = await generateResultImage(cardRef.current);
      const filename = `validator-${resultData.modelName?.toLowerCase().replace(/\s+/g, '-') || 'result'}.png`;
      downloadBlob(blob, filename);
    } catch {
      // silent fail
    } finally {
      setGenerating(false);
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
      setCopied(true);
      track('share_result_cta_copy', { score });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // silent fail
    }
  };

  // Color based on score
  const bgClass = score >= 70
    ? 'bg-emerald-50 border-emerald-300'
    : score >= 45
    ? 'bg-amber-50 border-amber-300'
    : 'bg-rose-50 border-rose-300';

  return (
    <div className={`mt-3 p-4 rounded-2xl border-2 ${bgClass} no-print`}>
      <div className="flex items-start gap-3">
        <div className="shrink-0 w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-[2px_2px_0_var(--color-text)]">
          <Icon name="link" size={22} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-[15px] font-bold font-[family-name:var(--font-heading)] text-text mb-1 leading-tight">
            {heading}
          </h3>
          <p className="text-[12px] text-text-muted leading-relaxed mb-3">{body}</p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={handleDownload}
              disabled={generating}
              className="clay-btn clay-btn-primary !px-4 !py-2 text-[12px] font-bold disabled:opacity-50"
              type="button"
            >
              <Icon name="download" size={16} className="!border-0 !shadow-none !bg-transparent !p-0 inline-flex" />
              {' '}
              {generating ? t.downloading : t.download}
            </button>
            <a
              href={fbShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track('share_result_cta_facebook', { score })}
              className="clay-pill flex items-center gap-1.5 px-3 py-2 text-[12px] font-semibold bg-[#1877F2] text-white hover:brightness-110 transition-all"
            >
              <Icon name="facebook" size={16} className="!border-0 !shadow-none !bg-transparent !p-0 text-white" />
              {t.facebook}
            </a>
            {locale === 'vi' && (
              <a
                href={zaloShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track('share_result_cta_zalo', { score })}
                className="clay-pill flex items-center gap-1.5 px-3 py-2 text-[12px] font-semibold bg-[#0068FF] text-white hover:brightness-110 transition-all"
              >
                <span className="text-[13px] font-bold">Z</span>
                {t.zalo}
              </a>
            )}
            <button
              onClick={handleCopyLink}
              className="clay-pill flex items-center gap-1.5 px-3 py-2 text-[12px] font-semibold bg-white text-text border border-text/20 hover:bg-surface3 transition-all"
              type="button"
            >
              <Icon name={copied ? 'check' : 'link'} size={16} className="!border-0 !shadow-none !bg-transparent !p-0" />
              {copied ? t.copied : t.copyLink}
            </button>
          </div>
        </div>
      </div>

      {/* Hidden card for image generation */}
      <div style={{ position: 'absolute', left: '-9999px', top: 0 }} aria-hidden>
        <ResultCard ref={cardRef} {...resultData} />
      </div>
    </div>
  );
}
