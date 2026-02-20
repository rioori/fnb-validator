'use client';

import { useWizardStore } from '@/hooks/useWizardStore';
import SectionCard from '@/components/ui/SectionCard';
import Tooltip from '@/components/ui/Tooltip';
import NavButtons from '@/components/ui/NavButtons';

export default function StepLocation() {
  const store = useWizardStore();

  const seatRatio = store.sqm > 0 && store.seats > 0 ? store.sqm / store.seats : 0;
  const channelSum = Number(store.chDinein) + Number(store.chTakeaway) + Number(store.chDelivery);

  return (
    <div>
      <h2 className="text-lg font-bold mb-1 text-text font-[family-name:var(--font-heading)]">
        Vị trí & Quy mô
      </h2>
      <p className="text-text-muted text-[13px] mb-3">
        Địa điểm quyết định 80% thành bại. Hãy chọn kỹ!
      </p>

      <SectionCard title="Địa điểm">
        <div className="grid grid-cols-2 gap-3.5 max-md:grid-cols-1">
          <div>
            <label className="block font-medium text-[13px] mb-1.5 text-text">Thành phố</label>
            <select value={store.city} onChange={(e) => store.setCity(e.target.value)} className="w-full clay-input font-[family-name:var(--font-body)] text-text">
              <option value="hcm">TP. Hồ Chí Minh</option>
              <option value="hanoi">Hà Nội</option>
              <option value="danang">Đà Nẵng</option>
              <option value="other">Tỉnh/thành khác</option>
            </select>
          </div>
          <div>
            <label className="block font-medium text-[13px] mb-1.5 text-text">Khu vực</label>
            <select value={store.area} onChange={(e) => store.setArea(e.target.value)} className="w-full clay-input font-[family-name:var(--font-body)] text-text">
              <option value="center">Quận trung tâm</option>
              <option value="suburb">Quận ngoại ô</option>
              <option value="residential">Khu dân cư</option>
              <option value="mall">Trung tâm thương mại</option>
            </select>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Quy mô">
        <div className="grid grid-cols-3 gap-3.5 max-md:grid-cols-1">
          <div>
            <label className="block font-medium text-[13px] mb-1.5 text-text">
              Diện tích kê bàn ghế (m²)
              <Tooltip text="Chỉ tính phần dành cho khách ngồi, KHÔNG tính bếp/kho. Bếp thường chiếm thêm 30-40% diện tích." />
            </label>
            <input type="text" inputMode="numeric" value={store.sqm || ''} onChange={(e) => store.setSqm(parseInt(e.target.value.replace(/\D/g, '')) || 0)} placeholder="0" className="w-full clay-input font-[family-name:var(--font-body)] text-text" />
          </div>
          <div>
            <label className="block font-medium text-[13px] mb-1.5 text-text">Số chỗ ngồi</label>
            <input type="text" inputMode="numeric" value={store.seats || ''} onChange={(e) => store.setSeats(parseInt(e.target.value.replace(/\D/g, '')) || 0)} placeholder="0" className="w-full clay-input font-[family-name:var(--font-body)] text-text" />
          </div>
          <div>
            <label className="block font-medium text-[13px] mb-1.5 text-text">Ngày mở cửa/tuần</label>
            <select value={store.daysPerWeek} onChange={(e) => store.setDaysPerWeek(parseInt(e.target.value))} className="w-full clay-input font-[family-name:var(--font-body)] text-text">
              <option value="7">7 ngày</option>
              <option value="6">6 ngày</option>
              <option value="5">5 ngày</option>
            </select>
          </div>
        </div>
        {seatRatio > 0 && seatRatio < 1 && (
          <div className="mt-2 px-4 py-2.5 rounded-2xl text-[13px] bg-danger/10 text-danger border-2 border-danger/30 font-medium">
            ⚠ Quá chật! Cần tối thiểu 1m²/chỗ ngồi. Hiện: {seatRatio.toFixed(1)}m²/chỗ.
          </div>
        )}
        {seatRatio >= 1 && seatRatio < 1.3 && (
          <div className="mt-2 px-4 py-2.5 rounded-2xl text-[13px] bg-primary-light text-text border-2 border-border font-medium">
            ⚠ Hơi chật ({seatRatio.toFixed(1)}m²/chỗ). Lý tưởng: 1.3-2m²/chỗ.
          </div>
        )}
        {seatRatio >= 1.3 && seatRatio <= 3 && (
          <div className="mt-2 px-4 py-2.5 rounded-2xl text-[13px] bg-mint-light text-text border-2 border-border font-medium">
            ✓ Hợp lý ({seatRatio.toFixed(1)}m²/chỗ ngồi)
          </div>
        )}
        {seatRatio > 3 && (
          <div className="mt-2 px-4 py-2.5 rounded-2xl text-[13px] bg-primary-light text-text border-2 border-border font-medium">
            ⚠ Quá rộng ({seatRatio.toFixed(1)}m²/chỗ) — lãng phí diện tích, chi phí thuê cao. Nên &lt;3m²/chỗ.
          </div>
        )}
      </SectionCard>

      <SectionCard title={<>Kênh bán hàng <Tooltip text="Tỷ lệ doanh thu dự kiến từ mỗi kênh. Giao hàng app sẽ bị trừ phí hoa hồng 20-30%." /></>}>
        <p className="text-xs text-text-muted mb-2">Nhập phần trăm dự kiến cho mỗi kênh (tổng nên = 100%)</p>
        <div className="grid grid-cols-3 gap-3 max-md:grid-cols-1">
          {[
            { label: 'Tại quán', value: store.chDinein, set: (v: number) => store.setChannels(v, store.chTakeaway, store.chDelivery) },
            { label: 'Mang về', value: store.chTakeaway, set: (v: number) => store.setChannels(store.chDinein, v, store.chDelivery) },
            { label: 'Giao hàng app', value: store.chDelivery, set: (v: number) => store.setChannels(store.chDinein, store.chTakeaway, v) },
          ].map(({ label, value, set }) => (
            <div key={label} className="text-center">
              <label className="text-[13px] font-medium block mb-1 text-text-muted">{label}</label>
              <div className="flex items-center gap-1 justify-center">
                <input type="text" inputMode="numeric" value={value || ''} onChange={(e) => set(parseInt(e.target.value.replace(/\D/g, '')) || 0)} placeholder="0" className="w-full px-3.5 py-2.5 border-2 border-border rounded-[var(--radius-sm)] text-[15px] bg-surface text-center font-[family-name:var(--font-body)] text-text transition-colors focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/15" />
                <span className="text-text-muted">%</span>
              </div>
            </div>
          ))}
        </div>
        {channelSum !== 100 && (
          <div className="mt-2 px-4 py-2.5 rounded-2xl text-[13px] bg-primary-light text-text border-2 border-text font-medium">
            Tổng đang = {channelSum}% (cần = 100%)
          </div>
        )}
      </SectionCard>

      <NavButtons onBack={store.prevStep} onNext={store.nextStep} />
    </div>
  );
}
