import type { BlogPost, KBTableRow, KBStat, KBWarningItem } from '@/types';

const BLOG_POSTS: BlogPost[] = [
  {
    slug: '5-sai-lam-mo-quan-fnb',
    title: '5 sai lầm phổ biến khi mở quán F&B',
    excerpt: 'Những sai lầm kinh điển khiến nhiều chủ quán mới "đốt tiền" trong năm đầu tiên — và cách tránh chúng.',
    date: '2026-02-25',
    author: 'Khang Phạm',
    tags: ['kinh-nghiem', 'khai-truong'],
    sections: [
      {
        type: 'text',
        content: 'Theo thống kê, hơn 60% quán F&B tại Việt Nam đóng cửa trong 18 tháng đầu. Phần lớn không phải vì đồ ăn dở — mà vì những sai lầm về tài chính và vận hành có thể tránh được. Dưới đây là 5 sai lầm phổ biến nhất mà mình gặp khi tư vấn cho các chủ quán mới.',
      },
      {
        type: 'list',
        heading: '5 sai lầm phổ biến nhất',
        content: [
          'Không tính đủ vốn: Nhiều người chỉ tính tiền xây dựng + thiết bị, quên mất vốn lưu động 3-6 tháng đầu khi chưa có khách. Kết quả: hết tiền trước khi quán ổn định.',
          'Chọn mặt bằng sai: Chạy theo mặt bằng "đẹp" mà không tính footfall thực tế, đối tượng khách, hay chi phí thuê vượt 15-20% doanh thu dự kiến.',
          'Đánh giá thấp chi phí nguyên liệu: Food cost thực tế thường cao hơn công thức 5-10% do hao hụt, đổ bỏ, và lãng phí trong bếp.',
          'Tuyển quá nhiều nhân viên: Quán mới chưa đông khách mà đã tuyển đủ team như lúc đông. Lương nhân viên là chi phí cố định — chảy máu tiền mỗi tháng.',
          'Không có kế hoạch marketing: Nghĩ rằng "mở ra là có khách" — thực tế cần ít nhất 3-5% doanh thu cho marketing trong 6 tháng đầu.',
        ],
      },
      {
        type: 'table',
        heading: 'So sánh: Dự tính vs Thực tế',
        content: [
          { label: 'Tổng đầu tư ban đầu', range: '+20-40%', note: 'Phát sinh xây dựng, giấy phép, thiết bị thay thế' },
          { label: 'Chi phí nguyên liệu', range: '+5-10%', note: 'Hao hụt, đổ bỏ, giá biến động' },
          { label: 'Thời gian hòa vốn', range: '+6-12 tháng', note: 'Ramp-up chậm hơn dự kiến' },
          { label: 'Doanh thu tháng đầu', range: '-30-50%', note: 'Khách chưa biết, chưa có review' },
          { label: 'Chi phí nhân sự', range: '+15-25%', note: 'BHXH, overtime, turnover, training' },
        ] as KBTableRow[],
      },
      {
        type: 'warning-list',
        heading: 'Dấu hiệu đỏ cần cảnh giác',
        content: [
          { icon: 'warning', title: 'Vốn lưu động dưới 3 tháng', desc: 'Nếu bạn không đủ tiền vận hành 3 tháng mà chưa có doanh thu, rủi ro rất cao.', severity: 'critical' },
          { icon: 'warning', title: 'Tiền thuê trên 20% doanh thu dự kiến', desc: 'Mặt bằng quá đắt sẽ "ăn" hết lợi nhuận, dù quán đông khách.', severity: 'critical' },
          { icon: 'warning', title: 'Không có bảng tính chi phí chi tiết', desc: 'Mở quán mà không có bảng Excel hay tool tính toán = đi trong bóng tối.', severity: 'warning' },
          { icon: 'warning', title: 'Chưa thử bán trước khi thuê mặt bằng', desc: 'Test concept qua pop-up, bán online trước để validate nhu cầu thực tế.', severity: 'tip' },
        ] as KBWarningItem[],
      },
      {
        type: 'text',
        content: 'Tin vui là tất cả sai lầm này đều có thể phòng tránh nếu bạn chuẩn bị kỹ. Dùng công cụ Validator.vn để chạy số liệu trước khi quyết định — biết rõ bao lâu hòa vốn, cần bao nhiêu khách mỗi ngày, và chi phí thực tế ra sao.',
      },
    ],
  },
  {
    slug: 'cach-tinh-chi-phi-mo-quan-cafe',
    title: 'Cách tính chi phí mở quán cafe',
    excerpt: 'Bảng tính chi tiết từ A-Z: đầu tư ban đầu, chi phí hàng tháng, và những khoản "ẩn" hay bị bỏ quên.',
    date: '2026-02-20',
    author: 'Khang Phạm',
    tags: ['chi-phi', 'cafe'],
    sections: [
      {
        type: 'text',
        content: 'Mở quán cafe là giấc mơ của nhiều người, nhưng "bao nhiêu tiền là đủ?" là câu hỏi khó trả lời nhất. Bài viết này chia nhỏ từng khoản chi phí giúp bạn tính được con số cụ thể — không để bị "vỡ" ngân sách.',
      },
      {
        type: 'table',
        heading: 'Chi phí đầu tư ban đầu',
        content: [
          { label: 'Đặt cọc mặt bằng (3-6 tháng)', range: '30 - 150 triệu', note: 'Tùy vị trí, thường 3-6 tháng tiền thuê' },
          { label: 'Xây dựng & trang trí', range: '80 - 300 triệu', note: '2-5 triệu/m². Càng đẹp càng tốn' },
          { label: 'Máy pha espresso', range: '30 - 150 triệu', note: 'Máy 1 group: 30-50tr, 2 group: 80-150tr' },
          { label: 'Máy xay cà phê', range: '8 - 40 triệu', note: 'Máy tốt giữ hương vị ổn định' },
          { label: 'Tủ lạnh, tủ mát, tủ bánh', range: '15 - 50 triệu', note: '2-3 tủ tùy menu' },
          { label: 'Bàn ghế & nội thất', range: '20 - 80 triệu', note: 'Khoảng 1-3 triệu/bộ bàn ghế' },
          { label: 'Dụng cụ pha chế & bếp', range: '10 - 30 triệu', note: 'Pitcher, tamper, scale, blender...' },
          { label: 'POS, camera, WiFi', range: '5 - 15 triệu', note: 'Hệ thống quản lý + an ninh' },
          { label: 'Giấy phép & pháp lý', range: '5 - 15 triệu', note: 'ĐKKD, ATTP, PCCC' },
        ] as KBTableRow[],
      },
      {
        type: 'table',
        heading: 'Chi phí hàng tháng',
        content: [
          { label: 'Thuê mặt bằng', range: '10 - 50 triệu', note: 'Mục tiêu: dưới 15% doanh thu' },
          { label: 'Nguyên liệu (Coffee, sữa, syrup...)', range: '15 - 40 triệu', note: 'Food cost khoảng 25-30% doanh thu' },
          { label: 'Lương nhân viên (2-5 người)', range: '16 - 40 triệu', note: 'Pha chế 6-8tr, phục vụ 5-6tr/tháng' },
          { label: 'Điện nước', range: '3 - 8 triệu', note: 'Máy lạnh + máy pha tốn điện' },
          { label: 'Marketing & khuyến mãi', range: '2 - 8 triệu', note: 'Facebook ads, Grab deals, sampling' },
          { label: 'Hao hụt & đổ bỏ', range: '2 - 5 triệu', note: 'Sữa hết hạn, cà phê test, đổ bỏ' },
        ] as KBTableRow[],
      },
      {
        type: 'warning-list',
        heading: 'Chi phí "ẩn" hay bị bỏ quên',
        content: [
          { icon: 'warning', title: 'BHXH cho nhân viên', desc: 'Chủ đóng 21,5% trên lương cơ bản. 5 nhân viên = thêm 5-8 triệu/tháng.', severity: 'warning' },
          { icon: 'warning', title: 'Bảo trì máy móc', desc: 'Máy pha cần service 6 tháng/lần (2-5 triệu). Máy xay thay lưỡi định kỳ.', severity: 'warning' },
          { icon: 'warning', title: 'Hoa hồng app delivery', desc: 'GrabFood/ShopeeFood lấy 20-30% mỗi đơn. Bán 100 ly qua app = mất 20-30 ly tiền hoa hồng.', severity: 'critical' },
          { icon: 'warning', title: 'Chi phí training nhân viên mới', desc: 'Turnover ngành F&B rất cao. Mỗi lần tuyển mới = 2-4 tuần training, chất lượng giảm.', severity: 'tip' },
        ] as KBWarningItem[],
      },
      {
        type: 'stat-grid',
        heading: 'Tổng đầu tư theo quy mô',
        content: [
          { icon: 'coffee', label: 'Quán nhỏ (20-30m²)', value: '200 - 400 triệu', desc: '10-15 chỗ, take-away chính, 2-3 nhân viên' },
          { icon: 'coffee', label: 'Quán vừa (40-60m²)', value: '400 - 800 triệu', desc: '20-30 chỗ, dine-in + delivery, 4-6 nhân viên' },
          { icon: 'coffee', label: 'Quán lớn (80-120m²)', value: '800 triệu - 1,5 tỷ', desc: '40-60 chỗ, full-service, 8-12 nhân viên' },
          { icon: 'coffee', label: 'Specialty / Premium', value: '1 - 3 tỷ', desc: 'Máy cao cấp, nội thất đặc biệt, concept riêng' },
        ] as KBStat[],
      },
      {
        type: 'text',
        content: 'Con số trên là ước tính tại TP.HCM và Hà Nội (2026). Tỉnh thành khác có thể thấp hơn 20-40%. Quan trọng nhất: luôn để dư vốn lưu động ít nhất 3 tháng chi phí vận hành. Dùng Validator.vn để chạy kịch bản chi tiết cho quán cafe của bạn.',
      },
    ],
  },
  {
    slug: 'xu-huong-fnb-viet-nam-2026',
    title: 'Xu hướng F&B Việt Nam 2026',
    excerpt: 'Từ healthy food đến AI trong vận hành — 5 xu hướng đang định hình lại ngành F&B năm nay.',
    date: '2026-02-15',
    author: 'Khang Phạm',
    tags: ['xu-huong', 'thi-truong'],
    sections: [
      {
        type: 'text',
        content: 'Ngành F&B Việt Nam 2026 tiếp tục thay đổi nhanh chóng. Người tiêu dùng ngày càng kỹ tính, công nghệ len lỏi vào mọi khâu vận hành, và những mô hình kinh doanh mới liên tục xuất hiện. Đây là 5 xu hướng nổi bật nhất năm nay.',
      },
      {
        type: 'stat-grid',
        heading: 'Những con số đáng chú ý',
        content: [
          { icon: 'growth', label: 'Thị trường F&B VN', value: '$22 tỷ', desc: 'Quy mô ước tính năm 2026, tăng 12% YoY' },
          { icon: 'chart', label: 'Healthy food', value: '+35%', desc: 'Tăng trưởng doanh số nhóm healthy/clean' },
          { icon: 'delivery', label: 'Cloud kitchen', value: '1.200+', desc: 'Số bếp trên mây hoạt động tại VN' },
          { icon: 'robot', label: 'AI adoption', value: '28%', desc: 'Quán F&B đã dùng AI/automation ở VN' },
        ] as KBStat[],
      },
      {
        type: 'list',
        heading: '5 xu hướng chính',
        content: [
          'Healthy & Clean Food: Người tiêu dùng trẻ (Gen Z, Millennials) ngày càng quan tâm đến sức khỏe. Salad bar, protein bowl, nước ép cold-pressed, và thực đơn low-carb đang bùng nổ. Quán nào có "healthy option" trên menu sẽ thu hút thêm 20-30% nhóm khách này.',
          'Cloud Kitchen bùng nổ: Chi phí mở bếp trên mây chỉ bằng 1/3-1/5 quán truyền thống. Với sự phát triển của GrabFood, ShopeeFood, và TikTok Shop, nhiều thương hiệu chỉ cần bếp tốt + marketing online là đủ. Rủi ro thấp, test concept nhanh.',
          'AI & Công nghệ trong vận hành: Chatbot đặt bàn, AI dự báo nguyên liệu, POS thông minh tự động gợi ý upsell, camera AI đếm khách — công nghệ giúp giảm 15-25% chi phí vận hành nếu áp dụng đúng.',
          'Experience-based Dining: Khách hàng không chỉ đến để ăn mà còn để "sống ảo" và trải nghiệm. Concept quán độc đáo, không gian check-in, interactive menu, và workshop (latte art, pizza making) tạo lý do để khách quay lại và chia sẻ trên mạng xã hội.',
          'Bao bì bền vững & ESG: Từ 2025, nhiều thành phố lớn siết chặt quy định về rác thải nhựa. Quán dùng bao bì eco-friendly (ly giấy, ống hút tre, hộp mía) vừa tuân thủ pháp luật vừa được khách trẻ ưu tiên chọn. Chi phí bao bì xanh chỉ cao hơn 10-15% nhưng giá trị thương hiệu tăng rõ rệt.',
        ],
      },
      {
        type: 'warning-list',
        heading: 'Lời khuyên cho chủ quán',
        content: [
          { icon: 'tip', title: 'Không cần theo tất cả xu hướng', desc: 'Chọn 1-2 xu hướng phù hợp với mô hình và ngân sách của bạn. Làm tốt 1 thứ tốt hơn làm dở 5 thứ.', severity: 'tip' },
          { icon: 'tip', title: 'Test nhỏ trước khi all-in', desc: 'Thêm 2-3 món healthy vào menu hiện tại, thử bán trên GrabFood trước khi mở cloud kitchen riêng.', severity: 'tip' },
          { icon: 'warning', title: 'Cẩn thận với hype', desc: 'Nhiều xu hướng "hot" nhưng vòng đời ngắn (bubble tea 2019, mì cay 2017). Chọn xu hướng có nền tảng dài hạn.', severity: 'warning' },
        ] as KBWarningItem[],
      },
      {
        type: 'text',
        content: 'Xu hướng thay đổi liên tục, nhưng nền tảng kinh doanh không đổi: kiểm soát chi phí, hiểu khách hàng, và có số liệu rõ ràng. Dùng Validator.vn để kiểm tra sức khỏe tài chính của quán bạn — dù đang theo xu hướng nào.',
      },
    ],
  },
  {
    slug: 'quan-ly-dong-tien-quan-fnb',
    title: 'Quản lý dòng tiền cho quán F&B',
    excerpt: 'Tiền vào tiền ra hàng ngày — làm sao để quán không bao giờ "cạn két"? Hướng dẫn quản lý dòng tiền thực chiến cho chủ quán.',
    date: '2026-03-01',
    author: 'Khang Phạm',
    tags: ['tai-chinh', 'van-hanh'],
    sections: [
      {
        type: 'text',
        content: 'Nhiều quán F&B có doanh thu tốt nhưng vẫn… hết tiền. Nghe vô lý nhưng rất phổ biến. Lý do đơn giản: doanh thu không phải là tiền mặt trong tay. Tiền hàng phải trả trước, tiền app delivery về sau 7-14 ngày, lương nhân viên trả đầu tháng, tiền thuê trả đầu quý. Nếu không quản lý dòng tiền (cash flow), bạn sẽ rơi vào tình huống "trên giấy có lãi, thực tế không có tiền trả nợ". Bài viết này chia sẻ 5 nguyên tắc và bảng theo dõi dòng tiền đơn giản mà bất kỳ chủ quán nào cũng áp dụng được.',
      },
      {
        type: 'list',
        heading: '5 nguyên tắc quản lý dòng tiền',
        content: [
          'Tách riêng ví cá nhân và ví quán: Mở tài khoản ngân hàng riêng cho quán. Mọi thu chi đều đi qua tài khoản này. Không lấy tiền quán xài cá nhân, không bù tiền túi vào quán mà không ghi nhận — đây là sai lầm số 1 của chủ quán nhỏ.',
          'Luôn giữ "đệm" tiền mặt tối thiểu 1 tháng chi phí: Giống như quỹ dự phòng cá nhân, quán cần có sẵn ít nhất 1 tháng tiền vận hành (thuê + lương + nguyên liệu). Lý tưởng là 2-3 tháng. Đây là tiền "không được đụng vào" trừ khi khẩn cấp.',
          'Theo dõi dòng tiền hàng tuần, không phải hàng tháng: Kiểm tra tiền vào — tiền ra mỗi tuần. Nếu đợi cuối tháng mới xem, có thể đã quá muộn để điều chỉnh. Dùng bảng đơn giản: Đầu tuần có bao nhiêu? Tuần này thu bao nhiêu? Chi bao nhiêu? Cuối tuần còn bao nhiêu?',
          'Đàm phán kỳ hạn thanh toán với nhà cung cấp: Xin trả chậm 7-14 ngày thay vì trả ngay khi nhận hàng. Ngược lại, thu tiền khách càng nhanh càng tốt — ưu tiên tiền mặt và chuyển khoản ngay, hạn chế công nợ.',
          'Lập kế hoạch chi lớn trước ít nhất 1 tháng: Mua thiết bị mới, sửa chữa, mở rộng — những khoản chi lớn cần lên kế hoạch trước. Không bao giờ "bốc đồng" chi tiền lớn mà chưa kiểm tra quỹ tiền mặt hiện tại.',
        ],
      },
      {
        type: 'table',
        heading: 'Bảng theo dõi dòng tiền hàng tháng (ví dụ quán cafe vừa)',
        content: [
          { label: 'Tiền mặt đầu tháng', range: '50 triệu', note: 'Số dư tài khoản + tiền mặt tại quán' },
          { label: '(+) Doanh thu tiền mặt & chuyển khoản', range: '80 triệu', note: 'Tiền thu được trực tiếp từ khách' },
          { label: '(+) Tiền từ app delivery', range: '25 triệu', note: 'GrabFood, ShopeeFood — về sau 7-14 ngày' },
          { label: '(-) Nguyên liệu & hàng hóa', range: '-35 triệu', note: 'Trả nhà cung cấp, mua lẻ hàng ngày' },
          { label: '(-) Lương nhân viên', range: '-28 triệu', note: 'Trả đầu tháng hoặc giữa + cuối tháng' },
          { label: '(-) Tiền thuê mặt bằng', range: '-18 triệu', note: 'Trả đầu tháng hoặc đầu quý' },
          { label: '(-) Điện nước, internet, POS', range: '-5 triệu', note: 'Chi phí cố định hàng tháng' },
          { label: '(-) Marketing & khuyến mãi', range: '-4 triệu', note: 'Ads, voucher, sampling' },
          { label: '(-) Chi phí khác (bảo trì, phát sinh)', range: '-3 triệu', note: 'Sửa máy, thay dụng cụ, v.v.' },
          { label: 'Tiền mặt cuối tháng', range: '62 triệu', note: 'Phải luôn > 1 tháng chi phí vận hành' },
        ] as KBTableRow[],
      },
      {
        type: 'warning-list',
        heading: 'Những "bẫy" dòng tiền cần tránh',
        content: [
          { icon: 'warning', title: 'Nhầm doanh thu với tiền mặt', desc: 'Bán 100 triệu/tháng qua app nhưng tiền về chậm 2 tuần. Trong 2 tuần đó bạn vẫn phải trả nguyên liệu, lương, thuê — nếu không có đệm sẽ "kẹt".', severity: 'critical' },
          { icon: 'warning', title: 'Trả tiền thuê theo quý', desc: 'Thuê 18 triệu/tháng, trả theo quý = 54 triệu một lúc. Nếu không chuẩn bị trước, tháng trả thuê quý sẽ "cháy" dòng tiền.', severity: 'critical' },
          { icon: 'warning', title: 'Không tính thuế và BHXH', desc: 'Thuế môn bài, thuế GTGT, BHXH nhân viên — những khoản này đến theo quý hoặc năm, dễ quên và bị "bất ngờ".', severity: 'warning' },
          { icon: 'warning', title: 'Rút tiền quán xài cá nhân', desc: 'Thấy quán đông, rút tiền mua đồ cá nhân. Cuối tháng thiếu tiền trả lương. Luôn "trả lương" cho bản thân một mức cố định, không rút thêm.', severity: 'warning' },
        ] as KBWarningItem[],
      },
      {
        type: 'text',
        content: 'Quản lý dòng tiền không khó — chỉ cần kỷ luật và theo dõi đều đặn. Mỗi tuần dành 15 phút kiểm tra tiền vào — tiền ra, bạn sẽ không bao giờ bị "cạn két" bất ngờ. Dùng Validator.vn để chạy mô phỏng dòng tiền 12 tháng đầu — biết trước tháng nào căng, tháng nào thoải mái để chủ động chuẩn bị.',
      },
    ],
  },
  {
    slug: 'chon-mat-bang-kinh-doanh',
    title: 'Hướng dẫn chọn mặt bằng kinh doanh F&B',
    excerpt: 'Mặt bằng quyết định 50% thành bại của quán. Hướng dẫn chi tiết cách chọn vị trí, đánh giá chi phí, và tránh những cái bẫy phổ biến.',
    date: '2026-02-28',
    author: 'Khang Phạm',
    tags: ['mat-bang', 'khai-truong'],
    sections: [
      {
        type: 'text',
        content: 'Mặt bằng là quyết định đắt đỏ nhất khi mở quán F&B — và cũng là quyết định khó thay đổi nhất. Chọn sai mặt bằng, dù đồ ăn ngon cách mấy cũng khó cứu. Chọn đúng, bạn đã có 50% cơ hội thành công. Nhiều chủ quán mới hay mắc lỗi: thấy mặt bằng "đẹp", vị trí "trung tâm" là ký hợp đồng liền — mà không phân tích kỹ xem nó có thực sự phù hợp với mô hình kinh doanh và ngân sách của mình không. Bài viết này giúp bạn đánh giá mặt bằng một cách có hệ thống.',
      },
      {
        type: 'stat-grid',
        heading: '4 yếu tố quyết định khi chọn mặt bằng',
        content: [
          { icon: 'location', label: 'Lưu lượng người qua lại', value: 'Footfall', desc: 'Đếm số người đi qua vào giờ cao điểm (11h-13h, 17h-20h). Tối thiểu 200-300 người/giờ cho quán take-away, 100+ cho quán dine-in.' },
          { icon: 'target', label: 'Đúng đối tượng khách', value: 'Target Fit', desc: 'Người đi qua có phải khách tiềm năng? Quán trà sữa cần học sinh/sinh viên, quán cơm văn phòng cần nhân viên công sở. Đông người nhưng sai đối tượng = vô nghĩa.' },
          { icon: 'eye', label: 'Khả năng nhìn thấy', value: 'Visibility', desc: 'Quán có dễ nhìn thấy từ đường chính không? Biển hiệu đặt được không? Nằm trong hẻm sâu = chi phí marketing cao gấp 2-3 lần để kéo khách vào.' },
          { icon: 'money', label: 'Chi phí hợp lý', value: '≤ 15% DT', desc: 'Tiền thuê nên dưới 15% doanh thu dự kiến. Thuê 25 triệu/tháng = cần doanh thu tối thiểu 170 triệu/tháng. Vượt ngưỡng này, rất khó có lãi.' },
        ] as KBStat[],
      },
      {
        type: 'list',
        heading: 'Checklist khảo sát mặt bằng (phải làm trước khi ký)',
        content: [
          'Đến khảo sát ít nhất 3 lần: sáng, trưa, tối — và cả ngày thường lẫn cuối tuần. Lưu lượng người khác nhau rất nhiều theo giờ và ngày.',
          'Hỏi hàng xóm và quán xung quanh: Khu này bán có đông khách không? Có vấn đề gì về an ninh, ngập nước, mất điện? Thông tin từ người đã kinh doanh ở đó quý hơn mọi báo cáo.',
          'Kiểm tra pháp lý: Mặt bằng có được phép kinh doanh ăn uống không? Có giấy PCCC chưa? Ai là chủ sở hữu thực sự (tránh thuê qua trung gian 2-3 tầng)?',
          'Đo diện tích thực tế: Diện tích quảng cáo thường lớn hơn diện tích sử dụng 10-20%. Đo lại bằng thước, tính diện tích bếp, kho, WC riêng.',
          'Kiểm tra hạ tầng: Điện 3 pha (cho máy lạnh, máy pha)? Nước đủ áp? Thoát nước tốt? Tường chịu lực để treo thiết bị? Sửa lại hạ tầng rất tốn kém.',
          'Tìm hiểu quy định đỗ xe: Khách đến bằng gì? Xe máy có chỗ đậu không? Khu vực cấm đỗ xe = mất 30-40% khách tiềm năng.',
          'Đọc kỹ hợp đồng thuê: Thời hạn bao lâu? Tăng giá bao nhiêu %/năm? Điều kiện trả lại mặt bằng? Có được sang nhượng không? Cọc bao nhiêu và hoàn trả khi nào?',
        ],
      },
      {
        type: 'table',
        heading: 'Chi phí thuê mặt bằng theo khu vực (TP.HCM & Hà Nội, 2026)',
        content: [
          { label: 'Quận trung tâm (Q1, Q3, Hoàn Kiếm)', range: '40 - 150 triệu/tháng', note: 'Footfall cao nhưng cạnh tranh khốc liệt, 50-80m²' },
          { label: 'Quận cận trung tâm (Bình Thạnh, Phú Nhuận, Cầu Giấy)', range: '20 - 60 triệu/tháng', note: 'Cân bằng giữa giá thuê và lượng khách, 40-70m²' },
          { label: 'Khu dân cư đông (Gò Vấp, Tân Bình, Long Biên)', range: '10 - 30 triệu/tháng', note: 'Khách neighborhood, dựa vào khách quen, 30-60m²' },
          { label: 'Trung tâm thương mại', range: '50 - 200 triệu/tháng', note: 'Có sẵn footfall nhưng phí dịch vụ + % doanh thu thêm 5-10%' },
          { label: 'Hẻm / ngõ lớn', range: '5 - 15 triệu/tháng', note: 'Giá rẻ nhưng cần marketing mạnh để kéo khách, phù hợp delivery' },
        ] as KBTableRow[],
      },
      {
        type: 'warning-list',
        heading: 'Những cái bẫy khi chọn mặt bằng',
        content: [
          { icon: 'warning', title: 'Mặt bằng "rẻ bất thường"', desc: 'Giá thuê thấp hơn thị trường 30-40%? Kiểm tra kỹ: có thể sắp giải tỏa, tranh chấp pháp lý, hoặc quán trước đó thất bại liên tục vì vị trí tệ.', severity: 'critical' },
          { icon: 'warning', title: 'Ký hợp đồng dài hạn quá sớm', desc: 'Đừng ký 5 năm ngay từ đầu. Thương lượng 1-2 năm đầu + quyền gia hạn. Nếu quán không chạy, bạn bị kẹt hợp đồng và mất cọc.', severity: 'critical' },
          { icon: 'warning', title: 'Quên tính chi phí sửa chữa ban đầu', desc: 'Mặt bằng thô giá rẻ nhưng chi phí hoàn thiện có thể lên 200-500 triệu. Mặt bằng đã có sẵn bếp, điện nước đôi khi lại rẻ hơn tổng thể.', severity: 'warning' },
          { icon: 'warning', title: 'Không tính đến mùa thấp điểm', desc: 'Có mặt bằng chỉ đông vào cuối tuần hoặc mùa lễ. Kiểm tra xem lưu lượng khách ngày thường có đủ để cover chi phí cố định không.', severity: 'warning' },
        ] as KBWarningItem[],
      },
      {
        type: 'text',
        content: 'Chọn mặt bằng là quyết định cần thời gian — đừng vội vàng vì sợ "mất mặt bằng đẹp". Luôn tính ngược: với giá thuê X, bạn cần bán bao nhiêu ly/phần/ngày để có lãi? Dùng Validator.vn để chạy kịch bản: nhập tiền thuê, chi phí vận hành, giá bán trung bình — tool sẽ cho bạn biết cần bao nhiêu khách/ngày để hòa vốn và khi nào bắt đầu có lãi.',
      },
    ],
  },
  {
    slug: 'xay-dung-menu-hieu-qua',
    title: 'Xây dựng menu hiệu quả cho quán F&B',
    excerpt: 'Menu không chỉ là danh sách món — đó là công cụ bán hàng quan trọng nhất. Cách thiết kế menu để tăng doanh thu và tối ưu lợi nhuận.',
    date: '2026-02-26',
    author: 'Khang Phạm',
    tags: ['menu', 'van-hanh'],
    sections: [
      {
        type: 'text',
        content: 'Menu là "người bán hàng thầm lặng" của quán — khách nhìn vào menu để quyết định gọi gì, gọi bao nhiêu, và có quay lại không. Một menu tốt không phải là menu có nhiều món, mà là menu giúp khách dễ chọn, quán dễ làm, và chủ quán có lãi. Rất nhiều quán mắc lỗi: đưa 50-60 món lên menu, khách đọc mỏi mắt, bếp thì chật vật, nguyên liệu tồn kho đầy. Bài viết này hướng dẫn bạn xây dựng menu "thông minh" — ít món nhưng hiệu quả.',
      },
      {
        type: 'stat-grid',
        heading: 'Phân loại món trên menu (Menu Engineering)',
        content: [
          { icon: 'star', label: 'Món "Ngôi sao"', value: 'Bán chạy + Lãi cao', desc: 'Đây là những món "gà đẻ trứng vàng". Ví dụ: Cà phê sữa đá — bán 50 ly/ngày, lãi 15k/ly. Đặt ở vị trí nổi bật nhất trên menu, luôn giữ chất lượng ổn định.' },
          { icon: 'muscle', label: 'Món "Cần cù"', value: 'Bán chạy + Lãi thấp', desc: 'Khách thích nhưng lãi mỏng. Ví dụ: Trà đào — bán nhiều nhưng nguyên liệu đắt. Thử tăng giá nhẹ 3-5k hoặc giảm khẩu phần nguyên liệu đắt (đào, vải) mà vẫn giữ hương vị.' },
          { icon: 'puzzle', label: 'Món "Tiềm năng"', value: 'Bán ít + Lãi cao', desc: 'Lãi tốt nhưng ít ai gọi. Ví dụ: Matcha Latte — lãi 20k/ly nhưng chỉ bán 5 ly/ngày. Cần quảng bá hơn: đặt lên bảng đề xuất, cho nhân viên gợi ý, tặng sample.' },
          { icon: 'dog', label: 'Món "Ế ẩm"', value: 'Bán ít + Lãi thấp', desc: 'Không ai mua, lãi cũng không có. Mạnh dạn bỏ khỏi menu. Giữ lại chỉ tốn nguyên liệu tồn kho và làm menu rối. Thay bằng món mới tiềm năng hơn.' },
        ] as KBStat[],
      },
      {
        type: 'list',
        heading: 'Mẹo định giá và thiết kế menu',
        content: [
          'Giữ menu gọn: 15-25 món là lý tưởng cho quán nhỏ. Mỗi danh mục (nước, đồ ăn, topping) nên có 4-7 lựa chọn. Quá nhiều món = khách khó chọn + bếp khó quản lý nguyên liệu.',
          'Đặt giá theo "mỏ neo": Đặt 1 món giá cao (ví dụ: Signature Latte 65k) cạnh món bạn muốn bán nhiều (Latte Classic 45k). Khách sẽ thấy 45k "hợp lý" khi so với 65k.',
          'Dùng con số "lẻ": 45k thay vì 50k, 29k thay vì 30k. Tâm lý học chứng minh giá lẻ khiến khách cảm thấy rẻ hơn dù chênh lệch rất nhỏ.',
          'Tiền nguyên liệu mỗi món nên dưới 30% giá bán: Ly cà phê bán 40k thì nguyên liệu không quá 12k. Nếu vượt 35%, bạn đang bán lỗ (tính cả lương, thuê, điện nước).',
          'Combo và upsell: "Thêm 10k được bánh" hiệu quả hơn bán lẻ. Combo giúp tăng giá trị đơn hàng trung bình 20-30% mà khách vẫn thấy "được deal".',
          'Cập nhật menu theo mùa: Mỗi 3-4 tháng thêm 2-3 món mới, bỏ 2-3 món ế. Khách quen có lý do quay lại thử, menu luôn tươi mới mà không phình to.',
          'Highlight món muốn bán: Dùng khung viền, icon "Best Seller", hay "Nhân viên đề xuất" để hướng khách chọn món lãi cao. Mắt khách thường nhìn góc phải trên trước.',
        ],
      },
      {
        type: 'warning-list',
        heading: 'Sai lầm phổ biến khi làm menu',
        content: [
          { icon: 'warning', title: 'Menu quá nhiều món', desc: '50-60 món nghe oai nhưng bếp không kham nổi, nguyên liệu tồn kho cao, chất lượng không đều. Quán mới nên bắt đầu với 15-20 món, mở rộng dần.', severity: 'critical' },
          { icon: 'warning', title: 'Định giá theo cảm tính', desc: '"Quán bên cạnh bán 35k thì mình bán 30k" — nhưng chi phí mỗi quán khác nhau. Phải tính giá từ chi phí nguyên liệu + chi phí vận hành, không copy giá đối thủ.', severity: 'critical' },
          { icon: 'warning', title: 'Không theo dõi món nào bán chạy', desc: 'Nhiều quán không biết top 5 món bán chạy nhất và top 5 món ế nhất. Không có data = không thể tối ưu menu.', severity: 'warning' },
          { icon: 'warning', title: 'Giữ món vì "tâm huyết" dù không ai mua', desc: 'Chủ quán hay giữ món mình thích dù khách không gọi. Kinh doanh cần lý trí: nếu bán dưới 3 phần/ngày liên tục 2 tháng, nên thay thế.', severity: 'tip' },
        ] as KBWarningItem[],
      },
      {
        type: 'text',
        content: 'Menu tốt là menu "sống" — liên tục được điều chỉnh dựa trên dữ liệu bán hàng thực tế. Hãy xem mỗi món trên menu như một "nhân viên": ai làm tốt thì giữ, ai không hiệu quả thì thay. Dùng Validator.vn để tính chi phí nguyên liệu, giá bán hợp lý, và xem biên lợi nhuận thực tế cho từng nhóm sản phẩm trong quán của bạn.',
      },
    ],
  },
  {
    slug: 'marketing-quan-fnb-ngan-sach-thap',
    title: 'Marketing quán F&B với ngân sách thấp',
    excerpt: '10 cách tiếp thị hiệu quả mà không cần "đốt tiền" chạy ads — phù hợp cho quán nhỏ và startup F&B.',
    date: '2026-02-22',
    author: 'Khang Phạm',
    tags: ['marketing', 'chi-phi'],
    sections: [
      {
        type: 'text',
        content: 'Marketing là khoản chi mà nhiều chủ quán nhỏ hay cắt đầu tiên khi "kẹt tiền" — và đó là sai lầm lớn. Không marketing = không có khách mới = doanh thu giảm dần = càng kẹt tiền hơn. Vòng xoáy này đã "giết" rất nhiều quán. Tin vui là marketing hiệu quả không nhất thiết phải tốn nhiều tiền. Với 2-5 triệu/tháng (hoặc thậm chí 0 đồng), bạn vẫn có thể kéo khách đều đặn nếu biết cách. Bài viết này chia sẻ 10 chiến thuật đã được kiểm chứng cho quán F&B nhỏ.',
      },
      {
        type: 'table',
        heading: 'So sánh các kênh marketing cho quán F&B',
        content: [
          { label: 'Facebook / Instagram (organic)', range: '0đ', note: 'Đăng 3-5 bài/tuần, reels, stories. Chậm nhưng bền vững' },
          { label: 'Facebook Ads (chạy quảng cáo)', range: '2 - 10 triệu/tháng', note: 'Target bán kính 1-3km quanh quán, hiệu quả nhanh' },
          { label: 'TikTok (organic)', range: '0đ', note: 'Video ngắn pha chế, behind-the-scenes. Viral potential cao' },
          { label: 'Google Maps / Google Business', range: '0đ', note: 'Đăng ký miễn phí, giúp khách tìm thấy quán khi search' },
          { label: 'GrabFood / ShopeeFood', range: 'Hoa hồng 20-30%', note: 'Có sẵn lượng khách lớn, nhưng chi phí hoa hồng cao' },
          { label: 'KOL / Reviewer mời', range: '1 - 20 triệu/lần', note: 'Micro-KOL (5k-50k followers) hiệu quả và rẻ hơn KOL lớn' },
          { label: 'Flyer & banner tại quán', range: '500k - 2 triệu', note: 'Hiệu quả cho khách đi ngang, chi phí thấp nhất' },
          { label: 'Chương trình loyalty (thẻ tích điểm)', range: '200k - 1 triệu', note: 'Giữ chân khách quen, tăng tần suất quay lại 25-40%' },
        ] as KBTableRow[],
      },
      {
        type: 'list',
        heading: '10 chiến thuật marketing chi phí thấp',
        content: [
          'Google Maps là "must-have": Đăng ký Google Business Profile (miễn phí). Cập nhật giờ mở cửa, ảnh đẹp, menu, số điện thoại. 70% khách tìm quán cafe/ăn uống qua Google Maps. Xin khách review 5 sao sau mỗi lần phục vụ.',
          'TikTok behind-the-scenes: Quay video ngắn 15-30 giây: pha chế, nấu ăn, setup quán buổi sáng. Không cần chuyên nghiệp, "thật" và "gần gũi" lại được yêu thích hơn. Đăng đều 1 video/ngày.',
          'Chương trình "Mua 5 tặng 1": Thẻ tích điểm đơn giản — mua 5 ly tặng 1 ly. Chi phí chỉ là 1 ly (10-15k nguyên liệu) nhưng giữ chân khách quay lại 5 lần. ROI cực cao.',
          'Rủ khách check-in: "Check-in Facebook/TikTok tặng topping miễn phí" hoặc "Giảm 10%". Mỗi lần khách check-in = quảng cáo miễn phí đến 200-500 bạn bè của họ.',
          'Hợp tác chéo với quán/shop lân cận: Quán cafe đặt flyer của tiệm nail bên cạnh, và ngược lại. Hoặc combo: "Mua nail tặng voucher cafe 10k". Không tốn tiền, cùng nhau kéo khách.',
          'Sampling giờ thấp điểm: 14h-16h quán vắng? Ra trước cửa mời khách qua đường thử miễn phí 1 shot espresso hoặc 1 miếng bánh. Chi phí 200-500k nhưng kéo được 5-10 khách mới vào quán.',
          'Chăm review trên app delivery: Trả lời mọi review trên GrabFood/ShopeeFood (cả khen lẫn chê). Quán 4,8 sao có lượng đơn cao hơn 30-50% so với quán 4,2 sao cùng khu vực.',
          'Chụp ảnh đẹp = marketing miễn phí: Đầu tư 1-2 triệu chụp ảnh sản phẩm chuyên nghiệp, dùng được cả năm cho menu, social media, app delivery. Ảnh đẹp tăng tỷ lệ click 40-60%.',
          'Email/Zalo cho khách quen: Thu thập số điện thoại khách (qua WiFi login hoặc loyalty card). Gửi tin nhắn Zalo OA 1-2 lần/tháng: món mới, khuyến mãi, sinh nhật. Chi phí gần 0 đồng.',
          'Tạo "lý do để quay lại": Mỗi tháng 1 event nhỏ — thử menu mới, workshop latte art, acoustic night. Không cần hoành tráng, chỉ cần cho khách lý do để ghé lại và kể cho bạn bè.',
        ],
      },
      {
        type: 'stat-grid',
        heading: 'ROI trung bình theo kênh marketing',
        content: [
          { icon: 'chart', label: 'Google Maps + Review', value: '10-20x', desc: 'Miễn phí đăng ký, mỗi review tốt mang thêm 3-5 khách mới/tháng' },
          { icon: 'chart', label: 'TikTok organic', value: '5-50x', desc: 'Video viral có thể mang 100+ khách. Rủi ro: không viral thì lượt xem thấp' },
          { icon: 'chart', label: 'Facebook Ads (local)', value: '3-8x', desc: 'Với 3 triệu/tháng ads bán kính 2km, thu về 10-25 triệu doanh thu mới' },
          { icon: 'chart', label: 'Loyalty program', value: '8-15x', desc: 'Khách quay lại trung bình 2,5 lần/tháng thay vì 1 lần. Chi phí cực thấp' },
        ] as KBStat[],
      },
      {
        type: 'warning-list',
        heading: 'Lưu ý quan trọng',
        content: [
          { icon: 'warning', title: 'Đừng "đốt tiền" chạy ads khi chưa sẵn sàng', desc: 'Kéo khách mới vào mà đồ ăn/phục vụ chưa ổn = khách đến 1 lần rồi không quay lại + review xấu. Ổn định chất lượng trước, marketing sau.', severity: 'critical' },
          { icon: 'warning', title: 'Marketing cần kiên nhẫn', desc: 'Đăng 1-2 bài rồi bỏ vì "không thấy hiệu quả" là lỗi phổ biến. Social media cần ít nhất 2-3 tháng đều đặn mới thấy kết quả rõ ràng.', severity: 'warning' },
          { icon: 'warning', title: 'Đo lường mọi thứ', desc: 'Hỏi khách "biết quán qua đâu?" mỗi ngày. Theo dõi xem kênh nào mang khách thật, kênh nào chỉ tốn công. Bỏ kênh không hiệu quả, tập trung vào kênh tốt.', severity: 'tip' },
        ] as KBWarningItem[],
      },
      {
        type: 'text',
        content: 'Marketing cho quán nhỏ không cần ngân sách lớn — cần sự kiên nhẫn và nhất quán. Bắt đầu với 2-3 kênh miễn phí (Google Maps, TikTok, loyalty), làm tốt rồi mới mở rộng. Và nhớ: dù marketing giỏi cách mấy, nếu tài chính không ổn thì vẫn "chết". Dùng Validator.vn để kiểm tra ngân sách marketing phù hợp với quy mô quán — tool sẽ tính marketing nên chiếm bao nhiêu % doanh thu cho mô hình của bạn.',
      },
    ],
  },
  {
    slug: 'khi-nao-nen-dong-cua-quan',
    title: 'Khi nào nên đóng cửa quán F&B?',
    excerpt: 'Đóng cửa không phải là thất bại — đôi khi đó là quyết định tài chính khôn ngoan nhất. 5 dấu hiệu cho thấy đã đến lúc dừng lại.',
    date: '2026-02-18',
    author: 'Khang Phạm',
    tags: ['kinh-nghiem', 'tai-chinh'],
    sections: [
      {
        type: 'text',
        content: 'Không ai mở quán với ý định đóng cửa. Nhưng thực tế, hơn 60% quán F&B tại Việt Nam đóng cửa trong 2 năm đầu. Vấn đề là nhiều chủ quán cố gắng "gồng" quá lâu — bù lỗ thêm 6 tháng, 1 năm, thậm chí vay nợ thêm — với hy vọng "tháng sau sẽ khá hơn". Đôi khi, quyết định khôn ngoan nhất là dừng lại sớm để bảo toàn vốn, rút kinh nghiệm, và bắt đầu lại. Bài viết này không để làm bạn nản lòng — mà để giúp bạn nhận ra khi nào nên tiếp tục chiến đấu, và khi nào nên rút lui có chiến lược.',
      },
      {
        type: 'list',
        heading: '5 dấu hiệu cho thấy quán đang "nguy kịch"',
        content: [
          'Lỗ liên tục 6 tháng trở lên mà xu hướng không cải thiện: 1-3 tháng đầu lỗ là bình thường (giai đoạn ramp-up). Nhưng nếu sau 6 tháng vẫn lỗ, và mỗi tháng không khá hơn tháng trước — đó là tín hiệu đỏ. Đặc biệt nếu doanh thu đi ngang hoặc giảm dần.',
          'Vốn dự phòng đã cạn, phải vay thêm để duy trì: Khi bạn bắt đầu vay nóng, mượn bạn bè, hoặc dùng thẻ tín dụng để trả lương và mua nguyên liệu — bạn đang "chơi với lửa". Nợ chồng nợ là con đường nhanh nhất dẫn đến phá sản.',
          'Khách giảm dù đã thử nhiều cách: Đã thay menu, giảm giá, chạy marketing, cải thiện dịch vụ — mà khách vẫn giảm? Có thể vấn đề nằm ở vị trí, concept, hoặc thị trường đã bão hòa. Những thứ này không thể sửa bằng cách "cố thêm".',
          'Kiệt sức về thể chất và tinh thần: Mở quán 14-16 tiếng/ngày, 7 ngày/tuần, liên tục 1-2 năm mà vẫn lỗ. Sức khỏe giảm, stress cao, ảnh hưởng gia đình. Đôi khi, bảo vệ sức khỏe và mối quan hệ quan trọng hơn cứu quán.',
          'Không còn đam mê và động lực: Bạn mở quán vì yêu thích, nhưng giờ mỗi sáng thức dậy đều không muốn đến quán. Kinh doanh F&B đòi hỏi năng lượng rất lớn — nếu "lửa" đã tắt, chất lượng phục vụ sẽ giảm, tạo vòng xoáy đi xuống.',
        ],
      },
      {
        type: 'warning-list',
        heading: 'Cờ đỏ tài chính — Đừng phớt lờ',
        content: [
          { icon: 'warning', title: 'Doanh thu không đủ trả chi phí cố định', desc: 'Tiền thuê + lương + điện nước = chi phí cố định. Nếu doanh thu hàng tháng liên tục thấp hơn con số này, bạn đang trả tiền để được đi làm — không phải kinh doanh.', severity: 'critical' },
          { icon: 'warning', title: 'Nợ nhà cung cấp quá 60 ngày', desc: 'Khi bạn bắt đầu nợ nhà cung cấp 2 tháng trở lên, họ sẽ cắt hàng. Không có hàng = không có doanh thu = nợ thêm. Vòng xoáy này rất khó thoát.', severity: 'critical' },
          { icon: 'warning', title: 'Phải chậm lương nhân viên', desc: 'Chậm lương 1 lần = mất lòng tin. Chậm 2 lần = nhân viên giỏi nghỉ. Chậm 3 lần = không ai muốn làm. Chất lượng dịch vụ sụp đổ nhanh chóng.', severity: 'critical' },
          { icon: 'warning', title: 'Vay thêm để bù lỗ (không phải đầu tư)', desc: 'Vay để mở rộng khi đang lãi — hợp lý. Vay để bù lỗ hàng tháng — nguy hiểm. Phân biệt rõ: bạn đang đầu tư hay đang "đổ tiền xuống hố"?', severity: 'warning' },
          { icon: 'warning', title: 'Tìm đối tác/nhà đầu tư vì hết tiền', desc: 'Nếu bạn tìm partner chỉ vì cần tiền cứu quán (không phải vì mô hình tốt cần scale), hầu hết nhà đầu tư sẽ không rót tiền — và nếu có, điều kiện sẽ rất bất lợi cho bạn.', severity: 'tip' },
        ] as KBWarningItem[],
      },
      {
        type: 'table',
        heading: 'Ngưỡng tài chính — Khi nào nên nghiêm túc cân nhắc đóng cửa',
        content: [
          { label: 'Tỷ lệ chi phí / doanh thu', range: '> 95%', note: 'Doanh thu 100 triệu mà chi phí 95 triệu+ = lãi không đáng kể hoặc lỗ' },
          { label: 'Vốn dự phòng còn lại', range: '< 1 tháng', note: 'Không đủ tiền vận hành 1 tháng nữa = rất nguy hiểm' },
          { label: 'Số tháng lỗ liên tục', range: '> 6 tháng', note: 'Lỗ kéo dài + không có xu hướng cải thiện = mô hình có vấn đề' },
          { label: 'Doanh thu so với tháng trước', range: 'Giảm 3 tháng liên tiếp', note: 'Xu hướng giảm đều = khách đang rời bỏ, rất khó đảo ngược' },
          { label: 'Nợ phải trả / Tài sản', range: '> 80%', note: 'Gánh nợ quá nặng, đóng cửa sớm còn giữ được phần vốn' },
          { label: 'Khách mỗi ngày', range: '< 30% công suất', note: 'Quán 40 chỗ mà chỉ phục vụ 10-12 khách/ngày = lãng phí mặt bằng' },
        ] as KBTableRow[],
      },
      {
        type: 'text',
        content: 'Đóng cửa quán không phải là kết thúc — nhiều chủ quán thành công nhất đều đã từng thất bại ít nhất 1 lần. Điều quan trọng là dừng đúng lúc, rút kinh nghiệm, và nếu muốn quay lại thì quay lại với sự chuẩn bị tốt hơn. Trước khi quyết định, hãy dùng Validator.vn để "chẩn đoán" sức khỏe tài chính quán một cách khách quan — xem các chỉ số thực tế thay vì cảm tính. Đôi khi, bạn sẽ phát hiện quán vẫn còn cứu được nếu điều chỉnh đúng chỗ.',
      },
    ],
  },
];

export default BLOG_POSTS;
