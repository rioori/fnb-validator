'use client';

import { useEffect, useState } from 'react';
import { track } from '@/lib/analytics';
import { useAuth } from '@/hooks/useAuth';
import { useScenarios } from '@/hooks/useScenarios';
import { useGuestScenarios, GUEST_MAX_SCENARIOS } from '@/hooks/useGuestScenarios';
import { useWizardStore, clearDraft } from '@/hooks/useWizardStore';
import { useModels } from '@/hooks/useModels';
import Icon from '@/components/ui/Icon';
import Spinner from '@/components/ui/Spinner';
import { useToast } from '@/components/ui/Toast';
import { useTranslation, tpl } from '@/i18n/LocaleProvider';

export default function SavePrompt() {
  const { t } = useTranslation();
  const models = useModels();
  const { user, login, signup } = useAuth();
  const { save, canSave, scenarioCount } = useScenarios();
  const guestScenarios = useGuestScenarios();
  const store = useWizardStore();
  const toast = useToast((s) => s.push);

  const [id, setId] = useState('');
  const [pass, setPass] = useState('');
  const [mode, setMode] = useState<'signup' | 'login'>('signup');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [saved, setSaved] = useState(false);
  const [showSignupUpsell, setShowSignupUpsell] = useState(false);

  useEffect(() => {
    guestScenarios.hydrate();
  }, [guestScenarios]);

  // ─── Authed user ───────────────────────────────────────────────
  if (user) {
    const handleSave = async () => {
      const fallback = store.selectedModel ? models[store.selectedModel].name : t.dashboard.save.defaultScenarioName;
      const scenarioName = store.projectName.trim() || fallback;
      setLoading(true);
      const isUpdate = !!useScenarios.getState().selectedId;
      try {
        await save(user.id, scenarioName, store.selectedModel, store.collectAll());
        track('scenario_saved', {
          model: store.selectedModel || 'none',
          mode: isUpdate ? 'update' : 'new',
          business_mode: store.businessMode,
        });
        track('north_star_action', { source: 'scenario_saved' });
        clearDraft();
        setSaved(true);
        toast('success', t.dashboard.save.savedSuccess);
      } catch (err) {
        const msg = err instanceof Error ? err.message : 'save failed';
        toast('error', msg === 'MAX_SCENARIOS' ? t.dashboard.save.scenarioLimitMax : msg);
      } finally {
        setLoading(false);
      }
    };

    if (saved) {
      return (
        <div className="clay-card-static bg-mint-light p-4 mb-3 text-center">
          <Icon name="check" size={28} className="mx-auto" />
          <p className="text-[13px] font-semibold text-text mt-1">{t.dashboard.save.savedSuccess}</p>
          <p className="text-[12px] text-text-muted mt-0.5">{t.dashboard.save.savedHint}</p>
        </div>
      );
    }

    const count = scenarioCount();
    const atLimit = !canSave();

    return (
      <div className="clay-card-static bg-secondary-light p-4 mb-3 flex items-center justify-between max-md:flex-col max-md:gap-3">
        <div>
          <p className="text-[13px] font-bold text-text font-[family-name:var(--font-heading)]"><Icon name="save" size={18} className="inline-flex !border-0 !shadow-none !bg-transparent align-text-bottom" /> {t.dashboard.save.saveQuestion}</p>
          <p className="text-[12px] text-text-muted">{t.dashboard.save.saveHint}</p>
          {count >= 8 && (
            <p className={`text-[11px] mt-1 font-semibold ${atLimit ? 'text-danger' : 'text-warning'}`}>
              {atLimit
                ? t.dashboard.save.scenarioLimitMax
                : tpl(t.dashboard.save.scenarioLimitWarn, { count: String(count) })}
            </p>
          )}
        </div>
        <button
          onClick={handleSave}
          disabled={loading || atLimit}
          className="clay-btn clay-btn-primary text-[13px] shrink-0 disabled:opacity-50 inline-flex items-center gap-2"
        >
          {loading && <Spinner size={14} />}
          {loading ? t.dashboard.save.saving : t.dashboard.save.saveScenario}
        </button>
      </div>
    );
  }

  // ─── Guest — after successful local save ────────────────────────
  if (saved && !showSignupUpsell) {
    return (
      <div className="clay-card-static bg-mint-light p-4 mb-3">
        <div className="flex items-start gap-3">
          <Icon name="check" size={28} className="shrink-0" />
          <div className="flex-1">
            <p className="text-[13px] font-bold text-text font-[family-name:var(--font-heading)]">
              {t.dashboard.save.guestSavedTitle}
            </p>
            <p className="text-[12px] text-text-muted mt-0.5">
              {t.dashboard.save.guestSavedHint}
            </p>
            <button
              onClick={() => setShowSignupUpsell(true)}
              className="mt-2 text-[12px] font-semibold text-cta underline hover:no-underline"
            >
              {t.dashboard.save.guestSavedSyncCta}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ─── Guest quick-save (default state before ever saving) ────────
  const handleGuestSave = () => {
    const fallback = store.selectedModel ? models[store.selectedModel].name : t.dashboard.save.defaultScenarioName;
    const scenarioName = store.projectName.trim() || fallback;
    try {
      guestScenarios.save(scenarioName, store.selectedModel, store.collectAll());
      track('scenario_saved_guest', {
        model: store.selectedModel || 'none',
        business_mode: store.businessMode,
      });
      track('north_star_action', { source: 'scenario_saved_guest' });
      clearDraft();
      setSaved(true);
      toast('success', t.dashboard.save.guestSavedTitle);
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'save failed';
      if (msg === 'MAX_GUEST_SCENARIOS') {
        toast('error', tpl(t.dashboard.save.guestLimitReached, { count: String(GUEST_MAX_SCENARIOS), max: String(GUEST_MAX_SCENARIOS) }));
        setShowSignupUpsell(true);
      } else {
        toast('error', t.dashboard.save.genericError);
      }
    }
  };

  const handleSubmit = async () => {
    if (!id || !pass) { setError(t.dashboard.save.validationPhonePassword); return; }
    if (mode === 'signup' && pass.length < 6) { setError(t.dashboard.save.validationPasswordLength); return; }
    setLoading(true);
    setError('');

    try {
      if (mode === 'signup') {
        await signup(id, pass);
      } else {
        await login(id, pass);
      }

      await new Promise((r) => setTimeout(r, 200));
      const authUser = useAuth.getState().user;
      if (!authUser) {
        setError(useAuth.getState().error || t.dashboard.save.loginFailed);
        setLoading(false);
        return;
      }

      // Migrate any local guest scenarios (skip current one; it's about to save fresh)
      const guests = useGuestScenarios.getState().scenarios;
      if (guests.length > 0) {
        toast('info', tpl(t.dashboard.save.guestSyncingNote, { count: String(guests.length) }));
        let synced = 0;
        for (const g of guests) {
          try {
            await save(authUser.id, g.name, g.model_key, g.data);
            synced++;
          } catch {}
          // Reset selectedId between inserts so each is a new row, not an update
          useScenarios.getState().setSelectedId('');
        }
        useGuestScenarios.getState().clear();
        if (synced > 0) {
          toast('success', tpl(t.dashboard.save.guestSyncSuccess, { count: String(synced) }));
        }
      }

      // Also save the current (in-progress) scenario the user is looking at
      const fallback = store.selectedModel ? models[store.selectedModel].name : t.dashboard.save.defaultScenarioName;
      const scenarioName = store.projectName.trim() || fallback;
      await save(authUser.id, scenarioName, store.selectedModel, store.collectAll());
      track('scenario_saved', {
        model: store.selectedModel || 'none',
        mode: 'new',
        business_mode: store.businessMode,
        via: 'guest_upgrade',
      });
      track('north_star_action', { source: 'scenario_saved' });
      clearDraft();
      setSaved(true);
      setShowSignupUpsell(false);
    } catch {
      setError(t.dashboard.save.genericError);
    }
    setLoading(false);
  };

  // Guest state: show quick save button OR (after clicking "sync + share") the signup form
  if (!showSignupUpsell) {
    const guestCount = guestScenarios.scenarios.length;
    const atLimit = !guestScenarios.canSave();

    return (
      <div className="clay-card-static bg-primary-light p-4 mb-3">
        <div className="flex items-start gap-3 mb-3">
          <Icon name="save" size={32} className="shrink-0" />
          <div className="flex-1">
            <p className="text-[14px] font-bold text-text font-[family-name:var(--font-heading)]">
              {t.dashboard.save.guestSaveNow}
            </p>
            <p className="text-[12px] text-text-muted mt-0.5">
              {t.dashboard.save.guestSaveHint}
            </p>
            {guestCount > 0 && (
              <p className="text-[11px] text-text-muted mt-1">
                {guestCount}/{GUEST_MAX_SCENARIOS}
              </p>
            )}
          </div>
        </div>

        <div className="flex gap-2 max-md:flex-col">
          <button
            onClick={handleGuestSave}
            disabled={atLimit}
            className="clay-btn clay-btn-primary text-[13px] flex-1 disabled:opacity-50"
          >
            {t.dashboard.save.saveNow}
          </button>
          <button
            onClick={() => setShowSignupUpsell(true)}
            className="clay-btn clay-btn-secondary text-[13px] flex-1"
          >
            {t.dashboard.save.guestSavedSyncCta}
          </button>
        </div>

        {atLimit && (
          <p className="text-danger text-[12px] font-semibold mt-2">
            {tpl(t.dashboard.save.guestLimitReached, { count: String(guestCount), max: String(GUEST_MAX_SCENARIOS) })}
          </p>
        )}
      </div>
    );
  }

  // Guest opted into signup — show inline auth form
  return (
    <div className="clay-card-static bg-primary-light p-4 mb-3">
      <div className="flex items-start gap-3 mb-3">
        <Icon name="save" size={32} className="shrink-0" />
        <div className="flex-1">
          <p className="text-[14px] font-bold text-text font-[family-name:var(--font-heading)]">{t.dashboard.save.guestSaveTitle}</p>
          <p className="text-[12px] text-text-muted mt-0.5">
            {mode === 'signup' ? t.dashboard.save.signupPrompt : t.dashboard.save.loginPrompt}
          </p>
        </div>
      </div>

      <div className="flex gap-2 mb-2 max-md:flex-col">
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder={t.dashboard.save.phonePlaceholder}
          className="clay-input text-[13px] flex-1 min-w-0"
        />
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder={mode === 'signup' ? t.dashboard.save.signupPasswordPlaceholder : t.dashboard.save.loginPasswordPlaceholder}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
          className="clay-input text-[13px] flex-1 min-w-0"
        />
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="clay-btn clay-btn-primary text-[13px] shrink-0 disabled:opacity-50"
        >
          {loading ? '...' : mode === 'signup' ? t.dashboard.save.saveNow : t.dashboard.save.loginAndSave}
        </button>
      </div>

      {error && <p className="text-danger text-[12px] font-semibold mb-2">{error}</p>}

      <p className="text-[11px] text-text-muted">
        {mode === 'signup' ? (
          <>{t.dashboard.save.hasAccount} <button onClick={() => setMode('login')} className="underline font-semibold text-text">{t.dashboard.save.loginLink}</button></>
        ) : (
          <>{t.dashboard.save.noAccount} <button onClick={() => setMode('signup')} className="underline font-semibold text-text">{t.dashboard.save.signupLink}</button></>
        )}
      </p>
    </div>
  );
}
