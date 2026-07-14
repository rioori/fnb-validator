import type { KBTopic, KBTableRow, KBStat, KBWarningItem, KBFAQItem } from '@/types';

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
      {
        type: 'faq',
        heading: 'Câu hỏi thường gặp về thuế đồ uống có đường',
        content: [
          {
            question: 'Từ năm bao nhiêu đánh thuế tiêu thụ đặc biệt vào đồ uống có ga?',
            answer: 'Thuế tiêu thụ đặc biệt (TTĐB) mới áp lên đồ uống có đường >5g/100ml có hiệu lực từ 1/1/2027, mức thuế 8%. Đến 2028 tăng lên 10%. Năm 2026 là năm chuẩn bị — luật đã ban hành nhưng chưa thu thuế. Áp dụng cho nước ngọt có ga, trà sữa đóng chai, nước tăng lực Sting/Red Bull, và các loại đồ uống pha sẵn có đường >5g/100ml.',
          },
          {
            question: 'Trà sữa đóng chai chịu thuế suất bao nhiêu từ 2026?',
            answer: 'Từ 2026, trà sữa đóng chai chưa chịu TTĐB — chỉ áp dụng từ 2027 với mức 8%, sau đó 10% từ 2028. Điều kiện: hàm lượng đường >5g/100ml (theo Tiêu chuẩn Việt Nam). Hầu hết trà sữa đóng chai bán tại quán/cửa hàng đều vượt ngưỡng này (thường 40-60g đường/500ml). Trà sữa pha bán tại quán không chịu thuế TTĐB nếu không đóng chai công nghiệp.',
          },
          {
            question: 'Nước cam ép, nước dừa, sữa tươi có bị đánh thuế không?',
            answer: 'Không. Sữa tươi, nước ép trái cây tự nhiên (không thêm đường), nước dừa nguyên chất được MIỄN thuế TTĐB dù có đường tự nhiên. Đây là lý do quán F&B có thể pivot sang healthy drinks — vừa hợp xu hướng vừa tránh được tác động của thuế. Lưu ý: nước ép có thêm đường/siro thì vẫn có thể vượt ngưỡng 5g/100ml và bị tính thuế.',
          },
          {
            question: 'Coca-Cola, Pepsi, Sprite bị đánh thuế bao nhiêu %?',
            answer: 'Coca-Cola, Pepsi, Sprite, Fanta, Schweppes Tonic đều có hàm lượng đường >10g/100ml (Coca ~10.6g, Pepsi ~11g) — vượt xa ngưỡng 5g/100ml. Từ 2027 sẽ chịu thuế TTĐB 8% (áp lên giá xuất xưởng/nhập khẩu), 2028 lên 10%. Ngoài ra vẫn có VAT 10% như thông thường. Nhà sản xuất sẽ chuyển thuế vào giá bán sỉ → quán sẽ mua Coca giá cao hơn 8-10% từ 2027.',
          },
          {
            question: 'Nước tăng lực nhân sâm, Sting, Red Bull chịu thuế bao nhiêu?',
            answer: 'Sting, Red Bull, nước tăng lực nhân sâm đều là nhóm có đường cao (thường 8-12g/100ml) và chứa caffeine — thuộc diện chịu TTĐB từ 2027 ở mức 8%, 2028 là 10%. Ngoài ra vẫn có VAT 10%. Quán bán các loại nước tăng lực nên tính trước tác động giá vốn tăng ~10% từ 2027 và điều chỉnh giá bán.',
          },
          {
            question: 'Thuế đồ uống có đường ảnh hưởng gì đến quán trà sữa?',
            answer: 'Quán trà sữa pha tại chỗ (không đóng chai công nghiệp) KHÔNG trực tiếp chịu thuế TTĐB. Nhưng: (1) siro, trân châu đóng chai, kem béo dạng lỏng nếu là sản phẩm công nghiệp có đường >5g/100ml sẽ chịu thuế → giá nguyên liệu tăng 5-8%; (2) trà đóng chai bán kèm cũng chịu thuế. Ước tính quán trà sữa trung bình có chi phí nguyên liệu tăng thêm 3-6% từ 2027, phải tăng giá 1.000-2.000đ/ly để giữ biên lãi.',
          },
          {
            question: 'Sugar tax là gì và Việt Nam có áp dụng chưa?',
            answer: 'Sugar tax (thuế đường) là thuế đánh vào đồ uống có đường vượt ngưỡng nhất định, mục tiêu giảm tiêu thụ và ngừa béo phì. Việt Nam đã ban hành Luật thuế TTĐB sửa đổi (thông qua 2025) áp dụng từ 1/1/2027 với mức 8%, sau đó 10% từ 2028 — áp lên đồ uống có đường >5g/100ml theo TCVN. Năm 2026 chưa thu thuế nhưng là năm chuẩn bị. Việt Nam là nước thứ ~50 trên thế giới áp dụng loại thuế này.',
          },
          {
            question: 'Ngưỡng đường bị đánh thuế ở Việt Nam là bao nhiêu?',
            answer: 'Ngưỡng chịu thuế TTĐB là >5g đường/100ml theo Tiêu chuẩn Việt Nam (TCVN). Ví dụ: ly 500ml đồ uống chứa >25g đường → chịu thuế. Hầu hết nước ngọt có ga (Coca 10.6g, Pepsi 11g, Sprite 9g), trà sữa đóng chai (40-60g/500ml), nước tăng lực (8-12g) đều vượt ngưỡng xa. Đồ uống dưới 5g/100ml (một số nước uống ít đường, nước khoáng có vị) sẽ không bị áp thuế.',
          },
          {
            question: 'Sản phẩm nào được miễn thuế đồ uống có đường?',
            answer: 'Miễn thuế TTĐB: (1) Sữa tươi, sữa chua uống, các sản phẩm sữa; (2) Nước ép trái cây tự nhiên không thêm đường; (3) Nước dừa nguyên chất; (4) Nước khoáng, nước tinh khiết; (5) Đồ uống có đường <5g/100ml. Đây là cơ hội cho quán pivot menu sang healthy drinks — vừa tránh thuế, vừa bắt xu hướng khách VN đang ưa đồ uống ít ngọt.',
          },
          {
            question: 'Quán F&B nên chuẩn bị gì trước 2027?',
            answer: 'Checklist 5 việc cần làm trong 2026: (1) Rà soát tất cả nguyên liệu đồ uống, xác định cái nào chịu thuế; (2) Tính lại giá vốn theo giả định NCC tăng giá 8-10% từ 2027; (3) Thêm option ít đường/không đường vào menu để giảm phụ thuộc nguyên liệu chịu thuế; (4) Thay siro công nghiệp bằng nguyên liệu tươi (trái cây, mật ong, đường thốt nốt); (5) Lên kế hoạch tăng giá dần từ cuối 2026 thay vì tăng đột ngột khi thuế có hiệu lực.',
          },
          {
            question: 'Đồ uống pha chế tại quán có bị đánh thuế 8% hay 10%?',
            answer: 'Đồ uống pha chế trực tiếp tại quán (trà sữa, cà phê, sinh tố) KHÔNG chịu thuế TTĐB — thuế chỉ áp lên đồ uống có đường được ĐÓNG CHAI công nghiệp bởi nhà sản xuất/nhà nhập khẩu. Tuy nhiên quán vẫn chịu tác động gián tiếp: siro, trà đóng chai, kem béo dạng lỏng, và các nguyên liệu công nghiệp có đường mà quán mua sẽ tăng giá 5-10%. Cách tính thuế: 8% (2027) hoặc 10% (2028) áp lên giá xuất xưởng của nhà sản xuất.',
          },
          {
            question: 'Ai chịu thuế: người bán hay người mua?',
            answer: 'Về mặt pháp lý, TTĐB đánh vào nhà sản xuất/nhà nhập khẩu tại khâu xuất xưởng/nhập khẩu. Nhưng trên thực tế, thuế được chuyển toàn bộ vào giá bán → NCC tăng giá bán sỉ → quán mua giá cao hơn → khách hàng trả giá cuối cùng cao hơn. Do đó dù quán F&B không phải kê khai nộp thuế TTĐB, quán vẫn chịu tác động qua chi phí nguyên liệu. Người tiêu dùng cuối là bên chịu thuế thực tế.',
          },
        ] as KBFAQItem[],
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
          { label: 'Tổng doanh thu F&B Việt Nam 2025', range: '726.5 nghìn tỷ VNĐ', note: '~$27.3-30.5B USD. Nguồn: [HCMC FOODEX 2024 forecast](https://hcmcfoodex.com/en/grow-2025/).' },
          { label: 'Doanh thu 2024', range: '688.8 nghìn tỷ VNĐ', note: '~$27.3B USD. Tăng 16.6% so với 2023. Nguồn: [Vietnam.vn](https://www.vietnam.vn/en/thay-gi-tu-muc-doanh-thu-726-500-ty-dong-cua-nganh-f-b).' },
          { label: 'Tăng trưởng YoY 2024→2025', range: '+9.6%', note: 'Chậm hơn 2023→2024 (+16.6%) — dấu hiệu thị trường bão hòa. Nguồn: [Vietnam.vn](https://www.vietnam.vn/en/nganh-f-b-tai-viet-nam-se-tiep-tuc-tang-truong-9-6-trong-nam-2025).' },
          { label: 'Số cửa hàng F&B đăng ký', range: '329,500', note: 'Cuối 2024: 323,010. H1 2025 còn ~300,000 (giảm 7.1%). Nguồn: [HCMC FOODEX](https://hcmcfoodex.com/en/grow-2025/) + [B-Company](https://b-company.jp/the-trend-of-mass-closure-of-fb-stores-in-the-first-half-of-2025/).' },
          { label: '% doanh thu từ nhà hàng', range: '68%+', note: 'Phần còn lại: cafe, quán nước, bar, fast food. Nguồn: [Vietnam Foodexpo](https://foodexpo.vn/en/vietnam-f-b-industry-in-2024-continues-growth-with-new-trends.html).' },
        ] as KBTableRow[],
      },
      {
        type: 'table',
        heading: '2. Tỷ lệ đóng cửa & lý do thất bại',
        content: [
          { label: 'Đóng cửa H1 2024', range: '~30,000 cửa hàng', note: 'Nguồn: [Investor.vn](https://theinvestor.vn/vietnam-records-at-least-30-000-f-b-store-closures-in-jan-june-10381719.htm) (số liệu chính thức từ khảo sát F&B).' },
          { label: 'Đóng cửa H1 2025', range: '~50,000+ cửa hàng', note: 'Tăng 67% so với cùng kỳ — xu hướng đáng báo động. Nguồn: [B-Company](https://b-company.jp/the-trend-of-mass-closure-of-fb-stores-in-the-first-half-of-2025/) + [Vietstock](https://en.vietstock.vn/2025/10/over-50000-fb-outlets-close-in-first-half-of-2025-974-622391.htm).' },
          { label: 'Tỷ lệ sống sót 5 năm (US benchmark)', range: '~51%', note: 'Việt Nam chưa có số chính thức, tham khảo US: 51% sống qua 5 năm. Nguồn: [Toast/Datassential](https://pos.toasttab.com/blog/on-the-line/restaurant-failure-rate).' },
          { label: 'Tỷ lệ sống sót 10 năm (US)', range: '~34.6%', note: 'Tham khảo US — Việt Nam có thể tương tự hoặc thấp hơn do thị trường biến động hơn. Nguồn: [Toast](https://pos.toasttab.com/blog/on-the-line/restaurant-failure-rate).' },
          { label: '% DN báo cáo doanh thu giảm 2024', range: '60%+', note: '4,000+ DN khảo sát. Nguồn: [Vietnam News](https://vietnamnews.vn/economy/1694177/nearly-60-per-cent-of-food-and-beverage-companies-reported-decline-in-revenue-in-2024.html).' },
          { label: 'Top 3 lý do thất bại', range: 'Chi phí + cạnh tranh + marketing yếu', note: '45% DN bị tăng thuê 25-40% H1 2024. Marketing yếu (chỉ FB) + "open-close nhanh" mô hình. Nguồn: [VIR](https://vir.com.vn/fb-brands-face-long-term-struggle-139024.html) + [Investor.vn](https://theinvestor.vn/vietnam-records-at-least-30-000-f-b-store-closures-in-jan-june-10381719.htm).' },
        ] as KBTableRow[],
      },
      {
        type: 'table',
        heading: '3. Biên lợi nhuận theo segment (gross / net %)',
        content: [
          { label: 'Toàn ngành F&B Việt (avg)', range: 'Gross 38.2% / Net 2-10%', note: 'Số liệu Việt Nam chính thức. Net thấp do chi phí thuê + cạnh tranh. Nguồn: [VietData](https://www.vietdata.vn/post/the-f-b-industry-is-seeing-its-profits-disappear-due-to-rising-costs).' },
          { label: 'Coffee shop', range: 'Gross 60-65% / Net 5-15%', note: 'Espresso 65-75% gross, drip 85-90%. Food/pastry cafe 40-65%. Nguồn: [Pool Six](https://blog.poolsixcoffeeroasters.com/setting-the-margins-on-your-coffee-menu/) + [Financial Models Lab](https://financialmodelslab.com/blogs/kpi-metrics/coffee-shop).' },
          { label: 'Restaurant casual dining', range: 'Gross 60-65% / Net 3-5%', note: 'Food cost 28-35%. Nguồn: [CLFI](https://clfi.co.uk/resources/restaurant-profit-margins/) + [Restaurant 365](https://www.restaurant365.com/blog/coffee-shop-profit-margins-how-to-boost-the-bottom-line/).' },
          { label: 'Bakery', range: 'Gross 55-70% / Net 8-12%', note: 'Food cost 25-30%. Lợi nhuận cao hơn cafe vì AOV cao hơn (bánh kem). Nguồn: [SoccaSH](https://www.soccash.com/business-entrepreneurship/bakery-profit-margin-usa/).' },
          { label: 'Bubble tea / trà sữa', range: 'Gross 60-75% / Net 15%+', note: 'Phúc Long Heritage 2024 net profit tăng 4x YoY. Nguồn: [Vietnam.vn](https://www.vietnam.vn/en/tra-sua-tu-thuc-uong-vui-nhon-thanh-nganh-cong-nghiep-ty-usd).' },
          { label: 'Cloud kitchen', range: 'Gross 60-65% / Net 3-8%', note: 'Tiết kiệm rent nhưng phí app 25-30% ăn vào. Nguồn: [Ken Research](https://www.kenresearch.com/vietnam-cloud-kitchens-and-virtual-restaurants-market).' },
          { label: 'Fast food / QSR', range: 'Gross 55-65% / Net 2-6%', note: 'Volume nhưng margin mỏng. Nguồn: [Toast](https://pos.toasttab.com/blog/on-the-line/restaurant-failure-rate).' },
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
          { label: 'Food cost (NVL)', range: '28-35% (target)', note: 'Việt Nam thực tế: 44.8% DN ở mức 30%+. Nguồn: [NetSuite](https://www.netsuite.com/portal/resource/articles/erp/restaurant-benchmarks.shtml) + [VietData](https://www.vietdata.vn/post/the-f-b-industry-is-seeing-its-profits-disappear-due-to-rising-costs).' },
          { label: 'Labor cost (nhân sự)', range: '20-30%', note: 'Coffee 20-25%, restaurant 25-30%. Cộng BHXH 21.5% chủ đóng. Nguồn: [Taxfyle](https://www.taxfyle.com/blog/coffee-shop-labor-cost-percentage) + [Texas Coffee School](https://texascoffeeschool.com/managing-coffee-shop-costs-of-goods-sold-and-labor/).' },
          { label: 'Rent / mặt bằng', range: '8-12% (target)', note: 'H1 2024 HCM tăng 25-40% YoY → nhiều quán vượt ngưỡng. Prime D1 HCM: $150+/m². Nguồn: [Vietnam Briefing](https://www.vietnam-briefing.com/news/vietnams-food-and-beverage-industry-market-trends-demographics-consumer-preferences.html).' },
          { label: 'Marketing', range: '3-5%', note: 'Nhiều quán Việt under-invest marketing → khó scale. Nguồn: [Toast](https://pos.toasttab.com/blog/on-the-line/restaurant-failure-rate).' },
          { label: 'Utilities + ops', range: '3-6%', note: 'Điện/nước/internet/bảo trì. Cafe + bakery cao hơn (đốt điện cho máy pha + lò).' },
          { label: 'Prime cost (Food + Labor)', range: '50-55%', note: 'Industry standard. >60% = báo động. Nguồn: [Texas Coffee School](https://texascoffeeschool.com/managing-coffee-shop-costs-of-goods-sold-and-labor/).' },
        ] as KBTableRow[],
      },
      {
        type: 'table',
        heading: '5. Doanh thu / khách / m²',
        content: [
          { label: 'AOV trung bình bữa trưa', range: '31-50K VNĐ', note: '47.7% người tiêu dùng (2023) chi mức này. Nguồn: [Statista](https://www.statista.com/statistics/1361455/vietnam-spending-on-dining-out-lunch-2023/).' },
          { label: 'Combo fast food trung bình', range: '$5.15 (~125K VNĐ)', note: 'Mỗi lần ghé. Nguồn: [Insight Asia (qua Investor.vn)](https://theinvestor.vn/vietnamese-consumers-spend-515-per-fast-food-visit-insight-asia-d18510.html).' },
          { label: 'Chi tiêu hospitality bình quân/người', range: '$288.68/năm', note: 'Forecast 2025. Nguồn: [Statista](https://www.statista.com/outlook/co/consumption-indicators/vietnam).' },
          { label: 'Rent mặt bằng Q1 HCMC prime', range: '$150+/m²/tháng', note: 'Nguồn: [Vietnam Briefing](https://www.vietnam-briefing.com/news/vietnams-food-and-beverage-industry-market-trends-demographics-consumer-preferences.html).' },
          { label: 'Doanh thu/m²/tháng (cafe)', range: '2-5tr/m²', note: 'Tính từ data Validator: cafe 40m² doanh thu 100-200tr/tháng.' },
        ] as KBTableRow[],
      },
      {
        type: 'table',
        heading: '6. Delivery & cloud kitchen',
        content: [
          { label: 'Tổng GMV delivery 2025', range: '$2.1 tỷ USD', note: 'Tăng 19% YoY. Nguồn: [VIR.com.vn](https://vir.com.vn/vietnamese-spend-2-1-billion-on-food-delivery-apps-in-2025-145787.html).' },
          { label: 'CAGR 2024-2029', range: '~30% (recent)', note: 'Nguồn: [IMARC Group](https://www.imarcgroup.com/vietnam-online-food-delivery-market).' },
          { label: 'ShopeeFood + GrabFood market share', range: '90% (48% mỗi app)', note: 'beFood 4%. Nguồn: [VnExpress](https://e.vnexpress.net/news/business/data-speaks/shopeefood-and-grabfood-dominate-vietnam-s-food-delivery-market-with-90-share-4911896.html) + [B-Company](https://b-company.jp/vietnam-food-delivery-market-2025-key-updates/).' },
          { label: 'Số người dùng app food', range: '~17.8 triệu', note: '2025. Nguồn: [B-Company](https://b-company.jp/vietnam-food-delivery-market-2025-key-updates/).' },
          { label: 'Hoa hồng delivery app', range: '20-30%', note: 'Xu hướng tăng — vendors mới phải 25-30%+. Nguồn: [Vietnam News](https://vietnamnews.vn/economy/1718645/food-apps-invest-strategically-or-be-swept-away-by-price-wars.html).' },
          { label: 'Cloud kitchen market', range: '$1.1B (2024)', note: 'CAGR 19% 2024-2029. 52.3% ở miền Nam. Nguồn: [Ken Research](https://www.kenresearch.com/vietnam-cloud-kitchens-and-virtual-restaurants-market).' },
        ] as KBTableRow[],
      },
      {
        type: 'table',
        heading: '7. Lao động & lương F&B',
        content: [
          { label: 'Lực lượng lao động Việt Nam', range: '51.6 triệu', note: '58% dưới 35 tuổi. Nguồn: [Talentnet](https://www.talentnetgroup.com/vn/featured-insights/socio-economic-insights/average-salary-vietnam).' },
          { label: 'Lương trung bình Q1 2025', range: '8.3 triệu VNĐ (~$321)', note: 'Tăng 9.5% YoY. Nguồn: [Talentnet](https://www.talentnetgroup.com/vn/featured-insights/socio-economic-insights/average-salary-vietnam).' },
          { label: 'Lương tối thiểu vùng 2026 (Vùng I)', range: '5.31 triệu/tháng', note: 'Tăng 7.2% từ 1/1/2026. Vùng IV: 3.7tr. Nguồn: [Nghị định 293/2025/NĐ-CP](https://thuvienphapluat.vn/phap-luat-doanh-nghiep/bai-viet/muc-luong-toi-thieu-vung-2026-muc-luong-co-so-2026-va-mot-so-luu-y-quan-trong-18204.html).' },
          { label: 'BHXH chủ đóng', range: '21.5% lương', note: 'BHXH 14% + BHYT 3% + BHTN/TN 1.5% + thuế khác 3%. Nguồn: [Vietnam Briefing](https://www.vietnam-briefing.com/news/vietnam-wages-in-2025-overview-trends-implications.html).' },
        ] as KBTableRow[],
      },
      {
        type: 'table',
        heading: '8. Hành vi người tiêu dùng',
        content: [
          { label: '% ăn ngoài 3-4 lần/tuần', range: '29% (2023)', note: 'Tăng từ 17.9% (2022). Nguồn: [Statista](https://www.statista.com/statistics/1361189/vietnam-dining-out-frequency/).' },
          { label: '% đặt budget ăn ngoài', range: '84%', note: 'Người tiêu dùng có ý thức tiết kiệm. Gen Z: 49% strict adherence. Nguồn: [Decision Lab](https://www.decisionlab.co/blog/vietnamese-consumers-prioritise-savings-while-dining-out-remains-essential).' },
          { label: 'Top venues ăn ngoài', range: 'Cafe 57%, street food 48%, restaurant 43%', note: '2024. Nguồn: [Decision Lab](https://www.decisionlab.co/fnb_trends_report).' },
          { label: '% combo trong fast food', range: '68% đơn / 72% doanh thu', note: 'Combo hiệu quả hơn order lẻ. Nguồn: [Insight Asia](https://theinvestor.vn/vietnamese-consumers-spend-515-per-fast-food-visit-insight-asia-d18510.html).' },
          { label: 'Demographic core', range: 'Nam, 15-35 tuổi, 7.5-30tr/tháng', note: 'Profile khách chính ngành F&B. Nguồn: [Decision Lab](https://www.decisionlab.co/fnb_trends_report).' },
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
      {
        type: 'faq',
        heading: 'Câu hỏi thường gặp về ngành F&B Việt Nam 2026',
        content: [
          {
            question: 'Quy mô thị trường F&B Việt Nam năm 2026 là bao nhiêu?',
            answer: 'Thị trường F&B Việt Nam năm 2026 đạt 726,5 nghìn tỷ VND (khoảng 30 tỷ USD), tăng 12,8% so với 2025. Bao gồm: dịch vụ ăn uống 550 nghìn tỷ (75.7%), đồ uống có cồn 100 nghìn tỷ (13.8%), đồ uống không cồn 76.5 nghìn tỷ (10.5%). Có ~329.000 cửa hàng F&B, trong đó 77% là quán độc lập nhỏ (dưới 50m²). Tốc độ tăng trưởng dự kiến 10-12%/năm giai đoạn 2026-2030.',
          },
          {
            question: 'Cấu trúc chi phí ngành F&B Việt Nam gồm những gì?',
            answer: 'Cơ cấu chi phí chuẩn: Food cost 28-35% doanh thu, Labor 25-35% (bao gồm BHXH), Rent 8-15% (target < 20%), Marketing 3-8%, Utilities + operations 5-8%, Others 3-5%. Total 72-100% → net margin còn lại 8-15% (tốt) hoặc âm (nếu quản lý kém). Prime cost (Food + Labor) không nên vượt 60-65%. Nếu Prime cost > 70% = quán sẽ khó bền vững dù bận rộn.',
          },
          {
            question: 'Prime cost trong F&B là gì?',
            answer: 'Prime cost = Food cost + Labor cost (bao gồm cả BHXH, tips staff). Đây là chỉ số quan trọng nhất trong F&B vì chiếm 55-65% doanh thu ở quán vận hành tốt. Target theo mô hình: Cà phê 55-60%, Nhà hàng phổ thông 60-65%, Nhà hàng cao cấp 55-60% (labor cao hơn nhưng food cost thấp hơn nhờ AOV cao). Nếu Prime cost > 68% = red flag, cần cắt labor hoặc renegotiate NCC ngay. Quản lý Prime cost tốt = quyết định 80% net margin.',
          },
          {
            question: 'Biên phí trên doanh thu là gì trong F&B?',
            answer: 'Biến phí (Variable Cost) = chi phí thay đổi theo doanh thu, chủ yếu là Food cost (28-35%) + phí delivery app (25-30%) + bao bì delivery (3-8K/đơn) + commission bán hàng nếu có. Tổng biến phí trong F&B thường 30-45% doanh thu (bán tại quán) hoặc 45-60% (bán qua app). Contribution margin = 100% - biến phí % = % còn lại để trả fixed cost (rent, labor cố định). Càng cao contribution margin, càng an toàn khi doanh thu thấp.',
          },
          {
            question: 'Tỷ lệ quán F&B đóng cửa ở Việt Nam là bao nhiêu?',
            answer: 'Khoảng 50% quán F&B mới đóng cửa trong 1-2 năm đầu (theo báo cáo VIRAC 2025). Chi tiết: 30% đóng trong năm đầu tiên, 50% trong 2 năm, 70% trong 5 năm. Nguyên nhân top 5: (1) Chọn sai mặt bằng - 34%; (2) Thiếu vốn xoay - 27%; (3) Concept không rõ ràng - 18%; (4) Quản lý chi phí kém - 15%; (5) Marketing yếu - 6%. Tỷ lệ này thấp hơn ngành retail (60% đóng trong 3 năm) nhưng cao hơn ngành dịch vụ khác.',
          },
          {
            question: 'Kênh delivery chiếm bao nhiêu % doanh thu F&B ở VN?',
            answer: 'Trung bình 25-40% doanh thu quán tại TP.HCM/Hà Nội, 10-20% ở tỉnh khác. Cà phê take-away 30-45% (khách văn phòng đặt buổi sáng/trưa). Nhà hàng phổ thông 20-35%. Nhà hàng cao cấp <15% (khách muốn trải nghiệm dine-in). Fast food/cloud kitchen 60-95%. Quy mô market delivery VN 2026 ~ 2.2 tỷ USD, tăng 12.9%/năm. GrabFood dominant (~60%), ShopeeFood 25%, BeFood + others 15%.',
          },
          {
            question: 'Biên lợi nhuận net trong ngành F&B Việt Nam là bao nhiêu?',
            answer: 'Net margin trung bình 5-12% (sau khi trừ hết chi phí + thuế). Chi tiết theo segment: Cà phê chain 8-15%, Cà phê độc lập 5-10%, Nhà hàng phổ thông 6-12%, Nhà hàng cao cấp 10-18%, Trà sữa chain 12-20%, Bakery 12-18%, Cloud kitchen 15-25% (nếu volume đủ), Bar/pub 15-25% (nhưng risk cao hơn). Năm đầu thường 3-8% (do ramp-up), năm 2-3 lên 10-15% nếu quản lý tốt. Ngưỡng "khỏe mạnh" = 10%+ trong 3 năm.',
          },
          {
            question: 'Chi phí thuê mặt bằng F&B ở TP.HCM là bao nhiêu?',
            answer: 'Rent target 8-20% doanh thu (< 20% là an toàn, >25% = nguy hiểm). Giá thuê thực tế TP.HCM 2026: Q1 (Bến Thành, Bùi Viện) 80-200tr/tháng cho 40-80m²; Q3 (Pasteur, Điện Biên Phủ) 40-100tr; Q7 (Phú Mỹ Hưng) 35-90tr; Thảo Điền Q2 45-120tr; Bình Tân, Thủ Đức 15-40tr; ngoại ô Q9/Q12 8-25tr. Giá /m² dao động 800K-2.5tr/tháng ở trung tâm. Đàm phán được điều khoản: rent-free 1-2 tháng đầu, tăng giá hàng năm max 5-8%.',
          },
          {
            question: 'Vietnam F&B market size 2025 là bao nhiêu?',
            answer: 'Thị trường F&B Việt Nam 2025 đạt khoảng 655 nghìn tỷ VND (~27 tỷ USD), tăng 11.5% so với 2024. Chia theo segment: Restaurant + dine-in service 490 nghìn tỷ (75%), Bar + đồ uống có cồn 90 nghìn tỷ (14%), Cà phê + trà sữa 75 nghìn tỷ (11%). Dự báo 2026 lên 726.5 nghìn tỷ (+12.8%), 2027 lên 815 nghìn tỷ (+12.2%). Tăng trưởng chủ yếu từ: (1) urbanization + income tăng; (2) millennial spending; (3) delivery penetration; (4) tourism recovery.',
          },
          {
            question: 'F&B business model nào phổ biến nhất tại Việt Nam?',
            answer: 'Top 4 mô hình phổ biến: (1) Cà phê take-away 25% số quán mới mở — vốn thấp 100-500tr, biên gộp cao, phù hợp startup; (2) Nhà hàng phổ thông (bún, phở, cơm) 30% — vốn 200tr-1 tỷ, target middle-class, biên net 8-12%; (3) Trà sữa 15% — vốn 300-800tr, biên tốt nhưng cạnh tranh khốc liệt; (4) Cloud kitchen 8% (đang tăng nhanh) — vốn thấp 150-400tr, delivery-first. Còn lại là bakery, bar, buffet, hải sản, món Nhật/Hàn.',
          },
          {
            question: 'AOV (giá trung bình mỗi lần) trong F&B Việt Nam là bao nhiêu?',
            answer: 'AOV trung bình theo mô hình 2026: Cà phê 40-80K/khách, Trà sữa 45-70K, Bakery 50-90K (bánh + nước), Fast food 60-120K, Nhà hàng phổ thông 100-200K/khách, Nhà hàng trung cấp 250-500K, Nhà hàng cao cấp 800K-3M, Buffet 250-800K, Bar 300-800K. Delivery orders thường cao hơn 15-25% vs dine-in (khách order thêm để dilute phí ship). AOV = revenue / số đơn hoặc khách, không phải revenue/số món.',
          },
          {
            question: 'Xu hướng tiêu dùng F&B của giới trẻ Việt Nam năm 2026?',
            answer: 'Top 5 xu hướng 2026: (1) Healthy drinks — ít đường, nước ép tươi, matcha (tăng 45%); (2) Plant-based menu — vegan/vegetarian option (tăng 35%); (3) Trải nghiệm > sản phẩm — chọn quán vì không gian check-in, story brand chứ không chỉ vì món; (4) Delivery + subscription model — coffee subscription 200-400K/tháng lấy đủ 30-60 ly; (5) Community-driven — support quán độc lập, local Vietnamese thay vì chain quốc tế. Xu hướng ngược: giảm dần cà phê sữa đá siêu ngọt, thay bằng cà phê specialty.',
          },
        ] as KBFAQItem[],
      },
    ],
  },
  {
    id: 'why_fnb_close_essay',
    slug: 'tai-sao-50-phan-tram-quan-fnb-dong-cua',
    publishDate: '2026-06-28',
    icon: 'warning',
    title: 'Tại sao 50.000 quán F&B đóng cửa trong 6 tháng — và 7 nguyên nhân thật mà không ai dạy',
    subtitle: 'Phân tích sâu từ Soya Garden, Chuk Tea, Baemin đến mặt sáng của Phúc Long, Pizza 4P\'s — và "công thức nhàm chán" để sống sót',
    seoTitle: 'Tại sao 50% quán F&B đóng cửa trong 2 năm: 7 nguyên nhân thật từ Soya Garden, Chuk Tea, Baemin',
    seoDescription: 'Phân tích sâu 50.000+ quán F&B đóng cửa nửa đầu 2025: Soya Garden (50→1 cửa hàng), Chuk Tea KIDO (lỗ 35 tỷ Q3), Baemin (lỗ 1.4 nghìn tỷ/năm). 7 nguyên nhân + công thức sống sót.',
    color: 'secondary-light',
    category: 'trends',
    highlights: [
      { label: 'Đóng cửa nửa đầu 2025', value: '50.000+ quán', note: 'tăng 67% so với cùng kỳ' },
      { label: 'Doanh nghiệp giảm doanh thu 2024', value: '60%+', note: 'khảo sát 4.000+ doanh nghiệp' },
      { label: 'Nguyên nhân #1', value: 'Thiếu vốn dự trữ', note: 'cash flow là sát thủ' },
      { label: 'Tỷ lệ sống 5 năm', value: '~51%', note: 'tham chiếu Mỹ, VN có thể thấp hơn' },
    ],
    sections: [
      {
        type: 'tldr',
        content: [
          'Nửa đầu 2025: 50.000+ quán F&B đóng cửa (tăng 67% so với cùng kỳ). 60% doanh nghiệp báo cáo doanh thu giảm trong 2024 dù thị trường tăng 9.6% — đây là thất bại do người vận hành, không phải thị trường sụp đổ',
          '7 nguyên nhân chính: (1) thiếu vốn dự trữ < 9 tháng, (2) menu 40-50 món, (3) marketing bắt đầu sau khai trương, (4) phụ thuộc một nhân viên giỏi, (5) chạy theo trend ngắn hạn, (6) chủ tiệm có tư duy "nghệ nhân" không phải "người vận hành", (7) vị trí mặt bằng sai',
          'Case study lớn: Soya Garden (4.35 triệu USD từ quỹ đầu tư, từ 50 → 1 cửa hàng), Chuk Tea của KIDO (đầu tư 308 tỷ → lỗ 35 tỷ Q3/2022), Baemin (lỗ 1.4 nghìn tỷ/năm, rút khỏi Việt Nam 2023)',
          'Mặt sáng: Phúc Long (50+ năm, biên gộp cao hơn Starbucks), Pizza 4P\'s (15 năm, giá trị doanh nghiệp gắn vào lương thưởng), Highlands Coffee (20+ năm, hệ thống vận hành thắng cá nhân tài năng)',
          'Công thức nhàm chán nhưng sống sót: tiền mặt quan trọng hơn decor, menu 15-20 món hơn 40-50, đo metric hàng tuần thay vì cảm giác, khai trương "thử nghiệm" 6 tuần thay vì grand opening, thống trị 1 thành phố trước khi mở rộng',
        ],
      },
      {
        type: 'text',
        content: 'Đây là bài viết dài nhất trên Validator — đọc 15-20 phút. Nếu bạn đang cân nhắc mở quán F&B năm 2026, đây là 7 nguyên nhân thật khiến 50% quán đóng cửa trong 2 năm đầu, kèm 5 case study cụ thể (Soya Garden, Chuk Tea, Baemin, Phúc Long, Pizza 4P\'s) và "công thức nhàm chán" để bạn không trở thành con số thống kê tiếp theo.',
      },
      {
        type: 'text',
        heading: 'Phần 1 · Cảnh quan thị trường — số liệu không nói dối',
        content: 'Nửa đầu năm 2025, theo dữ liệu chính thức từ [Vietstock](https://en.vietstock.vn/2025/10/over-50000-fb-outlets-close-in-first-half-of-2025-974-622391.htm) và [B-Company](https://b-company.jp/the-trend-of-mass-closure-of-fb-stores-in-the-first-half-of-2025/), 50.000+ cửa hàng F&B Việt Nam đã đóng cửa — tăng 67% so với cùng kỳ 2024 (~30.000 đóng cửa). Cùng lúc, thị trường F&B Việt Nam vẫn tăng trưởng 9.6% so với năm trước về doanh thu, đạt 726.5 nghìn tỷ VNĐ năm 2025.',
      },
      {
        type: 'text',
        content: 'Nghịch lý này có một cách giải thích duy nhất: thị trường đang tập trung hoá (consolidation). Doanh thu vẫn tăng, nhưng tăng ở những chuỗi lớn đã tối ưu vận hành. Còn 50.000+ quán đóng kia? Phần lớn là quán độc lập, mở chưa đủ 2 năm. Theo [Vietnam News](https://vietnamnews.vn/economy/1694177/nearly-60-per-cent-of-food-and-beverage-companies-reported-decline-in-revenue-in-2024.html), 60%+ doanh nghiệp F&B báo cáo doanh thu giảm trong 2024 — đây không phải thị trường sụp đổ, mà là thất bại do người vận hành.',
      },
      {
        type: 'stat-grid',
        heading: 'So sánh quốc tế: tỷ lệ sống sót',
        content: [
          { icon: 'chart', label: 'Mỹ — 5 năm', value: '~51%', desc: 'Theo [Toast/Datassential 2025](https://pos.toasttab.com/blog/on-the-line/restaurant-failure-rate) — chỉ hơn 1/2 quán sống qua mốc 5 năm.' },
          { icon: 'chart', label: 'Mỹ — 10 năm', value: '~34.6%', desc: 'Sau 10 năm chỉ còn 1/3 sống. Việt Nam chưa có số chính thức.' },
          { icon: 'warning', label: 'VN quán độc lập (ước tính)', value: '< 50%', desc: 'Dựa trên trend đóng cửa, có thể thấp hơn Mỹ — không có hệ thống chuỗi hỗ trợ.' },
          { icon: 'wallet', label: 'Lý do gốc', value: 'Biên lợi nhuận mỏng', desc: 'Margin mỏng + vốn kẹt vào tài sản vật lý (decor, thiết bị) + khách không trung thành như tưởng.' },
        ] as KBStat[],
      },
      {
        type: 'text',
        content: 'F&B là ngành nghe có vẻ dễ nhưng làm cực khó. 99% người mở quán lần đầu đánh giá thấp độ khó này.',
      },
      {
        type: 'text',
        heading: 'Phần 2 · 5 case study — thất bại và thành công',
        content: 'Để hiểu nguyên nhân, xem 5 case cụ thể: 3 thất bại lớn (Soya Garden, Chuk Tea, Baemin) và 2 mặt sáng (Phúc Long, Pizza 4P\'s).',
      },
      {
        type: 'table',
        heading: 'Case 1 — Soya Garden: gọi vốn 4.35 triệu USD, 50 cửa hàng, sập trong 2 năm (2016-2022)',
        content: [
          { label: 'Vốn gọi được', range: '4.35 triệu USD', note: 'Từ Shark Tank + nhà đầu tư mạo hiểm. Founder: Hoàng Anh Tuấn.' },
          { label: 'Concept', range: 'Chuỗi đậu nành cao cấp', note: 'Một category duy nhất, định vị cao cấp đô thị.' },
          { label: 'Kế hoạch', range: '50+ cửa hàng trong 2 năm', note: 'Đua mở rộng với tiền nhà đầu tư.' },
          { label: 'Thực tế 2022', range: '1 cửa hàng còn lại', note: 'Mở rộng trước khi sản phẩm tìm được khách phù hợp. Không hợp khẩu vị Việt.' },
          { label: 'Bài học ([Vietnam Business Insider](https://vietnambusinessinsider.vn/case-study-soya-garden-cai-gia-phai-tra-cho-viec-mo-rong-khi-chua-dinh-hinh-duoc-san-pham-cot-loi-a24361.html))', range: 'Tìm khách trước, mở rộng sau', note: 'Có vốn không thay được sản phẩm phù hợp thị trường (product-market fit). Đợi 3-5 cửa hàng có lãi + lặp lại được mới expand.' },
        ] as KBTableRow[],
      },
      {
        type: 'table',
        heading: 'Case 2 — Chuk Tea & Coffee (KIDO): đầu tư 308 tỷ, lỗ 35 tỷ Q3/2022',
        content: [
          { label: 'Vốn đầu tư', range: '308 tỷ VNĐ', note: 'KIDO Group rót vốn 2018-2022.' },
          { label: 'Mục tiêu', range: '200-300 cửa hàng', note: 'Tham vọng cạnh tranh Highlands, Phúc Long.' },
          { label: 'Thực tế 2022', range: '50-60 cửa hàng', note: 'Đạt 1/4 mục tiêu. Lỗ 35 tỷ riêng Q3.' },
          { label: 'Kết cục', range: 'Thoái vốn 12/2022', note: 'KIDO chính thức rút khỏi mảng F&B chuỗi.' },
          { label: 'Bài học', range: 'Vốn + thương hiệu chưa đủ', note: 'Menu thiết kế kém (không có món signature), chọn vị trí theo "có sẵn" không theo khách hàng mục tiêu, kinh tế từng cửa hàng chưa chứng minh được trước khi mở rộng.' },
        ] as KBTableRow[],
      },
      {
        type: 'table',
        heading: 'Case 3 — Baemin Vietnam: rút khỏi VN 2023 sau 4 năm',
        content: [
          { label: 'Vào thị trường', range: '2019', note: 'Hàn Quốc, đầu tư hàng trăm triệu USD.' },
          { label: 'Lỗ hàng năm', range: '~1.4 nghìn tỷ VNĐ', note: 'CEO thừa nhận công khai: "Chưa bao giờ có lãi".' },
          { label: 'Thị phần', range: 'GrabFood + ShopeeFood ~90%', note: 'Super-app thống trị; Baemin độc lập không có dòng tiền chéo từ gọi xe để bù lỗ.' },
          { label: 'Rút lui', range: 'Cuối 2023', note: 'Sau 4 năm vận hành.' },
          { label: 'Bài học', range: 'Hiểu cấu trúc thị trường', note: 'Khi 90% thị trường chia cho 2 player, người thứ 3 cần lợi thế cực rõ — Baemin không có.' },
        ] as KBTableRow[],
      },
      {
        type: 'table',
        heading: 'Case 4 (mặt sáng) — Phúc Long: 50+ năm, biên gộp cao hơn Starbucks',
        content: [
          { label: 'Sáng lập', range: '1968 tại Bảo Lộc', note: 'Gia đình Lâm Bội Minh. Có profile chi tiết trong mục Góc nhìn chuyên gia.' },
          { label: 'Doanh thu flagship 9 tháng 2024', range: '761 tỷ VNĐ', note: 'Theo [VIR](https://vir.com.vn/the-story-of-phuc-longs-50-year-journey-107719.html).' },
          { label: 'Biên gộp (gross margin)', range: '> Starbucks toàn cầu', note: 'Một trong số ít F&B Việt vượt chuẩn quốc tế.' },
          { label: 'Bí quyết 1', range: 'Sản phẩm cốt lõi không đổi', note: 'Trà + cà phê Việt, chuỗi cung ứng 1.000+ nông hộ.' },
          { label: 'Bí quyết 2', range: 'Đa kênh linh hoạt', note: '35% doanh thu từ online/delivery.' },
          { label: 'Bí quyết 3', range: 'Mở rộng kiên nhẫn', note: '50 năm trong HCMC trước khi mở rộng. Bán cho Masan 2022 với deal 370 triệu USD.' },
        ] as KBTableRow[],
      },
      {
        type: 'table',
        heading: 'Case 5 (mặt sáng) — Pizza 4P\'s: 15 năm, giá trị doanh nghiệp gắn vào lương thưởng',
        content: [
          { label: 'Sáng lập', range: '2011', note: 'Yosuke Masuko (người Nhật). Profile chi tiết trong mục Góc nhìn chuyên gia.' },
          { label: 'Hiện tại 2026', range: '40+ cửa hàng, 5 quốc gia', note: 'Mở rộng sang New York 2025.' },
          { label: 'Lợi nhuận 2023', range: '115 tỷ VNĐ (+38% so năm trước)', note: 'Một trong những F&B Việt có lợi nhuận cao nhất.' },
          { label: 'Bí quyết 1', range: 'Giá trị gắn vào lương thưởng', note: 'Tinh thần phục vụ omotenashi + cải tiến liên tục kaizen — không chỉ là slogan dán tường mà tính vào lương.' },
          { label: 'Bí quyết 2', range: 'Tự xây chuỗi cung ứng', note: 'Xưởng burrata Đà Lạt 2.000 viên/ngày.' },
          { label: 'Bí quyết 3', range: 'Hệ thống thắng cá nhân tài năng', note: 'Chủ là "người xây hệ thống vận hành", không phải "đầu bếp giỏi".' },
        ] as KBTableRow[],
      },
      {
        type: 'warning-list',
        heading: 'Phần 3 · 7 nguyên nhân thật — không ai dạy',
        content: [
          { icon: 'warning', title: '1. Thiếu vốn dự trữ — sát thủ #1', desc: '82% quán đóng cửa do hết tiền mặt (chuẩn ngành). Startup Việt thường lên kế hoạch 6 tháng — thực tế cần 9-12 tháng. Lý do: 3-6 tháng đầu doanh thu chỉ đạt 30-60% công suất + chi phí phát sinh ngoài dự kiến (sửa thiết bị, nhà cung cấp tăng giá). Quy tắc: vốn setup × 1.5 = vốn dự trữ (cash buffer) cần có. Nếu mở 500 triệu, phải có thêm 250 triệu để dự phòng.', severity: 'critical' },
          { icon: 'warning', title: '2. Menu 40-50 món → tồn kho lãng phí 30-40%', desc: 'Chủ quán muốn "phục vụ mọi đối tượng" → menu 50 món. Thực tế: top 10 món bán 80% doanh thu. 40 món còn lại = nguyên vật liệu (NVL) tồn kho + đầu bếp rối + phục vụ chậm. Cảnh báo từ ngành: 70% nhà hàng với menu >40 món có food cost (chi phí NVL) vượt 35%. Pizza 4P\'s bắt đầu với 12 món. Phúc Long 15 món cốt lõi.', severity: 'critical' },
          { icon: 'warning', title: '3. Marketing bắt đầu sau khai trương', desc: 'Sai lầm phổ biến nhất: dồn hết tiền vào setup, tháng 1-2 không có ngân sách marketing → tăng trưởng chậm → cạn tiền nhanh. Chuẩn ngành: marketing phải bắt đầu 4-6 tuần TRƯỚC khai trương (khai trương thử nghiệm + nội dung + Facebook groups + truyền miệng Zalo). 7-9 giờ tối là khung giờ engagement cao nhất cho nội dung F&B trên mạng xã hội.', severity: 'critical' },
          { icon: 'warning', title: '4. Phụ thuộc 1 nhân viên giỏi (rủi ro key person)', desc: 'Đầu bếp giỏi nghỉ = chất lượng giảm 30-50% trong 2 tuần → khách quen biến mất. Quản lý giỏi nghỉ = vận hành hỗn loạn. Giải pháp: chuẩn hóa công thức (recipe card) + đào tạo chéo (2 đầu bếp thay thế được nhau) + quy trình chuẩn (SOP) rõ ràng. Đào Thế Vinh Golden Gate đã nói: "Hệ thống tạo được bất kỳ sản phẩm nào; nghệ nhân chỉ tạo được thứ họ giỏi."', severity: 'critical' },
          { icon: 'warning', title: '5. Chạy theo trend ngắn hạn (Hàn Quốc cozy, bánh bẩn, bingsu...)', desc: 'Trend F&B có vòng đời 12-18 tháng. Mở quán mất 6 tháng chuẩn bị. Đến khi mở, trend đã đạt đỉnh. Sau 6 tháng nữa, trend đã chết → quán "đẹp" nhưng không có khách quay lại. Soya Garden là ví dụ điển hình: bắt trend "đậu nành tốt cho sức khỏe" năm 2016, đến 2020 trend chết, không xoay kịp. Xây concept bền vững, đừng xây theo trend.', severity: 'critical' },
          { icon: 'warning', title: '6. Tư duy "nghệ nhân" thay vì "người vận hành"', desc: 'Chủ tiệm muốn là "đầu bếp giỏi" hơn là "chủ quán giỏi". Mê làm sản phẩm + decor + check-in Instagram. Không mê việc xếp ca, kiểm tồn kho, review báo cáo lãi/lỗ hàng tuần, phân tích feedback khách hàng. Kết quả: sản phẩm đẹp, quán đẹp, vận hành lộn xộn, tài chính mù mờ. Bakery (tiệm bánh) khả năng cao nhất rơi vào tình trạng này.', severity: 'critical' },
          { icon: 'warning', title: '7. Vị trí mặt bằng sai — không đo lượng khách qua + chi phí trên đầu khách', desc: 'Mặt bằng "đẹp" Q1 HCMC 80tr/tháng → tiền thuê chiếm 30%+ doanh thu → không thể có lãi. Hoặc mặt bằng "rẻ" cuối hẻm 8tr/tháng nhưng khách qua chỉ bằng 1/10 → chi phí mặt bằng trên mỗi khách cao gấp 3 lần mặt tiền lớn. 50% quán F&B đóng cửa có nguyên nhân gốc là vị trí. Đọc thêm trong bài "Sai lầm khi chọn mặt bằng F&B".', severity: 'critical' },
        ] as KBWarningItem[],
      },
      {
        type: 'text',
        heading: 'Phần 4 · Áp lực chi phí 2026 — vì sao khó hơn nữa',
        content: 'Nếu các nguyên nhân trên đã đủ để giết 50.000+ quán năm 2024-2025, năm 2026 thêm 3 áp lực chi phí mới.',
      },
      {
        type: 'table',
        heading: '3 áp lực chi phí mới năm 2026',
        content: [
          { label: 'Lương tối thiểu vùng I', range: '5.31tr/tháng (+7.2%)', note: 'Nghị định 293/2025/NĐ-CP, hiệu lực 1/1/2026. Cộng 21.5% BHXH chủ phải đóng = chi phí nhân sự thực tăng ~9% so năm trước.' },
          { label: 'Thuế đường 2027', range: '10% thuế tiêu thụ đặc biệt', note: 'Đồ uống có đường ≥5g/100ml. Cafe, trà sữa, nước ngọt đều ảnh hưởng. Phúc Long + Highlands đã thử nghiệm menu "giảm đường".' },
          { label: 'Lạm phát nguyên liệu', range: '+8-15% so năm trước', note: '35.4% doanh nghiệp F&B Việt cho rằng giá nguyên liệu là nguyên nhân chính của đóng cửa 2024 ([VietData](https://www.vietdata.vn/post/the-f-b-industry-is-seeing-its-profits-disappear-due-to-rising-costs)). Cà phê, đường, sữa, dầu ăn đều tăng.' },
        ] as KBTableRow[],
      },
      {
        type: 'text',
        content: 'Quán đang ở tỉ lệ nhân sự 28% → 2026 nhảy lên 30-31% nếu không tăng giá menu. Nghĩa là: nếu năm 2024-2025 đã khó, 2026 còn khó hơn. Mở quán năm 2026 mà không có validation (kiểm chứng mô hình) nghiêm túc = đua xe F1 không có phanh.',
      },
      {
        type: 'warning-list',
        heading: 'Phần 5 · "Công thức nhàm chán" để sống sót — 5 lựa chọn ngược trend',
        content: [
          { icon: 'money', title: 'Lựa chọn 1 — Tiền mặt quan trọng hơn decor', desc: 'Vốn setup không bao giờ vượt 70% tổng ngân sách. Giữ lại 30%+ làm vốn lưu động (working capital) cho 9-12 tháng đầu. Decor đẹp 3 tháng đầu thu hút khách check-in nhưng tháng 4-6 hết tiền = đóng cửa.', severity: 'tip' },
          { icon: 'menu', title: 'Lựa chọn 2 — Menu 15-20 món, không phải 40-50', desc: 'Pizza 4P\'s bắt đầu với 12 món. Phúc Long 15 món cốt lõi. Top 10 món bán 80% doanh thu — tập trung vào đó. Mỗi món thêm = tồn kho + phức tạp + phục vụ chậm hơn. Ít hơn = nhiều hơn.', severity: 'tip' },
          { icon: 'chart', title: 'Lựa chọn 3 — Đo metric hàng tuần, không phải cảm giác', desc: 'Cuối mỗi tuần, review: doanh thu, % food cost (chi phí NVL), % chi phí nhân sự, top 5 món, feedback khách, tỷ lệ nhân viên nghỉ. Nếu không có thời gian review = không có thời gian fix. POS (KiotViet/Sapo/iPOS) đều có dashboard này — chỉ cần đọc.', severity: 'tip' },
          { icon: 'people', title: 'Lựa chọn 4 — Khai trương "thử nghiệm" 6 tuần, không phải grand opening ngày 1', desc: 'Mở quán "âm thầm" 4-6 tuần cho 50-100 khách thân + KOL nhỏ test menu, fix lỗi, tối ưu quy trình phục vụ. Grand opening = tháng 2-3 khi đã có 30-50 review tốt + Facebook page có nội dung. Mở grand opening ngày 1: 1-2 review xấu đầu tiên = thuật toán giảm hiển thị = chết sớm.', severity: 'tip' },
          { icon: 'location', title: 'Lựa chọn 5 — Thống trị 1 thành phố trước khi mở rộng cả nước', desc: 'Phúc Long 50 năm trong HCMC trước khi mở rộng. Pizza 4P\'s 8 năm tại VN trước khi mở Ấn Độ + Nhật. Mở cửa hàng 2 chỉ khi cửa hàng 1 có lãi 6+ tháng + có quản lý sẵn sàng thay thế. Đua mở rộng = đua thất bại.', severity: 'tip' },
        ] as KBWarningItem[],
      },
      {
        type: 'list',
        heading: 'Phần 6 · Hành động — checklist 10 bước nếu vẫn muốn mở quán',
        content: [
          'Kiểm chứng (validate) ý tưởng với Validator (miễn phí, 30 phút). Nếu tool cảnh báo "không khoẻ" → kiểm tra lại giả định hoặc bỏ ý tưởng.',
          'Khảo sát vị trí 2-3 tuần — đếm lượng khách qua mặt bằng 5 ngày × 3 khung giờ, không đoán.',
          'Có vốn dự trữ 9-12 tháng trong tài khoản trước khi ký mặt bằng. Vốn setup × 1.5.',
          'Menu 15-20 món cho 6 tháng đầu. Test với 30-50 khách thân trước khai trương.',
          'Marketing khai trương thử nghiệm 4-6 tuần trước grand opening — nội dung + KOL nhỏ + Facebook groups.',
          'Chuẩn hóa quy trình (SOP) + công thức (recipe card) ngay từ đầu — đào tạo chéo 2 nhân viên cho mỗi vị trí quan trọng.',
          'Cài POS theo dõi doanh thu hàng ngày từ ngày 1 (xem bài "So sánh hệ thống POS" trên Validator).',
          'Review metric hàng tuần — đặt cố định 1 giờ mỗi tuần, không bỏ.',
          'Dùng Validator chế độ "Quán đang vận hành" mỗi quý — chẩn đoán sức khoẻ quán 3 tháng/lần.',
          'Mở cửa hàng 2 chỉ khi cửa hàng 1 có lãi 6+ tháng + có quản lý sẵn sàng thay thế.',
        ],
      },
      {
        type: 'text',
        content: 'Đây không phải là "công thức thành công" — F&B không có công thức. Đây là "công thức tránh chết". Nếu làm đúng 10 bước này, bạn loại trừ ~70% rủi ro thông thường. 30% còn lại là thời điểm thị trường + may mắn + kỹ năng thực thi — đó là phần không ai dạy được.',
      },
      {
        type: 'text',
        heading: 'Phần 7 · Kết — tại sao bài viết này tồn tại',
        content: 'Validator.vn được xây để giải quyết một vấn đề duy nhất: giúp người mở quán F&B Việt Nam tránh trở thành một con số trong thống kê 50.000 quán đóng cửa. Tool miễn phí, không cần đăng ký, vì tác động xã hội quan trọng hơn doanh thu.',
      },
      {
        type: 'text',
        content: 'Nếu bạn thấy bài viết này có ích, chia sẻ cho một người đang cân nhắc mở quán — có thể cứu họ 200-800 triệu + 18 tháng cuộc đời. Comments + feedback gửi tới hello@validator.vn — chúng tôi đọc hết.',
      },
      {
        type: 'text',
        content: 'Mở quán F&B vẫn là một trong những hành trình ý nghĩa nhất — nếu làm đúng. Đừng để 7 nguyên nhân trên giết ý tưởng tốt của bạn. Validate trước, build sau, scale chậm. Nhàm chán thắng trendy. Kỷ luật thắng đam mê. Hệ thống thắng anh hùng cá nhân. Phúc Long, Pizza 4P\'s, Highlands đã chứng minh — bạn có thể là người tiếp theo.',
      },
    ],
  },
];

export default TRENDS_ARTICLES;
