'use client';

import { useMemo, useEffect, useRef, useState } from 'react';
import { track } from '@vercel/analytics';
import { useWizardStore } from '@/hooks/useWizardStore';
import { useAuth } from '@/hooks/useAuth';
import { runCalculations } from '@/lib/calculations';
import { formatVND } from '@/lib/format';
import { exportToExcel, exportExistingExcel } from '@/lib/exportExcel';
import { exportDashboardPDF } from '@/lib/exportPDF';
import { runDiagnosis } from '@/lib/diagnosis';
import type { CalcInput, DiagnosisInput } from '@/types';
import { useTranslation, tpl } from '@/i18n/LocaleProvider';
import LoginPromptCard from '@/components/auth/LoginPromptCard';

import ScoreRing from '@/components/dashboard/ScoreRing';
import KPIGrid from '@/components/dashboard/KPIGrid';
import OverviewAlerts from '@/components/dashboard/OverviewAlerts';
import PnLSection from '@/components/dashboard/PnLSection';
import BreakEvenSection from '@/components/dashboard/BreakEvenSection';
import HealthGauges from '@/components/dashboard/HealthGauges';
import SensitivityPanel from '@/components/dashboard/SensitivityPanel';
import AnalysisReport from '@/components/dashboard/AnalysisReport';
import ComparisonBar from '@/components/dashboard/ComparisonBar';
import OptimizationPanel from '@/components/dashboard/OptimizationPanel';
import ExistingDashboard from '@/components/dashboard/ExistingDashboard';
import InlineChat from '@/components/dashboard/InlineChat';
import SavePrompt from '@/components/dashboard/SavePrompt';
import EmailCaptureModal from '@/components/dashboard/EmailCaptureModal';
import ShareResultCTA from '@/components/dashboard/ShareResultCTA';
import NextStepPanel from '@/components/dashboard/NextStepPanel';
import AIInsightCards from '@/components/dashboard/AIInsightCards';
import { buildBusinessContextFromState } from '@/lib/businessContext';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import NavButtons from '@/components/ui/NavButtons';
import Icon from '@/components/ui/Icon';
import FeedbackForm from '@/components/dashboard/FeedbackForm';
import ShareSection from '@/components/dashboard/ShareSection';

export default function StepDashboard() {
  const { t, locale } = useTranslation();
  const { user } = useAuth();
  const store = useWizardStore();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const pendingAction = useRef<'excel' | 'print' | null>(null);

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
      businessMode: store.businessMode,
    };
    return runCalculations(input);
  }, [
    store.ticketItems, store.custMatrix, store.daysPerWeek,
    store.chDelivery, store.deliveryCommPct, store.cogsPct, store.wastePct,
    store.rent, store.staff, store.bhxhOn, store.fixedOther, store.varOther,
    store.invMatbang, store.invXaydung, store.invThietbi, store.invKhac,
    store.workingCap, store.deposit, store.depositMonths, store.rampFactors,
    store.businessMode, store.sunkCost,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    store.getAvgTicket, store.getCustWeekday, store.getCustWeekend,
    store.getStaffTotal, store.getDynTotal, store.getTotalInvestment,
  ]);

  const handleLoginSuccess = () => {
    setShowLoginModal(false);
    if (pendingAction.current === 'excel') doExportExcel();
    else if (pendingAction.current === 'print') window.print();
    pendingAction.current = null;
  };

  const handleExportExcel = () => {
    if (!user) {
      pendingAction.current = 'excel';
      setShowLoginModal(true);
      return;
    }
    doExportExcel();
  };

  const handlePrint = () => {
    if (!user) {
      pendingAction.current = 'print';
      setShowLoginModal(true);
      return;
    }
    window.print();
  };

  const handleExportPDF = async () => {
    track('export_pdf', { model: store.selectedModel || 'unknown', mode: store.businessMode });
    const modelName = store.selectedModel || 'validator';
    await exportDashboardPDF('dashboard-content', `validator-${modelName}`, {
      watermark: 'validator.vn',
    });
  };

  const doExportExcel = async () => {
    track('export_excel', { model: store.selectedModel || 'unknown', mode: store.businessMode });

    if (store.businessMode === 'existing') {
      // Run diagnosis for existing mode export
      const diagInput: DiagnosisInput = {
        actualRevenue: store.actualMonthlyRevenue,
        monthsOperating: store.monthsOperating,
        modelKey: store.selectedModel || 'coffee',
        rent: store.rent,
        staffTotal: store.getStaffTotal(),
        bhxhOn: store.bhxhOn,
        fixedOther: store.getDynTotal(store.fixedOther),
        varOther: store.getDynTotal(store.varOther),
        cogsPct: store.cogsPct,
        wastePct: store.wastePct,
        deliveryPct: store.chDelivery,
        takeawayPct: store.chTakeaway,
        dineinPct: store.chDinein,
        deliveryCommPct: store.deliveryCommPct,
        seats: store.seats,
        daysPerWeek: store.daysPerWeek,
        workingCap: store.workingCap,
        totalInvestment: store.getTotalInvestment(),
        menuItems: store.menuItems,
        channelCosts: store.channelCosts,
      };
      const diagResults = runDiagnosis(diagInput);
      await exportExistingExcel({
        model: store.selectedModel,
        projectName: store.projectName,
        city: store.city,
        area: store.area,
        sqm: store.sqm,
        seats: store.seats,
        daysPerWeek: store.daysPerWeek,
        channels: [store.chDinein, store.chTakeaway, store.chDelivery],
        rent: store.rent,
        staff: store.staff,
        staffTotal: store.getStaffTotal(),
        bhxhOn: store.bhxhOn,
        cogsPct: store.cogsPct,
        wastePct: store.wastePct,
        actualRevenue: store.actualMonthlyRevenue,
        monthsOperating: store.monthsOperating,
        results: diagResults,
        locale,
      });
    } else {
      await exportToExcel({
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
        locale,
      });
    }
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

  const isExisting = store.businessMode === 'existing';

  return (
    <div>
      {/* Email capture modal — first owned distribution asset. Shows after 15s delay, once per browser. */}
      <EmailCaptureModal />
      <div id="dashboard-content">
      <h2 className="text-lg font-bold mb-1 text-text font-[family-name:var(--font-heading)]">
        {isExisting ? t.wizard.stepDashboard.titleExisting : t.wizard.stepDashboard.title}
      </h2>
      <p className="text-text-muted text-[13px] mb-3">
        {isExisting ? t.wizard.stepDashboard.descExisting : t.wizard.stepDashboard.desc}
      </p>

      {isExisting ? (
        /* ─── Existing Business: Diagnostic Dashboard ─── */
        <ExistingDashboard />
      ) : (
        /* ─── New Business: Planning Dashboard ─── */
        <>
          {/* Scenario Comparison */}
          {store.baselineResults && (
            <ComparisonBar
              baseline={store.baselineResults}
              current={results}
              baselineLabel={store.baselineLabel}
              onClear={store.clearBaseline}
            />
          )}

          {/* Overview */}
          <div className="clay-card-static p-4 mb-3">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-[13px] font-semibold font-[family-name:var(--font-heading)] uppercase tracking-wider text-text-muted">{t.wizard.stepDashboard.sectionOverview}</h3>
              {!store.baselineResults && (
                <button
                  onClick={() => {
                    const modelName = store.selectedModel ? (store.selectedModel as string) : 'Baseline';
                    store.setBaseline(results, modelName);
                  }}
                  className="text-[11px] text-cta font-semibold hover:underline cursor-pointer no-print"
                >
                  {t.wizard.stepDashboard.saveBaseline}
                </button>
              )}
            </div>
            <ScoreRing score={results.score} />
            <KPIGrid kpis={overviewKPIs} />
            <OverviewAlerts results={results} />
            {/* Share CTA at peak interest moment — user just saw score */}
            <ShareResultCTA resultData={{
              modelName: store.selectedModel || 'F&B',
              score: results.score,
              netProfit: results.stableMonth.netProfit,
              netMargin: results.stableMonth.netMargin,
              paybackMonth: results.paybackMonth,
              totalInvestment: results.totalInvestment,
              bepCustomersDay: results.bepCustomersDay,
              locale,
            }} />
            {/* Guided next-step panel — fixes Thư persona (users disappearing after feasibility check) */}
            <NextStepPanel
              score={results.score}
              netMargin={results.stableMonth.netMargin}
              paybackMonth={results.paybackMonth}
            />
            {/* AI-generated 3-insight cards — auto-fires on dashboard mount, session-cached */}
            {(() => {
              const ctx = buildBusinessContextFromState(store);
              if (!ctx) return null;
              return (
                <AIInsightCards
                  businessContext={ctx}
                  score={results.score}
                  netMargin={results.stableMonth.netMargin}
                  paybackMonth={results.paybackMonth}
                />
              );
            })()}
          </div>

          {/* P&L + Cash Flow */}
          <CollapsibleSection title={t.wizard.stepDashboard.sectionPnl}>
            <PnLSection results={results} />
          </CollapsibleSection>

          {/* Break-even */}
          <CollapsibleSection title={t.wizard.stepDashboard.sectionBreakeven} defaultOpen={false}>
            <BreakEvenSection results={results} />
          </CollapsibleSection>

          {/* Detailed Analysis Report */}
          <CollapsibleSection title={t.wizard.stepDashboard.sectionAnalysis} defaultOpen={false}>
            <AnalysisReport
              results={results}
              model={store.selectedModel}
              rent={store.rent}
              totalInvestment={store.getTotalInvestment()}
            />
          </CollapsibleSection>

          {/* Health + Sensitivity */}
          <CollapsibleSection title={t.wizard.stepDashboard.sectionHealth} defaultOpen={false}>
            <HealthGauges results={results} />
            <hr className="my-3 border-t-2 border-border-light" />
            <SensitivityPanel
              results={results}
              wastePct={store.wastePct}
              baseTicket={store.getAvgTicket()}
              baseCustDay={Math.round((store.getCustWeekday() * 5 + store.getCustWeekend() * 2) / 7)}
            />
          </CollapsibleSection>

          {/* Optimization Suggestions */}
          <CollapsibleSection title={t.wizard.stepDashboard.sectionOptimization} defaultOpen={false}>
            <OptimizationPanel
              results={results}
              rent={store.rent}
              cogsPct={store.cogsPct}
              wastePct={store.wastePct}
              deliveryPct={store.chDelivery}
              deliveryCommPct={store.deliveryCommPct}
              staffTotal={store.getStaffTotal()}
              ticket={store.getAvgTicket()}
            />
          </CollapsibleSection>

          {/* AI Chat */}
          <CollapsibleSection title={t.wizard.stepDashboard.sectionAIChat} defaultOpen={false}>
            <InlineChat />
          </CollapsibleSection>

          {/* Save Prompt */}
          <SavePrompt />
        </>
      )}

      </div>{/* end dashboard-content */}

      {/* Export buttons */}
      <div className="flex gap-2 mt-4 max-md:flex-col no-print">
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
          onClick={handleExportPDF}
          className="clay-pill flex-1 py-3 px-4 text-[13px] font-semibold bg-pastel-gold text-text cursor-pointer hover:brightness-95 transition-all flex items-center justify-center gap-2"
        >
          <Icon name="download" size={20} className="!border-0 !shadow-none !bg-transparent" />
          {t.wizard.stepDashboard.btnExportPDF}
        </button>
        <button
          onClick={handlePrint}
          className="clay-pill flex-1 py-3 px-4 text-[13px] font-semibold bg-pastel-blue text-text cursor-pointer hover:brightness-95 transition-all flex items-center justify-center gap-2"
        >
          <Icon name="print" size={20} className="!border-0 !shadow-none !bg-transparent" />
          {t.wizard.stepDashboard.btnPrint}
        </button>
      </div>

      {/* Login modal for export/print */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-[1000] no-print">
          <div className="w-[90%] max-w-[460px]">
            <LoginPromptCard
              heading={t.common.auth.loginForExport}
              description={t.common.auth.loginForExportDesc}
              showFeatures
              onSuccess={handleLoginSuccess}
              onSkip={() => { setShowLoginModal(false); pendingAction.current = null; }}
            />
          </div>
        </div>
      )}

      {/* Feedback */}
      <FeedbackForm />

      {/* Share / Spread the word */}
      <ShareSection resultData={{
        modelName: store.selectedModel || 'F&B',
        score: results.score,
        netProfit: results.stableMonth.netProfit,
        netMargin: results.stableMonth.netMargin,
        paybackMonth: results.paybackMonth,
        totalInvestment: results.totalInvestment,
        bepCustomersDay: results.bepCustomersDay,
        locale,
      }} />
    </div>
  );
}
