'use client';

import { useState, useEffect, useRef } from 'react';
import { track } from '@vercel/analytics';
import Icon from '@/components/ui/Icon';
import { useAuth } from '@/hooks/useAuth';
import { useChat } from '@/hooks/useChat';
import { useWizardStore } from '@/hooks/useWizardStore';
import { MODELS } from '@/lib/constants';
import { useModels } from '@/hooks/useModels';
import { formatVND } from '@/lib/format';
import { useTranslation } from '@/i18n/LocaleProvider';

const SUGGESTED_BASE = {
  new: [
    'Dự án này có khả thi không?',
    'Làm sao giảm chi phí để tăng lợi nhuận?',
    'Chiến lược marketing phù hợp?',
  ],
  existing: [
    'Đánh giá sức khỏe kinh doanh của tôi?',
    'Nên tối ưu chi phí nào trước?',
    'Kênh bán nào đang hiệu quả nhất?',
  ],
};

/** Generate context-aware suggested prompts based on wizard results */
function getSmartSuggestions(mode: 'new' | 'existing'): string[] {
  const s = useWizardStore.getState();
  const model = s.selectedModel ? MODELS[s.selectedModel] : null;
  const hints: string[] = [];

  if (mode === 'existing') {
    // Existing mode: diagnostic-focused
    if (s.cogsPct > 35) hints.push(`Chi phí nguyên liệu ${s.cogsPct}% — làm sao giảm xuống?`);
    if (s.rent > 0 && s.actualMonthlyRevenue > 0) {
      const rentPct = (s.rent / s.actualMonthlyRevenue) * 100;
      if (rentPct > 20) hints.push(`Tiền thuê chiếm ${rentPct.toFixed(0)}% doanh thu — có quá cao không?`);
    }
    if (s.chDelivery > 30) hints.push(`Delivery chiếm ${s.chDelivery}% — tối ưu phí hoa hồng thế nào?`);
    return hints.length >= 2 ? hints.slice(0, 3) : [...hints, ...SUGGESTED_BASE.existing].slice(0, 3);
  }

  // New mode: planning-focused
  if (model) {
    const benchCogs = model.benchmarks?.food_cost;
    if (benchCogs && s.cogsPct > benchCogs[1]) {
      hints.push(`Chi phí NVL ${s.cogsPct}% cao hơn chuẩn ${model.name} — giảm bằng cách nào?`);
    }
  }
  if (s.chDelivery > 40) hints.push(`Delivery ${s.chDelivery}% doanh thu — phí hoa hồng có ăn mòn lợi nhuận?`);
  const staffTotal = s.getStaffTotal();
  if (staffTotal > 0 && s.rent > 0 && staffTotal > s.rent * 1.5) {
    hints.push('Chi phí nhân sự đang cao — có nên tối ưu ca làm việc?');
  }
  return hints.length >= 2 ? hints.slice(0, 3) : [...hints, ...SUGGESTED_BASE.new].slice(0, 3);
}

function buildBusinessContext(): string | undefined {
  const s = useWizardStore.getState();
  if (!s.selectedModel) return undefined;

  const model = MODELS[s.selectedModel];
  const cityMap: Record<string, string> = { hcm: 'TP.HCM', hanoi: 'Hà Nội', danang: 'Đà Nẵng', other: 'Khác' };
  const areaMap: Record<string, string> = { center: 'Trung tâm', suburb: 'Ngoại thành', residential: 'Khu dân cư', office: 'Khu văn phòng' };

  const staffTotal = s.getStaffTotal();

  const lines: (string | null)[] = [
    s.projectName ? `Tên dự án: ${s.projectName}` : null,
    `Chế độ: ${s.businessMode === 'existing' ? 'Đang kinh doanh' : 'Dự án mới'}`,
    `Mô hình: ${model.name}`,
    `Thành phố: ${cityMap[s.city] || s.city}, Khu vực: ${areaMap[s.area] || s.area}`,
    `Diện tích: ${s.sqm}m², Số chỗ ngồi: ${s.seats}`,
    `Hoạt động: ${s.daysPerWeek} ngày/tuần`,
    `Kênh bán: Dine-in ${s.chDinein}%, Takeaway ${s.chTakeaway}%, Delivery ${s.chDelivery}%`,
    `Tiền thuê: ${formatVND(s.rent)}/tháng`,
    `Nhân sự: ${s.staff.map(r => `${r.pos} x${r.count} (${formatVND(r.salary)})`).join(', ')} — Tổng: ${formatVND(staffTotal)}/tháng`,
    `COGS: ${s.cogsPct}%, Hao hụt: ${s.wastePct}%, Hoa hồng delivery: ${s.deliveryCommPct}%`,
    `BHXH: ${s.bhxhOn ? 'Có' : 'Không'}`,
  ];

  if (s.businessMode === 'existing') {
    lines.push(
      `Doanh thu thực tế/tháng: ${formatVND(s.actualMonthlyRevenue)}`,
      `Đã kinh doanh: ${s.monthsOperating} tháng`,
    );
    if (s.menuItems.length > 0) {
      lines.push(`Thực đơn: ${s.menuItems.map(m => `${m.name} (giá ${formatVND(m.price)}, vốn ${formatVND(m.costPerItem)}, bán ${m.monthlySold}/tháng)`).join('; ')}`);
    }
    const cc = s.channelCosts;
    lines.push(`Chi phí kênh: Đóng gói ${formatVND(cc.packagingPerOrder)}/đơn, Grab ${cc.grabCommPct}%, Shopee ${cc.shopeeCommPct}%, Tự giao ${cc.ownDeliveryPct}%`);
  } else {
    const avgTicket = s.getAvgTicket();
    const custWD = s.getCustWeekday();
    const custWE = s.getCustWeekend();
    lines.push(
      `Ngân sách: ${formatVND(s.budget)}`,
      `Tổng vốn đầu tư: ${formatVND(s.getTotalInvestment())}`,
      `Ticket trung bình: ${formatVND(avgTicket)}`,
      `Khách/ngày: Ngày thường ~${custWD}, Cuối tuần ~${custWE}`,
    );
  }

  return lines.filter(Boolean).join('\n');
}

/** Lightweight inline chat for embedding in dashboards */
export default function InlineChat() {
  const { t, locale } = useTranslation();
  const { user } = useAuth();
  const {
    messages,
    isStreaming,
    error,
    todayUsed,
    sendMessage,
    checkQuota,
    clearError,
    setActiveSession,
  } = useChat();

  const models = useModels();
  const businessMode = useWizardStore((s) => s.businessMode);
  const selectedModel = useWizardStore((s) => s.selectedModel);

  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const initializedRef = useRef(false);

  // Start a fresh session for inline chat
  useEffect(() => {
    if (user?.id && !initializedRef.current) {
      initializedRef.current = true;
      setActiveSession(null); // fresh chat
      checkQuota(user.id);
    }
  }, [user?.id, setActiveSession, checkQuota]);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 100) + 'px';
    }
  }, [input]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed || isStreaming || !user?.id) return;
    setInput('');
    sendMessage(trimmed, user.id, buildBusinessContext(), locale);
    track('inline_chat_send', { mode: businessMode, model: selectedModel || 'unknown' });
  };

  if (!user) {
    return (
      <div className="text-center py-6 text-text-muted text-sm">
        <Icon name="chat" size={32} className="mx-auto mb-2 opacity-40" />
        <p>{t.common.auth.loginForAI}</p>
      </div>
    );
  }

  const prompts = getSmartSuggestions(businessMode);

  return (
    <div>
      {/* Context badge */}
      {selectedModel && (
        <div className="flex items-center gap-1.5 mb-2">
          <span className="text-[11px] text-success font-semibold">
            ✓ AI đã nắm thông tin {models[selectedModel]?.name || 'dự án'}
          </span>
        </div>
      )}

      {/* Messages */}
      <div className="max-h-[300px] overflow-y-auto space-y-2 mb-3">
        {messages.length === 0 && !isStreaming ? (
          <div className="text-center py-4">
            <p className="text-text-muted text-xs mb-3">Hỏi AI về dự án của bạn:</p>
            <div className="flex flex-wrap gap-1.5 justify-center">
              {prompts.map((p) => (
                <button
                  key={p}
                  onClick={() => { setInput(p); textareaRef.current?.focus(); }}
                  className="text-[11px] px-3 py-1.5 rounded-full border border-border-light hover:border-text hover:bg-surface3 transition-colors cursor-pointer"
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <>
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] px-3 py-2 rounded-xl text-[13px] leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-pastel-blue text-text rounded-br-sm'
                      : 'bg-surface3 text-text rounded-bl-sm'
                  }`}
                >
                  <InlineMessageContent content={msg.content} />
                  {msg.role === 'assistant' && !msg.content && isStreaming && (
                    <span className="inline-flex gap-1 py-1">
                      <span className="w-1.5 h-1.5 bg-text-light rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1.5 h-1.5 bg-text-light rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1.5 h-1.5 bg-text-light rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </span>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      {/* Error */}
      {error && (
        <div className="px-3 py-1.5 bg-danger/10 text-danger text-xs font-semibold flex items-center justify-between rounded-lg mb-2">
          <span>{error}</span>
          <button onClick={clearError} className="text-danger hover:underline cursor-pointer text-[11px]">✕</button>
        </div>
      )}

      {/* Input */}
      <div className="flex gap-2 items-end">
        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
          placeholder="Hỏi về dự án..."
          rows={1}
          className="flex-1 clay-input resize-none text-[13px] !py-2"
          disabled={isStreaming}
        />
        <button
          onClick={handleSend}
          disabled={!input.trim() || isStreaming}
          className="clay-btn clay-btn-primary !px-3.5 !py-2 disabled:opacity-40 disabled:cursor-not-allowed shrink-0 text-sm"
        >
          {isStreaming ? '...' : '→'}
        </button>
      </div>

      {/* Quota */}
      <div className="text-right mt-1">
        <span className={`text-[10px] font-semibold ${todayUsed >= 5 ? 'text-danger' : todayUsed >= 4 ? 'text-warning' : 'text-text-light'}`}>
          {todayUsed}/5
        </span>
      </div>
    </div>
  );
}

/** Simple message renderer */
function InlineMessageContent({ content }: { content: string }) {
  if (!content) return null;
  const lines = content.split('\n');
  return (
    <div className="space-y-0.5">
      {lines.map((line, i) => {
        if (!line.trim()) return <br key={i} />;
        if (line.match(/^[-•*]\s/)) {
          return (
            <div key={i} className="flex gap-1 items-start">
              <span className="text-text-muted">•</span>
              <span>{boldify(line.replace(/^[-•*]\s/, ''))}</span>
            </div>
          );
        }
        if (line.match(/^#{1,3}\s/)) {
          return <p key={i} className="font-bold mt-0.5">{boldify(line.replace(/^#{1,3}\s/, ''))}</p>;
        }
        return <p key={i}>{boldify(line)}</p>;
      })}
    </div>
  );
}

function boldify(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) =>
    p.startsWith('**') && p.endsWith('**')
      ? <strong key={i}>{p.slice(2, -2)}</strong>
      : <span key={i}>{p}</span>
  );
}
