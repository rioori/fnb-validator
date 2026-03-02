'use client';

import { useState, useRef, useEffect } from 'react';

interface TooltipProps {
  text: string;
}

export default function Tooltip({ text }: TooltipProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  // Close on outside click/tap
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [open]);

  return (
    <span
      ref={ref}
      className="relative inline-flex items-center justify-center w-5 h-5 rounded-full border-2 border-text bg-secondary text-text-muted text-[10px] font-bold cursor-help align-middle ml-1 transition-all hover:bg-secondary-light"
      onClick={(e) => { e.stopPropagation(); setOpen(!open); }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      ?
      <span
        className={`absolute bottom-[calc(100%+10px)] left-1/2 -translate-x-1/2 bg-text text-white px-4 py-3 rounded-xl text-xs font-normal w-[260px] z-50 leading-relaxed shadow-lg whitespace-normal transition-opacity ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        {text}
        <span className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-text" />
      </span>
    </span>
  );
}
