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
        type: 'tldr',
        content: [
          'Từ 2027, đồ uống >5g/100ml chịu thuế 8% (2027) → 10% (2028); siro, nước ngọt đóng chai Grab/Shopee sẽ tăng giá',
          'Sản phẩm miễn: sữa tươi + nước ép tự nhiên + nước dừa nguyên chất → cơ hội pivot menu sang healthy drinks',
          'Thuế này áp lên nhà sản xuất/import → NCC sẽ tăng giá bán sỉ → chi phí nguyên liệu quán tăng 3-8%',
          'Nên chuẩn bị 2026: kiểm tra hàm lượng đường siro/sản phẩm hiện tại, test công thức ít đường, plan tăng giá menu trước 2027'
        ],
      },
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
        type: 'tldr',
        content: [
          'Cloud kitchen vốn 750tr-1.2 tỷ (vs 2.5-5 tỷ truyền thống), không cần mặt bằng đẹp, tăng trưởng 18.7%/năm',
          'Rủi ro: phụ thuộc 100% vào app delivery (20-30% hoa hồng), khó build brand khi không mặt tiền, áp lực cash flow 7-14 ngày',
          'Thích hợp: founder có tay nghề nấu ăn + gọi vốn 2-3 tỷ + team, hoặc muốn test concept rất nhanh (6-12 tuần)',
          'Không thích hợp: quán nhỏ lẻ muốn độc lập, hoặc doanh thu kỳ vọng <100tr/tháng (không đủ trả phí app 25-30%)'
        ],
      },
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
  {
    id: 'fnb_industry_benchmark_2026',
    slug: 'so-lieu-nganh-fnb-viet-nam-2026',
    publishDate: '2026-06-28',
    icon: 'chart',
    title: 'Số liệu ngành F&B Việt Nam 2026: Benchmark tham chiếu',
    subtitle: 'Quy mô thị trường 726 nghìn tỷ, doanh thu trung bình, biên lợi nhuận, tỷ lệ thất bại',
    seoTitle: 'Số liệu F&B Việt Nam 2026: 726 nghìn tỷ thị trường + benchmark theo segment',
    seoDescription: 'Báo cáo benchmark ngành F&B Việt Nam 2026: 726 nghìn tỷ thị trường, 329K cửa hàng, biên lợi nhuận theo segment, top 3 lý do thất bại, dữ liệu delivery & consumer behavior.',
    color: 'secondary-light',
    category: 'strategy',
    highlights: [
      { label: 'Quy mô thị trường', value: '726.5 nghìn tỷ', note: '~$27.3B USD (2025)' },
      { label: 'Số cửa hàng F&B', value: '329,500', note: '300K-329K (2025)' },
      { label: 'Đóng cửa H1 2025', value: '50.000+', note: 'cảnh báo đỏ' },
      { label: 'Tăng trưởng YoY', value: '+9.6%', note: '2024→2025' },
    ],
    sections: [
      {
        type: 'tldr',
        content: [
          'Thị trường F&B Việt Nam 2025: 726.5 nghìn tỷ VNĐ (~$27.3B), tăng 9.6% YoY — nhưng H1 2025 có 50.000+ cửa hàng đóng cửa',
          'Trên 60% doanh nghiệp F&B Việt báo cáo doanh thu giảm trong 2024 — competition khốc liệt + giá thuê tăng 25-40%',
          'Biên lợi nhuận trung bình: gross 38.2% (Việt Nam), net 2-10% tùy segment — coffee 5-15%, bakery 8-12%, bubble tea 15%+',
          'Delivery market: $2.1B (2025), tăng 19% YoY, ShopeeFood + GrabFood chiếm 90% (mỗi app 48%)',
        ],
      },
      {
        type: 'text',
        content: 'Trang này tổng hợp số liệu benchmark chính thức ngành F&B Việt Nam — từ quy mô thị trường, biên lợi nhuận theo segment, đến hành vi người tiêu dùng. Mọi số đều có nguồn (Decision Lab, Statista, VietData, Vietnam Briefing, Ken Research...). Dùng làm tham chiếu khi lên kế hoạch kinh doanh, so sánh hiệu quả vận hành, hoặc trích dẫn trong báo cáo.',
      },
      {
        type: 'table',
        heading: '1. Quy mô thị trường & tăng trưởng',
        content: [
          { label: 'Tổng doanh thu F&B Việt Nam 2025', range: '726.5 nghìn tỷ VNĐ', note: '~$27.3-30.5B USD. Nguồn: HCMC FOODEX 2024 forecast.' },
          { label: 'Doanh thu 2024', range: '688.8 nghìn tỷ VNĐ', note: '~$27.3B USD. Tăng 16.6% so với 2023. Nguồn: Vietnam.vn.' },
          { label: 'Tăng trưởng YoY 2024→2025', range: '+9.6%', note: 'Chậm hơn 2023→2024 (+16.6%) — dấu hiệu thị trường bão hòa. Nguồn: Vietnam.vn.' },
          { label: 'Số cửa hàng F&B đăng ký', range: '329,500', note: 'Cuối 2024: 323,010. H1 2025 còn ~300,000 (giảm 7.1%). Nguồn: HCMC FOODEX, B-Company.' },
          { label: '% doanh thu từ nhà hàng', range: '68%+', note: 'Phần còn lại: cafe, quán nước, bar, fast food. Nguồn: Vietnam Foodexpo.' },
        ] as KBTableRow[],
      },
      {
        type: 'table',
        heading: '2. Tỷ lệ đóng cửa & lý do thất bại',
        content: [
          { label: 'Đóng cửa H1 2024', range: '~30,000 cửa hàng', note: 'Nguồn: Investor.vn (số liệu chính thức từ khảo sát F&B).' },
          { label: 'Đóng cửa H1 2025', range: '~50,000+ cửa hàng', note: 'Tăng 67% so với cùng kỳ — xu hướng đáng báo động. Nguồn: B-Company, Vietstock.' },
          { label: 'Tỷ lệ sống sót 5 năm (US benchmark)', range: '~51%', note: 'Việt Nam chưa có số chính thức, tham khảo US: 51% sống qua 5 năm. Nguồn: Toast, Escoffier.' },
          { label: 'Tỷ lệ sống sót 10 năm (US)', range: '~34.6%', note: 'Tham khảo US — Việt Nam có thể tương tự hoặc thấp hơn do thị trường biến động hơn. Nguồn: Toast.' },
          { label: '% DN báo cáo doanh thu giảm 2024', range: '60%+', note: '4,000+ DN khảo sát. Nguồn: Vietnam News.' },
          { label: 'Top 3 lý do thất bại', range: 'Chi phí + cạnh tranh + marketing yếu', note: '45% DN bị tăng thuê 25-40% H1 2024. Marketing yếu (chỉ FB) + "open-close nhanh" mô hình. Nguồn: VIR, Investor.vn.' },
        ] as KBTableRow[],
      },
      {
        type: 'table',
        heading: '3. Biên lợi nhuận theo segment (gross / net %)',
        content: [
          { label: 'Toàn ngành F&B Việt (avg)', range: 'Gross 38.2% / Net 2-10%', note: 'Số liệu Việt Nam chính thức. Net thấp do chi phí thuê + cạnh tranh. Nguồn: VietData.' },
          { label: 'Coffee shop', range: 'Gross 60-65% / Net 5-15%', note: 'Espresso 65-75% gross, drip 85-90%. Food/pastry cafe 40-65%. Nguồn: Pool Six, Financial Models Lab.' },
          { label: 'Restaurant casual dining', range: 'Gross 60-65% / Net 3-5%', note: 'Food cost 28-35%. Nguồn: CLFI, Restaurant 365.' },
          { label: 'Bakery', range: 'Gross 55-70% / Net 8-12%', note: 'Food cost 25-30%. Lợi nhuận cao hơn cafe vì AOV cao hơn (bánh kem). Nguồn: SoccaSH.' },
          { label: 'Bubble tea / trà sữa', range: 'Gross 60-75% / Net 15%+', note: 'Phúc Long Heritage 2024 net profit tăng 4x YoY. Nguồn: Vietnam.vn.' },
          { label: 'Cloud kitchen', range: 'Gross 60-65% / Net 3-8%', note: 'Tiết kiệm rent nhưng phí app 25-30% ăn vào. Nguồn: Ken Research.' },
          { label: 'Fast food / QSR', range: 'Gross 55-65% / Net 2-6%', note: 'Volume nhưng margin mỏng. Nguồn: Toast.' },
        ] as KBTableRow[],
      },
      {
        type: 'text',
        content: 'Lưu ý quan trọng: Việt Nam đặc biệt khắc nghiệt về chi phí — 44.8% doanh nghiệp F&B Việt báo cáo NVL chiếm 30%+ giá bán, 6.2% vượt 50% (so với benchmark thế giới 28-35%). Chỉ 24.8% giữ được NVL dưới 20%. Đây là nguyên nhân chính khiến net margin Việt Nam thấp hơn benchmark thế giới.',
      },
      {
        type: 'table',
        heading: '4. Cơ cấu chi phí (% doanh thu — benchmark)',
        content: [
          { label: 'Food cost (NVL)', range: '28-35% (target)', note: 'Việt Nam thực tế: 44.8% DN ở mức 30%+. Nguồn: NetSuite, VietData.' },
          { label: 'Labor cost (nhân sự)', range: '20-30%', note: 'Coffee 20-25%, restaurant 25-30%. Cộng BHXH 21.5% chủ đóng. Nguồn: Taxfyle, Texas Coffee.' },
          { label: 'Rent / mặt bằng', range: '8-12% (target)', note: 'H1 2024 HCM tăng 25-40% YoY → nhiều quán vượt ngưỡng. Prime D1 HCM: $150+/m². Nguồn: Vietnam Briefing.' },
          { label: 'Marketing', range: '3-5%', note: 'Nhiều quán Việt under-invest marketing → khó scale. Nguồn: Toast.' },
          { label: 'Utilities + ops', range: '3-6%', note: 'Điện/nước/internet/bảo trì. Cafe + bakery cao hơn (đốt điện cho máy pha + lò).' },
          { label: 'Prime cost (Food + Labor)', range: '50-55%', note: 'Industry standard. >60% = báo động. Nguồn: Texas Coffee School.' },
        ] as KBTableRow[],
      },
      {
        type: 'table',
        heading: '5. Doanh thu / khách / m²',
        content: [
          { label: 'AOV trung bình bữa trưa', range: '31-50K VNĐ', note: '47.7% người tiêu dùng (2023) chi mức này. Nguồn: Statista.' },
          { label: 'Combo fast food trung bình', range: '$5.15 (~125K VNĐ)', note: 'Mỗi lần ghé. Nguồn: Insight Asia 2024.' },
          { label: 'Chi tiêu hospitality bình quân/người', range: '$288.68/năm', note: 'Forecast 2025. Nguồn: Statista.' },
          { label: 'Rent mặt bằng Q1 HCMC prime', range: '$150+/m²/tháng', note: 'Nguồn: Vietnam Briefing.' },
          { label: 'Doanh thu/m²/tháng (cafe)', range: '2-5tr/m²', note: 'Tính từ data Validator: cafe 40m² doanh thu 100-200tr/tháng.' },
        ] as KBTableRow[],
      },
      {
        type: 'table',
        heading: '6. Delivery & cloud kitchen',
        content: [
          { label: 'Tổng GMV delivery 2025', range: '$2.1 tỷ USD', note: 'Tăng 19% YoY. Nguồn: VIR.com.vn.' },
          { label: 'CAGR 2024-2029', range: '~30% (recent)', note: 'Nguồn: IMARC Group.' },
          { label: 'ShopeeFood + GrabFood market share', range: '90% (48% mỗi app)', note: 'beFood 4%. Nguồn: VnExpress, B-Company.' },
          { label: 'Số người dùng app food', range: '~17.8 triệu', note: '2025. Nguồn: B-Company.' },
          { label: 'Hoa hồng delivery app', range: '20-30%', note: 'Xu hướng tăng — vendors mới phải 25-30%+. Nguồn: Vietnam News.' },
          { label: 'Cloud kitchen market', range: '$1.1B (2024)', note: 'CAGR 19% 2024-2029. 52.3% ở miền Nam. Nguồn: Ken Research.' },
        ] as KBTableRow[],
      },
      {
        type: 'table',
        heading: '7. Lao động & lương F&B',
        content: [
          { label: 'Lực lượng lao động Việt Nam', range: '51.6 triệu', note: '58% dưới 35 tuổi. Nguồn: Talentnet.' },
          { label: 'Lương trung bình Q1 2025', range: '8.3 triệu VNĐ (~$321)', note: 'Tăng 9.5% YoY. Nguồn: Talentnet.' },
          { label: 'Lương tối thiểu vùng 2026 (Vùng I)', range: '5.31 triệu/tháng', note: 'Tăng 7.2% từ 1/1/2026. Vùng IV: 3.7tr. Nguồn: Nghị định 293/2025/NĐ-CP.' },
          { label: 'BHXH chủ đóng', range: '21.5% lương', note: 'BHXH 14% + BHYT 3% + BHTN/TN 1.5% + thuế khác 3%. Nguồn: Vietnam Briefing.' },
        ] as KBTableRow[],
      },
      {
        type: 'table',
        heading: '8. Hành vi người tiêu dùng',
        content: [
          { label: '% ăn ngoài 3-4 lần/tuần', range: '29% (2023)', note: 'Tăng từ 17.9% (2022). Nguồn: Statista.' },
          { label: '% đặt budget ăn ngoài', range: '84%', note: 'Người tiêu dùng có ý thức tiết kiệm. Gen Z: 49% strict adherence. Nguồn: Decision Lab.' },
          { label: 'Top venues ăn ngoài', range: 'Cafe 57%, street food 48%, restaurant 43%', note: '2024. Nguồn: Decision Lab.' },
          { label: '% combo trong fast food', range: '68% đơn / 72% doanh thu', note: 'Combo hiệu quả hơn order lẻ. Nguồn: Insight Asia.' },
          { label: 'Demographic core', range: 'Nam, 15-35 tuổi, 7.5-30tr/tháng', note: 'Profile khách chính ngành F&B. Nguồn: Decision Lab.' },
        ] as KBTableRow[],
      },
      {
        type: 'warning-list',
        heading: 'Insights cho người mở quán F&B 2026',
        content: [
          { icon: 'warning', title: 'Thị trường tăng 9.6% nhưng cửa hàng giảm 7%', desc: 'Consolidation: ít cửa hàng hơn nhưng doanh thu/cửa hàng tăng. Người mở mới phải cạnh tranh với chains đã optimized vận hành. Khó hơn 2-3 năm trước.', severity: 'critical' },
          { icon: 'warning', title: 'Net margin Việt Nam (2-10%) thấp hơn benchmark thế giới (5-15%)', desc: 'Vì NVL + rent Việt Nam đắt tương đối so với giá bán. Phải optimize cả 2 ngay từ đầu — không để food cost vượt 30% hoặc rent vượt 20%.', severity: 'critical' },
          { icon: 'warning', title: 'Delivery 90% chỉ 2 app (Shopee + Grab)', desc: 'Phụ thuộc 1 app = rủi ro lớn (thuật toán đổi, phí tăng). Phải có ít nhất 2 kênh + tự giao bán kính 3km nếu volume đủ.', severity: 'warning' },
          { icon: 'warning', title: 'Lương tối thiểu tăng 7.2% mỗi năm', desc: 'Labor cost sẽ tăng đều đặn. Phải có cơ chế tăng giá menu 5-7%/năm tương ứng, hoặc tăng productivity (training + tự động hóa).', severity: 'warning' },
          { icon: 'warning', title: 'Cloud kitchen + delivery = entry point thấp rủi ro', desc: 'CAGR 19%, market $1.1B, miền Nam dominant. Vốn thấp (30-80tr) so với 300-700tr cho cafe truyền thống. Test concept trước khi đầu tư brick-and-mortar.', severity: 'tip' },
        ] as KBWarningItem[],
      },
      {
        type: 'text',
        content: 'Số liệu trên là benchmark — không phải target tuyệt đối. Mỗi quán có context riêng (vị trí, concept, customer base). Dùng các con số này để CHECK xem mô hình của bạn có khả thi không, và đặt expectation đúng. Một quán mới nên kỳ vọng net margin 5-8% năm đầu, 10-15% sau 2-3 năm. Nếu kỳ vọng >20% net từ ngày đầu = thiếu thực tế. Để model số liệu cụ thể của bạn, dùng F&B Validator — nhập vốn, doanh thu, chi phí thực tế → biết breakeven trong bao lâu.',
      },
    ],
  },
];

export default TRENDS_ARTICLES;
