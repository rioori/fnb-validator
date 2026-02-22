import type { KBTopic, KBTableRow, KBStat, KBWarningItem } from '@/types';

const STRATEGY_ARTICLES: KBTopic[] = [
  {
    id: 'pricing_strategy',
    slug: 'dinh-gia-menu',
    icon: 'money',
    title: 'Định giá menu',
    subtitle: 'Nghệ thuật đặt giá để có lãi',
    color: 'mint-light',
    category: 'strategy',
    highlights: [
      { label: 'Food cost mục tiêu', value: '28-32%' },
      { label: 'Combo tăng DT', value: '+15-25%' },
      { label: 'Sweet spot giá', value: '25-50K' },
    ],
    sections: [
      {
        type: 'stat-grid',
        heading: 'Công thức tính giá bán',
        content: [
          { icon: 'money', label: 'Giá bán cơ bản', value: 'NVL ÷ 0.30', desc: 'Giá NVL / food cost % mục tiêu. VD: NVL 15K ÷ 0.30 = 50K.' },
          { icon: 'chart', label: 'Biên đóng góp', value: 'Giá - NVL', desc: 'Mỗi món đóng góp bao nhiêu vào chi phí cố định. Ưu tiên món biên cao.' },
          { icon: 'target', label: 'Giá tâm lý', value: 'X9.000đ', desc: '49K thay vì 50K. 39K thay vì 40K. Hiệu ứng "rẻ hơn" rõ rệt.' },
          { icon: 'trending', label: 'Upsell / Cross-sell', value: '+15-25%', desc: '"Thêm topping 10K?" hoặc "Combo tiết kiệm 15K" tăng giá trị đơn hàng.' },
        ] as KBStat[],
      },
      {
        type: 'list',
        heading: 'Chiến lược giá thông minh',
        content: [
          'Menu Engineering: phân loại món theo Stars (bán nhiều, biên cao), Puzzles (biên cao, bán ít), Plowhorses (bán nhiều, biên thấp), Dogs (bán ít, biên thấp). Loại bỏ Dogs, push Stars.',
          'Anchor pricing: đặt món đắt nhất đầu menu để các món khác "có vẻ rẻ hơn". Ví dụ: Wagyu 350K đầu tiên → Bò Úc 180K thành "hợp lý".',
          'Combo strategy: gộp 2-3 món, giảm 10-15% so với mua lẻ. Khách cảm thấy "hời", bạn tăng giá trị đơn hàng 20-30%.',
          'Giá theo size: S/M/L với chênh lệch NVL nhỏ nhưng chênh lệch giá lớn. Khách chọn M (80% trường hợp) = biên lợi nhuận tối ưu.',
          'Seasonal pricing: tăng giá 5-10% vào mùa cao điểm (lễ, Tết), giảm nhẹ mùa thấp. Đừng giữ giá cứng cả năm.',
        ],
      },
      {
        type: 'warning-list',
        heading: 'Sai lầm khi định giá',
        content: [
          { icon: 'warning', title: 'Giá rẻ hơn đối thủ để "hút khách"', desc: 'Cạnh tranh bằng giá = race to the bottom. Sẽ luôn có người rẻ hơn. Hãy cạnh tranh bằng giá trị và trải nghiệm.', severity: 'critical' },
          { icon: 'warning', title: 'Không tính đủ chi phí vào giá', desc: 'Nhiều chủ quán chỉ tính NVL, quên nhân sự, thuê, điện, khấu hao. Giá bán phải cover TẤT CẢ chi phí + lợi nhuận mong muốn.', severity: 'critical' },
          { icon: 'warning', title: 'Thay đổi giá đột ngột', desc: 'Tăng giá >10% một lần sẽ mất khách. Nên tăng 5% mỗi 3-6 tháng, hoặc tăng kèm cải thiện chất lượng.', severity: 'warning' },
        ] as KBWarningItem[],
      },
    ],
  },
  {
    id: 'marketing_101',
    slug: 'marketing-fnb-co-ban',
    icon: 'megaphone',
    title: 'Marketing F&B cơ bản',
    subtitle: 'Có quán ngon mà không ai biết = thất bại',
    color: 'secondary-light',
    category: 'strategy',
    highlights: [
      { label: 'Ngân sách marketing', value: '5-10%', note: 'trên doanh thu' },
      { label: 'Google Maps', value: 'Miễn phí', note: 'hiệu quả nhất' },
      { label: 'TikTok reach', value: 'x5-10', note: 'so với Facebook' },
    ],
    sections: [
      {
        type: 'table',
        heading: 'Kênh marketing: chi phí & hiệu quả',
        content: [
          { label: 'Google Business Profile', range: 'Miễn phí', note: '70% khách tìm quán qua Google Maps. Setup ngay ngày 1.' },
          { label: 'TikTok (organic)', range: 'Miễn phí', note: '1 video viral = hàng đợi 2 tuần. Quay "behind the scenes" bếp.' },
          { label: 'Facebook / Instagram', range: '3-5 tr/tháng', note: 'Fanpage + groups + targeted ads. Hiệu quả cho cộng đồng.' },
          { label: 'KOL / Micro-influencer', range: '2-10 tr/lần', note: 'Micro (1K-100K followers) tạo engagement gấp 3-5x so với celeb.' },
          { label: 'Foody / Loship', range: '0.5-2 tr/tháng', note: 'Listing + review. Đặc biệt quan trọng cho quán mới.' },
          { label: 'Offline (banner, flyer)', range: '1-3 tr/tháng', note: 'Hiệu quả cho khu dân cư, quán gần trường/văn phòng.' },
        ] as KBTableRow[],
      },
      {
        type: 'list',
        heading: '5 bước marketing cho quán mới (ngân sách <5 triệu)',
        content: [
          'Bước 1: Setup Google Business Profile (miễn phí) — tên, ảnh, menu, giờ mở cửa, số điện thoại. Thu thập review 5 sao từ bạn bè ngày đầu.',
          'Bước 2: Tạo TikTok + Instagram — quay 3-5 video/tuần về quá trình làm món, "behind the scenes", giới thiệu nhân viên. ĐỪNG bán hàng quá sớm.',
          'Bước 3: Fanpage Facebook — đăng menu, khuyến mãi, review khách hàng. Join các group "Ăn gì ở [khu vực]" để post.',
          'Bước 4: Soft opening — mời 30-50 bạn bè, KOL micro (1K-10K followers) ăn miễn phí, đổi review + story. Chi phí: 5-10 triệu NVL.',
          'Bước 5: Grand opening — giảm giá 20-30% tuần đầu, tặng topping/đồ uống miễn phí. Tạo "cú hit" ban đầu để Google Maps có traffic.',
        ],
      },
      {
        type: 'text',
        content: 'Quy tắc 70/20/10: 70% nội dung giá trị (tips, behind the scenes), 20% review/social proof, 10% khuyến mãi trực tiếp. Đừng biến fanpage thành "bảng quảng cáo" — sẽ mất followers.',
      },
    ],
  },
  {
    id: 'checklist_mindset',
    slug: 'tu-duy-chuan-bi',
    icon: 'check',
    title: 'Tư duy chuẩn bị',
    subtitle: 'Validate trước, mở quán sau',
    color: 'mint-light',
    category: 'strategy',
    sections: [
      {
        type: 'stat-grid',
        heading: 'Con số bạn PHẢI biết trước khi mở quán',
        content: [
          { icon: 'money', label: 'Tổng vốn đầu tư', value: '???', desc: 'Xây dựng + thiết bị + NVL + giấy phép + vốn lưu động + dự phòng.' },
          { icon: 'clock', label: 'Thời gian hoàn vốn', value: '??? tháng', desc: 'Phải dưới 18 tháng. Trên 24 tháng = quá rủi ro.' },
          { icon: 'users', label: 'Số khách/ngày để hòa vốn', value: '??? khách', desc: 'Tổng chi phí cố định / (giá TB - NVL TB). Con số này có thực tế?' },
          { icon: 'wallet', label: 'Số tháng chịu lỗ', value: '??? tháng', desc: 'Bao lâu bạn có thể duy trì nếu doanh thu = 0? Cần ít nhất 3-6 tháng.' },
        ] as KBStat[],
      },
      {
        type: 'list',
        heading: 'Trước khi mở quán, hãy trả lời được:',
        content: [
          'Tôi có bao nhiêu vốn? Bao nhiêu là vay? Lãi suất bao nhiêu/tháng?',
          'Tôi chấp nhận lỗ tối đa bao lâu? (Thường cần 3-6 tháng)',
          'Nếu lỗ tháng thứ 6, tôi có đủ tiền để duy trì không?',
          'Tôi có kinh nghiệm quản lý F&B không? Nếu không, ai giúp? Chi phí?',
          'Tôi đã khảo sát ít nhất 5 đối thủ quanh khu vực chưa? Họ bán gì, giá bao nhiêu?',
          'Mỗi ngày cần bao nhiêu khách để hòa vốn? Con số đó có thực tế với vị trí này?',
          'Tôi có plan B nếu doanh thu chỉ đạt 60% kỳ vọng? (Cắt chi phí nào? Thu hẹp thế nào?)',
          'Ai sẽ quản lý khi tôi vắng? Quy trình vận hành đã chuẩn hóa chưa?',
          'Tôi có sẵn sàng làm việc 12-14 tiếng/ngày trong 6 tháng đầu không?',
        ],
      },
      {
        type: 'text',
        content: 'Tool F&B Validator sẽ giúp bạn trả lời hầu hết các câu hỏi trên bằng số liệu cụ thể. Mất 5 phút nhập liệu — tiết kiệm hàng trăm triệu tiền "học phí". Hãy bắt đầu validate ngay!',
      },
    ],
  },
  {
    id: 'revenue_optimization',
    slug: 'toi-uu-doanh-thu',
    icon: 'trending',
    title: 'Tối ưu doanh thu F&B',
    subtitle: '12 chiến thuật tăng doanh thu không cần tăng giá',
    color: 'primary-light',
    category: 'strategy',
    highlights: [
      { label: 'Tăng bill TB', value: '+20-40%' },
      { label: 'Tăng tần suất', value: '+30%' },
      { label: 'Giảm thất thoát', value: '-15%' },
    ],
    sections: [
      {
        type: 'stat-grid',
        heading: 'Công thức doanh thu F&B',
        content: [
          { icon: 'people', label: 'Số khách/ngày', value: 'Traffic', desc: 'Bao nhiêu người bước vào quán? Tăng bằng marketing, vị trí, thương hiệu. Đây là biến khó tăng nhất.' },
          { icon: 'money', label: 'Giá trị đơn TB', value: 'Avg. Ticket', desc: 'Mỗi khách chi bao nhiêu? Tăng bằng upsell, combo, menu engineering. Biến dễ tăng nhất.' },
          { icon: 'chart', label: 'Tần suất quay lại', value: 'Frequency', desc: 'Khách quay lại bao nhiêu lần/tháng? Tăng bằng loyalty, trải nghiệm, consistency.' },
          { icon: 'target', label: 'Tỷ lệ chuyển đổi', value: 'Conversion', desc: 'Bao nhiêu % người đi ngang vào quán? Trung bình 3-5%. Tăng bằng facade, menu board ngoài, mùi hương.' },
        ] as KBStat[],
      },
      {
        type: 'list',
        heading: 'Tăng giá trị đơn hàng (Quick wins)',
        content: [
          'Upsell có hệ thống: Train nhân viên hỏi "Anh/chị muốn thêm topping/size lớn không?" cho MỖI đơn. Tỷ lệ chấp nhận 20-30%. Chỉ cần +10K/đơn × 100 khách = +1 triệu/ngày.',
          'Combo thông minh: Gộp 2-3 món bán chạy, giảm 10-15% so với mua lẻ. Khách thấy "hời", bạn tăng doanh thu 25-35% per ticket. Ví dụ: Cà phê 35K + Bánh 25K = Combo 50K.',
          'Menu engineering: Đặt món biên lợi nhuận cao ở góc trên bên phải (vùng "mắt vàng" trên menu). Thêm ảnh, highlight box. Doanh số món đó tăng 15-20%.',
          'Giờ vàng (Happy Hour): Giảm giá 20% khung 14h-16h để lấp giờ chết. Doanh thu thêm > chi phí giảm giá. Đặc biệt hiệu quả cho quán cà phê, trà sữa.',
          'Delivery optimization: Đặt giá delivery cao hơn dine-in 10-15% (cover phí app). Menu riêng cho delivery: chỉ giữ món vận chuyển tốt, biên cao.',
        ],
      },
      {
        type: 'list',
        heading: 'Tăng tần suất quay lại',
        content: [
          'Loyalty đơn giản: Stamp card "mua 10 tặng 1" vẫn hiệu quả. Digital loyalty (Zalo OA) tốt hơn vì track được data. Chi phí gần = 0.',
          'Consistency là vua: Khách quay lại vì MÓN ĂN GIỐNG LẦN TRƯỚC. Chuẩn hóa recipe, cân đo chính xác. Một lần "lạ miệng" = mất khách vĩnh viễn.',
          'Cập nhật menu theo mùa: Thêm 2-3 món seasonal mỗi quý. Tạo lý do để khách quay lại "thử món mới". Giữ 70% menu cố định + 30% xoay vòng.',
          'Chăm sóc sau bán: Gửi tin nhắn Zalo OA sau 7 ngày: "Lâu rồi không thấy anh/chị ghé, nhớ lắm!" kèm voucher 10%. Tỷ lệ quay lại +25%.',
        ],
      },
      {
        type: 'warning-list',
        heading: 'Thất thoát doanh thu thường gặp',
        content: [
          { icon: 'warning', title: 'Nhân viên không upsell', desc: 'Mỗi ngày bỏ lỡ 50-100 cơ hội upsell × 15K = mất 750K-1.5 triệu/ngày. Giải pháp: KPI upsell, thưởng theo % doanh thu tăng thêm.', severity: 'critical' },
          { icon: 'warning', title: 'Thất thoát nguyên liệu', desc: 'Trung bình 5-10% NVL bị lãng phí (đổ bỏ, hư hỏng, ăn bớt). Với food cost 35%, thất thoát 10% NVL = mất 3.5% doanh thu. Giải pháp: kiểm kê hàng ngày.', severity: 'critical' },
          { icon: 'warning', title: 'Không tận dụng giờ thấp điểm', desc: 'Quán mở 12 giờ nhưng chỉ đông 4-5 giờ. 7-8 giờ còn lại vẫn trả lương + điện. Giải pháp: happy hour, workshop, event, co-working space.', severity: 'warning' },
        ] as KBWarningItem[],
      },
      {
        type: 'text',
        content: 'Doanh thu F&B = Traffic × Ticket × Frequency. Tăng mỗi biến 20% sẽ cho tổng doanh thu tăng 73% (1.2 × 1.2 × 1.2 = 1.73). Hãy dùng F&B Validator để mô phỏng các kịch bản doanh thu khác nhau và tìm combo tối ưu cho mô hình của bạn.',
      },
    ],
  },
];

export default STRATEGY_ARTICLES;
