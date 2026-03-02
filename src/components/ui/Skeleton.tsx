'use client';

/** Animated skeleton placeholder for loading states */
export default function Skeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`animate-pulse rounded-lg bg-surface3 ${className}`} />
  );
}

/** Dashboard loading skeleton — matches KPI + chart layout */
export function DashboardSkeleton() {
  return (
    <div className="space-y-4">
      {/* Score ring area */}
      <div className="clay-card-static p-4">
        <Skeleton className="h-4 w-32 mb-3" />
        <div className="flex justify-center mb-3">
          <Skeleton className="w-[80px] h-[80px] !rounded-full" />
        </div>
        <div className="grid grid-cols-4 gap-3 max-md:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="clay-sm p-3">
              <Skeleton className="h-3 w-20 mb-2" />
              <Skeleton className="h-6 w-16" />
            </div>
          ))}
        </div>
      </div>

      {/* Chart sections */}
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="clay-card-static p-4">
          <Skeleton className="h-4 w-40 mb-3" />
          <Skeleton className="h-[200px] w-full" />
        </div>
      ))}
    </div>
  );
}

/** Wizard step loading skeleton */
export function StepSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-5 w-48 mb-2" />
      <Skeleton className="h-3 w-64 mb-4" />
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="clay-sm p-4">
          <Skeleton className="h-3 w-24 mb-2" />
          <Skeleton className="h-10 w-full" />
        </div>
      ))}
    </div>
  );
}
