import type { KBTopic, KBTableRow, KBStat, KBWarningItem } from '@/types';

const TRENDS_ARTICLES: KBTopic[] = [
  {
    id: 'sugar_tax_2026',
    slug: 'thue-do-uong-co-duong-2026',
    icon: 'chart',
    publishDate: '2026-03-01',
    title: 'Thuế đồ uống có đường 2026–2028: Quán bạn bị ảnh hưởng gì?',
    subtitle: 'Luật mới đánh thuế nước ngọt — hiểu đúng để chuẩn bị kịp thời',
    color: 'primary-light',
    category: 'trends',
    highlights: [
      { label: 'Thuế mới từ', value: '2027', note: '8% từ 2027, 10% từ 2028' },
      { label: 'Ngưỡng đường chịu thuế', value: '> 5g/100ml', note: 'Theo Tiêu chuẩn VN' },
      { label: 'Sản phẩm được miễn', value: 'Sữa, nước ép, nước dừa', note: 'Theo quy định hiện hành' },
      { label: 'Thị trường đồ uống VN', value: '$2.1 tỷ', note: 'Quy mô năm 2024' },
    ],
    sections: [
      {
        type: 'text',
        content:
          'Từ năm 2027, nhiều loại nước ngọt, trà sữa, nước ép đóng chai bán tại quán F&B sẽ chịu thêm thuế tiêu thụ đặc biệt (TTĐB) — luật mới đã được Quốc hội thông qua và có hiệu lực từ 1/1/2026. Năm 2026 là năm "chuẩn bị": chưa thu thuế nhưng các quy định đã có hiệu lực để doanh nghiệp điều chỉnh. Nếu bạn đang bán trà sữa, nước ngọt, hay các loại đồ uống có pha thêm đường, đây là thông tin bạn cần biết ngay — để tránh bị bất ngờ khi giá nguyên liệu tăng và biên lợi nhuận giảm.',
      },
      {
        type: 'stat-grid',
        heading: 'Những con số cần nhớ',
        content: [
          {
            icon: 'chart',
            label: 'Thuế suất từ 2027',
            value: '8%',
            desc: 'Áp lên giá sản xuất/nhập khẩu đồ uống có đường >5g/100ml. Từ 2028 tăng lên 10%.',
          },
          {
            icon: 'money',
            label: 'Ngưỡng đường bị thuế',
            value: '5g/100ml',
            desc: 'Ly trà sữa 500ml chứa khoảng 40-60g đường — vượt ngưỡng xa. Ngay cả trà ít ngọt cũng có thể vượt.',
          },
          {
            icon: 'growth',
            label: 'Tồn kho đồ uống tăng',
            value: '+23.7%',
            desc: 'Tồn kho cuối 2024 tăng 23,7% so với 2023 — ngành đồ uống đang khó, thuế mới làm khó thêm.',
          },
          {
            icon: 'users',
            label: 'Sản lượng đồ uống giảm',
            value: '-9.2%',
            desc: 'Sản lượng bia, nước giải khát năm 2024 giảm 9,2% — thị trường chưa phục hồi đã đón thêm thuế.',
          },
        ] as KBStat[],
      },
      {
        type: 'text',
        content:
          'Nhiều chủ quán trà sữa, cafe, quán ăn nghe đến "thuế đồ uống có đường" liền nghĩ: "Thuế này áp lên nhà máy, mình bán lẻ không bị ảnh hưởng." Nhưng thực tế không đơn giản vậy. Khi nhà sản xuất bị tăng thuế, họ sẽ tăng giá bán sỉ — và chi phí nguyên liệu của bạn sẽ tăng theo. Đây là cơ chế "thuế ngầm" mà nhiều quán nhỏ chưa tính tới khi lập kế hoạch.',
      },
      {
        type: 'list',
        heading: 'Những mặt hàng quán F&B dùng có thể bị ảnh hưởng',
        content: [
          'Siro (syrup) pha chế: Hầu hết siro có hàm lượng đường rất cao (60-80g/100ml) — nằm trong diện chịu thuế nếu đóng chai công nghiệp.',
          'Nước ngọt đóng chai mua về bán lại (Pepsi, Coke, nước tăng lực): Đây là mặt hàng chịu thuế trực tiếp ở khâu sản xuất — giá nhập sẽ tăng.',
          'Bột trà sữa, bột matcha có đường pha sẵn: Nếu đóng gói công nghiệp và có hàm lượng đường >5g/100ml khi pha, có thể bị xếp vào diện chịu thuế.',
          'Trà, sữa tươi nguyên chất: ĐƯỢC MIỄN thuế — cơ hội để tái định vị menu sang các sản phẩm ít đường, tự nhiên.',
          'Nước ép trái cây tươi, nước dừa nguyên chất: ĐƯỢC MIỄN — xu hướng healthy drink phù hợp với định hướng chính sách mới.',
        ],
      },
      {
        type: 'table',
        heading: 'Sản phẩm nào chịu thuế, sản phẩm nào không?',
        content: [
          {
            label: 'Nước ngọt có ga (Coke, Pepsi, 7-Up)',
            range: 'Chịu thuế',
            note: 'Đường ~10g/100ml, vượt ngưỡng 5g',
          },
          {
            label: 'Nước tăng lực (Red Bull, Sting, Monster)',
            range: 'Chịu thuế',
            note: 'Đường cao + caffeine, vượt ngưỡng rõ ràng',
          },
          {
            label: 'Trà sữa đóng chai (Suntory, V-Fresh...)',
            range: 'Chịu thuế',
            note: 'Đường >10g/100ml ở hầu hết thương hiệu',
          },
          {
            label: 'Nước ép trái cây 100% tự nhiên',
            range: 'Miễn thuế',
            note: 'Theo quy định hiện hành — nhưng cần xem lại định nghĩa',
          },
          {
            label: 'Sữa tươi, sữa chua nguyên chất',
            range: 'Miễn thuế',
            note: 'Sản phẩm sữa và dairy được miễn',
          },
          {
            label: 'Nước dừa tươi/đóng hộp nguyên chất',
            range: 'Miễn thuế',
            note: 'Không thêm đường, đủ điều kiện miễn',
          },
          {
            label: 'Trà đen, trà xanh pha sẵn có đường',
            range: 'Chịu thuế',
            note: 'Nếu đóng chai công nghiệp và >5g/100ml',
          },
          {
            label: 'Siro pha chế (syrup thương hiệu)',
            range: 'Cần kiểm tra',
            note: 'Phụ thuộc phân loại — nhà cung cấp cần xác nhận',
          },
        ] as KBTableRow[],
      },
      {
        type: 'text',
        content:
          'Câu hỏi thực tế nhất với chủ quán: "Thuế này ảnh hưởng bao nhiêu đến túi tiền của mình?" Hãy tính thử: nếu bạn mua nước ngọt đóng chai giá sỉ 7.000đ/chai, và nhà sản xuất chuyển 8% thuế TTĐB vào giá bán, giá nhập sẽ tăng lên khoảng 7.560đ. Nghe ít, nhưng nhân với 500 chai/tháng = mỗi tháng bạn tốn thêm khoảng 280.000đ chỉ riêng khoản này. Với quán bán nhiều đồ uống có đường, con số cộng dồn trong một năm là đáng kể.',
      },
      {
        type: 'table',
        heading: 'Ước tính tác động chi phí (ví dụ quán trà sữa bán 100 ly/ngày)',
        content: [
          {
            label: 'Chi phí siro pha chế/tháng hiện tại',
            range: '4 - 8 triệu',
            note: 'Giả sử 50% đơn hàng dùng siro đường',
          },
          {
            label: 'Tăng thêm khi có thuế 8% (từ 2027)',
            range: '+320k - 640k',
            note: 'Nhà sản xuất chuyển thuế vào giá bán',
          },
          {
            label: 'Tăng thêm khi có thuế 10% (từ 2028)',
            range: '+400k - 800k',
            note: 'Tác động lớn hơn khi thuế suất tăng',
          },
          {
            label: 'Chi phí nguyên liệu tổng tăng/năm',
            range: '3.8 - 9.6 triệu',
            note: 'Với quán 100 ly/ngày, không nhỏ',
          },
          {
            label: 'Cần tăng giá bán để giữ biên lãi cũ',
            range: '1.000 - 2.000đ/ly',
            note: 'Hoặc giảm nguyên liệu đường/siro trong công thức',
          },
        ] as KBTableRow[],
      },
      {
        type: 'list',
        heading: '5 việc quán nên làm ngay trong năm 2026 (trước khi thuế có hiệu lực)',
        content: [
          'Rà soát nguyên liệu: Lập danh sách tất cả nguyên liệu đồ uống đang dùng, hỏi nhà cung cấp xem loại nào thuộc diện chịu thuế TTĐB từ 2027. Đừng chờ đến lúc nhà cung cấp tăng giá mới biết.',
          'Tính lại chi phí nguyên liệu cho từng món: Với mỗi loại đồ uống đang bán, ước tính nếu chi phí nguyên liệu tăng 5-10%, giá bán cần điều chỉnh bao nhiêu để giữ được biên lãi hiện tại.',
          'Thêm dần các option "ít đường" hoặc không đường: Đây vừa là cách chuẩn bị cho xu hướng healthy, vừa giảm phụ thuộc vào nguyên liệu chịu thuế. Khách cũng đang dần ưa thích đồ uống ít ngọt hơn.',
          'Xem xét thay thế siro bằng nguyên liệu tươi: Trái cây tươi, mật ong, đường thốt nốt... không chỉ được miễn thuế mà còn giúp quán định vị "healthy" và tăng giá bán hợp lý hơn.',
          'Đừng tăng giá đột ngột khi thuế có hiệu lực: Lên kế hoạch tăng giá dần từ cuối 2026, trước khi thuế áp dụng. Khách hàng cần thời gian thích nghi — tăng đột ngột 2.000-3.000đ/ly sẽ gây shock.',
        ],
      },
      {
        type: 'warning-list',
        heading: 'Những điều cần lưu ý',
        content: [
          {
            icon: 'warning',
            title: 'Thuế áp vào nhà sản xuất, không phải quán — nhưng quán vẫn chịu ảnh hưởng',
            desc: 'Nhiều chủ quán nhỏ nghĩ "mình không phải nhà sản xuất nên không bị". Sai. Khi giá sỉ tăng, biên lãi của bạn giảm. Phải tính toán và điều chỉnh trước.',
            severity: 'critical',
          },
          {
            icon: 'warning',
            title: 'Đồ uống pha chế tại chỗ có thể không bị thuế trực tiếp',
            desc: 'Nếu bạn mua đường trắng, nấu siro tươi ngay tại quán — không phải siro đóng chai công nghiệp — khả năng cao không nằm trong diện chịu thuế. Đây là lợi thế của quán nhỏ.',
            severity: 'tip',
          },
          {
            icon: 'warning',
            title: 'Quy định có thể thay đổi — theo dõi thông tư hướng dẫn',
            desc: 'Luật đã thông qua nhưng Thông tư hướng dẫn chi tiết chưa đầy đủ. Theo dõi Bộ Tài chính và VCCI để cập nhật danh sách sản phẩm chịu thuế chính xác.',
            severity: 'warning',
          },
          {
            icon: 'warning',
            title: 'Cơ hội: định vị lại menu sang "ít đường, tự nhiên"',
            desc: 'Thuế này thực ra là "gió lành" cho quán muốn thoát khỏi vòng xoáy giảm giá, cạnh tranh trà sữa đại trà. Khách trả thêm tiền cho sản phẩm healthy, minh bạch thành phần.',
            severity: 'tip',
          },
        ] as KBWarningItem[],
      },
      {
        type: 'text',
        content:
          'Thuế mới không phải là tận thế của ngành F&B, nhưng nó sẽ phân hóa rõ hơn: quán nào chuẩn bị trước, điều chỉnh menu và giá bán hợp lý, sẽ giữ được biên lãi. Quán nào bị động, để chi phí nguyên liệu ăn dần vào lợi nhuận mà không điều chỉnh, sẽ khó hơn. Dùng Validator.vn để chạy lại mô hình tài chính với giả định chi phí nguyên liệu tăng 5-10% — xem quán bạn cần điều chỉnh gì để vẫn có lãi trong môi trường mới.',
      },
    ],
  },
  {
    id: 'cloud_kitchen_2026',
    slug: 'bep-tren-may-cloud-kitchen-2026',
    icon: 'trending',
    publishDate: '2026-05-01',
    title: 'Bếp trên mây (Cloud Kitchen) 2026: Mở quán ăn không cần mặt bằng?',
    subtitle: 'Mô hình tăng trưởng nhanh nhất ngành F&B — vốn ít, rủi ro thấp, nhưng không dễ ăn',
    color: 'secondary-light',
    category: 'trends',
    highlights: [
      { label: 'Tốc độ tăng trưởng', value: '18.7%/năm', note: 'CAGR 2026–2031, nhanh nhất ngành' },
      { label: 'Vốn khởi nghiệp', value: '750tr – 1.2 tỷ', note: 'So với 2.5–5 tỷ cho quán truyền thống' },
      { label: 'Thị trường delivery VN', value: '$2 tỷ', note: 'Quy mô 2026, tăng 12.9%/năm' },
      { label: 'Tỷ lệ quán độc lập', value: '77.4%', note: 'Phần lớn F&B VN là quán nhỏ lẻ' },
    ],
    sections: [
      {
        type: 'text',
        content:
          'Nếu bạn đang muốn mở quán ăn nhưng ngại mặt tiền đắt đỏ, đừng bỏ qua mô hình "bếp trên mây" (cloud kitchen). Đây là loại bếp chỉ phục vụ đơn hàng giao đi — không có chỗ ngồi cho khách, không cần mặt bằng đẹp, không tốn tiền trang trí. Bạn thuê một bếp nhỏ trong hẻm hoặc khu công nghiệp, nấu đồ ăn, rồi bán qua GrabFood, ShopeeFood, hoặc website riêng. Nghe đơn giản, nhưng mô hình này đang là phân khúc tăng trưởng nhanh nhất ngành F&B Việt Nam năm 2026 — với tốc độ gần 19%/năm, gấp đôi tốc độ tăng trưởng chung của ngành.',
      },
      {
        type: 'stat-grid',
        heading: 'Những con số đáng chú ý',
        content: [
          {
            icon: 'growth',
            label: 'Tăng trưởng cloud kitchen',
            value: '18.7%',
            desc: 'CAGR 2026–2031, nhanh nhất trong tất cả phân khúc F&B. Quán truyền thống chỉ tăng 8–10%.',
          },
          {
            icon: 'money',
            label: 'Vốn đầu tư ban đầu',
            value: '750tr – 1.2 tỷ',
            desc: 'Tiết kiệm 60–70% so với quán có mặt bằng. Không tốn tiền thuê mặt tiền, trang trí, bàn ghế.',
          },
          {
            icon: 'chart',
            label: 'Thị trường giao đồ ăn',
            value: '$2 tỷ',
            desc: 'Quy mô thị trường delivery Việt Nam 2026. Dự kiến đạt $3.5 tỷ vào 2031 — nền tảng cho cloud kitchen phát triển.',
          },
          {
            icon: 'users',
            label: 'Quy mô ngành F&B VN',
            value: '760 nghìn tỷ',
            desc: '333.600 cửa hàng trên cả nước. Ngành tăng 9.6%/năm nhưng đang vào giai đoạn sàng lọc, cần hiệu quả hơn.',
          },
        ] as KBStat[],
      },
      {
        type: 'text',
        content:
          'Tại sao cloud kitchen lại bùng nổ ở Việt Nam? Có 3 lý do chính: (1) Mặt bằng ở TP.HCM và Hà Nội quá đắt — thuê mặt tiền 30–80 triệu/tháng, trong khi bếp trong hẻm chỉ 5–15 triệu. (2) Người Việt đặt đồ ăn online ngày càng nhiều — thị trường delivery tăng gần 13%/năm. (3) Sau COVID, nhiều chủ quán nhận ra rằng doanh thu delivery có thể chiếm 40–60% tổng thu — vậy tại sao phải trả tiền mặt bằng đẹp khi phần lớn khách không đến quán?',
      },
      {
        type: 'table',
        heading: 'So sánh: Cloud kitchen vs. Quán truyền thống',
        content: [
          {
            label: 'Vốn đầu tư ban đầu',
            range: '750tr – 1.2 tỷ vs. 2.5 – 5 tỷ',
            note: 'Cloud kitchen tiết kiệm 60–70% chi phí khởi nghiệp',
          },
          {
            label: 'Tiền thuê mặt bằng/tháng',
            range: '5 – 15 triệu vs. 30 – 80 triệu',
            note: 'Bếp hẻm/khu CN so với mặt tiền đường lớn',
          },
          {
            label: 'Nhân viên tối thiểu',
            range: '2 – 4 người vs. 6 – 12 người',
            note: 'Không cần phục vụ bàn, thu ngân, bảo vệ',
          },
          {
            label: 'Thời gian hòa vốn',
            range: '6 – 12 tháng vs. 18 – 36 tháng',
            note: 'Chi phí cố định thấp hơn = hòa vốn nhanh hơn',
          },
          {
            label: 'Rủi ro nếu thất bại',
            range: 'Thấp vs. Rất cao',
            note: 'Cloud kitchen dễ đóng/chuyển đổi, không bị kẹt hợp đồng thuê dài hạn',
          },
          {
            label: 'Khả năng mở rộng',
            range: 'Nhanh vs. Chậm',
            note: 'Mở thêm bếp mới trong 2–4 tuần, không cần tìm mặt bằng đẹp',
          },
        ] as KBTableRow[],
      },
      {
        type: 'list',
        heading: 'Ai nên thử cloud kitchen?',
        content: [
          'Người mới muốn khởi nghiệp F&B nhưng vốn dưới 1.5 tỷ: Cloud kitchen cho phép bạn test ý tưởng với rủi ro tài chính thấp nhất. Nếu món ăn bán được, mở rộng rất nhanh.',
          'Chủ quán truyền thống muốn mở thêm "chi nhánh ảo": Bạn đã có công thức, nhà cung cấp, quy trình — chỉ cần thuê thêm bếp ở khu vực mới để phủ delivery, không cần đầu tư quán mới.',
          'Đầu bếp giỏi nhưng không rành kinh doanh mặt bằng: Cloud kitchen giảm bớt gánh nặng quản lý mặt bằng, nhân viên phục vụ — bạn chỉ cần tập trung vào nấu ăn và đóng gói.',
          'Người muốn chạy nhiều thương hiệu cùng lúc: Một bếp có thể vận hành 2–3 thương hiệu khác nhau trên app delivery (ví dụ: cơm trưa văn phòng + bún bò + salad healthy) — tối đa hóa công suất bếp.',
        ],
      },
      {
        type: 'warning-list',
        heading: 'Những bẫy cần tránh',
        content: [
          {
            icon: 'warning',
            title: 'Phí hoa hồng app delivery "ăn" hết lãi',
            desc: 'GrabFood, ShopeeFood thu 20–30% hoa hồng trên mỗi đơn. Nếu giá bán 50.000đ, bạn chỉ nhận 35.000–40.000đ. Phải tính giá bán đã bao gồm phí nền tảng, không phải tính giá rồi mới trừ.',
            severity: 'critical',
          },
          {
            icon: 'warning',
            title: 'Không có mặt tiền = không có khách vãng lai',
            desc: '100% khách đến từ app và marketing online. Nếu bạn không biết chạy quảng cáo, tối ưu listing trên app, đánh giá sao — sẽ rất khó có đơn hàng ban đầu. Cloud kitchen đòi hỏi kỹ năng digital marketing.',
            severity: 'critical',
          },
          {
            icon: 'warning',
            title: 'Chất lượng đồ ăn giảm khi giao đi',
            desc: 'Món chiên bị ỉu, nước lèo bị nguội, salad bị héo — không phải món nào cũng phù hợp delivery. Hãy thiết kế menu chuyên cho giao đi: chọn món giữ được chất lượng sau 20–30 phút vận chuyển.',
            severity: 'warning',
          },
          {
            icon: 'warning',
            title: 'Giấy phép kinh doanh và an toàn thực phẩm vẫn bắt buộc',
            desc: 'Nghị định 46/2026 về an toàn thực phẩm đã có hiệu lực từ tháng 4/2026, áp dụng cho cả bếp cloud kitchen. Bạn vẫn cần giấy phép ATTP, đăng ký kinh doanh, và đáp ứng tiêu chuẩn vệ sinh — không có ngoại lệ vì "không có khách ngồi tại chỗ".',
            severity: 'warning',
          },
          {
            icon: 'warning',
            title: 'Cơ hội: "virtual brand" — chạy nhiều thương hiệu từ 1 bếp',
            desc: 'Đây là lợi thế lớn nhất của cloud kitchen mà quán truyền thống không có. Cùng một bếp, cùng nhân viên, bạn có thể tạo 2–3 thương hiệu khác nhau trên GrabFood — mỗi thương hiệu nhắm đến phân khúc khách khác nhau.',
            severity: 'tip',
          },
        ] as KBWarningItem[],
      },
      {
        type: 'list',
        heading: '5 bước bắt đầu cloud kitchen với vốn dưới 1 tỷ',
        content: [
          'Chọn 1 món "hero" dễ delivery: Không cần menu 30 món. Bắt đầu với 5–8 món xoay quanh 1 concept (ví dụ: cơm gà, bún bò, poke bowl). Món phải giữ được chất lượng sau 30 phút giao hàng.',
          'Thuê bếp ở khu vực có mật độ đơn delivery cao: Quận 1, 3, Bình Thạnh, Tân Bình (TP.HCM) hoặc Cầu Giấy, Đống Đa, Thanh Xuân (Hà Nội). Dùng dữ liệu từ GrabFood merchant để xem khu nào nhiều đơn.',
          'Đăng ký đầy đủ giấy phép trước khi bán: Giấy phép kinh doanh + Giấy chứng nhận ATTP. Nghị định 46/2026 mới áp dụng hệ thống thanh tra dựa trên rủi ro — bếp cloud kitchen cũng nằm trong phạm vi.',
          'Tối ưu listing trên app delivery ngay từ ngày đầu: Ảnh đẹp, mô tả rõ ràng, giá hợp lý, combo có lãi. 70% khách quyết định đặt món dựa trên ảnh và đánh giá — đầu tư chụp ảnh chuyên nghiệp ngay từ đầu.',
          'Theo dõi số liệu hàng ngày, điều chỉnh hàng tuần: Tỷ lệ hủy đơn, thời gian chuẩn bị, đánh giá khách hàng, food cost per dish. Dùng Validator.vn để mô phỏng tài chính trước khi cam kết thuê bếp dài hạn.',
        ],
      },
      {
        type: 'text',
        content:
          'Cloud kitchen không phải "cách làm giàu nhanh" — nhưng đó là cách thông minh nhất để bắt đầu kinh doanh F&B trong năm 2026 với rủi ro tài chính thấp. Với thị trường delivery Việt Nam đạt $2 tỷ và tăng gần 13% mỗi năm, nhu cầu từ phía khách hàng rõ ràng đang có. Câu hỏi là: bạn có biết tận dụng không? Dùng Validator.vn để tính toán xem mô hình cloud kitchen có phù hợp với ngân sách và kế hoạch kinh doanh của bạn — trước khi bỏ tiền thuê bếp.',
      },
    ],
  },
];

export default TRENDS_ARTICLES;
