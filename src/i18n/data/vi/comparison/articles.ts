import type { KBTopic, KBTableRow, KBStat, KBWarningItem } from '@/types';

const COMPARISON_ARTICLES: KBTopic[] = [
  {
    id: 'pos_systems_comparison',
    slug: 'so-sanh-he-thong-pos',
    publishDate: '2026-06-28',
    icon: 'calculator',
    title: 'So sánh hệ thống POS: KiotViet vs Sapo vs iPOS vs CukCuk',
    subtitle: 'Chọn POS nào cho quán của bạn — chi phí, tính năng, độ phức tạp',
    color: 'primary-light',
    category: 'technology',
    highlights: [
      { label: 'Chi phí trung bình', value: '200-800K/tháng' },
      { label: 'Thủ tục setup', value: '1-3 ngày' },
      { label: 'Quán dùng POS', value: '>85%' },
    ],
    sections: [
      {
        type: 'tldr',
        content: [
          'Chọn POS có sẵn → setup 1-3 ngày, không cần kỹ sư; tránh POS tự xây (3-6 tháng, rủi ro lớn)',
          'KiotViet: #1 chọn quán nhỏ 20-100 đơn/ngày; giao diện dễ, support tốt, 200-600K/tháng',
          'Sapo FnB: mạnh delivery & bán online; 250-700K/tháng; tích hợp Sapo web nếu bạn bán online',
          'iPOS: chuyên F&B (quản lý bàn, gọi món QR); 300-800K/tháng; giao diện phức nhưng tính năng sâu',
          'CukCuk/MISA: mạnh kế toán & kiểm soát tài chính; 250-500K/tháng; phù hợp muốn sổ sách chuẩn',
        ],
      },
      {
        type: 'table',
        heading: 'So sánh toàn diện 4 hệ thống POS phổ biến',
        content: [
          {
            label: 'KiotViet',
            range: '200-600K/tháng',
            note: 'Giao diện dễ dùng, phổ biến nhất quán nhỏ. Support 24/7, có gói miễn phí cho 1 chi nhánh cơ bản. Quản lý bàn, order, thanh toán ổn định. Tích hợp delivery app (Grab, Shopee) tốt. Khách hàng chủ yếu: quán 20-100 đơn/ngày.',
          },
          {
            label: 'Sapo FnB',
            range: '250-700K/tháng',
            note: 'Mạnh về quản lý kho và báo cáo. Tích hợp sàn Sapo (nếu bạn bán online). Tính năng delivery app tương tự KiotViet. Giao diện hiện đại, phù hợp quán muốn quản lý bán online song song.',
          },
          {
            label: 'iPOS',
            range: '300-800K/tháng',
            note: 'Chuyên sâu cho F&B: quản lý bàn, chia bill, gọi món qua QR, in công thức cho bếp. Tính năng nhiều nhưng giao diện phức tạp hơn. Phù hợp nhà hàng, quán lớn cần tính năng nâng cao.',
          },
          {
            label: 'CukCuk (MISA)',
            range: '250-500K/tháng',
            note: 'Của MISA, mạnh về kế toán & báo cáo tài chính. Tự động đồng bộ sổ sách, thuế, hóa đơn. Phù hợp chủ quán muốn kiểm soát tài chính chặt, có kế toán chuyên dụng.',
          },
          {
            label: 'Ghi sổ tay / Excel',
            range: 'Miễn phí',
            note: 'Không sai khi mới bắt đầu với quán nhỏ 1 mình. Nhưng khi quá 50 đơn/ngày hoặc có nhân viên, nên chuyển sang POS để ngăn gian lận.',
          },
        ] as KBTableRow[],
      },
      {
        type: 'stat-grid',
        heading: 'Điểm cộng & điểm trừ nhanh',
        content: [
          {
            icon: 'trending-up',
            label: 'KiotViet ✓',
            value: 'Dễ dùng, phổ biến',
            desc: 'Support tốt, có cộng đồng lớn, giải pháp sẵn, chi phí rẻ. Phù hợp 95% quán nhỏ.',
          },
          {
            icon: 'globe',
            label: 'Sapo FnB ✓',
            value: 'Toàn diện online',
            desc: 'Nếu bạn vừa bán trên Sapo website vừa quán, tích hợp tốt. Báo cáo rõ, khách hàng giao diện quen.',
          },
          {
            icon: 'settings',
            label: 'iPOS ✓',
            value: 'Tính năng sâu',
            desc: 'Quản lý chi tiết nhất cho F&B. Nếu cần gọi món QR, chia bill tự động, tính toán, iPOS tốt nhất.',
          },
          {
            icon: 'balance-scale',
            label: 'CukCuk ✓',
            value: 'Tài chính chặt',
            desc: 'Nếu cần sổ sách chuẩn, báo cáo thuế tự động, CukCuk là chọn. Nhưng yêu cầu kế toán.',
          },
        ] as KBStat[],
      },
      {
        type: 'list',
        heading: 'Tính năng bắt buộc — check list khi chọn POS',
        content: [
          'Quản lý order & thanh toán: tính được đơn nhanh, in bill, hỗ trợ thanh toán QR (MoMo, Zalo, chuyển khoản). Tất cả 4 hệ thống đều tốt ở điểm này.',
          'Quản lý kho NVL: nhập hàng, xuất kho theo món, cảnh báo hết. KiotViet, Sapo, iPOS đều có. CukCuk tập trung kế toán hơn quản lý kho.',
          'Báo cáo doanh thu: xem ngay hôm nay bán được bao nhiêu, món nào bán chạy, giờ nào đông. Tất cả đều có, nhưng CukCuk báo cáo tài chính kỹ nhất.',
          'Quản lý nhân viên: chấm công, tính lương, phân quyền. KiotViet & iPOS tốt. Sapo & CukCuk cơ bản hơn.',
          'Tích hợp delivery app: nhận đơn từ GrabFood, ShopeeFood trực tiếp POS. KiotViet & Sapo tốt nhất. iPOS & CukCuk yếu hơn.',
          'Hoạt động offline: mất mạng vẫn tính tiền được. Tất cả hỗ trợ.',
          'Hỗ trợ khách hàng: support 24/7 khi bị lỗi. KiotViet support tốt nhất, iPOS thứ 2, Sapo & CukCuk vừa phải.',
        ],
      },
      {
        type: 'table',
        heading: 'Chi phí thực tế khi dùng POS (ngoài phí hàng tháng)',
        content: [
          {
            label: 'Máy tính bảng / máy POS',
            range: '3-8 triệu',
            note: 'Tablet Android rẻ nhất từ 3 triệu. iPad từ 8 triệu. Máy POS chuyên dụng 5-15 triệu. Nên chọn tablet giá rẻ đầu tiên — upgrade sau khi quen.',
          },
          {
            label: 'Máy in bill',
            range: '1-3 triệu',
            note: 'Máy in nhiệt 80mm. Chọn loại Bluetooth để linh hoạt. Giấy in ~100K/cuộn, tiêu thụ 5-10 cuộn/tháng tùy lượng đơn.',
          },
          {
            label: 'Máy in bếp',
            range: '1-2 triệu',
            note: 'In order ra bếp. Chỉ cần khi có 2+ khu vực chế biến (bar + bếp). Không bắt buộc với quán nhỏ 1 bếp.',
          },
          {
            label: 'Ngăn kéo tiền',
            range: '500K-2 triệu',
            note: 'Kết nối POS, tự động mở khi thanh toán. Không bắt buộc nhưng giúp kiểm soát tiền mặt.',
          },
          {
            label: 'Cài đặt & đào tạo',
            range: '0-2 triệu',
            note: 'Nhiều hãng cài đặt miễn phí. Đào tạo nhân viên từ 2-4 giờ. Tính thêm "mất doanh thu" trong 1-2 ngày chuyển đổi.',
          },
        ] as KBTableRow[],
      },
      {
        type: 'warning-list',
        heading: 'Sai lầm khi chọn & dùng POS',
        content: [
          {
            icon: 'warning',
            title: 'Mua hệ thống đắt tiền ngay từ đầu',
            desc: 'Quán mới, 20-30 đơn/ngày, chưa cần POS 15-20 triệu. Bắt đầu với gói cơ bản 200-300K/tháng, nâng cấp sau khi thực sự cần.',
            severity: 'warning',
          },
          {
            icon: 'warning',
            title: 'Không đào tạo nhân viên đúng cách',
            desc: 'Mua POS nhưng nhân viên vẫn ghi giấy vì "nhanh hơn". Kết quả: dữ liệu sai, báo cáo vô nghĩa. Dành 2-3 ngày đào tạo kỹ trước khi bắt buộc.',
            severity: 'warning',
          },
          {
            icon: 'warning',
            title: 'Không kiểm tra chính sách khóa tài khoản',
            desc: 'Một số POS khóa tài khoản nếu chậm đóng phí, mất toàn bộ dữ liệu. Đọc kỹ: dữ liệu có thuộc về bạn không? Xuất ra Excel được không? Ngưng dùng thì sao?',
            severity: 'critical',
          },
          {
            icon: 'warning',
            title: 'Chọn POS vì theo trend, không vì nhu cầu',
            desc: 'Bạn cần quản lý kho, nhưng chọn iPOS vì nó "trendy". Kết quả: đối với bạn nó phức tạp, lãng phí tiền. Chọn theo nhu cầu thực tế.',
            severity: 'warning',
          },
        ] as KBWarningItem[],
      },
      {
        type: 'text',
        content: 'Kết luận: Nếu bạn chưa chắc chắn, bắt đầu với KiotViet — nó là "Goldilocks" cho 95% quán nhỏ F&B: dễ dùng, chi phí vừa phải, support tốt. Dùng 1-2 tháng, nếu thấy thiếu tính năng, lúc đó chuyển sang iPOS (quản lý kho chi tiết hơn) hoặc Sapo (nếu bạn vừa bán online). Đừng "tự xây" POS — chi phí triển khai cao, nguy hiểm mất dữ liệu, và bạn không phải IT professional.',
      },
    ],
  },
  {
    id: 'business_structure_comparison',
    slug: 'so-sanh-ho-kinh-doanh-va-cong-ty',
    publishDate: '2026-06-28',
    icon: 'building',
    title: 'So sánh Hộ kinh doanh vs Công ty TNHH: Cái nào cho quán của bạn?',
    subtitle: 'Quán F&B nhỏ chạy hộ KD 80% — nhưng khi nào nên chuyển sang Công ty?',
    color: 'secondary-light',
    category: 'legal',
    highlights: [
      { label: 'Quán chạy hộ KD', value: '>80%' },
      { label: 'Thuế khoán hộ KD', value: '4.5%/DT' },
      { label: 'Setup hộ KD', value: '3 ngày' },
      { label: 'Miễn thuế nếu DT', value: '<200 triệu/năm' },
    ],
    sections: [
      {
        type: 'tldr',
        content: [
          '>80% quán F&B nhỏ chạy hộ KD (không phải công ty); setup 3 ngày, lệ phí 100K, thuế khoán 4.5%/DT',
          'Chỉ chuyển sang Công ty nếu: DT >500 triệu/năm (hoặc >1 tỷ từ 2026), muốn mở chuỗi 2+, vay vốn lớn, hay cần hóa đơn GTGT đầu vào',
          'Thuế khoán hộ KD 4.5% là lợi thế lớn; công ty phải nộp TNDN 15-20% + GTGT 8-10% = >20% tổng cộng',
          'Hộ KD miễn thuế nếu DT <200 triệu/năm; công ty phải kế toán 500K-1.3 triệu/tháng',
        ],
      },
      {
        type: 'table',
        heading: 'So sánh toàn diện: Hộ KD vs Công ty TNHH',
        content: [
          {
            label: 'Thủ tục thành lập',
            range: 'HKD: 3 ngày',
            note: 'Công ty: 3-5 ngày + setup hóa đơn, chữ ký số, kế toán. HKD nhanh & đơn giản: nộp hồ sơ ở UBND huyện, 100K lệ phí, xong trong 1-2 ngày.',
          },
          {
            label: 'Chi phí ban đầu',
            range: 'HKD: ~1.5-3 triệu',
            note: 'Công ty: ~4-8 triệu + 6-16 triệu/năm kế toán. HKD: 100K lệ phí + 1-2 triệu ghi dấu + ATTP 1 triệu + khám sức khỏe.',
          },
          {
            label: 'Tư cách pháp nhân',
            range: 'HKD: Không',
            note: 'Công ty: Có — dễ vay vốn từ ngân hàng, ký hợp đồng với doanh nghiệp lớn. HKD khó vay số tiền >300 triệu.',
          },
          {
            label: 'Trách nhiệm tài sản',
            range: 'HKD: Vô hạn',
            note: 'Công ty: Hữu hạn (trong phạm vi vốn điều lệ). HKD: nợ quán = nợ cá nhân bạn, có thể được hỏi vay tiền nhân sự hay NCC.',
          },
          {
            label: 'Thuế',
            range: 'HKD: Khoán 4.5%/DT',
            note: 'Công ty: TNDN 15-20% + GTGT 8-10% = tổng 20-30%. HKD: DT 600 triệu/năm → thuế 27 triệu/năm = 2.25 triệu/tháng. Công ty: lãi 100 triệu → thuế TNDN 20 triệu.',
          },
          {
            label: 'Kế toán',
            range: 'HKD: Không bắt buộc',
            note: 'Công ty: Bắt buộc — thuê ngoài 500K-1.3 triệu/tháng. HKD: bạn tự ghi sổ hoặc thuê kế toán兼 giá rẻ hơn.',
          },
          {
            label: 'Hóa đơn',
            range: 'HKD: Cơ quan thuế cấp',
            note: 'Công ty: Tự phát hành hóa đơn GTGT, khấu trừ đầu vào. HKD: không khấu trừ thuế đầu vào, nhưng là quán ăn thường bán lẻ (không cần khấu trừ).',
          },
          {
            label: 'Mở chi nhánh',
            range: 'HKD: Được, thủ tục riêng',
            note: 'Công ty: Dễ dàng mở nhiều chi nhánh. HKD: mỗi chi nhánh phải đăng ký riêng = 100K lệ phí x số chi nhánh.',
          },
        ] as KBTableRow[],
      },
      {
        type: 'stat-grid',
        heading: 'Thuế hộ kinh doanh F&B (hệ thống khoán)',
        content: [
          {
            icon: 'money',
            label: 'Thuế GTGT',
            value: '3%',
            desc: 'Trên tổng doanh thu — ngành dịch vụ ăn uống. Cố định, không tính lợi nhuận.',
          },
          {
            icon: 'wallet',
            label: 'Thuế TNCN',
            value: '1.5%',
            desc: 'Trên tổng doanh thu — thuế thu nhập cá nhân từ hoạt động kinh doanh.',
          },
          {
            icon: 'chart',
            label: 'Tổng thuế khoán',
            value: '4.5%',
            desc: 'DT 500 triệu/năm → thuế 22.5 triệu = 1.9 triệu/tháng. Tính đơn giản, dễ dự tính.',
          },
          {
            icon: 'target',
            label: 'Miễn thuế',
            value: '<200 triệu/năm',
            desc: 'Từ 07/2025: HKD F&B doanh thu dưới 200 triệu/năm không phải nộp thuế khoán. Cực kỳ thuận lợi.',
          },
        ] as KBStat[],
      },
      {
        type: 'table',
        heading: 'Ví dụ tính thuế chi tiết: Quán cà phê DT 800 triệu/năm',
        content: [
          {
            label: 'Doanh thu tháng',
            range: '~67 triệu',
            note: '= 800 triệu ÷ 12 tháng (trung bình)',
          },
          {
            label: 'Thuế GTGT (3%)',
            range: '2 triệu/tháng',
            note: '= 3% × 67 triệu = 24 triệu/năm',
          },
          {
            label: 'Thuế TNCN (1.5%)',
            range: '1 triệu/tháng',
            note: '= 1.5% × 67 triệu = 12 triệu/năm',
          },
          {
            label: 'Tổng thuế/tháng',
            range: '3 triệu/tháng',
            note: '= 36 triệu/năm (4.5% × 800 triệu)',
          },
          {
            label: 'Lệ phí môn bài',
            range: '1 triệu/năm',
            note: 'DT > 500 triệu. Dự định sẽ bỏ từ 2026',
          },
        ] as KBTableRow[],
      },
      {
        type: 'warning-list',
        heading: 'Khi nào NÊN chuyển sang Công ty TNHH?',
        content: [
          {
            icon: 'trending-up',
            title: 'Doanh thu vượt 1 tỷ/năm (từ 06/2025)',
            desc: 'Từ 06/2025, DT ≥1 tỷ/năm bắt buộc hóa đơn điện tử + máy tính tiền kết nối cơ quan thuế. Nên xem xét chuyển đổi sang Công ty để quản lý dễ hơn.',
            severity: 'warning',
          },
          {
            icon: 'target',
            title: 'Muốn mở chuỗi 2-3+ chi nhánh',
            desc: 'HKD vẫn mở được nhiều địa điểm, nhưng quản lý phức tạp + lệ phí cộng dồn. Công ty TNHH là chính thức, dễ quản lý, và có tư cách pháp nhân.',
            severity: 'warning',
          },
          {
            icon: 'wallet',
            title: 'Cần vay vốn ngân hàng >500 triệu',
            desc: 'Ngân hàng ưu tiên cho vay doanh nghiệp có tư cách pháp nhân. HKD khó vay số lớn. Nếu muốn vay >1 tỷ, phải có Công ty.',
            severity: 'warning',
          },
          {
            icon: 'handshake',
            title: 'Đối tác yêu cầu hóa đơn GTGT khấu trừ',
            desc: 'Doanh nghiệp lớn (chuỗi, bán buôn) cần hóa đơn GTGT để khấu trừ thuế đầu vào. HKD không tự phát hành được.',
            severity: 'tip',
          },
          {
            icon: 'clipboard',
            title: 'Có nhiều chi phí đầu vào hợp lệ',
            desc: 'Công ty được khấu trừ thuế GTGT đầu vào (máy móc, NVL, thiết bị nếu có hóa đơn). HKD không được khấu trừ nhưng không cần (bán lẻ, áp dụng thuế khoán).',
            severity: 'tip',
          },
        ] as KBWarningItem[],
      },
      {
        type: 'list',
        heading: 'Chi phí thực tế đăng ký Hộ kinh doanh F&B (từ A-Z)',
        content: [
          'Lệ phí đăng ký kinh doanh: 100.000 đồng (3 ngày xử lý)',
          'Khắc dấu (không bắt buộc): 200.000-500.000 đồng',
          'Xin giấy chứng nhận ATTP: 500.000-1.000.000 đồng (15-20 ngày)',
          'Khám sức khỏe chủ cơ sở + nhân viên: 200.000-400.000 đồng/người (cần trước khi cấp ATTP)',
          'Tập huấn kiến thức ATTP: 500.000 đồng/nhóm (thường online, 4-8 giờ)',
          'Bảng hiệu (nếu cần): 500.000-1.500.000 đồng',
          'Tổng chi phí: khoảng 1.5-3 triệu đồng, hoàn tất trong 3-4 tuần',
        ],
      },
      {
        type: 'text',
        content: 'Khuyến cáo: 99% quán F&B nhỏ nên chạy Hộ kinh doanh khi mở. Chi phí thấp, thủ tục nhanh, thuế khoán lợi thế. Chỉ chuyển sang Công ty khi thực sự cần — doanh thu lớn (>500 triệu/năm), mở chuỗi, hay vay vốn. Nếu nghi ngờ, tư vấn với kế toán hoặc quản lý thuế huyện (miễn phí).',
      },
    ],
  },
];

export default COMPARISON_ARTICLES;
