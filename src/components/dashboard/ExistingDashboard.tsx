'use client';

import { useMemo } from 'react';
import { useWizardStore } from '@/hooks/useWizardStore';
import { runDiagnosis } from '@/lib/diagnosis';
import { formatVND } from '@/lib/format';
import type { DiagnosisInput } from '@/types';
import { useTranslation } from '@/i18n/LocaleProvider';

import ScoreRing from './ScoreRing';
import KPIGrid from './KPIGrid';
import CostDiagnosis from './CostDiagnosis';
import ChannelProfitability from './ChannelProfitability';
import MenuMatrix from './MenuMatrix';
import BenchmarkPanel from './BenchmarkPanel';
import QuickWinsPanel from './QuickWinsPanel';
import ExistingSensitivity from './ExistingSensitivity';
import ImpactProjection from './ImpactProjection';
import InlineChat from './InlineChat';
import SavePrompt from './SavePrompt';
import ShareSection from './ShareSection';
import CollapsibleSection from '@/components/ui/CollapsibleSection';

export default function ExistingDashboard() {
  const { t, locale } = useTranslation();
  const store = useWizardStore();

  const results = useMemo(() => {
    const input: DiagnosisInput = {
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
    return runDiagnosis(input);
  }, [
    store.actualMonthlyRevenue, store.monthsOperating, store.selectedModel,
    store.rent, store.bhxhOn, store.fixedOther, store.varOther,
    store.cogsPct, store.wastePct, store.chDelivery, store.chTakeaway, store.chDinein,
    store.deliveryCommPct, store.seats, store.daysPerWeek, store.workingCap,
    store.menuItems, store.channelCosts,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    store.getStaffTotal, store.getDynTotal, store.getTotalInvestment,
  ]);

  const s = (v: 'good' | 'warn' | 'bad') => v;

  const overviewKPIs = [
    {
      label: t.wizard.stepDashboard.kpiNetProfit,
      value: formatVND(results.netProfit),
      status: s(results.netProfit > 0 ? 'good' : 'bad'),
    },
    {
      label: t.wizard.stepDashboard.kpiNetMargin,
      value: results.netMargin.toFixed(1) + '%',
      status: s(results.netMargin >= 10 ? 'good' : results.netMargin >= 5 ? 'warn' : 'bad'),
    },
    {
      label: t.wizard.stepDashboard.kpiRentRatio,
      value: results.rentRatio.toFixed(1) + '%',
      status: s(results.rentRatio <= 15 ? 'good' : results.rentRatio <= 20 ? 'warn' : 'bad'),
    },
    {
      label: t.wizard.stepDashboard.kpiReserve,
      value: results.workingCapMonths.toFixed(1) + ' ' + t.dashboard.kpi.monthsUnit,
      status: s(results.workingCapMonths >= 3 ? 'good' : results.workingCapMonths >= 2 ? 'warn' : 'bad'),
    },
  ];

  // Use existing score labels for health score
  const scoreLabels = t.dashboard.existingScore;

  return (
    <div>
      {/* Overview */}
      <div className="clay-card-static p-4 mb-3">
        <h3 className="text-[13px] font-semibold font-[family-name:var(--font-heading)] uppercase tracking-wider text-text-muted mb-3">
          {t.wizard.stepDashboard.sectionOverview}
        </h3>

        {/* Health Score Ring */}
        <div className="text-center mb-3">
          <div className="flex items-center justify-center gap-3">
            <div
              className="w-[80px] h-[80px] rounded-full flex items-center justify-center transition-all duration-500 border-2 border-text"
              style={{
                background: `conic-gradient(${
                  results.healthScore >= 70 ? 'var(--color-cta)' : results.healthScore >= 45 ? 'var(--color-warning)' : 'var(--color-danger)'
                } ${results.healthScore * 3.6}deg, #E4E4E7 0)`,
              }}
            >
              <div className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center flex-col border-2 border-text">
                <span className="text-[22px] font-bold font-[family-name:var(--font-heading)] tracking-tight leading-none">{results.healthScore}</span>
                <span className="text-[9px] text-text-muted">{scoreLabels.outOf}</span>
              </div>
            </div>
            <div className={`clay-pill font-medium text-[13px] text-text ${
              results.healthScore >= 70 ? 'bg-mint-light' : results.healthScore >= 45 ? 'bg-primary-light' : 'bg-[#FEE2E2]'
            }`}>
              {results.healthScore >= 70 ? scoreLabels.labelGood : results.healthScore >= 45 ? scoreLabels.labelWarn : scoreLabels.labelBad}
            </div>
          </div>
        </div>

        <KPIGrid kpis={overviewKPIs} />
      </div>

      {/* Cost Diagnosis */}
      <CollapsibleSection title={t.wizard.stepDashboard.sectionCostDiagnosis}>
        <CostDiagnosis items={results.costDiagnosis} />
      </CollapsibleSection>

      {/* Channel Profitability */}
      <CollapsibleSection title={t.wizard.stepDashboard.sectionChannelProfit}>
        <ChannelProfitability channels={results.channelPnL} />
      </CollapsibleSection>

      {/* Menu Matrix */}
      <CollapsibleSection title={t.wizard.stepDashboard.sectionMenuMatrix}>
        <MenuMatrix items={results.menuAnalysis} />
      </CollapsibleSection>

      {/* Benchmark Comparison */}
      <CollapsibleSection title={t.wizard.stepDashboard.sectionBenchmark}>
        <BenchmarkPanel comparisons={results.benchmarks} />
      </CollapsibleSection>

      {/* Quick Wins */}
      <CollapsibleSection title={t.wizard.stepDashboard.sectionQuickWins}>
        <QuickWinsPanel wins={results.quickWins} />
      </CollapsibleSection>

      {/* Impact Projection */}
      <CollapsibleSection title={t.wizard.stepDashboard.sectionImpact} defaultOpen={false}>
        <ImpactProjection results={results} />
      </CollapsibleSection>

      {/* Sensitivity Analysis */}
      <CollapsibleSection title={t.wizard.stepDashboard.sectionSensitivity} defaultOpen={false}>
        <ExistingSensitivity results={results} rent={store.rent} cogsPct={store.cogsPct} />
      </CollapsibleSection>

      {/* AI Chat */}
      <CollapsibleSection title={t.wizard.stepDashboard.sectionAIChat}>
        <InlineChat />
      </CollapsibleSection>

      {/* Save Prompt */}
      <SavePrompt />

      {/* Share */}
      <ShareSection resultData={{
        modelName: store.selectedModel || 'F&B',
        score: results.healthScore,
        netProfit: results.netProfit,
        netMargin: results.netMargin,
        paybackMonth: null,
        totalInvestment: store.getTotalInvestment(),
        bepCustomersDay: 0,
        locale,
      }} />
    </div>
  );
}
