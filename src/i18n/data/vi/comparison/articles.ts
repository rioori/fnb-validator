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
  {
    id: 'validator_vs_excel',
    slug: 'validator-vs-excel-template-tinh-chi-phi-fnb',
    publishDate: '2026-06-28',
    icon: 'chart',
    title: 'Validator vs Excel template — công cụ nào để tính chi phí mở quán F&B?',
    subtitle: 'So sánh thực tế: tự build Excel hay dùng tool chuyên dụng — khi nào dùng cái nào',
    seoTitle: 'Validator vs Excel template tính chi phí F&B: Cái nào phù hợp với bạn?',
    seoDescription: 'So sánh Validator.vn và Excel template miễn phí cho việc tính vốn mở quán cafe/nhà hàng. Khi nào Excel đủ, khi nào cần tool chuyên. Bảng so sánh chi tiết + checklist chọn.',
    color: 'primary-light',
    category: 'cost',
    highlights: [
      { label: 'Excel template', value: 'Miễn phí', note: 'tự build hoặc tải sẵn' },
      { label: 'Validator.vn', value: 'Miễn phí', note: 'không cần đăng ký' },
      { label: 'Setup time', value: 'Excel 2-4h / Validator 5 phút', note: '' },
      { label: 'Benchmark VN', value: 'Excel: KHÔNG / Validator: TỰ ĐỘNG', note: '' },
    ],
    sections: [
      {
        type: 'tldr',
        content: [
          'Excel template phù hợp khi bạn có template chuẩn + biết F&B benchmark (food cost %, labor %, rent %) — nếu không, dễ tính sai',
          'Validator có sẵn benchmark theo 8 mô hình × 13 thành phố — nhập số liệu của bạn, ra ngay verdict + cảnh báo',
          'Excel: control hoàn toàn, tự thay đổi formula — nhưng KHÔNG có ramp-up, seasonality, sensitivity analysis built-in',
          'Validator: model 12 tháng có ramp-up + seasonal + 8 sensitivity scenarios — chuyên cho F&B, không tổng quát',
          'Rule of thumb: lần đầu mở quán → Validator. Có 5+ quán đã quản lý → Excel custom có thể đủ',
        ],
      },
      {
        type: 'text',
        content: 'Khi tính chi phí mở quán F&B, người ta thường tìm "Excel template miễn phí" — và bị overload bởi 50+ template trên Google, không biết cái nào dùng được. Hoặc tự build Excel từ scratch — mất 3-5 giờ, dễ sót khoản chi phí, không biết benchmark đúng là gì. Bài này so sánh thẳng 2 cách tiếp cận: Excel template vs tool chuyên dụng như Validator, và khi nào dùng cái nào.',
      },
      {
        type: 'table',
        heading: 'So sánh chi tiết — feature by feature',
        content: [
          { label: 'Chi phí', range: 'Excel: 0đ / Validator: 0đ', note: 'Cả 2 đều miễn phí. Validator không cần đăng ký.' },
          { label: 'Thời gian setup lần đầu', range: 'Excel 2-4h / Validator 5 phút', note: 'Excel: download + tùy chỉnh + nhập data. Validator: vào trang nhập số ngay.' },
          { label: 'Benchmark Việt Nam có sẵn', range: 'Excel: KHÔNG / Validator: 8 mô hình × 13 thành phố', note: 'Excel template phổ thông chỉ có hard-coded số. Validator update theo data thật.' },
          { label: 'Ramp-up model', range: 'Excel: thường KHÔNG / Validator: built-in 45-100% công suất 6 tháng', note: 'Tháng 1-3 doanh thu chỉ 30-60% — nhiều Excel quên tính → overshoot kỳ vọng.' },
          { label: 'Seasonality', range: 'Excel: KHÔNG / Validator: có (Tết +10%, Tháng 2-3 -25%)', note: 'Tháng Tết doanh thu khác hẳn ngày thường. Validator multiplier sẵn.' },
          { label: 'Break-even analysis', range: 'Excel: tự build / Validator: tự động', note: 'Excel cần biết công thức BEP = Fixed / (1 - Variable Rate). Validator click 1 nút.' },
          { label: 'Sensitivity scenarios', range: 'Excel: KHÔNG / Validator: 8 scenarios (rent ±10%, food cost ±5%...)', note: '"Nếu rent tăng 10%, mô hình còn lãi không?" — Excel cần Goal Seek thủ công.' },
          { label: 'Cảnh báo (alerts)', range: 'Excel: KHÔNG / Validator: tự alert nếu prime cost >65%, rent >25%', note: 'Validator phát hiện ngay khi số liệu không healthy.' },
          { label: 'Mobile-friendly', range: 'Excel: KÉM / Validator: tốt', note: 'Excel trên điện thoại = nightmare. Validator responsive.' },
          { label: 'Lưu data', range: 'Excel: lưu file / Validator: localStorage', note: 'Validator lưu draft tự động, không cần đăng ký.' },
          { label: 'Custom formula', range: 'Excel: HOÀN TOÀN / Validator: hạn chế', note: 'Đây là điểm yếu của Validator — nếu mô hình bạn rất đặc thù, Excel linh hoạt hơn.' },
          { label: 'Multi-scenario compare', range: 'Excel: copy sheet / Validator: 2 scenario built-in', note: 'So sánh "Q1 vs Q7" hoặc "cafe vs eatery" — cả 2 đều làm được.' },
        ] as KBTableRow[],
      },
      {
        type: 'warning-list',
        heading: 'Sai lầm phổ biến khi dùng Excel template',
        content: [
          { icon: 'warning', title: 'Dùng template Mỹ/Trung Quốc cho thị trường VN', desc: 'Food cost VN 28-35%, Mỹ 28-32% — chênh ít, nhưng labor VN 20-25%, Mỹ 30-35% → kết quả lệch 10-15%. Bao bì, BHXH, structure thuế hoàn toàn khác.', severity: 'critical' },
          { icon: 'warning', title: 'Quên ramp-up 3-6 tháng đầu', desc: 'Tháng 1-3 doanh thu thường chỉ 30-60% công suất. Nếu Excel tính trên 100% công suất ngay → BEP rút ngắn 2-3 tháng so với thực tế.', severity: 'critical' },
          { icon: 'warning', title: 'Bỏ sót BHXH 21.5% chủ đóng', desc: 'Excel cơ bản chỉ tính lương cứng. BHXH = +21.5% → labor cost thực tế cao hơn 21.5% so với Excel cho thấy.', severity: 'critical' },
          { icon: 'warning', title: 'Không có sensitivity analysis', desc: 'Excel cho 1 con số "BEP 6 tháng" nhưng không biết: nếu rent tăng 10% thì BEP thành mấy? Decision-making thiếu robustness.', severity: 'warning' },
          { icon: 'warning', title: 'Hard-code giá thuê theo cảm tính', desc: 'Excel template không có data thuê mặt bằng theo thành phố. Nhiều người gõ 15tr/tháng cho Q1 HCMC (thực tế 60-120tr) → BEP sai hoàn toàn.', severity: 'warning' },
        ] as KBWarningItem[],
      },
      {
        type: 'list',
        heading: 'Khi nào dùng Excel vs Validator',
        content: [
          'DÙNG EXCEL: bạn có 5+ quán đã vận hành, biết rõ benchmark riêng của mình, cần custom formula đặc thù (vd: model franchise, royalty 6%/doanh thu).',
          'DÙNG VALIDATOR: bạn mở quán lần đầu, không biết food cost % nên là bao nhiêu, cần benchmark tham chiếu nhanh, muốn được cảnh báo nếu số liệu unhealthy.',
          'DÙNG CẢ HAI: dùng Validator để check viability nhanh (5 phút), nếu OK → dùng Excel để model chi tiết hơn theo concept riêng.',
          'KHÔNG DÙNG: nếu chưa khảo sát vị trí + chưa hỏi giá thuê + chưa research food cost cụ thể → cả Excel lẫn Validator đều garbage-in-garbage-out.',
        ],
      },
      {
        type: 'text',
        content: 'Excel template free trên Google đầy — nhưng 80% là copy của copy, không có benchmark VN, không có ramp-up, không có sensitivity. Validator được build riêng cho thị trường F&B Việt Nam với data thực tế từ 100+ quán. Dùng Validator để check viability lần đầu (5 phút, miễn phí, không cần đăng ký), nếu mô hình OK → đi sâu hơn với Excel custom hoặc thuê consultant.',
      },
    ],
  },
  {
    id: 'validator_vs_consultant',
    slug: 'validator-vs-thue-tu-van-fnb',
    publishDate: '2026-06-28',
    icon: 'people',
    title: 'Validator vs thuê tư vấn F&B — chi phí 50-500tr cho 1 lần consult, có đáng không?',
    subtitle: 'So sánh thực tế: dùng tool miễn phí, thuê consultant 50tr-500tr, hay kết hợp cả hai',
    seoTitle: 'Validator vs Thuê Tư Vấn F&B: Khi Nào Cần Consultant 50-500 Triệu?',
    seoDescription: 'So sánh dùng Validator (miễn phí) với thuê F&B consultant (50tr-500tr). Khi nào tool đủ, khi nào cần expert. Bảng giá consultant Việt Nam + checklist chọn cách phù hợp.',
    color: 'primary-light',
    category: 'cost',
    highlights: [
      { label: 'Validator', value: 'Miễn phí', note: 'tự dùng bất kỳ lúc nào' },
      { label: 'Consultant cơ bản', value: '20-80tr', note: '1-2 buổi audit + report' },
      { label: 'Consultant chuyên sâu', value: '100-300tr', note: '3-6 tháng đồng hành' },
      { label: 'Top-tier setup chuỗi', value: '300tr-1 tỷ+', note: 'full setup chuỗi' },
    ],
    sections: [
      {
        type: 'tldr',
        content: [
          'Validator (miễn phí) phù hợp khi tự muốn check viability mô hình + hiểu được benchmark — pre-decision phase',
          'Consultant 20-80tr phù hợp khi cần outside perspective + audit chuyên sâu + report viết tay 1 lần',
          'Consultant 100-300tr phù hợp khi mở quán đầu tiên + cần đồng hành 3-6 tháng (concept, location, hiring, soft launch)',
          'Top-tier 300tr+ phù hợp khi mở chuỗi 3+ stores + cần SOP, P&L system, brand framework — đầu tư lớn lần đầu',
          'Rule: dùng Validator pre-decision (miễn phí, 30 phút), thuê consultant post-decision (cần expertise + accountability)',
        ],
      },
      {
        type: 'text',
        content: 'Khi mở quán F&B đầu tiên, hai câu hỏi luôn xuất hiện: "Tự làm có được không?" và "Có cần thuê consultant không?" — Câu trả lời tùy: budget, kinh nghiệm, quy mô, rủi ro chịu được. Bài này phân tích thẳng — Validator (miễn phí) phù hợp giai đoạn nào, consultant 50-500tr giúp gì, khi nào nên kết hợp cả hai.',
      },
      {
        type: 'table',
        heading: 'Bảng giá consultant F&B Việt Nam (tham khảo 2026)',
        content: [
          { label: 'Audit cơ bản 1 buổi', range: '10-25 triệu', note: 'Consultant đi xem quán + phỏng vấn chủ + đưa 5-10 nhận xét. Phù hợp khi quán đang vận hành cần outside eye.' },
          { label: 'Audit + report viết tay', range: '20-60 triệu', note: 'Bao gồm audit + báo cáo chi tiết 20-40 trang. 2-4 tuần delivery. Tốt nhất khi muốn evidence base trước quyết định lớn.' },
          { label: 'Consultant đồng hành 3 tháng', range: '80-150 triệu', note: 'Họp weekly, hỗ trợ ra quyết định, review SOP, đào tạo nhân sự. Phù hợp giai đoạn ramp-up hoặc fix vấn đề lớn.' },
          { label: 'Consultant đồng hành 6 tháng (concept-to-launch)', range: '150-300 triệu', note: 'Đi cùng từ concept → location scouting → menu engineering → hiring → soft launch. Bao gồm 3-5 ngày on-site/tháng.' },
          { label: 'Setup chuỗi (concept + SOP + training)', range: '300-800 triệu', note: 'Build từ scratch: brand, concept, SOP, recipe cards, training manual, P&L system. 6-12 tháng. FnB Director, Horeca Business School level.' },
          { label: 'Top-tier (CEO-as-service)', range: '500tr - 1 tỷ+', note: 'Cựu CEO chains lớn (Golden Gate, KIDO, Highlands) đồng hành 1-2 năm với equity hoặc retainer. Hiếm và đắt.' },
        ] as KBTableRow[],
      },
      {
        type: 'table',
        heading: 'Validator vs Consultant — khi nào dùng cái nào',
        content: [
          { label: 'Pre-decision (chưa quyết mở quán)', range: 'Validator (miễn phí)', note: 'Check viability mô hình trong 30 phút. Không cần spend tiền chưa biết có mở không.' },
          { label: 'Location scouting', range: 'Validator + Consultant lite (10-30tr)', note: 'Validator cho rent benchmark, consultant đi xem 3-5 mặt bằng cùng bạn — kinh nghiệm thật.' },
          { label: 'Concept + menu engineering', range: 'Consultant 80-200tr', note: 'Cần expert hiểu thị trường + food cost + pricing — tool không thay được.' },
          { label: 'Vận hành sau khai trương', range: 'Validator (existing mode) + consultant audit', note: 'Validator existing mode chẩn đoán P&L, consultant audit hàng quý nếu cần.' },
          { label: 'Mở rộng chuỗi 3+ stores', range: 'Consultant 300-800tr', note: 'SOP, P&L system, brand framework — đầu tư đáng giá để scale đúng cách.' },
          { label: 'Cần outside perspective', range: 'Consultant audit 1 buổi 10-25tr', note: 'Rẻ, nhanh, valuable. Tool không thể "challenge" bạn như con người.' },
        ] as KBTableRow[],
      },
      {
        type: 'warning-list',
        heading: 'Sai lầm khi quyết định consultant',
        content: [
          { icon: 'warning', title: 'Thuê consultant vì "sợ tự làm sai" — không có vấn đề cụ thể', desc: 'Consultant không phải bảo hiểm. Nếu chỉ vì insecure → tiền lãng phí. Thuê khi có vấn đề CỤ THỂ (vd: "concept menu không bán được", "labor cost vượt 35%").', severity: 'critical' },
          { icon: 'warning', title: 'Chọn consultant "nổi tiếng" thay vì "phù hợp"', desc: 'Top consultant Việt thường specialize: fine dining, casual chain, cafe, bar — chọn người chuyên segment của bạn, không phải người Forbes vinh danh nhất.', severity: 'critical' },
          { icon: 'warning', title: 'Không kiểm tra reference / case study', desc: 'Yêu cầu consultant cho 2-3 client cũ liên hệ trực tiếp. Nếu họ từ chối = đỏ cờ.', severity: 'critical' },
          { icon: 'warning', title: 'Trả 100% upfront', desc: 'Industry standard: 30-50% upfront + milestone payment. Trả full ngay = mất leverage nếu consultant không deliver.', severity: 'warning' },
          { icon: 'warning', title: 'Không có deliverables rõ ràng trong contract', desc: 'Phải ghi cụ thể: report 30 trang, SOP cho 5 vị trí, training 10 buổi, weekly call 60 phút × 12 tuần. "Tư vấn theo nhu cầu" = scope creep cả 2 chiều.', severity: 'warning' },
          { icon: 'warning', title: 'Dùng Validator MIỄN PHÍ rồi paid consultant tính lại gì hơn', desc: 'Một số consultant chỉ dùng tool tương tự + chart sang slide đẹp. Hỏi rõ: họ thêm giá trị gì so với tool free? Insight + experience + accountability hay chỉ là wrapping?', severity: 'warning' },
        ] as KBWarningItem[],
      },
      {
        type: 'list',
        heading: 'Quyết định: tool hay consultant?',
        content: [
          'Budget <50tr setup phase: Validator + 1 buổi audit consultant 10-25tr. Spend tiền vào setup, không vào tư vấn nhiều.',
          'Budget 50-200tr setup phase: Validator pre-decision + consultant 1 buổi audit + 1 buổi review pre-launch. ~30-50tr cho consult.',
          'Budget 200tr-1 tỷ setup phase: Validator + consultant 3-6 tháng đồng hành. ~100-250tr cho consult. Tỉ lệ 15-25% budget cho expert advice = healthy.',
          'Budget >1 tỷ setup phase: Validator (vẫn dùng để model) + consultant chuyên sâu setup chuỗi. Tỉ lệ 20-30% budget cho consult vì rủi ro cao.',
          'Đang vận hành quán có sẵn: Validator existing mode (chẩn đoán) + consultant audit hàng quý 20-40tr. Total consult ~80-160tr/năm.',
          'Mở chuỗi 3+ stores: bắt buộc consultant 300tr+. Validator hỗ trợ scenario planning cho từng store.',
        ],
      },
      {
        type: 'text',
        content: 'Validator là tool — không thay được con người. Consultant là người — đắt nhưng có experience + accountability. Cả 2 đều có giá trị riêng. Rule đơn giản: dùng Validator để screen ý tưởng (miễn phí), thuê consultant khi đã quyết định mở và cần đồng hành. Đừng skip Validator vì "tool free chắc kém" — nhiều consultant đắt tiền cũng chỉ deliver những gì tool free đã có. Đừng skip consultant vì "tool đủ rồi" — khi vào setup phase, kinh nghiệm thật của con người không tool nào thay được.',
      },
    ],
  },
  {
    id: 'validator_vs_pos',
    slug: 'validator-vs-pos-cho-nguoi-moi-mo-quan',
    publishDate: '2026-06-28',
    icon: 'calculator',
    title: 'Validator vs POS (KiotViet, Sapo, MISA) — tool nào trước khi mở quán?',
    subtitle: 'POS là tool VẬN HÀNH (sau khai trương), Validator là tool QUYẾT ĐỊNH (trước khi mở) — đừng nhầm',
    seoTitle: 'Validator vs POS (KiotViet, Sapo): Tool Nào Cần Trước Khi Mở Quán F&B?',
    seoDescription: 'POS (KiotViet, Sapo, MISA) là tool vận hành sau khai trương. Validator là tool quyết định trước khi mở. So sánh + thứ tự dùng: validate ý tưởng trước, POS sau.',
    color: 'primary-light',
    category: 'technology',
    highlights: [
      { label: 'Validator', value: 'Trước khi mở', note: 'check viability mô hình' },
      { label: 'POS (KiotViet, Sapo, MISA)', value: 'Sau khai trương', note: 'quản lý đơn + thanh toán' },
      { label: 'Validator phí', value: 'Miễn phí', note: '' },
      { label: 'POS phí', value: '200-800K/tháng', note: '' },
    ],
    sections: [
      {
        type: 'tldr',
        content: [
          'POS (KiotViet, Sapo, iPOS, CukCuk) chỉ có ích SAU khi quán mở — không thay được việc validate mô hình kinh doanh trước',
          'Validator giúp trả lời "Mở quán này có lãi không?" — POS giúp trả lời "Quán đang vận hành thế nào?"',
          'Thứ tự đúng: Validator (pre-launch) → quyết định mở → ký mặt bằng + setup → chọn POS (post-launch) → vận hành + track với POS + revalidate với Validator existing mode',
          'POS không có sensitivity analysis, không cảnh báo nếu mô hình unhealthy — chỉ tracks thực tế. Validator predicts + simulates.',
          'Cả 2 đều cần: Validator để DECIDE, POS để OPERATE — không phải 1 thay được cái kia',
        ],
      },
      {
        type: 'text',
        content: 'Câu hỏi thường gặp khi mới mở quán: "Tôi nên dùng KiotViet hay Sapo POS?" — sai câu hỏi. Đúng câu hỏi đầu tiên phải là: "Mô hình quán này có khả thi không?" — câu trả lời cho cái sau cần Validator (tool miễn phí, 5 phút). Cho cái trước, POS chỉ cần khi quán đã mở. Bài này phân biệt rõ 2 loại tool + thứ tự dùng đúng.',
      },
      {
        type: 'table',
        heading: 'Validator vs POS — phân biệt rõ vai trò',
        content: [
          { label: 'Khi nào dùng', range: 'Validator: TRƯỚC khi mở / POS: SAU khi khai trương', note: 'Lẫn lộn 2 cái = mất tiền POS 3-6 tháng không dùng được.' },
          { label: 'Câu hỏi giải đáp', range: 'Validator: "Mô hình có lãi không?" / POS: "Quán hôm nay bán bao nhiêu?"', note: 'Predict vs Track — 2 mục đích hoàn toàn khác nhau.' },
          { label: 'Input cần', range: 'Validator: số liệu kỳ vọng (rent, doanh thu, NVL %) / POS: đơn hàng thực tế', note: 'Validator simulate, POS record.' },
          { label: 'Output', range: 'Validator: BEP + payback + verdict / POS: doanh thu daily, top món, profit margin', note: 'Validator forecast, POS reporting.' },
          { label: 'Phí', range: 'Validator: miễn phí / POS: 200-800K/tháng', note: 'POS cần invest ongoing, Validator chỉ dùng khi cần.' },
          { label: 'Setup time', range: 'Validator: 5 phút / POS: 1-3 ngày + training', note: 'POS phức tạp hơn vì connect inventory + payment + accounting.' },
          { label: 'Sensitivity analysis', range: 'Validator: 8 scenarios / POS: KHÔNG', note: 'POS không trả lời "Nếu rent tăng 10% thì sao?".' },
          { label: 'Existing business mode', range: 'Validator: có (chẩn đoán) / POS: tracking', note: 'Validator existing = lessons learned. POS = ongoing operations.' },
        ] as KBTableRow[],
      },
      {
        type: 'table',
        heading: 'Thứ tự dùng tool — pre-launch đến vận hành',
        content: [
          { label: 'Tuần 1-2 (idea phase)', range: 'Validator (free)', note: 'Test 3-5 mô hình + thành phố khác nhau. Loại trừ ý tưởng unhealthy ngay.' },
          { label: 'Tuần 3-4 (decision phase)', range: 'Validator + consultant audit (optional)', note: 'Nếu Validator nói OK → có thể audit thêm với consultant 10-25tr.' },
          { label: 'Tháng 2-3 (setup phase)', range: 'Excel + thiết kế + thủ tục pháp lý', note: 'Lúc này không cần POS, không cần Validator. Focus build quán.' },
          { label: '2 tuần trước khai trương', range: 'Setup POS (KiotViet/Sapo/iPOS/MISA)', note: 'Chọn POS chính, training nhân viên 2-3 ngày, test order flow.' },
          { label: 'Sau khai trương', range: 'POS daily + Validator existing quarterly', note: 'POS dùng hàng ngày, Validator existing mode 3 tháng 1 lần để chẩn đoán health.' },
          { label: 'Mở quán thứ 2-3', range: 'Validator (forecast) + POS chains feature', note: 'Validator simulate store thứ 2, POS chains feature compare performance giữa stores.' },
        ] as KBTableRow[],
      },
      {
        type: 'warning-list',
        heading: 'Sai lầm phổ biến khi chọn tool',
        content: [
          { icon: 'warning', title: 'Mua POS trước khi validate ý tưởng', desc: 'Trả 200-800K/tháng × 3 tháng = 600-2,400K cho POS chưa dùng. Validate Validator (5 phút, free) trước; nếu mô hình unhealthy → bỏ ý tưởng, không cần POS.', severity: 'critical' },
          { icon: 'warning', title: 'Dùng POS để "predict" tương lai', desc: 'POS chỉ track quá khứ, không predict tương lai. Nếu muốn dự đoán "tháng tới có lãi không nếu giảm price 10%?" → cần Validator scenario.', severity: 'critical' },
          { icon: 'warning', title: 'Bỏ qua Validator existing mode sau khi mở', desc: 'Nhiều người chỉ dùng Validator trước khi mở, sau đó chỉ POS. Sai — Validator existing mode chẩn đoán health quán, POS chỉ cho biết doanh thu chứ không cho biết health.', severity: 'critical' },
          { icon: 'warning', title: 'Chọn POS không tích hợp được delivery app', desc: 'POS cũ không sync với GrabFood/ShopeeFood → cập nhật thủ công = sai + tốn thời gian. Check trước khi ký hợp đồng POS.', severity: 'warning' },
          { icon: 'warning', title: 'Skip POS chính, dùng Excel + tay', desc: 'Quán nhỏ 30-50 đơn/ngày Excel còn được. >50 đơn = không kịp + nhiều sai sót. POS 200K/tháng cheap so với loss từ sai sót.', severity: 'warning' },
        ] as KBWarningItem[],
      },
      {
        type: 'list',
        heading: 'Workflow tối ưu — kết hợp Validator + POS',
        content: [
          'Pre-launch: Validator (free) → test 3-5 mô hình → pick mô hình healthy nhất → ký mặt bằng + setup quán.',
          '2 tuần trước khai trương: Pick POS dựa trên nhu cầu (xem [So sánh hệ thống POS](https://www.validator.vn/so-sanh/so-sanh-he-thong-pos)). Setup + training.',
          'Tuần đầu khai trương: POS track mọi đơn. Validator existing mode chưa dùng — chưa đủ data.',
          'Tháng 2-3: POS daily. Cuối tháng 3, dùng POS data nhập vào Validator existing mode → chẩn đoán: prime cost OK? Rent ratio OK? Cảnh báo gì?',
          'Hàng quý: revalidate với Validator existing mode. Nếu unhealthy → identify issue → action. POS cho biết WHAT, Validator cho biết WHY.',
          'Mở store thứ 2: Validator forecast cho store mới + POS chains feature compare giữa stores. Decision-making data-driven.',
        ],
      },
      {
        type: 'text',
        content: 'POS và Validator giải quyết 2 vấn đề khác nhau — đừng nhầm lẫn. POS là tool vận hành (sau khai trương), Validator là tool quyết định (trước khi mở + chẩn đoán sau). Dùng Validator MIỄN PHÍ để validate ý tưởng trước; nếu mô hình OK, mới đầu tư POS 200-800K/tháng. Sau khi mở, dùng cả 2: POS daily tracking, Validator existing mode quarterly diagnosis. Đây là workflow tối ưu cho 99% quán F&B nhỏ-vừa Việt Nam.',
      },
    ],
  },
];

export default COMPARISON_ARTICLES;
