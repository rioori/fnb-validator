'use client';

import { useState } from 'react';
import type { CalcResults } from '@/types';
import { formatFullVND } from '@/lib/format';
import { useModels } from '@/hooks/useModels';
import type { ModelKey } from '@/types';
import { useTranslation, tpl } from '@/i18n/LocaleProvider';

interface AIAdvisorProps {
  results: CalcResults;
  selectedModel: ModelKey | null;
}

export default function AIAdvisor({ results: r, selectedModel }: AIAdvisorProps) {
  const { t } = useTranslation();
  const [apiKey, setApiKey] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const sm = r.stableMonth;
  const models = useModels();
  const modelName = selectedModel ? models[selectedModel].name : 'N/A';

  const handleAsk = async () => {
    if (!apiKey.trim()) { alert(t.dashboard.advisor.enterApiKey); return; }
    setLoading(true);
    setResponse(t.dashboard.advisor.aiAnalyzing);

    const prompt = tpl(t.dashboard.advisor.userPromptTemplate, {
      modelName,
      investment: formatFullVND(r.totalInvestment),
      revenue: formatFullVND(sm.netRev),
      profit: formatFullVND(sm.netProfit),
      netMargin: sm.netMargin.toFixed(1),
      rentPct: r.rentRatio.toFixed(0),
      cogsPct: r.cogsPct.toFixed(0),
      laborPct: r.laborRatio.toFixed(0),
      primeCost: r.primeCost.toFixed(0),
      bepCust: r.bepCustomersDay,
      payback: r.paybackMonth || '>12',
      score: r.score,
    });

    try {
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: t.dashboard.advisor.systemPrompt },
            { role: 'user', content: prompt },
          ],
          temperature: 0.7,
          max_tokens: 2000,
        }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error.message);
      setResponse(data.choices[0].message.content);
    } catch (e: unknown) {
      setResponse(`${t.dashboard.advisor.errorPrefix} ${e instanceof Error ? e.message : 'Unknown error'}`);
    }
    setLoading(false);
  };

  return (
    <div>
      <p className="text-[13px] text-text-muted mb-3">{t.dashboard.advisor.description}</p>
      <div className="grid grid-cols-2 gap-3.5 max-md:grid-cols-1">
        <div>
          <label className="block font-medium text-[13px] mb-1.5 text-text">{t.dashboard.advisor.apiKeyLabel}</label>
          <input
            type="text"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="sk-..."
            className="w-full clay-input font-[family-name:var(--font-body)] text-text"
          />
        </div>
        <div className="flex items-end">
          <button
            onClick={handleAsk}
            disabled={loading}
            className="clay-btn clay-btn-accent disabled:opacity-50"
          >
            {loading ? t.dashboard.advisor.analyzing : t.dashboard.advisor.askAI}
          </button>
        </div>
      </div>
      {response && (
        <div className="clay-sm bg-secondary-light p-5 mt-3 whitespace-pre-wrap text-sm leading-relaxed animate-fade-in-up">
          {response}
        </div>
      )}
    </div>
  );
}
