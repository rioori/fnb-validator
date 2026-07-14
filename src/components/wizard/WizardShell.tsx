'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { track } from '@vercel/analytics';
import { useWizardStore } from '@/hooks/useWizardStore';
import { useAuth } from '@/hooks/useAuth';
import { useTranslation } from '@/i18n/LocaleProvider';
import Icon from '@/components/ui/Icon';
import { localePath } from '@/i18n/link';
import ProgressBar from './ProgressBar';
import StepModel from './StepModel';
import StepLocation from './StepLocation';
import StepInvestment from './StepInvestment';
import StepRevenue from './StepRevenue';
import StepCosts from './StepCosts';
import StepDashboard from './StepDashboard';
import StepQuickInput from './StepQuickInput';
import ResumeDraftBanner from './ResumeDraftBanner';
import HomePage from '@/components/home/HomePage';
import AuthOverlay from '@/components/auth/AuthOverlay';
import UserBar from '@/components/auth/UserBar';
import WelcomeModal from '@/components/onboarding/WelcomeModal';
import { useOnboarding } from '@/hooks/useOnboarding';

export default function WizardShell() {
  const { t, locale } = useTranslation();
  const currentStep = useWizardStore((s) => s.currentStep);
  const setStep = useWizardStore((s) => s.setStep);
  const selectModel = useWizardStore((s) => s.selectModel);
  const setCity = useWizardStore((s) => s.setCity);
  const checkSession = useAuth((s) => s.checkSession);
  const { showWelcome, dismissWelcome } = useOnboarding();
  const [quickMode, setQuickMode] = useState(false);

  useEffect(() => {
    checkSession();
    // Note: restoreDraft is NOT auto-called anymore.
    // ResumeDraftBanner detects draft and prompts user explicitly (Continue / Reset).
    // This fixes silent state restore that confused users returning to the page.
    const params = new URLSearchParams(window.location.search);
    // Deep-link: if ?view= param exists, force step=0 so HomePage handles it
    const viewParam = params.get('view');
    if (viewParam) setStep(0);
    // Direct entry: ?start=1 jumps to step 1 (model selection)
    else if (params.get('start') === '1' && currentStep === 0) setStep(1);

    // Pre-fill model/city from URL (link from article CTA)
    const modelParam = params.get('model');
    const cityParam = params.get('city');
    const VALID_MODELS = ['coffee', 'eatery', 'bubbletea', 'restaurant', 'cloudkitchen', 'bakery', 'bar', 'kiosk'];
    if (modelParam && VALID_MODELS.includes(modelParam)) {
      selectModel(modelParam as 'coffee' | 'eatery' | 'bubbletea' | 'restaurant' | 'cloudkitchen' | 'bakery' | 'bar' | 'kiosk');
      // Skip model-selection step → jump to location (step 2)
      setStep(2);
    }
    if (cityParam) setCity(cityParam);

    // Quick mode: ?mode=quick → consolidated input UX
    const modeParam = params.get('mode');
    if (modeParam === 'quick') {
      setQuickMode(true);
      // If model not specified, jump to step 1 (model picker) → user picks → Quick step replaces 3-5
      // If model specified, jump to step 2 (Quick step UI)
      if (!modelParam) setStep(1);
      else setStep(2);
      track('quick_mode_entered', { source: 'url_param', model: modelParam || 'none' });
    }
  }, [checkSession, setStep, selectModel, setCity]); // eslint-disable-line react-hooks/exhaustive-deps

  const stepNames = ['home', 'model', 'location', 'investment', 'revenue', 'costs', 'dashboard'];
  const stepEnteredAt = useRef<number>(Date.now());
  const prevStep = useRef<number>(currentStep);
  const maxReachedStep = useRef<number>(0);
  const stepsCompleted = useRef<Set<number>>(new Set());
  const wizardStartedFired = useRef<boolean>(false);
  const wizardCompletedFired = useRef<boolean>(false);

  useEffect(() => {
    if (currentStep >= 1) {
      const prev = prevStep.current;
      const isForward = currentStep > prev;
      const isBackward = currentStep < prev && prev >= 1;
      const isFirstEntry = !wizardStartedFired.current;

      // Fire wizard_started once, on first step ≥ 1 entry (funnel entry point)
      if (isFirstEntry) {
        track('wizard_started', { entry_step: currentStep, name: stepNames[currentStep] });
        wizardStartedFired.current = true;
      }

      // Fire wizard_step_complete for the previous step when user moves forward
      // (they finished it well enough to advance — the funnel-progression signal)
      if (isForward && prev >= 1 && !stepsCompleted.current.has(prev)) {
        const seconds = Math.round((Date.now() - stepEnteredAt.current) / 1000);
        track('wizard_step_complete', {
          step: prev,
          name: stepNames[prev],
          next_step: currentStep,
          seconds,
        });
        stepsCompleted.current.add(prev);
      }

      // Legacy time event (kept for parity with existing dashboards)
      if (prev >= 1 && prev !== currentStep) {
        const seconds = Math.round((Date.now() - stepEnteredAt.current) / 1000);
        track('wizard_step_time', { step: prev, name: stepNames[prev], seconds });
      }

      // wizard_step_view — every step entry (view event, distinct from complete)
      track('wizard_step_view', {
        step: currentStep,
        name: stepNames[currentStep],
        direction: isForward ? 'forward' : isBackward ? 'backward' : 'entry',
        max_reached: Math.max(maxReachedStep.current, currentStep),
      });

      // Legacy wizard_step (kept for backward-compat with existing analytics dashboards)
      track('wizard_step', { step: currentStep, name: stepNames[currentStep] });

      // wizard_completed — once user reaches dashboard (step 6)
      if (currentStep === 6 && !wizardCompletedFired.current) {
        track('wizard_completed', {
          reached_from_step: prev,
          steps_completed: stepsCompleted.current.size,
        });
        track('north_star_action', { source: 'wizard_completed' });
        wizardCompletedFired.current = true;
      }

      maxReachedStep.current = Math.max(maxReachedStep.current, currentStep);
      stepEnteredAt.current = Date.now();
    }
    prevStep.current = currentStep;
  }, [currentStep]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {/* Welcome modal — first visit only */}
      {showWelcome && currentStep === 0 && <WelcomeModal onDismiss={dismissWelcome} />}

      {/* Auth moved to StepDashboard — only prompt when saving/exporting */}
      <div className="max-w-[1200px] mx-auto px-8 pt-4 pb-[80px] max-lg:px-5 max-md:px-3 max-md:pt-4 max-md:pb-[100px]">
        {/* Back navigation — contextual */}
        <nav className="flex items-center justify-between mb-2">
          {currentStep === 0 ? (
            <span />
          ) : (
            <button
              onClick={() => setStep(0)}
              className="text-[12px] text-text-muted hover:text-cta transition-colors font-[family-name:var(--font-heading)] font-medium inline-flex items-center gap-1 cursor-pointer"
            >
              {t.wizard.shell.backLink}
            </button>
          )}
          <UserBar />
        </nav>

        {/* Header — only in wizard steps, homepage has its own Hero */}
        {currentStep >= 1 && (
          <div className="clay-card-static bg-pastel-cream py-2.5 px-6 mb-4 text-center relative max-md:py-2 max-md:px-5">
            <button
              onClick={() => setStep(0)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border-2 border-text bg-white flex items-center justify-center text-[16px] hover:bg-surface3 transition-colors cursor-pointer no-print shadow-[2px_2px_0_var(--color-text)]"
              title={t.wizard.shell.homeTitle}
            >
              <Icon name="home" size={20} className="!border-0 !shadow-none !bg-transparent" />
            </button>
            <Image src="/logo.png" alt="Validator.vn" width={56} height={56} className="mx-auto" />
            <p className="text-[10px] text-text font-[family-name:var(--font-heading)] font-medium">
              {t.wizard.shell.builtWith} <Icon name="heart" size={14} className="inline-flex align-text-bottom !border-0 !shadow-none !bg-transparent" /> {t.wizard.shell.forCommunity}
            </p>
          </div>
        )}

        {currentStep >= 1 && <ProgressBar />}

        <div className="animate-fade-in-up" key={currentStep}>
          {currentStep === 0 && <ResumeDraftBanner />}
          {currentStep === 0 && <HomePage />}
          {currentStep === 1 && <StepModel />}
          {/* Quick mode: replace steps 2-5 with single StepQuickInput */}
          {quickMode && currentStep >= 2 && currentStep <= 5 && (
            <StepQuickInput onSwitchToDetailed={() => { setQuickMode(false); setStep(2); track('quick_mode_exited'); }} />
          )}
          {!quickMode && currentStep === 2 && <StepLocation />}
          {!quickMode && currentStep === 3 && <StepInvestment />}
          {!quickMode && currentStep === 4 && <StepRevenue />}
          {!quickMode && currentStep === 5 && <StepCosts />}
          {currentStep === 6 && <StepDashboard />}
        </div>
      </div>
    </>
  );
}
