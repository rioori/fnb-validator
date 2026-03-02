'use client';

import { useSearchParams } from 'next/navigation';
import { useTranslation } from '@/i18n/LocaleProvider';
import { Suspense } from 'react';

function UnsubscribeContent() {
  const searchParams = useSearchParams();
  const status = searchParams.get('status');
  const { t } = useTranslation();
  const u = t.common.unsubscribe;

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="clay-card max-w-md w-full p-8 text-center">
        {status === 'success' ? (
          <>
            <div className="text-4xl mb-4">✉️</div>
            <h1 className="text-xl font-bold text-slate-800 mb-2">{u.title}</h1>
            <p className="text-slate-600 mb-2">{u.success}</p>
            <p className="text-slate-500 text-sm">{u.desc}</p>
          </>
        ) : (
          <>
            <div className="text-4xl mb-4">⚠️</div>
            <h1 className="text-xl font-bold text-slate-800 mb-2">{u.title}</h1>
            <p className="text-slate-600">{u.invalidToken}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default function UnsubscribePage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">...</div>}>
      <UnsubscribeContent />
    </Suspense>
  );
}
