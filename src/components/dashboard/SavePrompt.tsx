'use client';

import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useScenarios } from '@/hooks/useScenarios';
import { useWizardStore } from '@/hooks/useWizardStore';
import { useModels } from '@/hooks/useModels';
import Icon from '@/components/ui/Icon';
import { useTranslation } from '@/i18n/LocaleProvider';

export default function SavePrompt() {
  const { t } = useTranslation();
  const models = useModels();
  const { user, login, signup } = useAuth();
  const { save } = useScenarios();
  const store = useWizardStore();

  const [id, setId] = useState('');
  const [pass, setPass] = useState('');
  const [mode, setMode] = useState<'signup' | 'login'>('signup');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [saved, setSaved] = useState(false);

  // Already logged in — show simple save button
  if (user) {
    const handleSave = async () => {
      const modelName = store.selectedModel ? models[store.selectedModel].name : t.dashboard.save.defaultScenarioName;
      setLoading(true);
      await save(user.id, modelName, store.selectedModel, store.collectAll());
      setLoading(false);
      setSaved(true);
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

    return (
      <div className="clay-card-static bg-secondary-light p-4 mb-3 flex items-center justify-between max-md:flex-col max-md:gap-3">
        <div>
          <p className="text-[13px] font-bold text-text font-[family-name:var(--font-heading)]"><Icon name="save" size={18} className="inline-flex !border-0 !shadow-none !bg-transparent align-text-bottom" /> {t.dashboard.save.saveQuestion}</p>
          <p className="text-[12px] text-text-muted">{t.dashboard.save.saveHint}</p>
        </div>
        <button
          onClick={handleSave}
          disabled={loading}
          className="clay-btn clay-btn-primary text-[13px] shrink-0"
        >
          {loading ? t.dashboard.save.saving : t.dashboard.save.saveScenario}
        </button>
      </div>
    );
  }

  // Guest — show inline auth + save
  if (saved) {
    return (
      <div className="clay-card-static bg-mint-light p-4 mb-3 text-center">
        <Icon name="check" size={28} className="mx-auto" />
        <p className="text-[13px] font-semibold text-text mt-1">{t.dashboard.save.signupSavedSuccess}</p>
        <p className="text-[12px] text-text-muted mt-0.5">{t.dashboard.save.signupSavedHint}</p>
      </div>
    );
  }

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

      // Wait a tick for auth state to update
      await new Promise(r => setTimeout(r, 200));
      const authUser = useAuth.getState().user;
      if (!authUser) {
        setError(useAuth.getState().error || t.dashboard.save.loginFailed);
        setLoading(false);
        return;
      }

      // Auto-save after auth
      const modelName = store.selectedModel ? models[store.selectedModel].name : t.dashboard.save.defaultScenarioName;
      await save(authUser.id, modelName, store.selectedModel, store.collectAll());
      setSaved(true);
    } catch {
      setError(t.dashboard.save.genericError);
    }
    setLoading(false);
  };

  return (
    <div className="clay-card-static bg-primary-light p-4 mb-3">
      <div className="flex items-start gap-3 mb-3">
        <Icon name="save" size={32} className="shrink-0" />
        <div>
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
