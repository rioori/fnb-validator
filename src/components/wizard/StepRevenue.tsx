'use client';

import { useWizardStore } from '@/hooks/useWizardStore';
import { MODELS } from '@/lib/constants';
import { formatVND, formatFullVND } from '@/lib/format';
import { estMonthRev } from '@/lib/calculations';
import SectionCard from '@/components/ui/SectionCard';
import VNDInput from '@/components/ui/VNDInput';
import Tooltip from '@/components/ui/Tooltip';
import NavButtons from '@/components/ui/NavButtons';
import SliderField from '@/components/ui/SliderField';

export default function StepRevenue() {
  const store = useWizardStore();
  const model = store.selectedModel ? MODELS[store.selectedModel] : null;
  const benchmarks = model?.benchmarks;

  const avgTicket = store.getAvgTicket();
  const custWD = store.getCustWeekday();
  const custWE = store.getCustWeekend();

  const revMonth1 = estMonthRev(avgTicket, custWD, custWE, store.daysPerWeek, store.rampFactors[0] ?? 0.45);
  const revStable = estMonthRev(avgTicket, custWD, custWE, store.daysPerWeek, 1);

  // Daily estimate (weighted average: weekday vs weekend based on daysPerWeek)
  const wdDays = Math.round(store.daysPerWeek * 5 / 7);
  const weDays = store.daysPerWeek - wdDays;
  const revDayAvg = store.daysPerWeek > 0
    ? (custWD * avgTicket * wdDays + custWE * avgTicket * weDays) / store.daysPerWeek
    : 0;

  return (
    <div>
      <h2 className="text-lg font-bold mb-1 text-text font-[family-name:var(--font-heading)]">
        Doanh thu dự kiến
      </h2>
      <p className="text-text-muted text-[13px] mb-3">
        Ước tính lượng khách và mức chi tiêu trung bình.
      </p>

      {/* Ticket Items */}
      <SectionCard title={<>Giá bill trung bình <Tooltip text="Tổng tiền TB 1 khách chi 1 lần. Thêm các mục con để tính chính xác hơn." /></>}>
        <p className="text-xs text-text-muted mb-2.5">Thêm các mục khách thường gọi, hệ thống tự tính giá bill TB.</p>
        <div className="mb-2">
          {store.ticketItems.map((item) => (
            <div key={item.id} className="flex gap-2 items-center mb-1.5 animate-fade-in-up">
              <input
                type="text"
                value={item.name}
                onChange={(e) => store.updateTicketItem(item.id, 'name', e.target.value)}
                placeholder="Tên món (VD: Cà phê sữa)"
                className="flex-[2] clay-input font-[family-name:var(--font-body)] text-text"
              />
              <div className="flex-1">
                <VNDInput value={item.price} onChange={(v) => store.updateTicketItem(item.id, 'price', v)} placeholder="Giá" />
              </div>
              <button onClick={() => store.removeTicketItem(item.id)} className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full border-2 border-border-light text-text-light hover:border-danger hover:text-danger hover:bg-danger/10 transition-colors cursor-pointer font-bold text-sm">✕</button>
            </div>
          ))}
        </div>
        <button onClick={() => store.addTicketItem()} className="clay-btn clay-btn-secondary text-xs py-2 px-4 !border-dashed">
          + Thêm mục
        </button>
        <div className="clay-sm bg-mint-light px-4 py-3 flex items-center justify-between font-medium mt-3">
          <span className="text-sm font-semibold font-[family-name:var(--font-heading)]">Giá bill trung bình</span>
          <span className="text-lg font-bold text-text font-[family-name:var(--font-heading)]">{formatFullVND(avgTicket)}</span>
        </div>
        {benchmarks && (
          <div className="text-xs text-text-muted mt-1">{model?.name}: {formatVND(benchmarks.ticket[0])} - {formatVND(benchmarks.ticket[1])}</div>
        )}
      </SectionCard>

      {/* Customer Matrix */}
      <SectionCard title="Lượng khách / ngày">
        <p className="text-xs text-text-muted mb-2.5">Nhập số khách dự kiến theo từng khung giờ. Bỏ trống = không hoạt động giờ đó.</p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="px-1.5 py-2 text-left text-[11px] font-medium text-text-muted uppercase tracking-wider font-[family-name:var(--font-heading)] border-b border-border" />
                <th className="px-1.5 py-2 text-center text-[11px] font-medium text-text-muted uppercase tracking-wider font-[family-name:var(--font-heading)] border-b border-border">Sáng<br /><small className="font-normal normal-case">(6-11h)</small></th>
                <th className="px-1.5 py-2 text-center text-[11px] font-medium text-text-muted uppercase tracking-wider font-[family-name:var(--font-heading)] border-b border-border">Trưa<br /><small className="font-normal normal-case">(11-14h)</small></th>
                <th className="px-1.5 py-2 text-center text-[11px] font-medium text-text-muted uppercase tracking-wider font-[family-name:var(--font-heading)] border-b border-border">Chiều<br /><small className="font-normal normal-case">(14-17h)</small></th>
                <th className="px-1.5 py-2 text-center text-[11px] font-medium text-text-muted uppercase tracking-wider font-[family-name:var(--font-heading)] border-b border-border">Tối<br /><small className="font-normal normal-case">(17-22h)</small></th>
                <th className="px-1.5 py-2 text-center text-[11px] font-medium text-text-muted font-[family-name:var(--font-heading)] border-b border-border">Tổng/ngày</th>
              </tr>
            </thead>
            <tbody>
              {(['wd', 'we'] as const).map((period) => (
                <tr key={period}>
                  <td className="text-left font-medium text-[13px] text-text-muted px-1.5 py-1.5 border-b border-border-light">
                    {period === 'wd' ? 'T2-T6' : 'T7-CN'}
                  </td>
                  {[0, 1, 2, 3].map((i) => (
                    <td key={i} className="text-center px-1.5 py-1.5 border-b border-border-light">
                      <input
                        type="number"
                        value={store.custMatrix[period][i]}
                        min={0}
                        onChange={(e) => {
                          const mat = { ...store.custMatrix };
                          const arr = [...mat[period]] as [number, number, number, number];
                          arr[i] = parseInt(e.target.value) || 0;
                          mat[period] = arr;
                          store.setCustMatrix(mat);
                        }}
                        className="w-[65px] text-center clay-input !px-2 !py-2 text-sm font-[family-name:var(--font-body)]"
                      />
                    </td>
                  ))}
                  <td className="text-center font-bold text-text font-[family-name:var(--font-heading)] border-b border-border-light">
                    {period === 'wd' ? custWD : custWE}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {benchmarks && (
          <div className="text-xs text-text-muted mt-1.5">
            {model?.name}: ngày thường {benchmarks.cust_wd[0]}-{benchmarks.cust_wd[1]} khách, cuối tuần {benchmarks.cust_we[0]}-{benchmarks.cust_we[1]} khách
          </div>
        )}
      </SectionCard>

      {/* Ramp Sliders */}
      <SectionCard title={<>Giai đoạn khởi động <Tooltip text="Tháng đầu mới mở chưa ai biết, khách chỉ bằng 40-60% mục tiêu. Dần dần mới đạt tối đa." /></>}>
        {store.rampFactors.map((val, i) => (
          <SliderField
            key={i}
            label={`Tháng ${i + 1}`}
            value={Math.round(val * 100)}
            min={10}
            max={100}
            onChange={(v) => store.setRampFactor(i, v / 100)}
          />
        ))}
      </SectionCard>

      {/* Revenue Preview */}
      <SectionCard title="Doanh thu ước tính">
        <div className="grid grid-cols-3 gap-2.5 max-md:grid-cols-1">
          <div className="clay-sm p-4 text-center">
            <div className="text-xs text-text-muted">Trung bình / ngày</div>
            <div className="text-xl font-bold font-[family-name:var(--font-heading)] tracking-tight mt-0.5">{formatVND(revDayAvg)}</div>
          </div>
          <div className="clay-sm p-4 text-center">
            <div className="text-xs text-text-muted">Tháng đầu tiên</div>
            <div className="text-xl font-bold font-[family-name:var(--font-heading)] tracking-tight mt-0.5">{formatVND(revMonth1)}</div>
          </div>
          <div className="clay-sm p-4 text-center">
            <div className="text-xs text-text-muted">Khi ổn định (tháng 6+)</div>
            <div className="text-xl font-bold font-[family-name:var(--font-heading)] tracking-tight mt-0.5">{formatVND(revStable)}</div>
          </div>
        </div>
      </SectionCard>

      <NavButtons onBack={store.prevStep} onNext={store.nextStep} />
    </div>
  );
}
