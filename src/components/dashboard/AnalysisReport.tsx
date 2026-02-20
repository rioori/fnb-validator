'use client';

import type { CalcResults, ModelKey } from '@/types';
import { formatVND } from '@/lib/format';
import { useModels } from '@/hooks/useModels';
import { useTranslation, tpl } from '@/i18n/LocaleProvider';

interface AnalysisReportProps {
  results: CalcResults;
  model: ModelKey | null;
  rent: number;
  totalInvestment: number;
}

/** Human-readable analysis report generated from CalcResults */
export default function AnalysisReport({ results: r, model, rent, totalInvestment }: AnalysisReportProps) {
  const { t } = useTranslation();
  const models = useModels();
  const sm = r.stableMonth;
  const modelName = model ? models[model].name : t.dashboard.analysis.defaultModelName;
  const profitable = sm.netProfit > 0;
  const month1 = r.months[0];

  // ─── Score interpretation ───
  const scoreLabel = r.score >= 80 ? t.dashboard.analysis.scoreLabelExcellent : r.score >= 60 ? t.dashboard.analysis.scoreLabelModerate : r.score >= 40 ? t.dashboard.analysis.scoreLabelRisky : t.dashboard.analysis.scoreLabelVeryRisky;
  const scoreColor = r.score >= 80 ? 'text-cta' : r.score >= 60 ? 'text-warning' : 'text-danger';

  // ─── Dynamic paragraphs ───
  const paras: { icon: string; title: string; body: string; type: 'good' | 'warn' | 'bad' | 'info' }[] = [];

  // 1. Overall verdict
  paras.push({
    icon: r.score >= 60 ? '✅' : '⚠️',
    title: t.dashboard.analysis.overallTitle,
    body: tpl(t.dashboard.analysis.overallVerdict, { modelName, investment: formatVND(totalInvestment), score: r.score, label: scoreLabel }) + ' ' + (
      profitable
        ? tpl(t.dashboard.analysis.overallProfitable, { profit: formatVND(sm.netProfit), margin: sm.netMargin.toFixed(1) })
        : tpl(t.dashboard.analysis.overallLoss, { loss: formatVND(Math.abs(sm.netProfit)) })
    ),
    type: profitable ? (r.score >= 60 ? 'good' : 'warn') : 'bad',
  });

  // 2. Revenue analysis
  const revGrowth = month1.netRev > 0 ? ((sm.netRev - month1.netRev) / month1.netRev * 100).toFixed(0) : '0';
  paras.push({
    icon: '📈',
    title: t.dashboard.analysis.revenueTitle,
    body: tpl(t.dashboard.analysis.revenueBody, { m1Rev: formatVND(month1.netRev), stableRev: formatVND(sm.netRev), growthPct: revGrowth }) + ' ' + (
      r.deliveryPct > 30
        ? tpl(t.dashboard.analysis.deliveryHighNote, { pct: r.deliveryPct.toFixed(0), commission: formatVND(sm.deliveryComm) })
        : r.deliveryPct > 0
        ? tpl(t.dashboard.analysis.deliveryOkNote, { commission: formatVND(sm.deliveryComm) })
        : ''
    ),
    type: 'info',
  });

  // 3. Cost structure
  paras.push({
    icon: '💰',
    title: t.dashboard.analysis.costTitle,
    body: tpl(t.dashboard.analysis.costBody, { fixedMonthly: formatVND(r.fixedMonthly), rent: formatVND(rent), staff: formatVND(sm.staffTotal + sm.bhxh), otherFixed: formatVND(sm.fixedOther), cogsPct: r.cogsPct.toFixed(0), primeCost: r.primeCost.toFixed(0) }) + ' — ' + (
      r.primeCost <= 60 ? t.dashboard.analysis.primeCostGood : r.primeCost <= 70 ? t.dashboard.analysis.primeCostAvg : t.dashboard.analysis.primeCostBad
    ) + '.',
    type: r.primeCost <= 65 ? 'good' : r.primeCost <= 70 ? 'warn' : 'bad',
  });

  // 4. Rent ratio
  paras.push({
    icon: '🏠',
    title: t.dashboard.analysis.rentTitle,
    body: tpl(t.dashboard.analysis.rentIntro, { pct: r.rentRatio.toFixed(1) }) + ' ' + (
      r.rentRatio <= 15 ? t.dashboard.analysis.rentExcellent : r.rentRatio <= 20 ? t.dashboard.analysis.rentOk : r.rentRatio <= 25 ? t.dashboard.analysis.rentHigh : t.dashboard.analysis.rentTooHigh
    ),
    type: r.rentRatio <= 20 ? 'good' : r.rentRatio <= 25 ? 'warn' : 'bad',
  });

  // 5. Break-even
  paras.push({
    icon: '⏱️',
    title: t.dashboard.analysis.breakEvenTitle,
    body: r.paybackMonth
      ? tpl(t.dashboard.analysis.breakEvenWithPayback, { months: r.paybackMonth, bepRevenue: formatVND(r.bepRevenue), bepCust: r.bepCustomersDay < Infinity ? r.bepCustomersDay : '∞' }) + ' ' + (r.paybackMonth <= 12 ? t.dashboard.analysis.breakEvenFast : r.paybackMonth <= 18 ? t.dashboard.analysis.breakEvenMedium : t.dashboard.analysis.breakEvenSlow)
      : tpl(t.dashboard.analysis.breakEvenNever, { bepRevenue: formatVND(r.bepRevenue), bepCust: r.bepCustomersDay < Infinity ? r.bepCustomersDay + ' khách/ngày' : '—' }),
    type: r.paybackMonth && r.paybackMonth <= 12 ? 'good' : r.paybackMonth ? 'warn' : 'bad',
  });

  // 6. Working capital
  paras.push({
    icon: '🛡️',
    title: t.dashboard.analysis.workingCapTitle,
    body: tpl(t.dashboard.analysis.workingCapIntro, { months: r.workingCapMonths.toFixed(1) }) + ' ' + (
      r.workingCapMonths >= 3 ? t.dashboard.analysis.workingCapGood : r.workingCapMonths >= 2 ? t.dashboard.analysis.workingCapWarn : t.dashboard.analysis.workingCapBad
    ),
    type: r.workingCapMonths >= 3 ? 'good' : r.workingCapMonths >= 2 ? 'warn' : 'bad',
  });

  // 7. Profit trajectory
  const profitM1 = r.months[0].netProfit;
  const profitM6 = r.months[5]?.netProfit ?? 0;
  const profitM12 = r.months[11]?.netProfit ?? 0;
  const totalProfit12 = r.months.reduce((s, m) => s + m.netProfit, 0);
  paras.push({
    icon: '📊',
    title: t.dashboard.analysis.profitTrajectoryTitle,
    body: tpl(t.dashboard.analysis.totalProfit12, {
      m1Sign: profitM1 >= 0 ? t.dashboard.analysis.profitLabel : t.dashboard.analysis.lossLabel,
      m1: formatVND(Math.abs(profitM1)),
      m6Sign: profitM6 >= 0 ? t.dashboard.analysis.profitLabel : t.dashboard.analysis.lossLabel,
      m6: formatVND(Math.abs(profitM6)),
      m12Sign: profitM12 >= 0 ? t.dashboard.analysis.profitLabel : t.dashboard.analysis.lossLabel,
      m12: formatVND(Math.abs(profitM12)),
      totalSign: totalProfit12 >= 0 ? '' : t.dashboard.analysis.lossLabel + ' ',
      total: formatVND(Math.abs(totalProfit12)),
    }) + ' ' + (
      totalProfit12 > 0 ? t.dashboard.analysis.profitTrajectoryGood : t.dashboard.analysis.profitTrajectoryBad
    ),
    type: totalProfit12 > 0 ? 'good' : 'bad',
  });

  // 8. Key recommendation
  const topRisk = r.rentRatio > 25 ? t.dashboard.analysis.topRiskRent : r.primeCost > 70 ? t.dashboard.analysis.topRiskPrimeCost : r.workingCapMonths < 2 ? t.dashboard.analysis.topRiskWorkingCap : !profitable ? t.dashboard.analysis.topRiskNoProfit : '';
  if (topRisk) {
    paras.push({
      icon: '💡',
      title: t.dashboard.analysis.recommendationTitle,
      body: tpl(t.dashboard.analysis.riskIntro, { risk: topRisk }) + ' ' + (
        r.rentRatio > 25 ? t.dashboard.analysis.adviceRent : r.primeCost > 70 ? t.dashboard.analysis.advicePrimeCost : r.workingCapMonths < 2 ? t.dashboard.analysis.adviceWorkingCap : t.dashboard.analysis.adviceGeneral
      ),
      type: 'warn',
    });
  }

  const typeStyles = {
    good: 'border-l-cta bg-mint-light/40',
    warn: 'border-l-warning bg-pastel-gold/40',
    bad: 'border-l-danger bg-[#FEE2E2]/40',
    info: 'border-l-accent bg-pastel-blue/40',
  };

  return (
    <div className="space-y-3">
      {/* Header */}
      <div className="flex items-center justify-between mb-1">
        <h4 className="text-[13px] font-semibold font-[family-name:var(--font-heading)] uppercase tracking-wider text-text-muted">
          {t.dashboard.analysis.sectionTitle}
        </h4>
        <span className={`text-[14px] font-bold font-[family-name:var(--font-heading)] ${scoreColor}`}>
          {r.score}/100 — {scoreLabel}
        </span>
      </div>

      {/* Report paragraphs */}
      {paras.map((p, i) => (
        <div key={i} className={`rounded-xl border-l-4 px-4 py-3 ${typeStyles[p.type]}`}>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[16px]">{p.icon}</span>
            <span className="text-[13px] font-bold font-[family-name:var(--font-heading)] text-text">{p.title}</span>
          </div>
          <p className="text-[12.5px] text-text leading-relaxed">
            {p.body}
          </p>
        </div>
      ))}

      {/* Disclaimer */}
      <p className="text-[11px] text-text-muted italic text-center pt-1">
        {t.dashboard.analysis.disclaimer}
      </p>
    </div>
  );
}
