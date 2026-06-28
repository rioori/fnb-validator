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
  {
    id: 'why_fnb_close_essay',
    slug: 'tai-sao-50-phan-tram-quan-fnb-dong-cua',
    publishDate: '2026-06-28',
    icon: 'warning',
    title: 'Tại sao 50.000 quán F&B đóng cửa trong 6 tháng — và 7 nguyên nhân thật mà không ai dạy',
    subtitle: 'Phân tích sâu từ Soya Garden, Chuk Tea, Baemin đến counter-example Phúc Long, Pizza 4P\'s — và "boring framework" để sống sót',
    seoTitle: 'Tại sao 50% quán F&B đóng cửa trong 2 năm: 7 nguyên nhân thật từ case Soya Garden, Chuk, Baemin',
    seoDescription: 'Phân tích sâu 50K+ quán F&B đóng cửa H1 2025: Soya Garden (50→1 store), Chuk Tea KIDO ($13M loss), Baemin (lỗ 1.4 nghìn tỷ/năm). 7 nguyên nhân + boring framework sống sót.',
    color: 'secondary-light',
    category: 'trends',
    highlights: [
      { label: 'Đóng cửa H1 2025', value: '50.000+ quán', note: 'tăng 67% so với cùng kỳ' },
      { label: 'Doanh thu giảm 2024', value: '60%+ DN', note: '4.000+ DN khảo sát' },
      { label: 'Lý do #1', value: 'Cash reserves', note: 'thiếu vốn dự trữ' },
      { label: 'Sống sót 5 năm', value: '~51%', note: 'US benchmark, VN thấp hơn' },
    ],
    sections: [
      {
        type: 'tldr',
        content: [
          'H1 2025: 50.000+ quán F&B đóng cửa (tăng 67% YoY). 60% DN báo cáo doanh thu giảm 2024 dù thị trường tăng 9.6% — operator failure, không phải industry failure',
          '7 nguyên nhân chính: (1) cash reserves <9 tháng, (2) menu 40-50 món, (3) marketing sau khai trương, (4) phụ thuộc 1 nhân viên giỏi, (5) chạy theo trend ngắn hạn, (6) chủ tiệm "artisan" không phải "operator", (7) location sai',
          'Case study lớn: Soya Garden ($4.35M VC, 50→1 store), Chuk Tea KIDO (đầu tư 308 tỷ → lỗ 35 tỷ Q3 2022), Baemin (lỗ 1.4 nghìn tỷ/năm, exit 2023)',
          'Counter-example: Phúc Long (50+ năm, gross margin cao hơn Starbucks), Pizza 4P\'s (15 năm, hệ thống values trong compensation), Highlands Coffee (20+ năm, system over hero)',
          'Boring framework sống sót: cash > decor, menu 15-20 > 40-50, metrics weekly > "feel good", soft launch 6 tháng > grand opening, 1-city dominance > national year 1',
        ],
      },
      {
        type: 'text',
        content: 'Đây là bài viết dài nhất trên Validator — đọc 15-20 phút. Nếu bạn đang cân nhắc mở quán F&B năm 2026, đây là 7 nguyên nhân thật khiến 50% quán đóng cửa trong 2 năm đầu, kèm 5 case studies cụ thể (Soya Garden, Chuk Tea, Baemin, Phúc Long, Pizza 4P\'s) và "boring framework" để bạn không trở thành thống kê tiếp theo.',
      },
      {
        type: 'text',
        heading: 'Phần 1 · Cảnh quan thị trường — số liệu không nói dối',
        content: 'Nửa đầu năm 2025, theo dữ liệu chính thức từ Vietstock và B-Company, 50.000+ cửa hàng F&B Việt Nam đã đóng cửa — tăng 67% so với cùng kỳ 2024 (~30.000 đóng cửa). Cùng lúc, thị trường F&B Việt Nam vẫn tăng trưởng 9.6% YoY về doanh thu, đạt 726.5 nghìn tỷ VNĐ năm 2025.',
      },
      {
        type: 'text',
        content: 'Nghịch lý này có một cách giải thích duy nhất: consolidation. Thị trường vẫn tăng, nhưng tăng ở chains lớn và brands đã optimized. Còn 50K+ shops kia? Phần lớn là indie, mở chưa đủ 2 năm. Theo Vietnam News, 60%+ doanh nghiệp F&B báo cáo doanh thu giảm trong 2024 — không phải industry failure, mà là operator failure.',
      },
      {
        type: 'stat-grid',
        heading: 'So sánh quốc tế: tỷ lệ sống sót',
        content: [
          { icon: 'chart', label: 'US 5 năm', value: '~51%', desc: 'Theo Toast + Datassential 2025 — chỉ hơn 1/2 sống qua mốc 5 năm.' },
          { icon: 'chart', label: 'US 10 năm', value: '~34.6%', desc: 'Sau 10 năm chỉ còn 1/3 sống. Vietnam chưa có số chính thức.' },
          { icon: 'warning', label: 'VN indie ước tính', value: '< 50%', desc: 'Dựa trên trend đóng cửa, có thể thấp hơn US — không có chain system support.' },
          { icon: 'wallet', label: 'Lý do core', value: 'Margin mỏng', desc: 'Biên lợi nhuận mỏng + vốn kẹt vào physical assets + khách không trung thành.' },
        ] as KBStat[],
      },
      {
        type: 'text',
        content: 'F&B là ngành nghe có vẻ dễ nhưng làm cực khó. 99% người mở quán lần đầu underestimate độ khó này.',
      },
      {
        type: 'text',
        heading: 'Phần 2 · 5 case studies — failures và lessons',
        content: 'Để hiểu nguyên nhân, xem 5 case cụ thể: 3 failure lớn (Soya Garden, Chuk Tea, Baemin) và 2 counter-example (Phúc Long, Pizza 4P\'s).',
      },
      {
        type: 'table',
        heading: 'Case 1 — Soya Garden: $4.35M VC, 50 stores, sập trong 2 năm (2016-2022)',
        content: [
          { label: 'Vốn raise', range: '$4.35M USD', note: 'Shark Tank + VC investors. Founder: Hoàng Anh Tuấn.' },
          { label: 'Concept', range: 'Chuỗi đậu nành premium', note: 'Single category, urban premium positioning.' },
          { label: 'Plan', range: '50+ stores trong 2 năm', note: 'Race to scale với VC money.' },
          { label: 'Reality 2022', range: '1 store còn lại', note: 'Scale trước khi product-market fit. Không match Vietnamese taste.' },
          { label: 'Lessons (Vietnam Business Insider)', range: 'PMF before scale', note: 'Có vốn không thay được PMF. Đợi 3-5 stores profitable + repeatable trước khi expand.' },
        ] as KBTableRow[],
      },
      {
        type: 'table',
        heading: 'Case 2 — Chuk Tea & Coffee (KIDO): 308 tỷ đầu tư, lỗ 35 tỷ Q3 2022',
        content: [
          { label: 'Vốn đầu tư', range: '308 tỷ VNĐ', note: 'KIDO Group rót vốn 2018-2022.' },
          { label: 'Target', range: '200-300 stores', note: 'Tham vọng cạnh tranh Highlands, Phúc Long.' },
          { label: 'Reality 2022', range: '50-60 stores', note: 'Đạt 1/4 target. Lỗ 35 tỷ Q3.' },
          { label: 'Kết cục', range: 'Thoái vốn 12/2022', note: 'KIDO chính thức rút khỏi mảng F&B chuỗi.' },
          { label: 'Lessons', range: 'Vốn + brand chưa đủ', note: 'Menu engineering yếu, vị trí theo "có sẵn" không demographic, unit economics chưa proven.' },
        ] as KBTableRow[],
      },
      {
        type: 'table',
        heading: 'Case 3 — Baemin Vietnam: exit 2023 sau 4 năm',
        content: [
          { label: 'Thị trường vào', range: '2019', note: 'Hàn Quốc, đầu tư hàng trăm triệu USD.' },
          { label: 'Lỗ hàng năm', range: '~1.4 nghìn tỷ VNĐ', note: 'CEO admit công khai: "Never profitable".' },
          { label: 'Market share', range: 'GrabFood + ShopeeFood ~90%', note: 'Super-app dominate; Baemin standalone không có cross-subsidy từ ride-hailing.' },
          { label: 'Exit', range: 'Cuối 2023', note: 'Sau 4 năm vận hành.' },
          { label: 'Lessons', range: 'Hiểu market structure', note: 'Khi 90% market chia 2 player, người thứ 3 cần advantage cực rõ.' },
        ] as KBTableRow[],
      },
      {
        type: 'table',
        heading: 'Case 4 (counter) — Phúc Long: 50+ năm, gross margin cao hơn Starbucks',
        content: [
          { label: 'Sáng lập', range: '1968 tại Bảo Lộc', note: 'Gia đình Lâm Bội Minh. Có profile chi tiết tại Góc nhìn chuyên gia.' },
          { label: 'Doanh thu flagship 9T 2024', range: '761 tỷ VNĐ', note: 'Theo VIR.' },
          { label: 'Gross margin', range: '> Starbucks toàn cầu', note: 'Một trong số ít F&B Việt vượt benchmark global.' },
          { label: 'Bí quyết 1', range: 'Core product không đổi', note: 'Trà + cà phê Việt, supply chain 1.000+ farm partnerships.' },
          { label: 'Bí quyết 2', range: 'Flexible channels', note: '35% revenue từ online/delivery.' },
          { label: 'Bí quyết 3', range: 'Patient expansion', note: '50 năm trong HCMC trước khi scale. Bán cho Masan 2022 với $370M.' },
        ] as KBTableRow[],
      },
      {
        type: 'table',
        heading: 'Case 5 (counter) — Pizza 4P\'s: 15 năm, values built into operations',
        content: [
          { label: 'Sáng lập', range: '2011', note: 'Yosuke Masuko (người Nhật). Profile chi tiết tại Góc nhìn chuyên gia.' },
          { label: 'Hiện tại 2026', range: '40+ stores, 5 countries', note: 'Mở rộng sang New York 2025.' },
          { label: 'Lợi nhuận 2023', range: '115 tỷ VNĐ (+38% YoY)', note: 'Một trong những F&B Việt profitable cao nhất.' },
          { label: 'Bí quyết 1', range: 'Values trong compensation', note: 'Omotenashi service + kaizen wired into pay — không phải poster slogans.' },
          { label: 'Bí quyết 2', range: 'Self-built supply chain', note: 'Xưởng burrata Đà Lạt 2.000 viên/ngày.' },
          { label: 'Bí quyết 3', range: 'Systems beat hero', note: 'Chủ là "ops/system builder", không phải "đầu bếp giỏi".' },
        ] as KBTableRow[],
      },
      {
        type: 'warning-list',
        heading: 'Phần 3 · 7 nguyên nhân thật — không ai dạy',
        content: [
          { icon: 'warning', title: '1. Cash reserves thiếu — killer #1', desc: '82% restaurant failures do dòng tiền (industry standard). Vietnamese startups thường plan 6 tháng — thực tế cần 9-12 tháng. Lý do: ramp-up 3-6 tháng (doanh thu chỉ 30-60% công suất) + unexpected costs (sửa equipment, NCC tăng giá). Rule: vốn setup × 1.5 = cash buffer cần. Nếu mở 500tr, phải có thêm 250tr cash reserve.', severity: 'critical' },
          { icon: 'warning', title: '2. Menu 40-50 món → inventory waste 30-40%', desc: 'Founder muốn "phục vụ mọi đối tượng" → menu 50 món. Reality: top 10 món bán 80% doanh thu. 40 món còn lại = NVL tồn kho + đầu bếp confused + service slow. Cảnh báo từ industry: 70% restaurants với menu >40 món có food cost vượt 35%. Pizza 4P\'s start với 12 món. Phúc Long 15 món core.', severity: 'critical' },
          { icon: 'warning', title: '3. Marketing bắt đầu sau khai trương', desc: 'Mistake phổ biến nhất: spend hết vào setup, tháng 1-2 không có budget marketing → tăng trưởng chậm → cash burn nhanh. Industry rule: marketing budget should start 4-6 tuần TRƯỚC khai trương (soft launch + content + Facebook groups + Zalo word-of-mouth). 7-9PM là peak engagement time cho F&B content trên social.', severity: 'critical' },
          { icon: 'warning', title: '4. Phụ thuộc 1 nhân viên giỏi (key person risk)', desc: 'Chef giỏi nghỉ = chất lượng giảm 30-50% trong 2 tuần → khách quen biến mất. Manager giỏi nghỉ = vận hành chaos. Solution: standardize recipe cards + cross-training (2 chef có thể substitute nhau) + clear SOP. Đào Thế Vinh Golden Gate đã nói: "Hệ thống tạo được bất kỳ sản phẩm nào; nghệ nhân chỉ tạo được thứ họ giỏi."', severity: 'critical' },
          { icon: 'warning', title: '5. Theo trend ngắn hạn (Korean cozy, dirty cake, bingsu, etc.)', desc: 'Trend F&B có vòng đời 12-18 tháng. Mở quán mất 6 tháng setup. Đến khi mở, trend đã peak. Sau 6 tháng nữa, trend đã chết → quán "đẹp" nhưng không có repeat customers. Soya Garden là case classic: bắt trend "đậu nành healthy" 2016, đến 2020 trend chết, không pivot kịp. Build sustainable concept, không build trendy.', severity: 'critical' },
          { icon: 'warning', title: '6. Artisan mindset, không phải operator mindset', desc: 'Chủ tiệm muốn "đầu bếp giỏi" hơn là "chủ quán giỏi". Mê làm sản phẩm + decor + Instagram. Không mê làm staff scheduling, inventory tracking, P&L weekly review, customer feedback analysis. Result: sản phẩm đẹp, quán đẹp, vận hành chaos, financial mù mờ. Bakery khả năng cao nhất bị issue này.', severity: 'critical' },
          { icon: 'warning', title: '7. Location sai — không đo foot traffic + cost-per-customer', desc: 'Mặt bằng "đẹp" Q1 HCMC 80tr/tháng → rent ratio 30%+ → impossible to profit. Hoặc mặt bằng "rẻ" cuối hẻm 8tr/tháng nhưng foot traffic 1/10 → cost-per-customer cao gấp 3 lần mặt tiền. 50% F&B failures có root cause là location. Đọc thêm trong bài "Sai lầm khi chọn mặt bằng F&B".', severity: 'critical' },
        ] as KBWarningItem[],
      },
      {
        type: 'text',
        heading: 'Phần 4 · 2026 cost pressures — vì sao khó hơn nữa',
        content: 'Nếu các nguyên nhân trên đã đủ để giết 50K+ quán năm 2024-2025, năm 2026 thêm 3 cost pressures mới.',
      },
      {
        type: 'table',
        heading: '3 cost pressures mới năm 2026',
        content: [
          { label: 'Lương tối thiểu vùng I', range: '5.31tr/tháng (+7.2%)', note: 'Nghị định 293/2025/NĐ-CP, hiệu lực 1/1/2026. Plus 21.5% BHXH chủ đóng = labor cost thực tăng ~9% YoY.' },
          { label: 'Sugar tax 2027', range: '10% thuế tiêu thụ đặc biệt', note: 'Đồ uống có đường ≥5g/100ml. Cafe, trà sữa, nước ngọt đều ảnh hưởng. Phúc Long + Highlands đã test menu "giảm đường".' },
          { label: 'Ingredient inflation', range: '+8-15% YoY', note: '35.4% DN F&B Việt cite ingredient costs là driver chính của closure 2024 (VietData). Cà phê, đường, sữa, dầu ăn đều tăng.' },
        ] as KBTableRow[],
      },
      {
        type: 'text',
        content: 'Quán đang ở labor ratio 28% → 2026 nhảy lên 30-31% nếu không tăng giá menu. Nghĩa là: nếu năm 2024-2025 đã khó, 2026 còn khó hơn. Mở quán năm 2026 mà không có rigorous validation = đua xe F1 không có brake.',
      },
      {
        type: 'warning-list',
        heading: 'Phần 5 · The "boring" survival framework — 5 anti-trend choices',
        content: [
          { icon: 'money', title: 'Boring choice 1 — Cash > decor', desc: 'Vốn setup không bao giờ vượt 70% total budget. 30%+ giữ làm working capital cho 9-12 tháng đầu. Decor đẹp tháng 1-3 thu hút khách check-in nhưng tháng 4-6 hết tiền = đóng cửa.', severity: 'tip' },
          { icon: 'menu', title: 'Boring choice 2 — Menu 15-20 món > 40-50 món', desc: 'Pizza 4P\'s start 12 món. Phúc Long 15 món core. Top 10 món bán 80% doanh thu — focus vào đó. Mỗi món thêm = inventory + complexity + slower service. Less = more.', severity: 'tip' },
          { icon: 'chart', title: 'Boring choice 3 — Metrics weekly > "feel good"', desc: 'Cuối mỗi tuần, review: revenue, food cost %, labor cost %, top 5 món, customer feedback, churn nhân viên. Nếu không có time review = không có time fix. POS tools (KiotViet/Sapo/iPOS) đều có dashboard này — chỉ cần đọc.', severity: 'tip' },
          { icon: 'people', title: 'Boring choice 4 — Soft launch 6 tuần > grand opening day 1', desc: 'Mở quán "lén lút" 4-6 tuần cho 50-100 khách thân + KOL micro test menu, fix bugs, optimize service flow. Grand opening = tháng 2-3 khi đã có 30-50 review tốt + Facebook page có content. Vs day 1: review 1-2 sao đầu = thuật toán giảm visibility = chết sớm.', severity: 'tip' },
          { icon: 'location', title: 'Boring choice 5 — 1-city dominance > national year 1', desc: 'Phúc Long 50 năm trong HCMC trước khi scale ra ngoài. Pizza 4P\'s 8 năm tại VN trước khi mở Ấn Độ + Nhật. Mở store 2 chỉ khi store 1 đã profitable 6+ tháng + có manager training-the-trainer ready. Race to scale = race to failure.', severity: 'tip' },
        ] as KBWarningItem[],
      },
      {
        type: 'list',
        heading: 'Phần 6 · Action items — checklist 10 bước nếu vẫn muốn mở quán',
        content: [
          'Validate ý tưởng với Validator (miễn phí, 30 phút). Nếu tool nói "unhealthy" → kiểm tra lại assumptions hoặc bỏ ý tưởng.',
          'Khảo sát vị trí 2-3 tuần — đếm foot traffic 5 ngày × 3 khung giờ, không guess.',
          'Cash reserve 9-12 tháng trong tài khoản trước khi ký mặt bằng. Vốn setup × 1.5.',
          'Menu 15-20 món cho 6 tháng đầu. Test với 30-50 khách thân trước khai trương.',
          'Marketing soft launch 4-6 tuần trước grand opening — content + KOL micro + Facebook groups.',
          'Standardize SOP + recipe cards ngay từ đầu — cross-train 2 nhân viên cho mỗi vị trí quan trọng.',
          'Setup POS daily tracking từ ngày 1 (xem bài "So sánh hệ thống POS" trên Validator).',
          'Weekly metrics review — set fixed 1h mỗi tuần, không skip.',
          'Validator existing mode quarterly — chẩn đoán health của quán mỗi 3 tháng.',
          'Open store 2 chỉ khi store 1 profitable 6+ tháng + có manager replacement ready.',
        ],
      },
      {
        type: 'text',
        content: 'Đây không phải là "công thức thành công" — F&B không có công thức. Đây là "công thức tránh chết". Nếu làm đúng 10 bước này, bạn loại trừ ~70% risk thông thường. 30% còn lại là market timing + luck + execution skill — đó là phần không ai dạy được.',
      },
      {
        type: 'text',
        heading: 'Phần 7 · Closing — tại sao bài viết này tồn tại',
        content: 'Validator.vn được xây để giải quyết một vấn đề duy nhất: giúp người mở quán F&B Việt Nam tránh becoming một con số trong thống kê 50K closures. Tool miễn phí, không cần đăng ký, vì impact > monetization.',
      },
      {
        type: 'text',
        content: 'Nếu bạn thấy bài viết này có ích, share cho một người đang cân nhắc mở quán — có thể cứu họ 200-800 triệu + 18 tháng cuộc đời. Comments + feedback gửi tới hello@validator.vn — chúng tôi đọc hết.',
      },
      {
        type: 'text',
        content: 'Mở quán F&B vẫn là một trong những hành trình ý nghĩa nhất — nếu làm đúng. Đừng để 7 nguyên nhân trên giết ý tưởng tốt của bạn. Validate trước, build sau, scale chậm. Boring beats trendy. Discipline beats passion. Systems beat heroes. Phúc Long, Pizza 4P\'s, Highlands đã chứng minh — bạn có thể là người tiếp theo.',
      },
    ],
  },
];

export default TRENDS_ARTICLES;
