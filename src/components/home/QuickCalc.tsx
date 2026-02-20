'use client';

import { useState, useMemo } from 'react';
import { useWizardStore } from '@/hooks/useWizardStore';
import { runCalculations } from '@/lib/calculations';
import { formatVND } from '@/lib/format';
import { RAMP_DEFAULT } from '@/lib/constants';
import type { CalcInput } from '@/types';
import VNDInput from '@/components/ui/VNDInput';
import SliderField from '@/components/ui/SliderField';
import Icon from '@/components/ui/Icon';
import { useTranslation, tpl } from '@/i18n/LocaleProvider';

export default function QuickCalc() {
  const { t } = useTranslation();
  const setStep = useWizardStore((s) => s.setStep);

  const [avgTicket, setAvgTicket] = useState(50000);
  const [custsPerDay, setCustsPerDay] = useState(80);
  const [foodCostPct, setFoodCostPct] = useState(30);
  const [rent, setRent] = useState(20000000);
  const [staffCost, setStaffCost] = useState(30000000);
  const [totalInvestment, setTotalInvestment] = useState(500000000);

  const results = useMemo(() => {
    const custWeekday = Math.round(custsPerDay * 0.85);
    const custWeekend = Math.round(custsPerDay * 1.3);

    const input: CalcInput = {
      ticket: avgTicket,
      custWeekday,
      custWeekend,
      daysPerWeek: 7,
      deliveryPct: 20,
      deliveryCommPct: 25,
      cogsPct: foodCostPct,
      wastePct: 5,
      rent,
      staffTotal: staffCost,
      bhxhOn: true,
      fixedOther: 1500000,
      varOther: 15000000,
      totalInvestment,
      workingCap: Math.round(totalInvestment * 0.15),
      rampFactors: [...RAMP_DEFAULT],
    };
    return runCalculations(input);
  }, [avgTicket, custsPerDay, foodCostPct, rent, staffCost, totalInvestment]);

  const sm = results.stableMonth;
  const s = (v: 'good' | 'warn' | 'bad') => v;

  const kpis = [
    { label: t.wizard.quickCalc.kpiRevenue, value: formatVND(sm.grossRev), status: s(sm.grossRev > 0 ? 'good' : 'bad') },
    { label: t.wizard.quickCalc.kpiProfit, value: formatVND(sm.netProfit), status: s(sm.netProfit > 0 ? 'good' : sm.netProfit > -5000000 ? 'warn' : 'bad') },
    { label: t.wizard.quickCalc.kpiMargin, value: sm.netMargin.toFixed(1) + '%', status: s(sm.netMargin >= 10 ? 'good' : sm.netMargin >= 0 ? 'warn' : 'bad') },
    { label: t.wizard.quickCalc.kpiPayback, value: results.paybackMonth ? tpl(t.wizard.quickCalc.kpiPaybackMonths, { n: results.paybackMonth }) : t.wizard.quickCalc.kpiPaybackLong, status: s(results.paybackMonth && results.paybackMonth <= 12 ? 'good' : results.paybackMonth ? 'warn' : 'bad') },
    { label: t.wizard.quickCalc.kpiScore, value: `${results.score}/100`, status: s(results.score >= 70 ? 'good' : results.score >= 45 ? 'warn' : 'bad') },
  ];

  return (
    <div className="clay-card-static bg-pastel-blue p-5 mb-4">
      <div className="text-center mb-4">
        <Icon name="bolt" size={40} className="mx-auto mb-1" />
        <h2 className="text-lg font-bold text-text font-[family-name:var(--font-heading)]">
          {t.wizard.quickCalc.title}
        </h2>
        <p className="text-text-muted text-[12px]">
          {t.wizard.quickCalc.desc}
        </p>
      </div>

      {/* Input grid */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-5 max-md:grid-cols-1">
        <div>
          <label className="block font-semibold text-[13px] mb-1.5 text-text font-[family-name:var(--font-heading)]">
            {t.wizard.quickCalc.labelAvgTicket}
          </label>
          <VNDInput value={avgTicket} onChange={setAvgTicket} placeholder={t.wizard.quickCalc.placeholderAvgTicket} />
        </div>
        <div>
          <label className="block font-semibold text-[13px] mb-1.5 text-text font-[family-name:var(--font-heading)]">
            {t.wizard.quickCalc.labelCustsPerDay}
          </label>
          <input
            type="number"
            value={custsPerDay || ''}
            onChange={(e) => setCustsPerDay(parseInt(e.target.value) || 0)}
            className="w-full clay-input font-[family-name:var(--font-body)] text-text"
            placeholder={t.wizard.quickCalc.placeholderCustsPerDay}
          />
        </div>
        <div>
          <label className="block font-semibold text-[13px] mb-1.5 text-text font-[family-name:var(--font-heading)]">
            {t.wizard.quickCalc.labelRent}
          </label>
          <VNDInput value={rent} onChange={setRent} placeholder={t.wizard.quickCalc.placeholderRent} />
        </div>
        <div>
          <label className="block font-semibold text-[13px] mb-1.5 text-text font-[family-name:var(--font-heading)]">
            {t.wizard.quickCalc.labelStaffCost}
          </label>
          <VNDInput value={staffCost} onChange={setStaffCost} placeholder={t.wizard.quickCalc.placeholderStaffCost} />
        </div>
        <div>
          <label className="block font-semibold text-[13px] mb-1.5 text-text font-[family-name:var(--font-heading)]">
            {t.wizard.quickCalc.labelInvestment}
          </label>
          <VNDInput value={totalInvestment} onChange={setTotalInvestment} placeholder={t.wizard.quickCalc.placeholderInvestment} />
        </div>
        <div>
          <SliderField
            label={t.wizard.quickCalc.labelFoodCost}
            value={foodCostPct}
            min={15}
            max={50}
            onChange={setFoodCostPct}
            hint={t.wizard.quickCalc.hintFoodCost}
          />
        </div>
      </div>

      {/* Results KPIs */}
      <div className="grid grid-cols-5 gap-2 mb-4 max-md:grid-cols-2">
        {kpis.map((kpi, i) => {
          const bg = kpi.status === 'good'
            ? 'border-l-cta bg-mint-light'
            : kpi.status === 'warn'
            ? 'border-l-warning bg-primary-light'
            : 'border-l-danger bg-[#FEE2E2]';
          return (
            <div key={i} className={`clay-sm p-3 text-center border-l-[4px] ${bg}`}>
              <div className="text-lg font-bold font-[family-name:var(--font-heading)] tracking-tight">{kpi.value}</div>
              <div className="text-[11px] text-text-muted mt-0.5">{kpi.label}</div>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="text-center">
        <button
          onClick={() => setStep(1)}
          className="clay-btn clay-btn-primary text-[13px]"
        >
          {t.wizard.quickCalc.ctaButton}
        </button>
      </div>
    </div>
  );
}
