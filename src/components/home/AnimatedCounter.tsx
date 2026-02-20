'use client';

import { useEffect, useState } from 'react';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
}

export default function AnimatedCounter({ value, suffix = '', decimals = 0, duration = 1500 }: AnimatedCounterProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const startTime = performance.now();
    let raf: number;

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo for a satisfying deceleration
      const eased = 1 - Math.pow(1 - progress, 4);
      setCurrent(eased * value);
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value, duration]);

  const display = decimals > 0
    ? current.toFixed(decimals)
    : Math.round(current).toString();

  return <>{display}{suffix}</>;
}
