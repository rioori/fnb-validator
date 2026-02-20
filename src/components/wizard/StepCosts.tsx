'use client';

import { useWizardStore } from '@/hooks/useWizardStore';
import { MODELS } from '@/lib/constants';
import { formatFullVND } from '@/lib/format';
import { estMonthRev } from '@/lib/calculations';
import SectionCard from '@/components/ui/SectionCard';
import DynItemList from '@/components/ui/DynItemList';
import VNDInput from '@/components/ui/VNDInput';
import Tooltip from '@/components/ui/Tooltip';
import NavButtons from '@/components/ui/NavButtons';
import SliderField from '@/components/ui/SliderField';

export default function StepCosts() {
  const store = useWizardStore();
  const model = store.selectedModel ? MODELS[store.selectedModel] : null;

  const staffTotal = store.getStaffTotal();
  const bhxh = store.bhxhOn ? staffTotal * 0.275 : 0;
  const fixedOtherTotal = store.getDynTotal(store.fixedOther);
  const varOtherTotal = store.getDynTotal(store.varOther);

  const avgTicket = store.getAvgTicket();
  const stableRev = estMonthRev(avgTicket, store.getCustWeekday(), store.getCustWeekend(), store.daysPerWeek, 1);

  // Category subtotals (match calculations.ts: COGS on net revenue)
  const delEst = stableRev * (store.chDelivery / 100) * (store.deliveryCommPct / 100);
  const netRev = stableRev - delEst;
  const cogsEst = netRev * store.cogsPct / 100;
  const wasteEst = cogsEst * store.wastePct / 100;
  const fixedTotal = store.rent + staffTotal + bhxh + fixedOtherTotal;
  const varTotal = cogsEst + wasteEst + delEst + varOtherTotal;
  const monthlyTotal = fixedTotal + varTotal;
  const pct = (v: number) => stableRev > 0 ? (v / stableRev * 100).toFixed(1) : '0';
  const costRatio = stableRev > 0 ? monthlyTotal / stableRev * 100 : 0;

  const handleShowResults = () => {
    store.setStep(6);
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-1 text-text font-[family-name:var(--font-heading)]">
        Chi phí vận hành hàng tháng
      </h2>
      <p className="text-text-muted text-[13px] mb-3">
        Mỗi tháng cần trả bao nhiêu? Bạn có thể thêm/sửa mục tùy ý.
      </p>

      {/* Fixed Costs */}
      <SectionCard title={<>Chi phí cố định <Tooltip text="Phải trả đều đặn dù bán được hay không: thuê, lương, internet..." /></>}>
        <div className="mb-4">
          <label className="block font-medium text-[13px] mb-1.5 text-text">Tiền thuê (đã nhập ở bước 1)</label>
          <VNDInput value={store.rent} onChange={() => {}} readOnly />
        </div>

        {/* Staff Table */}
        <div className="mb-4">
          <label className="block font-medium text-[13px] mb-1.5 text-text">Nhân sự</label>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="text-left px-1.5 py-2 border-b border-border text-[11px] text-text-muted font-medium uppercase tracking-wider font-[family-name:var(--font-heading)]">Vị trí</th>
                  <th className="text-left px-1.5 py-2 border-b border-border text-[11px] text-text-muted font-medium uppercase tracking-wider font-[family-name:var(--font-heading)]">Số người</th>
                  <th className="text-left px-1.5 py-2 border-b border-border text-[11px] text-text-muted font-medium uppercase tracking-wider font-[family-name:var(--font-heading)]">Lương/người</th>
                  <th className="text-left px-1.5 py-2 border-b border-border text-[11px] text-text-muted font-medium uppercase tracking-wider font-[family-name:var(--font-heading)]">Tổng</th>
                  <th className="px-1.5 py-2 border-b border-border" />
                </tr>
              </thead>
              <tbody>
                {store.staff.map((row, i) => (
                  <tr key={i}>
                    <td className="px-1.5 py-1.5 border-b border-border-light">
                      <input type="text" value={row.pos} onChange={(e) => store.updateStaffRow(i, 'pos', e.target.value)} className="w-full clay-input !px-2 !py-2 text-sm font-[family-name:var(--font-body)]" />
                    </td>
                    <td className="px-1.5 py-1.5 border-b border-border-light">
                      <input type="number" value={row.count} min={0} max={50} onChange={(e) => store.updateStaffRow(i, 'count', parseInt(e.target.value) || 0)} className="w-[60px] clay-input !px-2 !py-2 text-sm font-[family-name:var(--font-body)]" />
                    </td>
                    <td className="px-1.5 py-1.5 border-b border-border-light">
                      <div className="w-[120px]">
                        <VNDInput value={row.salary} onChange={(v) => store.updateStaffRow(i, 'salary', v)} />
                      </div>
                    </td>
                    <td className="px-1.5 py-1.5 border-b border-border-light font-semibold whitespace-nowrap text-sm">
                      {formatFullVND(row.count * row.salary)}
                    </td>
                    <td className="px-1.5 py-1.5 border-b border-border-light">
                      <button onClick={() => store.removeStaffRow(i)} className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full border-2 border-border-light text-text-light hover:border-danger hover:text-danger hover:bg-danger/10 transition-colors cursor-pointer font-bold text-sm">✕</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button onClick={() => store.addStaffRow()} className="mt-2 clay-btn clay-btn-secondary text-xs py-2 px-4 !border-dashed">
            + Thêm vị trí
          </button>
        </div>

        {/* BHXH */}
        <div className="mb-4">
          <label className="block font-medium text-[13px] mb-1.5 text-text">
            <input
              type="checkbox"
              checked={store.bhxhOn}
              onChange={(e) => store.setBhxhOn(e.target.checked)}
              className="w-4 h-4 mr-1.5 align-middle accent-accent"
            />
            Có đóng BHXH (27.5%)
            <Tooltip text="Nếu bạn là hộ kinh doanh cá thể hoặc chưa đăng ký BHXH cho nhân viên, có thể bỏ tick này." />
          </label>
          <VNDInput value={bhxh} onChange={() => {}} readOnly />
        </div>

        <h4 className="text-sm font-semibold font-[family-name:var(--font-heading)] my-3">Chi phí cố định khác</h4>
        <DynItemList
          items={store.fixedOther}
          onAdd={() => store.addFixedOtherItem()}
          onRemove={store.removeFixedOtherItem}
          onUpdate={store.updateFixedOtherItem}
        />

        {/* Fixed subtotal */}
        <div className="clay-sm bg-secondary-light px-4 py-3 mt-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-text-muted">Thuê mặt bằng</span>
            <span className="font-medium">{formatFullVND(store.rent)} <span className="text-text-muted text-xs">({pct(store.rent)}%)</span></span>
          </div>
          <div className="flex items-center justify-between text-sm mt-1">
            <span className="text-text-muted">Lương nhân sự</span>
            <span className="font-medium">{formatFullVND(staffTotal)} <span className="text-text-muted text-xs">({pct(staffTotal)}%)</span></span>
          </div>
          {bhxh > 0 && (
            <div className="flex items-center justify-between text-sm mt-1">
              <span className="text-text-muted">BHXH (27.5%)</span>
              <span className="font-medium">{formatFullVND(bhxh)} <span className="text-text-muted text-xs">({pct(bhxh)}%)</span></span>
            </div>
          )}
          {fixedOtherTotal > 0 && (
            <div className="flex items-center justify-between text-sm mt-1">
              <span className="text-text-muted">Cố định khác</span>
              <span className="font-medium">{formatFullVND(fixedOtherTotal)} <span className="text-text-muted text-xs">({pct(fixedOtherTotal)}%)</span></span>
            </div>
          )}
          <div className="border-t border-border mt-2 pt-2 flex items-center justify-between">
            <span className="font-semibold text-sm font-[family-name:var(--font-heading)]">Tổng chi phí cố định</span>
            <span className="font-bold text-base font-[family-name:var(--font-heading)]">{formatFullVND(fixedTotal)} <span className="text-text-muted text-xs font-normal">({pct(fixedTotal)}%)</span></span>
          </div>
        </div>
      </SectionCard>

      {/* Variable Costs */}
      <SectionCard title={<>Chi phí biến đổi <Tooltip text="Tăng/giảm theo doanh thu: nguyên liệu, bao bì, phí app..." /></>}>
        <div className="grid grid-cols-2 gap-3.5 max-md:grid-cols-1">
          <SliderField
            label="Nguyên vật liệu (% doanh thu)"
            value={store.cogsPct}
            min={10}
            max={50}
            onChange={store.setCogsPct}
            hint={model ? `${model.name}: ${model.benchmarks.food_cost[0]}%-${model.benchmarks.food_cost[1]}%` : undefined}
          />
          <SliderField
            label="Hao hụt / đổ bỏ (% NVL)"
            value={store.wastePct}
            min={0}
            max={15}
            onChange={store.setWastePct}
          />
        </div>
        <SliderField
          label="Phí app giao hàng (% đơn delivery)"
          value={store.deliveryCommPct}
          min={0}
          max={35}
          onChange={store.setDeliveryCommPct}
          hint="GrabFood 20-30%, ShopeeFood 15-25%"
        />
        <h4 className="text-sm font-semibold font-[family-name:var(--font-heading)] my-3">Chi phí biến đổi khác (hàng tháng)</h4>
        <DynItemList
          items={store.varOther}
          onAdd={() => store.addVarOtherItem()}
          onRemove={store.removeVarOtherItem}
          onUpdate={store.updateVarOtherItem}
        />

        {/* Variable subtotal */}
        <div className="clay-sm bg-secondary-light px-4 py-3 mt-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-text-muted">Nguyên vật liệu ({store.cogsPct}%)</span>
            <span className="font-medium">{formatFullVND(cogsEst)} <span className="text-text-muted text-xs">({pct(cogsEst)}%)</span></span>
          </div>
          {wasteEst > 0 && (
            <div className="flex items-center justify-between text-sm mt-1">
              <span className="text-text-muted">Hao hụt ({store.wastePct}% NVL)</span>
              <span className="font-medium">{formatFullVND(wasteEst)} <span className="text-text-muted text-xs">({pct(wasteEst)}%)</span></span>
            </div>
          )}
          {delEst > 0 && (
            <div className="flex items-center justify-between text-sm mt-1">
              <span className="text-text-muted">Phí giao hàng ({store.deliveryCommPct}%)</span>
              <span className="font-medium">{formatFullVND(delEst)} <span className="text-text-muted text-xs">({pct(delEst)}%)</span></span>
            </div>
          )}
          {varOtherTotal > 0 && (
            <div className="flex items-center justify-between text-sm mt-1">
              <span className="text-text-muted">Biến đổi khác</span>
              <span className="font-medium">{formatFullVND(varOtherTotal)} <span className="text-text-muted text-xs">({pct(varOtherTotal)}%)</span></span>
            </div>
          )}
          <div className="border-t border-border mt-2 pt-2 flex items-center justify-between">
            <span className="font-semibold text-sm font-[family-name:var(--font-heading)]">Tổng chi phí biến đổi</span>
            <span className="font-bold text-base font-[family-name:var(--font-heading)]">{formatFullVND(varTotal)} <span className="text-text-muted text-xs font-normal">({pct(varTotal)}%)</span></span>
          </div>
        </div>
      </SectionCard>

      {/* Monthly Total */}
      <div className="rounded-2xl bg-cta py-4 px-5 text-center text-white mt-3 border-2 border-text">
        <div className="text-[11px] opacity-60 font-medium uppercase tracking-widest mb-0.5">
          TỔNG CHI PHÍ ƯỚC TÍNH / THÁNG (khi ổn định)
        </div>
        <div className="text-2xl font-bold font-[family-name:var(--font-heading)] tracking-tight max-md:text-xl">
          {formatFullVND(monthlyTotal)}
        </div>
        {stableRev > 0 && (
          <div className="text-[13px] opacity-85 mt-1">
            Chi phí chiếm {costRatio.toFixed(0)}% doanh thu
            {costRatio > 85 ? ' — Quá cao!' : costRatio > 70 ? ' — Hơi cao' : ' — Hợp lý'}
          </div>
        )}
      </div>

      <NavButtons onBack={store.prevStep} onNext={handleShowResults} nextLabel="Xem kết quả" nextVariant="accent" />
    </div>
  );
}
