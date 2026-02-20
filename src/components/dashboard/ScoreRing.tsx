'use client';

import { useTranslation } from '@/i18n/LocaleProvider';

interface ScoreRingProps {
  score: number;
}

export default function ScoreRing({ score }: ScoreRingProps) {
  const { t } = useTranslation();
  const color = score >= 70 ? 'var(--color-cta)' : score >= 45 ? 'var(--color-warning)' : 'var(--color-danger)';
  const label = score >= 70 ? t.dashboard.score.labelGood : score >= 45 ? t.dashboard.score.labelWarn : t.dashboard.score.labelBad;
  const bgLabel = score >= 70 ? 'bg-mint-light' : score >= 45 ? 'bg-primary-light' : 'bg-[#FEE2E2]';

  return (
    <div className="text-center mb-3">
      <div className="flex items-center justify-center gap-3">
        <div
          className="w-[80px] h-[80px] rounded-full flex items-center justify-center transition-all duration-500 border-2 border-text"
          style={{ background: `conic-gradient(${color} ${score * 3.6}deg, #E4E4E7 0)` }}
        >
          <div className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center flex-col border-2 border-text">
            <span className="text-[22px] font-bold font-[family-name:var(--font-heading)] tracking-tight leading-none">{score}</span>
            <span className="text-[9px] text-text-muted">{t.dashboard.score.outOf}</span>
          </div>
        </div>
        <div className={`clay-pill ${bgLabel} font-medium text-[13px] text-text`}>{label}</div>
      </div>
    </div>
  );
}
