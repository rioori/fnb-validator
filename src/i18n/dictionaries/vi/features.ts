const features = {
  breadcrumb: { home: 'Trang chủ', features: 'Tính năng' },
  verticalCta: {
    heading: 'Bắt đầu với ngành nào?',
    comingSoon: 'Sắp ra mắt',
    start: 'Bắt đầu →',
  },
  verticals: [
    { name: 'F&B', desc: 'Cà phê, quán ăn, trà sữa, nhà hàng, bakery, bar', icon: 'coffee', active: true },
    { name: 'Bán lẻ', desc: 'Thời trang, tạp hóa, cửa hàng tiện lợi', icon: 'retail', active: false },
    { name: 'Giáo dục', desc: 'Trung tâm, tutoring, courses online', icon: 'education', active: false },
    { name: 'Dịch vụ', desc: 'Spa, salon, gym, giặt ủi, sửa chữa', icon: 'services', active: false },
  ],
  financialAnalysis: {
    meta: {
      title: 'Phân tích tài chính — Validator.vn',
      description: 'Tự động tính P&L 12 tháng, break-even, payback period và chấm điểm sức khỏe tài chính cho mô hình kinh doanh của bạn.',
    },
    slug: 'phan-tich-tai-chinh',
    heading: 'Phân tích tài chính',
    desc: 'Nhập dữ liệu kinh doanh — nhận báo cáo P&L 12 tháng, điểm hòa vốn, thời gian hoàn vốn và health score tự động. Không cần biết kế toán.',
    icon: 'chart',
    color: 'bg-pastel-blue',
    highlights: [
      { icon: 'chart', title: 'P&L 12 tháng', desc: 'Dự phóng doanh thu, chi phí, lợi nhuận ròng từng tháng — tự động từ dữ liệu bạn nhập' },
      { icon: 'trending', title: 'Break-even & Payback', desc: 'Biết chính xác tháng nào hòa vốn và bao lâu thu hồi vốn đầu tư ban đầu' },
      { icon: 'bolt', title: 'Health Score', desc: 'Điểm số tổng hợp đánh giá sức khỏe tài chính — giúp bạn biết mô hình có khả thi không' },
    ],
    verticalAction: 'quick-calc',
  },
  aiAdvisor: {
    meta: {
      title: 'AI Advisor — Validator.vn',
      description: 'Chat trực tiếp với AI về chiến lược kinh doanh, tối ưu chi phí, vận hành và marketing cho mô hình của bạn.',
    },
    slug: 'ai-advisor',
    heading: 'AI Advisor',
    desc: 'Hỏi bất kỳ câu hỏi nào về kinh doanh — AI advisor trả lời dựa trên dữ liệu thực tế của bạn và kiến thức chuyên ngành.',
    icon: 'chat',
    color: 'bg-pastel-mint',
    highlights: [
      { icon: 'chat', title: 'Tư vấn cá nhân hóa', desc: 'AI phân tích dựa trên dữ liệu mô hình bạn nhập — không phải lời khuyên chung chung' },
      { icon: 'bolt', title: 'Trả lời tức thì', desc: 'Hỏi về chi phí, pricing, marketing, nhân sự, pháp lý — nhận câu trả lời chi tiết ngay' },
      { icon: 'book', title: 'Kiến thức chuyên sâu', desc: 'Được train trên dữ liệu thị trường Việt Nam — hiểu context kinh doanh địa phương' },
    ],
    verticalAction: 'ai-chat',
  },
  knowledgeBase: {
    meta: {
      title: 'Thư viện kiến thức — Validator.vn',
      description: 'Bài viết chuyên sâu, báo cáo thị trường, kinh nghiệm thực tiễn về chi phí, vận hành, chiến lược và pháp lý cho người kinh doanh Việt Nam.',
    },
    slug: 'kien-thuc',
    heading: 'Thư viện kiến thức',
    desc: 'Bài viết chuyên sâu, báo cáo thị trường, kinh nghiệm thực tiễn — giúp bạn hiểu rõ chi phí, vận hành, pháp lý và chiến lược.',
    icon: 'book',
    color: 'bg-pastel-cream',
    highlights: [
      { icon: 'book', title: 'Bài viết chuyên sâu', desc: 'Từ cấu trúc chi phí, nhân sự, marketing đến đăng ký kinh doanh — tất cả kiến thức cần thiết' },
      { icon: 'chart', title: '4 chuyên mục', desc: 'Chi phí · Vận hành · Chiến lược · Pháp lý — dễ tìm, dễ đọc, dễ áp dụng' },
      { icon: 'trending', title: 'Cập nhật liên tục', desc: 'Thêm bài viết mới thường xuyên — song ngữ Việt-Anh để bạn tham khảo' },
    ],
    verticalAction: null,
    knowledgeLink: '/kien-thuc',
  },
  checklist: {
    meta: {
      title: 'Checklist kinh doanh — Validator.vn',
      description: '80+ mục cần chuẩn bị trước khi kinh doanh — từ pháp lý, thi công, thiết bị đến vận hành. Đánh dấu tiến độ trên trình duyệt.',
    },
    slug: 'checklist',
    heading: 'Checklist kinh doanh',
    desc: '80+ mục cần chuẩn bị từ pháp lý, thi công, thiết bị đến vận hành. Đánh dấu tiến độ — dữ liệu lưu trên trình duyệt.',
    icon: 'checklist',
    color: 'bg-pastel-gold',
    highlights: [
      { icon: 'checklist', title: '80+ mục chi tiết', desc: 'Bao phủ mọi giai đoạn: pháp lý, mặt bằng, thi công, thiết bị, nhân sự, marketing' },
      { icon: 'bolt', title: 'Theo dõi tiến độ', desc: 'Đánh dấu từng mục đã hoàn thành — dữ liệu tự lưu trên trình duyệt' },
      { icon: 'trending', title: 'Không bỏ sót', desc: 'Được tổng hợp từ kinh nghiệm thực tế — giúp bạn chuẩn bị kỹ trước ngày khai trương' },
    ],
    verticalAction: 'checklist',
  },
};
export default features;
