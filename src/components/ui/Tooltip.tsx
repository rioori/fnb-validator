'use client';

interface TooltipProps {
  text: string;
}

export default function Tooltip({ text }: TooltipProps) {
  return (
    <span
      className="group relative inline-flex items-center justify-center w-5 h-5 rounded-full border-2 border-text bg-secondary text-text-muted text-[10px] font-bold cursor-help align-middle ml-1 transition-all hover:bg-secondary-light"
    >
      ?
      <span className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bottom-[calc(100%+10px)] left-1/2 -translate-x-1/2 bg-text text-white px-4 py-3 rounded-xl text-xs font-normal w-[260px] z-50 leading-relaxed shadow-lg transition-all whitespace-normal">
        {text}
        <span className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-text" />
      </span>
    </span>
  );
}
