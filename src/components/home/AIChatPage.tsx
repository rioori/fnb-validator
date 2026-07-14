'use client';

import { useState, useEffect, useRef } from 'react';
import { track } from '@vercel/analytics';
import Icon from '@/components/ui/Icon';
import LoginPromptCard from '@/components/auth/LoginPromptCard';
import { useAuth } from '@/hooks/useAuth';
import { useTranslation } from '@/i18n/LocaleProvider';
import { useChat } from '@/hooks/useChat';
import { useWizardStore } from '@/hooks/useWizardStore';
import { useScenarios } from '@/hooks/useScenarios';
import { MODELS } from '@/lib/constants';
import { useModels } from '@/hooks/useModels';
import { formatVND } from '@/lib/format';
import { tpl } from '@/i18n/LocaleProvider';

const GENERIC_PROMPTS = [
  'Mở quán cà phê nhỏ cần bao nhiêu vốn?',
  'So sánh mô hình trà sữa và cloud kitchen?',
  'Chi phí thuê mặt bằng ở Quận 1 HCM hiện nay?',
  'Chiến lược marketing cho quán mới mở?',
  'Làm sao tính break-even cho nhà hàng?',
  'Xu hướng F&B 2025-2026 nổi bật nhất?',
];

const CONTEXTUAL_PROMPTS = [
  'Phân tích dự án của tôi có khả thi không?',
  'Chi phí thuê mặt bằng của tôi có hợp lý không?',
  'Làm sao tối ưu chi phí nhân sự?',
  'Chiến lược marketing phù hợp cho mô hình này?',
  'Dự kiến bao lâu hoà vốn?',
  'Rủi ro lớn nhất cần lưu ý là gì?',
];

function buildBusinessContext(): string | undefined {
  const s = useWizardStore.getState();
  if (!s.selectedModel) return undefined;

  const model = MODELS[s.selectedModel];
  const cityMap: Record<string, string> = { hcm: 'TP.HCM', hanoi: 'Hà Nội', danang: 'Đà Nẵng', other: 'Khác' };
  const areaMap: Record<string, string> = { center: 'Trung tâm', suburb: 'Ngoại thành', residential: 'Khu dân cư', office: 'Khu văn phòng' };

  const totalInv = s.getTotalInvestment();
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
      `Tổng vốn đầu tư: ${formatVND(totalInv)}`,
      `Ticket trung bình: ${formatVND(avgTicket)}`,
      `Khách/ngày: Ngày thường ~${custWD}, Cuối tuần ~${custWE}`,
    );
  }

  return lines.filter(Boolean).join('\n');
}

export default function AIChatPage() {
  const { t, locale } = useTranslation();
  const { user } = useAuth();
  const {
    sessions,
    activeSessionId,
    messages,
    isStreaming,
    error,
    todayUsed,
    loadSessions,
    loadMessages,
    setActiveSession,
    createSession,
    deleteSession,
    sendMessage,
    checkQuota,
    clearError,
  } = useChat();

  const models = useModels();
  const selectedModel = useWizardStore((s) => s.selectedModel);
  const projectName = useWizardStore((s) => s.projectName);
  const hasContext = !!selectedModel;
  const suggestedPrompts = hasContext ? CONTEXTUAL_PROMPTS : GENERIC_PROMPTS;

  const { scenarios, loadList: loadScenarios, load: loadScenarioData } = useScenarios();
  const [input, setInput] = useState('');
  const [showSidebar, setShowSidebar] = useState(false);
  const [loadingScenario, setLoadingScenario] = useState(false);
  const [loadedScenarioName, setLoadedScenarioName] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Load sessions, quota, and saved scenarios on mount
  useEffect(() => {
    if (user?.id) {
      loadSessions(user.id);
      checkQuota(user.id);
      loadScenarios(user.id);
    }
  }, [user?.id, loadSessions, checkQuota, loadScenarios]);

  // Pick up seed question from Hero AI input (sessionStorage)
  useEffect(() => {
    try {
      const seed = sessionStorage.getItem('ai_chat_seed_question');
      if (seed) {
        setInput(seed);
        sessionStorage.removeItem('ai_chat_seed_question');
        track('ai_chat_seeded_from_hero', { length: seed.length });
      }
    } catch {}
  }, []);

  // Handle scenario selection
  const handleScenarioPick = async (scenarioId: string) => {
    if (!scenarioId) {
      // Clear context — reset model selection
      useWizardStore.setState({ selectedModel: null });
      setLoadedScenarioName('');
      return;
    }
    setLoadingScenario(true);
    const data = await loadScenarioData(scenarioId);
    if (data) {
      const scenarioData = data as Record<string, unknown>;
      if (scenarioData.data) {
        useWizardStore.getState().restoreAll(scenarioData.data as Record<string, unknown>);
      }
      setLoadedScenarioName(String(scenarioData.name || ''));
    }
    setLoadingScenario(false);
  };

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 120) + 'px';
    }
  }, [input]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed || isStreaming || !user?.id) return;
    setInput('');
    sendMessage(trimmed, user.id, buildBusinessContext(), locale);
    track('ai_chat_send', { has_context: !!buildBusinessContext() });
    track('north_star_action', { source: 'ai_chat_send' });
  };

  const handleNewChat = () => {
    setActiveSession(null);
    setShowSidebar(false);
  };

  const handleSelectSession = (id: string) => {
    loadMessages(id);
    setShowSidebar(false);
  };

  const handleDeleteSession = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    deleteSession(id);
  };

  // Auth gate
  if (!user) {
    return (
      <LoginPromptCard
        heading={t.common.auth.loginForAI}
        description={t.common.auth.loginForAIDesc}
        showFeatures
      />
    );
  }

  return (
    <div className="animate-fade-in-up">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold font-[family-name:var(--font-heading)]">
          💬 Hỏi đáp AI — Chuyên gia F&B
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => setShowSidebar(!showSidebar)}
            className="clay-pill bg-white text-text cursor-pointer hover:bg-surface3 transition-colors"
            title="Lịch sử chat"
          >
            <Icon name="stories" size={18} className="!border-0 !shadow-none !bg-transparent !w-[18px] !h-[18px]" />
            <span className="max-md:hidden">Lịch sử</span>
          </button>
          <button
            onClick={handleNewChat}
            className="clay-pill bg-pastel-mint text-text cursor-pointer hover:bg-mint-light transition-colors"
          >
            + Mới
          </button>
        </div>
      </div>

      {/* Scenario Picker */}
      {scenarios.length > 0 && (
        <div className="clay-card-static bg-pastel-cream p-3 mb-3">
          <label className="block text-[12px] font-semibold text-text mb-1.5 font-[family-name:var(--font-heading)]">
            {t.dashboard.chatScenario.pickLabel}
          </label>
          <select
            onChange={(e) => handleScenarioPick(e.target.value)}
            className="w-full clay-input text-[13px] !py-2 cursor-pointer"
            disabled={loadingScenario}
          >
            <option value="">{t.dashboard.chatScenario.pickPlaceholder}</option>
            {scenarios.map((sc) => (
              <option key={sc.id} value={sc.id}>{sc.name}</option>
            ))}
          </select>
          {loadingScenario && (
            <p className="text-[11px] text-text-muted mt-1 animate-pulse">{t.dashboard.chatScenario.loadingScenario}</p>
          )}
          {loadedScenarioName && !loadingScenario && (
            <p className="text-[11px] text-success font-semibold mt-1">
              {tpl(t.dashboard.chatScenario.contextLoaded, { name: loadedScenarioName })}
            </p>
          )}
        </div>
      )}

      <div className="flex gap-3 max-md:flex-col relative">
        {/* Sidebar - session list */}
        {showSidebar && (
          <>
            {/* Mobile overlay */}
            <div
              className="fixed inset-0 bg-black/20 z-40 md:hidden"
              onClick={() => setShowSidebar(false)}
            />
            <div className="w-64 max-md:fixed max-md:left-0 max-md:top-0 max-md:h-full max-md:z-50 max-md:w-72 max-md:shadow-xl shrink-0">
              <div className="clay-card-static bg-pastel-cream p-3 h-full max-h-[500px] max-md:max-h-full max-md:rounded-none overflow-y-auto">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-bold font-[family-name:var(--font-heading)]">Lịch sử chat</h3>
                  <button
                    onClick={() => setShowSidebar(false)}
                    className="md:hidden text-text-muted hover:text-text text-lg cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
                {sessions.length === 0 ? (
                  <p className="text-text-light text-xs text-center py-4">Chưa có cuộc trò chuyện nào.</p>
                ) : (
                  <div className="space-y-1.5">
                    {sessions.map((s) => (
                      <div
                        key={s.id}
                        onClick={() => handleSelectSession(s.id)}
                        className={`p-2.5 rounded-lg cursor-pointer flex items-start gap-2 group transition-colors ${
                          s.id === activeSessionId
                            ? 'bg-white border border-border-light'
                            : 'hover:bg-white/60'
                        }`}
                      >
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold truncate">{s.title}</p>
                          <p className="text-[10px] text-text-light mt-0.5">
                            {new Date(s.updated_at).toLocaleDateString('vi-VN')}
                          </p>
                        </div>
                        <button
                          onClick={(e) => handleDeleteSession(e, s.id)}
                          className="opacity-0 group-hover:opacity-100 text-text-light hover:text-danger text-xs p-1 cursor-pointer transition-opacity"
                          title="Xóa"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </>
        )}

        {/* Main chat area */}
        <div className="flex-1 min-w-0">
          <div className="clay-card-static bg-white overflow-hidden">
            {/* Messages */}
            <div className="h-[420px] max-md:h-[350px] overflow-y-auto p-4 space-y-3">
              {messages.length === 0 && !isStreaming ? (
                /* Empty state with suggested prompts */
                <div className="h-full flex flex-col items-center justify-center">
                  <Icon name="chat" size={48} className="mb-3 opacity-40" />
                  <p className="text-text-muted text-sm mb-1 font-semibold">Hỏi bất kỳ điều gì về F&B!</p>
                  {hasContext ? (
                    <p className="text-success text-xs mb-5 font-semibold">
                      ✓ AI đã nắm thông tin dự án {projectName || models[selectedModel]?.name || 'của bạn'}
                    </p>
                  ) : (
                    <p className="text-text-light text-xs mb-5">
                      {scenarios.length > 0
                        ? 'Chọn kịch bản phía trên để AI hiểu context dự án, hoặc chat chung.'
                        : 'Chuyên gia AI sẵn sàng tư vấn cho bạn. Nhập thông tin ở Thẩm định mô hình để AI hiểu context.'
                      }
                    </p>
                  )}
                  <div className="grid grid-cols-2 gap-2 max-w-md max-md:grid-cols-1">
                    {suggestedPrompts.map((prompt) => (
                      <button
                        key={prompt}
                        onClick={() => {
                          setInput(prompt);
                          textareaRef.current?.focus();
                        }}
                        className="text-left text-xs p-2.5 rounded-lg border border-border-light hover:border-text hover:bg-surface3 transition-colors cursor-pointer"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                /* Message bubbles */
                <>
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] px-3.5 py-2.5 rounded-xl text-sm leading-relaxed ${
                          msg.role === 'user'
                            ? 'bg-pastel-blue text-text rounded-br-sm'
                            : 'bg-surface3 text-text rounded-bl-sm'
                        }`}
                      >
                        <MessageContent content={msg.content} />
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
              <div className="px-4 py-2 bg-danger/10 text-danger text-xs font-semibold flex items-center justify-between">
                <span>{error}</span>
                <button onClick={clearError} className="text-danger hover:underline cursor-pointer">Đóng</button>
              </div>
            )}

            {/* Input bar */}
            <div className="border-t-2 border-border-light p-3 flex gap-2 items-end bg-surface2">
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
                placeholder="Hỏi về F&B..."
                rows={1}
                className="flex-1 clay-input resize-none text-sm !py-2.5"
                disabled={isStreaming}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isStreaming}
                className="clay-btn clay-btn-primary !px-4 !py-2.5 disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
              >
                {isStreaming ? (
                  <span className="inline-flex gap-0.5">
                    <span className="w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '100ms' }} />
                    <span className="w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '200ms' }} />
                  </span>
                ) : (
                  '→'
                )}
              </button>
            </div>
          </div>

          {/* Footer note */}
          <div className="flex items-center justify-between mt-2 px-1">
            <p className="text-[10px] text-text-light">
              Powered by DeepSeek · AI có thể sai, hãy kiểm chứng thông tin quan trọng
            </p>
            <p className={`text-[10px] font-semibold ${todayUsed >= 5 ? 'text-danger' : todayUsed >= 4 ? 'text-warning' : 'text-text-light'}`}>
              {todayUsed}/5 câu hỏi hôm nay
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Render markdown-like content: bold, lists, line breaks */
function MessageContent({ content }: { content: string }) {
  if (!content) return null;

  const lines = content.split('\n');
  return (
    <div className="space-y-1">
      {lines.map((line, i) => {
        if (!line.trim()) return <br key={i} />;

        // Bullet points
        if (line.match(/^[-•*]\s/)) {
          return (
            <div key={i} className="flex gap-1.5 items-start">
              <span className="text-text-muted mt-0.5">•</span>
              <span><InlineFormat text={line.replace(/^[-•*]\s/, '')} /></span>
            </div>
          );
        }

        // Numbered lists
        if (line.match(/^\d+[.)]\s/)) {
          return (
            <div key={i} className="flex gap-1.5 items-start">
              <span className="text-text-muted font-semibold min-w-[16px]">{line.match(/^\d+/)?.[0]}.</span>
              <span><InlineFormat text={line.replace(/^\d+[.)]\s/, '')} /></span>
            </div>
          );
        }

        // Headers
        if (line.match(/^#{1,3}\s/)) {
          const text = line.replace(/^#{1,3}\s/, '');
          return <p key={i} className="font-bold text-text mt-1"><InlineFormat text={text} /></p>;
        }

        return <p key={i}><InlineFormat text={line} /></p>;
      })}
    </div>
  );
}

/** Handle **bold** and `code` inline formatting */
function InlineFormat({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith('`') && part.endsWith('`')) {
          return (
            <code key={i} className="bg-surface3 px-1 py-0.5 rounded text-[12px]">
              {part.slice(1, -1)}
            </code>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}
