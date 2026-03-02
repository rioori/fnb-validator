'use client';

import { useState } from 'react';
import type { DiagnosisResults } from '@/types';
import { formatVND, formatFullVND } from '@/lib/format';
import { useTranslation } from '@/i18n/LocaleProvider';

interface ExistingSensitivityProps {
  results: DiagnosisResults;
  rent: number;
  cogsPct: number;
}

export default function ExistingSensitivity({ results, rent, cogsPct }: ExistingSensitivityProps) {
  const { t } = useTranslation();
  const d = t.dashboard.existingSensitivity;

  const [sensRev, setSensRev] = useState(100);
  const [sensCogs, setSensCogs] = useState(100);
  const [sensRent, setSensRent] = useState(100);
  const [sensStaff, setSensStaff] = useState(100);

  const rev = results.revenue;
  const costs = results.totalCosts;

  // Calculate new values
  const nRev = rev * sensRev / 100;
  const origCogs = rev * (cogsPct / 100);
  const nCogs = nRev * (cogsPct / 100) * sensCogs / 100;
  const origRent = rent;
  const nRent = rent * sensRent / 100;
  const origLabor = results.laborRatio / 100 * rev;
  const nLabor = origLabor * sensStaff / 100;

  // Other costs remain the same
  const otherCosts = costs - origCogs - origRent - origLabor;
  const nTotalCosts = nCogs + nRent + nLabor + otherCosts;
  const nProfit = nRev - nTotalCosts;
  const nMargin = nRev > 0 ? (nProfit / nRev * 100) : 0;
  const diff = nProfit - results.netProfit;

  // Absolute values
  const absRev = Math.round(nRev);
  const absCogsRate = (cogsPct * sensCogs / 100).toFixed(1);
  const absRentVal = Math.round(nRent);
  const absStaffVal = Math.round(nLabor);

  return (
    <div>
      <p className="text-[13px] text-text-muted mb-3">{d.subtitle}</p>

      <SensSlider
        label={d.revenue}
        value={sensRev}
        min={70}
        max={150}
        onChange={setSensRev}
        absLabel={formatFullVND(absRev)}
      />
      <SensSlider
        label={d.cogs}
        value={sensCogs}
        min={70}
        max={130}
        onChange={setSensCogs}
        absLabel={`${absCogsRate}% DT`}
      />
      <SensSlider
        label={d.rent}
        value={sensRent}
        min={50}
        max={150}
        onChange={setSensRent}
        absLabel={formatFullVND(absRentVal)}
      />
      <SensSlider
        label={d.staff}
        value={sensStaff}
        min={70}
        max={130}
        onChange={setSensStaff}
        absLabel={formatFullVND(absStaffVal)}
      />

      <div className="grid grid-cols-3 gap-2.5 max-md:grid-cols-1">
        <div className="clay-sm p-4 text-center bg-secondary-light">
          <div className="text-xs text-text-muted">{d.resultRevenue}</div>
          <div className="text-xl font-bold font-[family-name:var(--font-heading)] tracking-tight">{formatVND(nRev)}</div>
        </div>
        <div className={`clay-sm p-4 text-center ${nProfit > 0 ? 'bg-mint-light border-l-[4px] border-l-cta' : 'bg-[#FEE2E2] border-l-[4px] border-l-danger'}`}>
          <div className="text-xs text-text-muted">{d.resultProfit}</div>
          <div className="text-xl font-bold font-[family-name:var(--font-heading)] tracking-tight">{formatVND(nProfit)}</div>
          <div className="text-[11px] text-text-muted mt-0.5">{d.margin}: {nMargin.toFixed(1)}%</div>
        </div>
        <div className={`clay-sm p-4 text-center ${diff >= 0 ? 'bg-mint-light border-l-[4px] border-l-cta' : 'bg-[#FEE2E2] border-l-[4px] border-l-danger'}`}>
          <div className="text-xs text-text-muted">{d.resultChange}</div>
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
