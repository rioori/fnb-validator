'use client';

import type { QuickWin } from '@/types';
import { formatVND } from '@/lib/format';
import { useTranslation, tpl } from '@/i18n/LocaleProvider';

interface QuickWinsPanelProps {
  wins: QuickWin[];
}

const EFFORT_COLORS = {
  easy: 'bg-mint-light text-cta',
  medium: 'bg-primary-light text-warning',
  hard: 'bg-[#FEE2E2] text-danger',
};

export default function QuickWinsPanel({ wins }: QuickWinsPanelProps) {
  const { t } = useTranslation();
  const labels = t.dashboard.quickWins;

  if (wins.length === 0) {
    return <div className="text-sm text-text-muted py-4 text-center">{labels.noWins}</div>;
  }

  const effortLabel = (e: QuickWin['effort']) =>
    e === 'easy' ? labels.effortEasy : e === 'medium' ? labels.effortMedium : labels.effortHard;

  return (
    <div>
      <p className="text-xs text-text-muted mb-3">{labels.subtitle}</p>
      <div className="space-y-2.5">
        {wins.map((win, i) => {
          const titleKey = win.titleKey as keyof typeof labels;
          const descKey = win.descKey as keyof typeof labels;
          const actionKey = win.actionKey as keyof typeof labels;
          const title = (labels[titleKey] as string) || win.titleKey;
          const rawDesc = (labels[descKey] as string) || win.descKey;
          const desc = win.descVars ? tpl(rawDesc, win.descVars) : rawDesc;
          const action = (labels[actionKey] as string) || win.actionKey;

          return (
            <div key={win.id} className="clay-sm p-3.5">
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <span className="text-sm font-bold font-[family-name:var(--font-heading)] flex items-center gap-1.5">
                  <span className="text-base">{win.icon}</span>
                  <span className="text-[11px] text-text-muted font-normal">#{i + 1}</span>
                  {title}
                </span>
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap ${EFFORT_COLORS[win.effort]}`}>
                  {effortLabel(win.effort)}
                </span>
              </div>

              <p className="text-[12px] text-text-muted mb-2">{desc}</p>

              {/* Current → Target */}
              <div className="flex items-center gap-2 text-[12px] mb-2">
                <span className="clay-pill bg-[#FEE2E2] text-danger text-[11px] py-0.5 px-2">
                  {labels.currentLabel}: {win.currentValue}
                </span>
                <span className="text-text-muted">→</span>
                <span className="clay-pill bg-mint-light text-cta text-[11px] py-0.5 px-2">
                  {labels.targetLabel}: {win.targetValue}
                </span>
              </div>

              {/* Impact */}
              {win.monthlyImpact > 0 && (
                <div className="text-[12px] font-semibold text-cta">
                  {labels.impactLabel}: {formatVND(win.monthlyImpact)}
                </div>
              )}

              {/* Action */}
              <div className="text-[11px] text-text-muted mt-1.5 leading-relaxed italic">
                💡 {action}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
