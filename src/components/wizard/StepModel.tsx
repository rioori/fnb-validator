'use client';

import { track } from '@vercel/analytics';
import { useWizardStore } from '@/hooks/useWizardStore';
import { MODELS } from '@/lib/constants';
import { useModels } from '@/hooks/useModels';
import { formatVND } from '@/lib/format';
import type { ModelKey, BusinessMode } from '@/types';
import SectionCard from '@/components/ui/SectionCard';
import VNDInput from '@/components/ui/VNDInput';
import Tooltip from '@/components/ui/Tooltip';
import NavButtons from '@/components/ui/NavButtons';
import Icon from '@/components/ui/Icon';
import QuickSelect from '@/components/ui/QuickSelect';
import PresetCards from '@/components/onboarding/PresetCards';
import { useTranslation, tpl } from '@/i18n/LocaleProvider';

const CARD_COLORS: Record<string, string> = {
  coffee: 'bg-pastel-cream',
  eatery: 'bg-pastel-blue',
  bubbletea: 'bg-pastel-mint',
  restaurant: 'bg-pastel-blush',
  cloudkitchen: 'bg-pastel-gold',
  bakery: 'bg-pastel-cream',
  bar: 'bg-pastel-blue',
  kiosk: 'bg-pastel-mint',
};

export default function StepModel() {
  const { t } = useTranslation();
  const models = useModels();
  const { selectedModel, selectModel, budget, setBudget, rent, setRent, nextStep, businessMode, setBusinessMode, actualMonthlyRevenue, setActualMonthlyRevenue, monthsOperating, setMonthsOperating, projectName, setProjectName } = useWizardStore();
  const isExisting = businessMode === 'existing';

  const handleNext = () => {
    if (!selectedModel) { alert(t.wizard.stepModel.alertNoModel); return; }
    nextStep();
  };

  const model = selectedModel ? models[selectedModel] : null;

  const budgetPresets = model
    ? [
        Math.round(model.defaults.budget * 0.5 / 50_000_000) * 50_000_000,
        model.defaults.budget,
        Math.round(model.defaults.budget * 1.5 / 100_000_000) * 100_000_000,
      ].filter((v, i, a) => a.indexOf(v) === i)
    : [300_000_000, 500_000_000, 1_000_000_000, 2_000_000_000];

  const rentPresets = model
    ? [
        Math.round(model.defaults.rent * 0.6 / 1_000_000) * 1_000_000,
        model.defaults.rent,
        Math.round(model.defaults.rent * 1.5 / 5_000_000) * 5_000_000,
      ].filter((v, i, a) => a.indexOf(v) === i)
    : [10_000_000, 20_000_000, 35_000_000, 50_000_000];

  return (
    <div>
      {/* Business Mode Toggle */}
      <div className="flex gap-2 mb-4">
        {(['new', 'existing'] as BusinessMode[]).map((mode) => {
          const active = businessMode === mode;
          const label = mode === 'new' ? t.wizard.stepModel.modeNew : t.wizard.stepModel.modeExisting;
          const desc = mode === 'new' ? t.wizard.stepModel.modeNewDesc : t.wizard.stepModel.modeExistingDesc;
          return (
            <button
              key={mode}
              onClick={() => setBusinessMode(mode)}
              className={`flex-1 rounded-xl px-4 py-3 text-left transition-all border-2 cursor-pointer ${
                active
                  ? 'border-cta bg-white shadow-[3px_3px_0_var(--color-cta)]'
                  : 'border-border-light bg-surface hover:border-text'
              }`}
            >
              <span className={`text-sm font-bold font-[family-name:var(--font-heading)] flex items-center gap-1.5 ${active ? 'text-cta' : 'text-text'}`}>
                <Icon name={mode === 'new' ? 'newproject' : 'existing'} size={22} className={active ? '!border-cta !shadow-[1px_1px_0_var(--color-cta)]' : ''} /> {label}
              </span>
              <span className="text-[11px] text-text-muted block mt-0.5">{desc}</span>
            </button>
          );
        })}
      </div>

      <h2 className="text-lg font-bold mb-1 text-text font-[family-name:var(--font-heading)]">
        {isExisting ? t.wizard.stepModel.titleExisting : t.wizard.stepModel.title}
      </h2>
      <p className="text-text-muted text-[13px] mb-3">
        {isExisting ? t.wizard.stepModel.descExisting : t.wizard.stepModel.desc}
      </p>

      {/* Model Grid */}
      <div className="grid grid-cols-4 gap-3 mb-5 max-md:grid-cols-2 max-[480px]:gap-2">
        {(Object.entries(models) as [ModelKey, typeof MODELS[ModelKey]][]).map(([key, m]) => {
          const isSelected = selectedModel === key;
          return (
            <div
              key={key}
              onClick={() => selectModel(key)}
              className={`relative rounded-xl py-5 px-3 text-center cursor-pointer transition-all duration-200 border-2 max-[480px]:py-3.5 max-[480px]:px-2 ${
                isSelected
                  ? 'border-cta -translate-y-1 shadow-[4px_4px_0_var(--color-cta)] bg-white scale-[1.02]'
                  : `${CARD_COLORS[key] || 'bg-surface'} border-text hover:-translate-y-0.5 shadow-[2px_2px_0_var(--color-text)]`
              }`}
            >
              {isSelected && (
                <span className="absolute -top-2.5 -right-2.5 w-6 h-6 bg-cta rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5L19 7" />
                  </svg>
                </span>
              )}
              {key === 'coffee' && (
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-[9px] font-bold font-[family-name:var(--font-heading)] bg-cta text-white px-2 py-0.5 rounded-full whitespace-nowrap shadow-sm border border-white">
                  {t.wizard.stepModel.badgePopular}
                </span>
              )}
              <Icon name={m.icon} size={44} className={`mx-auto mb-2 max-[480px]:!w-9 max-[480px]:!h-9 ${isSelected ? '!border-cta !shadow-[1px_1px_0_var(--color-cta)]' : ''}`} />
              <span className={`text-[13px] font-bold font-[family-name:var(--font-heading)] block ${isSelected ? 'text-cta' : 'text-text'}`}>{m.name}</span>
              <span className="text-[11px] text-text-muted mt-1 block font-medium">{m.investRange}</span>
            </div>
          );
        })}
      </div>

      {/* Quick-Start Presets — only for new business, when no model selected yet */}
      {!isExisting && !selectedModel && <PresetCards />}

      {/* Model Info */}
      {model && (
        <div className="clay-sm bg-mint-light px-5 py-4 mb-4 text-sm text-text leading-relaxed animate-bounce-in">
          <strong className="font-[family-name:var(--font-heading)] inline-flex items-center gap-1.5"><Icon name={model.icon} size={22} /> {model.name}</strong><br />
          <span className="text-text-muted">{model.desc}</span>
        </div>
      )}

      {/* Quick mode switch — offered after model selected, before 6-step detailed flow */}
      {!isExisting && selectedModel && (
        <a
          href={`?mode=quick&model=${selectedModel}&utm_source=step-model&utm_medium=inline-switch`}
          onClick={() => track('quick_mode_switch', { source: 'step-model', model: selectedModel })}
          className="clay-sm bg-gradient-to-r from-amber-50 to-emerald-50 border-2 border-text/20 px-4 py-3 mb-4 flex items-center gap-3 hover:shadow-[3px_3px_0_var(--color-text)] transition-shadow cursor-pointer"
        >
          <span className="text-xl shrink-0">⚡</span>
          <div className="flex-1 min-w-0">
            <div className="text-[13px] font-bold text-text font-[family-name:var(--font-heading)]">
              {t.wizard.stepModel.quickSwitchTitle}
            </div>
            <div className="text-[11px] text-text-muted leading-snug">
              {t.wizard.stepModel.quickSwitchDesc}
            </div>
          </div>
          <span className="text-cta text-[12px] font-bold shrink-0">→</span>
        </a>
      )}

      {/* Project Name */}
      {selectedModel && (
        <div className="clay-sm bg-white p-4 mb-4">
          <label className="block font-semibold text-[13px] mb-1.5 text-text font-[family-name:var(--font-heading)]">
            {t.wizard.stepModel.labelProjectName}
          </label>
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            placeholder={t.wizard.stepModel.placeholderProjectName}
            maxLength={50}
            className="w-full clay-input text-[13px] font-[family-name:var(--font-body)]"
          />
          <div className="flex items-center justify-between mt-1">
            <span className="text-[11px] text-text-muted">{t.wizard.stepModel.projectNameHint}</span>
            <span className="text-[10px] text-text-light">{projectName.length}/50</span>
          </div>
        </div>
      )}

      {/* Budget & Rent */}
      <SectionCard title={t.wizard.stepModel.sectionBudget}>
        <div className="grid grid-cols-2 gap-3.5 max-md:grid-cols-1">
          <div>
            <label className="block font-semibold text-[13px] mb-1.5 text-text font-[family-name:var(--font-heading)]">
              {t.wizard.stepModel.labelBudget}
              <Tooltip text={t.wizard.stepModel.tooltipBudget} />
            </label>
            <VNDInput value={budget} onChange={setBudget} placeholder={t.wizard.stepModel.placeholderBudget} />
            <QuickSelect values={budgetPresets} onSelect={setBudget} current={budget} />
            {model && (
              <div className="text-xs text-text-muted mt-1.5 leading-relaxed">
                {tpl(t.wizard.stepModel.investHint, { model: model.name, range: model.investRange })}
              </div>
            )}
          </div>
          <div>
            <label className="block font-semibold text-[13px] mb-1.5 text-text font-[family-name:var(--font-heading)]">
              {t.wizard.stepModel.labelRent}
            </label>
            <VNDInput value={rent} onChange={setRent} placeholder={t.wizard.stepModel.placeholderRent} />
            <QuickSelect values={rentPresets} onSelect={setRent} current={rent} />
            {model ? (
              <div className="text-xs text-text-muted mt-1.5 leading-relaxed">
                {tpl(t.wizard.stepModel.rentHint, { model: model.name, min: formatVND(model.defaults.rent * 0.6), max: formatVND(model.defaults.rent * 1.5) })}
              </div>
            ) : (
              <div className="text-xs text-text-muted mt-1.5">{t.wizard.stepModel.rentHintNoModel}</div>
            )}
          </div>
        </div>
      </SectionCard>

      {/* Existing mode: Actual Revenue & Months Operating */}
      {isExisting && (
        <SectionCard title={t.wizard.stepModel.labelActualRevenue}>
          <div className="grid grid-cols-2 gap-3.5 max-md:grid-cols-1">
            <div>
              <label className="block font-semibold text-[13px] mb-1.5 text-text font-[family-name:var(--font-heading)]">
                {t.wizard.stepModel.labelActualRevenue}
                <Tooltip text={t.wizard.stepModel.tooltipActualRevenue} />
              </label>
              <VNDInput value={actualMonthlyRevenue} onChange={setActualMonthlyRevenue} placeholder={t.wizard.stepModel.placeholderActualRevenue} />
              <QuickSelect
                values={model ? [
                  Math.round(model.defaults.budget * 0.3 / 10_000_000) * 10_000_000,
                  Math.round(model.defaults.budget * 0.5 / 10_000_000) * 10_000_000,
                  Math.round(model.defaults.budget * 0.8 / 10_000_000) * 10_000_000,
                ].filter((v, i, a) => v > 0 && a.indexOf(v) === i) : [80_000_000, 150_000_000, 300_000_000, 500_000_000]}
                onSelect={setActualMonthlyRevenue}
                current={actualMonthlyRevenue}
              />
            </div>
            <div>
              <label className="block font-semibold text-[13px] mb-1.5 text-text font-[family-name:var(--font-heading)]">
                {t.wizard.stepModel.labelMonthsOperating}
              </label>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {[3, 6, 12, 24, 36, 60].map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setMonthsOperating(m)}
                    className={`text-[12px] px-3 py-1.5 rounded-full border transition-colors cursor-pointer font-medium ${
                      monthsOperating === m
                        ? 'bg-cta/10 border-cta text-cta'
                        : 'bg-surface3/60 border-border-light text-text-muted hover:border-text hover:text-text'
                    }`}
                  >
                    {tpl(t.wizard.stepModel.monthsOption, { n: String(m) })}
                  </button>
                ))}
              </div>
              <div className="text-xs text-text-muted mt-1.5">{t.wizard.stepModel.monthsOperatingHint}</div>
            </div>
          </div>
        </SectionCard>
      )}

      <NavButtons onBack={() => useWizardStore.getState().setStep(0)} backLabel={t.wizard.stepModel.backLabel} onNext={handleNext} />
    </div>
  );
}
