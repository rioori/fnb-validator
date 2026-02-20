import { useState } from 'react';
import Icon from '@/components/ui/Icon';

type StoryType = 'success' | 'fail' | 'both' | 'trend';

interface Story {
  title: string;
  tag: string;
  type: StoryType;
  summary: string;
  details: string[];
  lessons: string[];
  sources: { name: string; url: string }[];
  bg: string;
  stats?: { label: string; value: string }[];
}

const STORIES: Story[] = [
  {
    title: 'Phúc Long — Từ sụt giảm đến kỷ lục lợi nhuận',
    tag: 'Câu chuyện thành công',
    type: 'success',
    summary: 'Sau khi được Masan hợp nhất năm 2022, Phúc Long trải qua giai đoạn tái cấu trúc gian nan. Nhưng đến Q4/2025, chuỗi ghi nhận doanh thu 500 tỷ đồng/quý — mức cao nhất từ trước đến nay.',
    details: [
      'Năm 2025, Phúc Long mở thêm 79 cửa hàng mới, nâng tổng số từ 158 lên 237 cửa hàng (tăng 50%).',
      'Doanh thu bình quân mỗi cửa hàng đạt 22,8 triệu đồng/ngày, tăng 6% dù mở rộng nhanh.',
      'Cả năm 2024, Phúc Long ghi nhận doanh thu gần 1.900 tỷ đồng (+17%), lợi nhuận sau thuế 195 tỷ (gấp 1,6 lần năm trước).',
      'Động lực tăng trưởng không chỉ từ đồ uống mà còn từ nhóm thực phẩm (bánh, món ăn kèm) và kênh giao hàng.',
    ],
    lessons: [
      'Mở rộng nhanh VẪN hiệu quả nếu có quy trình vận hành chuẩn — doanh thu/cửa hàng vẫn tăng dù mở thêm 50%',
      'Đa dạng hóa sản phẩm (thêm thực phẩm) giúp tăng giá trị đơn hàng mà không cần tăng traffic',
      'Kênh giao hàng ngày càng quan trọng trong cơ cấu doanh thu bán lẻ F&B',
    ],
    sources: [
      { name: 'Tuổi Trẻ', url: 'https://tuoitre.vn/chuoi-ca-phe-phuc-long-lai-ky-luc-moi-ngay-cua-hang-thu-ve-bao-nhieu-tien-2026012818320958.htm' },
      { name: 'CafeF', url: 'https://cafef.vn/cuoc-chien-chuoi-ca-phe-phuc-long-tang-79-cua-hang-katinat-duoi-sat-nut-rieng-the-coffee-house-ngam-ngui-dong-cua-1-3-188250516080502639.chn' },
    ],
    bg: 'bg-pastel-mint',
    stats: [
      { label: 'Doanh thu Q4/2025', value: '500 tỷ' },
      { label: 'Số cửa hàng', value: '237' },
      { label: 'DT/cửa hàng/ngày', value: '22,8tr' },
    ],
  },
  {
    title: 'The Kafe — Từ hot trend đến thất bại toàn diện',
    tag: 'Bài học thất bại',
    type: 'fail',
    summary: 'Gọi được 5,5 triệu USD vốn đầu tư, mở rộng lên 26 cửa hàng ở cả Hà Nội và Sài Gòn. Nhưng đến 2016, The Kafe sụp đổ hoàn toàn — CEO từ chức, đối tác tố chiếm dụng vốn, cửa hàng đóng cửa hàng loạt.',
    details: [
      'Ra mắt tại Hà Nội với concept công nghiệp (industrial), lập tức thu hút giới trẻ check-in. Tuần đầu luôn kín chỗ.',
      'Nhà sáng lập Đào Chi Anh huy động được 5,5 triệu USD — con số khổng lồ với startup F&B Việt Nam thời đó.',
      'Tung ra hàng loạt sub-brand: The Kafe Vintage, The Kafe Box, The Burger Box... mở rộng lên 26 cửa hàng.',
      'Khi các quán concept tương tự mọc lên khắp nơi, lợi thế "độc-đẹp-sang chảnh" nhanh chóng mất đi.',
      'Menu "lai giữa món ăn nhanh, ăn chơi" — khách hàng không biết gọi The Kafe là quán gì.',
      'Bị đối tác tố chây ì công nợ hàng tỷ đồng. CEO đăng thông báo chính thức rời vị trí.',
    ],
    lessons: [
      'Concept đẹp tạo viral ban đầu, nhưng KHÔNG giữ được khách nếu không có sản phẩm lõi mạnh',
      'Mở rộng nhanh khi chưa có quy trình quản lý chuẩn → chất lượng phục vụ sụt giảm',
      'Cần xác định rõ định vị: bạn là quán cà phê hay nhà hàng? Menu phải tập trung, không "lai"',
      'Quản lý tài chính và quan hệ đối tác là nền tảng — scandal nợ nần phá hủy mọi thứ',
    ],
    sources: [
      { name: 'Diễn đàn Doanh nghiệp', url: 'https://diendandoanhnghiep.vn/the-kafe-that-bai-va-bai-hoc-cho-cac-start-up-tre-10082140.html' },
      { name: 'MarketingAI', url: 'https://marketingai.vn/the-kafe-va-bai-hoc-dat-gia-tai-sao-lai-that-bai-1945724.htm' },
    ],
    bg: 'bg-pastel-blush',
    stats: [
      { label: 'Vốn huy động', value: '$5,5M' },
      { label: 'Số cửa hàng đỉnh điểm', value: '26' },
      { label: 'Thời gian tồn tại', value: '~3 năm' },
    ],
  },
  {
    title: 'Pizza 4P\'s — Từ 1 nhà hàng nhỏ đến tham vọng toàn cầu',
    tag: 'Câu chuyện thành công',
    type: 'success',
    summary: 'Sáng lập bởi cặp đôi người Nhật tại Sài Gòn năm 2011 với vốn 50.000 USD. Giờ đây Pizza 4P\'s đã mở tại Indonesia, chuẩn bị tiến vào New York, và phục vụ trên cả chuyến bay Vietnam Airlines.',
    details: [
      'Cửa hàng đầu tiên mở tại đường Lê Thanh Tôn, Q1 — khu vực "Japanese Quarter" với vốn ~50.000 USD.',
      'Xây nhà máy phô mai tươi tại Đà Lạt, sản xuất 1.500-2.000 quả burrata và 2.000-3.000 quả mozzarella MỖI NGÀY.',
      '59% nguyên liệu lấy từ nguồn địa phương — giảm phụ thuộc nhập khẩu, kiểm soát chất lượng tốt hơn.',
      'Đầu 2025, khai trương cửa hàng tại Jakarta (Indonesia) và đang chuẩn bị mở tại Brooklyn, New York.',
      'Từ 1/12/2025, Vietnam Airlines phục vụ pizza 4P\'s trên một số chuyến bay.',
    ],
    lessons: [
      'Sản phẩm lõi phải thực sự xuất sắc — tự sản xuất nguyên liệu (phô mai) tạo "moat" không ai bắt chước được',
      'Triết lý "Oneness" (kết nối) giúp xây dựng trải nghiệm khách hàng toàn diện, không chỉ bán đồ ăn',
      'Nguồn cung địa phương hóa (59%) giúp giảm chi phí, tăng tính bền vững, tạo câu chuyện thương hiệu',
      'Có thể bắt đầu nhỏ (50K USD) nhưng phải có tầm nhìn lớn và kiên nhẫn thực thi',
    ],
    sources: [
      { name: 'Người Quan Sát', url: 'https://nguoiquansat.vn/tu-hom-nay-hanh-khach-co-the-goi-pizza-4p-s-tren-may-bay-cua-vietnam-airlines-258321.html' },
      { name: 'Vietnam Briefing', url: 'https://www.vietnam-briefing.com/news/pizza-4ps-vietnam-launchpad-global-f-b-brands.html/' },
    ],
    bg: 'bg-pastel-gold',
    stats: [
      { label: 'Vốn khởi đầu', value: '$50K' },
      { label: 'NL địa phương', value: '59%' },
      { label: 'Quốc gia hiện diện', value: '3+' },
    ],
  },
  {
    title: 'Gloria Jean\'s — Chuỗi quốc tế 1.000 cửa hàng cũng thua tại Việt Nam',
    tag: 'Bài học thất bại',
    type: 'fail',
    summary: 'Thương hiệu cà phê Úc có mặt tại 39 quốc gia, hơn 1.000 cửa hàng toàn cầu. Vào Việt Nam năm 2006, sau 10 năm chỉ mở được 6 cửa hàng rồi đóng cửa hoàn toàn năm 2017.',
    details: [
      'Vào Việt Nam 2006, Giám đốc kinh doanh châu Á tự tin rằng thị trường robusta của VN "không ảnh hưởng gì" đến cà phê arabica.',
      '6 năm đầu chỉ mở được 6 cửa hàng tại TP.HCM — tốc độ phát triển cực chậm.',
      'Năm 2012, đóng cửa "biểu tượng" trên đường Đồng Khởi do chi phí thuê mặt bằng quá cao.',
      'Sai lầm lớn nhất: áp dụng nguyên xi mô hình từ Úc mà không bản địa hóa.',
      'Cuối 2016 chỉ còn 2 cửa hàng. Tháng 4/2017, cửa hàng cuối cùng tại Phú Mỹ Hưng đóng cửa.',
    ],
    lessons: [
      'Thương hiệu quốc tế to bao nhiêu cũng thất bại nếu không hiểu và thích ứng thị trường địa phương',
      'Rập khuôn mô hình nước ngoài là sai lầm chí mạng — cần bản địa hóa sản phẩm, trải nghiệm, giá cả',
      'Chi phí mặt bằng trung tâm TP.HCM cực cao — cần tính kỹ break-even trước khi chọn location',
      'Tốc độ mở rộng quá chậm (6 cửa hàng/6 năm) cho thấy mô hình không phù hợp thị trường',
    ],
    sources: [
      { name: 'Doanh Nhân Sài Gòn', url: 'https://doanhnhansaigon.vn/chuoi-ca-phe-gloria-jean-s-dong-cua-hoan-toan-tai-viet-nam-235178.html' },
      { name: 'Dân Việt', url: 'https://danviet.vn/sau-4-nam-rut-lui-gloria-jeans-coffees-tro-lai-viet-nam-20210617171009517-d957550.html' },
    ],
    bg: 'bg-pastel-blush',
    stats: [
      { label: 'Cửa hàng toàn cầu', value: '1.000+' },
      { label: 'Cửa hàng VN (max)', value: '6' },
      { label: 'Thời gian ở VN', value: '10 năm' },
    ],
  },
  {
    title: 'The Coffee House — Từ chuỗi #1 đến đóng cửa 1/3 hệ thống',
    tag: 'Câu chuyện suy thoái',
    type: 'both',
    summary: 'Được Nikkei đánh giá là chuỗi cà phê phát triển nhanh nhất Việt Nam (2018), doanh thu 800 tỷ đồng/năm (2019). Nhưng sau khi founder rời đi, chuỗi giảm từ 141 xuống còn 93 cửa hàng.',
    details: [
      'Nguyễn Hải Ninh sáng lập năm 2014, chỉ 3 năm sau đã có 60 cửa hàng tại TP.HCM.',
      'Năm 2019, doanh thu 800+ tỷ đồng — lớn thứ 2 chỉ sau Highlands Coffee.',
      'Biên lãi gộp cao hơn 70%, nhưng chi phí bán hàng quá lớn khiến công ty vẫn lỗ.',
      'Hai năm Covid (2020-2021), lỗ gần 434 tỷ đồng vì chi phí bán hàng vượt lợi nhuận gộp.',
      'Founder rời vị trí CEO năm 2019 — thương hiệu dần mất bản sắc và tầm nhìn.',
      'Năm 2024-2025, giảm từ 141 xuống 93 cửa hàng (-34%), đóng tại nhiều tỉnh thành.',
      'Ra mắt mô hình kiosk "The Coffee House Now" cho mua mang đi, kênh online chiếm 50% giao dịch.',
    ],
    lessons: [
      'Vai trò founder CỰC KỲ quan trọng — khi người sáng lập rời đi, bản sắc thương hiệu có thể mất theo',
      'Biên lãi gộp cao (70%) vẫn có thể lỗ nếu chi phí bán hàng và vận hành không được kiểm soát',
      'Mở rộng quá nhanh = rủi ro lớn khi thị trường khó khăn (Covid). "Right-sizing" là chiến lược sống còn',
      'Kênh online/delivery là bước đi bắt buộc — 50% giao dịch qua online cho thấy xu hướng rõ ràng',
    ],
    sources: [
      { name: 'Doanh Nhân Sài Gòn', url: 'https://doanhnhansaigon.vn/chuyen-o-the-coffee-house-dinh-gia-nghin-ty-va-khoan-lo-gan-434-ty-dong-204171.html' },
      { name: 'CafeBiz', url: 'https://cafebiz.vn/triet-ly-kinh-doanh-khac-biet-cua-cuu-ceo-the-coffee-house-nguyen-hai-ninh-chuyen-ve-chiec-voucher-khuyen-mai-het-han-va-phan-thanh-xuan-dep-nhat-cua-doi-nguoi-20210211104003109.chn' },
    ],
    bg: 'bg-pastel-cream',
    stats: [
      { label: 'Đỉnh điểm', value: '141 CH' },
      { label: 'Hiện tại', value: '93 CH' },
      { label: 'Lỗ Covid', value: '434 tỷ' },
    ],
  },
  {
    title: 'Toàn cảnh F&B Việt Nam 2024: 30.000 quán đóng cửa, nhưng doanh thu tăng 16,6%',
    tag: 'Xu hướng ngành',
    type: 'trend',
    summary: 'Thị trường F&B Việt Nam đạt 688.800 tỷ đồng doanh thu năm 2024. Nhưng đằng sau con số ấn tượng là 30.000 cửa hàng đóng cửa chỉ trong 6 tháng đầu năm — cuộc sàng lọc khốc liệt nhất từ trước đến nay.',
    details: [
      'Tổng cửa hàng F&B: 323.010 (+1,8% YoY), nhưng 6 tháng đầu năm đã có ~30.000 quán đóng cửa.',
      'Hành vi tiêu dùng thay đổi: 52,3% người Việt chi dưới 35.000đ/đồ uống (tăng mạnh vs 2023).',
      'Phân khúc giá trên 35.000đ giảm từ 47,7% xuống 31,5% — người dùng tiết kiệm hơn rõ rệt.',
      'Nhưng tần suất uống ngoài tăng mạnh: tỷ lệ 3-4 lần/tuần tăng từ 17,4% lên 32,8%.',
      'Xu hướng mới: Matcha (29,6% doanh nghiệp chọn), trà sữa 7.000đ/ly, lẩu 69.000đ, Co-working Cafe 24h.',
      'Highlands dẫn đầu với 855 cửa hàng (+11%), Katinat nổi lên với chiến lược "chiếm góc phố đẹp".',
    ],
    lessons: [
      'Giá rẻ là xu hướng NGẮN HẠN — bền vững nằm ở chất lượng và trải nghiệm',
      'Người Việt uống ngoài NHIỀU HƠN nhưng CHI ÍT HƠN mỗi lần → định giá là chiến lược sống còn',
      '30.000 quán đóng/6 tháng = chỉ doanh nghiệp có mô hình vững, quản lý tốt mới trụ được',
      'Co-working Cafe, mô hình mang đi, delivery là các "đường đua" mới đáng chú ý',
    ],
    sources: [
      { name: 'Báo Chính Phủ', url: 'https://baochinhphu.vn/nganh-fb-tai-viet-nam-se-tiep-tuc-tang-truong-96-trong-nam-2025-102250319131429058.htm' },
      { name: 'iPOS.vn', url: 'https://ipos.vn/bao-cao-nganh-fnb-2024/' },
      { name: 'CafeF', url: 'https://cafef.vn/cuoc-dua-song-con-cua-cac-thuong-hieu-fb-trong-nam-thanh-loc-2025-dep-doc-khuay-dao-thi-truong-nghin-ty-loat-dai-gia-tat-tay-dua-voi-cac-ong-lon-ngan-hang-188251230103845865.chn' },
    ],
    bg: 'bg-pastel-blue',
    stats: [
      { label: 'Doanh thu 2024', value: '689K tỷ' },
      { label: 'Quán đóng cửa', value: '30.000' },
      { label: 'Tăng trưởng', value: '+16,6%' },
    ],
  },
];

const TYPE_CONFIG: Record<StoryType, { label: string; pillClass: string }> = {
  success: { label: 'Thành công', pillClass: 'bg-mint-light text-cta' },
  fail: { label: 'Thất bại', pillClass: 'bg-[#FEE2E2] text-danger' },
  both: { label: 'Thăng trầm', pillClass: 'bg-pastel-gold text-text' },
  trend: { label: 'Xu hướng', pillClass: 'bg-pastel-blue text-text' },
};

type FilterType = 'all' | StoryType;

export default function StoriesPage() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  const [filter, setFilter] = useState<FilterType>('all');

  const filtered = filter === 'all' ? STORIES : STORIES.filter((s) => s.type === filter);

  return (
    <div className="clay-card-static bg-pastel-cream p-6 mb-4">
      <div className="text-center mb-5">
        <Icon name="stories" size={48} className="mx-auto mb-2" />
        <h2 className="text-lg font-bold text-text font-[family-name:var(--font-heading)]">
          Câu chuyện F&B
        </h2>
        <p className="text-[13px] text-text-muted mt-1 max-w-[520px] mx-auto">
          Những câu chuyện thật từ thị trường F&B Việt Nam — số liệu, bài học, nguồn trích dẫn. Để bạn chuẩn bị tốt hơn trước khi bắt đầu.
        </p>
      </div>

      {/* Filter pills */}
      <div className="flex flex-wrap gap-2 justify-center mb-5">
        {([['all', 'Tất cả'], ['success', 'Thành công'], ['fail', 'Thất bại'], ['both', 'Thăng trầm'], ['trend', 'Xu hướng']] as [FilterType, string][]).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`px-3.5 py-1.5 rounded-full text-[12px] font-semibold border-2 transition-all cursor-pointer ${
              filter === key
                ? 'border-cta bg-cta text-white shadow-[2px_2px_0_var(--color-text)]'
                : 'border-border bg-white text-text-muted hover:border-text'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filtered.map((story, i) => {
          const realIdx = STORIES.indexOf(story);
          const isExpanded = expandedIdx === realIdx;
          const cfg = TYPE_CONFIG[story.type];

          return (
            <div key={realIdx} className={`clay-sm ${story.bg} overflow-hidden transition-all duration-300`}>
              {/* Header — always visible */}
              <div
                className="p-5 cursor-pointer"
                onClick={() => setExpandedIdx(isExpanded ? null : realIdx)}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className={`clay-pill !text-[10px] !py-0.5 ${cfg.pillClass}`}>
                    {story.tag}
                  </span>
                </div>
                <h3 className="text-[15px] font-bold font-[family-name:var(--font-heading)] text-text mb-2">
                  {story.title}
                </h3>
                <p className="text-[13px] text-text leading-relaxed">
                  {story.summary}
                </p>

                {/* Stats row */}
                {story.stats && (
                  <div className="flex gap-3 mt-3 flex-wrap">
                    {story.stats.map((stat) => (
                      <div key={stat.label} className="bg-white/70 rounded-xl px-3 py-1.5 border border-border-light">
                        <span className="text-[10px] text-text-muted block leading-tight">{stat.label}</span>
                        <span className="text-[14px] font-bold font-[family-name:var(--font-heading)] text-text">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                <button className="mt-3 text-[12px] text-cta font-semibold hover:underline">
                  {isExpanded ? 'Thu gọn ▲' : 'Đọc chi tiết ▼'}
                </button>
              </div>

              {/* Expanded content */}
              {isExpanded && (
                <div className="px-5 pb-5 animate-bounce-in">
                  {/* Timeline details */}
                  <div className="mb-4">
                    <p className="text-[11px] font-bold font-[family-name:var(--font-heading)] uppercase tracking-wider text-text-muted mb-2">
                      Diễn biến chi tiết
                    </p>
                    <div className="space-y-2">
                      {story.details.map((d, j) => (
                        <div key={j} className="flex items-start gap-2 text-[12px] text-text leading-relaxed">
                          <span className="text-text-muted font-bold mt-0.5 shrink-0">{j + 1}.</span>
                          {d}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Lessons */}
                  <div className="mb-4 bg-white/50 rounded-xl p-4 border border-border-light">
                    <p className="text-[11px] font-bold font-[family-name:var(--font-heading)] uppercase tracking-wider text-cta mb-2">
                      Bài học rút ra
                    </p>
                    {story.lessons.map((lesson, j) => (
                      <p key={j} className="flex items-start gap-2 text-[12px] text-text leading-relaxed mb-1.5 last:mb-0">
                        <span className="text-cta font-bold mt-0.5 shrink-0">{'>'}</span>
                        {lesson}
                      </p>
                    ))}
                  </div>

                  {/* Sources */}
                  <div className="border-t border-border-light pt-3">
                    <p className="text-[10px] font-semibold text-text-muted uppercase tracking-wider mb-1.5">Nguồn trích dẫn</p>
                    <div className="flex flex-wrap gap-2">
                      {story.sources.map((src) => (
                        <a
                          key={src.url}
                          href={src.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] text-cta hover:underline font-medium bg-white/60 px-2 py-1 rounded-lg border border-border-light"
                        >
                          {src.name} ↗
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <p className="text-center text-[12px] text-text-muted italic mt-5">
        Dữ liệu tổng hợp từ Tuổi Trẻ, CafeF, Doanh Nhân Sài Gòn, iPOS.vn, Vietnam Briefing và nhiều nguồn khác.
        <br />
        Bạn có câu chuyện F&B muốn chia sẻ? Liên hệ qua email hoặc LinkedIn.
      </p>
    </div>
  );
}
