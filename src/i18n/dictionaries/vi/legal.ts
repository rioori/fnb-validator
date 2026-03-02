const legal = {
  privacy: {
    meta: {
      title: 'Chính sách bảo mật — Validator.vn',
      description: 'Chính sách bảo mật và xử lý dữ liệu cá nhân của Validator.vn.',
    },
    title: 'Chính sách bảo mật',
    lastUpdated: 'Cập nhật lần cuối: 28/02/2026',
    sections: [
      {
        heading: '1. Thông tin chúng tôi thu thập',
        content: `Validator.vn thu thập các thông tin sau khi bạn sử dụng dịch vụ:
• **Thông tin tài khoản**: Số điện thoại hoặc email, mật khẩu (được mã hóa) khi bạn đăng ký tài khoản.
• **Dữ liệu kịch bản kinh doanh**: Các số liệu bạn nhập vào công cụ thẩm định (doanh thu, chi phí, v.v.) — chỉ lưu khi bạn chủ động nhấn "Lưu kịch bản".
• **Dữ liệu kỹ thuật**: Loại trình duyệt, thiết bị, địa chỉ IP (ẩn danh), thời gian truy cập — phục vụ phân tích lưu lượng và cải thiện trải nghiệm.
• **Email đăng ký nhận tin**: Khi bạn đăng ký nhận bản tin qua newsletter.`,
      },
      {
        heading: '2. Mục đích sử dụng dữ liệu',
        content: `Chúng tôi sử dụng dữ liệu của bạn để:
• Cung cấp và vận hành dịch vụ thẩm định kinh doanh.
• Lưu trữ kịch bản để bạn xem lại hoặc so sánh sau.
• Gửi bản tin kinh doanh (nếu bạn đã đăng ký).
• Phân tích lưu lượng truy cập và cải thiện sản phẩm.
• **Chúng tôi KHÔNG bán hoặc chia sẻ dữ liệu cá nhân cho bên thứ ba vì mục đích thương mại.**`,
      },
      {
        heading: '3. Lưu trữ và bảo mật',
        content: `• Dữ liệu được lưu trữ trên Supabase (hạ tầng PostgreSQL) với mã hóa SSL/TLS.
• Mật khẩu được băm (hash) bằng thuật toán bcrypt — chúng tôi không lưu mật khẩu gốc.
• Dữ liệu nhập vào wizard (chưa lưu) chỉ tồn tại trên trình duyệt của bạn (localStorage) và không được gửi lên server.
• Chúng tôi áp dụng các biện pháp bảo mật hợp lý để bảo vệ dữ liệu khỏi truy cập trái phép.`,
      },
      {
        heading: '4. Dịch vụ bên thứ ba',
        content: `Validator.vn sử dụng các dịch vụ bên thứ ba sau:
• **Supabase**: Lưu trữ tài khoản và kịch bản (Chính sách: supabase.com/privacy).
• **Vercel**: Hosting và phân tích lưu lượng (Chính sách: vercel.com/legal/privacy-policy).
• **Google Analytics**: Phân tích lưu lượng ẩn danh.
• **DeepSeek API**: Khi bạn sử dụng tính năng AI Advisor, dữ liệu tóm tắt kịch bản được gửi đến DeepSeek — không bao gồm thông tin cá nhân.`,
      },
      {
        heading: '5. Quyền của bạn',
        content: `Bạn có quyền:
• **Truy cập**: Xem toàn bộ dữ liệu của mình thông qua tài khoản.
• **Xóa**: Yêu cầu xóa tài khoản và toàn bộ dữ liệu bằng cách liên hệ vn.validator@gmail.com.
• **Hủy đăng ký nhận tin**: Nhấn link "Hủy đăng ký" trong mỗi email hoặc liên hệ chúng tôi.
• **Xuất dữ liệu**: Tải kịch bản dưới dạng Excel hoặc PDF bất cứ lúc nào.`,
      },
      {
        heading: '6. Cookie',
        content: `Validator.vn sử dụng:
• **Cookie chức năng**: Lưu phiên đăng nhập và ngôn ngữ ưa thích.
• **Cookie phân tích**: Google Analytics và Vercel Analytics — thu thập dữ liệu ẩn danh về cách bạn sử dụng website.
• Bạn có thể tắt cookie trong cài đặt trình duyệt, nhưng một số tính năng có thể không hoạt động đầy đủ.`,
      },
      {
        heading: '7. Liên hệ',
        content: `Nếu có câu hỏi về chính sách bảo mật, vui lòng liên hệ:
• Email: **vn.validator@gmail.com**
• Website: **validator.vn**`,
      },
    ],
  },

  terms: {
    meta: {
      title: 'Điều khoản sử dụng — Validator.vn',
      description: 'Điều khoản và điều kiện sử dụng dịch vụ Validator.vn.',
    },
    title: 'Điều khoản sử dụng',
    lastUpdated: 'Cập nhật lần cuối: 28/02/2026',
    sections: [
      {
        heading: '1. Giới thiệu',
        content: `Validator.vn là công cụ thẩm định ý tưởng kinh doanh F&B miễn phí, được phát triển bởi Khang Pham. Bằng việc sử dụng website, bạn đồng ý với các điều khoản dưới đây.`,
      },
      {
        heading: '2. Dịch vụ miễn phí',
        content: `• Validator.vn cung cấp công cụ thẩm định kinh doanh **hoàn toàn miễn phí**.
• Chúng tôi có quyền thay đổi, tạm ngưng hoặc ngừng cung cấp dịch vụ bất kỳ lúc nào mà không cần thông báo trước.
• Không có cam kết SLA (Service Level Agreement) cho dịch vụ miễn phí.`,
      },
      {
        heading: '3. Tài khoản người dùng',
        content: `• Bạn chịu trách nhiệm bảo mật thông tin đăng nhập của mình.
• Mỗi người chỉ nên tạo một tài khoản.
• Chúng tôi có quyền khóa tài khoản nếu phát hiện hành vi lạm dụng hoặc vi phạm điều khoản.`,
      },
      {
        heading: '4. Giới hạn trách nhiệm',
        content: `• Kết quả thẩm định từ Validator.vn chỉ mang tính **tham khảo**, dựa trên số liệu bạn nhập và benchmark ngành.
• **CHÚNG TÔI KHÔNG chịu trách nhiệm** cho bất kỳ quyết định kinh doanh nào bạn đưa ra dựa trên kết quả từ công cụ.
• Kết quả thực tế có thể khác biệt đáng kể do điều kiện thị trường, quản lý, và nhiều yếu tố khác.
• Bạn nên tham khảo thêm ý kiến chuyên gia trước khi đầu tư.`,
      },
      {
        heading: '5. Sở hữu trí tuệ',
        content: `• Toàn bộ nội dung, thiết kế, code, và thương hiệu trên Validator.vn thuộc quyền sở hữu của chúng tôi.
• Bạn được phép sử dụng kết quả thẩm định cho mục đích cá nhân hoặc kinh doanh của mình.
• Bạn **không được** sao chép, phân phối lại hoặc sử dụng nội dung website cho mục đích thương mại khác mà không có sự đồng ý bằng văn bản.`,
      },
      {
        heading: '6. Nội dung do AI tạo',
        content: `• Tính năng AI Advisor sử dụng trí tuệ nhân tạo (DeepSeek) để phân tích — kết quả có thể không chính xác hoàn toàn.
• Bạn sử dụng tính năng AI với sự hiểu biết rằng đây là công cụ hỗ trợ, không thay thế tư vấn chuyên nghiệp.
• Chúng tôi không chịu trách nhiệm cho nội dung do AI tạo ra.`,
      },
      {
        heading: '7. Thay đổi điều khoản',
        content: `Chúng tôi có thể cập nhật điều khoản bất kỳ lúc nào. Thay đổi có hiệu lực ngay khi đăng trên website. Việc tiếp tục sử dụng dịch vụ sau khi thay đổi đồng nghĩa với việc bạn chấp nhận điều khoản mới.`,
      },
      {
        heading: '8. Liên hệ',
        content: `Mọi thắc mắc về điều khoản sử dụng, vui lòng liên hệ:
• Email: **vn.validator@gmail.com**`,
      },
    ],
  },

  faq: {
    meta: {
      title: 'Câu hỏi thường gặp — Validator.vn',
      description: 'Giải đáp các câu hỏi thường gặp về công cụ thẩm định kinh doanh F&B Validator.vn.',
    },
    title: 'Câu hỏi thường gặp',
    items: [
      {
        q: 'Validator.vn có miễn phí không?',
        a: 'Hoàn toàn miễn phí. Tất cả tính năng — thẩm định, xuất Excel/PDF, AI advisor, thư viện kiến thức — đều miễn phí.',
      },
      {
        q: 'Kết quả thẩm định có chính xác không?',
        a: 'Kết quả dựa trên số liệu bạn nhập và benchmark ngành F&B Việt Nam. Đây là công cụ tham khảo giúp bạn hình dung bức tranh tài chính — kết quả thực tế có thể khác tùy vào nhiều yếu tố như vị trí, quản lý, mùa vụ.',
      },
      {
        q: 'Tôi có cần đăng ký tài khoản không?',
        a: 'Không bắt buộc. Bạn có thể sử dụng công cụ thẩm định mà không cần đăng ký. Tài khoản chỉ cần khi bạn muốn lưu kịch bản, xuất Excel/PDF, hoặc sử dụng AI advisor.',
      },
      {
        q: 'Dữ liệu của tôi có an toàn không?',
        a: 'Có. Dữ liệu bạn nhập trên wizard chỉ lưu trên trình duyệt (localStorage) cho đến khi bạn chủ động lưu. Khi lưu kịch bản, dữ liệu được mã hóa và lưu trữ an toàn trên Supabase. Chúng tôi không bán dữ liệu cho bên thứ ba.',
      },
      {
        q: 'Validator hỗ trợ những loại hình kinh doanh nào?',
        a: '8 mô hình F&B phổ biến: Quán cà phê, Quán ăn/cơm, Trà sữa, Nhà hàng, Cloud Kitchen, Tiệm bánh, Bar/Pub, Kiosk.',
      },
      {
        q: 'Tôi có thể so sánh nhiều kịch bản không?',
        a: 'Có. Bạn có thể lưu tối đa 10 kịch bản và sử dụng tính năng "So sánh" để đặt 2-3 kịch bản cạnh nhau, so sánh các chỉ số quan trọng và biểu đồ.',
      },
      {
        q: '"Chẩn đoán sức khỏe kinh doanh" dành cho ai?',
        a: 'Dành cho người đang kinh doanh F&B muốn phân tích tình hình hiện tại. Nhập số liệu thực tế (doanh thu, chi phí, thực đơn) để nhận chẩn đoán chi phí, phân tích kênh bán, ma trận thực đơn, và gợi ý cải thiện.',
      },
      {
        q: 'AI Advisor hoạt động như thế nào?',
        a: 'AI Advisor sử dụng DeepSeek để phân tích số liệu kịch bản của bạn và đưa ra nhận xét, gợi ý cụ thể. Bạn cần đăng nhập để sử dụng tính năng này.',
      },
      {
        q: 'Tôi có thể xuất báo cáo không?',
        a: 'Có. Bạn có thể xuất báo cáo dưới dạng Excel (chi tiết 12 tháng), PDF (bản in), hoặc in trực tiếp từ trình duyệt.',
      },
      {
        q: 'Làm sao liên hệ hỗ trợ?',
        a: 'Gửi email đến vn.validator@gmail.com hoặc nhắn tin qua Facebook page Validator.vn. Chúng tôi thường phản hồi trong 24 giờ.',
      },
    ],
  },
};

export default legal;
