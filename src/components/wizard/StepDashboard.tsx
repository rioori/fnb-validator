'use client';

import { useMemo, useEffect, useRef } from 'react';
import { track } from '@vercel/analytics';
import { useWizardStore } from '@/hooks/useWizardStore';
import { runCalculations } from '@/lib/calculations';
import { formatVND } from '@/lib/format';
import { exportToExcel } from '@/lib/exportExcel';
import type { CalcInput } from '@/types';
import { useTranslation, tpl } from '@/i18n/LocaleProvider';

import ScoreRing from '@/components/dashboard/ScoreRing';
import KPIGrid from '@/components/dashboard/KPIGrid';
import OverviewAlerts from '@/components/dashboard/OverviewAlerts';
import PnLSection from '@/components/dashboard/PnLSection';
import BreakEvenSection from '@/components/dashboard/BreakEvenSection';
import HealthGauges from '@/components/dashboard/HealthGauges';
import SensitivityPanel from '@/components/dashboard/SensitivityPanel';
import AnalysisReport from '@/components/dashboard/AnalysisReport';
import SavePrompt from '@/components/dashboard/SavePrompt';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import NavButtons from '@/components/ui/NavButtons';
import Icon from '@/components/ui/Icon';

export default function StepDashboard() {
  const { t } = useTranslation();
  const store = useWizardStore();

  const results = useMemo(() => {
    const input: CalcInput = {
      ticket: store.getAvgTicket(),
      custWeekday: store.getCustWeekday(),
      custWeekend: store.getCustWeekend(),
      daysPerWeek: store.daysPerWeek,
      deliveryPct: store.chDelivery,
      deliveryCommPct: store.deliveryCommPct,
      cogsPct: store.cogsPct,
      wastePct: store.wastePct,
      rent: store.rent,
      staffTotal: store.getStaffTotal(),
      bhxhOn: store.bhxhOn,
      fixedOther: store.getDynTotal(store.fixedOther),
      varOther: store.getDynTotal(store.varOther),
      totalInvestment: store.getTotalInvestment(),
      workingCap: store.workingCap,
      rampFactors: store.rampFactors,
    };
    return runCalculations(input);
  }, [
    store.ticketItems, store.custMatrix, store.daysPerWeek,
    store.chDelivery, store.deliveryCommPct, store.cogsPct, store.wastePct,
    store.rent, store.staff, store.bhxhOn, store.fixedOther, store.varOther,
    store.invMatbang, store.invXaydung, store.invThietbi, store.invKhac,
    store.workingCap, store.deposit, store.depositMonths, store.rampFactors,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    store.getAvgTicket, store.getCustWeekday, store.getCustWeekend,
    store.getStaffTotal, store.getDynTotal, store.getTotalInvestment,
  ]);

  const handleExportExcel = () => {
    track('export_excel', { model: store.selectedModel || 'unknown' });
    exportToExcel({
      model: store.selectedModel,
      city: store.city,
      area: store.area,
      sqm: store.sqm,
      seats: store.seats,
      daysPerWeek: store.daysPerWeek,
      channels: [store.chDinein, store.chTakeaway, store.chDelivery],
      deposit: store.deposit,
      depositMonths: store.depositMonths,
      rent: store.rent,
      invMatbang: store.invMatbang,
      invXaydung: store.invXaydung,
      invThietbi: store.invThietbi,
      invKhac: store.invKhac,
      workingCap: store.workingCap,
      ticketItems: store.ticketItems,
      avgTicket: store.getAvgTicket(),
      custWeekday: store.getCustWeekday(),
      custWeekend: store.getCustWeekend(),
      rampFactors: store.rampFactors,
      staff: store.staff,
      staffTotal: store.getStaffTotal(),
      bhxhOn: store.bhxhOn,
      cogsPct: store.cogsPct,
      wastePct: store.wastePct,
      deliveryCommPct: store.deliveryCommPct,
      fixedOther: store.fixedOther,
      varOther: store.varOther,
      results,
    });
  };

  // Track wizard completion once
  const tracked = useRef(false);
  useEffect(() => {
    if (!tracked.current) {
      tracked.current = true;
      track('wizard_complete', {
        model: store.selectedModel || 'unknown',
        score: results.score,
        profitable: results.stableMonth.netProfit > 0,
      });
    }
  }, [store.selectedModel, results.score, results.stableMonth.netProfit]);

  const sm = results.stableMonth;

  const s = (v: 'good' | 'warn' | 'bad') => v;
  const overviewKPIs = [
    { label: t.wizard.stepDashboard.kpiProfit, value: formatVND(sm.netProfit), status: s(sm.netProfit > 0 ? 'good' : 'bad') },
    { label: t.wizard.stepDashboard.kpiPayback, value: results.paybackMonth ? tpl(t.wizard.stepDashboard.kpiPaybackMonths, { n: results.paybackMonth }) : t.wizard.stepDashboard.kpiPaybackLong, status: s(results.paybackMonth && results.paybackMonth <= 18 ? 'good' : results.paybackMonth ? 'warn' : 'bad') },
    { label: t.wizard.stepDashboard.kpiMargin, value: sm.netMargin.toFixed(1) + '%', status: s(sm.netMargin >= 10 ? 'good' : sm.netMargin >= 5 ? 'warn' : 'bad') },
    { label: t.wizard.stepDashboard.kpiReserve, value: tpl(t.wizard.stepDashboard.kpiReserveMonths, { n: results.workingCapMonths.toFixed(1) }), status: s(results.workingCapMonths >= 3 ? 'good' : results.workingCapMonths >= 2 ? 'warn' : 'bad') },
  ];

  return (
    <div>
      <h2 className="text-lg font-bold mb-1 text-text font-[family-name:var(--font-heading)]">
        {t.wizard.stepDashboard.title}
      </h2>
      <p className="text-text-muted text-[13px] mb-3">
        {t.wizard.stepDashboard.desc}
      </p>

      {/* Overview */}
      <div className="clay-card-static p-4 mb-3">
        <h3 className="text-[13px] mb-3 font-semibold font-[family-name:var(--font-heading)] uppercase tracking-wider text-text-muted">{t.wizard.stepDashboard.sectionOverview}</h3>
        <ScoreRing score={results.score} />
        <KPIGrid kpis={overviewKPIs} />
        <OverviewAlerts results={results} />
      </div>

      {/* P&L + Cash Flow */}
      <CollapsibleSection title={t.wizard.stepDashboard.sectionPnl}>
        <PnLSection results={results} />
      </CollapsibleSection>

      {/* Break-even */}
      <CollapsibleSection title={t.wizard.stepDashboard.sectionBreakeven}>
        <BreakEvenSection results={results} />
      </CollapsibleSection>

      {/* Detailed Analysis Report */}
      <CollapsibleSection title={t.wizard.stepDashboard.sectionAnalysis}>
        <AnalysisReport
          results={results}
          model={store.selectedModel}
          rent={store.rent}
          totalInvestment={store.getTotalInvestment()}
        />
      </CollapsibleSection>

      {/* Health + Sensitivity */}
      <CollapsibleSection title={t.wizard.stepDashboard.sectionHealth}>
        <HealthGauges results={results} />
        <hr className="my-3 border-t-2 border-border-light" />
        <SensitivityPanel
          results={results}
          wastePct={store.wastePct}
          baseTicket={store.getAvgTicket()}
          baseCustDay={Math.round((store.getCustWeekday() * 5 + store.getCustWeekend() * 2) / 7)}
        />
      </CollapsibleSection>

      {/* Save Prompt */}
      <SavePrompt />

      {/* Export buttons */}
      <div className="flex gap-2 mt-4 max-md:flex-col">
        <button
          onClick={() => store.setStep(1)}
          className="clay-pill flex-1 py-3 px-4 text-[13px] font-semibold bg-white text-text cursor-pointer hover:bg-surface3 transition-colors"
        >
          {t.wizard.stepDashboard.btnEdit}
        </button>
        <button
          onClick={handleExportExcel}
          className="clay-pill flex-1 py-3 px-4 text-[13px] font-semibold bg-pastel-mint text-text cursor-pointer hover:brightness-95 transition-all flex items-center justify-center gap-2"
        >
          <Icon name="download" size={20} className="!border-0 !shadow-none !bg-transparent" />
          {t.wizard.stepDashboard.btnExportExcel}
        </button>
        <button
          onClick={() => window.print()}
          className="clay-pill flex-1 py-3 px-4 text-[13px] font-semibold bg-pastel-blue text-text cursor-pointer hover:brightness-95 transition-all flex items-center justify-center gap-2"
        >
          <Icon name="print" size={20} className="!border-0 !shadow-none !bg-transparent" />
          {t.wizard.stepDashboard.btnPrint}
        </button>
      </div>
    </div>
  );
}
