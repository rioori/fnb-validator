interface SectionCardProps {
  title?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export default function SectionCard({ title, children, className = '' }: SectionCardProps) {
  return (
    <div className={`clay-card-static p-4 mb-4 ${className}`}>
      {title && (
        <h3 className="text-[13px] mb-3 flex items-center gap-2 font-semibold font-[family-name:var(--font-heading)] uppercase tracking-wider text-text-muted border-b border-border-light pb-2.5">
          {title}
        </h3>
      )}
      {children}
    </div>
  );
}
