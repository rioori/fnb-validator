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
];

export default STRATEGY_ARTICLES;
