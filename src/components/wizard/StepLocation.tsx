'use client';

import { useWizardStore } from '@/hooks/useWizardStore';
import SectionCard from '@/components/ui/SectionCard';
import Tooltip from '@/components/ui/Tooltip';
import NavButtons from '@/components/ui/NavButtons';
import { useTranslation, tpl } from '@/i18n/LocaleProvider';

export default function StepLocation() {
  const { t } = useTranslation();
  const store = useWizardStore();

  const seatRatio = store.sqm > 0 && store.seats > 0 ? store.sqm / store.seats : 0;
  const channelSum = Number(store.chDinein) + Number(store.chTakeaway) + Number(store.chDelivery);

  return (
    <div>
      <h2 className="text-lg font-bold mb-1 text-text font-[family-name:var(--font-heading)]">
        {t.wizard.stepLocation.title}
      </h2>
      <p className="text-text-muted text-[13px] mb-3">
        {t.wizard.stepLocation.desc}
      </p>

      <SectionCard title={t.wizard.stepLocation.sectionLocation}>
        <div className="grid grid-cols-2 gap-3.5 max-md:grid-cols-1">
          <div>
            <label className="block font-medium text-[13px] mb-1.5 text-text">{t.wizard.stepLocation.labelCity}</label>
            <select value={store.city} onChange={(e) => store.setCity(e.target.value)} className="w-full clay-input font-[family-name:var(--font-body)] text-text">
              <option value="hcm">{t.wizard.stepLocation.cities.hcm}</option>
              <option value="hanoi">{t.wizard.stepLocation.cities.hanoi}</option>
              <option value="danang">{t.wizard.stepLocation.cities.danang}</option>
              <option value="other">{t.wizard.stepLocation.cities.other}</option>
            </select>
          </div>
          <div>
            <label className="block font-medium text-[13px] mb-1.5 text-text">{t.wizard.stepLocation.labelArea}</label>
            <select value={store.area} onChange={(e) => store.setArea(e.target.value)} className="w-full clay-input font-[family-name:var(--font-body)] text-text">
              <option value="center">{t.wizard.stepLocation.areas.center}</option>
              <option value="suburb">{t.wizard.stepLocation.areas.suburb}</option>
              <option value="residential">{t.wizard.stepLocation.areas.residential}</option>
              <option value="mall">{t.wizard.stepLocation.areas.mall}</option>
            </select>
          </div>
        </div>
      </SectionCard>

      <SectionCard title={t.wizard.stepLocation.sectionScale}>
        <div className="grid grid-cols-3 gap-3.5 max-md:grid-cols-1">
          <div>
            <label className="block font-medium text-[13px] mb-1.5 text-text">
              {t.wizard.stepLocation.labelSqm}
              <Tooltip text={t.wizard.stepLocation.tooltipSqm} />
            </label>
            <input type="text" inputMode="numeric" value={store.sqm || ''} onChange={(e) => store.setSqm(parseInt(e.target.value.replace(/\D/g, '')) || 0)} placeholder="0" className="w-full clay-input font-[family-name:var(--font-body)] text-text" />
          </div>
          <div>
            <label className="block font-medium text-[13px] mb-1.5 text-text">{t.wizard.stepLocation.labelSeats}</label>
            <input type="text" inputMode="numeric" value={store.seats || ''} onChange={(e) => store.setSeats(parseInt(e.target.value.replace(/\D/g, '')) || 0)} placeholder="0" className="w-full clay-input font-[family-name:var(--font-body)] text-text" />
          </div>
          <div>
            <label className="block font-medium text-[13px] mb-1.5 text-text">{t.wizard.stepLocation.labelDaysPerWeek}</label>
            <select value={store.daysPerWeek} onChange={(e) => store.setDaysPerWeek(parseInt(e.target.value))} className="w-full clay-input font-[family-name:var(--font-body)] text-text">
              <option value="7">{tpl(t.wizard.stepLocation.daysOption, { n: 7 })}</option>
              <option value="6">{tpl(t.wizard.stepLocation.daysOption, { n: 6 })}</option>
              <option value="5">{tpl(t.wizard.stepLocation.daysOption, { n: 5 })}</option>
            </select>
          </div>
        </div>
        {seatRatio > 0 && seatRatio < 1 && (
          <div className="mt-2 px-4 py-2.5 rounded-2xl text-[13px] bg-danger/10 text-danger border-2 border-danger/30 font-medium">
            {tpl(t.wizard.stepLocation.alertTooCramped, { ratio: seatRatio.toFixed(1) })}
          </div>
        )}
        {seatRatio >= 1 && seatRatio < 1.3 && (
          <div className="mt-2 px-4 py-2.5 rounded-2xl text-[13px] bg-primary-light text-text border-2 border-border font-medium">
            {tpl(t.wizard.stepLocation.alertSlightlyTight, { ratio: seatRatio.toFixed(1) })}
          </div>
        )}
        {seatRatio >= 1.3 && seatRatio <= 3 && (
          <div className="mt-2 px-4 py-2.5 rounded-2xl text-[13px] bg-mint-light text-text border-2 border-border font-medium">
            {tpl(t.wizard.stepLocation.alertReasonable, { ratio: seatRatio.toFixed(1) })}
          </div>
        )}
        {seatRatio > 3 && (
          <div className="mt-2 px-4 py-2.5 rounded-2xl text-[13px] bg-primary-light text-text border-2 border-border font-medium">
            {tpl(t.wizard.stepLocation.alertTooSpacious, { ratio: seatRatio.toFixed(1) })}
          </div>
        )}
      </SectionCard>

      <SectionCard title={<>{t.wizard.stepLocation.sectionChannels} <Tooltip text={t.wizard.stepLocation.tooltipChannels} /></>}>
        <p className="text-xs text-text-muted mb-2">{t.wizard.stepLocation.channelsHint}</p>
        <div className="grid grid-cols-3 gap-3 max-md:grid-cols-1">
          {[
            { label: t.wizard.stepLocation.channelDinein, value: store.chDinein, set: (v: number) => store.setChannels(v, store.chTakeaway, store.chDelivery) },
            { label: t.wizard.stepLocation.channelTakeaway, value: store.chTakeaway, set: (v: number) => store.setChannels(store.chDinein, v, store.chDelivery) },
            { label: t.wizard.stepLocation.channelDelivery, value: store.chDelivery, set: (v: number) => store.setChannels(store.chDinein, store.chTakeaway, v) },
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
            {tpl(t.wizard.stepLocation.channelSumWarning, { sum: channelSum })}
          </div>
        )}
      </SectionCard>

      <NavButtons onBack={store.prevStep} onNext={store.nextStep} />
    </div>
  );
}
