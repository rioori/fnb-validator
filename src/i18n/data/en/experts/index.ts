import type { Expert } from '@/types';

const EXPERTS: Expert[] = [
  // ── Chuyên gia tư vấn ──

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
        text: 'To survive in this industry, business owners need more than just high sales — they must manage costs effectively.',
        source: 'Tuổi Trẻ',
        sourceUrl: 'https://tuoitre.vn/kinh-doanh-am-thuc-dong-khach-nhung-van-lo-vi-sao-20250222225814841.htm',
      },
      {
        text: 'The sustainable trend in F&B isn\'t about cheap prices or grand events — it\'s about making your brand part of customers\' emotional and social lives.',
        source: 'CafeF',
        sourceUrl: 'https://cafef.vn/cuoc-dua-song-con-cua-cac-thuong-hieu-fb-trong-nam-thanh-loc-2025-dep-doc-khuay-dao-thi-truong-nghin-ty-loat-dai-gia-tat-tay-dua-voi-cac-ong-lon-ngan-hang-188251230103845865.chn',
      },
      {
        text: 'Customers who come for cheap prices will leave for cheaper prices elsewhere.',
        source: 'CafeF',
        sourceUrl: 'https://cafef.vn/cuoc-dua-song-con-cua-cac-thuong-hieu-fb-trong-nam-thanh-loc-2025-dep-doc-khuay-dao-thi-truong-nghin-ty-loat-dai-gia-tat-tay-dua-voi-cac-ong-lon-ngan-hang-188251230103845865.chn',
      },
      {
        text: 'True credibility doesn\'t come from talking a lot — it comes from doing things right and staying the course long enough to see results.',
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
      { text: 'Having lots of customers doesn\'t mean you\'re doing it right! You need to understand why they come — only then can you keep them.', source: 'CafeF', sourceUrl: 'https://cafef.vn/nha-sang-lap-truong-hoc-marketing-nganh-am-thuc-dau-tien-tai-viet-nam-dong-khach-khong-co-nghia-la-ban-dang-lam-dung-20220206095659549.chn' },
      { text: 'Taste is the most important "touchpoint."', source: 'Vietcetera M.A.D. Podcast', sourceUrl: 'https://vietcetera.com/vn/podcast/mad/s2-1-ha-chu-marketing-specialist-founder-cooked-khau-vi-la-diem-cham-quan-trong-nhat' },
      { text: 'No success stays in my memory forever, but failures do.', source: 'CafeF', sourceUrl: 'https://cafef.vn/nha-sang-lap-truong-hoc-marketing-nganh-am-thuc-dau-tien-tai-viet-nam-dong-khach-khong-co-nghia-la-ban-dang-lam-dung-20220206095659549.chn' },
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
      { text: 'F&B business isn\'t a game of passion alone — it\'s for those who know how to do the math.', source: 'VnExpress' },
      { text: 'Don\'t open a shop just to sell it after 3 months.', source: 'trantrunghieu.com' },
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



  // ── Chuỗi lớn & Tập đoàn ──

  {
    id: 'dao-the-vinh',
    slug: 'dao-the-vinh',
    name: 'Đào Thế Vinh',
    seoTitle: 'Đào Thế Vinh (b. 1972) — CEO Golden Gate, from meteorology engineer to 500-restaurant chain',
    seoDescription: 'Đào Thế Vinh — studied meteorology in Russia, zero culinary background to Golden Gate: 500 restaurants, 40+ brands, $259M revenue (2024). Mekong Capital 9.1x exit.',
    descriptor: 'Chairman & CEO of Golden Gate — Vietnam\'s largest restaurant group with 40+ brands and 500+ locations',
    photo: '/experts/dao-the-vinh.webp',
    category: 'inspiration' as const,
    tags: ['Restaurant Chain', 'Multi-brand', 'M&A', 'Systems'],
    shortBio: 'Meteorology engineer turned restaurateur. Founded Golden Gate (2005) — from 1 mushroom hotpot shop to 500+ restaurants, 40+ brands (Kichi-Kichi, Gogi House, Vuvuzela). Temasek invested at ~$650M valuation.',
    fullBio: 'Đào Thế Vinh (b. 1972) studied Hydro-Meteorology at Saint Petersburg University, Russia. After 7 years of import-export trading in post-Soviet Russia, he returned to Vietnam in 2002 and co-founded the Cozy tea brand.\n\nIn 2005, he and two friends founded Golden Gate. The inspiration came from a trip to Yunnan, China, where he discovered mushroom hotpot in Shangri-La. In 2008, he opened the first Ashima restaurant at 44 Phan Dinh Phung, Hanoi — just 4-5 tables, with antique furniture bought to be resold if the venture failed.\n\nKey insight: all 3 co-founders were engineers with zero culinary background — so they systematized everything from day one instead of relying on artisans. After 16 years: 500+ restaurants, 40+ brands, 19,000 employees, serving 18 million customers/year. In 2025, acquired The Coffee House for 270B VND.',
    highlights: [
      'From 1 hotpot shop (2008) → 500+ restaurants, 40+ brands across 45 provinces',
      '2024 revenue: 6,630B VND (~$259M), 17,000 employees, 18M customers/year',
      'Standard Chartered PE (2014) + Temasek (2022) invested, valuation ~$653 million USD',
      'Mekong Capital invested $2.6M (2008), exited at 9.1x return (2014) — INSEAD case study',
      'Acquired 99.98% of The Coffee House (2024) — expanded from restaurants into coffee chain',
    ],
    quotes: [
      { text: 'I need to sell products that customers like, not products that satisfy my personal preferences.', source: 'Nhà Đầu Tư', sourceUrl: 'https://nhadautu.vn/vua-nha-hang-golden-gate-ke-chuyen-khoi-nghiep-mat-tien-bi-quy-dau-tu-lua-va-cai-ket-d66490.html' },
      { text: 'A system can produce any product; an artisan produces only what they\'re skilled at.', source: 'CafeBiz', sourceUrl: 'https://cafebiz.vn/dao-the-vinh-vi-dai-gia-dung-sau-golden-gate-tu-cam-hung-mon-lau-nam-trong-chuyen-di-shangrila-toi-chuoi-400-nha-hang-lon-nhat-viet-nam-nhu-kichi-kichi-gogi-house-vuvuzela-20211227124836345.chn' },
      { text: 'Difficulty reveals opportunity. During hardship, one satisfied customer equals thousands in normal times.', source: 'Vietnam Business Insider', sourceUrl: 'https://vietnambusinessinsider.vn/so-luoc-nganh-hospitality-o-viet-nam-bai-12-golden-gate-khi-nhung-ke-ngoai-dao-lam-nen-ky-tich-a19669.html' },
      { text: 'Happy employees create satisfied customers.', source: 'VHDN', sourceUrl: 'https://vhdn.vn/chu-tich-golden-gate-dao-the-vinh-ong-chu-chuoi-nha-hang-lon-nhat-viet-nam-voi-van-hoa-kinh-doanh-nhan-vien-hanh-phuc-thi-khach-hang-se-hai-long/' },
    ],
    advice: [
      { title: 'Systematize from day one', desc: 'Don\'t rely on one talented chef or manager. Build standard processes so anyone can operate the business.' },
      { title: 'Sell what customers want, not what you like', desc: 'Turning personal preferences into a business model without market research is extremely risky.' },
      { title: 'Multi-brand to spread risk', desc: 'Don\'t put everything into one concept. Each brand targets a different segment and cuisine — if one trend fades, others compensate.' },
    ],
    links: [
      { label: 'Golden Gate founding story (Nhà Đầu Tư)', url: 'https://nhadautu.vn/vua-nha-hang-golden-gate-ke-chuyen-khoi-nghiep-mat-tien-bi-quy-dau-tu-lua-va-cai-ket-d66490.html', type: 'article' },
      { label: 'From Shangri-La hotpot to 500 restaurants (CafeBiz)', url: 'https://cafebiz.vn/dao-the-vinh-vi-dai-gia-dung-sau-golden-gate-tu-cam-hung-mon-lau-nam-trong-chuyen-di-shangrila-toi-chuoi-400-nha-hang-lon-nhat-viet-nam-nhu-kichi-kichi-gogi-house-vuvuzela-20211227124836345.chn', type: 'article' },
      { label: 'The CEO Magazine Interview', url: 'https://www.theceomagazine.com/executive-interviews/food-beverage/vinh-dao/', type: 'article' },
    ],
    socials: [
      { platform: 'website', url: 'https://ggg.com.vn' },
    ],
  },

  {
    id: 'tran-le-nguyen',
    slug: 'tran-le-nguyen',
    name: 'Trần Lệ Nguyên',
    seoTitle: 'Trần Lệ Nguyên (b. 1968) — CEO KIDO Group, sold Kinh Đô to Mondelez for $490M',
    seoDescription: 'Trần Lệ Nguyên co-founded Kinh Đô, sold confectionery arm to Mondelez for $370-490M (2014). Leads Vietnam ice cream 47%, #2 cooking oil. Why did Chuk Chuk fail in 18 months?',
    descriptor: 'Vice Chairman & CEO of KIDO Group — from confectionery empire to ice cream, cooking oil, and F&B chains',
    photo: '/experts/tran-le-nguyen.webp',
    category: 'inspiration' as const,
    tags: ['FMCG', 'M&A', 'Ice Cream', 'Cooking Oil', 'F&B Chain'],
    shortBio: 'Co-founded Kinh Do (1993), sold confectionery to Mondelez for ~$370-490M. Pivoted to cooking oil (#2 market share) and ice cream (47% market share). Launched Chuk Chuk (2021) — a practical lesson in F&B chain failure.',
    fullBio: 'Trần Lệ Nguyên (b. 1968) comes from a Chinese-Vietnamese family. In 1992, he convinced his brother Trần Kim Thành to mortgage their homes for capital — "one of the riskiest decisions of my life." In 1993, they co-founded Kinh Do with 1.5B VND and 70 employees.\n\nIn 2003, acquired Wall\'s ice cream factories from Unilever → Merino and Celano brands (47% market share). In 2014, sold 80% of confectionery to Mondelez for ~$370-490M — the largest Vietnamese consumer goods M&A deal at the time. Used proceeds to acquire Tuong An and Vocarimex → #2 cooking oil company (30% market share).\n\nIn 2021, launched Chuk Chuk (ice cream, bubble tea, coffee) — targeting 1,000 stores but divested by end of 2022. A valuable lesson in F&B chain unit economics.',
    highlights: [
      'Co-founded Kinh Do (1993) → sold to Mondelez for ~$370-490M (2014)',
      'Merino + Celano: 47% of Vietnam\'s ice cream market',
      'KIDO cooking oil: #2 market position with ~30% share',
      'Chuk Chuk: failure lesson — from 1,000-store target to divestment',
    ],
    quotes: [
      { text: 'Life must always have ambition. You must have ambition to achieve your dreams.', source: 'KIDO', sourceUrl: 'https://www.kdc.vn/bai-viet/ceo-kinh-do-cuoc-song-phai-luon-co-tham-vong' },
      { text: 'Without M&A, organic growth is limited to about 10% per year. But just one right M&A deal can create tremendous value.', source: 'MarketTimes', sourceUrl: 'https://markettimes.vn/ong-tran-le-nguyen-chia-se-bi-quyet-m-a-cua-kido-va-loi-khuyen-dac-biet-danh-cho-nha-dau-tu-ca-nhan-67844.html' },
      { text: 'Buying a company without creating value is like buying a chicken that doesn\'t lay eggs.', source: 'MarketTimes', sourceUrl: 'https://markettimes.vn/ong-tran-le-nguyen-chia-se-bi-quyet-m-a-cua-kido-va-loi-khuyen-dac-biet-danh-cho-nha-dau-tu-ca-nhan-67844.html' },
    ],
    advice: [
      { title: 'Sell at the peak, buy at the right time', desc: 'Sell your top-performing business to fund acquisition of higher-potential sectors. Kinh Do sold confectionery and used the capital to dominate cooking oil.' },
      { title: 'F&B chains need strong unit economics', desc: 'Chuk Chuk failed because rapid expansion outpaced proof of per-store profitability. Big ambition doesn\'t replace solid numbers.' },
      { title: 'Bold bets require solid research', desc: 'Mortgaging your home is the riskiest decision — but do it only after thorough market research, like seeing Thai candy dominating Vietnam.' },
    ],
    links: [
      { label: 'Life must always have ambition (KIDO)', url: 'https://www.kdc.vn/bai-viet/ceo-kinh-do-cuoc-song-phai-luon-co-tham-vong', type: 'article' },
      { label: 'KIDO\'s M&A secrets (MarketTimes)', url: 'https://markettimes.vn/ong-tran-le-nguyen-chia-se-bi-quyet-m-a-cua-kido-va-loi-khuyen-dac-biet-danh-cho-nha-dau-tu-ca-nhan-67844.html', type: 'article' },
      { label: 'The Tran brothers and KIDO philosophy (Nhà Đầu Tư)', url: 'https://nhadautu.vn/doanh-nhan-nguoi-hoa-kin-tieng--bai-3-anh-em-dai-gia-ho-tran-va-triet-ly-kinh-doanh-co-1-0-2-o-kido-d28703.html', type: 'article' },
    ],
    socials: [
      { platform: 'website', url: 'https://www.kdc.vn' },
    ],
  },

  {
    id: 'danny-le',
    slug: 'danny-le',
    name: 'Danny Le',
    descriptor: 'CEO of Masan Group — architect of the $455M Phuc Long deal and "Point of Life" consumer ecosystem',
    definition: 'Danny Le (born 1984) is the CEO of Masan Group since 2020, one of the youngest CEOs of a major Vietnamese conglomerate. A Vietnamese-American and former Morgan Stanley investment banking analyst, he architected the acquisition of 85% of Phuc Long Heritage at a $455M valuation and raised over $5B from KKR, Alibaba, SK Group, and Bain Capital.',
    photo: '/experts/danny-le.webp',
    category: 'inspiration' as const,
    tags: ['Conglomerate', 'M&A', 'Phuc Long', 'WinMart', 'Strategy'],
    shortBio: 'Became CEO of Masan Group at age 36. Former Morgan Stanley analyst. Architect of the Phuc Long acquisition ($455M valuation), raised $5B+ from Alibaba, SK Group, Bain Capital.',
    fullBio: 'Danny Le (b. 1984) is a Vietnamese-American who graduated from Bowdoin College (Sociology). After 4 years as an investment banking analyst at Morgan Stanley New York, he joined Masan in 2010 as Director of Strategy.\n\nIn 2020, at age 36, he was appointed CEO of Masan Group — one of the youngest CEOs of a major Vietnamese conglomerate. His landmark deal: acquiring 85% of Phuc Long Heritage for ~$280M total investment at a $455M valuation. Integrated 971 Phuc Long kiosks into WinMart+ stores within one year.\n\nUnder Danny Le, Masan raised over $5B from KKR, Alibaba, SK Group, and Bain Capital. 2025 revenue: 81,621B VND, after-tax profit: 6,764B VND.',
    highlights: [
      'CEO of Masan Group at age 36 — among the youngest CEOs of a major Vietnamese corporation',
      'Acquired 85% of Phuc Long: $280M invested, $455M valuation',
      'Raised $5B+ from Alibaba, SK Group, Bain Capital, KKR',
      '2025 revenue: 81,621B VND (+8.7%), profit 1.6x vs 2024',
    ],
    quotes: [
      { text: 'Building a brand from scratch takes 5-7 years with no guarantee — M&A and large-scale investment is the best strategy to lead the market.', source: 'Masan Group', sourceUrl: 'https://www.masangroup.com/news/masan-news/Behind-the-usd-455-million-valuation-of-Phuc-Long.html' },
      { text: 'Modern retail is only 12% of Vietnam\'s market vs 30-50% in Thailand and Indonesia — massive growth headroom.', source: 'Bloomberg', sourceUrl: 'https://www.bloomberg.com/news/videos/2021-12-20/masan-group-embarks-on-tech-drive-for-grocery-business-video-kxe9ewxu' },
      { text: 'Acquisitions focus on integrating platforms that align with the overarching strategy, not just chasing revenue.', source: 'Masan Group', sourceUrl: 'https://www.masangroup.com/news/masan-news/how-masan-employs-deamaking-to-build-its-consumer-retail-platform.html' },
    ],
    advice: [
      { title: 'M&A is faster than building from scratch', desc: 'Phuc Long took 55 years to build its brand. Masan acquired 85% in 18 months and integrated 971 kiosks into WinMart+ within one year.' },
      { title: 'Ecosystem integration creates synergy', desc: 'Place Phuc Long inside WinMart+, add Techcombank financial services — turn convenience stores into multi-service "mini-malls."' },
      { title: 'Invest in technology and AI', desc: 'Masan targets 15-20% production cost reduction through process digitization and AI-powered operational optimization.' },
    ],
    links: [
      { label: 'Behind Phuc Long\'s $455M valuation (Masan)', url: 'https://www.masangroup.com/news/masan-news/Behind-the-usd-455-million-valuation-of-Phuc-Long.html', type: 'article' },
      { label: 'CEO Danny Le on Bloomberg (Video)', url: 'https://www.bloomberg.com/news/videos/2021-12-20/masan-group-embarks-on-tech-drive-for-grocery-business-video-kxe9ewxu', type: 'video' },
      { label: 'How Masan employs dealmaking (Masan)', url: 'https://www.masangroup.com/news/masan-news/how-masan-employs-deamaking-to-build-its-consumer-retail-platform.html', type: 'article' },
    ],
    socials: [
      { platform: 'linkedin', url: 'https://growtheumcapital.com/danny-le/' },
      { platform: 'website', url: 'https://www.masangroup.com' },
    ],
  },

  {
    id: 'pham-cao-vinh',
    slug: 'pham-cao-vinh',
    name: 'Phạm Cao Vinh',
    descriptor: 'Chairman of Goldsun Group — built an empire from Samsung packaging to 16 F&B brands and 200+ restaurants',
    photo: '/experts/pham-cao-vinh.webp',
    category: 'inspiration' as const,
    tags: ['Restaurant Chain', 'Multi-brand', 'Packaging', 'Diversified'],
    shortBio: 'From liquefied gas (1994) → Samsung Tier-1 packaging vendor → Goldsun Food (200+ restaurants, 16 brands: King BBQ, Thai Express, Khao Lao). Vietnam\'s second-largest restaurant chain.',
    fullBio: 'Phạm Cao Vinh (b. 1968) started in 1994 with a liquefied gas company. In 1996, pivoted to printing and packaging — building Goldsun Printing & Packaging into a Tier-1 Samsung vendor (supplying ~20% of Samsung phone packaging), plus Canon, Brother, and Coca-Cola.\n\nIn 2008, entered F&B with Redsun ITI. Brought 4 international franchise brands to Vietnam first (Seoul Garden, Thai Express, Xinwang HK Cafe, Capricciosa) while developing homegrown brands: King BBQ (2011), Khao Lao, Hotpot Story, Sushi Kei. Restructured as Goldsun Food in 2019.\n\nGoldsun Food now operates 16 brands, 200+ restaurants, 6,000+ employees, serving 2.4 million customers annually — Vietnam\'s second-largest restaurant chain after Golden Gate.',
    highlights: [
      'Samsung Tier-1 vendor for 10+ years, supplying ~20% of phone packaging',
      '16 F&B brands, 200+ restaurants — Vietnam\'s 2nd largest chain',
      'First to bring Seoul Garden and Thai Express to Vietnam',
      'King BBQ (2011) — pioneered Korean BBQ dining in Vietnam',
    ],
    quotes: [
      { text: 'Becoming a Tier-1 Samsung partner is not easy. At one point, the Chairman personally stood at the production line for 15 straight days, working through the night.', source: 'CafeF', sourceUrl: 'https://cafef.vn/chuyen-chua-ke-cua-mot-vendor-cap-1-cho-samsung-chu-tich-hdqt-truc-tiep-dung-may-nua-thang-lien-tuc-lam-thau-dem-20181116182958954.chn' },
      { text: 'Innovation is the path to survival.', source: 'Wonderful.vn', sourceUrl: 'https://wonderful.vn/le-khanh-thanh-nha-may-bao-bi-va-in-an-goldsun-que-vo-doi-moi-la-con-duong-ton-tai/' },
    ],
    advice: [
      { title: 'Cross-industry experience creates advantages', desc: 'Supply chain management expertise from Samsung packaging translates directly to efficient restaurant chain operations — systems thinking works across industries.' },
      { title: 'International franchises + homegrown brands', desc: 'Bring proven international brands to learn processes, while building original brands in parallel. Running both strategies reduces risk.' },
      { title: 'Digital transformation is mandatory', desc: 'Large-scale F&B cannot be managed manually. Early ERP and digital transformation investment enables control of 200+ locations.' },
    ],
    links: [
      { label: 'How King BBQ\'s owner does business (CafeF)', url: 'https://cafef.vn/ong-chu-chuoi-am-thuc-nuong-han-quoc-king-bbq-kinh-doanh-nhu-the-nao-20220919065601016.chn', type: 'article' },
      { label: 'Golden Gate vs Goldsun Food comparison (VietnamBiz)', url: 'https://vietnambiz.vn/so-gang-tiem-luc-hai-ong-vua-am-thuc-golden-gate-va-goldsun-food-2025422135950463.htm', type: 'article' },
      { label: 'Samsung Tier-1 vendor story (CafeF)', url: 'https://cafef.vn/chuyen-chua-ke-cua-mot-vendor-cap-1-cho-samsung-chu-tich-hdqt-truc-tiep-dung-may-nua-thang-lien-tuc-lam-thau-dem-20181116182958954.chn', type: 'article' },
    ],
    socials: [
      { platform: 'website', url: 'https://goldsunfood.vn' },
    ],
  },



  // ── Cà phê & Serial Entrepreneur ──

  {
    id: 'nguyen-hai-ninh',
    slug: 'nguyen-hai-ninh',
    name: 'Nguyễn Hải Ninh',
    seoTitle: 'Nguyễn Hải Ninh (b. 1987) — Founder The Coffee House, M Village, Every Half',
    seoDescription: 'Nguyễn Hải Ninh — 4 ventures in 14 years: Urban Station, The Coffee House (175 stores, Forbes 30U30), M Village ($10M), Every Half ($3M). His startup playbook.',
    descriptor: 'Serial entrepreneur — from Urban Station to The Coffee House, M Village, and Every Half',
    definition: 'Nguyễn Hải Ninh (born 1987) is one of Vietnam\'s most prominent F&B entrepreneurs, co-founder of Urban Station, founder of The Coffee House (175 stores, Forbes 30 Under 30), M Village (raised $10M), and Every Half (raised $3M). He is known for a "build brands with integrity" philosophy and a strong track record of raising capital from international investors.',
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
      { text: 'I rose from the mud, studied the wrong major, and knew nothing about coffee.', source: 'CafeBiz', sourceUrl: 'https://cafebiz.vn/ceo-the-coffee-house-nguyen-hai-ninh-toi-tu-bun-den-di-len-hoc-trai-nganh-khong-biet-gi-ve-ca-phe-khong-nhuong-quyen-vi-so-trao-con-cho-nguoi-khac-20181103012337456.chn' },
      { text: 'We don\'t franchise because we\'re afraid of handing our "child" to someone else.', source: 'CafeBiz', sourceUrl: 'https://cafebiz.vn/ceo-the-coffee-house-nguyen-hai-ninh-toi-tu-bun-den-di-len-hoc-trai-nganh-khong-biet-gi-ve-ca-phe-khong-nhuong-quyen-vi-so-trao-con-cho-nguoi-khac-20181103012337456.chn' },
      { text: 'Before money reaches your pocket, the invoices will arrive first.', source: 'YBOX', sourceUrl: 'https://ybox.vn/ky-nang/ceo-the-coffee-house-nguyen-hai-ninh-chia-se-muon-khoi-nghiep-can-it-nhat-3-yeu-to-5c0778d60343425bc80c0a3e' },
      { text: 'Fundraising is a consequence, not a goal.', source: 'CafeF', sourceUrl: 'https://cafef.vn/lan-thu-4-khoi-nghiep-dai-thang-cua-nguyen-hai-ninh-nha-sang-lap-the-coffee-house-188250531081050461.chn' },
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
    id: 'ngo-nguyen-kha',
    slug: 'ngo-nguyen-kha',
    name: 'Ngô Nguyên Kha',
    descriptor: 'CEO of The Coffee House — from Sony Ericsson Country Manager and Mobiistar founder to leading a major coffee chain',
    definition: 'Ngô Nguyên Kha (born 1971) is the CEO of The Coffee House since December 2021, applying technology and customer-experience thinking from consumer electronics to Vietnam\'s F&B sector. He previously served as Country Manager of Sony Ericsson Vietnam and co-founded Mobiistar, a Vietnamese smartphone brand that reached the top 5 market share. In early 2025, Golden Gate acquired 99.98% of The Coffee House for VND 270 billion under his leadership.',
    photo: '/experts/ngo-nguyen-kha.webp',
    category: 'inspiration' as const,
    tags: ['Coffee', 'F&B Chain', 'Career Pivot', 'Customer Experience'],
    shortBio: 'Nearly 10 years at Ericsson/Sony Ericsson, founded Mobiistar (top 5 smartphone VN). Pivoted to F&B in 2020, became CEO of The Coffee House in 2021. Philosophy: "If customers aren\'t satisfied, everything is meaningless."',
    fullBio: 'Ngô Nguyên Kha (b. 1971) spent nearly a decade at Ericsson and Sony Ericsson, serving as Country Manager of Sony Ericsson Vietnam. In 2012, he co-founded Mobiistar — a Vietnamese smartphone brand that reached top 5 market share, expanded to India in 2018, and withdrew in 2019.\n\nIn 2020, he joined Seedcom as General Director of Fashion Group. In December 2021, he was appointed CEO of The Coffee House — a chain with ~150 stores (later restructured to ~93). He brought tech-driven thinking and customer experience obsession from the electronics industry into F&B.\n\nIn early 2025, Golden Gate acquired 99.98% of The Coffee House for 270B VND.',
    highlights: [
      'Sony Ericsson Country Manager → founded Mobiistar (top 5 smartphone VN)',
      'CEO of The Coffee House since 2021, restructuring a ~150-store chain',
      'Brought tech-driven customer experience mindset into F&B',
      'The Coffee House acquired by Golden Gate in early 2025',
    ],
    quotes: [
      { text: 'If customers are not satisfied, everything we do is meaningless.', source: 'VnExpress', sourceUrl: 'https://e.vnexpress.net/news/companies/improving-customer-experience-holds-the-key-the-coffee-house-ceo-4564758.html' },
    ],
    advice: [
      { title: 'Customer experience is priority #1', desc: 'No matter how good the product, if customers aren\'t happy when they walk in, everything else is meaningless.' },
      { title: 'Tech mindset applies to F&B', desc: 'Managing an F&B chain is like managing a tech product — you need data, processes, and continuous feedback loops.' },
    ],
    links: [
      { label: 'Customer experience holds the key (VnExpress)', url: 'https://e.vnexpress.net/news/companies/improving-customer-experience-holds-the-key-the-coffee-house-ceo-4564758.html', type: 'article' },
    ],
    socials: [
      { platform: 'website', url: 'https://www.thecoffeehouse.com' },
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
      { text: 'I believe that when you create the right value, the market will eventually need that value.', source: 'VietnamNet', sourceUrl: 'https://vietnamnet.vn/la-viet-coffee-10-nam-kien-tri-voi-hat-arabica-ban-1-trieu-ly-ca-phe-moi-nam-2179264.html' },
      { text: 'La Viet is simply Vietnamese.', source: 'Báo Pháp Luật Việt Nam', sourceUrl: 'https://baophapluat.vn/khat-vong-ca-phe-tay-nguyen-bai-2-triet-ly-kinh-doanh-dam-mau-sac-nhan-van-cua-ca-phe-la-viet-post528668.html' },
      { text: 'There is no special coffee — only special people who make coffee with all their heart.', source: 'Đại Biểu Nhân Dân', sourceUrl: 'https://daibieunhandan.vn/5-yeu-to-viet-nam-nhat-cua-la-viet-coffee-10349728.html' },
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
    id: 'ly-quy-trung',
    slug: 'ly-quy-trung',
    name: 'Lý Quý Trung',
    seoTitle: 'Lý Quý Trung (b. 1966) — Founder of Pho 24, sold for $20M to Highlands (2011)',
    seoDescription: 'Lý Quý Trung — founded Pho 24 (2003), expanded to 70+ stores across 5 countries, sold for $20M to Highlands Coffee Group (2011). Now CEO of Nha Xinh + Western Sydney University professor.',
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
        text: 'Mistakes teach you a lot. Success teaches you very little. Success passes, but mistakes stay with you.',
        source: 'VnExpress',
        sourceUrl: 'https://vnexpress.net/tac-gia/ly-qui-trung-1241.html',
      },
      {
        text: 'In F&B, if you can tally the books at end of day and find profit, that\'s something to celebrate.',
        source: 'CafeF',
        sourceUrl: 'https://cafef.vn/cha-de-pho-24-ly-quy-trung-va-nhung-that-bai-dau-don-khi-khoi-nghiep-fb-quan-dong-chua-chac-da-loi-cuoi-ngay-ngoi-cong-so-co-lai-la-mung-2019052007401939.chn',
      },
      {
        text: 'Don\'t overuse the saying "failure is the mother of success." Avoid failure whenever you can.',
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



  // ── Operators & Đầu bếp ──

  {
    id: 'nguyen-ha-linh',
    slug: 'nguyen-ha-linh',
    name: 'Nguyễn Hà Linh',
    seoTitle: 'Nguyễn Hà Linh (b. 1988) — Founder Koh Yam Thai, Nghiện Nhà 2.6M community',
    seoDescription: 'Nguyễn Hà Linh — Forbes 30U30. From VND 250K at 18 to Koh Yam Thai (10 branches). Lessons after a 7-billion VND loss with Koh Samui coconut ice cream.',
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
      { text: 'I\'ve never seen it as failure — it\'s simply stumbling.', source: 'Báo Đầu tư', sourceUrl: 'https://baodautu.vn/ceo-nguyen-ha-linh-chu-he-thong-nha-hang-thai-koh-yam-khong-co-that-bai-chi-co-vap-nga-d89980.html' },
      { text: '80% of the business owners I know and admire have exceptional instincts for sales and marketing.', source: 'CafeF', sourceUrl: 'https://cafef.vn/nguyen-ha-linh-sang-lap-koh-yam-thai-chuoi-makeup-chu-nhuong-quyen-cong-ca-phe-nhung-khong-trang-diem-cung-chang-uong-ca-phe-quan-trong-la-biet-sales-va-marketing-20191219144543295.chn' },
      { text: 'The Northern market follows trends fast, and forgets them just as fast. The real challenge is building a sustainable business model.', source: 'CafeF', sourceUrl: 'https://soha.vn/nguyen-ha-linh-sang-lap-koh-yam-thai-chuoi-makeup-chu-nhuong-quyen-cong-ca-phe-nhung-khong-trang-diem-cung-chang-uong-ca-phe-quan-trong-la-biet-sales-va-marketing-20191219155309982.htm' },
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
    id: 'hoang-tung',
    slug: 'hoang-tung',
    name: 'Hoàng Tùng',
    seoTitle: 'Hoàng Tùng "Mr Pizza" (b. 1980) — Founder Pizza Home, Cloud Cook, Corona Burger 2020',
    seoDescription: 'Hoàng Tùng — founded Pizza Home (~20 stores Hanoi), pivoted to Cloud Cook (50+ ghost brands). Famous for Corona Burger 2020 (CNN, BBC). Shark Tank S4: raised 6B VND for 40%.',
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
        text: 'Every crisis holds an opportunity. Preparing for risk is never a waste.',
        source: 'TheLEADER',
        sourceUrl: 'https://theleader.vn/6-bai-hoc-xu-ly-khung-hoang-truyen-thong-cua-ong-chu-pizza-home-1616405004126.htm',
      },
      {
        text: 'The harder you try, the luckier you get.',
        source: 'CafeF',
        sourceUrl: 'https://cafef.vn/ceo-pizza-home-hoang-tung-cang-co-gang-thi-cang-may-man-20220122192946346.chn',
      },
      {
        text: 'Don\'t pit online sales against dine-in — both can complement each other.',
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

  {
    id: 'yosuke-masuko',
    slug: 'yosuke-masuko',
    name: 'Yosuke Masuko',
    seoTitle: 'Yosuke Masuko — Founder Pizza 4P\'s, from $100K to 40+ restaurants in 5 countries',
    seoDescription: 'Yosuke Masuko — Japanese founder of Pizza 4P\'s (2011, $100K capital). 40+ restaurants in 5 countries, Đà Lạt burrata factory 2,000/day, 115B VND profit (2023). Opens NYC 2025.',
    descriptor: 'Self-taught cheesemaker who turned backyard pizza parties into a 40+ restaurant empire across 5 countries',
    photo: '/experts/yosuke-masuko.webp',
    category: 'inspiration',
    tags: ['Farm-to-table', 'Pizza', 'International Chain', 'Sustainability'],
    shortBio: 'Co-Founder & CEO of Pizza 4P\'s. From 5 tiny tables in Saigon (2011) to 40+ restaurants across Vietnam, Cambodia, Japan, India, Indonesia. Hand-makes mozzarella at his own Dalat cheese factory.',
    fullBio: 'Yosuke Masuko (born in Japan) previously worked at CyberAgent Ventures. In 2008, he moved to Hanoi to set up an investment office. While living in Vietnam, he and his wife Sanae Takasugi began hosting backyard pizza parties every weekend. The parties became so popular that friends urged them to open a restaurant.\n\nThe biggest challenge: fresh mozzarella was nearly impossible to find in Vietnam. Masuko taught himself cheesemaking from YouTube, testing milk from over 25 sources. In 2011, with $100,000 in savings, the couple opened the first Pizza 4P\'s on Le Thanh Ton Street, District 1 — just 4-5 small tables.\n\nAfter 14 years: 40+ restaurants across 5 countries, a dedicated cheese factory in Don Duong (Dalat) producing 1,500-2,000 burrata and 2,000-3,000 mozzarella balls daily. In 2023, after-tax profit reached 115 billion VND ($4.6M), up 38% YoY. In 2025, expansion to New York (USA).',
    highlights: [
      'From 5 tables ($100K, 2011) → 40+ restaurants across 5 countries',
      'Self-taught mozzarella from YouTube — turned constraint into competitive moat',
      'Dalat cheese factory: 2,000+ burrata balls/day, wholesale & export',
      'After-tax profit 115B VND (2023), 38% growth YoY',
    ],
    quotes: [
      {
        text: 'Don\'t board the ship if you don\'t know where you\'re going. If the destination isn\'t clear, we won\'t leave the harbor.',
        source: 'Vietcetera',
        sourceUrl: 'https://vietcetera.com/en/pizza-4ps-yosuke-masuko-on-the-question-what-is-happiness',
      },
      {
        text: 'If pizza can help me fulfill my personal mission — "Making the world smile for peace" — I\'ll pour all my energy into it.',
        source: 'Vietcetera',
        sourceUrl: 'https://vietcetera.com/en/pizza-4ps-yosuke-masuko-on-the-question-what-is-happiness',
      },
      {
        text: 'I can\'t emphasize enough how important it is to understand yourself. Dig deep within — who you are, what you\'re passionate about.',
        source: 'Vietcetera',
        sourceUrl: 'https://vietcetera.com/en/who-am-i-finding-your-true-north-with-yosuke-masuko-and-sanae-takasugi',
      },
    ],
    advice: [
      {
        title: 'Start from passion, not a business plan',
        desc: 'Pizza 4P\'s was born from backyard parties — genuine love for the craft, not market analysis.',
      },
      {
        title: 'Turn constraints into competitive advantages',
        desc: 'No fresh mozzarella available? Learn to make it yourself. That constraint became something no competitor could replicate.',
      },
      {
        title: 'Sustainability is a business strategy, not a cost',
        desc: 'Zero-waste restaurants, in-house cheese production, farm-to-table sourcing — reduces costs, creates differentiation, and builds loyalty simultaneously.',
      },
    ],
    links: [
      { label: 'Pizza 4P\'s: Backyard parties to pizza empire (Backscoop)', url: 'https://www.backscoop.com/newsletter-posts/pizza-4ps-the-couple-who-turned-backyard-pizza-parties-into-a-pizza-empire', type: 'article' },
      { label: 'What is Happiness? (Vietcetera)', url: 'https://vietcetera.com/en/pizza-4ps-yosuke-masuko-on-the-question-what-is-happiness', type: 'article' },
      { label: 'Pizza 4P\'s global journey (VIR)', url: 'https://vir.com.vn/from-vietnam-to-the-world-pizza-4ps-global-journey-145300.html', type: 'article' },
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
    descriptor: 'Chef behind Vietnam\'s first and only Michelin Green Star, pioneering sustainable dining with 99% local ingredients',
    photo: '/experts/summer-le.webp',
    category: 'inspiration',
    tags: ['Michelin', 'Sustainability', 'Da Nang', 'Farm-to-table'],
    shortBio: 'Founder & Executive Chef of Nén — Vietnam\'s first and only Michelin Green Star restaurant. From food blogger to Michelin chef, 99% hyper-local ingredients. Opened Nén Tokyo (2025).',
    fullBio: 'Lê Hạ Uyên (Summer Lê), originally from Đà Nẵng, studied in Japan (Ritsumeikan APU) and Australia (ANU). During her final year of university, she started the "Danang Cuisine" food blog in English — wanting a Vietnamese voice to tell the story of her homeland\'s cuisine.\n\nFrom blog → food tours → restaurant. In 2017, she and her husband founded Nén Danang with the "Sto:ry Menu" concept — a tasting menu weaving Vietnamese cultural stories through each dish. 99% hyper-local ingredients, 30% sourced from Nén Farm right across from the restaurant.\n\nIn 2022, she opened Nén Light Saigon. In June 2024, Nén Danang received Vietnam\'s first and only Michelin Green Star — honoring its sustainability commitment. In September 2025, she opened Nén Tokyo in Daikanyama — the first Vietnamese fine-dining restaurant in Japan.',
    highlights: [
      'Vietnam\'s first and only Michelin Green Star (2024, retained 2025)',
      'From food blogger → Michelin chef, no formal culinary training',
      '99% hyper-local ingredients, Nén Farm supplies 30% of produce',
      'Expanded: Nén Danang (2017), Nén Light Saigon (2022), Nén Tokyo (2025)',
    ],
    quotes: [
      {
        text: 'For cuisine to have inner strength, it must use ingredients from its own land. We must believe our cuisine is "top-notch" — only then will we invest in developing it.',
        source: 'Tuổi Trẻ News',
        sourceUrl: 'https://tuoitrenews.vn/news/features/20241020/introducing-chef-summer-le-and-the-strength-found-within-vietnamese-cuisine/82475.html',
      },
      {
        text: 'Food has the power to touch the deepest emotions of a human being.',
        source: 'Robb Report Vietnam',
        sourceUrl: 'https://dev.robbreport.com.vn/ca-phe-sang-summer-le-am-thuc-co-kha-nang-cham-den-nhung-cam-xuc-sau-tham-nhat-cua-mot-con-nguoi/',
      },
      {
        text: 'Living sustainably is in the blood of the Vietnamese people. My grandparents, like generations before them, always lived frugally, in harmony with nature.',
        source: 'Michelin Guide',
        sourceUrl: 'https://guide.michelin.com/en/da-nang-region/da-nang_2984390/restaurant/nen-danang',
      },
    ],
    advice: [
      {
        title: 'Sustainability isn\'t expensive — it\'s Vietnamese heritage',
        desc: 'Our grandparents always lived sustainably without naming it. Use local ingredients, respect seasonality, minimize waste — it reduces cost and creates differentiation.',
      },
      {
        title: 'Tell stories, don\'t just serve food',
        desc: 'The Sto:ry Menu turns a meal into a cultural experience, enabling premium pricing and unforgettable impressions.',
      },
      {
        title: 'Believe in the power of Vietnamese cuisine',
        desc: 'Don\'t imitate foreign cuisines. Invest in deeply understanding local ingredients and techniques — that\'s the real competitive advantage.',
      },
    ],
    links: [
      { label: 'The strength of Vietnamese cuisine (Tuoi Tre)', url: 'https://tuoitrenews.vn/news/features/20241020/introducing-chef-summer-le-and-the-strength-found-within-vietnamese-cuisine/82475.html', type: 'article' },
      { label: 'Nén Danang — Michelin Green Star (Michelin Guide)', url: 'https://guide.michelin.com/en/da-nang-region/da-nang_2984390/restaurant/nen-danang', type: 'article' },
      { label: 'Nén: Where storytelling meets the plate (Vietnam News)', url: 'https://vietnamnews.vn/sunday/restaurant-review/1660855/nen-where-storytelling-meets-the-plate.html', type: 'article' },
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
      { text: 'If you want to get rich fast, don\'t start a business — only 5% of startups worldwide succeed.', source: 'Báo Pháp Luật', sourceUrl: 'https://doanhnhan.baophapluat.vn/ceo-dh-foods-ong-trum-gia-vi-viet-khoi-nghiep-o-tuoi-50-doanh-nghiep-tang-truong-50-bat-chap-dai-dich-43148.html' },
      { text: 'Let Vietnam be the world\'s kitchen... Dh Foods aspires to be the spice corner in that kitchen.', source: 'CafeBiz', sourceUrl: 'https://cafebiz.vn/chan-dung-ceo-dh-foods-trieu-phu-my-goi-tren-dat-ba-lan-tay-trang-hoi-huong-tuoi-50-vi-tieng-goi-tinh-yeu-dung-de-che-gia-vi-dac-san-thuan-viet-20210531182546149.chn' },
      { text: 'It\'s not about revenue — it\'s about consumer trust.', source: 'Báo Đầu tư', sourceUrl: 'https://baodautu.vn/doanh-nhan-nguyen-trung-dung-sang-lap-va-ceo-cua-dh-foods-tu-hu-gia-vi-nho-den-khat-vong-lon-d410892.html' },
      { text: 'For me, enjoying every day at work, having stable cash flow, paying salaries and bills on time — what more could you ask for?', source: 'CafeF', sourceUrl: 'https://cafef.vn/ong-trum-gia-vi-viet-khoi-nghiep-thanh-bai-o-von-va-cach-van-hanh-voi-12-ty-dong-ban-dau-den-nay-van-chua-phai-di-vay-ngan-hang-mot-dong-188240502135308949.chn' },
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
    id: 'vu-thanh-hung',
    slug: 'vu-thanh-hung',
    name: 'Vũ Thanh Hùng',
    descriptor: 'Founder of iPOS.vn — Vietnam\'s leading F&B POS platform serving 50,000+ restaurants',
    photo: '/experts/vu-thanh-hung.webp',
    category: 'inspiration' as const,
    tags: ['F&B Tech', 'POS', 'Startup', 'Industry Data'],
    shortBio: 'Former FPT Software engineer, founded iPOS.vn (2017) — Vietnam\'s largest F&B POS platform serving 50,000+ restaurants and cafes. Author of the annual Vietnam F&B Market Report.',
    fullBio: 'Vũ Thanh Hùng is a former software engineer at FPT Software. In 2017, noticing that most Vietnamese restaurants still managed operations manually, he founded iPOS.vn — a POS platform purpose-built for the F&B industry.\n\nAfter 7 years, iPOS.vn serves 50,000+ stores, making it Vietnam\'s largest F&B-focused POS platform. Beyond software, iPOS.vn is well known for its annual Vietnam F&B Market Report — a data source widely cited by media and investors.\n\nVũ Thanh Hùng regularly shares insights on F&B management, industry trends, and digital transformation at business forums.',
    highlights: [
      'Founded iPOS.vn (2017) — Vietnam\'s largest F&B POS platform, 50,000+ stores',
      'Author of the annual Vietnam F&B Market Report',
      'Former FPT Software engineer, bringing tech thinking to restaurant management',
      'iPOS data regularly cited by CafeF, VnExpress, Dân Trí',
    ],
    quotes: [
      { text: 'Most Vietnamese restaurants still manage with notebooks and messages — that\'s why they don\'t know if they\'re making or losing money.', source: 'iPOS.vn' },
      { text: 'Data is what helps small shop owners compete with large chains.', source: 'CafeF' },
    ],
    advice: [
      { title: 'Manage by numbers, not intuition', desc: 'Know exactly the revenue per dish, daily costs, hourly inventory — that\'s a small shop\'s competitive advantage in the digital age.' },
      { title: 'Digital transformation doesn\'t have to be expensive', desc: 'A basic POS system reduces losses, speeds up service, and enables data-driven decisions — small investment, big impact.' },
    ],
    links: [
      { label: 'Vietnam F&B Market Report (iPOS)', url: 'https://ipos.vn/bao-cao-thi-truong-fnb-2024', type: 'article' },
      { label: 'iPOS.vn Website', url: 'https://ipos.vn', type: 'article' },
    ],
    socials: [
      { platform: 'website', url: 'https://ipos.vn' },
    ],
  },

  {
    id: 'taku-tanaka',
    slug: 'taku-tanaka',
    name: 'Taku Tanaka',
    descriptor: 'Ex-COO of Pizza 4P\'s who built Vietnam\'s first B2B food sourcing platform for restaurants',
    photo: '/experts/taku-tanaka.webp',
    category: 'inspiration',
    tags: ['Supply Chain', 'Startup', 'B2B', 'Forbes Asia'],
    shortBio: 'Ex-COO of Pizza 4P\'s → founded KAMEREO (2018) — Vietnam\'s first B2B food sourcing platform. Serving 3,000+ restaurants, raised $15M+. Forbes Asia 100 to Watch 2025.',
    fullBio: 'Taku Tanaka (b. 1989, Japan) graduated from Keio University and worked as an equity research analyst at Credit Suisse Tokyo. In 2015, he joined Pizza 4P\'s as COO, helping expand from 1 to 10 stores in 3 years.\n\nAt Pizza 4P\'s, he witnessed the chaos of restaurant procurement firsthand: different purchasers using different tools, no system, no price transparency. In 2018, he co-founded KAMEREO — the first B2B platform connecting restaurants with farmers and suppliers in Vietnam.\n\nAfter pivoting from a failed SaaS model to full-service B2B e-commerce, KAMEREO achieved 15% month-over-month growth for 12 consecutive months. Now serving 3,000+ F&B businesses, partnering with 100+ farmers, offering 16,000+ SKUs. Named in Forbes Asia 100 to Watch 2025.',
    highlights: [
      'Ex-COO of Pizza 4P\'s — expanded from 1 to 10 stores in 3 years',
      'Founded KAMEREO (2018) — Vietnam\'s first B2B food sourcing platform',
      'Raised $15M+ total, serving 3,000+ restaurants, 100+ farmer partners',
      'Forbes Asia 100 to Watch 2025',
    ],
    quotes: [
      {
        text: 'Procurement departments aren\'t working efficiently because the purchasing process is too chaotic. Each buyer uses a different tool to contact suppliers.',
        source: 'Vietcetera',
        sourceUrl: 'https://vietcetera.com/en/tech-solutions-for-restaurants-with-kamereos-taku-tanaka-vni-ep20-recap',
      },
      {
        text: 'In a price-sensitive market like Vietnam, competing on price alone is a losing game.',
        source: 'Genesia Ventures',
        sourceUrl: 'https://www.genesiaventures.com/en/orbit-workshop-02/',
      },
      {
        text: 'You can\'t control others, but you can try to control yourself.',
        source: 'Vietcetera',
        sourceUrl: 'https://vietcetera.com/en/how-i-manage-kamereos-ceo-taku-tanaka',
      },
    ],
    advice: [
      {
        title: 'Stop buying ingredients the chaotic way',
        desc: 'Running to the market daily, calling 5-6 suppliers, no price comparison — wastes time, creates errors, and kills your negotiating power.',
      },
      {
        title: 'Healthy margins matter more than revenue',
        desc: 'Stable cash flow, healthy profit margins, financial discipline — that\'s the foundation of sustainability.',
      },
      {
        title: 'First model failed? Pivot fast',
        desc: 'KAMEREO started as SaaS — just connecting without creating value. The pivot to full-service B2B e-commerce is what worked.',
      },
    ],
    links: [
      { label: 'KAMEREO raises $7.8M Series B (TNGlobal)', url: 'https://technode.global/2024/12/09/vietnams-kamereo-secures-7-8m-series-b-funding-to-accelerate-growth/', type: 'article' },
      { label: 'Tech solutions for restaurants (Vietcetera)', url: 'https://vietcetera.com/en/tech-solutions-for-restaurants-with-kamereos-taku-tanaka-vni-ep20-recap', type: 'article' },
      { label: 'How I Manage — Taku Tanaka (Vietcetera)', url: 'https://vietcetera.com/en/how-i-manage-kamereos-ceo-taku-tanaka', type: 'article' },
    ],
    socials: [
      { platform: 'linkedin', url: 'https://www.linkedin.com/in/taku-tanaka-98876033/' },
      { platform: 'website', url: 'https://kamereo.vn' },
    ],
  },

  // ── 11 new experts ──

  {
    id: 'dang-le-nguyen-vu',
    slug: 'dang-le-nguyen-vu',
    name: 'Đặng Lê Nguyên Vũ',
    seoTitle: 'Đặng Lê Nguyên Vũ (b. 1971) — Trung Nguyên Chairman, Vietnam Coffee King',
    seoDescription: 'Đặng Lê Nguyên Vũ — dropped out of medical school to build Trung Nguyên Legend across 60+ countries. G7 holds 38% of Vietnam instant coffee market. Forbes Asia "Zero to Hero".',
    descriptor: '"Vietnam\'s Coffee King" — the man who brought Vietnamese coffee to 60+ countries',
    photo: '/experts/dang-le-nguyen-vu.webp',
    category: 'inspiration',
    tags: ['Coffee', 'From Zero', 'Vietnamese Brand'],
    shortBio: 'Founder and Chairman of Trung Nguyên Legend Group. From a poor farming family in M\'Drắk, Đắk Lắk, he dropped out of medical school to build Vietnam\'s largest coffee empire, with G7 capturing 38% of the instant coffee market for 9 consecutive years.',
    fullBio: 'Đặng Lê Nguyên Vũ was born on February 10, 1971 in Ninh Hòa, Khánh Hòa to a poor farming family. In 1979, his family moved to M\'Drắk, a mountainous district of Đắk Lắk. He enrolled in Medical School at Tây Nguyên University in 1992 but soon dropped out to pursue his passion for coffee.\n\nIn 1996, he founded Trung Nguyên Coffee in Buôn Ma Thuột — Vietnam\'s coffee capital. By 1998, the first store opened in Ho Chi Minh City and rapidly expanded through franchising, becoming Vietnam\'s largest coffee chain. From 2003, the G7 instant coffee brand led the domestic market with 38% share for 9 consecutive years. Trung Nguyên now exports to over 60 countries.\n\nIn 2012, Forbes Asia named him "Vietnam\'s Coffee King" for his "Zero to Hero" journey. He pursues the philosophy of "Coffee Philosophy" — elevating coffee from commerce to a life philosophy, with the ambition of making Vietnam a "global coffee mecca."',
    highlights: [
      'Founded Trung Nguyên (1996) from Buôn Ma Thuột; G7 held 38% instant coffee market share for 9 years',
      'Forbes Asia & National Geographic named him "Vietnam\'s Coffee King" (2012)',
      'Present in 60+ countries with thousands of franchise stores nationwide',
      'Invested 500+ billion VND in "Creative for Vietnamese Aspirations" — donating books to youth',
    ],
    quotes: [
      { text: 'You must have a warrior spirit. Think big. Even with the smallest product, you must think about selling it globally.', source: 'Doanh Nhân Sài Gòn', sourceUrl: 'https://doanhnhansaigon.vn/dang-le-nguyen-vu-chu-tich-tap-doan-ca-phe-trung-nguyen-sai-dau-sua-do-304777.html' },
      { text: 'If Vietnamese businesses don\'t dare to venture into the open sea, facing the fierce waves, they\'ll forever be swimming in a small pond.', source: 'Tiền Phong', sourceUrl: 'https://tienphong.vn/cuoc-tro-chuyen-hiem-hoi-va-nhung-bi-an-cua-vua-ca-phe-trung-nguyen-dang-le-nguyen-vu-post1543426.tpo' },
      { text: 'Fix where you fail — fix the strategy if the strategy is wrong, fix the execution if execution is wrong.', source: 'Doanh Nhân Sài Gòn', sourceUrl: 'https://doanhnhansaigon.vn/dang-le-nguyen-vu-chu-tich-tap-doan-ca-phe-trung-nguyen-sai-dau-sua-do-304777.html' },
    ],
    advice: [
      { title: 'Think big from the smallest product', desc: 'Whether you sell phở, coffee, or bánh mì — think about how your product can serve the whole world.' },
      { title: 'Fix where you fail, never quit', desc: 'Wrong strategy? Fix the strategy. Wrong execution? Fix the execution. The only way to truly fail is to stop.' },
      { title: 'No money? Then have grit', desc: 'For entrepreneurs, willpower and hard work are your first capital. Money comes after you\'ve proven you can deliver.' },
    ],
    links: [
      { label: '"Fix where you fail" (Doanh Nhân Sài Gòn)', url: 'https://doanhnhansaigon.vn/dang-le-nguyen-vu-chu-tich-tap-doan-ca-phe-trung-nguyen-sai-dau-sua-do-304777.html', type: 'article' },
      { label: 'A rare conversation (Tiền Phong)', url: 'https://tienphong.vn/cuoc-tro-chuyen-hiem-hoi-va-nhung-bi-an-cua-vua-ca-phe-trung-nguyen-dang-le-nguyen-vu-post1543426.tpo', type: 'article' },
    ],
    socials: [{ platform: 'website', url: 'https://trungnguyenlegend.com' }],
  },

  {
    id: 'le-hoang-diep-thao',
    slug: 'le-hoang-diep-thao',
    name: 'Lê Hoàng Diệp Thảo',
    seoTitle: 'Lê Hoàng Diệp Thảo (b. 1973) — Founder King Coffee, Vietnam\'s Queen of Coffee',
    seoDescription: 'Lê Hoàng Diệp Thảo — Trung Nguyên co-founder, launched King Coffee (2016) reaching 120+ countries. "Most Admired CEO Vietnam 2020". Reverse-market strategy + "3 children" philosophy.',
    descriptor: '"Queen of Coffee" — CEO of King Coffee, bringing Vietnamese coffee to 120+ countries',
    photo: '/experts/le-hoang-diep-thao.webp',
    category: 'inspiration',
    tags: ['Coffee', 'Female Founder', 'Global Brand'],
    shortBio: 'Co-founder of Trung Nguyên Group and current Chairman & CEO of TNI King Coffee. She brought King Coffee to 120+ countries, named "Most Admired CEO in Vietnam" (F&B, 2020).',
    fullBio: 'Lê Hoàng Diệp Thảo was born in 1973 in Gia Lai. Together with ex-husband Đặng Lê Nguyên Vũ, she co-founded Trung Nguyên Group and directly managed operations from 1998-2014, playing a key role in bringing the G7 brand to international markets.\n\nIn 2015, she founded TNI King Coffee with a "reverse" strategy — entering international markets first to build credibility, then returning to dominate domestically. Within just 1 year, the distribution network covered all 63 provinces. Today, King Coffee is present in over 120 countries.\n\nShe received the "Most Admired CEO in Vietnam" award (Global Brands Magazine, 2020) and was the first Vietnamese speaker at the Allegra World Coffee Portal CEO Forum. She launched the "Women Can Do" project supporting 100,000 women entrepreneurs.',
    highlights: [
      'Co-founded Trung Nguyên Group, directly managed operations 1998-2014',
      'Founded King Coffee (2015) — exported to 120+ countries',
      '"Most Admired CEO in Vietnam" (F&B) — Global Brands Magazine (2020)',
      'Launched "Women Can Do" supporting 100,000 women entrepreneurs',
    ],
    quotes: [
      { text: 'Coffee has always brought me endless joy, creativity and passion.', source: 'Global Brands Magazine', sourceUrl: 'https://www.globalbrandsmagazine.com/interview-of-madame-le-hoangdiep-thao-founder-ceo-king-coffee/' },
      { text: 'Go out to see the opportunities and take action. It is your achievements that create your reputation, not your speeches.', source: 'King Coffee US', sourceUrl: 'https://us.kingcoffee.com/blogs/news/businesswoman-le-hoang-diep-thao-and-the-journey-to-build-the-worldwide-brand-named-king-coffee' },
      { text: 'Why, while the price of a cup of coffee abroad is 5 dollars, in our country farmers can only sell coffee beans for 5 cents per kg?', source: 'King Coffee US', sourceUrl: 'https://us.kingcoffee.com/blogs/news/businesswoman-le-hoang-diep-thao-and-the-journey-to-build-the-worldwide-brand-named-king-coffee' },
      { text: 'I am like a mother with three children: Trung Nguyên, G7, and King Coffee. I do not want them to compete — I want them all to succeed together.', source: 'Vietnamnet', sourceUrl: 'https://vietnamnet.vn/ba-le-hoang-diep-thao-toi-nhu-me-voi-3-con-la-trung-nguyen-g7-va-king-coffee-2162390.html' },
    ],
    advice: [
      { title: 'The "reverse" strategy', desc: 'Enter international markets first to build world-class credibility, then return to dominate the domestic market with brand advantage.' },
      { title: 'Actions build reputation, not words', desc: 'Don\'t just talk about your plans — execute and let results speak for you.' },
      { title: 'Build the value chain from the farmer', desc: 'The true value of Vietnamese coffee lies with the growers. Supporting farmers is supporting yourself.' },
    ],
    links: [
      { label: 'CEO Interview (Global Brands Magazine)', url: 'https://www.globalbrandsmagazine.com/interview-of-madame-le-hoangdiep-thao-founder-ceo-king-coffee/', type: 'article' },
      { label: '30 years defining Vietnamese coffee (Thanh Niên)', url: 'https://thanhnien.vn/ceo-le-hoang-diep-thao-30-nam-hanh-trinh-dinh-danh-ca-phe-viet-185260218155826603.htm', type: 'article' },
    ],
    socials: [
      { platform: 'linkedin', url: 'https://vn.linkedin.com/in/le-hoang-diep-thao-%F0%9F%87%BB%F0%9F%87%B3-14436b142' },
      { platform: 'website', url: 'https://kingcoffee.com' },
    ],
    faq: [
      {
        question: 'When was Lê Hoàng Diệp Thảo born?',
        answer: 'Lê Hoàng Diệp Thảo was born in 1973 in Gia Lai, Vietnam. She graduated in 1994 and began her career at the Gia Lai postal service before co-founding Trung Nguyên with her ex-husband Đặng Lê Nguyên Vũ in 1996.',
      },
      {
        question: 'Who owns King Coffee?',
        answer: 'King Coffee is owned by Lê Hoàng Diệp Thảo, who founded it in 2016 and serves as Chairman and CEO of TNI King Coffee. She previously co-founded Trung Nguyên Group and was the operational leader who launched G7 instant coffee globally.',
      },
      {
        question: 'How many countries does King Coffee operate in?',
        answer: 'King Coffee is present in over 120 countries today. Lê Hoàng Diệp Thảo used a "reverse" strategy — launching in the US in October 2016, then returning to Vietnam in July 2017 to build a 63-province network within just one year.',
      },
      {
        question: 'What was her role at Trung Nguyên?',
        answer: 'She directly managed operations at Trung Nguyên Group from 1998-2014 as Vice General Director, leading the international expansion of G7 instant coffee from 2001. She left Trung Nguyên in 2015 to found King Coffee.',
      },
      {
        question: 'What awards has she received?',
        answer: 'She received "Most Admired CEO in Vietnam" (Global Brands Magazine, 2020, F&B sector), Top 12 Strong National Brands 2025, and Top 10 Southeast Asia Coffee Companies. She was also the first Vietnamese speaker at the Allegra World Coffee Portal CEO Forum.',
      },
    ],
  },

  {
    id: 'david-thai',
    slug: 'david-thai',
    name: 'David Thái',
    descriptor: 'First overseas Vietnamese to start a private company in Hanoi — founder of Vietnam\'s largest coffee chain',
    photo: '/experts/david-thai.webp',
    category: 'inspiration',
    tags: ['Coffee', 'Vietnamese Brand', 'Overseas Vietnamese'],
    shortBio: 'Founder of Highlands Coffee — Vietnam\'s largest coffee chain. He was the first overseas Vietnamese granted a private business license in Hanoi (1998) and famously rejected a buyout offer from Starbucks.',
    fullBio: 'David Thái (Thái Phi Diệp) was born in 1972 in Vietnam and moved to the US in 1979. He grew up in Seattle and graduated in Business Administration from the University of Washington. In 1996, he returned to Vietnam with just $1,000. In 1998, he became the first overseas Vietnamese licensed to establish a private business in Hanoi.\n\nIn 2002, the first two Highlands Coffee stores opened. When Starbucks offered to acquire the brand, he firmly refused: "You can\'t do that. This is a Vietnamese brand, this is Vietnam." In 2009, the World Economic Forum named him a Young Global Leader.\n\nRemarkably, he has never withdrawn dividends from Highlands — he earns money elsewhere and reinvests everything back into the company.',
    highlights: [
      'First overseas Vietnamese to establish a private business in Hanoi (1998)',
      'Rejected Starbucks\' acquisition offer to protect Vietnamese brand identity',
      'Young Global Leader — World Economic Forum (2009)',
      'Has never withdrawn dividends — reinvests 100% of profits into Highlands',
    ],
    quotes: [
      { text: 'You can\'t do that. This is a Vietnamese brand, this is Vietnam.', source: 'CafeF', sourceUrl: 'https://cafef.vn/nha-sang-lap-david-thai-lan-dau-ke-chuyen-suyt-ban-highlands-coffee-cho-starbucks-va-khao-khat-phuc-hung-robusta-toi-kiem-tien-o-cho-khac-roi-don-ca-vao-highlands-188250417023804317.chn' },
      { text: 'I\'ve never taken money out of Highlands. I earn money elsewhere and pour it all into Highlands. That\'s a real commitment.', source: 'CafeF', sourceUrl: 'https://cafef.vn/nha-sang-lap-david-thai-lan-dau-ke-chuyen-suyt-ban-highlands-coffee-cho-starbucks-va-khao-khat-phuc-hung-robusta-toi-kiem-tien-o-cho-khac-roi-don-ca-vao-highlands-188250417023804317.chn' },
      { text: 'My strategy is people — it\'s all about people. You can\'t succeed without everyone. You just can\'t.', source: 'CafeF', sourceUrl: 'https://cafef.vn/nha-sang-lap-david-thai-lan-dau-ke-chuyen-suyt-ban-highlands-coffee-cho-starbucks-va-khao-khat-phuc-hung-robusta-toi-kiem-tien-o-cho-khac-roi-don-ca-vao-highlands-188250417023804317.chn' },
    ],
    advice: [
      { title: 'Go all-in on your venture', desc: 'David has never taken dividends from Highlands, reinvesting 100% of profits. Personal commitment is the foundation of success.' },
      { title: 'People are strategy #1', desc: 'Finding the right people and making them work together — that\'s the hard part. Coffee is easy, strategy is easy — people are hard.' },
      { title: 'Protect your brand identity', desc: 'Even when a lucrative offer comes, the core values of a Vietnamese brand should never be for sale.' },
    ],
    links: [
      { label: 'The Starbucks story (CafeF)', url: 'https://cafef.vn/nha-sang-lap-david-thai-lan-dau-ke-chuyen-suyt-ban-highlands-coffee-cho-starbucks-va-khao-khat-phuc-hung-robusta-toi-kiem-tien-o-cho-khac-roi-don-ca-vao-highlands-188250417023804317.chn', type: 'article' },
      { label: 'Meeting the father of Highlands Coffee (Thanh Niên)', url: 'https://thanhnien.vn/gap-cha-de-cua-highlands-coffee-david-thai-chung-toi-la-thuong-hieu-viet-18525041916232154.htm', type: 'article' },
    ],
    socials: [{ platform: 'website', url: 'https://highlandscoffee.com.vn' }],
  },

  {
    id: 'lam-boi-minh',
    slug: 'lam-boi-minh',
    name: 'Lâm Bội Minh',
    descriptor: 'The man behind a 55+ year tea & coffee legend — from Bảo Lộc highlands to a hundred-million-dollar deal',
    photo: '/experts/lam-boi-minh.webp',
    category: 'inspiration',
    tags: ['Vietnamese Tea', 'Coffee', 'Brand Heritage'],
    shortBio: 'Founder of Phúc Long Coffee & Tea since 1968 in Bảo Lộc, Lâm Đồng. Over 55+ years, he built Phúc Long into a national tea and coffee brand, with a deal selling 31% stake to Masan Group worth hundreds of millions of USD.',
    fullBio: 'Lâm Bội Minh was born in 1946 and started his journey with Phúc Long in 1968 on the tea highlands of Bảo Lộc. He personally researched and learned about tea and coffee "from the smallest and simplest steps." Every recipe was tested hundreds of times to meet all criteria: color, fragrance, beauty, and taste.\n\nIn the 1990s, when espresso machines were still a luxury item, he was determined to import one to his shop in District 1, HCMC. His philosophy: "Value lies not in the number of stores but in the quality of each store."\n\nIn early 2022, Masan Group acquired a 31% stake, with shareholders receiving $110 million. An extremely private entrepreneur — no public photos, no social media — yet he left an enormous legacy for Vietnam\'s F&B industry.',
    highlights: [
      'Founded Phúc Long (1968) from Bảo Lộc — a tea & coffee brand over 55 years old',
      'Masan deal: sold 31% stake, shareholders received $110 million (2022)',
      '"Quality over quantity" philosophy — every recipe tested hundreds of times',
      'Expanded into hospitality: Phúc Long Luxury hotel (Đà Nẵng, 2025)',
    ],
    quotes: [
      { text: 'A good name is sooner lost than won. It takes a lifetime to build a good reputation and only a minute to lose it.', source: 'Vietnam Investment Review', sourceUrl: 'https://vir.com.vn/the-story-of-phuc-longs-50-year-journey-107719.html' },
      { text: 'To formulate a perfect beverage recipe, my team and I experimented hundreds of times to choose one that satisfied all the requirements of colour, fragrance, beauty, and taste.', source: 'Vietnam Investment Review', sourceUrl: 'https://vir.com.vn/the-story-of-phuc-longs-50-year-journey-107719.html' },
      { text: 'If you dare to think and dare to do, wisdom will always shine through, especially in times of difficulty.', source: 'Vietnam Investment Review', sourceUrl: 'https://vir.com.vn/the-story-of-phuc-longs-50-year-journey-107719.html' },
    ],
    advice: [
      { title: 'Quality is everything', desc: 'Every recipe must go through hundreds of tests. Never trade quality for speed of expansion.' },
      { title: 'Start from the smallest steps', desc: '"I built Phúc Long by researching and learning from the simplest and smallest steps."' },
      { title: 'Dare to think, dare to act', desc: '"Wisdom always shines through, especially in difficult times." Just dare to take action.' },
    ],
    links: [
      { label: 'Phúc Long\'s 50+ year journey (VIR)', url: 'https://vir.com.vn/the-story-of-phuc-longs-50-year-journey-107719.html', type: 'article' },
      { label: 'Untold story of the founder (CafeF)', url: 'https://cafef.vn/chuyen-chua-ke-ve-nha-sang-lap-thuong-hieu-phuc-long-188231003125835427.chn', type: 'article' },
    ],
    socials: [{ platform: 'website', url: 'https://phuclong.com.vn' }],
  },

  {
    id: 'truong-nguyen-thien-kim',
    slug: 'truong-nguyen-thien-kim',
    name: 'Trương Nguyễn Thiên Kim',
    seoTitle: 'Trương Nguyễn Thiên Kim (b. 1976) — Founder Katinat, Phê La, $140M empire',
    seoDescription: 'Trương Nguyễn Thiên Kim — founded Katinat (2016, 70+ stores), owns 84.21% + Phê La (51%). ~$140M family wealth with husband Tô Hải (Vietcap). Chair of D1 Concepts.',
    descriptor: '"The quiet F&B powerhouse" — the woman behind the billion-dollar empire of Katinat, Phê La, D1 Concepts',
    photo: '/experts/truong-nguyen-thien-kim.webp',
    category: 'inspiration',
    tags: ['Coffee', 'Female Founder', 'F&B Chain'],
    shortBio: 'Chairman & CEO of D1 Concepts, owner of Katinat Saigon Kafe (84.21%) and Phê La (51%). One of the most powerful female F&B entrepreneurs in Vietnam.',
    fullBio: 'Trương Nguyễn Thiên Kim was born on November 28, 1976 in Đà Lạt and holds a Master\'s in Finance from the University of Economics HCMC. She began her career in securities (Bảo Việt, Đông Á) and served as Head of Supervisory Board at PNJ.\n\nWith D1 Concepts (est. 2012), she built an impressive F&B portfolio: San Fu Lou, Sorae, Dì Mai. The real breakout came from Katinat Saigon Kafe — a premium "made in Saigon" coffee chain — and Phê La, which created the viral "dawn coffee" phenomenon on social media.\n\nTogether with her husband Tô Hải (CEO of Vietcap Securities), they hold assets of nearly 6,000 billion VND (~$240M). She is an extremely private entrepreneur — rarely gives interviews.',
    highlights: [
      'Owns Katinat (84.21%), Phê La (51%), chairs D1 Concepts',
      'Katinat became the leading premium coffee chain in HCMC',
      'Phê La created the "dawn coffee" phenomenon — most viral F&B brand on social media (2024)',
      'Combined assets of 6,000 billion VND (~$240M) with husband (Tô Hải, Vietcap Chairman)',
    ],
    quotes: [
      { text: 'Katinat chose HCMC as its primary market, while Phê La opened its first store in Hanoi — a strategy of dividing markets to avoid internal competition.', source: 'Người Quan Sát', sourceUrl: 'https://nguoiquansat.vn/bi-quyet-giup-phe-la-cua-nu-dai-gia-truong-nguyen-thien-kim-tro-thanh-trao-luu-ca-phe-luc-binh-minh-163889.html' },
    ],
    advice: [
      { title: 'Build a diversified portfolio', desc: 'Don\'t depend on one brand. Simultaneously operate fine dining, casual, and mass market concepts.' },
      { title: 'Divide markets to avoid self-competition', desc: 'Katinat focuses on HCMC, Phê La targets Hanoi first. Each brand gets its own playground.' },
      { title: 'Leverage social media power', desc: 'Phê La exploded thanks to the "dawn coffee" trend on TikTok — understanding and creating trends is the key.' },
    ],
    links: [
      { label: 'Portrait of the billionaire businesswoman (CafeF)', url: 'https://cafef.vn/chan-dung-nu-doanh-nhan-nghin-ty-dung-sau-chuoi-katinat-phe-la-188240913132444185.chn', type: 'article' },
      { label: 'The woman behind Phê La & Katinat (Znews)', url: 'https://znews.vn/nu-dai-gia-dung-sau-chuoi-phe-la-katinat-la-ai-post1494565.html', type: 'article' },
    ],
    socials: [],
  },

  {
    id: 'nguyen-thi-kim-oanh',
    slug: 'nguyen-thi-kim-oanh',
    name: 'Nguyễn Thị Kim Oanh',
    descriptor: 'From Vietnam\'s first Miss Athletic to pioneering modern Vietnamese cuisine restaurant chains',
    photo: '/experts/nguyen-thi-kim-oanh.webp',
    category: 'inspiration',
    tags: ['Vietnamese Cuisine', 'Female Founder', 'Restaurant Chain'],
    shortBio: 'Vietnam\'s first Miss Athletic (1993), founded Wrap & Roll (2006) — a modern Vietnamese spring roll restaurant chain that raised $6.9M from Mekong Enterprise Fund III.',
    fullBio: 'Nguyễn Thị Kim Oanh was born in 1975 in Hải Phòng and was crowned Vietnam\'s first Miss Athletic in 1993. She spent 7 years helping her husband build Sudest Production — one of Vietnam\'s first private film production companies.\n\nIn 2006, she founded Wrap & Roll — a pioneering chain that brought traditional Vietnamese spring rolls into a modern restaurant format. After 10 years: 12 stores in Hanoi and HCMC, 4 franchise locations in Singapore, and $6.9 million investment from Mekong Enterprise Fund III. She represented Asian female entrepreneurs at Ernst & Young Winning Women.\n\nHer philosophy: "Reputation, responsibility, and commitment — expertise is only a tool; what holds a team together long-term is sharing the same values."',
    highlights: [
      'Vietnam\'s first Miss Athletic (1993)',
      'Founded Wrap & Roll (2006) — pioneered modern Vietnamese cuisine chains',
      'Raised $6.9M from Mekong Enterprise Fund III (2016)',
      'Represented Asian female entrepreneurs at Ernst & Young Winning Women international forum',
    ],
    quotes: [
      { text: 'Reputation, responsibility, and commitment are the three values that I hold dearly and apply to both my work and my personal life.', source: 'Vietcetera', sourceUrl: 'https://vietcetera.com/en/a-working-woman-business-leader-kim-oanh-on-measuring-what-really-matters' },
      { text: 'For me, expertise is only a tool; to be able to stay together and work for a long time, we need to share the same values.', source: 'Vietcetera', sourceUrl: 'https://vietcetera.com/en/a-working-woman-business-leader-kim-oanh-on-measuring-what-really-matters' },
      { text: 'If you\'re a leader, then you have to take responsibility in any circumstances.', source: 'Vietcetera', sourceUrl: 'https://vietcetera.com/en/a-working-woman-business-leader-kim-oanh-on-measuring-what-really-matters' },
    ],
    advice: [
      { title: 'Reputation is everything', desc: 'Only when you fully commit to your promises can you feel their weight on your reputation and success.' },
      { title: 'F&B leaders must understand the product', desc: 'Not just strategy — you need deep knowledge of the food, ingredients, and processes.' },
      { title: 'Share values, not just work', desc: '"Expertise is only a tool; to go far together, you need to share the same values."' },
    ],
    links: [
      { label: 'Kim Oanh on Measuring What Really Matters (Vietcetera)', url: 'https://vietcetera.com/en/a-working-woman-business-leader-kim-oanh-on-measuring-what-really-matters', type: 'article' },
      { label: '10 years after Wrap & Roll (Kenh14)', url: 'https://kenh14.vn/10-nam-sau-thuong-vu-ban-wraproll-hoa-khoi-the-thao-dau-tien-cua-viet-nam-tai-xuat-voi-nha-hang-moi-tien-se-toi-sau-215251124091443877.chn', type: 'article' },
    ],
    socials: [
      { platform: 'linkedin', url: 'https://vn.linkedin.com/in/oanh-kim-nguyen-332a37136' },
      { platform: 'website', url: 'http://wrap-roll.com' },
    ],
  },

  {
    id: 'sanae-takasugi',
    slug: 'sanae-takasugi',
    name: 'Sanae Takasugi',
    descriptor: 'Co-founder & Deputy CEO of Pizza 4P\'s — architect of the "Oneness" culture from pizza to life philosophy',
    photo: '/experts/sanae-takasugi.webp',
    category: 'inspiration',
    tags: ['Restaurant', 'Sustainability', 'Company Culture'],
    shortBio: 'Co-founder and Deputy CEO of Pizza 4P\'s. A Keio University graduate who studied in the UK and China, she and husband Yosuke Masuko built the brand from home pizza parties (2011) into a chain of 32+ restaurants across Asia.',
    fullBio: 'Sanae Takasugi graduated from Keio University (Japan), studied in the UK and China, and worked in IT before co-founding Pizza 4P\'s with husband Yosuke Masuko in 2011 in HCMC. From home pizza parties (selling to friends via email, just 14-15 pizzas each time), they built the brand into 32+ restaurants across Vietnam, Cambodia, India, Indonesia, and Japan.\n\nShe plays a key role in business model design, brand building, and content creation. Pizza 4P\'s is known for its self-made cheese (from their own farm in Đơn Dương, Lâm Đồng), organic vegetable gardens, and sustainability commitments (zero waste, clean energy, green packaging). They follow the philosophy of "Oneness — Earth to People."\n\nA distinctive touch: every Pizza 4P\'s pizza box carries a handwritten note from the team member who made it — a small "wow moment" that creates a unique experience.',
    highlights: [
      'Co-founded Pizza 4P\'s (2011) — from home pizza parties to 32+ restaurants across Asia',
      '"Oneness — Earth to People" philosophy connecting people, food, and the planet',
      'F&B sustainability pioneer: self-made cheese, organic farms, zero waste',
      '"Wow moment" model — staff write handwritten notes on every pizza box',
    ],
    quotes: [
      { text: 'Any business which looks to the future needs to be sustainable. We want Pizza 4P\'s to be doing this 50 or 100 years from now.', source: 'The Dot Magazine', sourceUrl: 'https://thedotmagazine.com/pizza-4ps-co-founder-sanaes-story-so-far-of-their-quest-for-peace-through-pizza/' },
      { text: 'For me, I believe we have to think carefully, and always do what we believe is right at the time, and we\'ll never regret any decision.', source: 'The Dot Magazine', sourceUrl: 'https://thedotmagazine.com/pizza-4ps-co-founder-sanaes-story-so-far-of-their-quest-for-peace-through-pizza/' },
      { text: 'That small act of humanity, we hope, gives the person receiving the pizza a little "wow" moment... it reminds our partner that what they do is more than making pizza — it\'s making people happy.', source: 'The Dot Magazine', sourceUrl: 'https://thedotmagazine.com/pizza-4ps-co-founder-sanaes-story-so-far-of-their-quest-for-peace-through-pizza/' },
    ],
    advice: [
      { title: 'Sustainability isn\'t strategy — it\'s survival', desc: '"We HAVE TO find a sustainable way to do things, regardless of corporate strategy." Don\'t treat sustainability as a marketing gimmick.' },
      { title: 'Create "wow moments" from small things', desc: 'A handwritten note on a pizza box creates a unique experience without big investment.' },
      { title: 'Do what you believe is right and never regret', desc: 'Failure is natural. Think carefully, act decisively, and accept the outcome.' },
    ],
    links: [
      { label: 'Quest for Peace Through Pizza (The Dot Magazine)', url: 'https://thedotmagazine.com/pizza-4ps-co-founder-sanaes-story-so-far-of-their-quest-for-peace-through-pizza/', type: 'article' },
      { label: 'Finding True North — podcast (Vietcetera)', url: 'https://vietcetera.com/en/who-am-i-finding-your-true-north-with-yosuke-masuko-and-sanae-takasugi', type: 'article' },
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
    descriptor: '"Pharaoh of Fine Dining in the Far East" — the chef who pioneered fine dining in Vietnam, Top Chef Middle East judge',
    photo: '/experts/bobby-chinn.webp',
    category: 'inspiration',
    tags: ['Fine Dining', 'Vietnamese Cuisine', 'International Chef'],
    shortBio: 'Egyptian-Chinese chef born in New Zealand who came to Vietnam in 1995 and pioneered fine dining in Hanoi. His restaurant won Five-Diamonds Award, endorsed by Anthony Bourdain. Judge on Top Chef Middle East.',
    fullBio: 'Bobby Chinn was born in New Zealand to a Chinese-American father and Egyptian mother. After careers on the New York stock exchange and in stand-up comedy, he returned to his passion for cooking, training at Elka Restaurant and Fleur de Lys in San Francisco under Hubert Keller.\n\nIn 1995, he arrived in HCMC and opened his first restaurant Saigon Joe\'s. Moving to Hanoi, he opened Miro (1996), Red Onion (1997), and his flagship Restaurant Bobby Chinn (2001) — the fine dining establishment that paved the way for haute cuisine in Vietnam, winning "Best Restaurant," "Best Bar," and the Five-Diamonds Award. Guests included Bill Clinton and Bob Dylan. Anthony Bourdain wrote: "What Bobby doesn\'t know about Southeast Asian food is not worth knowing."\n\nHe opened House of Ho in London\'s Soho, bringing modern Vietnamese cuisine to the world stage. He\'s a permanent judge on MBC\'s Top Chef Middle East, host of "World Cafe" and "Bobby Chinn Cooks Asia," and author of "Wild Wild East: Recipes & Stories from Vietnam."',
    highlights: [
      'Pioneered fine dining in Vietnam: Restaurant Bobby Chinn (Hanoi, 2001) — Five-Diamonds Award',
      'Author of "Wild Wild East" (2007) — foreword by Anthony Bourdain',
      'Permanent judge on MBC\'s Top Chef Middle East; host of World Cafe, Bobby Chinn Cooks Asia',
      'Tourism Ambassador for Vietnam to EU (2014); WWF Sustainable Seafood Ambassador (2012)',
    ],
    quotes: [
      { text: 'I accidentally became a chef, but I was born as a traveler.', source: 'Bobby Chinn Official', sourceUrl: 'https://www.bobbychinn.com/about/' },
      { text: 'My restaurant is not about money, I did not do it for the money. I was too stubborn and passionate to play that game.', source: 'The Ethicalist', sourceUrl: 'https://theethicalist.com/bobby-chinn-real-food-not-molecular-nonsense/' },
      { text: 'Vietnamese food is an awakening. Fresh, light, healthy, contemporary with a lot of contrast.', source: 'Asian Supper', sourceUrl: 'https://asiansupper.com/theslurp/chef-interview-vietnam-15-years-later-bobby-chinn/' },
    ],
    advice: [
      { title: 'Passion must be real', desc: '"Speak it, live it, do it." Don\'t enter F&B unless you truly love food and people.' },
      { title: 'Learn from the very best', desc: 'Bobby started from Hubert Keller\'s pantry. "When you learn from truly great people, you won\'t develop bad habits."' },
      { title: 'Master tradition before fusion', desc: 'Many fusion dishes fail because the chef hasn\'t mastered the original. Be fluent in tradition before innovating.' },
    ],
    links: [
      { label: 'About Bobby Chinn (Official)', url: 'https://www.bobbychinn.com/about/', type: 'article' },
      { label: 'Vietnam 15 Years Later (Asian Supper)', url: 'https://asiansupper.com/theslurp/chef-interview-vietnam-15-years-later-bobby-chinn/', type: 'article' },
      { label: 'Real Food Not Molecular Nonsense (The Ethicalist)', url: 'https://theethicalist.com/bobby-chinn-real-food-not-molecular-nonsense/', type: 'article' },
    ],
    socials: [
      { platform: 'linkedin', url: 'https://www.linkedin.com/in/bobbychinn/' },
      { platform: 'website', url: 'https://www.bobbychinn.com' },
    ],
  },

  {
    id: 'luke-nguyen',
    slug: 'luke-nguyen',
    name: 'Luke Nguyen',
    descriptor: 'Vietnamese-Australian chef who brought Vietnamese cuisine to the world through 9 TV series and 5 cookbooks',
    photo: '/experts/luke-nguyen.webp',
    category: 'inspiration',
    tags: ['Vietnamese Cuisine', 'International Chef', 'TV Personality'],
    shortBio: 'Vietnamese-Australian chef, restaurateur, and TV host. Born in a Thai refugee camp, raised in Sydney\'s Cabramatta. Opened Red Lantern at 23, produced 9 TV series broadcast in 150 countries, elevating Vietnamese cuisine on the world stage.',
    fullBio: 'Luke Nguyen was born in a refugee camp in Thailand in 1978 after his family fled Vietnam in 1977. They arrived in Australia in 1979 and settled in Cabramatta, Sydney\'s Vietnamese quarter. He learned to cook from his parents at the family restaurant Phở Cây Du for 15 years.\n\nAt 23, he and sister Pauline opened Red Lantern in Surry Hills, Sydney — quickly recognized as Australia\'s most awarded Asian & Vietnamese restaurant. He became the youngest inductee into the Sydney Morning Herald\'s Food Hall of Fame and won Chef of the Year in Vietnam.\n\nHe has produced 9 TV series (Luke Nguyen\'s Vietnam, France, UK, Street Food Asia...) broadcast in 150 countries, and authored 5 internationally bestselling cookbooks. He now owns multiple restaurants including Vietnam House on Đồng Khởi, and co-founded GRAIN cooking studio in HCMC. In 2009, he and Suzanna Boyd established the Little Lantern Foundation in Hội An, providing hospitality training for disadvantaged youth.',
    highlights: [
      'Opened Red Lantern at 23 — Australia\'s most awarded Vietnamese/Asian restaurant',
      '9 TV series broadcast in 150 countries, 5 internationally bestselling cookbooks',
      'Youngest inductee into the Sydney Morning Herald\'s Food Hall of Fame',
      'Founded Little Lantern Foundation (Hội An) providing hospitality training for disadvantaged youth',
    ],
    quotes: [
      { text: 'As a chef and as a restaurateur, you have to tell the story of the dish; it\'s about the history, the culture, the country and the people.', source: 'Australian Embassy Vietnam', sourceUrl: 'https://vietnam.embassy.gov.au/hnoi/50Stories_LukeNguyen_EN.html' },
      { text: 'My personal mission is to raise Vietnamese cuisine to a level that customers can enjoy the full dining experience, not just something cheap and cheerful.', source: 'Vietcetera', sourceUrl: 'https://vietcetera.com/en/luke-nguyen-whats-on-the-roadmap-for-vietnamese-cuisine' },
      { text: 'Vietnamese cuisine can be paired up with great wine too, not just your typical bia hơi.', source: 'Vietcetera', sourceUrl: 'https://vietcetera.com/en/luke-nguyen-whats-on-the-roadmap-for-vietnamese-cuisine' },
    ],
    advice: [
      { title: 'Tell stories through food', desc: 'Every dish has history, culture, and people behind it. Chefs and restaurant owners must be storytellers, not just cooks.' },
      { title: 'Elevate, don\'t discount', desc: 'Vietnamese cuisine deserves the full dining experience with wine pairing, not just "cheap and cheerful."' },
      { title: 'Keep authenticity, modernize presentation', desc: 'Traditional Vietnamese recipes but in formats that suit international markets — appetizers, mains, desserts, wine matching.' },
    ],
    links: [
      { label: '50 Stories — Australian Embassy Vietnam', url: 'https://vietnam.embassy.gov.au/hnoi/50Stories_LukeNguyen_EN.html', type: 'article' },
      { label: 'Roadmap for Vietnamese Cuisine (Vietcetera)', url: 'https://vietcetera.com/en/luke-nguyen-whats-on-the-roadmap-for-vietnamese-cuisine', type: 'article' },
      { label: 'Vietnamese Refugee to Celebrity Chef (Vice)', url: 'https://www.vice.com/en/article/how-a-vietnamese-refugee-became-a-celebrity-chef/', type: 'article' },
    ],
    socials: [
      { platform: 'website', url: 'http://vietnamhousesaigon.com/' },
    ],
  },

  {
    id: 'john-pemberton',
    slug: 'john-pemberton',
    name: 'John Pemberton',
    descriptor: 'From IKEA director to Vietnam\'s craft beer pioneer — building Asia\'s premium craft beer brand',
    photo: '/experts/john-pemberton.webp',
    category: 'inspiration',
    tags: ['Craft Beer', 'Startup', 'F&B Saigon'],
    shortBio: 'Founder and CEO of Heart of Darkness Craft Brewery (2016) in Saigon. Born in Australia, raised in England, formerly IKEA\'s Deputy Trading Area Manager in Vietnam. Self-taught brewer who built an award-winning Asian craft beer brand.',
    fullBio: 'John Pemberton was born in Australia, raised in England, speaks Mandarin, and has lived across Asia (Hong Kong, China, Vietnam). In the 1990s in New York, while working as a Sourcing Operations Manager, he developed a love for craft beer through America\'s emerging craft beer movement.\n\nIn 2013, IKEA brought him to Vietnam as Deputy Trading Area Manager, managing sourcing across Southeast Asia. Disappointed by the lack of quality craft beer in Asia, he began homebrewing. When friends loved his beer and encouraged him, Heart of Darkness Brewery was born in 2016 in District 1, HCMC.\n\nSince then, Heart of Darkness has released hundreds of beers, winning multiple international awards: Country Champion at Asia Beer Championships (2023), awards at Tokyo International Beer Cup, AIBA Melbourne, and Hong Kong IWCSC. The brand has expanded to Singapore and Thailand. Their bestseller Kurtz\'s Insane IPA (102 IBU, 7.1% ABV) is particularly popular with Vietnamese drinkers.',
    highlights: [
      'Founded Heart of Darkness Brewery (2016) — Vietnam\'s leading craft beer brand',
      'Country Champion Brewery at Asia Beer Championship 2023; multiple international awards',
      'Expanded to Singapore and Thailand; hundreds of beer varieties released',
      'From self-taught homebrewer (while at IKEA) to building a regional brand',
    ],
    quotes: [
      { text: 'Craft beer in Vietnam is still in its embryonic stages and there\'s lots of work to be done.', source: 'Vietcetera', sourceUrl: 'https://vietcetera.com/en/heart-of-darkness-craft-brewery-building-an-asian-craft-beer-empire' },
      { text: 'The Vietnamese are accustomed to intense, bold flavors in their cuisine. This enables them to naturally appreciate the profiles of complex beers.', source: 'Vietcetera', sourceUrl: 'https://vietcetera.com/en/heart-of-darkness-craft-brewery-building-an-asian-craft-beer-empire' },
      { text: 'We treat our brewery more like a playground. Our goal is to really push the envelope.', source: 'Vietcetera', sourceUrl: 'https://vietcetera.com/en/heart-of-darkness-craft-brewery-building-an-asian-craft-beer-empire' },
    ],
    advice: [
      { title: 'Build with regional vision from day one', desc: '"The idea of expanding across Asia wasn\'t even a conversation. It was baked into the plan from the start." Don\'t wait until you\'re big to think about scale.' },
      { title: 'Understand local consumers', desc: 'Vietnamese palates love intense, bold flavors. They naturally appreciate complex beer profiles. Don\'t assume they only want light beer.' },
      { title: 'Treat your brewery like a playground', desc: 'Continuous experimentation and innovation. Every new beer is an experiment. "Vietnamese are naturally curious, and that curiosity is genuine."' },
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

  {
    id: 'phan-anh-minh',
    slug: 'phan-anh-minh',
    name: 'Phan Anh Minh',
    descriptor: 'Vietnam\'s #1 location strategy expert — author of the first book on F&B site selection, advisor to hundreds of chains',
    photo: '/experts/phan-anh-minh.webp',
    category: 'consultant',
    tags: ['Location Strategy', 'F&B Consulting', 'Retail Chain'],
    shortBio: 'CEO & Founder of SitePlus — Vietnam\'s first location development consulting company. With 10+ years of experience deploying sites for Vietnam\'s 3 largest convenience store chains, he authored the first-ever book on business location strategy, ranked Top 10 business books of 2024.',
    fullBio: 'Phan Anh Minh (Minh Phan) is the founder and CEO of SitePlus — Vietnam\'s first strategic location development and management consulting company. With over 10 years of hands-on experience, he has directly deployed locations for Vietnam\'s 3 largest convenience store chains and consulted on expansion strategy for numerous retail and F&B brands: Ministop, 30Shine, Rau Má Mix, Pi Thai, Thai Market, Levents, Mia, Fight100.\n\nHe authored "Đến Sahara mở quán trà đá" ("Going to the Sahara to Open a Tea Stall") — the first and only book in Vietnam about business location development, ranked Top 10 business books of 2024. The book introduces the "6T Rule" for identifying promising locations, 21 common mistakes to avoid, and a 4-step site selection process.\n\nHe also wrote "Retail Store Design and Layout" and regularly shares expert knowledge through Substack, TikTok, and Facebook.',
    highlights: [
      'Founded SitePlus — Vietnam\'s first business location consulting company',
      'Author of "Going to the Sahara to Open a Tea Stall" — Top 10 business books 2024',
      '10+ years experience, deployed locations for Vietnam\'s 3 largest convenience store chains',
      'Consulted for Ministop, 30Shine, Rau Má Mix, Pi Thai, Levents, Fight100',
    ],
    quotes: [
      { text: 'The location must match your business model and your company\'s needs.', source: 'MinhPhan Substack', sourceUrl: 'https://minhphansiteplus.substack.com/p/mat-bang-va-mo-hinh-kinh-doanh' },
      { text: 'Choosing a location is a big decision — not just because the deposit can be hundreds of millions of VND, but because this decision will stay with you for years.', source: 'Báo Đồng Nai', sourceUrl: 'https://baodongnai.com.vn/dong-nai-cuoi-tuan/202410/den-sahara-mo-quan-tra-da-fce5da2/' },
    ],
    advice: [
      { title: 'Apply the "6T Rule" before choosing a location', desc: 'Location, Traffic, Target Income, Total Area, Transparency (visibility from the road), and Convenience (accessibility). These 6 factors determine whether a site is right for you.' },
      { title: 'Avoid the 21 common mistakes', desc: 'Like choosing a location because "it looks busy" without analyzing target customer flow, failing to negotiate the lease properly, or ignoring hidden costs (renovation, fire safety, signage).' },
      { title: 'Follow the 4-step site selection process', desc: 'Zoning → Information gathering → On-site survey → Negotiation. Do it sequentially, don\'t skip steps, and always build good relationships with brokers and landlords.' },
    ],
    links: [
      { label: 'MinhPhan.vn — Personal website & book info', url: 'https://minhphan.vn/', type: 'article' },
      { label: 'Book review (Báo Đồng Nai)', url: 'https://baodongnai.com.vn/dong-nai-cuoi-tuan/202410/den-sahara-mo-quan-tra-da-fce5da2/', type: 'article' },
      { label: 'Location & Business Model (Substack)', url: 'https://minhphansiteplus.substack.com/p/mat-bang-va-mo-hinh-kinh-doanh', type: 'article' },
    ],
    socials: [
      { platform: 'website', url: 'https://minhphan.vn/' },
    ],
  },
];

export default EXPERTS;
