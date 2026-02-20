'use client';

import { useState } from 'react';
import type { CalcResults } from '@/types';
import { formatVND, formatFullVND } from '@/lib/format';
import { useTranslation, tpl } from '@/i18n/LocaleProvider';

interface SensitivityPanelProps {
  results: CalcResults;
  wastePct: number;
  baseTicket: number;
  baseCustDay: number;
}

export default function SensitivityPanel({ results: r, wastePct, baseTicket, baseCustDay }: SensitivityPanelProps) {
  const { t } = useTranslation();
  const [sensCust, setSensCust] = useState(100);
  const [sensTicket, setSensTicket] = useState(100);
  const [sensCogs, setSensCogs] = useState(100);
  const [sensRent, setSensRent] = useState(100);

  const sm = r.stableMonth;
  const nRev = sm.netRev * sensCust / 100 * sensTicket / 100;
  const nCogs = nRev * (r.cogsPct / 100 * sensCogs / 100);
  const nRent = sm.rent * sensRent / 100;
  const nFixed = r.fixedMonthly - sm.rent + nRent;
  // Scale varOther with revenue (variable costs change with volume)
  const revRatio = sm.netRev > 0 ? nRev / sm.netRev : 1;
  const nVarOther = sm.varOther * revRatio;
  const nProfit = nRev - nCogs - nCogs * (wastePct / 100) - nFixed - nVarOther;
  const diff = nProfit - sm.netProfit;

  // Absolute values for each slider
  const absCust = Math.round(baseCustDay * sensCust / 100);
  const absTicket = Math.round(baseTicket * sensTicket / 100);
  const absCogsRate = (r.cogsPct * sensCogs / 100).toFixed(1);
  const absRent = Math.round(sm.rent * sensRent / 100);

  return (
    <div>
      <h4 className="mb-3 font-[family-name:var(--font-heading)] text-sm font-semibold text-text">
        {t.dashboard.sensitivity.title}
      </h4>
      <p className="text-[13px] text-text-muted mb-3">{t.dashboard.sensitivity.subtitle}</p>

      <SensSlider label={t.dashboard.sensitivity.customers} value={sensCust} min={50} max={150} onChange={setSensCust} absLabel={tpl(t.dashboard.sensitivity.customersPerDay, { n: absCust })} />
      <SensSlider label={t.dashboard.sensitivity.ticketSize} value={sensTicket} min={70} max={130} onChange={setSensTicket} absLabel={formatFullVND(absTicket)} />
      <SensSlider label={t.dashboard.sensitivity.cogsCost} value={sensCogs} min={80} max={130} onChange={setSensCogs} absLabel={tpl(t.dashboard.sensitivity.revenueOfSales, { pct: absCogsRate })} />
      <SensSlider label={t.dashboard.sensitivity.rentCost} value={sensRent} min={70} max={150} onChange={setSensRent} absLabel={formatFullVND(absRent)} />

      <div className="grid grid-cols-3 gap-2.5 max-md:grid-cols-1">
        <div className="clay-sm p-4 text-center bg-secondary-light">
          <div className="text-xs text-text-muted">{t.dashboard.sensitivity.resultRevenue}</div>
          <div className="text-xl font-bold font-[family-name:var(--font-heading)] tracking-tight">{formatVND(nRev)}</div>
        </div>
        <div className={`clay-sm p-4 text-center ${nProfit > 0 ? 'bg-mint-light border-l-[4px] border-l-cta' : 'bg-[#FEE2E2] border-l-[4px] border-l-danger'}`}>
          <div className="text-xs text-text-muted">{t.dashboard.sensitivity.resultProfit}</div>
          <div className="text-xl font-bold font-[family-name:var(--font-heading)] tracking-tight">{formatVND(nProfit)}</div>
        </div>
        <div className={`clay-sm p-4 text-center ${diff >= 0 ? 'bg-mint-light border-l-[4px] border-l-cta' : 'bg-[#FEE2E2] border-l-[4px] border-l-danger'}`}>
          <div className="text-xs text-text-muted">{t.dashboard.sensitivity.resultChange}</div>
          <div className="text-xl font-bold font-[family-name:var(--font-heading)] tracking-tight">{diff >= 0 ? '+' : ''}{formatVND(diff)}</div>
        </div>
      </div>
    </div>
  );
}

function SensSlider({ label, value, min, max, onChange, absLabel }: {
  label: string; value: number; min: number; max: number; onChange: (v: number) => void; absLabel: string;
}) {
  const changed = value !== 100;
  return (
    <div className="mb-3.5">
      <label className="flex justify-between items-baseline text-sm font-medium font-[family-name:var(--font-heading)]">
        <span>{label}</span>
        <span className="text-right">
          <span className={`font-semibold ${changed ? 'text-cta' : 'text-accent'}`}>{value}%</span>
          <span className="text-text-muted text-xs ml-1.5">= {absLabel}</span>
        </span>
      </label>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        className="w-full accent-accent h-1 cursor-pointer mt-1"
      />
    </div>
  );
}
