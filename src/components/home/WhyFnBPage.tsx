'use client';

import Icon from '@/components/ui/Icon';
import { useWizardStore } from '@/hooks/useWizardStore';
import { useTranslation } from '@/i18n/LocaleProvider';

/* ── Section 1 & 2: Lý trí — Số liệu thị trường ── */

const DATA_SECTIONS = [
  {
    icon: 'chart',
    title: 'Thị trường tăng trưởng mạnh nhất khu vực',
    bg: 'bg-pastel-mint',
    color: 'text-emerald-700',
    stats: [
      { value: '$32 tỷ', label: 'Doanh thu F&B 2025' },
      { value: '+9.6%', label: 'Tăng trưởng/năm' },
      { value: '323K+', label: 'Cơ sở đang hoạt động' },
    ],
    points: [
      'Doanh thu ngành F&B 2025 đạt VND 843.000 tỷ (~$32 tỷ), tăng 14.6% YoY.',
      'Dự báo $41 tỷ vào 2030 — tốc độ tăng trưởng nhanh nhất Đông Nam Á.',
      '100 triệu dân, tuổi trung bình 33.4 — sức tiêu dùng khổng lồ và trẻ.',
      '25 triệu người gia nhập tầng lớp trung lưu đến 2026 — nhu cầu ăn ngoài tăng vọt.',
    ],
    source: 'Mordor Intelligence, World Bank, Vietnam Briefing (2025)',
  },
  {
    icon: 'users',
    title: 'Văn hóa ẩm thực — lợi thế tự nhiên',
    bg: 'bg-pastel-gold',
    color: 'text-amber-700',
    stats: [
      { value: '#1 ĐNÁ', label: 'Ẩm thực (TasteAtlas)' },
      { value: '29%', label: 'Ăn ngoài 3-4x/tuần' },
      { value: '21.2 tr', label: 'Du khách quốc tế 2025' },
    ],
    points: [
      'Ẩm thực Việt xếp hạng #16 thế giới, #1 Đông Nam Á — thương hiệu quốc gia.',
      '29% người Việt ăn ngoài 3-4 lần/tuần — "ăn ngoài" là văn hóa, không chỉ tiện lợi.',
      '21.2 triệu du khách quốc tế 2025 (kỷ lục) — mỗi du khách là khách hàng F&B tiềm năng.',
      'Delivery online $1.8 tỷ, tăng 26%/năm — tiếp cận triệu khách không cần mặt bằng đẹp.',
    ],
    source: 'TasteAtlas, Statista, VIR, VietnamPlus (2024-2025)',
  },
];

/* ── Section 3: Dễ khởi nghiệp ── */

const EASY_START_POINTS = [
  {
    emoji: '💰',
    title: 'Vốn linh hoạt',
    desc: 'Bắt đầu từ 50-100 triệu (xe đẩy, kiosk, cloud kitchen) — không cần vốn tỷ đồng như bất động sản hay sản xuất.',
  },
  {
    emoji: '🍜',
    title: 'Nhu cầu bất biến',
    desc: 'Ai cũng cần ăn uống, mỗi ngày, mọi lúc. Không phụ thuộc mùa vụ hay xu hướng công nghệ.',
  },
  {
    emoji: '💵',
    title: 'Dòng tiền tức thì',
    desc: 'Bán hôm nay, thu tiền hôm nay. Không phải đợi 30-60 ngày thanh toán như B2B.',
  },
  {
    emoji: '🧪',
    title: 'Test trước, đầu tư sau',
    desc: 'Bán thử online, chợ phiên, pop-up — validate concept trước khi thuê mặt bằng.',
  },
  {
    emoji: '📱',
    title: 'Công nghệ hỗ trợ sẵn',
    desc: 'POS, GrabFood, ShopeeFood, QR thanh toán — tất cả đều có sẵn, rẻ hoặc miễn phí.',
  },
  {
    emoji: '🎯',
    title: 'Nhiều mô hình lựa chọn',
    desc: 'Từ xe đẩy → kiosk → quán nhỏ → nhà hàng → cloud kitchen → franchise — phù hợp mọi ngân sách.',
  },
];

/* ── Section 4: Giá trị cho người chủ ── */

const VALUE_POINTS = [
  {
    emoji: '😊',
    title: 'Niềm vui phục vụ',
    desc: 'Nhìn khách thưởng thức món ăn mình tạo ra — cảm giác thỏa mãn khó ngành nào sánh được.',
  },
  {
    emoji: '🤝',
    title: 'Kết nối cộng đồng',
    desc: 'Quán trở thành "nhà thứ hai" của khách quen — nơi giao lưu, gắn kết, chia sẻ.',
  },
  {
    emoji: '🎨',
    title: 'Sáng tạo không giới hạn',
    desc: 'Menu, không gian, trải nghiệm — mỗi ngày đều có thể thử nghiệm điều mới.',
  },
  {
    emoji: '⏰',
    title: 'Tự chủ cuộc sống',
    desc: 'Là ông/bà chủ, tự quyết nhịp sống — không KPI, không họp hành, không office politics.',
  },
  {
    emoji: '🏠',
    title: 'Di sản gia đình',
    desc: 'Nhiều quán trở thành thương hiệu truyền thế hệ — Phở Thìn, Bún chả Hương Liên, Cơm tấm Bụi.',
  },
  {
    emoji: '🌱',
    title: 'Tác động xã hội',
    desc: 'Tạo việc làm, góp phần văn hóa ẩm thực, nuôi dưỡng cộng đồng xung quanh.',
  },
];

export default function WhyFnBPage() {
  const setStep = useWizardStore((s) => s.setStep);

  return (
    <div className="clay-card-static bg-pastel-cream p-6 mb-4">
      {/* Header */}
      <div className="text-center mb-5">
        <Icon name="trendingup" size={48} className="mx-auto mb-2" />
        <h2 className="text-lg font-bold text-text font-[family-name:var(--font-heading)]">
          Vì sao nên đầu tư F&B tại Việt Nam?
        </h2>
        <p className="text-[13px] text-text-muted mt-1.5 max-w-[500px] mx-auto leading-relaxed">
          Đằng sau những con số cảnh báo, F&B Việt Nam đang ở giai đoạn tăng trưởng mạnh mẽ nhất lịch sử.
          Và không chỉ về tiền — đây là ngành mang lại giá trị sống thực sự cho người làm chủ.
        </p>
      </div>

      {/* ── Part 1: Số liệu thị trường ── */}
      <div className="space-y-4 mb-4">
        {DATA_SECTIONS.map((section) => (
          <div key={section.title} className={`clay-sm ${section.bg} p-5`}>
            <div className="flex items-center gap-2 mb-3">
              <Icon name={section.icon} size={32} className="shrink-0" />
              <h3 className="text-[15px] font-bold font-[family-name:var(--font-heading)] text-text">
                {section.title}
              </h3>
            </div>

            {/* Stats row */}
            <div className="flex gap-2 mb-3 flex-wrap">
              {section.stats.map((stat) => (
                <div key={stat.label} className="bg-white/70 rounded-xl px-3 py-2 border border-border-light flex-1 min-w-[90px] text-center">
                  <span className={`text-[18px] font-bold font-[family-name:var(--font-heading)] ${section.color} block`}>
                    {stat.value}
                  </span>
                  <span className="text-[10px] text-text-muted block leading-tight">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Points */}
            <div className="space-y-1.5">
              {section.points.map((point, j) => (
                <div key={j} className="flex items-start gap-2 text-[12px] text-text leading-relaxed">
                  <span className="text-cta font-bold mt-0.5 shrink-0">{'>'}</span>
                  {point}
                </div>
              ))}
            </div>

            <p className="text-[10px] text-text-light mt-2 italic">
              Nguồn: {section.source}
            </p>
          </div>
        ))}
      </div>

      {/* ── Part 2: Dễ khởi nghiệp ── */}
      <div className="clay-sm bg-pastel-blue p-5 mb-4">
        <div className="flex items-center gap-2 mb-1">
          <Icon name="rocket" size={32} className="shrink-0" />
          <h3 className="text-[15px] font-bold font-[family-name:var(--font-heading)] text-text">
            F&B — ngành dễ khởi nghiệp nhất
          </h3>
        </div>
        <p className="text-[12px] text-text-muted mb-3">
          So với tech, bất động sản hay sản xuất, F&B có rào cản gia nhập thấp nhất và linh hoạt nhất.
        </p>

        <div className="grid grid-cols-2 gap-2.5 max-[480px]:grid-cols-1">
          {EASY_START_POINTS.map((item) => (
            <div key={item.title} className="bg-white/60 rounded-xl p-3 border border-border-light">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[18px]">{item.emoji}</span>
                <span className="text-[13px] font-bold font-[family-name:var(--font-heading)] text-text">{item.title}</span>
              </div>
              <p className="text-[11px] text-text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Part 3: Giá trị cho người chủ ── */}
      <div className="clay-sm bg-pastel-blush p-5 mb-4">
        <div className="flex items-center gap-2 mb-1">
          <Icon name="heart" size={32} className="shrink-0" />
          <h3 className="text-[15px] font-bold font-[family-name:var(--font-heading)] text-text">
            Không chỉ về tiền — giá trị cho người làm chủ
          </h3>
        </div>
        <p className="text-[12px] text-text-muted mb-3">
          F&B mang lại những thứ mà ít ngành nào có — từ niềm vui phục vụ đến di sản gia đình.
        </p>

        <div className="grid grid-cols-2 gap-2.5 max-[480px]:grid-cols-1">
          {VALUE_POINTS.map((item) => (
            <div key={item.title} className="bg-white/60 rounded-xl p-3 border border-border-light">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[18px]">{item.emoji}</span>
                <span className="text-[13px] font-bold font-[family-name:var(--font-heading)] text-text">{item.title}</span>
              </div>
              <p className="text-[11px] text-text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="clay-sm bg-white p-5 text-center">
        <p className="text-[14px] font-bold font-[family-name:var(--font-heading)] text-text mb-1">
          F&B Việt Nam không thiếu cơ hội — chỉ thiếu sự chuẩn bị.
        </p>
        <p className="text-[12px] text-text-muted mb-4 max-w-[440px] mx-auto">
          Thị trường $32 tỷ, 100 triệu dân trẻ, ẩm thực #1 khu vực, rào cản gia nhập thấp
          — và niềm vui mà ít ngành nào mang lại. Sẵn sàng chưa?
        </p>
        <button
          onClick={() => setStep(1)}
          className="clay-btn clay-btn-primary text-[14px] px-6 py-2.5 inline-flex items-center gap-2"
        >
          <Icon name="wizard" size={18} className="!border-0 !shadow-none !bg-transparent" />
          Bắt đầu thẩm định
        </button>
      </div>

      {/* Disclaimer */}
      <p className="text-center text-[10px] text-text-light italic mt-4">
        Dữ liệu từ Mordor Intelligence, World Bank, Vietnam Briefing, TasteAtlas, Statista, VIR.
        Cập nhật: Tháng 2/2026.
      </p>
    </div>
  );
}
