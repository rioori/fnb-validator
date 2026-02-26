import type { Expert } from '@/types';

const EXPERTS: Expert[] = [
  // ── Chuyên gia tư vấn ──
  {
    id: 'do-duy-thanh',
    slug: 'do-duy-thanh',
    name: 'Đỗ Duy Thanh',
    descriptor: 'Tác giả mô hình 9Ps Quản trị Nhà hàng, 20+ năm đồng hành cùng hàng trăm thương hiệu ẩm thực',
    photo: '/experts/do-duy-thanh.webp',
    category: 'consultant',
    tags: ['Tư vấn chiến lược', 'Quản trị F&B', 'Đào tạo'],
    shortBio: 'Chuyên gia tư vấn F&B hàng đầu Việt Nam với 20+ năm kinh nghiệm. Sáng lập FnB Director, Horeca Business School. Đã tư vấn cho Vingroup, Saigon Tourist, Nova FnB, Gojek, Baemin.',
    fullBio: 'Đỗ Duy Thanh là chuyên gia tư vấn chiến lược kinh doanh và giảng viên khởi nghiệp với hơn 20 năm kinh nghiệm trong ngành Ẩm thực - Dịch vụ - Bán lẻ. Trước khi bước vào tư vấn, ông từng giữ vị trí Business Director tại D1 Concepts (San Fu Lou, Sorae, Dì Mai) và Oriental Saigon — hai lần vinh danh Top 101 Best Restaurants in Asia.\n\nNăm 2012, ông sáng lập FnB Director — công ty tư vấn chuyên sâu ngành ẩm thực, đã đồng hành cùng hơn 100 dự án. Năm 2019, ông được mời tham gia Hội đồng Cố vấn Harvard Business Review. Năm 2025, ông sáng lập Horeca Business School — nền tảng đào tạo ngành Dịch vụ & Công nghệ.',
    highlights: [
      '20+ năm kinh nghiệm, 12+ năm tư vấn chiến lược, 100+ dự án',
      'Tác giả mô hình 9Ps Quản trị Nhà hàng',
      'Thành viên Hội đồng Cố vấn Harvard Business Review (từ 2019)',
      'Đồng hành cùng: Vingroup, Saigon Tourist, Nova FnB, Milano Coffee, Gojek, Baemin',
    ],
    quotes: [
      {
        text: 'Để tồn tại trong ngành này, người kinh doanh không chỉ cần bán nhiều mà còn là quản trị chi phí hiệu quả.',
        source: 'Tuổi Trẻ',
        sourceUrl: 'https://tuoitre.vn/kinh-doanh-am-thuc-dong-khach-nhung-van-lo-vi-sao-20250222225814841.htm',
      },
      {
        text: 'Xu hướng bền vững của ngành F&B không nằm ở giá rẻ hay các sự kiện hoành tráng, mà ở việc thương hiệu trở thành một phần trong đời sống cảm xúc và xã hội của khách hàng.',
        source: 'CafeF',
        sourceUrl: 'https://cafef.vn/cuoc-dua-song-con-cua-cac-thuong-hieu-fb-trong-nam-thanh-loc-2025-dep-doc-khuay-dao-thi-truong-nghin-ty-loat-dai-gia-tat-tay-dua-voi-cac-ong-lon-ngan-hang-188251230103845865.chn',
      },
      {
        text: 'Khách đến vì rẻ thì cũng rời đi vì rẻ hơn ở nơi khác.',
        source: 'CafeF',
        sourceUrl: 'https://cafef.vn/cuoc-dua-song-con-cua-cac-thuong-hieu-fb-trong-nam-thanh-loc-2025-dep-doc-khuay-dao-thi-truong-nghin-ty-loat-dai-gia-tat-tay-dua-voi-cac-ong-lon-ngan-hang-188251230103845865.chn',
      },
      {
        text: 'Uy tín thực sự không đến từ việc nói nhiều — mà từ việc làm đúng và đồng hành đủ lâu để thấy kết quả.',
        source: 'BrandCamp Asia',
        sourceUrl: 'https://www.brandcamp.asia/lecturer/doduythanh/',
      },
    ],
    advice: [
      {
        title: 'Quản trị chi phí quan trọng hơn tăng doanh thu',
        desc: 'Đông khách mà vẫn lỗ là do không kiểm soát được chi phí vận hành. Tập trung vào quản trị chi phí hiệu quả thay vì chỉ chạy theo doanh số.',
      },
      {
        title: 'Xây bản sắc thật, đừng cạnh tranh bằng giá rẻ',
        desc: 'Đầu tư vào trải nghiệm thật và bản sắc riêng để thương hiệu trở thành một phần trong đời sống khách hàng.',
      },
      {
        title: 'Tư duy hệ sinh thái thay vì đơn lẻ',
        desc: 'Thị trường F&B đã chuyển sang "cuộc đua hệ sinh thái". Tối ưu quy trình, con người và không gian — không chỉ sản phẩm.',
      },
    ],
    links: [
      { label: 'Đông khách nhưng vẫn lỗ vì sao?', url: 'https://tuoitre.vn/kinh-doanh-am-thuc-dong-khach-nhung-van-lo-vi-sao-20250222225814841.htm', type: 'article' },
      { label: 'Cuộc đua sống còn F&B năm 2025', url: 'https://cafef.vn/cuoc-dua-song-con-cua-cac-thuong-hieu-fb-trong-nam-thanh-loc-2025-dep-doc-khuay-dao-thi-truong-nghin-ty-loat-dai-gia-tat-tay-dua-voi-cac-ong-lon-ngan-hang-188251230103845865.chn', type: 'article' },
    ],
    socials: [
      { platform: 'linkedin', url: 'https://www.linkedin.com/in/doduythanh34/' },
      { platform: 'website', url: 'https://fnbdirector.com' },
    ],
    featured: true,
  },

  {
    id: 'ha-chu',
    slug: 'ha-chu',
    name: 'Hà Chu',
    descriptor: 'Nhà sáng lập trường Marketing F&B đầu tiên tại Việt Nam, chuyên gia tư vấn thương hiệu ẩm thực',
    photo: '/experts/ha-chu.webp',
    category: 'consultant',
    tags: ['F&B Marketing', 'Branding', 'Đào tạo', 'Podcast'],
    shortBio: 'Sáng lập COOKED — trường đào tạo Marketing F&B đầu tiên tại VN. Tư vấn cho 20+ thương hiệu bao gồm nhà hàng Gia (Michelin), The KAfe, Manwah. Host podcast "Ha Chu works".',
    fullBio: 'Chu Hồng Hà (Hà Chu), sinh năm 1992, là người sáng lập và CEO của COOKED — trường đào tạo Marketing & Kinh doanh chuyên ngành F&B đầu tiên và duy nhất tại Việt Nam.\n\nHà bắt đầu viết báo từ năm lớp 10, trở thành Marketing Manager năm 24 tuổi tại The KAfe. Năm 26 tuổi (2018), cô sáng lập COOKED với sứ mệnh "mang lại niềm hạnh phúc hơn một chút cho những người làm F&B." Đến nay, COOKED đã đào tạo gần 100.000 học viên. Hà trực tiếp host podcast "Ha Chu works" (97+ tập, 4.9 sao trên Spotify).',
    highlights: [
      'Sáng lập COOKED (2018) — trường Marketing F&B đầu tiên, gần 100.000 học viên',
      'Tư vấn marketing cho 20+ thương hiệu: Gia (Michelin), The KAfe, Manwah, Yu Tang',
      'Host podcast "Ha Chu works" — 97+ tập, đánh giá 4.9/5 trên Spotify',
      'Diễn giả tại Vietnam Food & Beverage Conference 2023 (Vietcetera)',
    ],
    quotes: [
      {
        text: 'Đông khách không có nghĩa là bạn đang làm đúng!',
        source: 'CafeF',
        sourceUrl: 'https://cafef.vn/nha-sang-lap-truong-hoc-marketing-nganh-am-thuc-dau-tien-tai-viet-nam-dong-khach-khong-co-nghia-la-ban-dang-lam-dung-20220206095659549.chn',
      },
      {
        text: 'Khẩu vị là điểm "chạm" quan trọng nhất.',
        source: 'Vietcetera M.A.D. Podcast',
        sourceUrl: 'https://vietcetera.com/vn/podcast/mad/s2-1-ha-chu-marketing-specialist-founder-cooked-khau-vi-la-diem-cham-quan-trong-nhat',
      },
      {
        text: 'Không có thành công nào mình nhớ mãi nhưng thất bại thì có.',
        source: 'CafeF',
        sourceUrl: 'https://cafef.vn/nha-sang-lap-truong-hoc-marketing-nganh-am-thuc-dau-tien-tai-viet-nam-dong-khach-khong-co-nghia-la-ban-dang-lam-dung-20220206095659549.chn',
      },
    ],
    advice: [
      {
        title: 'Hiểu khách hàng thật sâu',
        desc: 'Đừng phỏng đoán trên mạng xã hội — hãy đi vào đời thực, quan sát hành vi, bước vào cuộc sống của khách hàng.',
      },
      {
        title: 'Tư duy dài hạn 5 năm',
        desc: 'Đừng đánh giá thành công dựa trên doanh thu tháng đầu. Hãy tự hỏi: thương hiệu của bạn mang lại giá trị gì cho xã hội trong 5 năm tới?',
      },
    ],
    links: [
      { label: 'Đông khách không có nghĩa là đang làm đúng (CafeF)', url: 'https://cafef.vn/nha-sang-lap-truong-hoc-marketing-nganh-am-thuc-dau-tien-tai-viet-nam-dong-khach-khong-co-nghia-la-ban-dang-lam-dung-20220206095659549.chn', type: 'article' },
      { label: 'Podcast Ha Chu works (Spotify)', url: 'https://open.spotify.com/show/3aGjrokDnUZc2bomJ1wD7w', type: 'podcast' },
      { label: '5 điều cần cân nhắc trước khi mở quán (Vietcetera)', url: 'https://vietcetera.com/en/coffee-chats-5-things-ha-chu-wants-you-to-consider-before-opening-a-cafe-in-hanoi', type: 'article' },
    ],
    socials: [
      { platform: 'instagram', url: 'https://www.instagram.com/hachu.works/' },
      { platform: 'linkedin', url: 'https://www.linkedin.com/in/hachu/' },
      { platform: 'website', url: 'https://www.cooked.vn' },
      { platform: 'spotify', url: 'https://open.spotify.com/show/3aGjrokDnUZc2bomJ1wD7w' },
    ],
  },

  {
    id: 'tran-trung-hieu',
    slug: 'tran-trung-hieu',
    name: 'Trần Trung Hiếu',
    descriptor: '"F&B Coach" — chuyên gia tư vấn quán cà phê & nhà hàng cho chủ quán nhỏ',
    photo: '/experts/tran-trung-hieu.webp',
    category: 'consultant',
    tags: ['Tư vấn quán', 'Cà phê', 'Nhà hàng', 'SME'],
    shortBio: 'F&B Coach chuyên tư vấn cho chủ quán nhỏ. Thường xuyên được VnExpress, ZNews trích dẫn. Sáng lập FnB Academy (fnb.edu.vn).',
    fullBio: 'Trần Trung Hiếu là chuyên gia tư vấn F&B được biết đến với phong cách "nói thẳng, nói thật" về thực trạng kinh doanh quán ăn, cà phê tại Việt Nam. Ông thường xuyên được các tờ báo lớn như VnExpress, ZNews, Dân Trí trích dẫn khi có vấn đề nóng trong ngành F&B.\n\nÔng sáng lập FnB Academy (fnb.edu.vn) — nền tảng đào tạo trực tuyến giúp chủ quán nhỏ nắm vững kiến thức quản lý, vận hành và marketing.',
    highlights: [
      'Chuyên gia F&B thường xuyên được VnExpress, ZNews, Dân Trí trích dẫn',
      'Sáng lập FnB Academy (fnb.edu.vn) — đào tạo quản lý quán cho SME',
      'Tư vấn thực chiến cho hàng trăm chủ quán nhỏ',
    ],
    quotes: [
      {
        text: 'Đừng mở quán chỉ để bán nó sau 3 tháng.',
        source: 'trantrunghieu.com',
      },
      {
        text: 'Kinh doanh F&B không phải cuộc chơi của đam mê suông — mà là của người biết tính toán.',
        source: 'VnExpress',
      },
    ],
    advice: [
      {
        title: 'Tính toán kỹ trước khi mở quán',
        desc: 'Nhiều người mở quán vì đam mê mà quên tính chi phí. Hãy biết rõ break-even point trước khi đầu tư đồng nào.',
      },
      {
        title: 'Đừng chạy theo trend',
        desc: 'Mô hình bền vững quan trọng hơn mô hình viral. Trend đến nhanh, đi cũng nhanh.',
      },
    ],
    links: [
      { label: 'Blog trantrunghieu.com', url: 'https://www.trantrunghieu.com/', type: 'article' },
      { label: 'FnB Academy', url: 'https://fnb.edu.vn/', type: 'article' },
    ],
    socials: [
      { platform: 'website', url: 'https://www.trantrunghieu.com/' },
    ],
  },

  // ── Người truyền cảm hứng ──
  {
    id: 'nguyen-ha-linh',
    slug: 'nguyen-ha-linh',
    name: 'Nguyễn Hà Linh',
    descriptor: '"Cô gái 250 nghìn" — từ phát tờ rơi đến chuỗi nhà hàng Thái và cộng đồng 2.6 triệu người',
    photo: '/experts/nguyen-ha-linh.webp',
    category: 'inspiration',
    tags: ['Khởi nghiệp trẻ', 'Nhà hàng', 'Forbes 30U30', 'Cộng đồng'],
    shortBio: 'Khởi nghiệp với 250.000đ lúc 18 tuổi, Forbes 30 Under 30. Sáng lập chuỗi Koh Yam Thai (~10 chi nhánh) và cộng đồng Nghiện Nhà (2.6 triệu thành viên).',
    fullBio: 'Nguyễn Hà Linh (sinh 1988, Hà Nội) bỏ dở đại học năm thứ 3 để toàn tâm khởi nghiệp. Năm 18 tuổi, với 250.000 đồng, cô mở lớp luyện thi IELTS — ngày đầu thu 120 triệu. Mở rộng sang F&B với chuỗi kem dừa Koh Samui, thua lỗ 7 tỷ đồng — bài học đắt giá về kinh doanh theo trào lưu.\n\nKhông nản, cô tái cấu trúc thành Bếp Thái Koh Yam — mô hình bền vững với công thức Thái "Việt hóa". Hiện Koh Yam có ~10 chi nhánh. Forbes Vietnam vinh danh 30 Under 30 (2016). Năm 2020, cô sáng lập group "Nghiện Nhà" — 2.6 triệu thành viên.',
    highlights: [
      'Khởi nghiệp với 250.000 đồng lúc 18 tuổi, ngày đầu thu 120 triệu',
      'Thua lỗ 7 tỷ với Koh Samui → tái cấu trúc thành Koh Yam Thai (~10 chi nhánh)',
      'Forbes Vietnam 30 Under 30 (2016)',
      'Sáng lập Nghiện Nhà — cộng đồng 2.6 triệu thành viên',
    ],
    quotes: [
      {
        text: 'Tôi chưa bao giờ nhìn nhận sự thất bại, mà chỉ đơn giản là vấp ngã.',
        source: 'Báo Đầu tư',
        sourceUrl: 'https://baodautu.vn/ceo-nguyen-ha-linh-chu-he-thong-nha-hang-thai-koh-yam-khong-co-that-bai-chi-co-vap-nga-d89980.html',
      },
      {
        text: '80% anh chị chủ doanh nghiệp mà mình biết và ngưỡng mộ, họ có sự nhạy bén xuất sắc trong sales và marketing.',
        source: 'CafeF',
        sourceUrl: 'https://cafef.vn/nguyen-ha-linh-sang-lap-koh-yam-thai-chuoi-makeup-chu-nhuong-quyen-cong-ca-phe-nhung-khong-trang-diem-cung-chang-uong-ca-phe-quan-trong-la-biet-sales-va-marketing-20191219144543295.chn',
      },
      {
        text: 'Thị trường ngoài Bắc theo trào lưu rất nhanh, và quên trào lưu cũng rất nhanh. Cái khó là tạo ra một mô hình kinh doanh bền vững.',
        source: 'CafeF',
        sourceUrl: 'https://soha.vn/nguyen-ha-linh-sang-lap-koh-yam-thai-chuoi-makeup-chu-nhuong-quyen-cong-ca-phe-nhung-khong-trang-diem-cung-chang-uong-ca-phe-quan-trong-la-biet-sales-va-marketing-20191219155309982.htm',
      },
    ],
    advice: [
      {
        title: 'Sales & Marketing là kỹ năng sống còn',
        desc: 'Dù sản phẩm tốt đến đâu, không ai biết thì vô nghĩa. 80% chủ doanh nghiệp thành công giỏi sales & marketing.',
      },
      {
        title: 'Xây mô hình bền vững, không chạy theo trào lưu',
        desc: 'Bài học 7 tỷ từ Koh Samui — thị trường Việt theo trend nhanh nhưng quên cũng nhanh.',
      },
      {
        title: 'Nhân sự là gốc rễ thương hiệu',
        desc: 'F&B thành bại dựa vào đầu bếp và quản lý. Đối tác phải chung tư tưởng.',
      },
    ],
    links: [
      { label: 'Không có thất bại, chỉ có vấp ngã (Báo Đầu tư)', url: 'https://baodautu.vn/ceo-nguyen-ha-linh-chu-he-thong-nha-hang-thai-koh-yam-khong-co-that-bai-chi-co-vap-nga-d89980.html', type: 'article' },
      { label: 'Forbes 30U30: Tôi không nghĩ mình là cô gái triệu USD', url: 'https://halinh.vn/blogs/tren-bao-chi/nguyen-ha-linh-forbes-30-under-30-toi-khong-nghi-minh-la-co-gai-trieu-usd', type: 'article' },
    ],
    socials: [
      { platform: 'facebook', url: 'https://www.facebook.com/nguyenhalinh' },
      { platform: 'instagram', url: 'https://www.instagram.com/halinh.official1211/' },
      { platform: 'website', url: 'https://halinh.vn' },
    ],
  },

  {
    id: 'tran-nhat-quang',
    slug: 'tran-nhat-quang',
    name: 'Trần Nhật Quang',
    descriptor: 'Người tiên phong mô hình "từ nông trại đến tách" cà phê Arabica Việt Nam',
    photo: '/experts/tran-nhat-quang.webp',
    category: 'inspiration',
    tags: ['Cà phê', 'Local brand', 'Đà Lạt', 'Bền vững'],
    shortBio: 'Cựu giảng viên đại học, 30 tuổi khởi nghiệp cà phê. Sáng lập Là Việt Coffee — 18 cửa hàng, 100% nguyên liệu Việt Nam, xuất khẩu 6+ quốc gia.',
    fullBio: 'Trần Nhật Quang (sinh 1980) từng là giảng viên ngành du lịch tại Đại học Đà Lạt. Năm 2010, ở tuổi 30, anh bắt đầu tham gia dự án cà phê hữu cơ — thất bại năm 2013 vì thị trường chưa sẵn sàng.\n\nTháng 8/2013, anh thành lập Là Việt Coffee với lựa chọn "ngược chiều" — hạt Arabica khi 90%+ cà phê VN là Robusta. Sau 10+ năm, từ 1 người → 200+ nhân sự, 18 cửa hàng tại Đà Lạt, TP.HCM, Hà Nội, Quy Nhơn, Nha Trang. Phục vụ gần 1 triệu ly/năm, xuất khẩu Mỹ, Đức, Nhật Bản. Năm 2025, Là Việt được vinh danh Asia\'s Top 80 quán cà phê.',
    highlights: [
      'Tiên phong mô hình "farm-to-cup" đầu tiên tại Việt Nam (2013)',
      'Từ 1 người → 200+ nhân sự, 18 cửa hàng, xuất khẩu 6+ quốc gia',
      'Asia\'s Top 80 Coffee Shops (2025)',
      'Thu mua 200-300 tấn cà phê/năm từ nông hộ Đà Lạt',
    ],
    quotes: [
      {
        text: 'Tôi tin rằng khi làm ra giá trị đúng và phù hợp, đến một thời điểm thị trường sẽ cần tới giá trị đó.',
        source: 'VietnamNet',
        sourceUrl: 'https://vietnamnet.vn/la-viet-coffee-10-nam-kien-tri-voi-hat-arabica-ban-1-trieu-ly-ca-phe-moi-nam-2179264.html',
      },
      {
        text: 'Là Việt đơn giản là của Việt Nam.',
        source: 'Báo Pháp Luật Việt Nam',
        sourceUrl: 'https://baophapluat.vn/khat-vong-ca-phe-tay-nguyen-bai-2-triet-ly-kinh-doanh-dam-mau-sac-nhan-van-cua-ca-phe-la-viet-post528668.html',
      },
      {
        text: 'Không có cà phê đặc biệt, chỉ có những con người đặc biệt làm cà phê với cả lòng tận tâm.',
        source: 'Đại Biểu Nhân Dân',
        sourceUrl: 'https://daibieunhandan.vn/5-yeu-to-viet-nam-nhat-cua-la-viet-coffee-10349728.html',
      },
    ],
    advice: [
      {
        title: 'Kiên trì với giá trị đúng',
        desc: '5 năm đầu gần như không bán được, nhưng tin rằng thị trường sẽ cần sản phẩm tốt. Quá trình thuyết phục khách hàng mất 10 năm.',
      },
      {
        title: 'Không thỏa hiệp bản sắc thương hiệu',
        desc: 'Từ chối nhập thương hiệu nổi tiếng để bán kèm — "nếu làm vậy thì tên gọi Là Việt không còn ý nghĩa". 100% nguyên liệu Việt Nam.',
      },
      {
        title: 'Đầu tư vào cộng đồng nông dân',
        desc: 'Đào tạo kỹ thuật, cho mượn thiết bị, tổ chức thi "Cà phê ngon" hàng năm. Khi nông dân được giá trị tốt hơn, chuỗi cung ứng bền vững tự nhiên.',
      },
    ],
    links: [
      { label: '10 năm kiên trì với hạt Arabica (VietnamNet)', url: 'https://vietnamnet.vn/la-viet-coffee-10-nam-kien-tri-voi-hat-arabica-ban-1-trieu-ly-ca-phe-moi-nam-2179264.html', type: 'article' },
      { label: 'Triết lý kinh doanh nhân văn (Báo Pháp Luật)', url: 'https://baophapluat.vn/khat-vong-ca-phe-tay-nguyen-bai-2-triet-ly-kinh-doanh-dam-mau-sac-nhan-van-cua-ca-phe-la-viet-post528668.html', type: 'article' },
      { label: 'LOCO Podcast — Ly cà phê tạo nên sự an tâm (Vietcetera)', url: 'https://vietcetera.com/vn/podcast/loco/1-tran-nhat-quang-founder-la-viet-coffee-ly-ca-phe-tao-nen-su-an-tam', type: 'podcast' },
    ],
    socials: [
      { platform: 'website', url: 'https://laviet.coffee' },
      { platform: 'facebook', url: 'https://facebook.com/coffeelaviet/' },
      { platform: 'instagram', url: 'https://instagram.com/lavietcoffee/' },
    ],
  },

  {
    id: 'nguyen-hai-ninh',
    slug: 'nguyen-hai-ninh',
    name: 'Nguyễn Hải Ninh',
    descriptor: '"Nhà khởi nghiệp nối tiếp" — từ Urban Station đến The Coffee House, M Village và Every Half',
    photo: '/experts/nguyen-hai-ninh.webp',
    category: 'inspiration',
    tags: ['Serial Entrepreneur', 'Cà phê', 'Startup', 'Forbes 30U30'],
    shortBio: 'Serial entrepreneur: Urban Station (60+ quán) → The Coffee House (175 quán, 800 tỷ doanh thu) → M Village → Every Half. Forbes 30 Under 30 Asia.',
    fullBio: 'Nguyễn Hải Ninh (sinh 1987) tốt nghiệp ngành Hóa, ĐH Bách Khoa TP.HCM. Sau chương trình Management Trainee tại PepsiCo, anh bắt đầu hành trình khởi nghiệp.\n\nNăm 2011, đồng sáng lập Urban Station — nhanh chóng mở 60+ cửa hàng. Năm 2014, rời đi để sáng lập The Coffee House với triết lý "cà phê cộng đồng" — 175 cửa hàng, ~800 tỷ VNĐ doanh thu (2019), Forbes 30 Under 30 Asia. Rời TCH năm 2021, anh tiếp tục với M Village (co-living, $10M từ Trip.com) và Every Half Coffee Roasters ($3M Pre-Series A, 14+ cửa hàng).',
    highlights: [
      '4 ventures trong 14 năm: Urban Station, The Coffee House, M Village, Every Half',
      'The Coffee House: 175 cửa hàng, ~800 tỷ doanh thu, Forbes 30 Under 30 Asia (2019)',
      'Every Half: $3M Pre-Series A (2025), xuất khẩu cà phê Robusta đặc sản sang Bắc Mỹ',
      'M Village: $10M từ Trip.com, 100 tỷ VNĐ vay không tài sản đảm bảo từ OCB',
    ],
    quotes: [
      {
        text: 'Tôi từ bùn đen đi lên, học trái ngành, không biết gì về cà phê.',
        source: 'CafeBiz',
        sourceUrl: 'https://cafebiz.vn/ceo-the-coffee-house-nguyen-hai-ninh-toi-tu-bun-den-di-len-hoc-trai-nganh-khong-biet-gi-ve-ca-phe-khong-nhuong-quyen-vi-so-trao-con-cho-nguoi-khac-20181103012337456.chn',
      },
      {
        text: 'Chúng tôi không nhượng quyền vì sợ trao "con" cho người khác.',
        source: 'CafeBiz',
        sourceUrl: 'https://cafebiz.vn/ceo-the-coffee-house-nguyen-hai-ninh-toi-tu-bun-den-di-len-hoc-trai-nganh-khong-biet-gi-ve-ca-phe-khong-nhuong-quyen-vi-so-trao-con-cho-nguoi-khac-20181103012337456.chn',
      },
      {
        text: 'Trước khi tiền vào túi bạn thì hóa đơn sẽ tới.',
        source: 'YBOX',
        sourceUrl: 'https://ybox.vn/ky-nang/ceo-the-coffee-house-nguyen-hai-ninh-chia-se-muon-khoi-nghiep-can-it-nhat-3-yeu-to-5c0778d60343425bc80c0a3e',
      },
      {
        text: 'Gọi vốn là hệ quả, không phải mục tiêu.',
        source: 'CafeF',
        sourceUrl: 'https://cafef.vn/lan-thu-4-khoi-nghiep-dai-thang-cua-nguyen-hai-ninh-nha-sang-lap-the-coffee-house-188250531081050461.chn',
      },
    ],
    advice: [
      {
        title: '3 yếu tố khởi nghiệp: Đam mê, Thế mạnh, Xã hội cần',
        desc: 'Muốn khởi nghiệp cần ít nhất 3 yếu tố: đam mê, làm đúng thế mạnh, và thế mạnh đó phải là cái xã hội đang cần.',
      },
      {
        title: 'Hóa đơn đến trước doanh thu',
        desc: 'Chuẩn bị tinh thần và tài chính — đừng thấy hào quang người khác mà bỏ qua thực tế.',
      },
      {
        title: 'Gọi vốn là hệ quả',
        desc: 'Giải quyết vấn đề thật cho đúng nhóm người, xây hệ thống, học nhanh — nhà đầu tư tự tìm đến.',
      },
    ],
    links: [
      { label: 'Lần thứ 4 khởi nghiệp đại thắng (CafeF)', url: 'https://cafef.vn/lan-thu-4-khoi-nghiep-dai-thang-cua-nguyen-hai-ninh-nha-sang-lap-the-coffee-house-188250531081050461.chn', type: 'article' },
      { label: 'Tôi từ bùn đen đi lên (CafeBiz)', url: 'https://cafebiz.vn/ceo-the-coffee-house-nguyen-hai-ninh-toi-tu-bun-den-di-len-hoc-trai-nganh-khong-biet-gi-ve-ca-phe-khong-nhuong-quyen-vi-so-trao-con-cho-nguoi-khac-20181103012337456.chn', type: 'article' },
      { label: 'How I Manage — Promoting Vietnam coffee (Vietcetera)', url: 'https://vietcetera.com/en/how-i-manage-nguyen-hai-ninh-on-promoting-vietnams-coffee-quality', type: 'article' },
    ],
    socials: [
      { platform: 'instagram', url: 'https://www.instagram.com/haininh.nguyen/' },
    ],
  },

  {
    id: 'nguyen-trung-dung',
    slug: 'nguyen-trung-dung',
    name: 'Nguyễn Trung Dũng',
    descriptor: '"Ông trùm gia vị Việt" — khởi nghiệp tuổi 50, 3 lần thất bại, xây đế chế gia vị tự nhiên',
    photo: '/experts/nguyen-trung-dung.webp',
    category: 'inspiration',
    tags: ['Gia vị', 'Khởi nghiệp muộn', 'Xuất khẩu', 'Bootstrap'],
    shortBio: 'Khởi nghiệp tuổi 50 sau 30 năm ở châu Âu và 3 lần thất bại. Sáng lập Dh Foods — gia vị tự nhiên, tăng trưởng 50%/năm, xuất khẩu 20+ quốc gia. Chưa bao giờ vay ngân hàng.',
    fullBio: 'Nguyễn Trung Dũng (sinh 1963) rời Việt Nam sang Ba Lan du học từ 1989. Suốt 30 năm ở châu Âu, ông trải qua 3 lần khởi nghiệp — từ buôn mì gói đến chế biến thực phẩm — cả 3 đều thất bại. Năm 2010, gần 50 tuổi, ông trở về Việt Nam gần như tay trắng.\n\nTháng 10/2012, với 1,2 tỷ đồng, ông thành lập Dh Foods — 100% gia vị tự nhiên, không phẩm màu, không bảo quản. Sau giai đoạn "đốt tiền" ban đầu, công ty đạt tăng trưởng 50%/năm suốt 6 năm. Hiện 100+ sản phẩm, phủ siêu thị lớn, xuất khẩu Mỹ, Nhật, Đức, Hàn Quốc, Úc.',
    highlights: [
      '3 lần khởi nghiệp thất bại trước tuổi 50',
      'Bootstrap hoàn toàn từ 1,2 tỷ VNĐ — chưa bao giờ vay ngân hàng',
      'Tăng trưởng 50%/năm liên tục 6 năm, xuất khẩu 20+ quốc gia',
      'Đạt "Hàng Việt Nam Chất Lượng Cao" 2 năm liên tiếp (2023-2024)',
    ],
    quotes: [
      {
        text: 'Nếu muốn giàu nhanh thì đừng khởi nghiệp, bởi chỉ có 5% startup trên thế giới là thành công.',
        source: 'Báo Pháp Luật',
        sourceUrl: 'https://doanhnhan.baophapluat.vn/ceo-dh-foods-ong-trum-gia-vi-viet-khoi-nghiep-o-tuoi-50-doanh-nghiep-tang-truong-50-bat-chap-dai-dich-43148.html',
      },
      {
        text: 'Việt Nam hãy là nhà bếp của thế giới... Dh Foods mong muốn trở thành góc gia vị trong nhà bếp đó.',
        source: 'CafeBiz',
        sourceUrl: 'https://cafebiz.vn/chan-dung-ceo-dh-foods-trieu-phu-my-goi-tren-dat-ba-lan-tay-trang-hoi-huong-tuoi-50-vi-tieng-goi-tinh-yeu-dung-de-che-gia-vi-dac-san-thuan-viet-20210531182546149.chn',
      },
      {
        text: 'Không phải doanh thu, mà là niềm tin của người tiêu dùng.',
        source: 'Báo Đầu tư',
        sourceUrl: 'https://baodautu.vn/doanh-nhan-nguyen-trung-dung-sang-lap-va-ceo-cua-dh-foods-tu-hu-gia-vi-nho-den-khat-vong-lon-d410892.html',
      },
      {
        text: 'Với tôi, ngày nào đi làm cũng thấy vui, dòng tiền ổn định, lương và hóa đơn trả đúng hạn, còn mong gì hơn.',
        source: 'CafeF',
        sourceUrl: 'https://cafef.vn/ong-trum-gia-vi-viet-khoi-nghiep-thanh-bai-o-von-va-cach-van-hanh-voi-12-ty-dong-ban-dau-den-nay-van-chua-phai-di-vay-ngan-hang-mot-dong-188240502135308949.chn',
      },
    ],
    advice: [
      {
        title: 'Đừng đầu tư tài sản cố định khi mới khởi nghiệp',
        desc: 'Outsource sản xuất, kho bãi, logistics. Tập trung vốn vào sản phẩm, marketing và bán hàng.',
      },
      {
        title: 'Kiên trì giữ chất lượng, đừng chạy đua giá',
        desc: 'Người tiêu dùng xứng đáng được dùng sản phẩm sạch, tự nhiên — đó mới là lợi thế cạnh tranh bền vững.',
      },
      {
        title: 'Khởi nghiệp ở tuổi nào cũng được',
        desc: 'Tuổi 50 có lợi thế là bớt hiếu thắng, bớt ham giàu nhanh, biết kiên nhẫn và chấp nhận đi chậm để đi xa.',
      },
    ],
    links: [
      { label: 'Khởi nghiệp ở tuổi 50 (Báo Đầu tư)', url: 'https://baodautu.vn/chuyen-khoi-nghiep-o-tuoi-50-cua-ong-trum-gia-vi-dh-foods-m140487.html', type: 'article' },
      { label: 'Triệu phú mỳ gói tay trắng hồi hương (CafeBiz)', url: 'https://cafebiz.vn/chan-dung-ceo-dh-foods-trieu-phu-my-goi-tren-dat-ba-lan-tay-trang-hoi-huong-tuoi-50-vi-tieng-goi-tinh-yeu-dung-de-che-gia-vi-dac-san-thuan-viet-20210531182546149.chn', type: 'article' },
      { label: 'Dh Foods tại Expo West 2025 (VietnamNet)', url: 'https://vietnamnet.vn/expo-west-2025-dh-foods-gay-an-tuong-voi-dong-gia-vi-viet-2378322.html', type: 'article' },
    ],
    socials: [
      { platform: 'website', url: 'https://www.dhfoods.com.vn' },
      { platform: 'linkedin', url: 'https://vn.linkedin.com/company/dh-foods-jsc' },
    ],
  },

  {
    id: 'ly-quy-trung',
    slug: 'ly-quy-trung',
    name: 'Lý Quý Trung',
    descriptor: '"Cha đẻ Phở 24" — người tiên phong nhượng quyền F&B Việt Nam, tác giả 10 cuốn sách kinh doanh',
    photo: '/experts/ly-quy-trung.webp',
    category: 'inspiration',
    tags: ['Nhượng quyền', 'Phở', 'Tác giả', 'Giáo dục'],
    shortBio: 'Sáng lập Phở 24 (2003) — chuỗi phở nhượng quyền đầu tiên, 70+ cửa hàng, bán lại $20 triệu USD (2011). Tác giả 10 cuốn sách. Giáo sư Đại học Western Sydney.',
    fullBio: 'Lý Quý Trung (sinh 1966, Sài Gòn) xuất thân gia đình doanh nhân — mẹ là chủ nhà hàng Thanh Niên hoạt động hơn 30 năm tại Quận 1. Năm 1985, thi rớt đại học, ông bắt đầu từ nhân viên lau sàn, dọn vệ sinh tại Khách sạn Đệ Nhất (Equatorial). Một vị khách nước ngoài nhìn thấy sự chăm chỉ, tài trợ du học Úc.\n\nTốt nghiệp Thạc sĩ Du lịch (Griffith University) và Tiến sĩ Quản trị Kinh doanh, ông trở về Việt Nam đồng sáng lập Nam An Group với các thương hiệu ẩm thực cao cấp. Năm 2003, ông mở Phở 24 — tiệm phở máy lạnh đầu tiên tại Việt Nam, tiên phong mô hình nhượng quyền F&B. Chuỗi mở rộng 70+ cửa hàng, có mặt tại Indonesia, Philippines, Hàn Quốc, Nhật Bản, Úc. Năm 2011, bán Phở 24 cho Việt Thái Quốc Tế với giá $20 triệu USD.\n\nÔng cũng thẳng thắn chia sẻ hàng loạt thất bại: Jazz Club, Gloria Jean\'s Coffee, Yogen Fruz, nhà hàng tại Singapore và Thái Lan. Hiện ông là Giáo sư Đại học Western Sydney và sáng lập Viện Doanh nhân LQT.',
    highlights: [
      'Sáng lập Phở 24 (2003) — chuỗi phở nhượng quyền đầu tiên Việt Nam, 70+ cửa hàng',
      'Bán Phở 24 với giá $20 triệu USD (2011) — thương vụ F&B lớn nhất thời điểm đó',
      'Tác giả 10 cuốn sách về kinh doanh & khởi nghiệp (NXB Trẻ)',
      'Giáo sư Đại học Western Sydney (Úc) từ 2016',
    ],
    quotes: [
      {
        text: 'Làm F&B, cuối ngày ngồi cộng sổ có lãi là mừng.',
        source: 'CafeF',
        sourceUrl: 'https://cafef.vn/cha-de-pho-24-ly-quy-trung-va-nhung-that-bai-dau-don-khi-khoi-nghiep-fb-quan-dong-chua-chac-da-loi-cuoi-ngay-ngoi-cong-so-co-lai-la-mung-2019052007401939.chn',
      },
      {
        text: 'Sai lầm dạy bạn rất nhiều. Thành công dạy bạn rất ít. Thành công sẽ đi qua nhưng sai lầm thì ở lại.',
        source: 'VnExpress',
        sourceUrl: 'https://vnexpress.net/tac-gia/ly-qui-trung-1241.html',
      },
      {
        text: 'Đừng lạm dụng câu nói "thất bại là mẹ thành công". Hãy tránh thất bại bất cứ khi nào có thể.',
        source: 'CafeF',
        sourceUrl: 'https://cafef.vn/cha-de-pho-24-ly-quy-trung-va-nhung-that-bai-dau-don-khi-khoi-nghiep-fb-quan-dong-chua-chac-da-loi-cuoi-ngay-ngoi-cong-so-co-lai-la-mung-2019052007401939.chn',
      },
    ],
    advice: [
      {
        title: 'Quán đông chưa chắc đã lời',
        desc: 'Doanh thu cao không có nghĩa là lãi. Phải kiểm soát chi phí vận hành từng ngày, cuối ngày cộng sổ có lãi mới là mừng.',
      },
      {
        title: 'Học bằng tiền người khác trước',
        desc: 'Nếu chưa có kinh nghiệm, hãy đi làm thuê trước. Học với tiền của người khác rồi hãy mạo hiểm với tiền mình.',
      },
      {
        title: 'Vị trí quyết định sống còn',
        desc: 'Nhà hàng đẹp cỡ nào đặt sai chỗ cũng thất bại. Nhiều thất bại của tôi đều vì chọn sai địa điểm.',
      },
    ],
    links: [
      { label: 'Những thất bại đau đớn khi khởi nghiệp F&B (CafeF)', url: 'https://cafef.vn/cha-de-pho-24-ly-quy-trung-va-nhung-that-bai-dau-don-khi-khoi-nghiep-fb-quan-dong-chua-chac-da-loi-cuoi-ngay-ngoi-cong-so-co-lai-la-mung-2019052007401939.chn', type: 'article' },
      { label: '20 năm thăng trầm của Phở 24 (CafeBiz)', url: 'https://cafebiz.vn/20-nam-thang-tram-cua-pho-24-tu-tiem-pho-may-lanh-dau-tien-thanh-chuoi-70-cua-hang-vuon-toi-uc-nhat-han-hoa-con-ghe-bi-dun-qua-day-lai-176230512140530604.chn', type: 'article' },
      { label: 'Sách "Chỉ có niềm đam mê" (Tiki)', url: 'https://tiki.vn/author/ly-qui-trung.html', type: 'article' },
    ],
    socials: [
      { platform: 'website', url: 'https://lqt.edu.vn' },
    ],
  },

  {
    id: 'hoang-tung',
    slug: 'hoang-tung',
    name: 'Hoàng Tùng',
    descriptor: '"Mr Pizza" — ông chủ Việt của chuỗi Pizza Home, nhà sáng tạo nội dung F&B thực chiến',
    photo: '/experts/hoang-tung.webp',
    category: 'inspiration',
    tags: ['Pizza', 'Chuỗi F&B', 'Khởi nghiệp', 'Content Creator'],
    shortBio: 'Gần 10 lần khởi nghiệp, 3 lần thất bại. Sáng lập Pizza Home (~20 cửa hàng), Mr Lẩu, Cloud Cook. Burger Corona lên CNN, BBC. Nhà phân tích F&B trên Brands Vietnam.',
    fullBio: 'Hoàng Tùng (sinh 1981, Hà Nội) tốt nghiệp ĐH Ngoại ngữ và ĐH KHXH&NV, khởi nghiệp từ thời sinh viên với công ty dịch thuật — thất bại. Năm 2006, mở nhà hàng Viet Kitchen tại 24 Bà Triệu, doanh thu 500 triệu/tháng nhưng mâu thuẫn cổ đông khiến ông phải rút vốn.\n\nNăm 2013, ông sáng lập Pizza Home với triết lý "Nhanh - Ngon - Sạch" — pizza giá phải chăng, hương vị Việt hóa. Chuỗi mở rộng ~20 cửa hàng tại Hà Nội. Năm 2020, sáng tạo "Burger Corona" được CNN, BBC, Reuters đưa tin toàn cầu. Ngoài Pizza Home, ông còn sáng lập Mr Lẩu (lẩu giao tận nhà) và Cloud Cook (bếp trên mây).\n\nHoàng Tùng cũng là cây viết phân tích F&B nổi tiếng trên Brands Vietnam và Spiderum, thường xuyên chia sẻ case study thực chiến.',
    highlights: [
      'Sáng lập Pizza Home (2013) — ~20 cửa hàng tại Hà Nội',
      'Burger Corona (2020) — được CNN, BBC, Reuters, Le Figaro đưa tin',
      'Sáng lập thêm Mr Lẩu và Cloud Cook (bếp trên mây)',
      'Cây viết phân tích F&B thực chiến trên Brands Vietnam & Spiderum',
    ],
    quotes: [
      {
        text: 'Càng cố gắng thì càng may mắn.',
        source: 'CafeF',
        sourceUrl: 'https://cafef.vn/ceo-pizza-home-hoang-tung-cang-co-gang-thi-cang-may-man-20220122192946346.chn',
      },
      {
        text: 'Trong mọi cuộc khủng hoảng đều có cơ hội. Chuẩn bị cho rủi ro không bao giờ là thừa.',
        source: 'TheLEADER',
        sourceUrl: 'https://theleader.vn/6-bai-hoc-xu-ly-khung-hoang-truyen-thong-cua-ong-chu-pizza-home-1616405004126.htm',
      },
      {
        text: 'Đừng đối lập bán online với bán tại quán — cả hai đều có thể bổ trợ cho nhau.',
        source: 'Brands Vietnam',
        sourceUrl: 'https://www.brandsvietnam.com/congdong/topic/6494-Thu-giai-ma-chuoi-F-B-va-cong-thuc-chien-thang',
      },
    ],
    advice: [
      {
        title: 'CẮT - GIẢM - TĂNG trong khủng hoảng',
        desc: 'Cắt chi nhánh lỗ, giảm chi phí thuê/logistics, tăng đầu tư R&D sản phẩm mới. Chiến lược giúp Pizza Home sống sót qua COVID.',
      },
      {
        title: 'Phải toàn tâm toàn ý',
        desc: 'Khởi nghiệp không thể làm nửa vời. Full-time commitment là điều kiện tiên quyết, đừng tuyển quá nhiều co-founder.',
      },
      {
        title: 'Biến khủng hoảng thành cơ hội truyền thông',
        desc: 'Burger Corona ra đời giữa đại dịch — biến tin xấu thành câu chuyện thương hiệu được báo chí quốc tế đưa tin.',
      },
    ],
    links: [
      { label: 'Càng cố gắng thì càng may mắn (CafeF)', url: 'https://cafef.vn/ceo-pizza-home-hoang-tung-cang-co-gang-thi-cang-may-man-20220122192946346.chn', type: 'article' },
      { label: '3 lần khởi nghiệp thất bại (VietnamNet)', url: 'https://vietnamnet.vn/3-lan-khoi-nghiep-that-bai-cua-ong-chu-chuoi-cua-hang-pizza-792121.html', type: 'article' },
      { label: 'Giải mã chuỗi F&B và công thức chiến thắng (Brands Vietnam)', url: 'https://www.brandsvietnam.com/congdong/topic/6494-Thu-giai-ma-chuoi-F-B-va-cong-thuc-chien-thang', type: 'article' },
    ],
    socials: [
      { platform: 'tiktok', url: 'https://www.tiktok.com/@tungpiz' },
      { platform: 'website', url: 'https://pizzahome.vn' },
    ],
  },
  {
    id: 'yosuke-masuko',
    slug: 'yosuke-masuko',
    name: 'Yosuke Masuko',
    descriptor: 'Tự học làm phô mai từ YouTube, biến tiệc pizza sân sau thành chuỗi 40+ nhà hàng tại 5 quốc gia',
    photo: '/experts/yosuke-masuko.webp',
    category: 'inspiration',
    tags: ['Farm-to-table', 'Pizza', 'Chuỗi quốc tế', 'Bền vững'],
    shortBio: 'Đồng sáng lập & CEO Pizza 4P\'s. Từ 5 chiếc bàn nhỏ ở Quận 1 (2011) đến 40+ nhà hàng tại Việt Nam, Campuchia, Nhật Bản, Ấn Độ, Indonesia. Tự tay làm mozzarella, xưởng phô mai riêng tại Đà Lạt.',
    fullBio: 'Yosuke Masuko (sinh tại Nhật Bản) từng làm việc tại CyberAgent Ventures. Năm 2008, chuyển đến Hà Nội để mở văn phòng đầu tư. Trong thời gian sống tại Việt Nam, vợ chồng anh — Masuko và Sanae Takasugi — bắt đầu tổ chức tiệc pizza sân sau mỗi cuối tuần. Tiệc đông đến mức bạn bè khuyên mở nhà hàng.\n\nThách thức lớn nhất: phô mai mozzarella tươi gần như không có ở Việt Nam. Masuko tự học làm phô mai từ YouTube, thử sữa từ hơn 25 nguồn khác nhau. Năm 2011, với $100.000 tiền tiết kiệm, cặp đôi mở Pizza 4P\'s đầu tiên tại Lê Thánh Tôn, Quận 1 — chỉ 4-5 bàn nhỏ.\n\nSau 14 năm: 40+ nhà hàng tại 5 quốc gia, xưởng phô mai riêng tại Đơn Dương (Đà Lạt) sản xuất 1.500-2.000 viên burrata và 2.000-3.000 viên mozzarella mỗi ngày. Năm 2023, lợi nhuận sau thuế đạt 115 tỷ VNĐ. Năm 2025, mở rộng sang New York (Mỹ).',
    highlights: [
      'Từ 5 bàn nhỏ ($100K, 2011) → 40+ nhà hàng tại 5 quốc gia',
      'Tự học làm mozzarella từ YouTube — biến hạn chế thành lợi thế cạnh tranh',
      'Xưởng phô mai Đà Lạt: 2.000+ viên burrata/ngày, xuất khẩu',
      'Lợi nhuận sau thuế 115 tỷ VNĐ (2023), tăng trưởng 38%',
    ],
    quotes: [
      {
        text: 'Đừng lên thuyền nếu chưa biết đi đâu. Nếu đích đến không rõ ràng, chúng tôi sẽ không rời bến.',
        source: 'Vietcetera',
        sourceUrl: 'https://vietcetera.com/en/pizza-4ps-yosuke-masuko-on-the-question-what-is-happiness',
      },
      {
        text: 'Nếu pizza có thể giúp tôi thực hiện sứ mệnh cá nhân — "Làm thế giới mỉm cười vì hòa bình" — tôi sẽ dồn toàn bộ năng lượng vào đó.',
        source: 'Vietcetera',
        sourceUrl: 'https://vietcetera.com/en/pizza-4ps-yosuke-masuko-on-the-question-what-is-happiness',
      },
      {
        text: 'Tôi không thể nhấn mạnh đủ việc hiểu chính mình quan trọng đến thế nào. Hãy đào sâu vào bản thân — bạn là ai, bạn đam mê điều gì.',
        source: 'Vietcetera',
        sourceUrl: 'https://vietcetera.com/en/who-am-i-finding-your-true-north-with-yosuke-masuko-and-sanae-takasugi',
      },
    ],
    advice: [
      {
        title: 'Bắt đầu từ đam mê, không phải kế hoạch kinh doanh',
        desc: 'Pizza 4P\'s bắt đầu từ những buổi tiệc sân sau — tình yêu thật sự với sản phẩm, không phải phân tích thị trường.',
      },
      {
        title: 'Biến hạn chế thành lợi thế cạnh tranh',
        desc: 'Không có mozzarella tươi? Tự học làm. Hạn chế đó trở thành điều không đối thủ nào bắt chước được.',
      },
      {
        title: 'Bền vững là chiến lược kinh doanh, không phải chi phí',
        desc: 'Nhà hàng zero-waste, phô mai tự sản xuất, farm-to-table — vừa giảm chi phí, vừa tạo khác biệt, vừa xây lòng trung thành.',
      },
    ],
    links: [
      { label: 'Pizza 4P\'s: Từ tiệc sân sau đến đế chế pizza (Backscoop)', url: 'https://www.backscoop.com/newsletter-posts/pizza-4ps-the-couple-who-turned-backyard-pizza-parties-into-a-pizza-empire', type: 'article' },
      { label: 'Hạnh phúc là gì? (Vietcetera)', url: 'https://vietcetera.com/en/pizza-4ps-yosuke-masuko-on-the-question-what-is-happiness', type: 'article' },
      { label: 'Pizza 4P\'s vươn ra thế giới (VIR)', url: 'https://vir.com.vn/from-vietnam-to-the-world-pizza-4ps-global-journey-145300.html', type: 'article' },
    ],
    socials: [
      { platform: 'linkedin', url: 'https://in.linkedin.com/in/masuko-y-331aa98' },
      { platform: 'instagram', url: 'https://www.instagram.com/masuko_yoo/' },
      { platform: 'website', url: 'https://pizza4ps.com' },
    ],
  },

  {
    id: 'taku-tanaka',
    slug: 'taku-tanaka',
    name: 'Taku Tanaka',
    descriptor: 'Cựu COO Pizza 4P\'s, xây nền tảng mua nguyên liệu B2B đầu tiên cho nhà hàng Việt Nam',
    photo: '/experts/taku-tanaka.webp',
    category: 'inspiration',
    tags: ['Supply Chain', 'Startup', 'B2B', 'Forbes Asia'],
    shortBio: 'Cựu COO Pizza 4P\'s → sáng lập KAMEREO (2018) — nền tảng mua nguyên liệu B2B đầu tiên tại VN. Phục vụ 3.000+ nhà hàng, huy động $15M+. Forbes Asia 100 to Watch 2025.',
    fullBio: 'Taku Tanaka (sinh 1989, Nhật Bản) tốt nghiệp Đại học Keio, từng làm chuyên viên phân tích cổ phiếu tại Credit Suisse Tokyo. Năm 2015, anh gia nhập Pizza 4P\'s với vai trò COO — trong 3 năm, chuỗi mở rộng từ 1 lên 10 cửa hàng.\n\nChính tại Pizza 4P\'s, anh chứng kiến sự hỗn loạn của khâu mua nguyên liệu: mỗi nhân viên mua hàng dùng công cụ khác nhau, không có hệ thống, giá cả không minh bạch. Năm 2018, anh đồng sáng lập KAMEREO — nền tảng B2B đầu tiên kết nối nhà hàng với nông dân và nhà cung cấp.\n\nSau khi pivot từ mô hình SaaS (thất bại) sang mô hình thương mại điện tử B2B trọn gói, KAMEREO tăng trưởng 15%/tháng liên tục 12 tháng. Hiện phục vụ 3.000+ doanh nghiệp F&B, hợp tác 100+ nông dân, 16.000+ SKU. Forbes Asia 100 to Watch 2025.',
    highlights: [
      'Cựu COO Pizza 4P\'s — mở rộng từ 1 lên 10 cửa hàng trong 3 năm',
      'Sáng lập KAMEREO (2018) — nền tảng B2B food sourcing đầu tiên tại VN',
      'Huy động tổng $15M+, phục vụ 3.000+ nhà hàng, 100+ nông dân',
      'Forbes Asia 100 to Watch 2025',
    ],
    quotes: [
      {
        text: 'Bộ phận mua hàng không hoạt động hiệu quả vì quy trình mua hàng quá hỗn loạn. Mỗi người mua dùng một công cụ khác nhau để liên lạc nhà cung cấp.',
        source: 'Vietcetera',
        sourceUrl: 'https://vietcetera.com/en/tech-solutions-for-restaurants-with-kamereos-taku-tanaka-vni-ep20-recap',
      },
      {
        text: 'Ở thị trường nhạy cảm về giá như Việt Nam, chỉ cạnh tranh bằng giá là thua cuộc.',
        source: 'Genesia Ventures',
        sourceUrl: 'https://www.genesiaventures.com/en/orbit-workshop-02/',
      },
      {
        text: 'Bạn không thể kiểm soát người khác, nhưng bạn có thể cố gắng kiểm soát chính mình.',
        source: 'Vietcetera',
        sourceUrl: 'https://vietcetera.com/en/how-i-manage-kamereos-ceo-taku-tanaka',
      },
    ],
    advice: [
      {
        title: 'Đừng mua nguyên liệu kiểu "chợ búa"',
        desc: 'Mỗi ngày chạy ra chợ, gọi 5-6 nhà cung cấp, không so giá — tốn thời gian, sai sót, và mất quyền thương lượng.',
      },
      {
        title: 'Biên lợi nhuận lành mạnh quan trọng hơn doanh thu',
        desc: 'Dòng tiền ổn định, biên lợi nhuận khỏe, tuân thủ kỷ luật tài chính — đó mới là nền tảng bền vững.',
      },
      {
        title: 'Mô hình đầu tiên thất bại? Pivot nhanh',
        desc: 'KAMEREO ban đầu là SaaS — chỉ kết nối mà không tạo giá trị. Pivot sang mô hình trọn gói mới thành công.',
      },
    ],
    links: [
      { label: 'KAMEREO huy động $7.8M Series B (TNGlobal)', url: 'https://technode.global/2024/12/09/vietnams-kamereo-secures-7-8m-series-b-funding-to-accelerate-growth/', type: 'article' },
      { label: 'Giải pháp công nghệ cho nhà hàng (Vietcetera)', url: 'https://vietcetera.com/en/tech-solutions-for-restaurants-with-kamereos-taku-tanaka-vni-ep20-recap', type: 'article' },
      { label: 'How I Manage — Taku Tanaka (Vietcetera)', url: 'https://vietcetera.com/en/how-i-manage-kamereos-ceo-taku-tanaka', type: 'article' },
    ],
    socials: [
      { platform: 'linkedin', url: 'https://www.linkedin.com/in/taku-tanaka-98876033/' },
      { platform: 'website', url: 'https://kamereo.vn' },
    ],
  },

  {
    id: 'summer-le',
    slug: 'summer-le',
    name: 'Summer Lê',
    descriptor: 'Đầu bếp đạt Sao xanh Michelin đầu tiên tại Việt Nam, tiên phong ẩm thực bền vững với 99% nguyên liệu địa phương',
    photo: '/experts/summer-le.webp',
    category: 'inspiration',
    tags: ['Michelin', 'Bền vững', 'Đà Nẵng', 'Farm-to-table'],
    shortBio: 'Sáng lập & Bếp trưởng nhà hàng Nén — Sao xanh Michelin đầu tiên và duy nhất tại Việt Nam. Từ food blogger → đầu bếp, 99% nguyên liệu địa phương. Mở Nén Tokyo (2025).',
    fullBio: 'Lê Hạ Uyên (Summer Lê) lớn lên tại Đà Nẵng, du học Nhật Bản (Đại học Ritsumeikan APU) và Úc (ANU). Năm cuối đại học, cô lập blog ẩm thực "Danang Cuisine" bằng tiếng Anh — muốn có một giọng nói Việt Nam kể về ẩm thực quê hương.\n\nTừ blog → food tour → nhà hàng. Năm 2017, cô cùng chồng sáng lập Nén Đà Nẵng với concept "Sto:ry Menu" — thực đơn tasting kể câu chuyện văn hóa Việt qua từng món. 99% nguyên liệu hyper-local, 30% đến từ Nén Farm ngay đối diện nhà hàng.\n\nNăm 2022, mở Nén Light Sài Gòn. Tháng 6/2024, Nén Đà Nẵng nhận Sao xanh Michelin đầu tiên và duy nhất tại Việt Nam — vinh danh cam kết bền vững. Tháng 9/2025, mở Nén Tokyo tại Daikanyama — nhà hàng fine dining Việt đầu tiên tại Nhật.',
    highlights: [
      'Sao xanh Michelin đầu tiên và duy nhất tại Việt Nam (2024, giữ 2025)',
      'Từ food blogger → đầu bếp Michelin, không qua đào tạo bếp chính quy',
      '99% nguyên liệu hyper-local, Nén Farm cung cấp 30% nguyên liệu',
      'Mở rộng: Nén Đà Nẵng (2017), Nén Light Sài Gòn (2022), Nén Tokyo (2025)',
    ],
    quotes: [
      {
        text: 'Ẩm thực muốn có sức mạnh nội tại thì phải dùng nguyên liệu của chính vùng đất đó. Chúng ta phải tin rằng ẩm thực của mình là "top-notch" — khi đó mới đầu tư phát triển nó.',
        source: 'Tuổi Trẻ News',
        sourceUrl: 'https://tuoitrenews.vn/news/features/20241020/introducing-chef-summer-le-and-the-strength-found-within-vietnamese-cuisine/82475.html',
      },
      {
        text: 'Ẩm thực có khả năng chạm đến những cảm xúc sâu thẳm nhất của một con người.',
        source: 'Robb Report Vietnam',
        sourceUrl: 'https://dev.robbreport.com.vn/ca-phe-sang-summer-le-am-thuc-co-kha-nang-cham-den-nhung-cam-xuc-sau-tham-nhat-cua-mot-con-nguoi/',
      },
      {
        text: 'Sống bền vững là trong máu người Việt Nam. Ông bà tôi, như bao thế hệ trước, luôn sống tiết kiệm, hài hòa với thiên nhiên.',
        source: 'Michelin Guide',
        sourceUrl: 'https://guide.michelin.com/en/da-nang-region/da-nang_2984390/restaurant/nen-danang',
      },
    ],
    advice: [
      {
        title: 'Bền vững không đắt — đó là di sản Việt Nam',
        desc: 'Ông bà ta luôn sống bền vững mà không cần gọi tên. Dùng nguyên liệu địa phương, tôn trọng mùa vụ, hạn chế lãng phí — vừa giảm chi phí vừa tạo khác biệt.',
      },
      {
        title: 'Hãy kể câu chuyện, đừng chỉ phục vụ đồ ăn',
        desc: 'Sto:ry Menu biến bữa ăn thành trải nghiệm văn hóa, cho phép định giá premium và tạo ấn tượng khó quên.',
      },
      {
        title: 'Tin vào sức mạnh ẩm thực Việt',
        desc: 'Đừng bắt chước nước ngoài. Đầu tư hiểu sâu nguyên liệu và kỹ thuật bản địa — đó mới là lợi thế cạnh tranh thật sự.',
      },
    ],
    links: [
      { label: 'Sức mạnh ẩm thực Việt Nam (Tuổi Trẻ)', url: 'https://tuoitrenews.vn/news/features/20241020/introducing-chef-summer-le-and-the-strength-found-within-vietnamese-cuisine/82475.html', type: 'article' },
      { label: 'Nén Đà Nẵng — Michelin Green Star (Michelin Guide)', url: 'https://guide.michelin.com/en/da-nang-region/da-nang_2984390/restaurant/nen-danang', type: 'article' },
      { label: 'Nén: Nơi câu chuyện gặp đĩa ăn (Vietnam News)', url: 'https://vietnamnews.vn/sunday/restaurant-review/1660855/nen-where-storytelling-meets-the-plate.html', type: 'article' },
    ],
    socials: [
      { platform: 'instagram', url: 'https://www.instagram.com/summer.nen/' },
      { platform: 'linkedin', url: 'https://www.linkedin.com/in/summer-le-83979568/' },
      { platform: 'website', url: 'https://restaurantnen.com' },
    ],
  },
];

export default EXPERTS;
