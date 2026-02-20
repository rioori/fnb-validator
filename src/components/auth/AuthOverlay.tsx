'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useAuth } from '@/hooks/useAuth';
import { useTranslation } from '@/i18n/LocaleProvider';

interface AuthOverlayProps {
  /** Only show overlay when active (e.g. user entered wizard without login) */
  active?: boolean;
}

export default function AuthOverlay({ active = true }: AuthOverlayProps) {
  const { t } = useTranslation();
  const { user, login, signup, skip, error, loading } = useAuth();
  const [tab, setTab] = useState<'login' | 'signup'>('login');
  const [id, setId] = useState('');
  const [pass, setPass] = useState('');
  const [dismissed, setDismissed] = useState(false);

  if (!active || user !== null || dismissed) return null;

  const handleSubmit = () => {
    if (tab === 'login') login(id, pass);
    else signup(id, pass);
  };

  const handleSkip = () => {
    skip();
    setDismissed(true);
  };

  return (
    <div className="fixed inset-0 bg-mint-light/80 backdrop-blur-sm flex items-center justify-center z-[1000]">
      <div className="clay-card-static bg-pastel-cream px-8 py-10 w-[90%] max-w-[400px] animate-bounce-in max-md:px-5 max-md:py-7">
        <Image src="/logo.png" alt="F&B Validator" width={100} height={63} className="mx-auto mb-2" />
        <p className="text-center text-text-muted text-sm mb-1">{t.common.auth.loginToSave}</p>
        <p className="text-center text-text-light text-[12px] mb-5">{t.common.auth.quickSignup}</p>

        {/* Tabs */}
        <div className="flex mb-6 rounded-2xl p-1 gap-1 border-2 border-border-light bg-surface3">
          <div
            onClick={() => setTab('login')}
            className={`flex-1 py-2.5 text-center font-bold text-sm cursor-pointer rounded-xl font-[family-name:var(--font-heading)] transition-all ${tab === 'login' ? 'text-white bg-text' : 'text-text-muted hover:text-text'}`}
          >{t.common.auth.login}</div>
          <div
            onClick={() => setTab('signup')}
            className={`flex-1 py-2.5 text-center font-bold text-sm cursor-pointer rounded-xl font-[family-name:var(--font-heading)] transition-all ${tab === 'signup' ? 'text-white bg-text' : 'text-text-muted hover:text-text'}`}
          >{t.common.auth.signup}</div>
        </div>

        {/* Form */}
        <div className="mb-4">
          <label className="block font-semibold text-[13px] mb-1.5 text-text-muted font-[family-name:var(--font-heading)]">{t.common.auth.phone}</label>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="w-full clay-input font-[family-name:var(--font-body)]"
          />
        </div>
        <div className="mb-5">
          <label className="block font-semibold text-[13px] mb-1.5 text-text-muted font-[family-name:var(--font-heading)]">
            {t.common.auth.password}
          </label>
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
            className="w-full clay-input font-[family-name:var(--font-body)]"
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full clay-btn clay-btn-primary text-sm disabled:opacity-50"
        >
          {tab === 'login' ? `${t.common.auth.login} →` : `${t.common.auth.signup} →`}
        </button>

        <button
          onClick={handleSkip}
          className="w-full mt-3 clay-btn clay-btn-secondary text-sm"
        >
          {t.common.auth.skip}
        </button>

        {error && <div className="text-danger text-[13px] mt-3 text-center font-semibold">{error}</div>}
      </div>
    </div>
  );
}
