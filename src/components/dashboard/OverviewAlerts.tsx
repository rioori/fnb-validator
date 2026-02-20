import type { CalcResults } from '@/types';
import { formatVND } from '@/lib/format';
import { useTranslation, tpl } from '@/i18n/LocaleProvider';

interface OverviewAlertsProps {
  results: CalcResults;
}

export default function OverviewAlerts({ results: r }: OverviewAlertsProps) {
  const { t } = useTranslation();
  const sm = r.stableMonth;
  const alerts: { type: 'red' | 'yellow' | 'green'; text: string }[] = [];

  if (r.rentRatio > 25) alerts.push({ type: 'red', text: tpl(t.dashboard.alerts.rentTooHigh, { pct: r.rentRatio.toFixed(0) }) });
  else if (r.rentRatio > 20) alerts.push({ type: 'yellow', text: tpl(t.dashboard.alerts.rentSlightlyHigh, { pct: r.rentRatio.toFixed(0) }) });

  if (r.cogsPct > 40) alerts.push({ type: 'red', text: tpl(t.dashboard.alerts.cogsTooHigh, { pct: r.cogsPct.toFixed(0) }) });
  if (r.primeCost > 70) alerts.push({ type: 'red', text: tpl(t.dashboard.alerts.primeCostDanger, { pct: r.primeCost.toFixed(0) }) });
  if (r.workingCapMonths < 2) alerts.push({ type: 'red', text: tpl(t.dashboard.alerts.workingCapLow, { months: r.workingCapMonths.toFixed(1) }) });
  if (r.deliveryPct > 50) alerts.push({ type: 'yellow', text: tpl(t.dashboard.alerts.deliveryHigh, { pct: r.deliveryPct.toFixed(0) }) });
  if (sm.netProfit <= 0) alerts.push({ type: 'red', text: tpl(t.dashboard.alerts.projectedLoss, { amount: formatVND(Math.abs(sm.netProfit)) }) });
  if (alerts.length === 0 && sm.netProfit > 0) alerts.push({ type: 'green', text: t.dashboard.alerts.viable });

  const styles = {
    red: 'bg-[#FEE2E2] text-text border-2 border-danger',
    yellow: 'bg-primary-light text-text border-2 border-text',
    green: 'bg-mint-light text-text border-2 border-text',
  };

  return (
    <div>
      {alerts.map((a, i) => (
        <div key={i} className={`px-4 py-2.5 rounded-2xl text-[13px] mb-2 leading-relaxed font-medium ${styles[a.type]}`}>
          {a.text}
        </div>
      ))}
    </div>
  );
}
