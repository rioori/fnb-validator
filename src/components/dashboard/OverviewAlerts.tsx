import type { CalcResults } from '@/types';
import { formatVND } from '@/lib/format';

interface OverviewAlertsProps {
  results: CalcResults;
}

export default function OverviewAlerts({ results: r }: OverviewAlertsProps) {
  const sm = r.stableMonth;
  const alerts: { type: 'red' | 'yellow' | 'green'; text: string }[] = [];

  if (r.rentRatio > 25) alerts.push({ type: 'red', text: `Tiền thuê ${r.rentRatio.toFixed(0)}% DT — quá cao! Nên < 20%.` });
  else if (r.rentRatio > 20) alerts.push({ type: 'yellow', text: `Tiền thuê ${r.rentRatio.toFixed(0)}% — hơi cao.` });

  if (r.cogsPct > 40) alerts.push({ type: 'red', text: `NVL ${r.cogsPct.toFixed(0)}% — quá cao!` });
  if (r.primeCost > 70) alerts.push({ type: 'red', text: `NVL + Nhân sự = ${r.primeCost.toFixed(0)}% — nguy hiểm!` });
  if (r.workingCapMonths < 2) alerts.push({ type: 'red', text: `Vốn dự phòng chỉ ${r.workingCapMonths.toFixed(1)} tháng — cần >= 3!` });
  if (r.deliveryPct > 50) alerts.push({ type: 'yellow', text: `Phụ thuộc delivery ${r.deliveryPct.toFixed(0)}% — phí cao.` });
  if (sm.netProfit <= 0) alerts.push({ type: 'red', text: `Dự kiến LỖ ${formatVND(Math.abs(sm.netProfit))}/tháng khi ổn định!` });
  if (alerts.length === 0 && sm.netProfit > 0) alerts.push({ type: 'green', text: 'Mô hình khả thi! Xem chi tiết bên dưới.' });

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
