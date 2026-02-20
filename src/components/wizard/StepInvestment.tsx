'use client';

import { useWizardStore } from '@/hooks/useWizardStore';
import SectionCard from '@/components/ui/SectionCard';
import DynItemList from '@/components/ui/DynItemList';
import VNDInput from '@/components/ui/VNDInput';
import Tooltip from '@/components/ui/Tooltip';
import NavButtons from '@/components/ui/NavButtons';
import { formatVND, formatFullVND } from '@/lib/format';

function SubtotalBar({ label, amount, total }: { label: string; amount: number; total: number }) {
  const pct = total > 0 ? (amount / total * 100) : 0;
  if (amount <= 0) return null;
  return (
    <div className="flex items-center justify-between px-4 py-2.5 mt-3 rounded-xl bg-surface3/60 border border-border-light">
      <span className="text-[13px] font-medium text-text-muted">{label}</span>
      <span className="text-sm font-bold font-[family-name:var(--font-heading)]">
        {formatFullVND(amount)}
        <span className="text-text-muted text-xs font-normal ml-1.5">({pct.toFixed(1)}%)</span>
      </span>
    </div>
  );
}

export default function StepInvestment() {
  const store = useWizardStore();
  const deposit = store.getDeposit();
  const totalInv = store.getTotalInvestment();

  const matbangTotal = deposit + store.getDynTotal(store.invMatbang);
  const xaydungTotal = store.getDynTotal(store.invXaydung);
  const thietbiTotal = store.getDynTotal(store.invThietbi);
  const khacTotal = store.getDynTotal(store.invKhac);

  const cats = [
    { name: 'Mặt bằng', val: matbangTotal, color: 'var(--color-text)' },
    { name: 'Xây dựng', val: xaydungTotal, color: 'var(--color-primary)' },
    { name: 'Thiết bị', val: thietbiTotal, color: 'var(--color-secondary)' },
    { name: 'Khác', val: khacTotal, color: 'var(--color-mint)' },
    { name: 'Dự phòng', val: store.workingCap, color: 'var(--color-cta)' },
  ].filter(c => c.val > 0);

  const overBudget = store.budget > 0 && totalInv > store.budget;

  return (
    <div>
      <h2 className="text-lg font-bold mb-1 text-text font-[family-name:var(--font-heading)]">
        Vốn đầu tư ban đầu
      </h2>
      <p className="text-text-muted text-[13px] mb-3">
        Tổng tiền cần bỏ ra trước khi mở cửa. Bạn có thể thêm/sửa/xóa các mục tùy ý.
      </p>

      {/* Mặt bằng */}
      <SectionCard title="Mặt bằng">
        <div className="mb-4">
          <label className="block font-medium text-[13px] mb-1.5 text-text">
            Tiền cọc
            <Tooltip text="Thường từ 1-6 tháng tiền thuê, tùy chủ nhà. Trung tâm thường đòi 3-6 tháng, ngoại ô 1-3 tháng." />
          </label>
          <div className="flex gap-2 items-center">
            <div className="flex-1">
              <VNDInput value={deposit} onChange={store.setDeposit} />
            </div>
            <span className="text-text-muted text-xs shrink-0">=</span>
            <select
              value={store.rent > 0 ? Math.round(deposit / store.rent) : store.depositMonths}
              onChange={(e) => {
                const months = parseInt(e.target.value) || 1;
                store.setDepositMonths(months);
                store.setDeposit(store.rent * months);
              }}
              className="w-[120px] clay-input !px-2 !py-2.5 text-sm font-[family-name:var(--font-body)] text-text shrink-0"
            >
              {[1,2,3,4,5,6].map(m => (
                <option key={m} value={m}>{m} tháng thuê</option>
              ))}
            </select>
          </div>
          <p className="text-[11px] text-text-muted mt-1">Chọn số tháng hoặc nhập trực tiếp số tiền cọc.</p>
        </div>
        <DynItemList
          items={store.invMatbang}
          onAdd={() => store.addInvItem('invMatbang')}
          onRemove={(id) => store.removeInvItem('invMatbang', id)}
          onUpdate={(id, field, value) => store.updateInvItem('invMatbang', id, field, value)}
        />
        <SubtotalBar label="Tổng mặt bằng" amount={matbangTotal} total={totalInv} />
      </SectionCard>

      {/* Xây dựng */}
      <SectionCard title="Xây dựng & Trang trí">
        <DynItemList
          items={store.invXaydung}
          onAdd={() => store.addInvItem('invXaydung')}
          onRemove={(id) => store.removeInvItem('invXaydung', id)}
          onUpdate={(id, field, value) => store.updateInvItem('invXaydung', id, field, value)}
        />
        <SubtotalBar label="Tổng xây dựng" amount={xaydungTotal} total={totalInv} />
      </SectionCard>

      {/* Thiết bị */}
      <SectionCard title="Thiết bị">
        <DynItemList
          items={store.invThietbi}
          onAdd={() => store.addInvItem('invThietbi')}
          onRemove={(id) => store.removeInvItem('invThietbi', id)}
          onUpdate={(id, field, value) => store.updateInvItem('invThietbi', id, field, value)}
        />
        <SubtotalBar label="Tổng thiết bị" amount={thietbiTotal} total={totalInv} />
      </SectionCard>

      {/* Khác */}
      <SectionCard title="Khác">
        <DynItemList
          items={store.invKhac}
          onAdd={() => store.addInvItem('invKhac')}
          onRemove={(id) => store.removeInvItem('invKhac', id)}
          onUpdate={(id, field, value) => store.updateInvItem('invKhac', id, field, value)}
        />
        <SubtotalBar label="Tổng khác" amount={khacTotal} total={totalInv} />
      </SectionCard>

      {/* Vốn lưu động */}
      <SectionCard title={<>Vốn lưu động dự phòng <Tooltip text="Tiền dự trữ để trả chi phí 2-3 tháng đầu khi chưa đủ khách. Thiếu khoản này là nguyên nhân phá sản số 1!" /></>}>
        <VNDInput value={store.workingCap} onChange={store.setWorkingCap} />
        <SubtotalBar label="Dự phòng" amount={store.workingCap} total={totalInv} />
      </SectionCard>

      {/* Breakdown */}
      {totalInv > 0 && (
        <div className="clay-card-static p-5 mt-4">
          {cats.map(c => {
            const pct = totalInv > 0 ? c.val / totalInv * 100 : 0;
            return (
              <div key={c.name} className="flex items-center gap-2.5 text-[13px] mb-2 last:mb-0">
                <span className="w-[100px] font-medium shrink-0 text-text-muted">{c.name}</span>
                <div className="flex-1 h-2 bg-surface3 rounded-full overflow-hidden border-2 border-border-light/50">
                  <div className="h-full rounded-full transition-all duration-400" style={{ width: `${pct}%`, background: c.color }} />
                </div>
                <span className="w-[90px] text-right font-semibold shrink-0 font-[family-name:var(--font-heading)]">{formatVND(c.val)}</span>
                <span className="w-[40px] text-right text-text-light shrink-0 text-xs">{pct.toFixed(0)}%</span>
              </div>
            );
          })}
        </div>
      )}

      {/* Running Total */}
      <div className="rounded-2xl bg-text py-4 px-5 text-center text-white mt-3 relative overflow-hidden border-2 border-text">
        <div className="text-[11px] opacity-60 font-medium uppercase tracking-widest mb-0.5">
          TỔNG VỐN ĐẦU TƯ BAN ĐẦU
        </div>
        <div className="text-2xl font-bold font-[family-name:var(--font-heading)] tracking-tight max-md:text-xl">
          {formatFullVND(totalInv)}
        </div>
        {store.budget > 0 && (
          <div className="mt-2">
            {overBudget ? (
              <span className="clay-pill !bg-danger/20 !text-red-300 !border-red-400/30">
                Vượt ngân sách {formatVND(totalInv - store.budget)}
              </span>
            ) : (
              <span className="clay-pill !bg-success/20 !text-green-300 !border-green-400/30">
                Trong ngân sách ({formatVND(store.budget)})
              </span>
            )}
          </div>
        )}
      </div>

      <NavButtons onBack={store.prevStep} onNext={store.nextStep} />
    </div>
  );
}
