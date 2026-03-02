export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="font-[var(--font-heading)] text-8xl font-bold text-cta/20 mb-4">404</div>
        <h1 className="font-[var(--font-heading)] text-2xl font-bold text-slate-900 mb-2">
          Page not found
        </h1>
        <p className="text-text-muted mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-block bg-cta hover:bg-cta-hover text-white font-semibold px-6 py-3 rounded-xl transition-colors"
        >
          Go to homepage
        </a>
      </div>
    </div>
  );
}
