'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="vi">
      <body style={{ fontFamily: 'system-ui, sans-serif', background: '#FFFEF8', color: '#2D3748', margin: 0 }}>
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
          <div style={{ textAlign: 'center', maxWidth: 480 }}>
            <div style={{ fontSize: 64, marginBottom: 16 }}>:(</div>
            <h1 style={{ fontSize: 24, fontWeight: 700, color: '#0F172A', marginBottom: 8 }}>
              Oops, something went wrong
            </h1>
            <p style={{ fontSize: 16, color: '#64748B', marginBottom: 32 }}>
              An unexpected error occurred. Please try again.
            </p>
            <button
              onClick={reset}
              style={{
                background: '#22C55E',
                color: 'white',
                border: 'none',
                borderRadius: 12,
                padding: '12px 32px',
                fontSize: 16,
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
