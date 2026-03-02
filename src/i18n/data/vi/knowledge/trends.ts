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
];

export default TRENDS_ARTICLES;
