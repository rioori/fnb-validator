'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Route error:', error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-4">:(</div>
        <h1 className="font-[var(--font-heading)] text-2xl font-bold text-slate-900 mb-2">
          Oops, something went wrong
        </h1>
        <p className="text-text-muted mb-8">
          An unexpected error occurred. Please try again or go back to the homepage.
        </p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={reset}
            className="bg-cta hover:bg-cta-hover text-white font-semibold px-6 py-3 rounded-xl transition-colors cursor-pointer"
          >
            Try again
          </button>
          <a
            href="/"
            className="bg-surface3 hover:bg-surface2 text-text font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Homepage
          </a>
        </div>
      </div>
    </div>
  );
}
