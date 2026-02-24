'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import type { KBCategory, KBTopic } from '@/types';

const CATEGORY_KEYS: KBCategory[] = ['cost', 'operations', 'strategy', 'legal'];

const CATEGORY_ICONS: Record<KBCategory, string> = {
  cost: 'calculator',
  operations: 'checklist',
  strategy: 'bolt',
  legal: 'shield',
};

interface ExploreLabels {
  stories: string;
  trends: string;
}

interface KBSidebarProps {
  topics: KBTopic[];
  categoryLabels: Record<KBCategory, string>;
  localePrefixedPaths: Record<string, string>;
  exploreLabels: ExploreLabels;
  homeHref: string;
  onNavigate?: () => void;
}

export default function KBSidebar({
  topics,
  categoryLabels,
  localePrefixedPaths,
  exploreLabels,
  homeHref,
  onNavigate,
}: KBSidebarProps) {
  const pathname = usePathname();
  // Extract current slug from path like /kien-thuc/food-cost or /en/kien-thuc/food-cost
  const segments = pathname.split('/');
  const currentSlug = segments[segments.length - 1];

  const grouped = CATEGORY_KEYS
    .map((key) => ({
      key,
      label: categoryLabels[key],
      icon: CATEGORY_ICONS[key],
      items: topics.filter((t) => t.category === key),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <nav className="space-y-4">
      {grouped.map(({ key, label, icon, items }) => (
        <div key={key}>
          <div className="flex items-center gap-1.5 mb-1.5 px-2">
            <Icon
              name={icon}
              size={14}
              className="!border-0 !shadow-none !bg-transparent opacity-50"
            />
            <span className="text-[11px] font-bold font-[family-name:var(--font-heading)] uppercase tracking-wider text-text-muted">
              {label}
            </span>
          </div>
          <ul className="space-y-0.5">
            {items.map((topic) => {
              const isActive = topic.slug === currentSlug;
              return (
                <li key={topic.id}>
                  <Link
                    href={localePrefixedPaths[topic.slug] || `/kien-thuc/${topic.slug}`}
                    onClick={onNavigate}
                    className={`block text-[13px] leading-snug px-3 py-2 rounded-xl transition-all ${
                      isActive
                        ? 'bg-mint-light/60 text-cta font-semibold border-l-3 border-cta'
                        : 'text-text-muted hover:text-text hover:bg-surface3/50'
                    }`}
                  >
                    {topic.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}

      {/* Explore: Stories & Trends */}
      <div className="border-t border-border-light pt-3 mt-3 space-y-1">
        <Link
          href={`${homeHref}?view=stories`}
          onClick={onNavigate}
          className="flex items-center gap-2 px-3 py-2 rounded-xl text-[13px] text-text-muted hover:text-text hover:bg-pastel-gold/40 transition-all"
        >
          <Icon name="stories" size={14} className="!border-0 !shadow-none !bg-transparent opacity-60" />
          {exploreLabels.stories}
        </Link>
        <Link
          href={`${homeHref}?view=trends`}
          onClick={onNavigate}
          className="flex items-center gap-2 px-3 py-2 rounded-xl text-[13px] text-text-muted hover:text-text hover:bg-pastel-blue/40 transition-all"
        >
          <Icon name="trendingup" size={14} className="!border-0 !shadow-none !bg-transparent opacity-60" />
          {exploreLabels.trends}
        </Link>
      </div>
    </nav>
  );
}
