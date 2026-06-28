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
    faq: [
      {
        question: 'Đỗ Duy Thanh là ai?',
        answer: 'Đỗ Duy Thanh là chuyên gia tư vấn chiến lược kinh doanh ẩm thực với hơn 20 năm kinh nghiệm. Ông sáng lập FnB Director vào năm 2012 và đã tư vấn cho hơn 100 dự án F&B tại Việt Nam, từ các thương hiệu lớn như Vingroup, Saigon Tourist đến các chuỗi quán nhỏ.',
      },
      {
        question: 'Đỗ Duy Thanh đã tư vấn cho những công ty nào?',
        answer: 'Ông đã đồng hành cùng hàng trăm dự án, bao gồm: Vingroup, Saigon Tourist, Nova FnB, Milano Coffee, Gojek, Baemin và nhiều thương hiệu F&B khác tại Việt Nam.',
      },
      {
        question: 'Mô hình 9Ps Quản trị Nhà hàng của Đỗ Duy Thanh là gì?',
        answer: 'Mô hình 9Ps là chiến lược quản trị toàn diện cho nhà hàng, bao gồm 9 yếu tố cốt lõi. Ông phát triển mô hình này từ kinh nghiệm thực tiễn sau 20+ năm làm việc trong ngành F&B.',
      },
      {
        question: 'Ông có tham gia hoạt động đào tạo không?',
        answer: 'Có, ông sáng lập Horeca Business School vào năm 2025 — nền tảng đào tạo chuyên sâu cho ngành Dịch vụ & Công nghệ nhà hàng, với mục đích nâng cao kỹ năng quản lý cho các chuyên gia F&B.',
      },
      {
        question: 'Đỗ Duy Thanh có làm việc tại các nhà hàng nổi tiếng không?',
        answer: 'Có, ông từng giữ vị trí Business Director tại D1 Concepts (San Fu Lou, Sorae, Dì Mai) và Oriental Saigon — hai chuỗi nhà hàng xuất hiện trong danh sách Top 101 Best Restaurants in Asia.',
      },
    ],
  },

  {
    id: 'ha-chu',
    slug: 'ha-chu',
    name: 'Hà Chu',
    descriptor: 'Nhà sáng lập trường Marketing F&B đầu tiên tại Việt Nam, chuyên gia tư vấn thương hiệu ẩm thực',
    photo: '/experts/ha-chu.webp',
    category: 'consultant',
    tags: ['F&B Marketing', 'Branding', 'Đào tạo', 'Podcast'],
    shortBio: 'Chu Hồng Hà (sinh 1992) — sáng lập COOKED (2018), trường Marketing F&B đầu tiên VN với 100.000 học viên. Tư vấn 20+ thương hiệu (Gia Michelin, The KAfe). Host podcast "Ha Chu works" 97 tập, 4.9★ Spotify. Triết lý: "Khẩu vị là điểm chạm quan trọng nhất."',
    fullBio: 'Chu Hồng Hà (Hà Chu), sinh năm 1992, là người sáng lập và CEO của COOKED — trường đào tạo Marketing & Kinh doanh chuyên ngành F&B đầu tiên và duy nhất tại Việt Nam.\n\nHà bắt đầu viết báo từ năm lớp 10, trở thành Marketing Manager năm 24 tuổi tại The KAfe. Năm 26 tuổi (2018), cô sáng lập COOKED với sứ mệnh "mang lại niềm hạnh phúc hơn một chút cho những người làm F&B." Đến nay, COOKED đã đào tạo gần 100.000 học viên. Hà trực tiếp host podcast "Ha Chu works" (97+ tập, 4.9 sao trên Spotify).',
    highlights: [
      'Sáng lập COOKED (2018) — trường Marketing F&B đầu tiên, gần 100.000 học viên',
      'Tư vấn marketing cho 20+ thương hiệu: Gia (Michelin), The KAfe, Manwah, Yu Tang',
      'Host podcast "Ha Chu works" — 97+ tập, đánh giá 4.9/5 trên Spotify',
      'Diễn giả tại Vietnam Food & Beverage Conference 2023 (Vietcetera)',
    ],
    quotes: [
      {
        text: 'Đông khách không có nghĩa là bạn đang làm đúng! Phải hiểu rõ khách hàng đang đến vì điều gì thì mới giữ chân được họ.',
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
    faq: [
      {
        question: 'Hà Chu sinh năm bao nhiêu?',
        answer: 'Hà Chu (Chu Hồng Hà) sinh năm 1992, hiện đang là CEO của COOKED và là một trong những chuyên gia marketing F&B hàng đầu Việt Nam.',
      },
      {
        question: 'COOKED là gì?',
        answer: 'COOKED là trường đào tạo Marketing & Kinh doanh chuyên ngành F&B đầu tiên và duy nhất tại Việt Nam. Được thành lập vào 2018, COOKED đã đào tạo gần 100.000 học viên về marketing và kinh doanh ẩm thực.',
      },
      {
        question: 'Hà Chu tư vấn cho những thương hiệu nào?',
        answer: 'Hà Chu đã tư vấn marketing cho hơn 20 thương hiệu F&B, bao gồm các nhà hàng Michelin như Gia, các chuỗi cà phê nổi tiếng như The KAfe, cũng như các thương hiệu khác như Manwah và Yu Tang.',
      },
      {
        question: '"Ha Chu works" là podcast gì?',
        answer: '"Ha Chu works" là podcast do Hà Chu trực tiếp host, với hơn 97 tập. Nó được đánh giá 4.9 sao trên Spotify, chia sẻ những bài học thực tiễn về marketing và kinh doanh F&B.',
      },
      {
        question: 'Hà Chu từng làm việc ở đâu trước khi thành lập COOKED?',
        answer: 'Hà Chu bắt đầu viết báo từ năm lớp 10, sau đó trở thành Marketing Manager tại The KAfe vào năm 24 tuổi. Kinh nghiệm này đã giúp cô hiểu sâu về thị trường F&B và sau đó sáng lập COOKED.',
      },
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
    shortBio: 'Trần Trung Hiếu — F&B Coach tư vấn quán nhỏ với triết lý "nói thẳng, nói thật." Được VnExpress, ZNews, Dân Trí trích dẫn thường xuyên. Sáng lập FnB Academy (fnb.edu.vn) — nền tảng đào tạo SME. Bí quyết: "Kinh doanh không phải cuộc chơi của đam mê suông mà người biết tính toán."',
    fullBio: 'Trần Trung Hiếu là chuyên gia tư vấn F&B được biết đến với phong cách "nói thẳng, nói thật" về thực trạng kinh doanh quán ăn, cà phê tại Việt Nam. Ông thường xuyên được các tờ báo lớn như VnExpress, ZNews, Dân Trí trích dẫn khi có vấn đề nóng trong ngành F&B.\n\nÔng sáng lập FnB Academy (fnb.edu.vn) — nền tảng đào tạo trực tuyến giúp chủ quán nhỏ nắm vững kiến thức quản lý, vận hành và marketing.',
    highlights: [
      'Chuyên gia F&B thường xuyên được VnExpress, ZNews, Dân Trí trích dẫn',
      'Sáng lập FnB Academy (fnb.edu.vn) — đào tạo quản lý quán cho SME',
      'Tư vấn thực chiến cho hàng trăm chủ quán nhỏ',
    ],
    quotes: [
      {
        text: 'Kinh doanh F&B không phải cuộc chơi của đam mê suông — mà là của người biết tính toán.',
        source: 'VnExpress',
      },
      {
        text: 'Đừng mở quán chỉ để bán nó sau 3 tháng.',
        source: 'trantrunghieu.com',
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
    faq: [
      {
        question: 'Trần Trung Hiếu là ai?',
        answer: 'Trần Trung Hiếu là chuyên gia tư vấn F&B được biết đến với phong cách thẳng thắn "nói thẳng, nói thật" về tình hình kinh doanh quán ăn và cà phê tại Việt Nam. Ông thường xuyên được các tờ báo lớn như VnExpress, ZNews, Dân Trí trích dẫn khi có những vấn đề nóng trong ngành F&B.',
      },
      {
        question: 'FnB Academy là gì?',
        answer: 'FnB Academy (fnb.edu.vn) là nền tảng đào tạo trực tuyến do Trần Trung Hiếu sáng lập, giúp các chủ quán nhỏ nắm vững kiến thức về quản lý, vận hành và marketing ẩm thực. Nó tập trung vào việc đào tạo cho SME F&B.',
      },
      {
        question: 'Trần Trung Hiếu tư vấn cho những loại hình quán nào?',
        answer: 'Ông chuyên tư vấn cho các quán cà phê và nhà hàng nhỏ. Triết lý của ông là cung cấp những lời khuyên thực tiễn dựa trên kinh nghiệm thực tế, giúp chủ quán hiểu rõ chi phí vận hành và lợi nhuận kỳ vọng.',
      },
      {
        question: 'Ông có chia sẻ nội dung ở đâu?',
        answer: 'Trần Trung Hiếu chia sẻ kiến thức thông qua blog trantrunghieu.com và các bài viết trên các tờ báo lớn. Ông cũng thường xuyên xuất hiện để nhận xét về các vấn đề tiêu cực trong ngành F&B.',
      },
      {
        question: 'Cách tư duy kinh doanh của Trần Trung Hiếu là gì?',
        answer: 'Ông tin rằng kinh doanh F&B không phải là cuộc chơi của đam mê suông, mà là của những người biết cách tính toán chi phí, xác định break-even point và đầu tư dựa trên dữ liệu thực tế chứ không phải trend.',
      },
    ],
  },



  // ── Chuỗi lớn & Tập đoàn ──

  {
    id: 'dao-the-vinh',
    slug: 'dao-the-vinh',
    name: 'Đào Thế Vinh',
    descriptor: 'Chủ tịch & CEO Golden Gate — chuỗi nhà hàng lớn nhất Việt Nam với 40+ thương hiệu, 500+ nhà hàng',
    photo: '/experts/dao-the-vinh.webp',
    category: 'inspiration' as const,
    tags: ['Chuỗi nhà hàng', 'Multi-brand', 'M&A', 'Hệ thống hóa'],
    shortBio: 'Đào Thế Vinh (sinh 1972) — kỹ sư khí tượng du học Nga, chuyển F&B với 0 kinh nghiệm bếp. Sáng lập Golden Gate (2008) từ 1 quán lẩu nấm → 500+ nhà hàng, 40+ thương hiệu, 6.630 tỷ doanh thu (2024). Temasek định giá $650M. Hệ thống hóa mọi thứ: "Nghệ nhân chỉ tạo được thứ họ giỏi; hệ thống tạo được bất kỳ sản phẩm nào."',
    fullBio: 'Đào Thế Vinh (sinh 1972) tốt nghiệp Đại học Khí tượng Thủy văn Saint Petersburg, Nga. Sau 7 năm buôn bán xuất nhập khẩu tại Nga, ông trở về Việt Nam năm 2002 và đồng sáng lập thương hiệu trà Cozy.\n\nNăm 2005, cùng hai người bạn thành lập Golden Gate. Cảm hứng đến từ chuyến đi Vân Nam (Trung Quốc) khi phát hiện món lẩu nấm tại Shangri-La. Năm 2008, mở nhà hàng đầu tiên Ashima tại 44 Phan Đình Phùng, Hà Nội — chỉ 4-5 bàn, nội thất gỗ cổ mua sẵn để bán lại nếu thất bại.\n\nĐiểm đặc biệt: cả 3 sáng lập viên đều là kỹ sư, không ai có nền tảng ẩm thực — nên ngay từ đầu đã hệ thống hóa mọi thứ thay vì dựa vào nghệ nhân. Sau 16 năm: 500+ nhà hàng, 40+ thương hiệu, 19.000 nhân viên, phục vụ 18 triệu khách/năm. Năm 2025, mua lại The Coffee House với giá 270 tỷ VNĐ.',
    highlights: [
      'Từ 1 quán lẩu nấm (2008) → 500+ nhà hàng, 40+ thương hiệu tại 45 tỉnh thành',
      'Doanh thu 2024: 6.630 tỷ VNĐ (~$259 triệu)',
      'Temasek đầu tư (2022), định giá ~$650 triệu USD',
      'Mekong Capital đầu tư $2.6M (2008), thoái vốn lãi 9 lần (2014) — case study INSEAD',
    ],
    quotes: [
      {
        text: 'Tôi cần bán sản phẩm mà khách hàng thích, không phải sản phẩm thỏa mãn sở thích cá nhân.',
        source: 'Nhà Đầu Tư',
        sourceUrl: 'https://nhadautu.vn/vua-nha-hang-golden-gate-ke-chuyen-khoi-nghiep-mat-tien-bi-quy-dau-tu-lua-va-cai-ket-d66490.html',
      },
      {
        text: 'Hệ thống có thể tạo ra bất kỳ sản phẩm nào; nghệ nhân chỉ tạo ra được thứ họ giỏi.',
        source: 'CafeBiz',
        sourceUrl: 'https://cafebiz.vn/dao-the-vinh-vi-dai-gia-dung-sau-golden-gate-tu-cam-hung-mon-lau-nam-trong-chuyen-di-shangrila-toi-chuoi-400-nha-hang-lon-nhat-viet-nam-nhu-kichi-kichi-gogi-house-vuvuzela-20211227124836345.chn',
      },
      {
        text: 'Khó khăn lộ ra cơ hội. Trong lúc khó, một khách hàng hài lòng bằng hàng nghìn lúc bình thường.',
        source: 'Vietnam Business Insider',
        sourceUrl: 'https://vietnambusinessinsider.vn/so-luoc-nganh-hospitality-o-viet-nam-bai-12-golden-gate-khi-nhung-ke-ngoai-dao-lam-nen-ky-tich-a19669.html',
      },
    ],
    advice: [
      {
        title: 'Hệ thống hóa ngay từ đầu',
        desc: 'Đừng phụ thuộc vào một đầu bếp giỏi hay một quản lý tài năng. Xây quy trình chuẩn để bất kỳ ai cũng vận hành được.',
      },
      {
        title: 'Bán thứ khách muốn, không phải thứ mình thích',
        desc: 'Nếu biến sở thích cá nhân thành mô hình kinh doanh mà không nghiên cứu thị trường, rủi ro rất cao.',
      },
      {
        title: 'Multi-brand để phân tán rủi ro',
        desc: 'Không bỏ tất cả vào một concept. Mỗi thương hiệu nhắm một phân khúc, một loại ẩm thực — trend nào rớt thì brand khác bù.',
      },
    ],
    links: [
      { label: 'Kể chuyện khởi nghiệp Golden Gate (Nhà Đầu Tư)', url: 'https://nhadautu.vn/vua-nha-hang-golden-gate-ke-chuyen-khoi-nghiep-mat-tien-bi-quy-dau-tu-lua-va-cai-ket-d66490.html', type: 'article' },
      { label: 'Từ lẩu nấm Shangri-La đến 500 nhà hàng (CafeBiz)', url: 'https://cafebiz.vn/dao-the-vinh-vi-dai-gia-dung-sau-golden-gate-tu-cam-hung-mon-lau-nam-trong-chuyen-di-shangrila-toi-chuoi-400-nha-hang-lon-nhat-viet-nam-nhu-kichi-kichi-gogi-house-vuvuzela-20211227124836345.chn', type: 'article' },
      { label: 'The CEO Magazine Interview', url: 'https://www.theceomagazine.com/executive-interviews/food-beverage/vinh-dao/', type: 'article' },
    ],
    socials: [
      { platform: 'website', url: 'https://ggg.com.vn' },
    ],
    faq: [
      {
        question: 'Đào Thế Vinh sinh năm bao nhiêu?',
        answer: 'Đào Thế Vinh sinh năm 1972. Ông học kỹ sư khí tượng ở đại học Saint Petersburg, Nga, trước khi chuyển sang kinh doanh ẩm thực.',
      },
      {
        question: 'Golden Gate là gì?',
        answer: 'Golden Gate là tập đoàn nhà hàng lớn nhất Việt Nam, được thành lập vào năm 2008 từ một quán lẩu nấm nhỏ. Hiện nay nó sở hữu 500+ nhà hàng, 40+ thương hiệu, tại 45 tỉnh thành và có doanh thu hơn 6.630 tỷ VNĐ năm 2024.',
      },
      {
        question: 'Đào Thế Vinh bắt đầu kinh doanh thế nào?',
        answer: 'Ông bắt đầu bằng cách nhập khẩu các mặt hàng từ Nga trong 7 năm, sau đó trở lại Việt Nam và đồng sáng lập thương hiệu trà Cozy. Năm 2008, ông và hai người bạn thành lập Golden Gate từ một quán lẩu nấm lấy cảm hứng từ chuyến đi Vân Nam, Trung Quốc.',
      },
      {
        question: 'Golden Gate có những thương hiệu nào?',
        answer: 'Golden Gate sở hữu 40+ thương hiệu F&B bao gồm Kichi Kichi, Gogi House, Vuvuzela, Ashima, Royaltea và nhiều thương hiệu khác trong các lĩnh vực khác nhau: lẩu, nướng, cà phê, trà sữa, kem...',
      },
      {
        question: 'Tại sao Đào Thế Vinh hệ thống hóa mọi thứ?',
        answer: 'Vì cả ba sáng lập viên của Golden Gate đều là kỹ sư, không ai có nền tảng ẩm thực, nên từ đầu họ đã hệ thống hóa mọi quy trình thay vì phụ thuộc vào các đầu bếp hay quản lý tài năng. Điều này giúp họ mở rộng quy mô nhanh chóng.',
      },
    ],
  },

  {
    id: 'tran-le-nguyen',
    slug: 'tran-le-nguyen',
    name: 'Trần Lệ Nguyên',
    descriptor: 'Phó Chủ tịch & CEO KIDO Group — từ đế chế bánh kẹo đến kem, dầu ăn và chuỗi F&B',
    photo: '/experts/tran-le-nguyen.webp',
    category: 'inspiration' as const,
    tags: ['FMCG', 'M&A', 'Kem', 'Dầu ăn', 'Chuỗi F&B'],
    shortBio: 'Trần Lệ Nguyên (sinh 1968) — CEO KIDO Group, đồng sáng lập Kinh Đô bán mảng bánh kẹo cho Mondelez ~$370-490 triệu (2014). Dẫn đầu kem Việt 47% thị phần, #2 dầu ăn. Vì sao Chuk Chuk thất bại sau 18 tháng?',
    fullBio: 'Trần Lệ Nguyên (sinh 1968) xuất thân từ gia đình gốc Hoa. Năm 1992, thuyết phục anh trai Trần Kim Thành thế chấp nhà để vay vốn — "một trong những quyết định liều lĩnh nhất đời tôi". Năm 1993, đồng sáng lập Kinh Đô với 1,5 tỷ VNĐ và 70 nhân viên.\n\nNăm 2003, mua lại nhà máy kem Wall\'s từ Unilever → thương hiệu Merino, Celano (47% thị phần kem VN). Năm 2014, bán 80% mảng bánh kẹo cho Mondelez với giá ~$370-490 triệu — thương vụ M&A lớn nhất ngành tiêu dùng VN thời điểm đó. Dùng tiền mua Tường An, Vocarimex → #2 dầu ăn VN (30% thị phần).\n\nNăm 2021, ra mắt Chuk Chuk (kem, trà sữa, cà phê) — tham vọng 1.000 cửa hàng nhưng thất bại, thoái vốn cuối 2022. Bài học quý giá về unit economics trong chuỗi F&B.',
    highlights: [
      'Đồng sáng lập Kinh Đô (1993) → bán cho Mondelez ~$370-490 triệu (2014)',
      'Kem Merino + Celano: 47% thị phần kem Việt Nam',
      'Dầu ăn KIDO: #2 thị trường với ~30% thị phần',
      'Chuk Chuk: bài học thất bại — từ mục tiêu 1.000 cửa hàng đến thoái vốn',
    ],
    quotes: [
      {
        text: 'Cuộc sống là phải luôn có tham vọng. Bạn phải có tham vọng thì mới đạt được những hoài bão của mình.',
        source: 'KIDO',
        sourceUrl: 'https://www.kdc.vn/bai-viet/ceo-kinh-do-cuoc-song-phai-luon-co-tham-vong',
      },
      {
        text: 'Nếu không M&A thì tăng trưởng có hạn, mỗi năm tăng 10% đã là tối đa. Nhưng chỉ cần một thương vụ M&A đúng đã mang lại giá trị rất lớn.',
        source: 'MarketTimes',
        sourceUrl: 'https://markettimes.vn/ong-tran-le-nguyen-chia-se-bi-quyet-m-a-cua-kido-va-loi-khuyen-dac-biet-danh-cho-nha-dau-tu-ca-nhan-67844.html',
      },
      {
        text: 'Mua một công ty mà không tạo ra giá trị thì không khác gì mua một con gà mà nó không đẻ được trứng.',
        source: 'MarketTimes',
        sourceUrl: 'https://markettimes.vn/ong-tran-le-nguyen-chia-se-bi-quyet-m-a-cua-kido-va-loi-khuyen-dac-biet-danh-cho-nha-dau-tu-ca-nhan-67844.html',
      },
    ],
    advice: [
      {
        title: 'Bán đúng lúc, mua đúng thời',
        desc: 'Bán mảng kinh doanh đỉnh cao để lấy tiền mua mảng tiềm năng hơn. Kinh Đô bán bánh kẹo, dùng tiền thâu tóm dầu ăn — táo bạo nhưng hiệu quả.',
      },
      {
        title: 'Chuỗi F&B cần unit economics tốt',
        desc: 'Chuk Chuk thất bại vì mở nhanh nhưng chưa chứng minh được mô hình lãi ở từng điểm bán. Tham vọng lớn không thay thế được con số.',
      },
      {
        title: 'Thế chấp nhà khởi nghiệp — liều nhưng phải tính',
        desc: 'Quyết định liều lĩnh nhất đời là thế chấp nhà. Nhưng liều vì đã nghiên cứu kỹ thị trường bánh kẹo Thái đang thống trị VN.',
      },
    ],
    links: [
      { label: 'Cuộc sống phải luôn có tham vọng (KIDO)', url: 'https://www.kdc.vn/bai-viet/ceo-kinh-do-cuoc-song-phai-luon-co-tham-vong', type: 'article' },
      { label: 'Bí quyết M&A của KIDO (MarketTimes)', url: 'https://markettimes.vn/ong-tran-le-nguyen-chia-se-bi-quyet-m-a-cua-kido-va-loi-khuyen-dac-biet-danh-cho-nha-dau-tu-ca-nhan-67844.html', type: 'article' },
      { label: 'Anh em đại gia họ Trần và triết lý KIDO (Nhà Đầu Tư)', url: 'https://nhadautu.vn/doanh-nhan-nguoi-hoa-kin-tieng--bai-3-anh-em-dai-gia-ho-tran-va-triet-ly-kinh-doanh-co-1-0-2-o-kido-d28703.html', type: 'article' },
    ],
    socials: [
      { platform: 'website', url: 'https://www.kdc.vn' },
    ],
    faq: [
      {
        question: 'Trần Lệ Nguyên sinh năm bao nhiêu?',
        answer: 'Trần Lệ Nguyên sinh năm 1968. Ông xuất thân từ gia đình gốc Hoa và là Phó Chủ tịch & CEO KIDO Group.',
      },
      {
        question: 'Kinh Đô là gì?',
        answer: 'Kinh Đô là công ty tiêu dùng được thành lập vào năm 1993 bởi Trần Lệ Nguyên và anh trai Trần Kim Thành. Năm 2014, Kinh Đô bán mảng bánh kẹo cho Mondelez với giá khoảng $370-490 triệu, đây là thương vụ M&A lớn nhất ngành tiêu dùng Việt Nam thời điểm đó.',
      },
      {
        question: 'KIDO Group sở hữu những thương hiệu nào?',
        answer: 'KIDO Group sở hữu các thương hiệu kem nổi tiếng như Merino, Celano (47% thị phần kem Việt Nam), dầu ăn KIDO (#2 thị trường với ~30% thị phần), và các sản phẩm khác. Ông cũng từng đầu tư vào chuỗi F&B Chuk Chuk.',
      },
      {
        question: 'Chuk Chuk là gì và tại sao nó thất bại?',
        answer: 'Chuk Chuk là chuỗi F&B (kem, trà sữa, cà phê) được ra mắt năm 2021 với mục tiêu tham vọng 1.000 cửa hàng. Tuy nhiên, nó thất bại và Trần Lệ Nguyên thoái vốn vào cuối 2022 vì mở rộng quá nhanh mà chưa chứng minh được unit economics tốt ở từng cửa hàng.',
      },
      {
        question: 'Quyết định liều lĩnh nhất của Trần Lệ Nguyên là gì?',
        answer: 'Năm 1992, ông thuyết phục anh trai Trần Kim Thành thế chấp nhà để vay vốn khởi nghiệp. Đây được ông gọi là "một trong những quyết định liều lĩnh nhất đời tôi", nhưng quyết định đó đã dẫn đến thành công của Kinh Đô và KIDO Group sau này.',
      },
    ],
  },

  {
    id: 'danny-le',
    slug: 'danny-le',
    name: 'Danny Le',
    descriptor: 'CEO Masan Group — kiến trúc sư thương vụ Phúc Long $455 triệu và hệ sinh thái "Point of Life"',
    photo: '/experts/danny-le.webp',
    category: 'inspiration' as const,
    tags: ['Tập đoàn', 'M&A', 'Phúc Long', 'WinMart', 'Chiến lược'],
    shortBio: 'Danny Le (sinh 1984) — CEO Masan từ 36 tuổi, trẻ nhất tập đoàn lớn VN. Cựu analyst Morgan Stanley. Kiến trúc sư thương vụ Phúc Long $455M định giá, huy động $5B+ từ Alibaba, SK, Bain. Doanh thu 81.6 tỷ (2025). Triết lý: "Xây từ đầu 5-7 năm không đảm bảo; M&A và scale là tối ưu."',
    fullBio: 'Danny Le (sinh 1984) là Việt kiều Mỹ, tốt nghiệp Bowdoin College (ngành Xã hội học). Sau 4 năm làm investment banking analyst tại Morgan Stanley New York, ông gia nhập Masan năm 2010 ở vị trí Giám đốc Chiến lược.\n\nNăm 2020, ở tuổi 36, được bổ nhiệm CEO Masan Group — một trong những CEO trẻ nhất của tập đoàn lớn tại VN. Thương vụ nổi bật nhất: mua 85% Phúc Long Heritage với tổng đầu tư ~$280 triệu, định giá $455 triệu. Tích hợp 971 kiosk Phúc Long vào WinMart+ chỉ trong 1 năm.\n\nDưới thời Danny Le, Masan huy động hơn $5 tỷ từ KKR, Alibaba, SK Group, Bain Capital. Doanh thu 2025: 81.621 tỷ VNĐ, lợi nhuận sau thuế 6.764 tỷ VNĐ.',
    highlights: [
      'CEO Masan Group từ tuổi 36 — một trong những CEO trẻ nhất tập đoàn lớn VN',
      'Mua 85% Phúc Long: $280 triệu đầu tư, định giá $455 triệu',
      'Huy động $5 tỷ+ từ Alibaba, SK Group, Bain Capital, KKR',
      'Doanh thu 2025: 81.621 tỷ VNĐ (+8.7%), lợi nhuận gấp 1.6 lần 2024',
    ],
    quotes: [
      {
        text: 'Xây thương hiệu từ đầu có thể mất 5-7 năm mà không đảm bảo thành công — chiến lược tốt nhất là M&A và đầu tư quy mô lớn để dẫn đầu thị trường.',
        source: 'Masan Group',
        sourceUrl: 'https://www.masangroup.com/news/masan-news/Behind-the-usd-455-million-valuation-of-Phuc-Long.html',
      },
      {
        text: 'Bán lẻ hiện đại chỉ chiếm 12% thị trường Việt Nam so với 30-50% ở Thái Lan và Indonesia — dư địa tăng trưởng còn rất lớn.',
        source: 'Bloomberg',
        sourceUrl: 'https://www.bloomberg.com/news/videos/2021-12-20/masan-group-embarks-on-tech-drive-for-grocery-business-video-kxe9ewxu',
      },
      {
        text: 'Gọi vốn M&A tập trung vào tích hợp nền tảng phù hợp chiến lược tổng thể, không chỉ chạy theo doanh thu hay lợi nhuận.',
        source: 'Masan Group',
        sourceUrl: 'https://www.masangroup.com/news/masan-news/how-masan-employs-deamaking-to-build-its-consumer-retail-platform.html',
      },
    ],
    advice: [
      {
        title: 'M&A nhanh hơn xây từ đầu',
        desc: 'Phúc Long mất 55 năm xây thương hiệu. Masan mua 85% trong 18 tháng, tích hợp 971 kiosk vào WinMart+ chỉ trong 1 năm.',
      },
      {
        title: 'Tích hợp hệ sinh thái tạo giá trị cộng hưởng',
        desc: 'Đặt Phúc Long trong WinMart+, kết hợp tài chính Techcombank — biến cửa hàng tiện lợi thành "mini-mall" đa dịch vụ.',
      },
      {
        title: 'Đầu tư vào công nghệ và AI',
        desc: 'Masan mục tiêu giảm 15-20% chi phí sản xuất nhờ số hóa quy trình và tối ưu vận hành bằng AI.',
      },
    ],
    links: [
      { label: 'Thương vụ Phúc Long $455 triệu (Masan)', url: 'https://www.masangroup.com/news/masan-news/Behind-the-usd-455-million-valuation-of-Phuc-Long.html', type: 'article' },
      { label: 'CEO Masan trên Bloomberg (Video)', url: 'https://www.bloomberg.com/news/videos/2021-12-20/masan-group-embarks-on-tech-drive-for-grocery-business-video-kxe9ewxu', type: 'video' },
      { label: 'Chiến lược M&A xây nền tảng bán lẻ (Masan)', url: 'https://www.masangroup.com/news/masan-news/how-masan-employs-deamaking-to-build-its-consumer-retail-platform.html', type: 'article' },
    ],
    socials: [
      { platform: 'linkedin', url: 'https://growtheumcapital.com/danny-le/' },
      { platform: 'website', url: 'https://www.masangroup.com' },
    ],
    faq: [
      {
        question: 'Danny Le sinh năm bao nhiêu?',
        answer: 'Danny Le sinh năm 1984. Ông là Việt kiều Mỹ, tốt nghiệp Bowdoin College ngành Xã hội học, và làm việc tại Morgan Stanley New York như một investment banking analyst trước khi gia nhập Masan.',
      },
      {
        question: 'Danny Le là CEO của công ty nào?',
        answer: 'Danny Le là CEO của Masan Group từ năm 2020, khi ông mới 36 tuổi. Ông là một trong những CEO trẻ nhất của các tập đoàn lớn tại Việt Nam.',
      },
      {
        question: 'Phúc Long được mua với giá bao nhiêu?',
        answer: 'Masan mua 85% Phúc Long Heritage với tổng đầu tư khoảng $280 triệu, với định giá toàn bộ là $455 triệu. Đây là một thương vụ M&A quan trọng để mở rộng chuỗi bán lẻ của Masan.',
      },
      {
        question: 'Masan Group huy động được bao nhiêu vốn từ nước ngoài?',
        answer: 'Dưới thời Danny Le, Masan Group huy động hơn $5 tỷ từ các quỹ đầu tư lớn như KKR, Alibaba, SK Group, và Bain Capital. Số tiền này giúp Masan mở rộng các hoạt động M&A và chiến lược tăng trưởng.',
      },
      {
        question: 'Doanh thu của Masan Group năm 2025 là bao nhiêu?',
        answer: 'Doanh thu của Masan Group năm 2025 là 81.621 tỷ VNĐ, tăng 8.7% so với năm trước. Lợi nhuận sau thuế đạt 6.764 tỷ VNĐ, gấp 1.6 lần so với năm 2024.',
      },
    ],
  },

  {
    id: 'pham-cao-vinh',
    slug: 'pham-cao-vinh',
    name: 'Phạm Cao Vinh',
    descriptor: 'Chủ tịch Goldsun Group — xây đế chế từ bao bì Samsung đến 16 thương hiệu F&B, 200+ nhà hàng',
    photo: '/experts/pham-cao-vinh.webp',
    category: 'inspiration' as const,
    tags: ['Chuỗi nhà hàng', 'Multi-brand', 'Bao bì', 'Đa ngành'],
    shortBio: 'Phạm Cao Vinh (sinh 1968) — từ gas hóa lỏng (1994) → vendor cấp 1 Samsung ~20% bao bì điện thoại → Goldsun Food (2008): 16 thương hiệu, 200+ nhà hàng, 2.4M khách/năm. Chuỗi lớn #2 VN. Vì sao từ ngành bao bì chuyển F&B thành công? Hệ thống tư duy từ Samsung áp dụng được mọi ngành.',
    fullBio: 'Phạm Cao Vinh (sinh 1968) khởi nghiệp năm 1994 với công ty gas hóa lỏng Quang Vinh. Năm 1996, chuyển sang ngành in ấn bao bì — xây dựng Goldsun Printing & Packaging thành vendor cấp 1 của Samsung (cung cấp ~20% bao bì điện thoại Samsung), Canon, Brother, Coca-Cola.\n\nNăm 2008, lấn sân F&B với Redsun ITI. Đưa 4 thương hiệu quốc tế đầu tiên về VN (Seoul Garden, Thai Express, Xinwang HK Cafe, Capricciosa) và tự phát triển King BBQ (2011), Khao Lao, Hotpot Story, Sushi Kei. Năm 2019, tái cấu trúc thành Goldsun Food.\n\nHiện Goldsun Food vận hành 16 thương hiệu, 200+ nhà hàng, 6.000+ nhân viên, phục vụ 2.4 triệu khách/năm. Là chuỗi nhà hàng lớn thứ 2 Việt Nam sau Golden Gate.',
    highlights: [
      'Vendor cấp 1 Samsung 10+ năm, cung cấp ~20% bao bì điện thoại',
      '16 thương hiệu F&B, 200+ nhà hàng — chuỗi lớn thứ 2 VN',
      'Tiên phong đưa Seoul Garden, Thai Express về Việt Nam',
      'King BBQ (2011) — thương hiệu BBQ Hàn Quốc đầu tiên tại VN',
    ],
    quotes: [
      {
        text: 'Làm được đối tác của Samsung không dễ dàng. Có lúc Chủ tịch HĐQT trực tiếp đứng máy nửa tháng liên tục, làm thâu đêm.',
        source: 'CafeF',
        sourceUrl: 'https://cafef.vn/chuyen-chua-ke-cua-mot-vendor-cap-1-cho-samsung-chu-tich-hdqt-truc-tiep-dung-may-nua-thang-lien-tuc-lam-thau-dem-20181116182958954.chn',
      },
      {
        text: 'Đổi mới là con đường tồn tại.',
        source: 'Wonderful.vn',
        sourceUrl: 'https://wonderful.vn/le-khanh-thanh-nha-may-bao-bi-va-in-an-goldsun-que-vo-doi-moi-la-con-duong-ton-tai/',
      },
    ],
    advice: [
      {
        title: 'Đa ngành có thể hỗ trợ lẫn nhau',
        desc: 'Kinh nghiệm quản lý chuỗi cung ứng bao bì cho Samsung giúp vận hành chuỗi nhà hàng hiệu quả hơn — tư duy hệ thống áp dụng được mọi ngành.',
      },
      {
        title: 'Franchise quốc tế + thương hiệu tự phát triển',
        desc: 'Đưa thương hiệu quốc tế về để học quy trình, đồng thời tự xây brand riêng. Song song hai chiến lược giảm rủi ro.',
      },
      {
        title: 'Chuyển đổi số là bắt buộc',
        desc: 'F&B quy mô lớn không thể quản lý thủ công. Đầu tư ERP, digital transformation từ sớm giúp kiểm soát 200+ cửa hàng.',
      },
    ],
    links: [
      { label: 'Ông chủ King BBQ kinh doanh như thế nào (CafeF)', url: 'https://cafef.vn/ong-chu-chuoi-am-thuc-nuong-han-quoc-king-bbq-kinh-doanh-nhu-the-nao-20220919065601016.chn', type: 'article' },
      { label: 'So găng Golden Gate và Goldsun Food (VietnamBiz)', url: 'https://vietnambiz.vn/so-gang-tiem-luc-hai-ong-vua-am-thuc-golden-gate-va-goldsun-food-2025422135950463.htm', type: 'article' },
      { label: 'Vendor cấp 1 Samsung (CafeF)', url: 'https://cafef.vn/chuyen-chua-ke-cua-mot-vendor-cap-1-cho-samsung-chu-tich-hdqt-truc-tiep-dung-may-nua-thang-lien-tuc-lam-thau-dem-20181116182958954.chn', type: 'article' },
    ],
    socials: [
      { platform: 'website', url: 'https://goldsunfood.vn' },
    ],
    faq: [
      {
        question: 'Phạm Cao Vinh sinh năm bao nhiêu?',
        answer: 'Phạm Cao Vinh sinh năm 1968. Ông khởi nghiệp từ năm 1994 bắt đầu với công ty gas hóa lỏng, sau đó chuyển sang ngành bao bì và hiện là Chủ tịch Goldsun Group.',
      },
      {
        question: 'Phạm Cao Vinh bắt đầu kinh doanh từ ngành nào?',
        answer: 'Phạm Cao Vinh khởi nghiệp năm 1994 với công ty gas hóa lỏng Quang Vinh. Năm 1996, ông chuyển sang ngành in ấn bao bì, xây dựng Goldsun Printing & Packaging thành vendor cấp 1 của Samsung, cung cấp khoảng 20% bao bì điện thoại Samsung.',
      },
      {
        question: 'Khi nào Phạm Cao Vinh chuyển sang F&B?',
        answer: 'Năm 2008, Phạm Cao Vinh bắt đầu lấn sân vào ngành F&B với Redsun ITI. Ông đưa bốn thương hiệu quốc tế đầu tiên về Việt Nam như Seoul Garden, Thai Express, Xinwang HK Cafe, Capricciosa.',
      },
      {
        question: 'Goldsun Food sở hữu những thương hiệu nào?',
        answer: 'Goldsun Food vận hành 16 thương hiệu F&B, bao gồm: Seoul Garden, Thai Express, King BBQ (được phát triển bởi Goldsun từ 2011), Khao Lao, Hotpot Story, Sushi Kei, và nhiều thương hiệu khác. Tổng cộng có 200+ nhà hàng.',
      },
      {
        question: 'Goldsun Food phục vụ bao nhiêu khách hàng?',
        answer: 'Goldsun Food vận hành 200+ nhà hàng với 6.000+ nhân viên, phục vụ khoảng 2.4 triệu khách hàng mỗi năm. Đây là chuỗi nhà hàng lớn thứ 2 Việt Nam, sau Golden Gate.',
      },
    ],
  },



  // ── Cà phê & Serial Entrepreneur ──

  {
    id: 'nguyen-hai-ninh',
    slug: 'nguyen-hai-ninh',
    name: 'Nguyễn Hải Ninh',
    descriptor: '"Nhà khởi nghiệp nối tiếp" — từ Urban Station đến The Coffee House, M Village và Every Half',
    photo: '/experts/nguyen-hai-ninh.webp',
    category: 'inspiration',
    tags: ['Serial Entrepreneur', 'Cà phê', 'Startup', 'Forbes 30U30'],
    shortBio: 'Nguyễn Hải Ninh (sinh 1987) — 4 ventures trong 14 năm: Urban Station (60+ quán) → The Coffee House (175 quán, 800 tỷ doanh thu, Forbes 30U30) → M Village ($10M Trip.com) → Every Half ($3M Pre-Series A, xuất khẩu Robusta Mỹ). Bí quyết: "3 yếu tố: đam mê + thế mạnh + xã hội cần."',
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
    faq: [
      {
        question: 'Nguyễn Hải Ninh sinh năm bao nhiêu?',
        answer: 'Nguyễn Hải Ninh sinh năm 1987. Ông tốt nghiệp ngành Hóa từ Đại học Bách Khoa TP.HCM và từng làm quản lý đào tạo tại PepsiCo trước khi bắt đầu hành trình khởi nghiệp.',
      },
      {
        question: 'Nguyễn Hải Ninh thành lập những doanh nghiệp nào?',
        answer: 'Nguyễn Hải Ninh là "nhà khởi nghiệp nối tiếp" với 4 ventures trong 14 năm: (1) Urban Station (60+ quán), (2) The Coffee House (175 quán, 800 tỷ doanh thu), (3) M Village (co-living, $10M từ Trip.com), (4) Every Half Coffee Roasters (cà phê specialty).',
      },
      {
        question: 'The Coffee House đạt được những gì?',
        answer: 'The Coffee House được Nguyễn Hải Ninh sáng lập với triết lý "cà phê cộng đồng". Chuỗi này nhanh chóng mở rộng đến 175 cửa hàng, đạt ~800 tỷ VNĐ doanh thu năm 2019, và Nguyễn Hải Ninh được vinh danh Forbes 30 Under 30 Asia.',
      },
      {
        question: 'Every Half Coffee Roasters là gì?',
        answer: 'Every Half là start-up cà phê specialty của Nguyễn Hải Ninh, được thành lập để xuất khẩu cà phê Robusta đặc sản Việt Nam sang các thị trường quốc tế như Bắc Mỹ. Công ty đã huy động $3M Pre-Series A vào năm 2025.',
      },
      {
        question: 'Triết lý khởi nghiệp của Nguyễn Hải Ninh là gì?',
        answer: 'Nguyễn Hải Ninh tin rằng khởi nghiệp cần 3 yếu tố: đam mê, thế mạnh cá nhân, và thế mạnh đó phải là cái mà xã hội đang cần. Ông cũng nhấn mạnh rằng "gọi vốn là hệ quả, không phải mục tiêu" — tức là phải tập trung giải quyết vấn đề đúng thì nhà đầu tư sẽ tự tìm đến.',
      },
    ],
  },

  {
    id: 'ngo-nguyen-kha',
    slug: 'ngo-nguyen-kha',
    name: 'Ngô Nguyên Kha',
    descriptor: 'CEO The Coffee House — từ Country Manager Sony Ericsson, sáng lập Mobiistar đến dẫn dắt chuỗi cà phê lớn',
    photo: '/experts/ngo-nguyen-kha.webp',
    category: 'inspiration' as const,
    tags: ['Cà phê', 'Chuỗi F&B', 'Chuyển ngành', 'Trải nghiệm khách hàng'],
    shortBio: 'Ngô Nguyên Kha (sinh 1971) — Country Manager Sony Ericsson → sáng lập Mobiistar (top 5 smartphone VN) → CEO The Coffee House (2021). Tái cấu trúc ~150 cửa hàng, mang tư duy tech vào F&B. Câu hỏi: Vì sao chuyên gia điện tử thành công trong ẩm thực? Trả lời trong triết lý: "Khách hàng không hài lòng thì mọi thứ vô nghĩa."',
    fullBio: 'Ngô Nguyên Kha (sinh 1971) có gần 10 năm kinh nghiệm tại Ericsson và Sony Ericsson, từng là Country Manager Sony Ericsson Việt Nam. Năm 2012, ông đồng sáng lập Mobiistar — thương hiệu smartphone Việt từng đạt top 5 thị phần, mở rộng sang Ấn Độ năm 2018 nhưng rút lui năm 2019.\n\nNăm 2020, ông gia nhập Seedcom làm Tổng Giám đốc Fashion Group. Tháng 12/2021, được bổ nhiệm CEO The Coffee House — chuỗi cà phê có ~150 cửa hàng (hiện ~93 cửa hàng sau tái cấu trúc). Ông mang tư duy công nghệ và trải nghiệm khách hàng từ ngành điện tử vào F&B.\n\nĐầu 2025, Golden Gate mua lại 99.98% The Coffee House với giá 270 tỷ VNĐ.',
    highlights: [
      'Country Manager Sony Ericsson → sáng lập Mobiistar (top 5 smartphone VN)',
      'CEO The Coffee House từ 2021, tái cấu trúc chuỗi ~150 cửa hàng',
      'Mang tư duy tech và customer experience vào ngành F&B',
      'The Coffee House được Golden Gate mua lại đầu 2025',
    ],
    quotes: [
      {
        text: 'Nếu khách hàng không hài lòng, mọi thứ chúng tôi làm đều vô nghĩa.',
        source: 'VnExpress',
        sourceUrl: 'https://e.vnexpress.net/news/companies/improving-customer-experience-holds-the-key-the-coffee-house-ceo-4564758.html',
      },
    ],
    advice: [
      {
        title: 'Trải nghiệm khách hàng là ưu tiên số 1',
        desc: 'Dù sản phẩm tốt đến đâu, nếu khách hàng không hài lòng khi bước vào quán thì mọi thứ đều vô nghĩa.',
      },
      {
        title: 'Tư duy tech có thể áp dụng vào F&B',
        desc: 'Quản lý chuỗi F&B giống quản lý sản phẩm công nghệ — cần data, quy trình, và lắng nghe feedback liên tục.',
      },
    ],
    links: [
      { label: 'Trải nghiệm khách hàng là chìa khóa (VnExpress)', url: 'https://e.vnexpress.net/news/companies/improving-customer-experience-holds-the-key-the-coffee-house-ceo-4564758.html', type: 'article' },
    ],
    socials: [
      { platform: 'website', url: 'https://www.thecoffeehouse.com' },
    ],
    faq: [
      {
        question: 'Ngô Nguyên Kha sinh năm bao nhiêu?',
        answer: 'Ngô Nguyên Kha sinh năm 1971. Ông có gần 10 năm kinh nghiệm tại Ericsson và Sony Ericsson trước khi chuyển sang kinh doanh.',
      },
      {
        question: 'Ngô Nguyên Kha làm việc tại những công ty nào?',
        answer: 'Ngô Nguyên Kha từng là Country Manager Sony Ericsson Việt Nam. Sau đó, ông đồng sáng lập Mobiistar — thương hiệu smartphone Việt từng đạt top 5 thị phần. Ông cũng làm Tổng Giám đốc Fashion Group tại Seedcom trước khi trở thành CEO The Coffee House.',
      },
      {
        question: 'Mobiistar là gì?',
        answer: 'Mobiistar là thương hiệu smartphone Việt Nam do Ngô Nguyên Kha đồng sáng lập năm 2012. Thương hiệu này từng đạt top 5 thị phần smartphone tại Việt Nam và mở rộng sang Ấn Độ năm 2018, nhưng rút lui năm 2019.',
      },
      {
        question: 'Ngô Nguyên Kha làm gì tại The Coffee House?',
        answer: 'Ngô Nguyên Kha được bổ nhiệm CEO The Coffee House vào tháng 12/2021. Ông tái cấu trúc chuỗi từ ~150 cửa hàng xuống ~93 cửa hàng, mang tư duy công nghệ và trải nghiệm khách hàng từ ngành điện tử vào F&B.',
      },
      {
        question: 'The Coffee House được mua lại bởi ai?',
        answer: 'Vào đầu năm 2025, Golden Gate mua lại 99.98% The Coffee House với giá 270 tỷ VNĐ. Thương vụ này giúp Golden Gate mở rộng danh mục thương hiệu của mình.',
      },
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
    shortBio: 'Trần Nhật Quang (sinh 1980) — cựu giảng viên ĐH Đà Lạt, 30 tuổi khởi nghiệp cà phê Arabica (2013) "ngược chiều" 90% robusta VN. Từ thất bại 2013 → Là Việt 18 chi nhánh, 100% nguyên liệu Việt, xuất khẩu 6+, Asia Top 80 (2025). Kiên trì 5 năm không bán được — khi thị trường sẵn sàng, đột phá. 200-300 tấn/năm từ nông hộ Đà Lạt.',
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
    id: 'ly-quy-trung',
    slug: 'ly-quy-trung',
    name: 'Lý Quý Trung',
    descriptor: '"Cha đẻ Phở 24" — người tiên phong nhượng quyền F&B Việt Nam, tác giả 10 cuốn sách kinh doanh',
    photo: '/experts/ly-quy-trung.webp',
    category: 'inspiration',
    tags: ['Nhượng quyền', 'Phở', 'Tác giả', 'Giáo dục'],
    shortBio: 'Lý Quý Trung (sinh 1966) — từ nhân viên lau sàn → Phở 24 (2003), tiên phong nhượng quyền F&B VN, 70+ cửa hàng, bán $20M (2011). Tác giả 10 sách kinh doanh, Giáo sư ĐH Western Sydney. Bài học: "Sai lầm dạy nhiều, thành công dạy ít. Vị trí quyết định sống còn." Thất bại: Jazz Club, Gloria Jean\'s, Singapore, Thái Lan — nhưng kiên trì chia sẻ lời học.',
    fullBio: 'Lý Quý Trung (sinh 1966, Sài Gòn) xuất thân gia đình doanh nhân — mẹ là chủ nhà hàng Thanh Niên hoạt động hơn 30 năm tại Quận 1. Năm 1985, thi rớt đại học, ông bắt đầu từ nhân viên lau sàn, dọn vệ sinh tại Khách sạn Đệ Nhất (Equatorial). Một vị khách nước ngoài nhìn thấy sự chăm chỉ, tài trợ du học Úc.\n\nTốt nghiệp Thạc sĩ Du lịch (Griffith University) và Tiến sĩ Quản trị Kinh doanh, ông trở về Việt Nam đồng sáng lập Nam An Group với các thương hiệu ẩm thực cao cấp. Năm 2003, ông mở Phở 24 — tiệm phở máy lạnh đầu tiên tại Việt Nam, tiên phong mô hình nhượng quyền F&B. Chuỗi mở rộng 70+ cửa hàng, có mặt tại Indonesia, Philippines, Hàn Quốc, Nhật Bản, Úc. Năm 2011, bán Phở 24 cho Việt Thái Quốc Tế với giá $20 triệu USD.\n\nÔng cũng thẳng thắn chia sẻ hàng loạt thất bại: Jazz Club, Gloria Jean\'s Coffee, Yogen Fruz, nhà hàng tại Singapore và Thái Lan. Hiện ông là Giáo sư Đại học Western Sydney và sáng lập Viện Doanh nhân LQT.',
    highlights: [
      'Sáng lập Phở 24 (2003) — chuỗi phở nhượng quyền đầu tiên Việt Nam, 70+ cửa hàng',
      'Bán Phở 24 với giá $20 triệu USD (2011) — thương vụ F&B lớn nhất thời điểm đó',
      'Tác giả 10 cuốn sách về kinh doanh & khởi nghiệp (NXB Trẻ)',
      'Giáo sư Đại học Western Sydney (Úc) từ 2016',
    ],
    quotes: [
      {
        text: 'Sai lầm dạy bạn rất nhiều. Thành công dạy bạn rất ít. Thành công sẽ đi qua nhưng sai lầm thì ở lại.',
        source: 'VnExpress',
        sourceUrl: 'https://vnexpress.net/tac-gia/ly-qui-trung-1241.html',
      },
      {
        text: 'Làm F&B, cuối ngày ngồi cộng sổ có lãi là mừng.',
        source: 'CafeF',
        sourceUrl: 'https://cafef.vn/cha-de-pho-24-ly-quy-trung-va-nhung-that-bai-dau-don-khi-khoi-nghiep-fb-quan-dong-chua-chac-da-loi-cuoi-ngay-ngoi-cong-so-co-lai-la-mung-2019052007401939.chn',
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



  // ── Operators & Đầu bếp ──

  {
    id: 'nguyen-ha-linh',
    slug: 'nguyen-ha-linh',
    name: 'Nguyễn Hà Linh',
    descriptor: '"Cô gái 250 nghìn" — từ phát tờ rơi đến chuỗi nhà hàng Thái và cộng đồng 2.6 triệu người',
    photo: '/experts/nguyen-ha-linh.webp',
    category: 'inspiration',
    tags: ['Khởi nghiệp trẻ', 'Nhà hàng', 'Forbes 30U30', 'Cộng đồng'],
    shortBio: 'Nguyễn Hà Linh (sinh 1988) — Forbes 30 Under 30, từ 250.000đ tuổi 18 đến chuỗi Bếp Thái Koh Yam (10 chi nhánh) và group Nghiện Nhà 2.6 triệu thành viên. Bài học sau cú lỗ 7 tỷ với kem dừa Koh Samui.',
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
    id: 'hoang-tung',
    slug: 'hoang-tung',
    name: 'Hoàng Tùng',
    descriptor: '"Mr Pizza" — ông chủ Việt của chuỗi Pizza Home, nhà sáng tạo nội dung F&B thực chiến',
    photo: '/experts/hoang-tung.webp',
    category: 'inspiration',
    tags: ['Pizza', 'Chuỗi F&B', 'Khởi nghiệp', 'Content Creator'],
    shortBio: 'Hoàng Tùng (sinh 1981) — gần 10 lần khởi nghiệp, 3 lần thất bại. Pizza Home ~20 quán, Mr Lẩu, Cloud Cook. Burger Corona (2020) lên CNN, BBC, Reuters toàn cầu. Chiến lược "CẮT-GIẢM-TĂNG" giữa COVID: cắt lỗ, giảm chi phí, tăng R&D → sống sót. Công thức: "Càng cố gắng thì càng may mắn." Phân tích F&B trên Brands Vietnam.',
    fullBio: 'Hoàng Tùng (sinh 1981, Hà Nội) tốt nghiệp ĐH Ngoại ngữ và ĐH KHXH&NV, khởi nghiệp từ thời sinh viên với công ty dịch thuật — thất bại. Năm 2006, mở nhà hàng Viet Kitchen tại 24 Bà Triệu, doanh thu 500 triệu/tháng nhưng mâu thuẫn cổ đông khiến ông phải rút vốn.\n\nNăm 2013, ông sáng lập Pizza Home với triết lý "Nhanh - Ngon - Sạch" — pizza giá phải chăng, hương vị Việt hóa. Chuỗi mở rộng ~20 cửa hàng tại Hà Nội. Năm 2020, sáng tạo "Burger Corona" được CNN, BBC, Reuters đưa tin toàn cầu. Ngoài Pizza Home, ông còn sáng lập Mr Lẩu (lẩu giao tận nhà) và Cloud Cook (bếp trên mây).\n\nHoàng Tùng cũng là cây viết phân tích F&B nổi tiếng trên Brands Vietnam và Spiderum, thường xuyên chia sẻ case study thực chiến.',
    highlights: [
      'Sáng lập Pizza Home (2013) — ~20 cửa hàng tại Hà Nội',
      'Burger Corona (2020) — được CNN, BBC, Reuters, Le Figaro đưa tin',
      'Sáng lập thêm Mr Lẩu và Cloud Cook (bếp trên mây)',
      'Cây viết phân tích F&B thực chiến trên Brands Vietnam & Spiderum',
    ],
    quotes: [
      {
        text: 'Trong mọi cuộc khủng hoảng đều có cơ hội. Chuẩn bị cho rủi ro không bao giờ là thừa.',
        source: 'TheLEADER',
        sourceUrl: 'https://theleader.vn/6-bai-hoc-xu-ly-khung-hoang-truyen-thong-cua-ong-chu-pizza-home-1616405004126.htm',
      },
      {
        text: 'Càng cố gắng thì càng may mắn.',
        source: 'CafeF',
        sourceUrl: 'https://cafef.vn/ceo-pizza-home-hoang-tung-cang-co-gang-thi-cang-may-man-20220122192946346.chn',
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
    shortBio: 'Yosuke Masuko — từ 5 bàn nhỏ ($100K, 2011) → Pizza 4P\'s 40+ nhà hàng 5 quốc gia. Tự học làm mozzarella YouTube, thử 25+ nguồn sữa → xưởng Đà Lạt 2.000+ viên/ngày, xuất khẩu. Lợi nhuận 115 tỷ (2023), tăng 38%. Triết lý: "Biến hạn chế thành lợi thế cạnh tranh." Mở Nén Tokyo (2025), New York (2025).',
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
    id: 'summer-le',
    slug: 'summer-le',
    name: 'Summer Lê',
    descriptor: 'Đầu bếp đạt Sao xanh Michelin đầu tiên tại Việt Nam, tiên phong ẩm thực bền vững với 99% nguyên liệu địa phương',
    photo: '/experts/summer-le.webp',
    category: 'inspiration',
    tags: ['Michelin', 'Bền vững', 'Đà Nẵng', 'Farm-to-table'],
    shortBio: 'Summer Lê (Lê Hạ Uyên) — từ food blogger "Danang Cuisine" → Nén nhà hàng (2017) → Sao xanh Michelin đầu tiên VN (2024). Không học bếp chính quy, 99% nguyên liệu hyper-local, Nén Farm cung 30%. Mở Nén Light Sài Gòn (2022), Nén Tokyo (2025). Vì sao food blogger thành Michelin? Câu trả lời trong triết lý: "Ẩm thực muốn có sức mạnh phải dùng nguyên liệu của chính vùng đất đó."',
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



  // ── Supply Chain, Tech & Bootstrap ──

  {
    id: 'nguyen-trung-dung',
    slug: 'nguyen-trung-dung',
    name: 'Nguyễn Trung Dũng',
    descriptor: '"Ông trùm gia vị Việt" — khởi nghiệp tuổi 50, 3 lần thất bại, xây đế chế gia vị tự nhiên',
    photo: '/experts/nguyen-trung-dung.webp',
    category: 'inspiration',
    tags: ['Gia vị', 'Khởi nghiệp muộn', 'Xuất khẩu', 'Bootstrap'],
    shortBio: 'Nguyễn Trung Dũng (sinh 1963) — khởi nghiệp tuổi 50 sau 30 năm Ba Lan + 3 lần thất bại. Dh Foods (2012) từ 1.2 tỷ: gia vị tự nhiên, 100+ SKU, tăng 50%/năm liên tục, xuất 20+ quốc gia. Bootstrap toàn bộ — chưa bao giờ vay. Danh hiệu "Hàng Việt Chất Lượng Cao" 2 năm (2023-2024). Bí quyết tuổi 50: "Bớt hiếu thắng, bớt ham giàu nhanh, biết kiên nhẫn để đi xa."',
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
    id: 'vu-thanh-hung',
    slug: 'vu-thanh-hung',
    name: 'Vũ Thanh Hùng',
    descriptor: 'Sáng lập iPOS.vn — nền tảng quản lý bán hàng F&B hàng đầu Việt Nam, phục vụ 50.000+ nhà hàng',
    photo: '/experts/vu-thanh-hung.webp',
    category: 'inspiration' as const,
    tags: ['F&B Tech', 'POS', 'Startup', 'Dữ liệu ngành'],
    shortBio: 'Vũ Thanh Hùng — cựu kỹ sư FPT Software, sáng lập iPOS.vn (2017), nền tảng POS F&B lớn nhất VN phục vụ 50.000+ cửa hàng. Báo cáo thị trường F&B VN thường niên được CafeF, VnExpress, Dân Trí trích dẫn. Triết lý: "Quản lý bằng sổ tay → không biết mình lãi hay lỗ. Dữ liệu giúp quán nhỏ cạnh tranh chuỗi lớn."',
    fullBio: 'Vũ Thanh Hùng là cựu kỹ sư phần mềm tại FPT Software. Năm 2017, nhận thấy phần lớn nhà hàng và quán cà phê Việt Nam vẫn quản lý thủ công, ông sáng lập iPOS.vn — nền tảng quản lý bán hàng (POS) chuyên biệt cho ngành F&B.\n\nSau 7 năm, iPOS.vn phục vụ 50.000+ cửa hàng, trở thành nền tảng POS F&B lớn nhất Việt Nam. Ngoài phần mềm, iPOS.vn còn nổi tiếng với Báo cáo thị trường F&B Việt Nam hàng năm — nguồn dữ liệu được truyền thông và nhà đầu tư trích dẫn rộng rãi.\n\nVũ Thanh Hùng thường xuyên chia sẻ kiến thức về quản trị F&B, xu hướng ngành và chuyển đổi số trên các diễn đàn doanh nghiệp.',
    highlights: [
      'Sáng lập iPOS.vn (2017) — POS F&B lớn nhất VN, 50.000+ cửa hàng',
      'Tác giả Báo cáo thị trường F&B Việt Nam thường niên',
      'Cựu kỹ sư FPT Software, mang tư duy tech vào quản trị nhà hàng',
      'Dữ liệu iPOS được CafeF, VnExpress, Dân Trí trích dẫn thường xuyên',
    ],
    quotes: [
      {
        text: 'Phần lớn quán ăn, cà phê Việt Nam vẫn quản lý bằng sổ tay và tin nhắn — đó là lý do họ không biết mình đang lãi hay lỗ.',
        source: 'iPOS.vn',
      },
      {
        text: 'Dữ liệu là thứ giúp chủ quán nhỏ cạnh tranh được với chuỗi lớn.',
        source: 'CafeF',
      },
    ],
    advice: [
      {
        title: 'Quản lý bằng số, không bằng cảm tính',
        desc: 'Biết chính xác doanh thu từng món, chi phí từng ngày, tồn kho từng giờ — đó là lợi thế cạnh tranh của quán nhỏ thời đại số.',
      },
      {
        title: 'Chuyển đổi số không cần đắt đỏ',
        desc: 'Một phần mềm POS cơ bản giúp giảm thất thoát, tăng tốc phục vụ và ra quyết định dựa trên dữ liệu — đầu tư nhỏ, hiệu quả lớn.',
      },
    ],
    links: [
      { label: 'Báo cáo thị trường F&B Việt Nam (iPOS)', url: 'https://ipos.vn/bao-cao-thi-truong-fnb-2024', type: 'article' },
      { label: 'Website iPOS.vn', url: 'https://ipos.vn', type: 'article' },
    ],
    socials: [
      { platform: 'website', url: 'https://ipos.vn' },
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
    shortBio: 'Taku Tanaka (sinh 1989) — cựu COO Pizza 4P\'s (mở 1→10 quán/3 năm) → KAMEREO (2018), nền tảng B2B mua nguyên liệu đầu tiên VN. Phục vụ 3.000+ nhà hàng, 100+ nông dân, 16.000 SKU, huy động $15M+. Forbes Asia 100 to Watch 2025. Insight: "Bộ mua hàng hỗn loạn → pivot từ SaaS (thất bại) sang e-commerce full-stack → tăng 15%/tháng liên tục."',
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

  // ── Thêm 11 chuyên gia mới ──

  {
    id: 'dang-le-nguyen-vu',
    slug: 'dang-le-nguyen-vu',
    name: 'Đặng Lê Nguyên Vũ',
    descriptor: '"Vua cà phê Việt Nam" — người đưa cà phê Việt ra 60+ quốc gia',
    photo: '/experts/dang-le-nguyen-vu.webp',
    category: 'inspiration',
    tags: ['Cà phê', 'Khởi nghiệp', 'Thương hiệu Việt'],
    shortBio: 'Đặng Lê Nguyên Vũ (sinh 1971) — "Vua cà phê Việt", Chủ tịch Trung Nguyên Legend. Từ con nông dân M\'Drắk bỏ học Y khoa đến đế chế cà phê 60+ quốc gia, G7 chiếm 38% thị phần hòa tan suốt 9 năm. Forbes Asia "Zero to Hero".',
    fullBio: 'Đặng Lê Nguyên Vũ sinh ngày 10/02/1971 tại huyện Ninh Hòa, Khánh Hòa trong một gia đình nông dân nghèo. Năm 1979, gia đình ông chuyển đến M\'Drắk, huyện miền núi của Đắk Lắk. Từ nhỏ ông phụ gia đình bằng nhiều công việc: bẻ ngô, chăn lợn, làm gạch. Năm 1992, ông nhập học Khoa Y, ĐH Tây Nguyên nhưng sớm quyết định bỏ học để theo đuổi đam mê cà phê.\n\nNăm 1996, ông thành lập Trung Nguyên Coffee tại Buôn Ma Thuột — thủ phủ cà phê Việt Nam. Năm 1998, cửa hàng Trung Nguyên đầu tiên mở tại TP.HCM và nhanh chóng bùng nổ qua mô hình nhượng quyền, trở thành chuỗi cà phê lớn nhất Việt Nam. Từ 2003, thương hiệu cà phê hòa tan G7 dẫn đầu thị trường nội địa với 38% thị phần suốt 9 năm liên tiếp. Trung Nguyên hiện xuất khẩu đến hơn 60 quốc gia.\n\nNăm 2012, Forbes Asia vinh danh ông là "Vietnam\'s Coffee King" với hành trình "Zero to Hero." Ông theo đuổi triết lý "Cà Phê Triết Đạo" — nâng tầm cà phê từ thương mại thành triết lý sống, với khát vọng biến Việt Nam thành "thánh địa cà phê toàn cầu."',
    highlights: [
      'Sáng lập Trung Nguyên (1996) từ Buôn Ma Thuột; G7 chiếm 38% thị phần cà phê hòa tan suốt 9 năm',
      'Forbes Asia & National Geographic vinh danh "Vua Cà Phê Việt Nam" (2012)',
      'Hiện diện tại 60+ quốc gia, hàng ngàn cửa hàng nhượng quyền trên toàn quốc',
      'Chi 500+ tỷ đồng cho chương trình "Sáng tạo vì Khát vọng Việt" — tặng sách cho thanh niên',
    ],
    quotes: [
      { text: 'Phải có tinh thần chiến binh. Phải nghĩ lớn. Dù kinh doanh một sản phẩm nhỏ nhất cũng phải nghĩ sản phẩm đó sẽ bán trên toàn cầu.', source: 'Doanh Nhân Sài Gòn', sourceUrl: 'https://doanhnhansaigon.vn/dang-le-nguyen-vu-chu-tich-tap-doan-ca-phe-trung-nguyen-sai-dau-sua-do-304777.html' },
      { text: 'Nếu doanh nghiệp Việt không dám ra biển lớn, đối đầu với sóng dữ, sẽ mãi chỉ quanh quẩn trong cái ao nhà mình.', source: 'Tiền Phong', sourceUrl: 'https://tienphong.vn/cuoc-tro-chuyen-hiem-hoi-va-nhung-bi-an-cua-vua-ca-phe-trung-nguyen-dang-le-nguyen-vu-post1543426.tpo' },
      { text: 'Sai đâu sửa đó, sai chiến lược thì sửa chiến lược, sai thực thi thì sửa thực thi.', source: 'Doanh Nhân Sài Gòn', sourceUrl: 'https://doanhnhansaigon.vn/dang-le-nguyen-vu-chu-tich-tap-doan-ca-phe-trung-nguyen-sai-dau-sua-do-304777.html' },
    ],
    advice: [
      { title: 'Nghĩ lớn từ sản phẩm nhỏ nhất', desc: 'Dù bán phở, bán cà phê hay bán bánh mì, hãy nghĩ sản phẩm của bạn có thể phục vụ cả thế giới.' },
      { title: 'Sai đâu sửa đó, không bỏ cuộc', desc: 'Sai chiến lược thì sửa chiến lược, sai thực thi thì sửa thực thi. Cách duy nhất thất bại là ngừng lại.' },
      { title: 'Không có tiền thì phải có chí', desc: 'Với người khởi nghiệp, ý chí và mồ hôi là vốn đầu tiên. Tiền đến sau khi bạn đã chứng minh bạn có thể làm được.' },
    ],
    links: [
      { label: '"Sai đâu, sửa đó" (Doanh Nhân Sài Gòn)', url: 'https://doanhnhansaigon.vn/dang-le-nguyen-vu-chu-tich-tap-doan-ca-phe-trung-nguyen-sai-dau-sua-do-304777.html', type: 'article' },
      { label: 'Cuộc trò chuyện hiếm hoi (Tiền Phong)', url: 'https://tienphong.vn/cuoc-tro-chuyen-hiem-hoi-va-nhung-bi-an-cua-vua-ca-phe-trung-nguyen-dang-le-nguyen-vu-post1543426.tpo', type: 'article' },
    ],
    socials: [{ platform: 'website', url: 'https://trungnguyenlegend.com' }],
  },

  {
    id: 'le-hoang-diep-thao',
    slug: 'le-hoang-diep-thao',
    name: 'Lê Hoàng Diệp Thảo',
    descriptor: '"Nữ hoàng cà phê" — CEO King Coffee, đưa cà phê Việt ra 120+ quốc gia',
    photo: '/experts/le-hoang-diep-thao.webp',
    category: 'inspiration',
    tags: ['Cà phê', 'Nữ doanh nhân', 'Thương hiệu toàn cầu'],
    shortBio: 'Đồng sáng lập Trung Nguyên Group và hiện là Chủ tịch kiêm CEO TNI King Coffee. Bà đã đưa King Coffee đến 120+ quốc gia, được vinh danh "Most Admired CEO in Vietnam" (F&B, 2020).',
    fullBio: 'Lê Hoàng Diệp Thảo sinh năm 1973 tại Gia Lai. Cùng với chồng cũ Đặng Lê Nguyên Vũ, bà đồng sáng lập Trung Nguyên Group và trực tiếp điều hành từ 1998-2014, đóng vai trò then chốt đưa thương hiệu G7 ra thị trường quốc tế.\n\nNăm 2015, bà sáng lập TNI King Coffee với chiến lược "ngược dòng" — xâm nhập thị trường quốc tế trước để xây dựng uy tín, sau đó quay lại chiếm lĩnh nội địa. Chỉ trong 1 năm, mạng lưới phân phối phủ 63 tỉnh thành. Đến nay, King Coffee hiện diện tại hơn 120 quốc gia.\n\nBà nhận giải "Most Admired CEO in Vietnam" (Global Brands Magazine, 2020), là diễn giả người Việt đầu tiên tại Allegra World Coffee Portal CEO Forum. Bà khởi xướng dự án "Women Can Do" hỗ trợ 100.000 phụ nữ khởi nghiệp.',
    highlights: [
      'Đồng sáng lập Trung Nguyên Group, trực tiếp điều hành 1998-2014',
      'Sáng lập King Coffee (2015) — xuất khẩu 120+ quốc gia',
      '"Most Admired CEO in Vietnam" (F&B) — Global Brands Magazine (2020)',
      'Khởi xướng "Women Can Do" hỗ trợ 100.000 phụ nữ khởi nghiệp',
    ],
    quotes: [
      { text: 'Cà phê luôn mang đến cho tôi niềm vui, sự sáng tạo và đam mê vô tận.', source: 'Global Brands Magazine', sourceUrl: 'https://www.globalbrandsmagazine.com/interview-of-madame-le-hoangdiep-thao-founder-ceo-king-coffee/' },
      { text: 'Hãy ra ngoài để thấy cơ hội và hành động. Chính thành tựu tạo nên uy tín và danh tiếng, không phải lời nói.', source: 'King Coffee US', sourceUrl: 'https://us.kingcoffee.com/blogs/news/businesswoman-le-hoang-diep-thao-and-the-journey-to-build-the-worldwide-brand-named-king-coffee' },
      { text: 'Tại sao giá một tách cà phê ở nước ngoài là 5 đô la, mà ở nước ta nông dân chỉ bán hạt cà phê được 5 xu/kg?', source: 'King Coffee US', sourceUrl: 'https://us.kingcoffee.com/blogs/news/businesswoman-le-hoang-diep-thao-and-the-journey-to-build-the-worldwide-brand-named-king-coffee' },
    ],
    advice: [
      { title: 'Chiến lược "ngược dòng"', desc: 'Xâm nhập thị trường quốc tế trước để xây dựng uy tín, sau đó quay về chiếm lĩnh nội địa với lợi thế thương hiệu.' },
      { title: 'Hành động tạo nên uy tín', desc: 'Đừng chỉ nói về dự định, hãy làm và để kết quả nói thay bạn.' },
      { title: 'Xây dựng chuỗi giá trị từ nông dân', desc: 'Giá trị thực sự của ngành cà phê Việt nằm ở người trồng. Hỗ trợ nông dân là hỗ trợ chính mình.' },
    ],
    links: [
      { label: 'Phỏng vấn CEO King Coffee (Global Brands Magazine)', url: 'https://www.globalbrandsmagazine.com/interview-of-madame-le-hoangdiep-thao-founder-ceo-king-coffee/', type: 'article' },
      { label: '30 năm định danh cà phê Việt (Thanh Niên)', url: 'https://thanhnien.vn/ceo-le-hoang-diep-thao-30-nam-hanh-trinh-dinh-danh-ca-phe-viet-185260218155826603.htm', type: 'article' },
    ],
    socials: [
      { platform: 'linkedin', url: 'https://vn.linkedin.com/in/le-hoang-diep-thao-%F0%9F%87%BB%F0%9F%87%B3-14436b142' },
      { platform: 'website', url: 'https://kingcoffee.com' },
    ],
  },

  {
    id: 'david-thai',
    slug: 'david-thai',
    name: 'David Thái',
    descriptor: 'Việt kiều đầu tiên lập doanh nghiệp tư nhân ở Hà Nội — "cha đẻ" chuỗi cà phê lớn nhất Việt Nam',
    photo: '/experts/david-thai.webp',
    category: 'inspiration',
    tags: ['Cà phê', 'Thương hiệu Việt', 'Việt kiều'],
    shortBio: 'David Thái (Thái Phi Diệp, sinh 1972) — Việt kiều đầu tiên cấp phép doanh nghiệp tư nhân Hà Nội (1998), từ $1K → Highlands Coffee (2002) chuỗi lớn nhất VN. Từ chối Starbucks: "Đây là thương hiệu Việt Nam, đây là Việt Nam." Young Global Leader WEF (2009). Không bao giờ rút cổ tức — tái đầu tư 100% lợi nhuận. "Chiến lược là con người, tất cả là con người."',
    fullBio: 'David Thái (Thái Phi Diệp) sinh năm 1972 tại Việt Nam, sang Mỹ năm 1979. Lớn lên ở Seattle, tốt nghiệp Quản trị Kinh doanh tại University of Washington. Năm 1996, ông trở về Việt Nam với gần 1.000 USD. Năm 1998, ông trở thành Việt kiều đầu tiên được cấp phép thành lập doanh nghiệp tư nhân tại Hà Nội.\n\nNăm 2002, hai cửa hàng Highlands Coffee đầu tiên khai trương. Khi Starbucks đề nghị mua lại, ông dứt khoát từ chối: "Đây là thương hiệu Việt Nam, đây là Việt Nam." Năm 2009, World Economic Forum vinh danh ông là Young Global Leader.\n\nĐiều đặc biệt: ông chưa từng rút cổ tức từ Highlands — kiếm tiền ở nơi khác và tái đầu tư toàn bộ vào công ty.',
    highlights: [
      'Việt kiều đầu tiên thành lập doanh nghiệp tư nhân tại Hà Nội (1998)',
      'Từ chối đề nghị mua lại từ Starbucks để bảo vệ bản sắc Việt',
      'Young Global Leader — World Economic Forum (2009)',
      'Chưa từng rút cổ tức — tái đầu tư toàn bộ lợi nhuận vào Highlands',
    ],
    quotes: [
      { text: 'Các bạn không thể làm thế. Đây là thương hiệu Việt Nam, đây là Việt Nam.', source: 'CafeF', sourceUrl: 'https://cafef.vn/nha-sang-lap-david-thai-lan-dau-ke-chuyen-suyt-ban-highlands-coffee-cho-starbucks-va-khao-khat-phuc-hung-robusta-toi-kiem-tien-o-cho-khac-roi-don-ca-vao-highlands-188250417023804317.chn' },
      { text: 'Tôi chưa từng rút tiền ra khỏi Highlands. Tôi kiếm tiền ở nơi khác, rồi đổ tất cả vào Highlands. Đó là một cam kết thực sự.', source: 'CafeF', sourceUrl: 'https://cafef.vn/nha-sang-lap-david-thai-lan-dau-ke-chuyen-suyt-ban-highlands-coffee-cho-starbucks-va-khao-khat-phuc-hung-robusta-toi-kiem-tien-o-cho-khac-roi-don-ca-vao-highlands-188250417023804317.chn' },
      { text: 'Chiến lược của tôi là con người, tất cả là về con người. Không thể nào thành công mà không có mọi người.', source: 'CafeF', sourceUrl: 'https://cafef.vn/nha-sang-lap-david-thai-lan-dau-ke-chuyen-suyt-ban-highlands-coffee-cho-starbucks-va-khao-khat-phuc-hung-robusta-toi-kiem-tien-o-cho-khac-roi-don-ca-vao-highlands-188250417023804317.chn' },
    ],
    advice: [
      { title: '"All-in" vào sự nghiệp', desc: 'David chưa bao giờ rút cổ tức từ Highlands, tái đầu tư 100% lợi nhuận. Cam kết cá nhân là nền tảng của thành công.' },
      { title: 'Con người là chiến lược số 1', desc: 'Tìm đúng người và khiến họ làm việc cùng nhau. Cà phê thì dễ, chiến lược cũng dễ — phần khó nhất là con người.' },
      { title: 'Bảo vệ bản sắc thương hiệu', desc: 'Dù có cơ hội lợi nhuận lớn, giá trị cốt lõi của thương hiệu Việt không được bán.' },
    ],
    links: [
      { label: 'Kể chuyện suýt bán cho Starbucks (CafeF)', url: 'https://cafef.vn/nha-sang-lap-david-thai-lan-dau-ke-chuyen-suyt-ban-highlands-coffee-cho-starbucks-va-khao-khat-phuc-hung-robusta-toi-kiem-tien-o-cho-khac-roi-don-ca-vao-highlands-188250417023804317.chn', type: 'article' },
      { label: 'Gặp "cha đẻ" Highlands Coffee (Thanh Niên)', url: 'https://thanhnien.vn/gap-cha-de-cua-highlands-coffee-david-thai-chung-toi-la-thuong-hieu-viet-18525041916232154.htm', type: 'article' },
    ],
    socials: [{ platform: 'website', url: 'https://highlandscoffee.com.vn' }],
  },

  {
    id: 'lam-boi-minh',
    slug: 'lam-boi-minh',
    name: 'Lâm Bội Minh',
    descriptor: 'Người tạo nên huyền thoại trà & cà phê 55+ năm — từ Bảo Lộc đến thương vụ trăm triệu đô',
    photo: '/experts/lam-boi-minh.webp',
    category: 'inspiration',
    tags: ['Trà Việt', 'Cà phê', 'Di sản thương hiệu'],
    shortBio: 'Lâm Bội Minh (sinh 1946) — sáng lập Phúc Long (1968) từ Bảo Lộc thị trường nhỏ lẻ → 55+ năm xây thương hiệu quốc gia, 1 công thức = hàng trăm lần thử. Masan mua 31% cổ phần (2022), cổ đông nhận 110 triệu USD. Mở Phúc Long Luxury (Đà Nẵng, 2025). Doanh nhân kín tiếng không mạng xã hội, nhưng di sản khổng lồ. Triết lý: "Danh tiếng tốt dễ mất hơn dễ có."',
    fullBio: 'Lâm Bội Minh sinh năm 1946, bắt đầu hành trình với Phúc Long từ năm 1968 trên cao nguyên trà Bảo Lộc. Ông tự nghiên cứu và học hỏi về trà và cà phê "từ những bước nhỏ nhất và đơn giản nhất." Mỗi công thức pha chế được thử nghiệm hàng trăm lần để đạt đủ tiêu chí: màu sắc, hương thơm, vẻ đẹp và hương vị.\n\nTrong những năm 1990, khi máy pha cà phê còn là món hàng xa xỉ, ông quyết tâm nhập một chiếc máy về cửa hàng tại Quận 1 TP.HCM. Triết lý của ông: "Giá trị không nằm ở số lượng cửa hàng mà nằm ở chất lượng cửa hàng."\n\nĐầu 2022, Masan Group mua 31% cổ phần, cổ đông nhận 110 triệu USD. Là doanh nhân cực kỳ kín tiếng — không ảnh công khai, không mạng xã hội — nhưng để lại di sản khổng lồ cho ngành F&B Việt Nam.',
    highlights: [
      'Sáng lập Phúc Long (1968) từ Bảo Lộc — thương hiệu trà & cà phê hơn 55 tuổi',
      'Thương vụ Masan: bán 31% cổ phần, cổ đông nhận 110 triệu USD (2022)',
      'Triết lý "chất lượng hơn số lượng" — mỗi công thức trải qua hàng trăm lần thử nghiệm',
      'Mở rộng sang hospitality: khách sạn Phúc Long Luxury (Đà Nẵng, 2025)',
    ],
    quotes: [
      { text: 'Danh tiếng tốt dễ mất hơn dễ có. Phải cả đời để xây dựng uy tín và chỉ cần một phút để đánh mất nó.', source: 'Vietnam Investment Review', sourceUrl: 'https://vir.com.vn/the-story-of-phuc-longs-50-year-journey-107719.html' },
      { text: 'Để tạo ra một công thức đồ uống hoàn hảo, tôi và đội ngũ đã thử nghiệm hàng trăm lần để chọn ra công thức đạt đủ tiêu chí về màu sắc, hương thơm, vẻ đẹp và hương vị.', source: 'Vietnam Investment Review', sourceUrl: 'https://vir.com.vn/the-story-of-phuc-longs-50-year-journey-107719.html' },
      { text: 'Nếu dám nghĩ và dám làm, trí tuệ sẽ luôn tỏa sáng, đặc biệt trong những lúc khó khăn.', source: 'Vietnam Investment Review', sourceUrl: 'https://vir.com.vn/the-story-of-phuc-longs-50-year-journey-107719.html' },
    ],
    advice: [
      { title: 'Chất lượng là tất cả', desc: 'Mỗi công thức phải trải qua hàng trăm lần thử nghiệm. Đừng bao giờ đánh đổi chất lượng lấy tốc độ mở rộng.' },
      { title: 'Bắt đầu từ những bước nhỏ nhất', desc: '"Tôi bắt đầu xây dựng Phúc Long bằng cách nghiên cứu và học hỏi từ những bước đơn giản và nhỏ bé nhất."' },
      { title: 'Dám nghĩ, dám làm', desc: '"Trí tuệ luôn tỏa sáng, đặc biệt trong những lúc khó khăn." Chỉ cần bạn dám hành động.' },
    ],
    links: [
      { label: 'Hành trình 50+ năm Phúc Long (VIR)', url: 'https://vir.com.vn/the-story-of-phuc-longs-50-year-journey-107719.html', type: 'article' },
      { label: 'Chuyện chưa kể về nhà sáng lập (CafeF)', url: 'https://cafef.vn/chuyen-chua-ke-ve-nha-sang-lap-thuong-hieu-phuc-long-188231003125835427.chn', type: 'article' },
    ],
    socials: [{ platform: 'website', url: 'https://phuclong.com.vn' }],
  },

  {
    id: 'truong-nguyen-thien-kim',
    slug: 'truong-nguyen-thien-kim',
    name: 'Trương Nguyễn Thiên Kim',
    descriptor: '"Nữ tướng F&B kín tiếng" — người đứng sau đế chế nghìn tỷ Katinat, Phê La, D1 Concepts',
    photo: '/experts/truong-nguyen-thien-kim.webp',
    category: 'inspiration',
    tags: ['Cà phê', 'Nữ doanh nhân', 'Chuỗi F&B'],
    shortBio: 'Trương Nguyễn Thiên Kim (sinh 1976) — Chủ tịch D1 Concepts, sở hữu Katinat 84.21% + Phê La 51%, khối tài sản 6 tỷ với chồng Tô Hải (Vietcap). Katinat = premium TP.HCM; Phê La = "cà phê lúc bình minh" viral TikTok (2024) #1 xu hướng mạng. Nữ doanh nhân F&B quyền lực nhất VN, kín tiếng hiếm phỏng vấn. Chiến lược: chia thị trường để tránh nội bộ cạnh tranh.',
    fullBio: 'Trương Nguyễn Thiên Kim sinh ngày 28/11/1976 tại Đà Lạt, tốt nghiệp Thạc sĩ Tài chính tại ĐH Kinh tế TP.HCM. Bà bắt đầu sự nghiệp trong ngành chứng khoán (Bảo Việt, Đông Á) và Trưởng Ban Kiểm soát tại PNJ.\n\nVới D1 Concepts (thành lập 2012), bà xây dựng portfolio F&B ấn tượng: San Fu Lou, Sorae, Dì Mai. Sự bùng nổ thực sự đến từ Katinat Saigon Kafe — chuỗi cà phê premium "made in Saigon" — và Phê La, tạo nên hiện tượng "cà phê lúc bình minh" trên mạng xã hội.\n\nCùng chồng Tô Hải (TGĐ Vietcap Securities), họ sở hữu khối tài sản gần 6.000 tỷ đồng. Bà là doanh nhân cực kỳ kín tiếng — hiếm khi trả lời phỏng vấn.',
    highlights: [
      'Sở hữu Katinat (84.21%), Phê La (51%), Chủ tịch D1 Concepts',
      'Katinat trở thành chuỗi cà phê premium dẫn đầu TP.HCM',
      'Phê La tạo hiện tượng "cà phê bình minh" — viral nhất mạng xã hội (2024)',
      'Khối tài sản 6.000 tỷ đồng cùng chồng (Tô Hải, Chủ tịch Vietcap)',
    ],
    quotes: [
      { text: 'Katinat chọn TP.HCM làm thị trường đầu tiên, Phê La mở cửa hàng đầu tiên tại Hà Nội — chiến lược chia thị trường để tránh cạnh tranh nội bộ.', source: 'Người Quan Sát', sourceUrl: 'https://nguoiquansat.vn/bi-quyet-giup-phe-la-cua-nu-dai-gia-truong-nguyen-thien-kim-tro-thanh-trao-luu-ca-phe-luc-binh-minh-163889.html' },
    ],
    advice: [
      { title: 'Xây dựng portfolio đa dạng', desc: 'Không phụ thuộc một thương hiệu. Cùng lúc vận hành fine dining, casual và mass market.' },
      { title: 'Chia thị trường để tránh cạnh tranh nội bộ', desc: 'Katinat tập trung TP.HCM, Phê La đánh Hà Nội. Mỗi thương hiệu có "sân chơi" riêng.' },
      { title: 'Tận dụng sức mạnh mạng xã hội', desc: 'Phê La bùng nổ nhờ trào lưu "cà phê bình minh" trên TikTok.' },
    ],
    links: [
      { label: 'Chân dung nữ doanh nhân nghìn tỷ (CafeF)', url: 'https://cafef.vn/chan-dung-nu-doanh-nhan-nghin-ty-dung-sau-chuoi-katinat-phe-la-188240913132444185.chn', type: 'article' },
      { label: 'Nữ đại gia đứng sau Phê La, Katinat (Znews)', url: 'https://znews.vn/nu-dai-gia-dung-sau-chuoi-phe-la-katinat-la-ai-post1494565.html', type: 'article' },
    ],
    socials: [],
  },

  {
    id: 'nguyen-thi-kim-oanh',
    slug: 'nguyen-thi-kim-oanh',
    name: 'Nguyễn Thị Kim Oanh',
    descriptor: 'Từ Hoa khôi Thể thao đầu tiên của VN đến người tiên phong chuỗi nhà hàng ẩm thực Việt hiện đại',
    photo: '/experts/nguyen-thi-kim-oanh.webp',
    category: 'inspiration',
    tags: ['Ẩm thực Việt', 'Nữ doanh nhân', 'Chuỗi nhà hàng'],
    shortBio: 'Nguyễn Thị Kim Oanh (sinh 1975) — Hoa khôi Thể thao #1 VN (1993) → Wrap & Roll (2006), tiên phong chuỗi nhà hàng món Việt hiện đại, 12 quán + 6 Singapore + gọi 6.9M USD (2016). Đại diện nữ doanh nhân châu Á Ernst & Young Winning Women. Triết lý: "Uy tín, trách nhiệm, cam kết > chuyên môn; muốn đi cùng lâu phải chia sẻ giá trị."',
    fullBio: 'Nguyễn Thị Kim Oanh sinh năm 1975 tại Hải Phòng, đăng quang Hoa khôi Thể thao đầu tiên của Việt Nam năm 1993. Bà dành 7 năm giúp chồng xây dựng Sudest Production — công ty sản xuất phim tư nhân đầu tiên tại Việt Nam.\n\nNăm 2006, bà sáng lập Wrap & Roll — chuỗi nhà hàng tiên phong đưa món cuốn truyền thống Việt vào mô hình hiện đại. Sau 10 năm: 12 cửa hàng tại Hà Nội và TP.HCM, 4 nhượng quyền tại Singapore, và 6.9 triệu USD đầu tư. Bà đại diện nữ doanh nhân châu Á tại Ernst & Young Winning Women.\n\nTriết lý: "Uy tín, trách nhiệm và cam kết — chuyên môn chỉ là công cụ, điều kết nối đội ngũ lâu dài là chia sẻ cùng giá trị."',
    highlights: [
      'Hoa khôi Thể thao đầu tiên của Việt Nam (1993)',
      'Sáng lập Wrap & Roll (2006) — tiên phong chuỗi nhà hàng món Việt hiện đại',
      'Gọi vốn 6.9 triệu USD từ Mekong Enterprise Fund III (2016)',
      'Đại diện nữ doanh nhân châu Á tại Ernst & Young Winning Women',
    ],
    quotes: [
      { text: 'Uy tín, trách nhiệm và cam kết là ba giá trị tôi luôn giữ gìn trong cả công việc lẫn cuộc sống cá nhân.', source: 'Vietcetera', sourceUrl: 'https://vietcetera.com/en/a-working-woman-business-leader-kim-oanh-on-measuring-what-really-matters' },
      { text: 'Chuyên môn chỉ là công cụ; muốn đi cùng nhau lâu dài, cần chia sẻ cùng giá trị.', source: 'Vietcetera', sourceUrl: 'https://vietcetera.com/en/a-working-woman-business-leader-kim-oanh-on-measuring-what-really-matters' },
      { text: 'Nếu bạn là lãnh đạo, bạn phải chịu trách nhiệm trong mọi hoàn cảnh.', source: 'Vietcetera', sourceUrl: 'https://vietcetera.com/en/a-working-woman-business-leader-kim-oanh-on-measuring-what-really-matters' },
    ],
    advice: [
      { title: 'Uy tín là tất cả', desc: 'Chỉ khi cam kết toàn tâm với lời hứa, bạn mới cảm nhận được sức nặng của nó lên danh tiếng và thành công.' },
      { title: 'Lãnh đạo F&B phải hiểu sản phẩm', desc: 'Không chỉ có chiến lược mà phải có kiến thức sâu về món ăn, nguyên liệu, quy trình.' },
      { title: 'Chia sẻ giá trị, không chỉ chia sẻ công việc', desc: 'Muốn đi cùng nhau lâu dài, cần chia sẻ cùng giá trị.' },
    ],
    links: [
      { label: 'Kim Oanh — Measuring What Really Matters (Vietcetera)', url: 'https://vietcetera.com/en/a-working-woman-business-leader-kim-oanh-on-measuring-what-really-matters', type: 'article' },
      { label: '10 năm sau thương vụ Wrap & Roll (Kênh14)', url: 'https://kenh14.vn/10-nam-sau-thuong-vu-ban-wraproll-hoa-khoi-the-thao-dau-tien-cua-viet-nam-tai-xuat-voi-nha-hang-moi-tien-se-toi-sau-215251124091443877.chn', type: 'article' },
    ],
    socials: [{ platform: 'linkedin', url: 'https://vn.linkedin.com/in/oanh-kim-nguyen-332a37136' }],
  },

  {
    id: 'sanae-takasugi',
    slug: 'sanae-takasugi',
    name: 'Sanae Takasugi',
    descriptor: 'Đồng sáng lập & Phó CEO Pizza 4P\'s — người xây dựng văn hóa "Oneness" từ pizza đến triết lý sống',
    photo: '/experts/sanae-takasugi.webp',
    category: 'inspiration',
    tags: ['Nhà hàng', 'Bền vững', 'Văn hóa doanh nghiệp'],
    shortBio: 'Sanae Takasugi — đồng sáng lập & Phó CEO Pizza 4P\'s (2011), từ tiệc pizza sân sau 14-15 bánh → 32+ quán 4 quốc gia. Triết lý "Oneness: Earth to People." Tiên phong F&B bền vững: phô mai tự làm, rau organic, zero waste. "Wow moment" độc đáo: nhân viên viết tay tin nhắn lên hộp pizza. Câu hỏi: "Làm sao pizza giáp trái đất?" Câu trả lời trong 50-100 năm tương lai của Pizza 4P\'s.',
    fullBio: 'Sanae Takasugi tốt nghiệp Keio University (Nhật Bản), từng học tại Anh và Trung Quốc. Cùng chồng Yosuke Masuko sáng lập Pizza 4P\'s năm 2011 tại TP.HCM. Từ những buổi tiệc pizza tại nhà (mỗi lần chỉ 14-15 bánh), họ xây dựng chuỗi 32+ nhà hàng tại Việt Nam, Campuchia, Ấn Độ, Indonesia và Nhật Bản.\n\nPizza 4P\'s nổi tiếng với phô mai tự làm (từ trang trại ở Đơn Dương, Lâm Đồng), vườn rau organic, và cam kết bền vững (zero waste, năng lượng sạch). Triết lý "Oneness — Earth to People" tạo sự hài hòa giữa con người, thức ăn và trái đất.\n\nĐiểm đặc biệt: nhân viên viết tin nhắn tay lên mỗi hộp pizza — một "wow moment" nhỏ tạo nên trải nghiệm khác biệt.',
    highlights: [
      'Đồng sáng lập Pizza 4P\'s (2011) — từ tiệc pizza tại nhà thành chuỗi 32+ nhà hàng toàn châu Á',
      'Triết lý "Oneness — Earth to People" kết nối con người, thực phẩm và trái đất',
      'Tiên phong F&B bền vững: phô mai tự làm, rau organic, zero waste',
      'Mô hình "wow moment" — nhân viên viết tin nhắn tay lên hộp pizza',
    ],
    quotes: [
      { text: 'Bất kỳ doanh nghiệp nào hướng đến tương lai đều phải bền vững. Chúng tôi muốn Pizza 4P\'s vẫn làm điều này sau 50 hay 100 năm nữa.', source: 'The Dot Magazine', sourceUrl: 'https://thedotmagazine.com/pizza-4ps-co-founder-sanaes-story-so-far-of-their-quest-for-peace-through-pizza/' },
      { text: 'Chúng tôi PHẢI tìm cách làm mọi thứ bền vững, bất kể chiến lược công ty.', source: 'The Dot Magazine', sourceUrl: 'https://thedotmagazine.com/pizza-4ps-co-founder-sanaes-story-so-far-of-their-quest-for-peace-through-pizza/' },
      { text: 'Hành động nhỏ đầy tính nhân văn đó, chúng tôi hy vọng, sẽ tạo nên khoảnh khắc "wow" cho người nhận pizza.', source: 'The Dot Magazine', sourceUrl: 'https://thedotmagazine.com/pizza-4ps-co-founder-sanaes-story-so-far-of-their-quest-for-peace-through-pizza/' },
    ],
    advice: [
      { title: 'Bền vững không phải chiến lược — là điều kiện sống còn', desc: 'Đừng coi sustainable là marketing gimmick. Đó là cách duy nhất để tồn tại lâu dài.' },
      { title: 'Tạo "wow moment" từ những điều nhỏ', desc: 'Một tấm thiệp viết tay trên hộp pizza tạo nên trải nghiệm khác biệt, không cần đầu tư lớn.' },
      { title: 'Làm điều mình tin là đúng', desc: 'Thất bại là phần tự nhiên. Suy nghĩ kỹ, hành động dứt khoát, và chấp nhận kết quả.' },
    ],
    links: [
      { label: 'Quest for Peace Through Pizza (The Dot Magazine)', url: 'https://thedotmagazine.com/pizza-4ps-co-founder-sanaes-story-so-far-of-their-quest-for-peace-through-pizza/', type: 'article' },
      { label: 'Finding True North (Vietcetera Podcast)', url: 'https://vietcetera.com/en/who-am-i-finding-your-true-north-with-yosuke-masuko-and-sanae-takasugi', type: 'article' },
    ],
    socials: [
      { platform: 'linkedin', url: 'https://vn.linkedin.com/in/sanae-masuko-b9578294' },
      { platform: 'website', url: 'https://pizza4ps.com' },
    ],
  },

  {
    id: 'bobby-chinn',
    slug: 'bobby-chinn',
    name: 'Bobby Chinn',
    descriptor: '"Pharaoh of Fine Dining in the Far East" — đầu bếp khai phá fine dining tại Việt Nam',
    photo: '/experts/bobby-chinn.webp',
    category: 'inspiration',
    tags: ['Fine Dining', 'Ẩm thực Việt', 'Đầu bếp quốc tế'],
    shortBio: 'Bobby Chinn (gốc Ai Cập-Trung Quốc-Anh) — đến VN (1995), tiên phong fine dining Hà Nội, Restaurant Bobby Chinn (2001) Five-Diamonds Award. Giám khảo MBC Top Chef ME, host World Cafe, tác giả "Wild Wild East" (lời tựa Bourdain). Tourism Ambassador Vietnam to EU (2014), WWF Sustainable Seafood Ambassador (2012). Anthony Bourdain: "Những gì Bobby không biết về ẩm thực ĐNA thì không đáng để biết."',
    fullBio: 'Bobby Chinn sinh tại New Zealand, cha gốc Trung Quốc-Mỹ và mẹ người Ai Cập. Sau sự nghiệp tại sàn giao dịch chứng khoán New York và làm hài độc lập, ông học nấu ăn tại Fleur de Lys (San Francisco) dưới sự chỉ dẫn của Hubert Keller.\n\nNăm 1995, ông đến Việt Nam. Đỉnh cao là Restaurant Bobby Chinn (Hà Nội, 2001) — nhà hàng fine dining mở đường cho ẩm thực cấp cao tại Việt Nam, giành Five-Diamonds Award. Khách hàng gồm Bill Clinton, Bob Dylan.\n\nÔng là giám khảo thường trực MBC\'s Top Chef Middle East, host "World Cafe," tác giả "Wild Wild East" (2007). Được bổ nhiệm Tourism Ambassador for Vietnam to EU (2014) và WWF Sustainable Seafood Ambassador (2012).',
    highlights: [
      'Tiên phong fine dining tại Việt Nam: Restaurant Bobby Chinn (2001) — Five-Diamonds Award',
      'Tác giả "Wild Wild East" (2007) — lời tựa bởi Anthony Bourdain',
      'Giám khảo MBC\'s Top Chef Middle East; host World Cafe, Bobby Chinn Cooks Asia',
      'Tourism Ambassador for Vietnam to EU (2014)',
    ],
    quotes: [
      { text: 'Tôi vô tình trở thành đầu bếp, nhưng tôi sinh ra là một người lữ hành.', source: 'Bobby Chinn Official', sourceUrl: 'https://www.bobbychinn.com/about/' },
      { text: 'Nhà hàng của tôi không phải vì tiền. Tôi quá bướng bỉnh và đam mê để chơi trò đó.', source: 'The Ethicalist', sourceUrl: 'https://theethicalist.com/bobby-chinn-real-food-not-molecular-nonsense/' },
      { text: 'Ẩm thực Việt Nam là một sự thức tỉnh. Tươi, nhẹ, lành mạnh, hiện đại với nhiều tương phản.', source: 'Asian Supper', sourceUrl: 'https://asiansupper.com/theslurp/chef-interview-vietnam-15-years-later-bobby-chinn/' },
    ],
    advice: [
      { title: 'Đam mê phải thật', desc: '"Speak it, live it, do it." Đừng làm ngành F&B nếu bạn không thực sự yêu thức ăn và con người.' },
      { title: 'Học từ những người giỏi nhất', desc: 'Khi học từ người thực sự giỏi, bạn sẽ không phát triển thói quen xấu.' },
      { title: 'Hiểu truyền thống trước khi "fusion"', desc: 'Nhiều món fusion thất bại vì đầu bếp không master được món gốc. Phải thành thạo truyền thống trước khi sáng tạo.' },
    ],
    links: [
      { label: 'Bobby Chinn Official — About', url: 'https://www.bobbychinn.com/about/', type: 'article' },
      { label: 'Vietnam 15 Years Later (Asian Supper)', url: 'https://asiansupper.com/theslurp/chef-interview-vietnam-15-years-later-bobby-chinn/', type: 'article' },
    ],
    socials: [
      { platform: 'website', url: 'https://www.bobbychinn.com' },
      { platform: 'linkedin', url: 'https://www.linkedin.com/in/bobbychinn/' },
      { platform: 'instagram', url: 'https://www.instagram.com/bobbychinn/' },
    ],
  },

  {
    id: 'luke-nguyen',
    slug: 'luke-nguyen',
    name: 'Luke Nguyen',
    descriptor: 'Đầu bếp Úc gốc Việt — người kể chuyện ẩm thực VN ra thế giới qua 9 series truyền hình',
    photo: '/experts/luke-nguyen.webp',
    category: 'inspiration',
    tags: ['Ẩm thực Việt', 'Đầu bếp quốc tế', 'Truyền hình'],
    shortBio: 'Luke Nguyen (sinh 1978, trại tị nạn Thái Lan) — đầu bếp Úc gốc Việt, Red Lantern (23 tuổi) nhà hàng được trao giải nhiều nhất Úc, người trẻ nhất Sydney Morning Herald Food Hall of Fame. 9 series TV → 150 quốc gia, 5 sách bán chạy. Red Lantern, Vietnam House (Đồng Khởi), GRAIN studio. Little Lantern Foundation Hội An đào tạo nghề thanh niên khó khăn. Câu chuyện: từ phở gia đình → nâng tầm ẩm thực Việt sân khấu quốc tế.',
    fullBio: 'Luke Nguyen sinh tại trại tị nạn ở Thái Lan năm 1978, gia đình đến Úc năm 1979. Lớn lên tại Cabramatta, Sydney, học nấu ăn từ bố mẹ tại nhà hàng gia đình Phở Cây Du suốt 15 năm.\n\nLúc 23 tuổi, ông cùng chị gái mở Red Lantern — nhà hàng Việt/Châu Á được trao giải nhiều nhất nước Úc. Ông là người trẻ nhất vào Sydney Morning Herald\'s Food Hall of Fame.\n\nÔng đã quay 9 series truyền hình phát sóng tại 150 quốc gia, tác giả 5 sách bán chạy quốc tế. Hiện sở hữu Vietnam House (Đồng Khởi) và đồng sáng lập GRAIN cooking studio tại TP.HCM. Sáng lập Little Lantern Foundation tại Hội An, đào tạo nghề cho thanh niên khó khăn.',
    highlights: [
      'Mở Red Lantern lúc 23 tuổi — nhà hàng Việt/Châu Á được trao giải nhiều nhất nước Úc',
      '9 series truyền hình phát sóng tại 150 quốc gia, 5 sách bán chạy quốc tế',
      'Người trẻ nhất vào Sydney Morning Herald\'s Food Hall of Fame',
      'Sáng lập Little Lantern Foundation (Hội An) đào tạo nghề cho thanh niên khó khăn',
    ],
    quotes: [
      { text: 'Là đầu bếp và chủ nhà hàng, bạn phải kể câu chuyện của món ăn — về lịch sử, văn hóa, đất nước và con người.', source: 'Australian Embassy Vietnam', sourceUrl: 'https://vietnam.embassy.gov.au/hnoi/50Stories_LukeNguyen_EN.html' },
      { text: 'Sứ mệnh cá nhân của tôi là nâng tầm ẩm thực Việt Nam để khách hàng được thưởng thức trải nghiệm dining hoàn chỉnh, không chỉ là "rẻ và vui."', source: 'Vietcetera', sourceUrl: 'https://vietcetera.com/en/luke-nguyen-whats-on-the-roadmap-for-vietnamese-cuisine' },
      { text: 'Ẩm thực Việt Nam cũng có thể kết hợp với rượu vang tuyệt vời, không chỉ là bia hơi.', source: 'Vietcetera', sourceUrl: 'https://vietcetera.com/en/luke-nguyen-whats-on-the-roadmap-for-vietnamese-cuisine' },
    ],
    advice: [
      { title: 'Kể chuyện qua món ăn', desc: 'Mỗi món ăn có lịch sử, văn hóa và con người. Đầu bếp và chủ nhà hàng phải là người kể chuyện.' },
      { title: 'Nâng tầm, đừng hạ giá', desc: 'Ẩm thực Việt xứng đáng với trải nghiệm dining hoàn chỉnh, không chỉ là "rẻ và vui."' },
      { title: 'Giữ bản sắc, trình bày hiện đại', desc: 'Công thức truyền thống Việt nhưng format phù hợp thị trường quốc tế.' },
    ],
    links: [
      { label: '50 Stories — Luke Nguyen (Đại sứ quán Úc)', url: 'https://vietnam.embassy.gov.au/hnoi/50Stories_LukeNguyen_EN.html', type: 'article' },
      { label: 'Roadmap for Vietnamese Cuisine (Vietcetera)', url: 'https://vietcetera.com/en/luke-nguyen-whats-on-the-roadmap-for-vietnamese-cuisine', type: 'article' },
    ],
    socials: [
      { platform: 'instagram', url: 'https://www.instagram.com/lukenguyencooks/' },
      { platform: 'website', url: 'http://vietnamhousesaigon.com/' },
    ],
  },

  {
    id: 'john-pemberton',
    slug: 'john-pemberton',
    name: 'John Pemberton',
    descriptor: 'Từ giám đốc IKEA đến người khai phá bia thủ công VN — xây dựng thương hiệu bia craft hàng đầu Châu Á',
    photo: '/experts/john-pemberton.webp',
    category: 'inspiration',
    tags: ['Bia craft', 'Khởi nghiệp', 'F&B Sài Gòn'],
    shortBio: 'John Pemberton — từ IKEA Deputy Trading Manager → Heart of Darkness (2016), thương hiệu bia craft hàng đầu VN xây từ tự học YouTube. Country Champion Asia Beer Championships 2023, Tokyo International Beer Cup. Mở Singapore, Thái Lan. Triết lý: "Người Việt quen hương vị đậm đà → tự nhiên thích bia profile phức tạp. Đối xử nhà xưởng như sân chơi." Vấn đề: "Bia craft ở VN còn phôi thai; còn rất nhiều việc phải làm."',
    fullBio: 'John Pemberton sinh tại Úc, lớn lên ở Anh. Những năm 1990 tại New York, ông phát triển tình yêu với bia craft qua phong trào craft beer đang non trẻ của Mỹ.\n\nNăm 2013, IKEA đưa ông đến Việt Nam. Thất vọng vì không tìm được bia craft chất lượng, ông tự học nấu bia tại nhà. Heart of Darkness ra đời năm 2016 tại Quận 1, TP.HCM.\n\nTừ đó, Heart of Darkness giành nhiều giải quốc tế: Country Champion tại Asia Beer Championships (2023), giải tại Tokyo International Beer Cup. Thương hiệu mở rộng ra Singapore và Thái Lan.',
    highlights: [
      'Sáng lập Heart of Darkness Brewery (2016) — thương hiệu bia craft hàng đầu Việt Nam',
      'Country Champion Brewery tại Asia Beer Championship 2023',
      'Mở rộng ra Singapore và Thái Lan; hàng trăm loại bia đã ra mắt',
      'Từ tự học nấu bia tại nhà đến xây dựng thương hiệu khu vực',
    ],
    quotes: [
      { text: 'Bia craft ở Việt Nam vẫn còn ở giai đoạn phôi thai và còn rất nhiều việc phải làm.', source: 'Vietcetera', sourceUrl: 'https://vietcetera.com/en/heart-of-darkness-craft-brewery-building-an-asian-craft-beer-empire' },
      { text: 'Người Việt quen với hương vị đậm đà, mạnh mẽ. Điều này giúp họ tự nhiên thưởng thức được những loại bia có profile phức tạp.', source: 'Vietcetera', sourceUrl: 'https://vietcetera.com/en/heart-of-darkness-craft-brewery-building-an-asian-craft-beer-empire' },
      { text: 'Chúng tôi đối xử nhà xưởng như sân chơi. Mục tiêu là thực sự đẩy giới hạn.', source: 'Vietcetera', sourceUrl: 'https://vietcetera.com/en/heart-of-darkness-craft-brewery-building-an-asian-craft-beer-empire' },
    ],
    advice: [
      { title: 'Tầm nhìn khu vực từ ngày đầu', desc: '"Ý tưởng mở rộng Châu Á đã được baked into kế hoạch từ ngày đầu." Đừng đợi lớn mới nghĩ đến scale.' },
      { title: 'Hiểu khách hàng địa phương', desc: 'Người Việt quen hương vị đậm đà. Họ tự nhiên thích bia có profile phức tạp. Đừng giả định họ chỉ uống bia nhẹ.' },
      { title: 'Đối xử nhà xưởng như sân chơi', desc: 'Sáng tạo và thử nghiệm liên tục. Mỗi loại bia mới là một cuộc thí nghiệm.' },
    ],
    links: [
      { label: 'Building An Asian Craft Beer Empire (Vietcetera)', url: 'https://vietcetera.com/en/heart-of-darkness-craft-brewery-building-an-asian-craft-beer-empire', type: 'article' },
      { label: 'Craft Beer in Vietnam — Podcast (Talk Travel Asia)', url: 'https://talktravelasia.com/2017/09/01/episode-67-craft-beer-in-vietnam-with-john-pemberton/', type: 'article' },
    ],
    socials: [
      { platform: 'linkedin', url: 'https://www.linkedin.com/in/john-pemberton-29901819/' },
      { platform: 'website', url: 'https://heartofdarknessbrewery.com' },
    ],
  },

  // ── Chuyên gia tư vấn (thêm) ──

  {
    id: 'phan-anh-minh',
    slug: 'phan-anh-minh',
    name: 'Phan Anh Minh',
    descriptor: 'Chuyên gia mặt bằng số 1 Việt Nam — tác giả "Đến Sahara mở quán trà đá," tư vấn vị trí cho hàng trăm chuỗi F&B',
    photo: '/experts/phan-anh-minh.webp',
    category: 'consultant',
    tags: ['Mặt bằng', 'Tư vấn F&B', 'Chuỗi cửa hàng'],
    shortBio: 'Phan Anh Minh — CEO & Founder SitePlus, công ty tư vấn mặt bằng đầu tiên VN, 10+ năm phát triển 3 chuỗi tiện lợi lớn + tư vấn Ministop, 30Shine, Pi Thai, Levents, Fight100. Tác giả "Đến Sahara mở quán trà đá" (2024) Top 10 sách kinh doanh hay nhất, "Quy tắc 6T" + 21 sai lầm phổ biến. Triết lý: "Mặt bằng phải phù hợp mô hình; chọn sai địa điểm thì all-in chiến lược cũng thất bại."',
    fullBio: 'Phan Anh Minh là người sáng lập và CEO của SitePlus — công ty tư vấn chiến lược phát triển mặt bằng đầu tiên tại Việt Nam. Với hơn 10 năm kinh nghiệm, ông đã triển khai phát triển mặt bằng cho 3 chuỗi cửa hàng tiện lợi lớn nhất Việt Nam và tư vấn cho Ministop, 30Shine, Rau Má Mix, Pi Thai, Levents, Fight100.\n\nÔng là tác giả cuốn "Đến Sahara mở quán trà đá — Bí quyết tìm kiếm mặt bằng kinh doanh" (NXB Thế Giới / Giver Books) — cuốn sách đầu tiên tại Việt Nam về phát triển mặt bằng kinh doanh, lọt Top 10 sách kinh doanh hay nhất 2024. Sách giới thiệu "Quy tắc 6T" để nhận diện mặt bằng tiềm năng và 21 sai lầm phổ biến phải tránh.\n\nÔng thường xuyên chia sẻ kiến thức chuyên môn qua Substack, TikTok và Facebook.',
    highlights: [
      'Sáng lập SitePlus — công ty tư vấn mặt bằng kinh doanh đầu tiên tại Việt Nam',
      'Tác giả "Đến Sahara mở quán trà đá" — Top 10 sách kinh doanh hay nhất 2024',
      '10+ năm kinh nghiệm, triển khai mặt bằng cho 3 chuỗi convenience store lớn nhất VN',
      'Tư vấn chiến lược cho Ministop, 30Shine, Rau Má Mix, Pi Thai, Levents, Fight100',
    ],
    quotes: [
      { text: 'Mặt bằng phải phù hợp với mô hình kinh doanh và nhu cầu của doanh nghiệp.', source: 'MinhPhan Substack', sourceUrl: 'https://minhphansiteplus.substack.com/p/mat-bang-va-mo-hinh-kinh-doanh' },
      { text: 'Chọn mặt bằng là quyết định lớn — không chỉ vì tiền đặt cọc lên đến hàng trăm triệu, mà quyết định này sẽ đồng hành với bạn nhiều năm.', source: 'Báo Đồng Nai', sourceUrl: 'https://baodongnai.com.vn/dong-nai-cuoi-tuan/202410/den-sahara-mo-quan-tra-da-fce5da2/' },
      { text: 'Hãy cứ khát khao, cứ dại khờ, vì khi còn mơ ước, bạn thật sự phấn đấu.', source: 'Trí Tuệ Mới', sourceUrl: 'https://trituemoi.vn/doi-song/den-sahara-mo-quan-tra-da-nhung-bai-hoc-xuong-mau-tu-chuyen-gia-phat-trien-cua-hang-344.html' },
    ],
    advice: [
      { title: 'Áp dụng "Quy tắc 6T" trước khi chọn mặt bằng', desc: 'Vị trí, Tập trung (foot traffic), Thu nhập khu vực, Diện tích, Tầm nhìn (visibility), Thuận tiện (accessibility). 6 yếu tố quyết định mặt bằng có phù hợp hay không.' },
      { title: 'Tránh 21 sai lầm phổ biến', desc: 'Như chọn mặt bằng vì "thấy đông người" mà không phân tích dòng khách mục tiêu, không đàm phán kỹ hợp đồng thuê.' },
      { title: 'Quy trình 4 bước "săn mặt bằng"', desc: 'Khoanh vùng → Thu thập thông tin → Khảo sát thực địa → Đàm phán. Làm tuần tự, không nhảy cóc.' },
    ],
    links: [
      { label: 'Website MinhPhan.vn', url: 'https://minhphan.vn/', type: 'article' },
      { label: 'Review sách "Đến Sahara" (Báo Đồng Nai)', url: 'https://baodongnai.com.vn/dong-nai-cuoi-tuan/202410/den-sahara-mo-quan-tra-da-fce5da2/', type: 'article' },
      { label: 'Mặt bằng và Mô hình kinh doanh (Substack)', url: 'https://minhphansiteplus.substack.com/p/mat-bang-va-mo-hinh-kinh-doanh', type: 'article' },
    ],
    socials: [
      { platform: 'website', url: 'https://minhphan.vn/' },
      { platform: 'facebook', url: 'https://facebook.com/minhphan155189' },
      { platform: 'tiktok', url: 'https://www.tiktok.com/@minhphan.siteplus' },
    ],
  },
];

export default EXPERTS;
