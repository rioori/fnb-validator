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
import { useTranslation, tpl } from '@/i18n/LocaleProvider';

export default function StepRevenue() {
  const { t } = useTranslation();
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
        {t.wizard.stepRevenue.title}
      </h2>
      <p className="text-text-muted text-[13px] mb-3">
        {t.wizard.stepRevenue.desc}
      </p>

      {/* Ticket Items */}
      <SectionCard title={<>{t.wizard.stepRevenue.sectionTicket} <Tooltip text={t.wizard.stepRevenue.tooltipTicket} /></>}>
        <p className="text-xs text-text-muted mb-2.5">{t.wizard.stepRevenue.ticketHint}</p>
        <div className="mb-2">
          {store.ticketItems.map((item) => (
            <div key={item.id} className="flex gap-2 items-center mb-1.5 animate-fade-in-up">
              <input
                type="text"
                value={item.name}
                onChange={(e) => store.updateTicketItem(item.id, 'name', e.target.value)}
                placeholder={t.wizard.stepRevenue.itemNamePlaceholder}
                className="flex-[2] clay-input font-[family-name:var(--font-body)] text-text"
              />
              <div className="flex-1">
                <VNDInput value={item.price} onChange={(v) => store.updateTicketItem(item.id, 'price', v)} placeholder={t.wizard.stepRevenue.itemPricePlaceholder} />
              </div>
              <button onClick={() => store.removeTicketItem(item.id)} className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full border-2 border-border-light text-text-light hover:border-danger hover:text-danger hover:bg-danger/10 transition-colors cursor-pointer font-bold text-sm">✕</button>
            </div>
          ))}
        </div>
        <button onClick={() => store.addTicketItem()} className="clay-btn clay-btn-secondary text-xs py-2 px-4 !border-dashed">
          {t.wizard.stepRevenue.addItem}
        </button>
        <div className="clay-sm bg-mint-light px-4 py-3 flex items-center justify-between font-medium mt-3">
          <span className="text-sm font-semibold font-[family-name:var(--font-heading)]">{t.wizard.stepRevenue.avgTicketLabel}</span>
          <span className="text-lg font-bold text-text font-[family-name:var(--font-heading)]">{formatFullVND(avgTicket)}</span>
        </div>
        {benchmarks && (
          <div className="text-xs text-text-muted mt-1">{tpl(t.wizard.stepRevenue.benchmarkTicket, { model: model?.name ?? '', min: formatVND(benchmarks.ticket[0]), max: formatVND(benchmarks.ticket[1]) })}</div>
        )}
      </SectionCard>

      {/* Customer Matrix */}
      <SectionCard title={t.wizard.stepRevenue.sectionCustomers}>
        <p className="text-xs text-text-muted mb-2.5">{t.wizard.stepRevenue.customersHint}</p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="px-1.5 py-2 text-left text-[11px] font-medium text-text-muted uppercase tracking-wider font-[family-name:var(--font-heading)] border-b border-border" />
                <th className="px-1.5 py-2 text-center text-[11px] font-medium text-text-muted uppercase tracking-wider font-[family-name:var(--font-heading)] border-b border-border">{t.wizard.stepRevenue.periodMorning}<br /><small className="font-normal normal-case">{t.wizard.stepRevenue.periodMorningTime}</small></th>
                <th className="px-1.5 py-2 text-center text-[11px] font-medium text-text-muted uppercase tracking-wider font-[family-name:var(--font-heading)] border-b border-border">{t.wizard.stepRevenue.periodNoon}<br /><small className="font-normal normal-case">{t.wizard.stepRevenue.periodNoonTime}</small></th>
                <th className="px-1.5 py-2 text-center text-[11px] font-medium text-text-muted uppercase tracking-wider font-[family-name:var(--font-heading)] border-b border-border">{t.wizard.stepRevenue.periodAfternoon}<br /><small className="font-normal normal-case">{t.wizard.stepRevenue.periodAfternoonTime}</small></th>
                <th className="px-1.5 py-2 text-center text-[11px] font-medium text-text-muted uppercase tracking-wider font-[family-name:var(--font-heading)] border-b border-border">{t.wizard.stepRevenue.periodEvening}<br /><small className="font-normal normal-case">{t.wizard.stepRevenue.periodEveningTime}</small></th>
                <th className="px-1.5 py-2 text-center text-[11px] font-medium text-text-muted font-[family-name:var(--font-heading)] border-b border-border">{t.wizard.stepRevenue.totalPerDay}</th>
              </tr>
            </thead>
            <tbody>
              {(['wd', 'we'] as const).map((period) => (
                <tr key={period}>
                  <td className="text-left font-medium text-[13px] text-text-muted px-1.5 py-1.5 border-b border-border-light">
                    {period === 'wd' ? t.wizard.stepRevenue.weekday : t.wizard.stepRevenue.weekend}
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
            {tpl(t.wizard.stepRevenue.benchmarkCustomers, { model: model?.name ?? '', wdMin: benchmarks.cust_wd[0], wdMax: benchmarks.cust_wd[1], weMin: benchmarks.cust_we[0], weMax: benchmarks.cust_we[1] })}
          </div>
        )}
      </SectionCard>

      {/* Ramp Sliders */}
      <SectionCard title={<>{t.wizard.stepRevenue.sectionRamp} <Tooltip text={t.wizard.stepRevenue.tooltipRamp} /></>}>
        {store.rampFactors.map((val, i) => (
          <SliderField
            key={i}
            label={tpl(t.wizard.stepRevenue.rampMonth, { n: i + 1 })}
            value={Math.round(val * 100)}
            min={10}
            max={100}
            onChange={(v) => store.setRampFactor(i, v / 100)}
          />
        ))}
      </SectionCard>

      {/* Revenue Preview */}
      <SectionCard title={t.wizard.stepRevenue.sectionPreview}>
        <div className="grid grid-cols-3 gap-2.5 max-md:grid-cols-1">
          <div className="clay-sm p-4 text-center">
            <div className="text-xs text-text-muted">{t.wizard.stepRevenue.previewDaily}</div>
            <div className="text-xl font-bold font-[family-name:var(--font-heading)] tracking-tight mt-0.5">{formatVND(revDayAvg)}</div>
          </div>
          <div className="clay-sm p-4 text-center">
            <div className="text-xs text-text-muted">{t.wizard.stepRevenue.previewMonth1}</div>
            <div className="text-xl font-bold font-[family-name:var(--font-heading)] tracking-tight mt-0.5">{formatVND(revMonth1)}</div>
          </div>
          <div className="clay-sm p-4 text-center">
            <div className="text-xs text-text-muted">{t.wizard.stepRevenue.previewStable}</div>
            <div className="text-xl font-bold font-[family-name:var(--font-heading)] tracking-tight mt-0.5">{formatVND(revStable)}</div>
          </div>
        </div>
      </SectionCard>

      <NavButtons onBack={store.prevStep} onNext={store.nextStep} />
    </div>
  );
}
