import type { KBTopic, KBTableRow, KBStat, KBWarningItem } from '@/types';

const COST_ARTICLES: KBTopic[] = [
  {
    id: 'cost_structure',
    slug: 'cau-truc-chi-phi-fnb',
    icon: 'money',
    title: 'Cấu trúc chi phí F&B',
    subtitle: 'Hiểu tiền đi đâu trước khi bắt đầu',
    color: 'primary-light',
    category: 'cost',
    highlights: [
      { label: 'NVL (Food Cost)', value: '25-35%', note: 'trên doanh thu' },
      { label: 'Nhân sự', value: '20-30%', note: 'trên doanh thu' },
      { label: 'Mặt bằng', value: '10-20%', note: 'trên doanh thu' },
      { label: 'Lợi nhuận ròng', value: '5-15%', note: 'nếu quản lý tốt' },
    ],
    sections: [
      {
        type: 'table',
        heading: 'Phân bổ chi phí điển hình',
        content: [
          { label: 'Nguyên vật liệu (Food cost)', range: '25 - 35%', note: 'Chi phí lớn nhất, kiểm soát bằng công thức chuẩn' },
          { label: 'Nhân sự (Labor)', range: '20 - 30%', note: 'Lương + BHXH + phụ cấp ca/ăn' },
          { label: 'Thuê mặt bằng', range: '10 - 20%', note: 'Bao gồm phí quản lý, VAT mặt bằng' },
          { label: 'Marketing', range: '3 - 8%', note: 'Online ads + khuyến mãi + influencer' },
          { label: 'Vận hành (điện, nước, gas...)', range: '5 - 10%', note: 'Biến động theo mùa và loại hình' },
          { label: 'Khấu hao + Khác', range: '3 - 5%', note: 'Hao mòn thiết bị, dụng cụ vỡ/hỏng' },
        ] as KBTableRow[],
      },
      {
        type: 'table',
        heading: 'Chi phí ẩn thường bị bỏ quên',
        content: [
          { label: 'BHXH + BHYT nhân viên', range: '21,5%', note: 'Trên lương cơ bản, chủ đóng 21,5%' },
          { label: 'Hao hụt nguyên liệu', range: '3 - 8%', note: 'Rau héo, thịt hỏng, đổ vỡ hàng ngày' },
          { label: 'Phí app delivery', range: '20 - 30%', note: 'GrabFood/ShopeeFood hoa hồng trên đơn' },
          { label: 'VAT mặt bằng', range: '8 - 10%', note: 'Nhiều HĐ thuê chưa bao gồm VAT' },
          { label: 'Bảo trì thiết bị', range: '1 - 3%', note: 'Máy pha, tủ lạnh hỏng đột xuất' },
          { label: 'Thuế & kế toán', range: '1 - 2%', note: 'Thuế khoán / GTGT + phí kế toán' },
        ] as KBTableRow[],
      },
      {
        type: 'text',
        content: 'Quy tắc vàng: NVL + Nhân sự (Prime Cost) không vượt 60-65% doanh thu. Nếu vượt, rất khó có lãi. Chi phí thực tế thường cao hơn dự tính 20-30% vì các chi phí ẩn bên trên.',
      },
    ],
  },
  {
    id: 'key_metrics',
    slug: 'cac-chi-so-song-con',
    icon: 'chart',
    title: 'Các chỉ số sống còn',
    subtitle: '4 con số quyết định quán sống hay chết',
    color: 'secondary-light',
    category: 'cost',
    highlights: [
      { label: 'Food Cost %', value: '<35%' },
      { label: 'Prime Cost', value: '<65%' },
      { label: 'Rent Ratio', value: '<20%' },
      { label: 'Break-even', value: '<6 tháng' },
    ],
    sections: [
      {
        type: 'stat-grid',
        content: [
          { icon: 'meat', label: 'Food Cost %', value: '25-35%', desc: '= Chi phí NVL / Doanh thu. Trên 40% = nguy hiểm.' },
          { icon: 'users', label: 'Prime Cost', value: '<60-65%', desc: '= (NVL + Nhân sự) / Doanh thu. Chỉ số quan trọng nhất.' },
          { icon: 'rent', label: 'Rent-to-Revenue', value: '<15-20%', desc: '= Tiền thuê / Doanh thu. Trên 25% = rủi ro cực cao.' },
          { icon: 'clock', label: 'Break-even Point', value: '4-8 tháng', desc: 'Thời gian hoàn vốn. Trên 12 tháng = cần xem lại.' },
        ] as KBStat[],
      },
      {
        type: 'table',
        heading: 'Benchmark theo mô hình',
        content: [
          { label: 'Cà phê', range: 'Food cost 20-30%', note: 'Prime cost <55%. Biên cao nhưng cạnh tranh lớn.' },
          { label: 'Quán ăn', range: 'Food cost 30-40%', note: 'Prime cost <65%. Cần volume cao để bù biên thấp.' },
          { label: 'Trà sữa', range: 'Food cost 15-25%', note: 'Prime cost <50%. Biên rất cao, marketing chiếm nhiều.' },
          { label: 'Nhà hàng', range: 'Food cost 28-38%', note: 'Prime cost <60%. Nhân sự chiếm tỷ trọng lớn.' },
          { label: 'Cloud Kitchen', range: 'Food cost 30-38%', note: 'Không thuê mặt bằng, nhưng phí app 20-30%.' },
          { label: 'Bar / Pub', range: 'Food cost 15-25%', note: 'Prime cost <50%. Biên rượu rất cao.' },
        ] as KBTableRow[],
      },
      {
        type: 'warning-list',
        heading: 'Red flags — dấu hiệu cần hành động ngay',
        content: [
          { icon: 'warning', title: 'Food cost > 40%', desc: 'Kiểm tra ngay: hao hụt NVL, giá nhập tăng, staff cho nhiều hơn công thức, trộm cắp. Mỗi 1% food cost = ~10% lợi nhuận ròng.', severity: 'critical' },
          { icon: 'warning', title: 'Prime cost > 70%', desc: 'Gần như không thể có lãi. Phải cắt giảm hoặc tăng giá bán ngay lập tức.', severity: 'critical' },
          { icon: 'warning', title: 'Rent ratio > 25%', desc: 'Mặt bằng đang "ăn" hết lợi nhuận. Cân nhắc đàm phán hoặc chuyển location.', severity: 'warning' },
          { icon: 'warning', title: 'Doanh thu giảm 3 tháng liên tiếp', desc: 'Không phải mùa thấp điểm? Kiểm tra: đối thủ mới, chất lượng giảm, review xấu trên Google.', severity: 'warning' },
        ] as KBWarningItem[],
      },
      {
        type: 'text',
        content: 'Nếu bạn chưa biết 4 con số trên cho mô hình của mình, hãy bắt đầu validate ngay — công cụ này sẽ tính giúp bạn.',
      },
    ],
  },
  {
    id: 'financial_management',
    slug: 'quan-ly-tai-chinh',
    icon: 'chart',
    title: 'Quản lý tài chính',
    subtitle: 'Tiền vào, tiền ra — phải rõ từng đồng',
    color: 'primary-light',
    category: 'cost',
    highlights: [
      { label: 'Vốn dự phòng', value: '3-6 tháng', note: 'chi phí vận hành' },
      { label: 'Kiểm tra P&L', value: 'Hàng tuần' },
      { label: 'Cash flow > Profit', value: 'Luôn đúng' },
    ],
    sections: [
      {
        type: 'stat-grid',
        heading: 'Báo cáo tài chính cần theo dõi',
        content: [
          { icon: 'chart', label: 'P&L (Lãi/Lỗ)', value: 'Hàng tuần', desc: 'Doanh thu - Chi phí = Lãi/Lỗ. Nếu lỗ 3 tuần liên tiếp → hành động ngay.' },
          { icon: 'money', label: 'Cash Flow', value: 'Hàng ngày', desc: 'Tiền mặt thực tế. Có lãi trên sổ nhưng không có tiền trong két = vẫn chết.' },
          { icon: 'meat', label: 'Food Cost %', value: 'Hàng tuần', desc: '= Tổng NVL nhập / Tổng doanh thu. So sánh với food cost lý thuyết.' },
          { icon: 'clock', label: 'Break-even tracking', value: 'Hàng tháng', desc: 'Bao nhiêu tháng nữa hoàn vốn? Có đúng kế hoạch không?' },
        ] as KBStat[],
      },
      {
        type: 'list',
        heading: 'Cash flow — bẫy chết người của F&B',
        content: [
          'Thu tiền NGAY (khách trả liền) nhưng chi tiền SAU (NCC cho nợ 7-30 ngày) → tạo ảo giác "có tiền". Thực tế, tiền đó đã thuộc về NCC.',
          'Doanh thu mùa cao (Tết, lễ) ≠ mọi tháng. Phải để dành tiền mùa cao cho mùa thấp (tháng 2-3 thường giảm 15-25%).',
          'Chi phí cố định (thuê, lương) phải trả ĐỀU ĐẶN bất kể doanh thu bao nhiêu. Đây là lý do "hết cash = đóng cửa".',
          'Quy tắc: luôn giữ tối thiểu 2 tháng chi phí vận hành trong tài khoản. Dưới mức này = báo động đỏ.',
          'Đừng rút lợi nhuận ra quá sớm. 6 tháng đầu, tái đầu tư 100% lợi nhuận (nếu có) vào quán.',
        ],
      },
      {
        type: 'table',
        heading: 'Cấu trúc vốn đầu tư hợp lý',
        content: [
          { label: 'Vốn tự có', range: '≥60%', note: 'Tối thiểu 60% tổng đầu tư. Vay quá nhiều = áp lực lãi suất.' },
          { label: 'Vốn vay', range: '≤40%', note: 'Lãi suất 8-15%/năm. Tính vào chi phí hàng tháng.' },
          { label: 'Vốn lưu động', range: '15-20%', note: 'Của tổng vốn đầu tư. Để xoay vòng NVL, trả lương.' },
          { label: 'Dự phòng', range: '10-15%', note: 'Phát sinh ngoài kế hoạch: thi công chậm, sửa chữa, thiên tai.' },
        ] as KBTableRow[],
      },
    ],
  },
  {
    id: 'food_cost_detail',
    slug: 'food-cost-chi-tiet',
    icon: 'meat',
    title: 'Food Cost chi tiết',
    subtitle: 'Tính giá vốn, kiểm soát NVL, và tối ưu lợi nhuận',
    color: 'primary-light',
    category: 'cost',
    highlights: [
      { label: 'Food cost lý tưởng', value: '28-32%', note: 'tùy mô hình' },
      { label: 'Chênh lệch TT vs LT', value: '<3%', note: 'thực tế vs lý thuyết' },
      { label: 'Hao hụt NVL cho phép', value: '2-5%', note: 'trên tổng NVL nhập' },
      { label: '1% food cost giảm =', value: '~10% lợi nhuận tăng', note: 'tác động trực tiếp' },
    ],
    sections: [
      {
        type: 'stat-grid',
        heading: 'Các công thức tính Food Cost',
        content: [
          { icon: 'chart', label: 'Food Cost % lý thuyết', value: 'Giá NVL / Giá bán', desc: 'Tính từ recipe card. VD: NVL 1 ly cà phê = 12K, giá bán 45K → FC = 26.7%.' },
          { icon: 'money', label: 'Food Cost % thực tế', value: 'Tổng NVL mua / Doanh thu', desc: 'Tính từ sổ sách. Tổng tiền mua NVL trong tuần ÷ tổng doanh thu tuần đó.' },
          { icon: 'meat', label: 'Waste % (Hao hụt)', value: 'NVL bỏ / NVL nhập', desc: 'Rau héo, thịt hỏng, đổ vỡ, sai order. Mục tiêu: dưới 3% trên tổng NVL nhập.' },
          { icon: 'target', label: 'Chênh lệch TT - LT', value: '<3% là tốt', desc: 'FC thực tế - FC lý thuyết. Nếu >5% → có vấn đề: portion sai, trộm cắp, hoặc hao hụt lớn.' },
        ] as KBStat[],
      },
      {
        type: 'table',
        heading: 'Benchmark Food Cost theo nhóm nguyên liệu',
        content: [
          { label: 'Protein (thịt, hải sản)', range: '35-45%', note: 'Nhóm đắt nhất. Kiểm soát bằng cân đo chính xác, FIFO.' },
          { label: 'Rau củ, trái cây', range: '25-35%', note: 'Hao hụt cao (héo, dập). Mua theo ngày, ưu tiên mùa vụ.' },
          { label: 'Đồ uống (cà phê, trà, sữa)', range: '15-25%', note: 'Biên cao nhất. Chuẩn hóa recipe, kiểm soát lượng sử dụng.' },
          { label: 'Bao bì, đóng gói', range: '3-8%', note: 'Thường bị bỏ qua. Tính vào food cost, đặc biệt delivery.' },
          { label: 'Gia vị, sốt, phụ liệu', range: '2-5%', note: 'Chi phí nhỏ nhưng tích lũy lớn. Mua sỉ tiết kiệm 15-20%.' },
        ] as KBTableRow[],
      },
      {
        type: 'list',
        heading: 'Cách giảm Food Cost hiệu quả',
        content: [
          'Chuẩn hóa recipe card: Mỗi món có công thức chi tiết (gram, ml) + hình ảnh. Mọi nhân viên pha/nấu đúng như nhau → không dư, không thiếu.',
          'Đàm phán nhà cung cấp: So sánh 2-3 NCC cho mỗi nhóm NVL. Mua sỉ theo tuần/tháng để được giảm 5-15%. Review giá mỗi quý.',
          'Áp dụng FIFO (First In First Out): NVL nhập trước dùng trước. Dán nhãn ngày nhập lên mọi nguyên liệu. Giảm hao hụt do hết hạn.',
          'Kiểm soát portion (khẩu phần): Dùng cân, ly đong, muỗng chuẩn. Sai portion 10% = food cost tăng 3-4%. Training nhân viên mới đặc biệt kỹ.',
          'Menu engineering: Phân tích lãi/lỗ từng món. Giữ món biên cao + bán tốt, cắt món biên thấp + ít đặt. Đưa món lãi cao lên vị trí nổi bật.',
          'Ưu tiên nguyên liệu theo mùa: Rau củ, trái cây theo mùa rẻ hơn 20-40% và tươi hơn. Thay đổi menu seasonal 3 tháng/lần.',
          'Kiểm kho hàng ngày: Đếm tồn kho cuối ngày cho NVL chính (thịt, cá, sữa). So khớp với số bán → phát hiện sai lệch ngay.',
          'Tận dụng NVL đa năng: Chọn nguyên liệu dùng được cho nhiều món (VD: gà dùng cho cơm, phở, salad) → giảm tồn kho, giảm hao hụt.',
        ],
      },
      {
        type: 'warning-list',
        heading: 'Red flags — Dấu hiệu food cost có vấn đề',
        content: [
          { icon: 'warning', title: 'Food cost thực tế > lý thuyết hơn 5%', desc: 'Nguyên nhân phổ biến: nhân viên cho nhiều hơn recipe, NVL bị lấy cắp, ghi chép nhập hàng sai, hoặc hao hụt không kiểm soát.', severity: 'critical' },
          { icon: 'warning', title: 'Tồn kho "biến mất" không rõ lý do', desc: 'Kiểm kho cuối tuần thấy thiếu nhưng không có ghi nhận hỏng/bỏ. Cần lắp camera kho, phân quyền nhập/xuất rõ ràng.', severity: 'critical' },
          { icon: 'warning', title: 'Giá NCC tăng nhưng giá bán giữ nguyên', desc: 'Nhiều chủ quán sợ mất khách nên không tăng giá. Sau 6 tháng, food cost tăng 3-5% mà không biết. Review giá NCC mỗi quý, điều chỉnh menu tương ứng.', severity: 'warning' },
          { icon: 'warning', title: 'Không có recipe card chuẩn', desc: 'Mỗi nhân viên làm một kiểu → chất lượng không đồng nhất + food cost dao động mạnh. Đây là lỗi cơ bản nhất và hay gặp nhất.', severity: 'warning' },
        ] as KBWarningItem[],
      },
      {
        type: 'text',
        content: 'Food cost là chi phí lớn nhất và cũng là chi phí kiểm soát được nhiều nhất trong F&B. Mỗi 1% giảm food cost có thể tăng lợi nhuận ròng lên đến 10%. Hãy nhập số liệu vào F&B Validator để tính chính xác food cost % và xem nó ảnh hưởng đến lợi nhuận của bạn như thế nào.',
      },
    ],
  },
];

export default COST_ARTICLES;
