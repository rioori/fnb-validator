'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { track } from '@vercel/analytics';
import { useAuth } from '@/hooks/useAuth';
import { useTranslation } from '@/i18n/LocaleProvider';
import { supabase } from '@/lib/supabase';
import { formatVND } from '@/lib/format';

interface ScenarioSummary {
  id: string;
  name: string;
  model_key: string | null;
  updated_at: string;
  created_at: string;
  data: {
    rent?: number;
    cogsPct?: number;
    projectName?: string;
  } | null;
}

const COPY = {
  vi: {
    heading: 'Sổ tay của bạn — theo dõi diễn biến',
    subline: 'Khi anh/chị cập nhật số liệu, Validator sẽ hiện đúng chỗ nào đang cải thiện, chỗ nào đang xấu đi.',
    scenariosLabel: 'kịch bản đã lưu',
    latestUpdated: 'Vừa cập nhật',
    modelLabel: 'Mô hình',
    rentLabel: 'Tiền thuê',
    cogsLabel: 'COGS',
    createdLabel: 'Tạo',
    daysAgo: (n: number) => (n === 0 ? 'hôm nay' : n === 1 ? 'hôm qua' : `${n} ngày trước`),
    askAi: 'Hỏi AI so sánh 2 kịch bản mới nhất →',
  },
  en: {
    heading: 'Your playbook — track progress',
    subline: 'As you update numbers, Validator shows what improved and what got worse.',
    scenariosLabel: 'saved scenarios',
    latestUpdated: 'Just updated',
    modelLabel: 'Model',
    rentLabel: 'Rent',
    cogsLabel: 'COGS',
    createdLabel: 'Created',
    daysAgo: (n: number) => (n === 0 ? 'today' : n === 1 ? '1 day ago' : `${n} days ago`),
    askAi: 'Ask AI to compare latest 2 scenarios →',
  },
} as const;

function daysSince(iso: string): number {
  const then = new Date(iso).getTime();
  const now = Date.now();
  return Math.max(0, Math.floor((now - then) / (24 * 60 * 60 * 1000)));
}

export default function ReturnUserMonitor() {
  const { user } = useAuth();
  const { locale } = useTranslation();
  const t = COPY[locale === 'en' ? 'en' : 'vi'];
  const [scenarios, setScenarios] = useState<ScenarioSummary[] | null>(null);

  useEffect(() => {
    if (!user?.id) return;
    let cancelled = false;
    supabase
      .from('scenarios')
      .select('id,name,model_key,updated_at,created_at,data')
      .eq('user_id', user.id)
      .order('updated_at', { ascending: false })
      .limit(5)
      .then(({ data }) => {
        if (cancelled) return;
        setScenarios((data ?? []) as ScenarioSummary[]);
      });
    return () => { cancelled = true; };
  }, [user?.id]);

  if (!user || !scenarios) return null;

  // Only show for return users (≥2 scenarios OR has been updated at least once)
  const hasUpdatedAny = scenarios.some((s) => s.updated_at !== s.created_at);
  if (scenarios.length < 2 && !hasUpdatedAny) return null;

  const [latest, previous] = scenarios;
  const canCompare = !!previous;

  const handleAskCompare = () => {
    const q = locale === 'vi'
      ? `So sánh 2 kịch bản gần nhất của tôi: "${latest.name}" (cập nhật ${daysSince(latest.updated_at)} ngày trước) vs "${previous.name}". Chỗ nào cải thiện, chỗ nào xấu đi?`
      : `Compare my latest 2 scenarios: "${latest.name}" (updated ${daysSince(latest.updated_at)}d ago) vs "${previous.name}". What improved, what got worse?`;
    try {
      sessionStorage.setItem('ai_chat_seed_question', q);
    } catch {}
    track('return_user_compare_click', { scenario_count: scenarios.length });
    window.location.href = `/${locale === 'en' ? 'en/' : ''}?view=ai-chat`;
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="clay-card-static bg-pastel-blue p-4 mb-3"
    >
      <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
        <div className="flex-1 min-w-[220px]">
          <h3 className="text-[14px] font-bold text-text font-[family-name:var(--font-heading)] leading-tight">
            {t.heading}
          </h3>
          <p className="text-[11px] text-text-muted leading-snug mt-1">{t.subline}</p>
        </div>
        <div className="text-right">
          <div className="text-[24px] font-extrabold text-cta tabular-nums leading-none font-[family-name:var(--font-heading)]">
            {scenarios.length}
          </div>
          <p className="text-[10px] text-text-muted uppercase tracking-wider">{t.scenariosLabel}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 max-md:grid-cols-1">
        {scenarios.slice(0, 2).map((s, i) => (
          <div key={s.id} className="clay-sm bg-white p-3">
            <div className="flex items-center justify-between mb-1.5">
              <p className="text-[11px] font-bold text-text truncate">{s.name}</p>
              {i === 0 && (
                <span className="text-[9px] font-bold uppercase tracking-wider text-cta bg-mint-light rounded-full px-2 py-0.5">
                  {t.latestUpdated}
                </span>
              )}
            </div>
            <div className="grid grid-cols-3 gap-1 text-[10px] text-text-muted">
              <div>
                <div className="uppercase tracking-wider text-[9px]">{t.modelLabel}</div>
                <div className="text-text font-semibold truncate">{s.model_key || '—'}</div>
              </div>
              <div>
                <div className="uppercase tracking-wider text-[9px]">{t.rentLabel}</div>
                <div className="text-text font-semibold">{s.data?.rent ? formatVND(s.data.rent) : '—'}</div>
              </div>
              <div>
                <div className="uppercase tracking-wider text-[9px]">{t.cogsLabel}</div>
                <div className="text-text font-semibold">{s.data?.cogsPct != null ? `${s.data.cogsPct}%` : '—'}</div>
              </div>
            </div>
            <p className="text-[10px] text-text-light mt-1.5">
              {t.createdLabel}: {t.daysAgo(daysSince(s.created_at))}
            </p>
          </div>
        ))}
      </div>

      {canCompare && (
        <button
          onClick={handleAskCompare}
          className="mt-3 w-full text-[12px] font-semibold text-cta hover:underline text-center py-2"
        >
          {t.askAi}
        </button>
      )}
    </motion.section>
  );
}
