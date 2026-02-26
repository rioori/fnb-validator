import type { Expert } from '@/types';

const EXPERTS: Expert[] = [
  // ── Expert Advisors ──
  {
    id: 'do-duy-thanh',
    slug: 'do-duy-thanh',
    name: 'Đỗ Duy Thanh',
    descriptor: 'Creator of the 9Ps Restaurant Management model, 20+ years empowering hundreds of Vietnamese F&B brands',
    photo: '/experts/do-duy-thanh.webp',
    category: 'consultant',
    tags: ['Strategy', 'F&B Management', 'Training'],
    shortBio: 'Vietnam\'s leading F&B consultant with 20+ years of experience. Founded FnB Director and Horeca Business School. Advised Vingroup, Saigon Tourist, Nova FnB, Gojek, Baemin.',
    fullBio: 'Đỗ Duy Thanh is a business strategy consultant with over 20 years in Vietnam\'s F&B, Hospitality, and Retail sectors. Before consulting, he served as Business Director at D1 Concepts (San Fu Lou, Sorae) and Oriental Saigon — twice named in The Daily Meal\'s Top 101 Best Restaurants in Asia.\n\nIn 2012, he founded FnB Director — a boutique consulting firm that has partnered with 100+ projects. In 2019, he joined the Harvard Business Review Advisory Board. In 2025, he founded Horeca Business School for hospitality education.',
    highlights: [
      '20+ years of experience, 12+ years strategic consulting, 100+ projects',
      'Creator of the 9Ps Restaurant Management model',
      'Harvard Business Review Advisory Board member (since 2019)',
      'Clients include: Vingroup, Saigon Tourist, Nova FnB, Milano Coffee, Gojek, Baemin',
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
        title: 'Cost management matters more than revenue growth',
        desc: 'A busy restaurant can still lose money if costs are not controlled. Focus on effective cost management rather than just chasing sales.',
      },
      {
        title: 'Build authentic identity, don\'t compete on price',
        desc: 'Invest in real experiences and unique brand identity so your business becomes part of customers\' emotional lives.',
      },
      {
        title: 'Think ecosystem, not solo',
        desc: 'The F&B market has shifted to an "ecosystem race." Optimize processes, people, and physical space — not just the product.',
      },
    ],
    links: [
      { label: 'Why busy restaurants still lose money (Tuổi Trẻ)', url: 'https://tuoitre.vn/kinh-doanh-am-thuc-dong-khach-nhung-van-lo-vi-sao-20250222225814841.htm', type: 'article' },
      { label: 'F&B brand survival race in 2025 (CafeF)', url: 'https://cafef.vn/cuoc-dua-song-con-cua-cac-thuong-hieu-fb-trong-nam-thanh-loc-2025-dep-doc-khuay-dao-thi-truong-nghin-ty-loat-dai-gia-tat-tay-dua-voi-cac-ong-lon-ngan-hang-188251230103845865.chn', type: 'article' },
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
    descriptor: 'Founder of Vietnam\'s first F&B Marketing school, food brand strategist & educator',
    photo: '/experts/ha-chu.webp',
    category: 'consultant',
    tags: ['F&B Marketing', 'Branding', 'Education', 'Podcast'],
    shortBio: 'Founded COOKED — Vietnam\'s first F&B Marketing school. Consulted for 20+ brands including Gia (Michelin), The KAfe, Manwah. Host of "Ha Chu works" podcast.',
    fullBio: 'Chu Hồng Hà (Hà Chu), born 1992, is the founder of COOKED — Vietnam\'s first school specializing in F&B Business and Marketing education.\n\nShe became Marketing Manager at The KAfe at 24. At 26 (2018), she founded COOKED to "bring a bit more happiness to people who work in F&B." To date, COOKED has trained nearly 100,000 students. She hosts "Ha Chu works" podcast (97+ episodes, 4.9 stars on Spotify).',
    highlights: [
      'Founded COOKED (2018) — Vietnam\'s first F&B Marketing school, ~100,000 students trained',
      'Marketing consultant for 20+ brands: Gia (Michelin), The KAfe, Manwah, Yu Tang',
      'Host of "Ha Chu works" podcast — 97+ episodes, 4.9/5 on Spotify',
      'Speaker at Vietnam Food & Beverage Conference 2023 (Vietcetera)',
    ],
    quotes: [
      { text: 'Đông khách không có nghĩa là bạn đang làm đúng!', source: 'CafeF', sourceUrl: 'https://cafef.vn/nha-sang-lap-truong-hoc-marketing-nganh-am-thuc-dau-tien-tai-viet-nam-dong-khach-khong-co-nghia-la-ban-dang-lam-dung-20220206095659549.chn' },
      { text: 'Khẩu vị là điểm "chạm" quan trọng nhất.', source: 'Vietcetera M.A.D. Podcast', sourceUrl: 'https://vietcetera.com/vn/podcast/mad/s2-1-ha-chu-marketing-specialist-founder-cooked-khau-vi-la-diem-cham-quan-trong-nhat' },
      { text: 'Không có thành công nào mình nhớ mãi nhưng thất bại thì có.', source: 'CafeF', sourceUrl: 'https://cafef.vn/nha-sang-lap-truong-hoc-marketing-nganh-am-thuc-dau-tien-tai-viet-nam-dong-khach-khong-co-nghia-la-ban-dang-lam-dung-20220206095659549.chn' },
    ],
    advice: [
      { title: 'Understand your customers deeply', desc: 'Don\'t guess from social media — go into real life, observe behavior, step into your customers\' world.' },
      { title: 'Think 5 years ahead', desc: 'Don\'t judge success by first-month revenue. Ask: what value will your brand bring to society in 5 years?' },
    ],
    links: [
      { label: 'Busy doesn\'t mean you\'re doing it right (CafeF)', url: 'https://cafef.vn/nha-sang-lap-truong-hoc-marketing-nganh-am-thuc-dau-tien-tai-viet-nam-dong-khach-khong-co-nghia-la-ban-dang-lam-dung-20220206095659549.chn', type: 'article' },
      { label: 'Ha Chu works Podcast (Spotify)', url: 'https://open.spotify.com/show/3aGjrokDnUZc2bomJ1wD7w', type: 'podcast' },
      { label: '5 things to consider before opening a cafe (Vietcetera)', url: 'https://vietcetera.com/en/coffee-chats-5-things-ha-chu-wants-you-to-consider-before-opening-a-cafe-in-hanoi', type: 'article' },
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
    descriptor: '"F&B Coach" — cafe & restaurant consultant for small business owners',
    photo: '/experts/tran-trung-hieu.webp',
    category: 'consultant',
    tags: ['Consulting', 'Coffee shops', 'Restaurants', 'SME'],
    shortBio: 'F&B Coach specializing in small cafe & restaurant consulting. Frequently quoted by VnExpress, ZNews. Founded FnB Academy (fnb.edu.vn).',
    fullBio: 'Trần Trung Hiếu is an F&B consultant known for his straight-talking approach about the realities of running cafes and restaurants in Vietnam. He is regularly quoted by major media outlets like VnExpress, ZNews, and Dân Trí.\n\nHe founded FnB Academy (fnb.edu.vn), an online training platform helping small business owners master management, operations, and marketing.',
    highlights: [
      'F&B expert frequently quoted by VnExpress, ZNews, Dân Trí',
      'Founded FnB Academy (fnb.edu.vn) — SME management training',
      'Hands-on consulting for hundreds of small cafe & restaurant owners',
    ],
    quotes: [
      { text: 'Đừng mở quán chỉ để bán nó sau 3 tháng.', source: 'trantrunghieu.com' },
      { text: 'Kinh doanh F&B không phải cuộc chơi của đam mê suông — mà là của người biết tính toán.', source: 'VnExpress' },
    ],
    advice: [
      { title: 'Do the math before opening', desc: 'Many people open a shop out of passion and forget to calculate costs. Know your break-even point before investing.' },
      { title: 'Don\'t chase trends', desc: 'A sustainable model matters more than a viral one. Trends come fast and go fast.' },
    ],
    links: [
      { label: 'Blog trantrunghieu.com', url: 'https://www.trantrunghieu.com/', type: 'article' },
      { label: 'FnB Academy', url: 'https://fnb.edu.vn/', type: 'article' },
    ],
    socials: [
      { platform: 'website', url: 'https://www.trantrunghieu.com/' },
    ],
  },

  // ── Inspirational Founders ──
  {
    id: 'nguyen-ha-linh',
    slug: 'nguyen-ha-linh',
    name: 'Nguyễn Hà Linh',
    descriptor: '"The 250K Girl" — from handing out flyers to a Thai restaurant chain and a 2.6M-member community',
    photo: '/experts/nguyen-ha-linh.webp',
    category: 'inspiration',
    tags: ['Young Entrepreneur', 'Restaurant', 'Forbes 30U30', 'Community'],
    shortBio: 'Started with $10 (250,000 VND) at age 18. Forbes 30 Under 30. Founded Koh Yam Thai chain (~10 branches) and Nghiện Nhà community (2.6M members).',
    fullBio: 'Nguyễn Hà Linh (b. 1988, Hanoi) dropped out of university in her third year. At 18, with just 250,000 VND (~$10), she launched an IELTS class — day one brought in 120 million VND. She expanded into F&B with Koh Samui coconut ice cream, lost ~7 billion VND, then rebuilt as Koh Yam Thai.\n\nNow operating ~10 branches with "Vietnamized" Thai recipes. Forbes 30 Under 30 (2016). In 2020, she founded "Nghiện Nhà" — a 2.6M-member home design community.',
    highlights: [
      'Started with 250,000 VND ($10) at age 18, day one revenue: 120 million VND',
      'Lost 7 billion VND with Koh Samui → rebuilt as Koh Yam Thai (~10 branches)',
      'Forbes Vietnam 30 Under 30 (2016)',
      'Founded Nghiện Nhà — 2.6 million member community',
    ],
    quotes: [
      { text: 'Tôi chưa bao giờ nhìn nhận sự thất bại, mà chỉ đơn giản là vấp ngã.', source: 'Báo Đầu tư', sourceUrl: 'https://baodautu.vn/ceo-nguyen-ha-linh-chu-he-thong-nha-hang-thai-koh-yam-khong-co-that-bai-chi-co-vap-nga-d89980.html' },
      { text: '80% anh chị chủ doanh nghiệp mà mình biết và ngưỡng mộ, họ có sự nhạy bén xuất sắc trong sales và marketing.', source: 'CafeF', sourceUrl: 'https://cafef.vn/nguyen-ha-linh-sang-lap-koh-yam-thai-chuoi-makeup-chu-nhuong-quyen-cong-ca-phe-nhung-khong-trang-diem-cung-chang-uong-ca-phe-quan-trong-la-biet-sales-va-marketing-20191219144543295.chn' },
      { text: 'Thị trường ngoài Bắc theo trào lưu rất nhanh, và quên trào lưu cũng rất nhanh. Cái khó là tạo ra một mô hình kinh doanh bền vững.', source: 'CafeF', sourceUrl: 'https://soha.vn/nguyen-ha-linh-sang-lap-koh-yam-thai-chuoi-makeup-chu-nhuong-quyen-cong-ca-phe-nhung-khong-trang-diem-cung-chang-uong-ca-phe-quan-trong-la-biet-sales-va-marketing-20191219155309982.htm' },
    ],
    advice: [
      { title: 'Sales & Marketing are survival skills', desc: 'No matter how good your product is, if nobody knows about it, it\'s meaningless. 80% of successful business owners excel at sales & marketing.' },
      { title: 'Build sustainable, don\'t chase trends', desc: 'The 7 billion VND lesson from Koh Samui — Vietnamese markets follow trends fast but forget them just as fast.' },
      { title: 'People are the root of your brand', desc: 'F&B success depends on your chef and manager. Partners must share the same vision.' },
    ],
    links: [
      { label: 'No failures, only stumbles (Báo Đầu tư)', url: 'https://baodautu.vn/ceo-nguyen-ha-linh-chu-he-thong-nha-hang-thai-koh-yam-khong-co-that-bai-chi-co-vap-nga-d89980.html', type: 'article' },
      { label: 'Forbes 30U30: I don\'t think of myself as a million-dollar girl', url: 'https://halinh.vn/blogs/tren-bao-chi/nguyen-ha-linh-forbes-30-under-30-toi-khong-nghi-minh-la-co-gai-trieu-usd', type: 'article' },
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
    descriptor: 'Pioneer of Vietnam\'s first farm-to-cup Arabica coffee model',
    photo: '/experts/tran-nhat-quang.webp',
    category: 'inspiration',
    tags: ['Coffee', 'Local brand', 'Da Lat', 'Sustainability'],
    shortBio: 'Former university lecturer, started in coffee at 30. Founded La Viet Coffee — 18 locations, 100% Vietnamese ingredients, exporting to 6+ countries.',
    fullBio: 'Trần Nhật Quang (b. 1980) was a tourism lecturer at Da Lat University. In 2010, at 30, he joined an organic coffee project that failed in 2013.\n\nIn August 2013, he founded La Viet Coffee in Da Lat — choosing Arabica when 90%+ of Vietnamese coffee was Robusta. After 10+ years: 200+ staff, 18 locations across Da Lat, HCMC, Hanoi, Quy Nhon, Nha Trang, and a US showroom. Nearly 1 million cups served annually. Named in Asia\'s Top 80 Coffee Shops (2025).',
    highlights: [
      'Pioneered Vietnam\'s first "farm-to-cup" model in Da Lat (2013)',
      'From 1 founder → 200+ staff, 18 locations, exporting to 6+ countries',
      'Asia\'s Top 80 Coffee Shops (2025)',
      'Purchases 200-300 tons of coffee annually from Da Lat farmers',
    ],
    quotes: [
      { text: 'Tôi tin rằng khi làm ra giá trị đúng và phù hợp, đến một thời điểm thị trường sẽ cần tới giá trị đó.', source: 'VietnamNet', sourceUrl: 'https://vietnamnet.vn/la-viet-coffee-10-nam-kien-tri-voi-hat-arabica-ban-1-trieu-ly-ca-phe-moi-nam-2179264.html' },
      { text: 'Là Việt đơn giản là của Việt Nam.', source: 'Báo Pháp Luật Việt Nam', sourceUrl: 'https://baophapluat.vn/khat-vong-ca-phe-tay-nguyen-bai-2-triet-ly-kinh-doanh-dam-mau-sac-nhan-van-cua-ca-phe-la-viet-post528668.html' },
      { text: 'Không có cà phê đặc biệt, chỉ có những con người đặc biệt làm cà phê với cả lòng tận tâm.', source: 'Đại Biểu Nhân Dân', sourceUrl: 'https://daibieunhandan.vn/5-yeu-to-viet-nam-nhat-cua-la-viet-coffee-10349728.html' },
    ],
    advice: [
      { title: 'Stay true to the right values', desc: 'For the first 5 years, we hardly sold anything. But I believed the market would eventually need quality products. Convincing customers took 10 years.' },
      { title: 'Never compromise your brand identity', desc: 'We refused to import famous brands to sell alongside ours — "if we did that, the name La Viet would lose its meaning." 100% Vietnamese ingredients.' },
      { title: 'Invest in the farming community', desc: 'Train techniques, lend equipment, organize annual "Best Coffee" competitions. When farmers get better value, the supply chain becomes naturally sustainable.' },
    ],
    links: [
      { label: '10 years persisting with Arabica (VietnamNet)', url: 'https://vietnamnet.vn/la-viet-coffee-10-nam-kien-tri-voi-hat-arabica-ban-1-trieu-ly-ca-phe-moi-nam-2179264.html', type: 'article' },
      { label: 'Humane business philosophy (Báo Pháp Luật)', url: 'https://baophapluat.vn/khat-vong-ca-phe-tay-nguyen-bai-2-triet-ly-kinh-doanh-dam-mau-sac-nhan-van-cua-ca-phe-la-viet-post528668.html', type: 'article' },
      { label: 'LOCO Podcast — The cup that brings peace (Vietcetera)', url: 'https://vietcetera.com/vn/podcast/loco/1-tran-nhat-quang-founder-la-viet-coffee-ly-ca-phe-tao-nen-su-an-tam', type: 'podcast' },
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
    descriptor: 'Serial entrepreneur — from Urban Station to The Coffee House, M Village, and Every Half',
    photo: '/experts/nguyen-hai-ninh.webp',
    category: 'inspiration',
    tags: ['Serial Entrepreneur', 'Coffee', 'Startup', 'Forbes 30U30'],
    shortBio: 'Serial entrepreneur: Urban Station (60+ stores) → The Coffee House (175 stores, 800B VND revenue) → M Village → Every Half. Forbes 30 Under 30 Asia.',
    fullBio: 'Nguyễn Hải Ninh (b. 1987) graduated in Chemistry from HCMC University of Technology. After PepsiCo\'s Management Trainee program, he began his entrepreneurial journey.\n\nIn 2011, co-founded Urban Station (60+ stores). In 2014, founded The Coffee House — "community coffee" philosophy, 175 stores, ~800B VND revenue (2019), Forbes 30 Under 30 Asia. Left in 2021. Now running M Village (co-living, $10M from Trip.com) and Every Half Coffee Roasters ($3M Pre-Series A, 14+ stores).',
    highlights: [
      '4 ventures in 14 years: Urban Station, The Coffee House, M Village, Every Half',
      'The Coffee House: 175 stores, ~800B VND revenue, Forbes 30 Under 30 Asia (2019)',
      'Every Half: $3M Pre-Series A (2025), exporting specialty Robusta to North America',
      'M Village: $10M from Trip.com, historic 100B VND unsecured bank loan from OCB',
    ],
    quotes: [
      { text: 'Tôi từ bùn đen đi lên, học trái ngành, không biết gì về cà phê.', source: 'CafeBiz', sourceUrl: 'https://cafebiz.vn/ceo-the-coffee-house-nguyen-hai-ninh-toi-tu-bun-den-di-len-hoc-trai-nganh-khong-biet-gi-ve-ca-phe-khong-nhuong-quyen-vi-so-trao-con-cho-nguoi-khac-20181103012337456.chn' },
      { text: 'Chúng tôi không nhượng quyền vì sợ trao "con" cho người khác.', source: 'CafeBiz', sourceUrl: 'https://cafebiz.vn/ceo-the-coffee-house-nguyen-hai-ninh-toi-tu-bun-den-di-len-hoc-trai-nganh-khong-biet-gi-ve-ca-phe-khong-nhuong-quyen-vi-so-trao-con-cho-nguoi-khac-20181103012337456.chn' },
      { text: 'Trước khi tiền vào túi bạn thì hóa đơn sẽ tới.', source: 'YBOX', sourceUrl: 'https://ybox.vn/ky-nang/ceo-the-coffee-house-nguyen-hai-ninh-chia-se-muon-khoi-nghiep-can-it-nhat-3-yeu-to-5c0778d60343425bc80c0a3e' },
      { text: 'Gọi vốn là hệ quả, không phải mục tiêu.', source: 'CafeF', sourceUrl: 'https://cafef.vn/lan-thu-4-khoi-nghiep-dai-thang-cua-nguyen-hai-ninh-nha-sang-lap-the-coffee-house-188250531081050461.chn' },
    ],
    advice: [
      { title: '3 pillars: Passion, Strength, Market need', desc: 'You need at least 3 factors: passion, playing to your strengths, and those strengths must solve a real need.' },
      { title: 'Invoices arrive before revenue', desc: 'Prepare mentally and financially — don\'t be blinded by others\' glamour.' },
      { title: 'Fundraising is a consequence', desc: 'Solve real problems for the right people, build systems, learn fast — investors will come to you.' },
    ],
    links: [
      { label: '4th startup success (CafeF)', url: 'https://cafef.vn/lan-thu-4-khoi-nghiep-dai-thang-cua-nguyen-hai-ninh-nha-sang-lap-the-coffee-house-188250531081050461.chn', type: 'article' },
      { label: 'From mud to success (CafeBiz)', url: 'https://cafebiz.vn/ceo-the-coffee-house-nguyen-hai-ninh-toi-tu-bun-den-di-len-hoc-trai-nganh-khong-biet-gi-ve-ca-phe-khong-nhuong-quyen-vi-so-trao-con-cho-nguoi-khac-20181103012337456.chn', type: 'article' },
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
    descriptor: '"Vietnam\'s Spice King" — started at 50 after 3 failures, built a natural spice empire',
    photo: '/experts/nguyen-trung-dung.webp',
    category: 'inspiration',
    tags: ['Spices', 'Late-stage Entrepreneur', 'Export', 'Bootstrap'],
    shortBio: 'Started at 50 after 30 years in Europe and 3 failures. Founded Dh Foods — natural spices, 50%/year growth, exporting to 20+ countries. Never borrowed from a bank.',
    fullBio: 'Nguyễn Trung Dũng (b. 1963) left Vietnam for Poland in 1989. Over 30 years in Europe, he launched 3 ventures — all failed. In 2010, nearing 50, he returned nearly broke.\n\nIn October 2012, with 1.2 billion VND, he founded Dh Foods — 100% natural spices, zero synthetic additives. After initial losses, the company achieved ~50% annual growth for 6 straight years. Now 100+ products across all major supermarkets, exporting to USA, Japan, Germany, South Korea, Australia.',
    highlights: [
      '3 startup failures before age 50',
      'Fully bootstrapped from 1.2B VND — never borrowed from a bank',
      '50%/year growth for 6 consecutive years, exporting to 20+ countries',
      'Won "High-Quality Vietnamese Goods" award 2 years running (2023-2024)',
    ],
    quotes: [
      { text: 'Nếu muốn giàu nhanh thì đừng khởi nghiệp, bởi chỉ có 5% startup trên thế giới là thành công.', source: 'Báo Pháp Luật', sourceUrl: 'https://doanhnhan.baophapluat.vn/ceo-dh-foods-ong-trum-gia-vi-viet-khoi-nghiep-o-tuoi-50-doanh-nghiep-tang-truong-50-bat-chap-dai-dich-43148.html' },
      { text: 'Việt Nam hãy là nhà bếp của thế giới... Dh Foods mong muốn trở thành góc gia vị trong nhà bếp đó.', source: 'CafeBiz', sourceUrl: 'https://cafebiz.vn/chan-dung-ceo-dh-foods-trieu-phu-my-goi-tren-dat-ba-lan-tay-trang-hoi-huong-tuoi-50-vi-tieng-goi-tinh-yeu-dung-de-che-gia-vi-dac-san-thuan-viet-20210531182546149.chn' },
      { text: 'Không phải doanh thu, mà là niềm tin của người tiêu dùng.', source: 'Báo Đầu tư', sourceUrl: 'https://baodautu.vn/doanh-nhan-nguyen-trung-dung-sang-lap-va-ceo-cua-dh-foods-tu-hu-gia-vi-nho-den-khat-vong-lon-d410892.html' },
      { text: 'Với tôi, ngày nào đi làm cũng thấy vui, dòng tiền ổn định, lương và hóa đơn trả đúng hạn, còn mong gì hơn.', source: 'CafeF', sourceUrl: 'https://cafef.vn/ong-trum-gia-vi-viet-khoi-nghiep-thanh-bai-o-von-va-cach-van-hanh-voi-12-ty-dong-ban-dau-den-nay-van-chua-phai-di-vay-ngan-hang-mot-dong-188240502135308949.chn' },
    ],
    advice: [
      { title: 'Don\'t invest in fixed assets when starting', desc: 'Outsource production, warehousing, logistics. Focus capital on product, marketing, and sales.' },
      { title: 'Persist on quality, don\'t race on price', desc: 'Consumers deserve clean, natural, safe products — that\'s the only sustainable competitive advantage.' },
      { title: 'You can start at any age', desc: 'At 50, you\'re less aggressive, less greedy for quick money, more patient — willing to go slow to go far.' },
    ],
    links: [
      { label: 'Entrepreneurship at 50 (Báo Đầu tư)', url: 'https://baodautu.vn/chuyen-khoi-nghiep-o-tuoi-50-cua-ong-trum-gia-vi-dh-foods-m140487.html', type: 'article' },
      { label: 'Noodle millionaire returns empty-handed (CafeBiz)', url: 'https://cafebiz.vn/chan-dung-ceo-dh-foods-trieu-phu-my-goi-tren-dat-ba-lan-tay-trang-hoi-huong-tuoi-50-vi-tieng-goi-tinh-yeu-dung-de-che-gia-vi-dac-san-thuan-viet-20210531182546149.chn', type: 'article' },
      { label: 'Dh Foods at Expo West 2025 (VietnamNet)', url: 'https://vietnamnet.vn/expo-west-2025-dh-foods-gay-an-tuong-voi-dong-gia-vi-viet-2378322.html', type: 'article' },
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
    descriptor: '"Father of Pho 24" — Vietnam\'s F&B franchise pioneer, author of 10 business books',
    photo: '/experts/ly-quy-trung.webp',
    category: 'inspiration',
    tags: ['Franchise', 'Pho', 'Author', 'Education'],
    shortBio: 'Founded Pho 24 (2003) — Vietnam\'s first franchise pho chain, 70+ locations, sold for $20M USD (2011). Author of 10 books. Professor at Western Sydney University.',
    fullBio: 'Lý Quý Trung (b. 1966, Saigon) comes from an entrepreneurial family — his mother ran Thanh Nien Restaurant for 30+ years in District 1. In 1985, after failing his university entrance exam, he started as a floor mopper at Equatorial Hotel. A foreign guest noticed his dedication and sponsored him to study in Australia.\n\nWith a Master\'s in Tourism (Griffith University) and a Doctorate in Business Administration, he returned to co-found Nam An Group with premium dining brands. In 2003, he opened Pho 24 — Vietnam\'s first air-conditioned pho restaurant, pioneering the F&B franchise model. The chain grew to 70+ locations across Vietnam, Indonesia, Philippines, South Korea, Japan, and Australia. In 2011, he sold Pho 24 for $20 million USD.\n\nHe openly shares his many failures: Jazz Club, Gloria Jean\'s Coffee, Yogen Fruz, restaurants in Singapore and Thailand. He is now a Professor at Western Sydney University and founded the LQT Entrepreneur Institute.',
    highlights: [
      'Founded Pho 24 (2003) — Vietnam\'s first franchised pho chain, 70+ locations',
      'Sold Pho 24 for $20 million USD (2011) — largest Vietnamese F&B deal at the time',
      'Author of 10 business and entrepreneurship books (NXB Tre)',
      'Professor at Western Sydney University (Australia) since 2016',
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
        title: 'A busy restaurant doesn\'t mean profit',
        desc: 'High revenue doesn\'t equal profit. You must control operating costs daily — if you can count the register at end of day and find profit, celebrate.',
      },
      {
        title: 'Learn with other people\'s money first',
        desc: 'If you lack experience, work for someone else first. Learn with their capital before risking your own.',
      },
      {
        title: 'Location decides life or death',
        desc: 'No matter how beautiful a restaurant is, the wrong location means failure. Most of my failures came from choosing the wrong spot.',
      },
    ],
    links: [
      { label: 'Painful F&B startup failures (CafeF)', url: 'https://cafef.vn/cha-de-pho-24-ly-quy-trung-va-nhung-that-bai-dau-don-khi-khoi-nghiep-fb-quan-dong-chua-chac-da-loi-cuoi-ngay-ngoi-cong-so-co-lai-la-mung-2019052007401939.chn', type: 'article' },
      { label: '20 years of Pho 24 (CafeBiz)', url: 'https://cafebiz.vn/20-nam-thang-tram-cua-pho-24-tu-tiem-pho-may-lanh-dau-tien-thanh-chuoi-70-cua-hang-vuon-toi-uc-nhat-han-hoa-con-ghe-bi-dun-qua-day-lai-176230512140530604.chn', type: 'article' },
      { label: 'Books by Ly Quy Trung (Tiki)', url: 'https://tiki.vn/author/ly-qui-trung.html', type: 'article' },
    ],
    socials: [
      { platform: 'website', url: 'https://lqt.edu.vn' },
    ],
  },

  {
    id: 'hoang-tung',
    slug: 'hoang-tung',
    name: 'Hoàng Tùng',
    descriptor: '"Mr Pizza" — Vietnamese owner of Pizza Home chain, hands-on F&B content creator',
    photo: '/experts/hoang-tung.webp',
    category: 'inspiration',
    tags: ['Pizza', 'F&B Chain', 'Startup', 'Content Creator'],
    shortBio: 'Nearly 10 startup attempts, 3 failures. Founded Pizza Home (~20 locations), Mr Lau, Cloud Cook. Burger Corona covered by CNN, BBC. F&B analyst on Brands Vietnam.',
    fullBio: 'Hoàng Tùng (b. 1981, Hanoi) graduated from Hanoi University of Foreign Languages and University of Social Sciences. He started his first business — a translation company — as a student. It failed. In 2006, he opened Viet Kitchen restaurant at 24 Ba Trieu, reaching 500M VND monthly revenue, but shareholder conflicts forced him to withdraw.\n\nIn 2013, he founded Pizza Home with the motto "Fast - Delicious - Clean" — affordable pizza with Vietnamese-adapted flavors. The chain grew to ~20 locations in Hanoi. In 2020, his "Burger Corona" creation went viral globally, covered by CNN, BBC, Reuters, and Le Figaro. Beyond Pizza Home, he founded Mr Lau (home-delivery hotpot) and Cloud Cook (cloud kitchen).\n\nHe is also a prolific F&B business analyst on Brands Vietnam and Spiderum, regularly publishing practical case studies.',
    highlights: [
      'Founded Pizza Home (2013) — ~20 locations in Hanoi',
      'Burger Corona (2020) — covered by CNN, BBC, Reuters, Le Figaro',
      'Also founded Mr Lau and Cloud Cook (cloud kitchen)',
      'Prolific F&B business analyst on Brands Vietnam & Spiderum',
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
        title: 'CUT - REDUCE - INCREASE in crisis',
        desc: 'Cut unprofitable locations, reduce rent/logistics costs, increase R&D investment for new products. This strategy helped Pizza Home survive COVID.',
      },
      {
        title: 'Full commitment is non-negotiable',
        desc: 'You can\'t do startups part-time. Full-time commitment is a prerequisite — don\'t recruit too many co-founders.',
      },
      {
        title: 'Turn crisis into brand opportunity',
        desc: 'Burger Corona was born during the pandemic — turning bad news into a brand story that got international press coverage.',
      },
    ],
    links: [
      { label: 'The harder you try, the luckier you get (CafeF)', url: 'https://cafef.vn/ceo-pizza-home-hoang-tung-cang-co-gang-thi-cang-may-man-20220122192946346.chn', type: 'article' },
      { label: '3 startup failures before success (VietnamNet)', url: 'https://vietnamnet.vn/3-lan-khoi-nghiep-that-bai-cua-ong-chu-chuoi-cua-hang-pizza-792121.html', type: 'article' },
      { label: 'Decoding F&B chains (Brands Vietnam)', url: 'https://www.brandsvietnam.com/congdong/topic/6494-Thu-giai-ma-chuoi-F-B-va-cong-thuc-chien-thang', type: 'article' },
    ],
    socials: [
      { platform: 'tiktok', url: 'https://www.tiktok.com/@tungpiz' },
      { platform: 'website', url: 'https://pizzahome.vn' },
    ],
  },
];

export default EXPERTS;
