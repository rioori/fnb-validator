'use client';

import { useEffect, useState } from 'react';
import { track } from '@vercel/analytics';
import { useWizardStore, clearDraft } from '@/hooks/useWizardStore';
import { useTranslation } from '@/i18n/LocaleProvider';
import { MODELS } from '@/lib/constants';

const DRAFT_KEY = 'fnb_draft';
const DISMISSED_KEY = 'fnb_draft_resume_dismissed';

export default function ResumeDraftBanner() {
  const { locale } = useTranslation();
  const currentStep = useWizardStore((s) => s.currentStep);
  const selectedModel = useWizardStore((s) => s.selectedModel);
  const setStep = useWizardStore((s) => s.setStep);
  const [visible, setVisible] = useState(false);
  const [draftStep, setDraftStep] = useState<number>(0);
  const [draftModel, setDraftModel] = useState<string | null>(null);

  useEffect(() => {
    // Only show on homepage (step 0), and only if there's a real draft with progress
    if (currentStep !== 0) {
      setVisible(false);
      return;
    }
    try {
      const raw = localStorage.getItem(DRAFT_KEY);
      const dismissed = sessionStorage.getItem(DISMISSED_KEY);
      if (!raw || dismissed) return;
      const data = JSON.parse(raw);
      if (data && typeof data === 'object' && data.model && typeof data.currentStep === 'number' && data.currentStep >= 2) {
        setDraftStep(data.currentStep);
        setDraftModel(data.model);
        setVisible(true);
      }
    } catch { /* SSR or corrupt */ }
  }, [currentStep, selectedModel]);

  if (!visible) return null;

  const modelName = draftModel && MODELS[draftModel as keyof typeof MODELS]?.name
    ? MODELS[draftModel as keyof typeof MODELS].name
    : draftModel;

  const stepLabels = locale === 'en'
    ? ['home', 'Model', 'Location', 'Investment', 'Revenue', 'Costs', 'Results']
    : ['home', 'Mô hình', 'Vị trí', 'Vốn', 'Doanh thu', 'Chi phí', 'Kết quả'];

  const stepLabel = stepLabels[draftStep] || `${draftStep}/6`;

  const handleContinue = () => {
    track('draft_resume', { action: 'continue', step: draftStep, model: draftModel || 'unknown' });
    setStep(draftStep);
    setVisible(false);
  };

  const handleReset = () => {
    track('draft_resume', { action: 'reset', step: draftStep, model: draftModel || 'unknown' });
    clearDraft();
    setVisible(false);
    // Reload to reset in-memory Zustand state to defaults
    window.location.reload();
  };

  const handleDismiss = () => {
    track('draft_resume', { action: 'dismiss', step: draftStep, model: draftModel || 'unknown' });
    sessionStorage.setItem(DISMISSED_KEY, '1');
    setVisible(false);
  };

  return (
    <div className="clay-card-static bg-gradient-to-r from-amber-50 to-emerald-50 border-2 border-text/20 p-4 mb-4 max-md:p-3">
      <div className="flex items-start gap-3 max-md:flex-col">
        <div className="shrink-0 text-2xl">📝</div>
        <div className="flex-1 min-w-0">
          <div className="text-[13px] font-bold text-text mb-0.5">
            {locale === 'en'
              ? `You have an unfinished draft — ${modelName} at step "${stepLabel}"`
              : `Bạn có bản nháp đang dở — ${modelName} ở bước "${stepLabel}"`}
          </div>
          <p className="text-[12px] text-text-muted mb-2">
            {locale === 'en'
              ? 'Continue where you left off, or start fresh.'
              : 'Tiếp tục từ chỗ dừng lại, hoặc bắt đầu lại từ đầu.'}
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleContinue}
              className="clay-btn clay-btn-primary text-[12px] px-3 py-1.5"
            >
              {locale === 'en' ? 'Continue draft →' : 'Tiếp tục →'}
            </button>
            <button
              onClick={handleReset}
              className="text-[12px] text-text-muted hover:text-text underline underline-offset-2"
            >
              {locale === 'en' ? 'Start fresh' : 'Bắt đầu lại'}
            </button>
            <button
              onClick={handleDismiss}
              className="text-[12px] text-text-muted hover:text-text ml-auto"
              aria-label={locale === 'en' ? 'Dismiss' : 'Đóng'}
            >
              ✕
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
