'use client';

import { useState } from 'react';
import type { CalcResults } from '@/types';
import { formatFullVND } from '@/lib/format';
import { MODELS } from '@/lib/constants';
import type { ModelKey } from '@/types';

interface AIAdvisorProps {
  results: CalcResults;
  selectedModel: ModelKey | null;
}

export default function AIAdvisor({ results: r, selectedModel }: AIAdvisorProps) {
  const [apiKey, setApiKey] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const sm = r.stableMonth;
  const modelName = selectedModel ? MODELS[selectedModel].name : 'N/A';

  const handleAsk = async () => {
    if (!apiKey.trim()) { alert('Nhập API key!'); return; }
    setLoading(true);
    setResponse('AI đang phân tích...');

    const prompt = `Phân tích F&B:\nMÔ HÌNH: ${modelName}\nVỐN: ${formatFullVND(r.totalInvestment)}\nDT/tháng (ổn định): ${formatFullVND(sm.netRev)}\nLợi nhuận: ${formatFullVND(sm.netProfit)} (${sm.netMargin.toFixed(1)}%)\nThuê: ${r.rentRatio.toFixed(0)}%, NVL: ${r.cogsPct.toFixed(0)}%, NS: ${r.laborRatio.toFixed(0)}%\nPrime Cost: ${r.primeCost.toFixed(0)}%\nHòa vốn: ${r.bepCustomersDay} khách/ngày, hoàn vốn ${r.paybackMonth || '>12'} tháng\nĐiểm: ${r.score}/100\n\nPhân tích: 1)Tổng quan 2)Điểm mạnh 3)Rủi ro 4)Khuyến nghị cụ thể 5)Mẹo tiết kiệm. Dùng tiếng Việt đời thường.`;

    try {
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: 'Bạn là chuyên gia tư vấn F&B Việt Nam 15 năm. Phân tích bằng tiếng Việt dễ hiểu, có số liệu cụ thể.' },
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
      setResponse(`Lỗi: ${e instanceof Error ? e.message : 'Unknown error'}`);
    }
    setLoading(false);
  };

  return (
    <div>
      <p className="text-[13px] text-text-muted mb-3">Nhập API key OpenAI để nhận phân tích chi tiết.</p>
      <div className="grid grid-cols-2 gap-3.5 max-md:grid-cols-1">
        <div>
          <label className="block font-medium text-[13px] mb-1.5 text-text">OpenAI API Key</label>
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
            {loading ? 'Đang phân tích...' : 'Nhờ AI tư vấn'}
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
