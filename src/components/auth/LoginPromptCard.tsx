'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useAuth } from '@/hooks/useAuth';
import { useTranslation } from '@/i18n/LocaleProvider';
import Icon from '@/components/ui/Icon';

interface LoginPromptCardProps {
  /** Main heading, e.g. "Đăng nhập để sử dụng Hỏi đáp AI" */
  heading: string;
  /** Short description */
  description: string;
  /** Show premium feature list with checkmarks */
  showFeatures?: boolean;
  /** Called after successful login/signup */
  onSuccess?: () => void;
  /** Show a skip/close button */
  onSkip?: () => void;
  /** Extra className for the wrapper */
  className?: string;
}

export default function LoginPromptCard({
  heading,
  description,
  showFeatures = true,
  onSuccess,
  onSkip,
  className = '',
}: LoginPromptCardProps) {
  const { t } = useTranslation();
  const { user, login, signup, error, loading } = useAuth();
  const [tab, setTab] = useState<'login' | 'signup'>('signup');
  const [id, setId] = useState('');
  const [pass, setPass] = useState('');

  // Call onSuccess when user logs in
  useEffect(() => {
    if (user && onSuccess) onSuccess();
  }, [user, onSuccess]);

  if (user) return null;

  const handleSubmit = () => {
    if (tab === 'login') login(id, pass);
    else signup(id, pass);
  };

  return (
    <div className={`clay-card-static bg-primary-light p-6 max-w-[420px] mx-auto animate-fade-in-up ${className}`}>
      <Image src="/logo.png" alt="Validator.vn" width={56} height={56} className="mx-auto mb-3" />

      <h3 className="text-[16px] font-bold text-text font-[family-name:var(--font-heading)] text-center mb-1">
        {heading}
      </h3>
      <p className="text-[13px] text-text-muted text-center mb-4">{description}</p>

      {/* Premium feature checkmarks */}
      {showFeatures && (
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1.5 mb-5">
          {t.common.auth.premiumFeatures.map((feat: string) => (
            <span key={feat} className="inline-flex items-center gap-1 text-[12px] text-text-muted">
              <Icon name="check" size={14} className="!border-0 !shadow-none !bg-transparent text-success" />
              {feat}
            </span>
          ))}
        </div>
      )}

      {/* Tabs */}
      <div className="flex mb-4 rounded-2xl p-1 gap-1 border-2 border-border-light bg-surface3">
        <div
          onClick={() => setTab('signup')}
          className={`flex-1 py-2 text-center font-bold text-[13px] cursor-pointer rounded-xl font-[family-name:var(--font-heading)] transition-all ${tab === 'signup' ? 'text-white bg-text' : 'text-text-muted hover:text-text'}`}
        >{t.common.auth.signup}</div>
        <div
          onClick={() => setTab('login')}
          className={`flex-1 py-2 text-center font-bold text-[13px] cursor-pointer rounded-xl font-[family-name:var(--font-heading)] transition-all ${tab === 'login' ? 'text-white bg-text' : 'text-text-muted hover:text-text'}`}
        >{t.common.auth.login}</div>
      </div>

      {/* Form */}
      <div className="mb-3">
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder={t.common.auth.phone}
          className="w-full clay-input text-[13px] mb-2 font-[family-name:var(--font-body)]"
        />
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
          placeholder={t.common.auth.password}
          className="w-full clay-input text-[13px] font-[family-name:var(--font-body)]"
        />
      </div>

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full clay-btn clay-btn-primary text-[13px] disabled:opacity-50"
      >
        {tab === 'signup' ? `${t.common.auth.signup} →` : `${t.common.auth.login} →`}
      </button>

      {onSkip && (
        <button
          onClick={onSkip}
          className="w-full mt-2 text-[12px] text-text-muted hover:text-text text-center py-1.5 cursor-pointer transition-colors"
        >
          {t.common.auth.skip}
        </button>
      )}

      {error && <p className="text-danger text-[12px] mt-2 text-center font-semibold">{error}</p>}

      <p className="text-[11px] text-text-light text-center mt-3">
        {t.common.auth.unlockDesc}
      </p>
    </div>
  );
}
