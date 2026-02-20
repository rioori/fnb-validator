import type { KBSection, KBTableRow, KBStat, KBTimelineStep, KBWarningItem } from '@/types';
import Icon from '@/components/ui/Icon';

interface KBSectionRendererProps {
  section: KBSection;
}

export default function KBSectionRenderer({ section }: KBSectionRendererProps) {
  const heading = section.heading ? (
    <h4 className="text-[12px] font-semibold font-[family-name:var(--font-heading)] uppercase tracking-wider text-text-muted mb-2 mt-3 first:mt-0">
      {section.heading}
    </h4>
  ) : null;

  switch (section.type) {
    case 'text':
      return (
        <>
          {heading}
          <div className="text-[13px] text-text leading-relaxed my-2 clay-sm bg-mint-light px-4 py-3">
            {section.content as string}
          </div>
        </>
      );

    case 'list':
      return (
        <>
          {heading}
          <ul className="space-y-2 my-2">
            {(section.content as string[]).map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-[13px] text-text">
                <span className="text-cta font-bold mt-0.5 shrink-0">{'>'}</span>
                {item}
              </li>
            ))}
          </ul>
        </>
      );

    case 'table':
      return (
        <>
          {heading}
          <div className="space-y-1.5 my-2">
            {(section.content as KBTableRow[]).map((row, i) => (
              <div key={i} className="clay-sm p-3 flex items-center gap-3 text-[13px] max-md:flex-col max-md:items-start max-md:gap-1.5">
                <span className="font-bold font-[family-name:var(--font-heading)] min-w-[160px] max-md:min-w-0">{row.label}</span>
                <span className="clay-pill bg-mint-light !text-[11px] !py-0.5 whitespace-nowrap">{row.range}</span>
                <span className="text-text-muted text-[12px] flex-1">{row.note}</span>
              </div>
            ))}
          </div>
        </>
      );

    case 'stat-grid':
      return (
        <>
          {heading}
          <div className="grid grid-cols-2 gap-2.5 my-2 max-[480px]:grid-cols-1">
            {(section.content as KBStat[]).map((stat, i) => (
              <div key={i} className="clay-sm p-4 text-center">
                <Icon name={stat.icon} size={28} className="mx-auto" />
                <div className="text-[18px] font-bold font-[family-name:var(--font-heading)] text-cta mt-1">{stat.value}</div>
                <div className="text-[12px] font-bold font-[family-name:var(--font-heading)]">{stat.label}</div>
                <div className="text-[11px] text-text-muted mt-1">{stat.desc}</div>
              </div>
            ))}
          </div>
        </>
      );

    case 'timeline':
      return (
        <>
          {heading}
          <div className="relative pl-6 my-2 border-l-[3px] border-border-light ml-3">
            {(section.content as KBTimelineStep[]).map((step, i) => {
              const dotColor = step.status === 'ramp' ? 'bg-warning' : step.status === 'stable' ? 'bg-cta' : 'bg-danger';
              return (
                <div key={i} className="mb-3 last:mb-0 relative">
                  <span className={`absolute -left-[21px] top-3 w-3.5 h-3.5 rounded-full ${dotColor} border-2 border-text`} />
                  <div className="clay-sm p-3">
                    <span className="clay-pill bg-surface3 !text-[10px] !py-0 mb-1 inline-flex">{step.month}</span>
                    <div className="text-[13px] font-bold font-[family-name:var(--font-heading)]">{step.title}</div>
                    <div className="text-[12px] text-text-muted mt-1 leading-relaxed">{step.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      );

    case 'warning-list':
      return (
        <>
          {heading}
          <div className="space-y-2 my-2">
            {(section.content as KBWarningItem[]).map((item, i) => {
              const bg = item.severity === 'critical' ? 'bg-[#FEE2E2] border-danger'
                       : item.severity === 'warning' ? 'bg-primary-light border-text'
                       : 'bg-mint-light border-text';
              return (
                <div key={i} className={`rounded-2xl border ${bg} p-3 flex gap-3`}>
                  <Icon name={item.icon} size={28} className="shrink-0" />
                  <div>
                    <div className="text-[13px] font-bold font-[family-name:var(--font-heading)]">{item.title}</div>
                    <div className="text-[12px] text-text-muted mt-0.5 leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      );

    default:
      return null;
  }
}
