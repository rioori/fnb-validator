import type { OwnerStory } from '@/types';

const STORIES: OwnerStory[] = [
  {
    id: 'ca-phe-quan-3-cost-45',
    slug: 'ca-phe-quan-3-cat-menu-margin-tang-gap-doi',
    ownerName: 'Anh Minh',
    ownerRole: 'Chủ quán café',
    city: 'Quận 3, TP.HCM',
    model: 'coffee',
    scale: '48m² · 20 chỗ · 3 nhân viên',
    monthsOpen: 14,
    timeframe: '4 tháng',
    headline: 'Cost 45% xuống 34% sau khi cắt 40% menu — margin từ 8% lên 18%',
    summary:
      'Quán café Quận 3 đông khách nhưng vẫn lỗ nhẹ mỗi tháng. Sau khi dùng AI Chat + benchmark chi phí, anh Minh cắt hơn nửa menu, đổi supplier sữa, và tăng giá 2 món chủ lực. 4 tháng sau: cost ratio giảm 11 điểm, margin gấp đôi.',
    context:
      'Quán café mở gần 14 tháng, nằm mặt tiền đường nhỏ Quận 3, phục vụ chủ yếu dân văn phòng và freelancer. Menu 32 món (cà phê, đá xay, trà, bánh ngọt, sandwich). Doanh thu tháng ~180 triệu, tưởng ổn — nhưng cuối tháng luôn còn ~15 triệu tiền mặt sau khi trừ lương và chi phí.',
    painPoints: [
      'Cost nguyên liệu chiếm 45% doanh thu — quá cao so với benchmark 30-35% ngành café.',
      'Menu 32 món nhưng 8 món top bán chiếm 78% doanh thu. Phần còn lại chỉ đóng góp 22% nhưng ăn hết công quản lý & tồn kho.',
      'Sữa tươi + sữa đặc chiếm 32% cost nguyên liệu — supplier cũ giá cao hơn thị trường ~15%.',
      'Giá bán 2 món chủ lực (bạc xỉu, cold brew) chưa tăng từ ngày mở dù giá đầu vào tăng 20%.',
    ],
    turningPoint:
      'Sau 1 buổi tối ngồi hỏi AI Chat trên Validator ("cost 45% có bình thường không cho quán cà phê Quận 3?" — "quán em cần bao nhiêu doanh thu để hòa vốn với cost hiện tại?"), anh Minh nhận ra vấn đề không phải doanh thu — mà là cost ratio đang ăn hết margin. Anh Minh so tiếp benchmark: coffee shop chuẩn ngành cost 30-35%, quán anh đang ở top 15% cao nhất.',
    actions: [
      {
        title: 'Cắt 13 món ít bán (giữ 19 món)',
        desc: 'Xóa 5 loại bánh ngọt chậm bán, 3 món đá xay hiếm order, 5 loại trà ít khách chọn. Giảm SKU nguyên liệu từ 47 xuống 28.',
      },
      {
        title: 'Đổi supplier sữa',
        desc: 'Chuyển sang nhà cung cấp local giá thấp hơn ~15%. Đàm phán giao 2 ngày/lần thay vì 3 ngày để giảm tồn kho sữa tươi.',
      },
      {
        title: 'Tăng giá 2 món chủ lực 15%',
        desc: 'Bạc xỉu: 35k → 40k. Cold brew: 45k → 52k. Không ai phàn nàn — khách đến vì chất lượng, không phải giá.',
      },
      {
        title: 'Track cost weekly thay vì monthly',
        desc: 'Bỏ 30 phút mỗi Chủ Nhật vào Validator, nhập số tuần rồi. Thấy pattern sớm hơn — kịp điều chỉnh trong tháng, không chờ hết tháng mới phát hiện.',
      },
    ],
    metrics: [
      { label: 'Cost ratio (nguyên liệu / doanh thu)', before: '45%', after: '34%', delta: '−11 điểm' },
      { label: 'Số SKU menu', before: '32 món', after: '19 món', delta: '−40%' },
      { label: 'Doanh thu tháng', before: '180 triệu', after: '172 triệu', delta: '−4%' },
      { label: 'Lợi nhuận ròng tháng', before: '~15 triệu', after: '~31 triệu', delta: '+107%' },
      { label: 'Biên lợi nhuận (margin)', before: '8%', after: '18%', delta: '+10 điểm' },
    ],
    lessons: [
      'Doanh thu giảm nhẹ không đáng sợ — cost ratio giảm quan trọng hơn nhiều.',
      'Menu ngắn hơn = tồn kho gọn hơn + đào tạo nhân viên nhanh hơn + khách order nhanh hơn.',
      'Track weekly khác hoàn toàn track monthly. Weekly cho anh 4 lần cơ hội điều chỉnh mỗi tháng.',
      'Tăng giá món chủ lực 10-15% ít khi mất khách nếu chất lượng thật sự tốt.',
    ],
    toolsUsed: [
      { label: 'AI Chat — hỏi cost benchmark & scenario', href: '/ai-chat' },
      { label: 'Calculator — tính lại break-even với cost mới', href: '/fnb' },
      { label: 'Knowledge — bài về Menu Engineering', href: '/kien-thuc' },
    ],
    disclaimer:
      'Câu chuyện tổng hợp từ pattern chủ quán thực tế đã hỏi AI Chat & dùng calculator trên Validator. Tên nhân vật và một số con số cụ thể đã ẩn danh để bảo vệ chủ quán. Insight, quyết định và bài học phản ánh trung thực điều đã diễn ra.',
    seoTitle: 'Cà phê Quận 3 cắt 40% menu, margin tăng từ 8% lên 18% — Câu chuyện chủ quán',
    seoDescription:
      'Anh Minh (café Q3, TP.HCM) cắt cost từ 45% xuống 34% sau khi dùng AI Chat + benchmark trên Validator. 4 tháng, margin gấp đôi. Case study có số liệu chi tiết.',
  },
  {
    id: 'bakery-da-nang-mon-loi-mon-lo',
    slug: 'bakery-da-nang-phat-hien-mon-chu-luc-dang-lo',
    ownerName: 'Chị Hằng',
    ownerRole: 'Chủ tiệm bánh',
    city: 'Đà Nẵng',
    model: 'bakery',
    scale: '35m² · 8 chỗ ngồi + take-away · 4 nhân viên',
    monthsOpen: 22,
    timeframe: '3 tháng',
    headline: 'Phát hiện món chủ lực đang lỗ 8k/chiếc — repricing xong margin tăng 12 điểm',
    summary:
      'Tiệm bánh Đà Nẵng bán chạy nhất là bánh mì signature — 60 chiếc/ngày, ai cũng khen ngon. Sau khi dùng Wizard mode "đang mở quán" tính lại chi phí thật (nguyên liệu + lương + điện + khấu hao), chị Hằng phát hiện món này đang lỗ 8k/chiếc. 3 tháng sau reprice: margin tăng 12 điểm.',
    context:
      'Tiệm bánh mở gần 2 năm, làm bánh mì, bánh ngọt và bánh sinh nhật. 60% doanh thu đến từ bánh mì signature — món "chủ lực" của quán, đông khách đến chỉ để mua. Chị Hằng bận vận hành, chưa bao giờ ngồi tính chi phí chi tiết từng món — chỉ nhìn tổng doanh thu tháng thấy có lãi là yên tâm.',
    painPoints: [
      'Doanh thu tháng ~145 triệu nhưng lợi nhuận ròng chỉ ~9 triệu — margin 6% thấp bất thường cho bakery (chuẩn ngành 15-25%).',
      'Không biết món nào lời, món nào lỗ. Chỉ biết "tổng thể còn dương".',
      'Bánh mì signature giá 25k, làm mất 22 phút/mẻ 3 chiếc → chi phí lao động cao hơn tưởng.',
      'Bánh sinh nhật order theo yêu cầu — margin cao (~55%) nhưng chỉ chiếm 12% doanh thu, chưa được đẩy mạnh.',
    ],
    turningPoint:
      'Chị Hằng thử Wizard mode "Đang vận hành" trên Validator, nhập chi tiết chi phí từng món: nguyên liệu, lương giờ, điện lò nướng, khấu hao thiết bị, tỷ lệ hư hao. Kết quả: bánh mì signature đang lỗ 8k/chiếc sau khi cộng đầy đủ chi phí. Món "chủ lực" thực ra đang kéo margin toàn quán xuống — vì bán càng nhiều càng lỗ.',
    actions: [
      {
        title: 'Tăng giá bánh mì signature từ 25k lên 35k',
        desc: 'Truyền thông trước 2 tuần: giới thiệu công thức mới (thêm 1 topping), khách chấp nhận vì giá trị rõ ràng. Doanh số chiếc giảm ~18% nhưng doanh thu tăng.',
      },
      {
        title: 'Đẩy bánh sinh nhật lên trang chủ Facebook + website',
        desc: 'Món margin cao nhất, trước giờ chỉ khách quen order. Sau 2 tháng: order bánh sinh nhật tăng 2.3 lần.',
      },
      {
        title: 'Dừng làm 2 loại bánh ngọt margin âm',
        desc: 'Croissant làm tại quán và tart trái cây theo mùa — chi phí lao động cao, giá bán không đẩy được lên. Ngưng làm, đỡ 6h công/tuần.',
      },
      {
        title: 'Setup file Excel track cost per SKU hàng tuần',
        desc: 'Copy cấu trúc từ Wizard, mỗi Chủ Nhật cập nhật giá nguyên liệu + giờ công. Thấy signal sớm khi giá bột hoặc trứng biến động.',
      },
    ],
    metrics: [
      { label: 'Doanh thu tháng', before: '145 triệu', after: '156 triệu', delta: '+8%' },
      { label: 'Lợi nhuận ròng tháng', before: '~9 triệu', after: '~28 triệu', delta: '+211%' },
      { label: 'Biên lợi nhuận', before: '6%', after: '18%', delta: '+12 điểm' },
      { label: '% doanh thu từ bánh sinh nhật', before: '12%', after: '24%', delta: 'gấp đôi' },
      { label: 'Số chiếc bánh mì signature bán/ngày', before: '60 chiếc', after: '49 chiếc', delta: '−18%' },
    ],
    lessons: [
      'Món "chủ lực" không phải lúc nào cũng có lời — phải cộng đủ chi phí (nguyên liệu + lương + khấu hao + điện) mới ra sự thật.',
      'Repricing 40% mà mất chỉ 18% khách = win rất lớn. Khách mua vì ngon, không phải rẻ.',
      'Đẩy món margin cao dễ hơn cắt món margin thấp — 2 hướng đi song song.',
      'Track cost per SKU là công việc 30 phút/tuần, đổi lại tránh được tình cảnh "bán nhiều mà không có tiền".',
    ],
    toolsUsed: [
      { label: 'Wizard — mode "Đang vận hành" tính cost per món', href: '/fnb' },
      { label: 'AI Chat — hỏi cách reprice không mất khách', href: '/ai-chat' },
      { label: 'Knowledge — bài Menu Engineering + Cost Control', href: '/kien-thuc' },
    ],
    disclaimer:
      'Câu chuyện tổng hợp từ pattern chủ tiệm bánh & F&B đã sử dụng Wizard "existing mode" và AI Chat trên Validator. Tên và số cụ thể đã ẩn danh. Nội dung diagnostic và bài học phản ánh trung thực điều đã diễn ra với người dùng thực.',
    seoTitle: 'Bakery Đà Nẵng phát hiện món chủ lực lỗ 8k/chiếc — Câu chuyện chủ quán',
    seoDescription:
      'Chị Hằng (bakery Đà Nẵng) dùng Wizard mode "đang mở" trên Validator phát hiện bánh mì signature lỗ 8k/chiếc. Sau reprice: margin từ 6% lên 18%. Case study đầy đủ.',
  },
  {
    id: 'tra-sua-hcmc-chi-nhanh-3',
    slug: 'chuoi-tra-sua-hcmc-so-3-kich-ban-chon-mat-bang-payback-8-thang',
    ownerName: 'Chị Vy',
    ownerRole: 'Founder chuỗi trà sữa (2 chi nhánh)',
    city: 'TP.HCM',
    model: 'bubbletea',
    scale: 'Chi nhánh mới 40m² · 15 chỗ · 5 nhân viên',
    monthsOpen: 8,
    timeframe: '8 tháng (từ khi mở chi nhánh 3)',
    headline: 'So 3 mặt bằng với Wizard — chọn location rẻ hơn, payback 8 tháng thay vì 14',
    summary:
      'Chị Vy đã có 2 chi nhánh trà sữa hoạt động, muốn mở chi nhánh 3. Có 3 mặt bằng "đẹp" đang xem xét, giá thuê từ 28-55 triệu/tháng. Thay vì chọn mặt bằng đẹp nhất theo cảm giác, chị dùng Wizard tính 3 scenario song song. Kết quả: mặt bằng "trung bình" cho payback nhanh gấp đôi.',
    context:
      'Chuỗi trà sữa 2 chi nhánh, doanh thu mỗi chi nhánh ~250 triệu/tháng, margin ~22%. Muốn mở chi nhánh 3 để tận dụng brand đang lên, đội ngũ vận hành đã có kinh nghiệm. Ngân sách đầu tư ~600 triệu (đã trừ vốn lưu động).',
    painPoints: [
      'Mặt bằng A: 55 triệu/tháng, mặt tiền đường lớn Bình Thạnh, view đẹp, foot traffic cao — nhưng deposit 6 tháng = 330 triệu, ăn hơn nửa ngân sách đầu tư.',
      'Mặt bằng B: 35 triệu/tháng, hẻm rộng Quận 7, đối diện tòa văn phòng — traffic vừa phải.',
      'Mặt bằng C: 28 triệu/tháng, trong khu chung cư mới Thủ Đức — dân cư đông nhưng ít khách vãng lai.',
      'Cảm tính đội ngũ nghiêng về mặt bằng A vì "hào nhoáng" và "brand awareness".',
    ],
    turningPoint:
      'Chị Vy nhập cả 3 mặt bằng vào Wizard, mỗi cái là 1 scenario riêng với giả định doanh thu khác nhau (mặt bằng A: 320 triệu/tháng conservative, B: 240 triệu, C: 220 triệu). AI Chat hỏi thêm: "nếu 6 tháng đầu doanh thu thấp hơn 30%, scenario nào chịu đựng được?". Số ra rõ: mặt bằng A break-even ở 280 triệu/tháng (rủi ro cao), B ở 165 triệu (thoải mái), C ở 145 triệu (rất an toàn).',
    actions: [
      {
        title: 'Chọn mặt bằng B (Quận 7, 35 triệu)',
        desc: 'Cân bằng giữa traffic và chi phí cố định. Deposit 3 tháng (105 triệu) — giữ được 65% ngân sách cho vốn lưu động và marketing 6 tháng đầu.',
      },
      {
        title: 'Đầu tư mạnh vào marketing local 3 tháng đầu',
        desc: 'Số tiết kiệm được từ deposit + tiền thuê thấp → dồn vào flyer khu văn phòng đối diện, Grab/Shopee Food voucher, workshop pha chế cho khách quen.',
      },
      {
        title: 'Setup KPI weekly, so với scenario Wizard',
        desc: 'Mỗi tuần nhập số thực tế vào Validator, so với projection. Kịp phát hiện tháng 3 doanh thu chậm hơn dự — thêm 1 combo topping mới đẩy AOV lên.',
      },
      {
        title: 'Không mở mặt bằng A dù đội ngũ tiếc',
        desc: 'Quyết định khó nhất. Nhưng dữ liệu Wizard cho thấy nếu doanh thu chỉ đạt 70% kỳ vọng, chi nhánh A sẽ đốt hết vốn lưu động trong 4 tháng.',
      },
    ],
    metrics: [
      { label: 'Chi phí thuê tháng', before: 'A: 55tr / B: 35tr / C: 28tr', after: 'Chọn B: 35tr', delta: '—' },
      { label: 'Doanh thu tháng (tháng 8)', before: 'projection 240tr', after: '265tr', delta: '+10% vs plan' },
      { label: 'Margin', before: 'projection 20%', after: '23%', delta: '+3 điểm' },
      { label: 'Payback period', before: 'plan A: 14 tháng', after: 'thực tế B: 8 tháng', delta: 'nhanh gấp 1.75x' },
      { label: 'Vốn lưu động còn sau tháng 3', before: 'A: âm ~50tr', after: 'B: +180tr', delta: 'an toàn' },
    ],
    lessons: [
      'Mặt bằng "đẹp nhất" không phải mặt bằng "tốt nhất cho payback". Tính break-even trước, quyết sau.',
      'Scenario comparison quan trọng hơn scenario đơn lẻ — mới thấy được trade-off thật.',
      'Tiết kiệm 20 triệu thuê/tháng = 240 triệu/năm — đủ để đầu tư marketing hoặc mở thêm chi nhánh sau.',
      'Đội ngũ có kinh nghiệm dễ overconfident. Data + AI stress-test giúp cân lại cảm tính.',
    ],
    toolsUsed: [
      { label: 'Wizard — chạy 3 scenario song song', href: '/fnb' },
      { label: 'AI Chat — stress-test kịch bản doanh thu thấp', href: '/ai-chat' },
      { label: 'Knowledge — bài Chọn Mặt Bằng F&B', href: '/kien-thuc' },
    ],
    disclaimer:
      'Câu chuyện tổng hợp từ pattern chủ chuỗi F&B đã dùng Wizard so sánh nhiều scenario trên Validator. Tên và một số con số đã ẩn danh. Framework quyết định, trade-off và bài học phản ánh trung thực.',
    seoTitle: 'Chuỗi trà sữa HCMC so 3 mặt bằng bằng Wizard — payback 8 tháng thay vì 14',
    seoDescription:
      'Chị Vy (chuỗi trà sữa 2 chi nhánh) dùng Wizard scenario comparison trên Validator, chọn mặt bằng B thay vì A "đẹp nhất". Payback nhanh gấp 1.75x. Case study đầy đủ.',
  },
];

export default STORIES;
