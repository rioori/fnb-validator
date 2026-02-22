import type { KBTopic, KBTableRow, KBStat, KBWarningItem } from '@/types';

const LEGAL_ARTICLES: KBTopic[] = [
  {
    id: 'legal_basics',
    slug: 'phap-ly-giay-phep',
    icon: 'legal',
    title: 'Pháp lý & Giấy phép',
    subtitle: 'Đừng mở quán khi chưa đủ giấy tờ',
    color: 'secondary-light',
    category: 'legal',
    highlights: [
      { label: 'Giấy phép bắt buộc', value: '5-7 loại' },
      { label: 'Thời gian đăng ký', value: '1-3 tháng' },
      { label: 'Chi phí pháp lý', value: '8-20 triệu' },
    ],
    sections: [
      {
        type: 'table',
        heading: 'Giấy phép bắt buộc',
        content: [
          { label: 'Đăng ký kinh doanh (ĐKKD)', range: '3-5 ngày', note: 'Hộ kinh doanh hoặc Công ty. Hộ KD đơn giản, nhanh hơn.' },
          { label: 'Giấy chứng nhận ATTP', range: '15-30 ngày', note: 'Bắt buộc cho mọi cơ sở kinh doanh thực phẩm. Phải có TRƯỚC khi mở.' },
          { label: 'Giấy phép PCCC', range: '7-15 ngày', note: 'Bình chữa cháy, lối thoát hiểm, bảng chỉ dẫn. Công an quận cấp.' },
          { label: 'Giấy khám sức khỏe NV', range: '1-3 ngày', note: 'Tất cả nhân viên tiếp xúc thực phẩm. Khám 6 tháng/lần.' },
          { label: 'Hợp đồng thuê mặt bằng', range: 'Trước khi thi công', note: 'Công chứng. Kiểm tra: mục đích sử dụng, thời hạn, điều kiện trả sớm.' },
          { label: 'Đăng ký thuế + MST', range: '3-5 ngày', note: 'Sau khi có ĐKKD. Đăng ký hóa đơn điện tử cùng lúc.' },
          { label: 'Giấy phép rượu bia', range: '10-20 ngày', note: 'Chỉ cần nếu bán rượu >15 độ. Bar/pub bắt buộc phải có.' },
        ] as KBTableRow[],
      },
      {
        type: 'list',
        heading: 'Timeline đăng ký — nên bắt đầu song song',
        content: [
          'Tuần 1-2: Đăng ký kinh doanh + đăng ký thuế (làm đồng thời, 3-5 ngày).',
          'Tuần 2-3: Nộp hồ sơ ATTP (cần ĐKKD). Đồng thời: khám sức khỏe nhân viên.',
          'Tuần 2-3: Mua bình chữa cháy, lắp bảng thoát hiểm → nộp hồ sơ PCCC.',
          'Tuần 3-4: Đăng ký hóa đơn điện tử, setup phần mềm kế toán.',
          'Tuần 4-6: Chờ nhận giấy ATTP + PCCC. Trong lúc chờ: training nhân viên, soft opening.',
        ],
      },
      {
        type: 'warning-list',
        heading: 'Rủi ro pháp lý',
        content: [
          { icon: 'warning', title: 'Mở quán khi chưa có giấy ATTP', desc: 'Phạt 15-30 triệu + đình chỉ hoạt động. Không đáng rủi ro — chờ thêm 2-3 tuần tốt hơn.', severity: 'critical' },
          { icon: 'warning', title: 'Không đóng BHXH cho nhân viên', desc: 'Phạt 12-15%/năm số tiền trốn đóng + truy thu. Năm 2025, thanh tra BHXH siết chặt hơn.', severity: 'critical' },
          { icon: 'warning', title: 'Hợp đồng thuê không công chứng', desc: 'Không có giá trị pháp lý khi tranh chấp. Chủ nhà có thể đuổi bất cứ lúc nào. LUÔN công chứng.', severity: 'warning' },
          { icon: 'warning', title: 'Thuế hộ kinh doanh từ 2025', desc: 'Doanh thu >100 triệu/năm phải nộp thuế khoán (1,5-5% tùy ngành). Tính vào chi phí hàng tháng.', severity: 'tip' },
        ] as KBWarningItem[],
      },
    ],
  },
  {
    id: 'business_registration',
    slug: 'ho-kinh-doanh-hay-cong-ty',
    icon: 'building',
    title: 'Hộ kinh doanh hay Công ty?',
    subtitle: 'Không phải lúc nào cũng cần mở công ty',
    color: 'secondary-light',
    category: 'legal',
    highlights: [
      { label: 'Quán F&B chạy hộ KD', value: '>80%' },
      { label: 'Lệ phí hộ KD', value: '100K đồng' },
      { label: 'Thuế khoán F&B', value: '4.5%/DT' },
      { label: 'Miễn thuế nếu DT/năm', value: '<200 triệu' },
    ],
    sections: [
      {
        type: 'text',
        content: 'Nhiều người nghĩ mở quán ăn/cà phê phải thành lập công ty. Thực tế, phần lớn quán F&B nhỏ tại Việt Nam hoạt động dưới hình thức Hộ kinh doanh cá thể — thủ tục đơn giản, chi phí thấp, không cần kế toán chuyên nghiệp. Chỉ nên mở công ty khi có nhu cầu thực sự.',
      },
      {
        type: 'table',
        heading: 'So sánh: Hộ kinh doanh vs Công ty TNHH',
        content: [
          { label: 'Thủ tục thành lập', range: 'HKD: 3 ngày', note: 'Cty: 3-5 ngày + setup hóa đơn, chữ ký số, kế toán' },
          { label: 'Chi phí ban đầu', range: 'HKD: ~1.5-3 triệu', note: 'Cty: ~4-8 triệu + 6-16 triệu/năm kế toán' },
          { label: 'Tư cách pháp nhân', range: 'HKD: Không', note: 'Cty: Có — dễ vay vốn, ký hợp đồng lớn' },
          { label: 'Trách nhiệm tài sản', range: 'HKD: Vô hạn', note: 'Cty: Hữu hạn (trong phạm vi vốn điều lệ)' },
          { label: 'Thuế', range: 'HKD: Khoán 4.5%/DT', note: 'Cty: TNDN 15-20% trên lợi nhuận + GTGT 8-10%' },
          { label: 'Kế toán', range: 'HKD: Không bắt buộc', note: 'Cty: Bắt buộc — thuê ngoài 500K-1.3 triệu/tháng' },
          { label: 'Hóa đơn', range: 'HKD: Cơ quan thuế cấp', note: 'Cty: Tự phát hành hóa đơn GTGT, khấu trừ đầu vào' },
          { label: 'Mở chi nhánh', range: 'HKD: Được, thủ tục riêng', note: 'Cty: Dễ dàng, không giới hạn' },
        ] as KBTableRow[],
      },
      {
        type: 'stat-grid',
        heading: 'Thuế hộ kinh doanh F&B (thuế khoán)',
        content: [
          { icon: 'money', label: 'Thuế GTGT', value: '3%', desc: 'Trên tổng doanh thu — ngành dịch vụ ăn uống' },
          { icon: 'wallet', label: 'Thuế TNCN', value: '1.5%', desc: 'Trên tổng doanh thu — thuế thu nhập cá nhân' },
          { icon: 'chart', label: 'Tổng thuế khoán', value: '4.5%', desc: 'DT 500 triệu/năm → thuế ~22.5 triệu (1.9 triệu/tháng)' },
          { icon: 'target', label: 'Miễn thuế', value: '<200 triệu', desc: 'DT dưới 200 triệu/năm → không phải nộp thuế (từ 07/2025)' },
        ] as KBStat[],
      },
      {
        type: 'table',
        heading: 'Ví dụ tính thuế: quán cà phê DT 800 triệu/năm',
        content: [
          { label: 'Doanh thu tháng', range: '~67 triệu', note: 'Trung bình 800 triệu ÷ 12 tháng' },
          { label: 'Thuế GTGT (3%)', range: '2 triệu/tháng', note: '= 24 triệu/năm' },
          { label: 'Thuế TNCN (1.5%)', range: '1 triệu/tháng', note: '= 12 triệu/năm' },
          { label: 'Tổng thuế/tháng', range: '3 triệu/tháng', note: '= 36 triệu/năm (4.5% × 800 triệu)' },
          { label: 'Lệ phí môn bài', range: '1 triệu/năm', note: 'DT > 500 triệu. Sẽ bỏ từ 2026' },
        ] as KBTableRow[],
      },
      {
        type: 'warning-list',
        heading: 'Khi nào NÊN chuyển sang Công ty?',
        content: [
          { icon: 'trendingup', title: 'Doanh thu vượt 1 tỷ/năm', desc: 'Từ 06/2025, DT ≥1 tỷ/năm bắt buộc hóa đơn điện tử + máy tính tiền kết nối cơ quan thuế. Nên xem xét chuyển đổi.', severity: 'warning' },
          { icon: 'target', title: 'Muốn mở chuỗi 2-3+ chi nhánh', desc: 'Hộ KD vẫn mở được nhiều địa điểm, nhưng quản lý phức tạp. Công ty TNHH thuận tiện hơn cho chuỗi.', severity: 'warning' },
          { icon: 'wallet', title: 'Cần vay vốn ngân hàng >500 triệu', desc: 'Ngân hàng ưu tiên cho vay doanh nghiệp có tư cách pháp nhân. Hộ KD khó vay số lớn.', severity: 'warning' },
          { icon: 'handshake', title: 'Đối tác yêu cầu hóa đơn GTGT khấu trừ', desc: 'Doanh nghiệp lớn cần hóa đơn đầu vào để khấu trừ thuế. Hộ KD không tự phát hành được.', severity: 'tip' },
          { icon: 'clipboard', title: 'Có nhiều chi phí đầu vào hợp lệ', desc: 'Công ty được khấu trừ thuế GTGT đầu vào — có lợi nếu mua NVL, thiết bị có hóa đơn nhiều.', severity: 'tip' },
        ] as KBWarningItem[],
      },
      {
        type: 'list',
        heading: 'Chi phí thực tế đăng ký Hộ kinh doanh (từ A-Z)',
        content: [
          'Lệ phí đăng ký kinh doanh tại UBND huyện: 100.000 đồng (3 ngày).',
          'Khắc dấu (không bắt buộc): 200.000-500.000 đồng.',
          'Xin giấy chứng nhận ATTP: 500.000-1.000.000 đồng (15-20 ngày).',
          'Khám sức khỏe chủ cơ sở + nhân viên: 200.000-400.000 đồng/người.',
          'Tập huấn kiến thức ATTP: 500.000 đồng/nhóm (thường online).',
          'Bảng hiệu: 500.000-1.500.000 đồng.',
          'Tổng: khoảng 1.5-3 triệu đồng — hoàn tất trong 3-4 tuần.',
        ],
      },
      {
        type: 'warning-list',
        heading: 'Rủi ro nếu không đăng ký',
        content: [
          { icon: 'warning', title: 'Kinh doanh không giấy phép', desc: 'Phạt 5-10 triệu đồng. Kinh doanh thực phẩm không có ATTP: phạt 15-30 triệu + đình chỉ.', severity: 'critical' },
          { icon: 'warning', title: 'Hoạt động như DN nhưng không đăng ký', desc: 'Phạt 50-100 triệu đồng. Ví dụ: mở chuỗi nhiều quán nhưng chỉ đăng ký hộ KD đơn lẻ.', severity: 'critical' },
          { icon: 'warning', title: 'Không đóng thuế', desc: 'Truy thu thuế + phạt chậm nộp 0.03%/ngày. Thêm phạt hành chính 1-3 lần số thuế trốn.', severity: 'critical' },
        ] as KBWarningItem[],
      },
      {
        type: 'text',
        content: 'Lời khuyên: Nếu bạn mới bắt đầu, chỉ có 1 quán, doanh thu dự kiến dưới 1 tỷ/năm → đăng ký Hộ kinh doanh. Khi ổn định và muốn mở rộng, có thể chuyển đổi sang Công ty TNHH — được miễn thuế TNDN 2 năm đầu (chính sách từ 10/2025). Nguồn: Nghị định 01/2021, Nghị định 168/2025, Luật Thuế TNCN sửa đổi 2025.',
      },
    ],
  },
  {
    id: 'food_safety',
    slug: 'an-toan-thuc-pham',
    icon: 'check',
    title: 'An toàn vệ sinh thực phẩm',
    subtitle: 'Quy định, chứng nhận ATTP, và thực hành tại quán',
    color: 'secondary-light',
    category: 'legal',
    highlights: [
      { label: 'Giấy ATTP', value: 'Bắt buộc', note: 'trước khi mở quán' },
      { label: 'Khám sức khỏe NV', value: 'Mỗi 6 tháng', note: 'tất cả NV tiếp xúc thực phẩm' },
      { label: 'Phạt vi phạm ATTP', value: '15-30 triệu', note: '+ đình chỉ hoạt động' },
      { label: 'Hiệu lực giấy ATTP', value: '3 năm', note: 'phải gia hạn trước 6 tháng' },
    ],
    sections: [
      {
        type: 'table',
        heading: 'Checklist yêu cầu ATTP — phải đạt trước khi mở',
        content: [
          { label: 'Giấy chứng nhận ATTP', range: 'Bắt buộc', note: 'Do Chi cục ATVSTP hoặc UBND quận cấp. Hiệu lực 3 năm, gia hạn trước 6 tháng.' },
          { label: 'Khám sức khỏe toàn bộ NV', range: '6 tháng/lần', note: 'Xét nghiệm máu, phân, X-quang. Chi phí 200-400K/người. Giữ hồ sơ tại quán.' },
          { label: 'Tập huấn kiến thức ATTP', range: 'Bắt buộc', note: 'Chủ cơ sở + NV phải có chứng chỉ tập huấn. Học online hoặc offline, ~500K/nhóm.' },
          { label: 'Cơ sở vật chất đạt chuẩn', range: 'Theo quy định', note: 'Bếp tách biệt, có nước sạch, hệ thống thoát nước, đủ ánh sáng, thông gió.' },
          { label: 'Nhiệt độ bảo quản', range: 'Theo loại TP', note: 'Đông lạnh ≤-18°C, mát 0-5°C, khô thoáng <25°C. Phải có nhiệt kế tại tủ.' },
          { label: 'Nguồn gốc NVL rõ ràng', range: 'Bắt buộc', note: 'Hóa đơn, phiếu giao hàng, nhãn mác. Truy xuất được nguồn gốc khi kiểm tra.' },
        ] as KBTableRow[],
      },
      {
        type: 'stat-grid',
        heading: 'Các con số ATTP quan trọng',
        content: [
          { icon: 'meat', label: 'Nhiệt độ nguy hiểm', value: '5-60°C', desc: 'Vùng nhiệt độ vi khuẩn phát triển nhanh nhất. Thực phẩm không được để trong vùng này quá 2 giờ.' },
          { icon: 'clock', label: 'Rửa tay', value: 'Mỗi 30 phút', desc: 'Và sau khi: đi vệ sinh, chạm rác, sờ mặt/tóc, xử lý thực phẩm sống. Rửa ≥20 giây bằng xà phòng.' },
          { icon: 'check', label: 'Vệ sinh bề mặt', value: 'Mỗi 2 giờ', desc: 'Bàn bếp, thớt, dao — vệ sinh + khử trùng. Cuối ngày: tổng vệ sinh toàn bộ khu vực chế biến.' },
          { icon: 'chart', label: 'Kiểm tra nhiệt độ tủ', value: '2 lần/ngày', desc: 'Sáng mở cửa + chiều. Ghi sổ theo dõi. Tủ đông ≤-18°C, tủ mát 0-5°C.' },
        ] as KBStat[],
      },
      {
        type: 'list',
        heading: 'Thực hành ATTP hàng ngày tại quán',
        content: [
          'Vệ sinh cá nhân: NV mặc đồng phục sạch, đội mũ/lưới tóc, không đeo trang sức khi chế biến, móng tay cắt ngắn, rửa tay đúng cách trước và trong ca.',
          'Ngăn ngừa lây nhiễm chéo: Tách riêng thớt/dao cho thực phẩm sống và chín (mã màu: đỏ = thịt sống, xanh = rau, trắng = thực phẩm chín). Không để thực phẩm sống gần thực phẩm chín.',
          'Kiểm soát nhiệt độ: Đo nhiệt độ tủ 2 lần/ngày, ghi sổ. Thực phẩm nấu chín phải đạt ≥75°C ở tâm. Rã đông trong tủ mát, KHÔNG rã đông ở nhiệt độ phòng.',
          'FIFO cho tất cả NVL: Dán nhãn ngày nhập + ngày hết hạn. NVL nhập trước dùng trước. Kiểm tra hạn sử dụng hàng ngày, loại bỏ NVL hết hạn ngay.',
          'Kiểm soát côn trùng & động vật gây hại: Lắp lưới chắn côn trùng, đặt bẫy chuột, phun diệt côn trùng định kỳ (1 lần/tháng). Đóng kín thùng rác, đổ rác 2 lần/ngày.',
          'Nước sạch: Sử dụng nước máy hoặc nước đã qua xử lý. Xét nghiệm nước 6 tháng/lần nếu dùng nước giếng. Máy lọc nước thay lõi đúng lịch.',
          'Lưu mẫu thực phẩm: Giữ mẫu mỗi món đã bán trong 24 giờ (đựng hộp kín, bảo quản mát). Phục vụ truy xuất khi có khiếu nại hoặc ngộ độc.',
          'Sổ ghi chép ATTP: Ghi nhận nhiệt độ tủ, vệ sinh hàng ngày, NVL nhập/xuất. Đây là bằng chứng khi thanh tra kiểm tra — bắt buộc phải có.',
        ],
      },
      {
        type: 'table',
        heading: 'Vi phạm ATTP phổ biến & mức phạt',
        content: [
          { label: 'Kinh doanh không có giấy ATTP', range: '15-30 triệu', note: 'Đình chỉ hoạt động cho đến khi có giấy phép. Tái phạm: phạt gấp đôi.' },
          { label: 'NV không có giấy khám sức khỏe', range: '1-3 triệu/người', note: 'Phạt theo đầu người vi phạm. Nếu NV mắc bệnh truyền nhiễm: phạt nặng hơn.' },
          { label: 'Thực phẩm không rõ nguồn gốc', range: '10-20 triệu', note: 'Không có hóa đơn, nhãn mác. Tịch thu toàn bộ NVL vi phạm.' },
          { label: 'Bảo quản sai nhiệt độ', range: '5-10 triệu', note: 'Thực phẩm đông lạnh để tan, thịt sống để cạnh thực phẩm chín.' },
          { label: 'Có côn trùng, chuột tại khu vực chế biến', range: '10-15 triệu', note: 'Đình chỉ + yêu cầu khắc phục. Ảnh hưởng nghiêm trọng đến uy tín.' },
          { label: 'Gây ngộ độc thực phẩm', range: '30-50 triệu', note: 'Đình chỉ, bồi thường. Nếu nghiêm trọng (nhiều người nhập viện): truy cứu hình sự.' },
        ] as KBTableRow[],
      },
      {
        type: 'warning-list',
        heading: 'Cảnh báo ATTP — không được bỏ qua',
        content: [
          { icon: 'warning', title: 'Ngộ độc thực phẩm = đóng cửa + hình sự', desc: 'Chỉ cần 1 vụ ngộ độc, quán bị đóng cửa, lên báo, mất uy tín vĩnh viễn. Trường hợp nặng (nhiều người nhập viện): chủ quán bị truy cứu trách nhiệm hình sự theo Điều 317 BLHS.', severity: 'critical' },
          { icon: 'warning', title: 'Thanh tra ATTP không báo trước', desc: 'Đoàn kiểm tra có thể đến bất cứ lúc nào. Nếu không có sổ ghi chép, giấy ATTP, hoặc giấy khám sức khỏe NV → phạt tại chỗ + lập biên bản. Luôn giữ hồ sơ sẵn sàng.', severity: 'critical' },
          { icon: 'warning', title: 'Review xấu về vệ sinh = mất 30% khách', desc: 'Thời đại mạng xã hội, 1 hình ảnh gián/tóc trong đồ ăn lan truyền trong vài giờ. Ảnh hưởng doanh thu kéo dài hàng tháng. Phòng ngừa tốt hơn xử lý.', severity: 'warning' },
          { icon: 'warning', title: 'Giấy ATTP hết hạn mà không gia hạn', desc: 'Giấy ATTP có hiệu lực 3 năm. Phải nộp hồ sơ gia hạn TRƯỚC 6 tháng. Nếu hết hạn mà chưa gia hạn = kinh doanh không phép = phạt 15-30 triệu.', severity: 'warning' },
        ] as KBWarningItem[],
      },
      {
        type: 'text',
        content: 'An toàn vệ sinh thực phẩm không chỉ là nghĩa vụ pháp lý — đó còn là lợi thế cạnh tranh. Quán sạch sẽ, minh bạch nguồn gốc NVL, nhân viên chuyên nghiệp → khách tin tưởng và quay lại. Trong thời đại review online, ATTP tốt = marketing miễn phí. Đầu tư 500K-1 triệu/tháng cho vệ sinh, training ATTP — tiết kiệm hàng chục triệu phạt + hàng trăm triệu doanh thu mất do uy tín.',
      },
    ],
  },
];

export default LEGAL_ARTICLES;
