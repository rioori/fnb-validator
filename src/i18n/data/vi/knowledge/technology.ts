import type { KBTopic, KBTableRow, KBStat, KBWarningItem } from '@/types';

const TECHNOLOGY_ARTICLES: KBTopic[] = [
  {
    id: 'pos_systems',
    slug: 'chon-he-thong-pos',
    publishDate: '2026-02-15',
    icon: 'calculator',
    title: 'Chọn hệ thống POS phù hợp',
    subtitle: 'Đừng mua POS đắt tiền khi mới bắt đầu',
    color: 'primary-light',
    category: 'technology',
    highlights: [
      { label: 'Chi phí POS', value: '0 - 5 triệu/tháng' },
      { label: 'ROI trung bình', value: '3-6 tháng' },
      { label: 'Giảm thất thoát', value: '5-15%' },
    ],
    sections: [
      {
        type: 'table',
        heading: 'So sánh các hệ thống POS phổ biến tại VN',
        content: [
          { label: 'KiotViet', range: '200-600K/tháng', note: 'Phổ biến nhất cho quán nhỏ. Giao diện dễ dùng, hỗ trợ tốt. Có gói miễn phí cho 1 chi nhánh, tính năng cơ bản.' },
          { label: 'Sapo FnB', range: '250-700K/tháng', note: 'Mạnh về quản lý kho và báo cáo. Tích hợp sàn thương mại điện tử Sapo. Phù hợp quán có bán delivery nhiều.' },
          { label: 'iPOS', range: '300-800K/tháng', note: 'Chuyên sâu cho F&B: quản lý bàn, chia bill, gọi món bằng QR. Nhiều tính năng nhưng giao diện phức tạp hơn.' },
          { label: 'CukCuk (MISA)', range: '250-500K/tháng', note: 'Của MISA, mạnh về kế toán. Tự động đồng bộ sổ sách. Phù hợp chủ quán muốn kiểm soát tài chính chặt.' },
          { label: 'Ghi sổ tay / Excel', range: 'Miễn phí', note: 'Không sai khi mới bắt đầu với 1 quán nhỏ. Nhưng khi quá 50 đơn/ngày hoặc có nhân viên, nên chuyển sang POS.' },
        ] as KBTableRow[],
      },
      {
        type: 'list',
        heading: 'Tính năng cần có khi chọn POS',
        content: [
          'Quản lý order và thanh toán: Tính năng cơ bản nhất. Đảm bảo tính được đơn nhanh, in bill, và hỗ trợ thanh toán QR code (MoMo, ZaloPay, chuyển khoản).',
          'Quản lý kho NVL: Nhập hàng, xuất kho theo món bán, cảnh báo hết hàng. Giúp biết chính xác tồn kho mỗi ngày, giảm thất thoát 5-15%.',
          'Báo cáo doanh thu theo ngày/tuần/tháng: Biết ngay hôm nay bán được bao nhiêu, món nào bán chạy, giờ nào đông khách nhất. Không có báo cáo = mù mờ.',
          'Quản lý nhân viên và ca làm: Chấm công, tính lương, phân quyền (nhân viên không được xóa đơn, chỉ manager được giảm giá). Ngăn gian lận.',
          'Tích hợp delivery app: Nhận đơn từ GrabFood, ShopeeFood trực tiếp vào POS, không cần nhập tay. Giảm sai sót và tiết kiệm thời gian.',
          'Hoạt động offline: Quán mất mạng vẫn tính tiền được. Dữ liệu tự động đồng bộ khi có mạng lại. Đặc biệt quan trọng ở khu vực wifi không ổn định.',
        ],
      },
      {
        type: 'table',
        heading: 'Chi phí thực tế khi dùng POS (ngoài phí hàng tháng)',
        content: [
          { label: 'Máy tính bảng / máy POS', range: '3-8 triệu', note: 'Tablet Android rẻ nhất từ 3 triệu. iPad từ 8 triệu. Máy POS chuyên dụng 5-15 triệu.' },
          { label: 'Máy in bill', range: '1-3 triệu', note: 'Máy in nhiệt 80mm. Nên mua loại có kết nối Bluetooth để linh hoạt. Giấy in ~100K/cuộn.' },
          { label: 'Máy in bếp', range: '1-2 triệu', note: 'In order ra bếp. Chỉ cần khi có 2+ khu vực chế biến (bar + bếp). Không bắt buộc với quán nhỏ.' },
          { label: 'Ngăn kéo tiền', range: '500K-2 triệu', note: 'Kết nối với POS, tự động mở khi thanh toán. Không bắt buộc nhưng giúp kiểm soát tiền mặt.' },
          { label: 'Phí cài đặt & đào tạo', range: '0-2 triệu', note: 'Nhiều hãng miễn phí cài đặt. Nhưng đào tạo nhân viên từ 2-4 giờ. Tính cả ngày "mất doanh thu" khi chuyển đổi.' },
        ] as KBTableRow[],
      },
      {
        type: 'warning-list',
        heading: 'Sai lầm thường gặp khi chọn POS',
        content: [
          { icon: 'warning', title: 'Mua hệ thống đắt tiền ngay từ đầu', desc: 'Quán mới, 20-30 đơn/ngày, chưa cần POS 15-20 triệu với máy quét mã vạch, màn hình cảm ứng lớn. Bắt đầu với gói cơ bản 200-300K/tháng, nâng cấp sau khi thực sự cần.', severity: 'warning' },
          { icon: 'warning', title: 'Không đào tạo nhân viên đúng cách', desc: 'Mua POS nhưng nhân viên vẫn ghi giấy vì "nhanh hơn". Kết quả: dữ liệu sai, báo cáo vô nghĩa, mất tiền mua POS. Dành 2-3 ngày đào tạo kỹ trước khi bắt buộc dùng.', severity: 'warning' },
          { icon: 'warning', title: 'Không kiểm tra chính sách khóa tài khoản', desc: 'Một số POS khóa tài khoản nếu chậm đóng phí, mất toàn bộ dữ liệu. Đọc kỹ điều khoản: dữ liệu có thuộc về bạn không? Xuất dữ liệu ra Excel được không? Ngưng dùng thì sao?', severity: 'critical' },
        ] as KBWarningItem[],
      },
      {
        type: 'text',
        content: 'Nguyên tắc chọn POS: bắt đầu từ gói rẻ nhất (hoặc miễn phí), làm quen 1-2 tháng, rồi nâng cấp khi thực sự cần tính năng nâng cao. POS tốt nhất là POS mà bạn và nhân viên THỰC SỰ DÙNG mỗi ngày — không phải POS nhiều tính năng nhất.',
      },
    ],
  },
  {
    id: 'online_delivery',
    slug: 'dat-hang-truc-tuyen-giao-hang',
    publishDate: '2026-02-15',
    icon: 'phone',
    title: 'Đặt hàng trực tuyến & giao hàng',
    subtitle: 'Delivery chiếm 30-50% doanh thu nhiều quán',
    color: 'mint-light',
    category: 'technology',
    highlights: [
      { label: 'Phí app', value: '20-30%' },
      { label: '% DT delivery', value: '30-50%' },
      { label: 'Tự ship tiết kiệm', value: '10-15%' },
    ],
    sections: [
      {
        type: 'table',
        heading: 'So sánh các nền tảng delivery tại VN (2025-2026)',
        content: [
          { label: 'GrabFood', range: 'Hoa hồng 25-30%', note: 'Lớn nhất, nhiều khách nhất. Giao diện merchant dễ dùng. Có chương trình GrabKitchen cho cloud kitchen. Thanh toán mỗi 7 ngày.' },
          { label: 'ShopeeFood', range: 'Hoa hồng 22-27%', note: 'Phí thấp hơn Grab. Nhiều voucher thu hút khách. Nhưng giá trị đơn trung bình thấp hơn và khách "săn deal" nhiều hơn.' },
          { label: 'BeFood (Be)', range: 'Hoa hồng 18-25%', note: 'Phí thấp nhất. App Việt Nam, đang phát triển. Lượng đơn ít hơn 2 app trên nhưng cạnh tranh ít hơn = dễ nổi bật.' },
          { label: 'GoFood (Gojek)', range: 'Hoa hồng 20-25%', note: 'Mạnh ở khu vực nội thành. Lượng đơn ổn định nhưng không nhiều bằng Grab/Shopee. Thanh toán mỗi 14 ngày.' },
          { label: 'Tự giao (Zalo/Hotline)', range: '5-10K/đơn', note: 'Thuê shipper riêng 6-8 triệu/tháng hoặc trả theo đơn. Bán kính 3-5km. Giữ được 100% doanh thu nhưng cần quản lý shipper.' },
        ] as KBTableRow[],
      },
      {
        type: 'stat-grid',
        heading: 'Làm thế nào để có lãi từ delivery',
        content: [
          { icon: 'money', label: 'Tăng giá trên app', value: '+10-15%', desc: 'Hầu hết khách chấp nhận giá cao hơn trên app vì tiện lợi. Một số app cho phép đặt giá khác với tại quán — tận dụng ngay.' },
          { icon: 'target', label: 'Menu riêng cho delivery', value: '10-15 món', desc: 'Chỉ giữ món vận chuyển tốt (không bị nhũn, đổ), biên cao, đóng gói dễ. Cắt món canh, lẩu, món nhiều nước khó giao.' },
          { icon: 'chart', label: 'Combo tăng giá trị đơn', value: '+40-60%', desc: 'Gộp 2-3 món + nước. Đơn 45K thành 75K. Phí app cùng %, nhưng lợi nhuận tuyệt đối cao hơn nhiều mỗi đơn.' },
          { icon: 'phone', label: 'Kênh đặt hàng riêng', value: 'Zalo/Facebook', desc: 'Khách quen đặt qua Zalo, bạn tiết kiệm 25-30% phí app. Tạo nhóm Zalo "Khách thân" với ưu đãi nhỏ để giữ chân.' },
        ] as KBStat[],
      },
      {
        type: 'list',
        heading: 'Tối ưu menu cho delivery — bán nhiều hơn, lỗ ít hơn',
        content: [
          'Chọn món "chịu được 30 phút": Thức ăn vẫn ngon sau 30 phút vận chuyển. Cơm, bún khô, bánh mì, gỏi cuốn = tốt. Phở nước, lẩu, món chiên giòn = không lý tưởng (bị mềm, mất nhiệt).',
          'Bao bì là "mặt tiền" của delivery: Khách không thấy quán, chỉ thấy hộp. Đầu tư hộp đựng tốt (chống tràn, giữ nhiệt), dán sticker thương hiệu. Chi phí thêm 1-2K/đơn nhưng tăng trải nghiệm và review tốt.',
          'Ảnh đẹp = đơn nhiều: Chụp ảnh món ăn chuyên nghiệp (hoặc dùng điện thoại + ánh sáng tự nhiên). Quán có ảnh đẹp bán hơn 30-50% so với quán không ảnh trên app.',
          'Mô tả món ăn chi tiết: "Cơm gà da giòn + canh rong biển + rau xào + cơm trắng" tốt hơn "Cơm gà". Khách delivery không hỏi được, phải hiểu món từ mô tả.',
          'Theo dõi rating và phản hồi: Rating dưới 4.5 sao = app giảm hiển thị. Trả lời mọi review (tốt và xấu) trong 24 giờ. 1 review xấu không phản hồi = mất 5-10 khách tiềm năng.',
        ],
      },
      {
        type: 'warning-list',
        heading: 'Bẫy delivery — tránh ngay kẻo lỗ',
        content: [
          { icon: 'warning', title: 'Bán giá tại quán trên app = lỗ chắc', desc: 'Phí app 25-30% + bao bì 5-8% = mất 30-38% doanh thu. Phải tăng giá trên app 10-15% hoặc có menu riêng với khẩu phần tối ưu hơn.', severity: 'critical' },
          { icon: 'warning', title: 'Chạy khuyến mãi không tính toán', desc: 'Giảm 30% + free ship + hoa hồng app 27%. Món 50K bán 35K, app lấy 9.5K, NVL 18K, bao bì 5K = còn 2.5K (5%). Bán càng nhiều càng lỗ.', severity: 'critical' },
          { icon: 'warning', title: 'Phụ thuộc 100% vào 1 app', desc: 'App thay đổi thuật toán, tăng phí, hoặc gặp sự cố kỹ thuật → mất 50-70% đơn ngay. Nên có ít nhất 2 kênh: 1 app + 1 kênh riêng (Zalo, Facebook, website).', severity: 'warning' },
          { icon: 'warning', title: 'Delivery làm ảnh hưởng chất lượng dine-in', desc: 'Giờ cao điểm, bếp quá tải vì đơn delivery, khách tại quán phải chờ lâu. Giải pháp: giới hạn đơn delivery giờ cao điểm, hoặc có bếp/người riêng cho delivery.', severity: 'warning' },
        ] as KBWarningItem[],
      },
      {
        type: 'text',
        content: 'Delivery là kênh bán hàng tiềm năng — nhưng chỉ khi bạn tính đúng chi phí. Mục tiêu: delivery chiếm 30-40% tổng doanh thu (không quá 50% để giảm rủi ro phụ thuộc app), và biên lợi nhuận delivery đạt tối thiểu 10% sau khi trừ hết phí. Nếu dưới mức này, cần xem lại giá bán hoặc cắt món biên thấp.',
      },
    ],
  },
  {
    id: 'ai_in_fnb',
    slug: 'ung-dung-ai-trong-fnb',
    publishDate: '2026-02-15',
    icon: 'rocket',
    title: 'Ứng dụng AI & công nghệ trong F&B',
    subtitle: 'Không cần hiểu AI, chỉ cần biết dùng',
    color: 'secondary-light',
    category: 'technology',
    highlights: [
      { label: 'Tiết kiệm thời gian', value: '5-10 giờ/tuần' },
      { label: 'Giảm chi phí', value: '10-20%' },
      { label: 'Tăng hiệu quả', value: '2-3x' },
    ],
    sections: [
      {
        type: 'stat-grid',
        heading: 'Công cụ AI thực tế cho quán nhỏ — dùng ngay, miễn phí',
        content: [
          { icon: 'rocket', label: 'ChatGPT / Gemini', value: 'Miễn phí', desc: 'Viết mô tả menu, trả lời review khách, lên ý tưởng khuyến mãi, tính food cost, viết bài đăng Facebook. Tiết kiệm 3-5 giờ/tuần viết content.' },
          { icon: 'globe', label: 'Canva AI', value: 'Miễn phí - 120K/th', desc: 'Thiết kế poster, menu, story Instagram, banner khuyến mãi. Không cần biết Photoshop. AI tự gợi ý layout, xóa nền ảnh món ăn.' },
          { icon: 'phone', label: 'Meta Business Suite', value: 'Miễn phí', desc: 'Quản lý Facebook + Instagram 1 chỗ. Lên lịch đăng bài, xem thống kê, trả lời tin nhắn tự động. Tiết kiệm 2-3 giờ/tuần marketing.' },
          { icon: 'calculator', label: 'Google Sheets + AI', value: 'Miễn phí', desc: 'Theo dõi doanh thu, chi phí, tồn kho. Dùng công thức có sẵn hoặc nhờ ChatGPT viết công thức. Thay thế sổ tay ghi chép hoàn toàn.' },
        ] as KBStat[],
      },
      {
        type: 'table',
        heading: 'Công nghệ nên đầu tư theo từng giai đoạn',
        content: [
          { label: 'Mới bắt đầu (tháng 1-6)', range: '0 - 500K/tháng', note: 'POS cơ bản (gói miễn phí), thanh toán QR, fanpage Facebook, Zalo OA miễn phí. Chưa cần gì phức tạp — tập trung vào sản phẩm và khách hàng.' },
          { label: 'Ổn định (tháng 6-18)', range: '500K - 2 triệu/tháng', note: 'Nâng cấp POS (quản lý kho, báo cáo), đăng ký delivery app, chạy quảng cáo Facebook cơ bản (100-300K/ngày), dùng Canva làm hình.' },
          { label: 'Mở rộng (sau 18 tháng)', range: '2 - 5 triệu/tháng', note: 'POS đa chi nhánh, phần mềm quản lý nhân sự, loyalty app (tích điểm), camera AI kiểm soát kho, chatbot tự động trả lời khách.' },
          { label: 'Chuỗi (3+ chi nhánh)', range: '5 - 15 triệu/tháng', note: 'Hệ thống ERP, trung tâm dữ liệu tập trung, app đặt hàng riêng, kitchen display system (KDS), dự báo nhu cầu bằng AI.' },
        ] as KBTableRow[],
      },
      {
        type: 'list',
        heading: '5 việc AI làm tốt cho quán F&B ngay hôm nay',
        content: [
          'Viết mô tả món ăn hấp dẫn: Dán prompt vào ChatGPT: "Viết mô tả 50 từ cho món Bún bò Huế, giọng casual, cho thực đơn quán ăn bình dân." Được ngay 5-10 mô tả trong 2 phút thay vì ngồi nghĩ 1 tiếng.',
          'Trả lời review Google Maps: Copy review xấu của khách, dán vào ChatGPT: "Viết trả lời lịch sự, chuyên nghiệp, xin lỗi và hứa cải thiện." Trả lời review nhanh = tăng điểm uy tín, Google ưu tiên hiển thị.',
          'Tính food cost tự động: Dán công thức món ăn + giá nguyên liệu vào ChatGPT hoặc Google Sheets. Nó tính ra food cost %, gợi ý giá bán, và cảnh báo nếu vượt ngưỡng.',
          'Lên lịch đăng bài mạng xã hội: Dùng ChatGPT để lên 30 ý tưởng bài đăng trong 1 tháng (món mới, hậu trường bếp, review khách, khuyến mãi). Lên lịch trên Meta Business Suite, mỗi ngày tự động đăng.',
          'Dự báo nhập hàng: Ghi lại lượng bán mỗi ngày trong 2-4 tuần. Dán dữ liệu vào ChatGPT: "Dự báo lượng bán tuần tới và gợi ý lượng nhập NVL." Giảm lãng phí NVL 10-20% vì nhập đúng lượng cần.',
        ],
      },
      {
        type: 'warning-list',
        heading: 'Cảnh báo — đừng "nghiện" công nghệ',
        content: [
          { icon: 'warning', title: 'Đầu tư công nghệ trước khi có khách hàng', desc: 'Quán chưa có 30 đơn/ngày mà đã mua hệ thống 10-20 triệu. Công nghệ không tạo ra khách — sản phẩm ngon và marketing mới tạo ra khách. Mua công nghệ khi CẦN, không phải khi THÍCH.', severity: 'critical' },
          { icon: 'warning', title: 'Quá nhiều công cụ, không dùng hết', desc: 'Đăng ký 5-6 phần mềm, mỗi cái dùng 20% tính năng, tốn 2-3 triệu/tháng. Giữ tối đa 2-3 công cụ chính: POS + kế toán + marketing. Thêm khi thực sự cần.', severity: 'warning' },
          { icon: 'warning', title: 'Tin AI 100% không kiểm tra', desc: 'ChatGPT có thể sai về giá NVL, pháp luật, hoặc số liệu thị trường. Luôn kiểm tra lại thông tin quan trọng. Dùng AI làm trợ lý, không phải làm ông chủ.', severity: 'warning' },
        ] as KBWarningItem[],
      },
      {
        type: 'text',
        content: 'Công nghệ tốt nhất là công nghệ bạn THỰC SỰ DÙNG mỗi ngày và giúp tiết kiệm thời gian hoặc tiền bạc. Đừng chạy theo trend — quán có 1 cái POS đơn giản + 1 cái Google Sheets theo dõi doanh thu + ChatGPT hỗ trợ marketing là đủ để vận hành hiệu quả hơn 80% quán F&B hiện tại.',
      },
    ],
  },
  {
    id: 'accounting_software',
    slug: 'phan-mem-quan-ly-tai-chinh',
    publishDate: '2026-02-15',
    icon: 'laptop',
    title: 'Phần mềm quản lý tài chính cho F&B',
    subtitle: 'Biết tiền đi đâu mỗi ngày, không đợi cuối tháng',
    color: 'mint-light',
    category: 'technology',
    highlights: [
      { label: 'Quán không sổ sách', value: '60%+' },
      { label: 'Lãng phí NVL', value: '5-10%' },
      { label: 'Thời gian kiểm kê', value: 'Giảm 70%' },
    ],
    sections: [
      {
        type: 'text',
        content: 'Thực tế đau buồn: hơn 60% quán F&B nhỏ tại Việt Nam không có hệ thống theo dõi tài chính rõ ràng. Chủ quán biết "tháng này được" hay "tháng này eo le" nhưng không biết chính xác lãi/lỗ bao nhiêu, tiền mặt đâu, NVL tồn bao nhiêu. Kết quả: mất tiền mà không biết, chỉ đến khi hết tiền mới giật mình.',
      },
      {
        type: 'list',
        heading: 'Tại sao nhiều chủ quán không theo dõi tài chính',
        content: [
          'Nghĩ rằng "quán nhỏ không cần sổ sách": Sai. Quán càng nhỏ, mỗi đồng tiền càng quan trọng. Lệch 500K/ngày = 15 triệu/tháng = gần bằng lương 1 nhân viên.',
          'Không biết bắt đầu từ đâu: Quá nhiều con số, không ai dạy. Thực ra chỉ cần theo dõi 3 thứ: tiền vào (doanh thu), tiền ra (chi phí), và tiền còn lại (lãi/lỗ).',
          'Bận quá không có thời gian: Vừa nấu, vừa phục vụ, vừa tính tiền — lấy đâu thời gian ghi chép. Giải pháp: chỉ cần 10 phút cuối ngày, hoặc dùng POS tự ghi.',
          'Ví von: không theo dõi = lái xe ban đêm không bật đèn. Có thể đi được một lúc, nhưng sớm muộn sẽ đâm vào đâu đó.',
        ],
      },
      {
        type: 'table',
        heading: 'So sánh công cụ quản lý tài chính cho F&B',
        content: [
          { label: 'Sổ tay + máy tính', range: 'Miễn phí', note: 'Ghi chép cơ bản. Phù hợp 1-2 tuần đầu khi mới mở. Nhược điểm: dễ quên, khó tra cứu, không có báo cáo tự động.' },
          { label: 'Google Sheets / Excel', range: 'Miễn phí', note: 'Tạo bảng theo dõi doanh thu, chi phí, tồn kho. Dùng template có sẵn (nhờ ChatGPT tạo). Phù hợp quán 20-50 đơn/ngày.' },
          { label: 'KiotViet', range: '200-600K/tháng', note: 'POS kết hợp quản lý tài chính. Tự động tính doanh thu, lợi nhuận, tồn kho. Báo cáo trực quan. Phù hợp quán 50+ đơn/ngày.' },
          { label: 'iPOS', range: '300-800K/tháng', note: 'Mạnh về F&B: tính food cost theo món, quản lý recipe, báo cáo NVL. Phù hợp quán ăn, nhà hàng cần kiểm soát NVL chặt.' },
          { label: 'MISA CukCuk', range: '250-500K/tháng', note: 'Mạnh nhất về kế toán: tự động tính thuế, xuất hóa đơn, báo cáo thuế. Phù hợp quán đã muốn làm sổ sách chuẩn, có kế toán.' },
          { label: 'Sổ Bán Hàng', range: 'Miễn phí - 200K/th', note: 'App điện thoại, cực kỳ đơn giản. Chỉ ghi bán/chi, không cần cài đặt phức tạp. Phù hợp quán rất nhỏ, 1-2 người.' },
        ] as KBTableRow[],
      },
      {
        type: 'stat-grid',
        heading: 'Cần theo dõi gì — và bao lâu một lần',
        content: [
          { icon: 'money', label: 'Hàng ngày (5 phút)', value: 'Doanh thu + tiền mặt', desc: 'Cuối ngày: ghi tổng doanh thu, đếm tiền mặt so với máy POS, ghi chi phí phát sinh (nhập NVL, sửa chữa). Chỉ mất 5 phút.' },
          { icon: 'chart', label: 'Hàng tuần (15 phút)', value: 'Lãi/lỗ + food cost', desc: 'Mỗi thứ Hai: tính tổng doanh thu tuần, tổng chi phí, lãi/lỗ. So sánh food cost thực tế với lý thuyết. Phát hiện vấn đề sớm.' },
          { icon: 'calculator', label: 'Hàng tháng (1 giờ)', value: 'P&L + tồn kho + cash flow', desc: 'Báo cáo lãi/lỗ đầy đủ. Kiểm kê tồn kho (số thực tế vs sổ sách). Tính cash flow: tháng này còn bao nhiêu tiền vs tháng trước.' },
          { icon: 'target', label: 'Hàng quý (2 giờ)', value: 'Review tổng thể + kế hoạch', desc: 'So sánh 3 tháng: xu hướng doanh thu, chi phí nào tăng, món nào bán tốt/kém. Đặt mục tiêu quý tới và điều chỉnh chiến lược.' },
        ] as KBStat[],
      },
      {
        type: 'warning-list',
        heading: 'Sai lầm tài chính hay gặp nhất',
        content: [
          { icon: 'warning', title: 'Trộn tiền cá nhân và tiền quán', desc: 'Dùng tiền bán hàng để trả tiền nhà, đi chợ cá nhân. Cuối tháng không biết quán lãi hay lỗ. PHẢI có tài khoản riêng cho quán — dù là tài khoản ngân hàng bình thường.', severity: 'critical' },
          { icon: 'warning', title: 'Không tính lương cho chính mình', desc: 'Chủ quán tự làm hết nhưng "không tính lương". Kết quả: tưởng lãi 10 triệu/tháng, nhưng tính lương chủ 8 triệu thì thực ra lỗ 2 triệu. Luôn tính lương cho mình như một nhân viên.', severity: 'critical' },
          { icon: 'warning', title: 'Chỉ nhìn doanh thu, không nhìn lợi nhuận', desc: 'Bán 300 triệu/tháng nghe hoành tráng, nhưng chi phí 290 triệu = lãi có 10 triệu (3%). Tăng doanh thu mà không kiểm soát chi phí = bán càng nhiều, lỗ càng nhiều.', severity: 'warning' },
          { icon: 'warning', title: 'Không theo dõi hao hụt NVL', desc: 'NVL mất 5-10% do hỏng, đổ, thừa, lấy cắp. Quán doanh thu 200 triệu/tháng, hao hụt 5% = mất 10 triệu/tháng = 120 triệu/năm. Đủ để thuê thêm 1 nhân viên.', severity: 'warning' },
        ] as KBWarningItem[],
      },
      {
        type: 'text',
        content: 'Bắt đầu đơn giản: 1 cuốn sổ hoặc 1 file Google Sheets, ghi 3 con số mỗi ngày: doanh thu, chi phí, tiền mặt còn lại. Chỉ cần 5 phút/ngày nhưng hiệu quả hơn 90% quán không ghi gì. Khi quen rồi, nâng cấp lên POS có báo cáo tự động. Mục tiêu: luôn biết "hôm nay quán lãi hay lỗ" — không phải đợi cuối tháng mới biết.',
      },
    ],
  },
];

export default TECHNOLOGY_ARTICLES;
