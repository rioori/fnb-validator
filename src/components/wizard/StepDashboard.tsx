'use client';

import { useMemo } from 'react';
import { useWizardStore } from '@/hooks/useWizardStore';
import { runCalculations } from '@/lib/calculations';
import { formatVND } from '@/lib/format';
import { exportToExcel } from '@/lib/exportExcel';
import type { CalcInput } from '@/types';

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

  const sm = results.stableMonth;

  const s = (v: 'good' | 'warn' | 'bad') => v;
  const overviewKPIs = [
    { label: 'Lợi nhuận/tháng', value: formatVND(sm.netProfit), status: s(sm.netProfit > 0 ? 'good' : 'bad') },
    { label: 'Hoàn vốn sau', value: results.paybackMonth ? results.paybackMonth + ' tháng' : '>12 tháng', status: s(results.paybackMonth && results.paybackMonth <= 18 ? 'good' : results.paybackMonth ? 'warn' : 'bad') },
    { label: 'Biên lợi nhuận', value: sm.netMargin.toFixed(1) + '%', status: s(sm.netMargin >= 10 ? 'good' : sm.netMargin >= 5 ? 'warn' : 'bad') },
    { label: 'Dự phòng', value: results.workingCapMonths.toFixed(1) + ' tháng', status: s(results.workingCapMonths >= 3 ? 'good' : results.workingCapMonths >= 2 ? 'warn' : 'bad') },
  ];

  return (
    <div>
      <h2 className="text-lg font-bold mb-1 text-text font-[family-name:var(--font-heading)]">
        Kết quả phân tích
      </h2>
      <p className="text-text-muted text-[13px] mb-3">
        Dựa trên thông tin bạn cung cấp, đây là bức tranh tài chính dự kiến.
      </p>

      {/* Overview */}
      <div className="clay-card-static p-4 mb-3">
        <h3 className="text-[13px] mb-3 font-semibold font-[family-name:var(--font-heading)] uppercase tracking-wider text-text-muted">Tổng quan</h3>
        <ScoreRing score={results.score} />
        <KPIGrid kpis={overviewKPIs} />
        <OverviewAlerts results={results} />
      </div>

      {/* P&L + Cash Flow */}
      <CollapsibleSection title="Lãi lỗ & Dòng tiền 12 tháng">
        <PnLSection results={results} />
      </CollapsibleSection>

      {/* Break-even */}
      <CollapsibleSection title="Bao giờ hòa vốn?">
        <BreakEvenSection results={results} />
      </CollapsibleSection>

      {/* Detailed Analysis Report */}
      <CollapsibleSection title="Báo cáo phân tích chi tiết">
        <AnalysisReport
          results={results}
          model={store.selectedModel}
          rent={store.rent}
          totalInvestment={store.getTotalInvestment()}
        />
      </CollapsibleSection>

      {/* Health + Sensitivity */}
      <CollapsibleSection title="Sức khỏe chi phí & Sensitivity">
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
          ← Chỉnh sửa lại
        </button>
        <button
          onClick={handleExportExcel}
          className="clay-pill flex-1 py-3 px-4 text-[13px] font-semibold bg-pastel-mint text-text cursor-pointer hover:brightness-95 transition-all flex items-center justify-center gap-2"
        >
          <Icon name="download" size={20} className="!border-0 !shadow-none !bg-transparent" />
          Xuất Excel
        </button>
        <button
          onClick={() => window.print()}
          className="clay-pill flex-1 py-3 px-4 text-[13px] font-semibold bg-pastel-blue text-text cursor-pointer hover:brightness-95 transition-all flex items-center justify-center gap-2"
        >
          <Icon name="print" size={20} className="!border-0 !shadow-none !bg-transparent" />
          In / Xuất PDF
        </button>
      </div>
    </div>
  );
}
