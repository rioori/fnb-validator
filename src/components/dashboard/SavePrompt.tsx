'use client';

import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useScenarios } from '@/hooks/useScenarios';
import { useWizardStore } from '@/hooks/useWizardStore';
import { MODELS } from '@/lib/constants';
import Icon from '@/components/ui/Icon';

export default function SavePrompt() {
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
      const modelName = store.selectedModel ? MODELS[store.selectedModel].name : 'Kịch bản mới';
      setLoading(true);
      await save(user.id, modelName, store.selectedModel, store.collectAll());
      setLoading(false);
      setSaved(true);
    };

    if (saved) {
      return (
        <div className="clay-card-static bg-mint-light p-4 mb-3 text-center">
          <Icon name="check" size={28} className="mx-auto" />
          <p className="text-[13px] font-semibold text-text mt-1">Đã lưu kịch bản thành công!</p>
          <p className="text-[12px] text-text-muted mt-0.5">Bạn có thể chọn lại từ menu phía trên.</p>
        </div>
      );
    }

    return (
      <div className="clay-card-static bg-secondary-light p-4 mb-3 flex items-center justify-between max-md:flex-col max-md:gap-3">
        <div>
          <p className="text-[13px] font-bold text-text font-[family-name:var(--font-heading)]"><Icon name="save" size={18} className="inline-flex !border-0 !shadow-none !bg-transparent align-text-bottom" /> Lưu kết quả này?</p>
          <p className="text-[12px] text-text-muted">Lưu lại để xem lại hoặc so sánh sau.</p>
        </div>
        <button
          onClick={handleSave}
          disabled={loading}
          className="clay-btn clay-btn-primary text-[13px] shrink-0"
        >
          {loading ? 'Đang lưu...' : 'Lưu kịch bản'}
        </button>
      </div>
    );
  }

  // Guest — show inline auth + save
  if (saved) {
    return (
      <div className="clay-card-static bg-mint-light p-4 mb-3 text-center">
        <Icon name="check" size={28} className="mx-auto" />
        <p className="text-[13px] font-semibold text-text mt-1">Tạo tài khoản & lưu thành công!</p>
        <p className="text-[12px] text-text-muted mt-0.5">Lần sau đăng nhập lại để xem kịch bản này.</p>
      </div>
    );
  }

  const handleSubmit = async () => {
    if (!id || !pass) { setError('Nhập SĐT/email và mật khẩu'); return; }
    if (mode === 'signup' && pass.length < 6) { setError('Mật khẩu tối thiểu 6 ký tự'); return; }
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
        setError(useAuth.getState().error || 'Đăng nhập thất bại');
        setLoading(false);
        return;
      }

      // Auto-save after auth
      const modelName = store.selectedModel ? MODELS[store.selectedModel].name : 'Kịch bản mới';
      await save(authUser.id, modelName, store.selectedModel, store.collectAll());
      setSaved(true);
    } catch {
      setError('Có lỗi xảy ra');
    }
    setLoading(false);
  };

  return (
    <div className="clay-card-static bg-primary-light p-4 mb-3">
      <div className="flex items-start gap-3 mb-3">
        <Icon name="save" size={32} className="shrink-0" />
        <div>
          <p className="text-[14px] font-bold text-text font-[family-name:var(--font-heading)]">Lưu kết quả để xem lại sau?</p>
          <p className="text-[12px] text-text-muted mt-0.5">
            {mode === 'signup' ? 'Tạo tài khoản chỉ mất 5 giây — chỉ cần SĐT + mật khẩu.' : 'Đăng nhập để lưu kịch bản.'}
          </p>
        </div>
      </div>

      <div className="flex gap-2 mb-2 max-md:flex-col">
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="SĐT hoặc email"
          className="clay-input text-[13px] flex-1 min-w-0"
        />
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder={mode === 'signup' ? 'Tạo mật khẩu (6+ ký tự)' : 'Mật khẩu'}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
          className="clay-input text-[13px] flex-1 min-w-0"
        />
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="clay-btn clay-btn-primary text-[13px] shrink-0 disabled:opacity-50"
        >
          {loading ? '...' : mode === 'signup' ? 'Lưu ngay →' : 'Đăng nhập & Lưu →'}
        </button>
      </div>

      {error && <p className="text-danger text-[12px] font-semibold mb-2">{error}</p>}

      <p className="text-[11px] text-text-muted">
        {mode === 'signup' ? (
          <>Đã có tài khoản? <button onClick={() => setMode('login')} className="underline font-semibold text-text">Đăng nhập</button></>
        ) : (
          <>Chưa có tài khoản? <button onClick={() => setMode('signup')} className="underline font-semibold text-text">Đăng ký mới</button></>
        )}
      </p>
    </div>
  );
}
