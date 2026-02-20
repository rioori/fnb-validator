'use client';

import { useState } from 'react';
import Icon from '@/components/ui/Icon';

type TrendCategory = 'market' | 'consumer' | 'tech' | 'model' | 'food' | 'regulation';

interface TrendItem {
  title: string;
  category: TrendCategory;
  icon: string;
  summary: string;
  details: string[];
  insight: string;
  sources: { name: string; url: string }[];
  bg: string;
  stats?: { label: string; value: string }[];
}

const CATEGORY_CONFIG: Record<TrendCategory, { label: string; pillClass: string }> = {
  market: { label: 'Thị trường', pillClass: 'bg-pastel-blue text-text' },
  consumer: { label: 'Người tiêu dùng', pillClass: 'bg-pastel-gold text-text' },
  tech: { label: 'Công nghệ', pillClass: 'bg-pastel-mint text-text' },
  model: { label: 'Mô hình', pillClass: 'bg-pastel-blush text-text' },
  food: { label: 'Ẩm thực', pillClass: 'bg-pastel-cream text-text' },
  regulation: { label: 'Chính sách', pillClass: 'bg-[#FEE2E2] text-text' },
};

const TRENDS: TrendItem[] = [
  {
    title: '50.000+ quán đóng cửa H1/2025 — cuộc thanh lọc khốc liệt nhất lịch sử',
    category: 'market',
    icon: 'chart',
    summary: 'H1/2025 ghi nhận hơn 50.000 cửa hàng F&B đóng cửa (giảm 7,1% YoY), chỉ còn ~299.900 cửa hàng. Nhưng thị trường vẫn đạt $27,3 tỷ và dự báo tăng lên $54,5 tỷ vào 2034. Đây không phải khủng hoảng — đây là "thanh lọc" để ngành trưởng thành.',
    details: [
      'H1/2025: 50.000+ cửa hàng F&B đóng cửa, giảm 7,1% so với cùng kỳ — mức kỷ lục.',
      '35,4% quán đóng do chi phí nguyên liệu tăng, 21% do thay đổi chính sách (hóa đơn điện tử, thuế hộ kinh doanh).',
      '20% do chi phí nhân sự tăng (lương tối thiểu +6,92% năm 2025), 13,7% do tiền thuê tăng.',
      'Quy mô thị trường 2024: ~$27,3 tỷ (IMARC), dự báo 2034: $54,5 tỷ (CAGR 9,5%).',
      'Chuỗi F&B (chain) tăng trưởng CAGR 11,3% — chuẩn hóa vận hành là chìa khóa sống sót.',
      'Highlands 855 CH (+11%), Phúc Long 237 CH (+50%), Katinat ~100 CH — ai có hệ thống thì thắng.',
    ],
    insight: 'Nghịch lý: thị trường co lại nhưng doanh thu tăng. Tiền chảy từ quán yếu sang quán mạnh. Nếu bạn mở quán ĐÚNG CÁCH, cơ hội lớn hơn bao giờ hết vì đối thủ yếu đang tự rời sân.',
    sources: [
      { name: 'SGGP English', url: 'https://en.sggp.org.vn/' },
      { name: 'IMARC Group', url: 'https://www.imarcgroup.com/' },
      { name: 'Báo Chính Phủ', url: 'https://baochinhphu.vn/nganh-fb-tai-viet-nam-se-tiep-tuc-tang-truong-96-trong-nam-2025-102250319131429058.htm' },
      { name: 'iPOS.vn', url: 'https://ipos.vn/bao-cao-nganh-fnb-2024/' },
    ],
    bg: 'bg-pastel-blue',
    stats: [
      { label: 'Đóng cửa H1/25', value: '50.000+' },
      { label: 'Còn lại', value: '~300K' },
      { label: 'Quy mô 2024', value: '$27,3 tỷ' },
      { label: 'Dự báo 2034', value: '$54,5 tỷ' },
    ],
  },
  {
    title: 'Chi ít hơn, uống nhiều hơn — người Việt thay đổi cách tiêu dùng F&B',
    category: 'consumer',
    icon: 'users',
    summary: '77,5% khách hàng chọn đồ uống 21.000-50.000đ. Tần suất uống ngoài tăng mạnh (32,8% uống 3-4 lần/tuần, gần gấp đôi năm trước), nhưng mỗi lần chi tiêu ít hơn. "Nhiều lần, nhỏ tiền" là xu hướng mới.',
    details: [
      '52,3% người Việt chi dưới 35.000đ/đồ uống — tăng mạnh so với 2023.',
      'Phân khúc trên 35.000đ giảm từ 47,7% xuống 31,5%.',
      'Tần suất 3-4 lần/tuần tăng từ 17,4% lên 32,8% — uống nhiều nhưng chi ít.',
      '86% người tiêu dùng ưu tiên sản phẩm organic/tự nhiên cho bữa ăn hàng ngày (theo Nielsen).',
      'Từ 32% (2015) lên 42% (2022-nay) người quan tâm healthy food — xu hướng tiếp tục tăng.',
    ],
    insight: 'Đừng "cạnh tranh giá rẻ" — hãy "cạnh tranh giá trị". Khách sẵn sàng chi tiêu thường xuyên nếu cảm thấy xứng đáng. Định giá 25K-45K là "sweet spot" cho đồ uống.',
    sources: [
      { name: 'iPOS.vn', url: 'https://ipos.vn/bao-cao-nganh-fnb-2024/' },
      { name: 'Sức khỏe Việt', url: 'https://suckhoeviet.org.vn/xu-huong-an-uong-tot-cho-suc-khoe-trong-nam-2025-17044.html' },
      { name: 'CafeF', url: 'https://cafef.vn/cuoc-dua-song-con-cua-cac-thuong-hieu-fb-trong-nam-thanh-loc-2025-dep-doc-khuay-dao-thi-truong-nghin-ty-loat-dai-gia-tat-tay-dua-voi-cac-ong-lon-ngan-hang-188251230103845865.chn' },
    ],
    bg: 'bg-pastel-gold',
    stats: [
      { label: 'Sweet spot', value: '21-50K' },
      { label: 'Uống 3-4 lần/tuần', value: '32,8%' },
      { label: 'Chọn organic', value: '86%' },
    ],
  },
  {
    title: 'Matcha, trà hương hoa, healthy drinks — đồ uống "sạch" lên ngôi',
    category: 'food',
    icon: 'bubbletea',
    summary: 'Matcha dẫn đầu xu hướng với 29,6% doanh nghiệp lựa chọn. Tiếp theo là trà hương hoa (hoa nhài, hoa cúc, osmanthus). Xu hướng "clean label" — ít đường, không chất bảo quản, trái cây tươi — đang thay thế đồ uống ngọt truyền thống.',
    details: [
      'Matcha: 29,6% doanh nghiệp F&B đưa vào menu — từ trà, latte đến bánh, kem.',
      'Trà hương hoa được kỳ vọng là "làn sóng kế tiếp" sau matcha.',
      '"Clean label": ít đường, không bảo quản, nguyên liệu tự nhiên — xu hướng lớn nhất 2025.',
      'Lẩu bò tươi Triều Châu và lẩu hấp thủy nhiệt (giữ dưỡng chất, không dầu mỡ) đang hot.',
      'Cà phê pha sẵn: flavor đa dạng (caramel, vanilla, mocha) tăng trưởng mạnh — thị trường đồ uống đạt $15,5 tỷ.',
      'Mô hình kết hợp cà phê + trà bán cả ngày: sáng bán cà phê, chiều-tối bán trà — tăng doanh thu 15-20%.',
    ],
    insight: 'Menu "healthy + Instagram-worthy" là chiến thắng kép: vừa đáp ứng xu hướng sức khỏe, vừa tạo nội dung viral miễn phí. Matcha, trà hoa, smoothie bowl là những lựa chọn an toàn.',
    sources: [
      { name: 'Báo Đầu Tư', url: 'https://baodautu.vn/thi-truong-fb-2025-he-lo-nhung-trao-luu-am-thuc-moi-d255647.html' },
      { name: 'CukCuk', url: 'https://www.cukcuk.vn/26861/xu-huong-fnb-2025/' },
      { name: 'Kinh tế Đồ uống', url: 'https://kinhtedouong.vn/xu-huong-thi-truong-fb-nam-2025-104068.html' },
    ],
    bg: 'bg-pastel-mint',
    stats: [
      { label: 'Chọn matcha', value: '29,6%' },
      { label: 'TT đồ uống', value: '$15,5 tỷ' },
      { label: 'Tăng DT combo', value: '+15-20%' },
    ],
  },
  {
    title: 'Cloud Kitchen, kiosk, grab-and-go — mô hình "nhẹ vốn" bùng nổ',
    category: 'model',
    icon: 'cloudkitchen',
    summary: 'Cloud kitchen (bếp trên mây), kiosk mang đi, co-working cafe 24h — các mô hình giảm chi phí mặt bằng đang bùng nổ. The Coffee House ra mắt "TCH Now" chuyên mang đi, kênh online chiếm 50% giao dịch.',
    details: [
      'Cloud kitchen: không cần mặt bằng đẹp, chỉ cần bếp + app giao hàng. FlyFood là case thành công tại TPHCM.',
      'Kiosk mang đi: Phúc Long, Starbucks, TCH Now đều triển khai mô hình "counter-only" diện tích nhỏ.',
      'Co-working cafe 24h: kết hợp không gian làm việc + đồ uống — phục vụ freelancer, startup.',
      '50% giao dịch tại The Coffee House qua kênh online — xu hướng rõ ràng.',
      'Ưu thế: tiền thuê giảm 50-70%, break-even nhanh hơn, linh hoạt thay đổi location.',
      '70% khách trẻ ưa chuộng quán tiện lợi, phục vụ nhanh — phù hợp mô hình grab-and-go.',
    ],
    insight: 'Nếu chưa có nhiều vốn, cloud kitchen hoặc kiosk là lối vào ngành F&B rủi ro thấp nhất. Test concept trước, mở rộng sau.',
    sources: [
      { name: 'CukCuk', url: 'https://www.cukcuk.vn/20852/cloud-kitchen/' },
      { name: 'Sapo', url: 'https://www.sapo.vn/blog/mo-hinh-quan-cafe-doc-dao' },
      { name: 'Diễn đàn Doanh nghiệp', url: 'https://diendandoanhnghiep.vn/du-cam-thi-truong-f-amp-b-2026-10168418.html' },
    ],
    bg: 'bg-pastel-blush',
    stats: [
      { label: 'Giảm thuê', value: '50-70%' },
      { label: 'Online', value: '50% GD' },
      { label: 'Khách trẻ ưa nhanh', value: '70%' },
    ],
  },
  {
    title: 'AI, QR code, chatbot — công nghệ không còn xa xỉ',
    category: 'tech',
    icon: 'laptop',
    summary: 'Thanh toán không tiền mặt tăng gấp 26 lần tốc độ GDP. QR code trở thành chuẩn mực. Chatbot AI xử lý đặt bàn, gợi ý menu. Highlands, Hoàng Ty Group đi đầu ứng dụng công nghệ.',
    details: [
      'Thanh toán cashless tại F&B tăng 26 lần nhanh hơn GDP — QR code là chuẩn mực mới.',
      'AI chatbot/voicebot: đặt bàn, gọi món, gợi ý menu — Highlands Coffee, Hoàng Ty đã triển khai.',
      'Kichi-Kichi, King BBQ: hệ thống băng chuyền tự động giảm nhân sự, tăng tốc phục vụ.',
      'Big Data: phân tích hành vi khách hàng, cá nhân hóa khuyến mãi, dự đoán nhu cầu nguyên liệu.',
      'POS thông minh: quản lý tồn kho, tự động đặt hàng NCC khi sắp hết, giảm hao hụt.',
      'Thị trường AI trong F&B toàn cầu dự kiến đạt $49 tỷ vào 2029, CAGR 38,3%.',
    ],
    insight: 'Không cần đầu tư hàng tỷ. Bắt đầu từ: QR thanh toán (miễn phí), POS có báo cáo (~500K/tháng), fanpage chatbot (AI miễn phí). Tự động hóa từng bước.',
    sources: [
      { name: 'HorecFex Vietnam', url: 'https://horecfex.com/dot-pha-nganh-fb-voi-cac-cong-nghe-ai-hien-dai/' },
      { name: 'Nodex Asia', url: 'https://nodex.asia/ung-dung-ai-trong-nganh-fb-van-hanh-xuat-sac/' },
      { name: 'Vietnam Briefing', url: 'https://www.vietnam-briefing.com/news/foreign-food-chains-thrive-in-vietnams-growing-fb-market.html/' },
    ],
    bg: 'bg-pastel-mint',
    stats: [
      { label: 'Cashless vs GDP', value: 'x26' },
      { label: 'AI F&B 2029', value: '$49 tỷ' },
      { label: 'CAGR AI', value: '38,3%' },
    ],
  },
  {
    title: 'Bản sắc Việt là "gia vị" mới — từ giá rẻ sang "được yêu thích"',
    category: 'consumer',
    icon: 'heart',
    summary: 'Thị trường dịch chuyển từ "ai rẻ hơn" sang "ai được yêu thích hơn", từ "ai mở nhanh hơn" sang "ai đi sâu hơn". Bản sắc, câu chuyện thương hiệu, trải nghiệm khách hàng trở thành lợi thế cạnh tranh.',
    details: [
      'Các thương hiệu thuần Việt (Katinat, Phúc Long) tăng trưởng mạnh nhờ "bản sắc địa phương".',
      'Katinat: chiến lược "chiếm góc phố đẹp", thiết kế instagrammable, menu Việt-fusion.',
      'Jollibee Vietnam: tăng 35% doanh thu Q2/2025, thành thị trường #1 toàn cầu — nhờ bản địa hóa.',
      'Người dùng sẵn sàng trả thêm 10-20% cho thương hiệu có "câu chuyện" và trải nghiệm tốt.',
      'Xu hướng "from farm to table": nguyên liệu địa phương, minh bạch nguồn gốc, câu chuyện nông sản Việt.',
    ],
    insight: 'Quán nhỏ cũng có thể thắng "ông lớn" nếu có bản sắc rõ ràng. Kể câu chuyện của bạn: tại sao mở quán? Nguyên liệu từ đâu? Đặc biệt ở điểm nào?',
    sources: [
      { name: 'Kinh tế Tiêu dùng', url: 'https://kinhtetieudung.vn/thi-truong-fb-viet-nam-2025-khi-ban-sac-tro-thanh-gia-vi-lam-nen-suc-bat-thuong-hieu-a25802.html' },
      { name: 'Thời báo Tài chính VN', url: 'https://thoibaotaichinhvietnam.vn/nganh-fb-vuot-nguong-cua-hep-doanh-nghiep-thich-ung-de-mo-loi-di-len-184747.html' },
      { name: 'B-Company', url: 'https://b-company.jp/vietnams-fb-industry-consumer-shifts-city-insights-and-investment-outlook/' },
    ],
    bg: 'bg-pastel-cream',
    stats: [
      { label: 'Jollibee VN Q2', value: '+35%' },
      { label: 'Sẵn sàng trả thêm', value: '10-20%' },
    ],
  },
  {
    title: 'Thuế đồ uống có đường từ 2026 — chuẩn bị ngay hay "chết bất ngờ"?',
    category: 'regulation',
    icon: 'warning',
    summary: 'Luật Thuế tiêu thụ đặc biệt có hiệu lực từ 01/01/2026 sẽ đánh thuế đồ uống chứa trên 5g đường/100ml. Đây là "bom tấn" với ngành trà sữa, nước ép, smoothie — hầu hết đồ uống F&B đều vượt ngưỡng này.',
    details: [
      'Áp dụng từ 01/01/2026: đánh thuế tiêu thụ đặc biệt lên đồ uống có đường > 5g/100ml.',
      'Hầu hết trà sữa, nước ép trái cây, smoothie, soda — đều vượt ngưỡng 5g/100ml.',
      'Tác động: tăng giá thành 5-15%, ảnh hưởng trực tiếp đến biên lợi nhuận.',
      'Cơ hội: ai chuyển đổi sớm sang "ít đường/không đường" sẽ có lợi thế cạnh tranh.',
      'Đồ uống không đường, đường ăn kiêng, trà/cà phê nguyên chất không bị ảnh hưởng.',
    ],
    insight: 'Bắt đầu R&D ngay: thử nghiệm công thức ít đường, dùng đường tự nhiên (stevia, monk fruit). Ai đi trước sẽ có lợi thế khi thuế bắt đầu áp dụng.',
    sources: [
      { name: 'Vietnam Briefing', url: 'https://www.vietnam-briefing.com/news/foreign-food-chains-thrive-in-vietnams-growing-fb-market.html/' },
      { name: 'Diễn đàn DN', url: 'https://diendandoanhnghiep.vn/du-cam-thi-truong-f-amp-b-2026-10168418.html' },
    ],
    bg: 'bg-[#FEE2E2]',
    stats: [
      { label: 'Hiệu lực', value: '01/2026' },
      { label: 'Ngưỡng đường', value: '5g/100ml' },
      { label: 'Tăng giá thành', value: '5-15%' },
    ],
  },
  {
    title: 'TikTok Shop bùng nổ — bán đồ ăn qua livestream đạt ROAS 24x',
    category: 'tech',
    icon: 'megaphone',
    summary: 'TikTok Shop Vietnam tăng 148% GMV trong H1/2025, chiếm 42% thị phần e-commerce. Các thương hiệu F&B nhỏ như Ba Thuc Food đạt ROAS 23,7x qua TikTok LIVE. Social commerce đang thay đổi cách bán đồ ăn.',
    details: [
      'TikTok Shop Vietnam GMV tăng 148% YoY trong H1/2025, vượt Shopee chiếm 42% thị phần.',
      'Ba Thuc Food (thịt bò khô): đạt ROAS 23,7x qua TikTok LIVE, 2.100+ đơn hàng từ ngân sách quảng cáo nhỏ.',
      'CM Foods: chiến dịch 12.12 đạt +30% GMV video, +187% GMV livestream, tiếp cận 4 triệu+ users.',
      '62,8% người tiêu dùng số Việt Nam mua sắm e-commerce ít nhất 1 lần/tuần.',
      '~50% người mua online ưu tiên mua trên smartphone.',
      'Micro-influencer (1K-100K followers) tạo engagement gấp 3-5 lần so với celebrity endorsement.',
    ],
    insight: 'Bạn không cần ngân sách marketing lớn. Quay video tự nhiên về quá trình làm món ăn, "behind the scenes" bếp, đăng đều đặn lên TikTok. Xây audience TRƯỚC, bán AFTER. Livestream bán F&B đang là "blue ocean".',
    sources: [
      { name: 'Vietnam Briefing', url: 'https://www.vietnam-briefing.com/news/foreign-food-chains-thrive-in-vietnams-growing-fb-market.html/' },
      { name: 'TikTok Ads', url: 'https://ads.tiktok.com/' },
      { name: 'AJ Marketing', url: 'https://ajmarketing.io/' },
    ],
    bg: 'bg-pastel-blush',
    stats: [
      { label: 'TikTok Shop GMV', value: '+148%' },
      { label: 'Thị phần TMDT', value: '42%' },
      { label: 'ROAS F&B', value: '24x' },
    ],
  },
  {
    title: 'Franchise vs. Độc lập — tỷ lệ thất bại gần như bằng nhau',
    category: 'model',
    icon: 'handshake',
    summary: 'Nghiên cứu Cornell cho thấy tỷ lệ thất bại sau 3 năm: franchise 57% vs. độc lập 61% — gần như không khác biệt. Mô hình franchise phí 4-6% royalty + 2-4% marketing, tổng đầu tư từ 56 triệu (E-Coffee) đến 17 tỷ đồng (premium).',
    details: [
      'Tỷ lệ thất bại sau 3 năm: franchise 57%, độc lập 61% — chênh lệch chỉ 4% (Cornell/BLS).',
      'Phí franchise tại Việt Nam: $20K-$50K, royalty 4-6% doanh thu, marketing fund 2-4%.',
      'Trung Nguyên E-Coffee: franchise từ 56-245 triệu đồng — mức thấp nhất ngành cà phê.',
      'ROI franchise trung bình: 15-25%/năm, biên lợi nhuận 10-15%, EBITDA 18-25%.',
      'Break-even: 12-18 tháng, hoàn vốn: 3-5 năm — tùy mô hình và vị trí.',
      'Golden Gate Group mua lại The Coffee House (2025) — xu hướng M&A tăng tốc trong chuỗi F&B.',
      'Bài học Soya Garden: gọi được $5M+ vốn, mở 50+ cửa hàng, rồi đóng gần hết — mở rộng không có unit economics = chết.',
    ],
    insight: 'Franchise KHÔNG an toàn hơn mở độc lập. Thành công phụ thuộc vào khả năng vận hành, không phải thương hiệu. Nếu chọn franchise, tính kỹ: royalty 6% + marketing 4% = 10% doanh thu mất ngay — biên lợi nhuận còn bao nhiêu?',
    sources: [
      { name: 'Cornell University', url: 'https://scholarship.sha.cornell.edu/' },
      { name: 'The Investor', url: 'https://theinvestor.vn/' },
      { name: 'World Coffee Portal', url: 'https://www.worldcoffeeportal.com/' },
    ],
    bg: 'bg-pastel-gold',
    stats: [
      { label: 'Thất bại 3 năm (franchise)', value: '57%' },
      { label: 'Thất bại 3 năm (độc lập)', value: '61%' },
      { label: 'ROI franchise', value: '15-25%' },
    ],
  },
  {
    title: 'Giao hàng F&B: ShopeeFood & GrabFood chia đôi thị trường $2,1 tỷ',
    category: 'market',
    icon: 'bolt',
    summary: 'Thị trường giao đồ ăn online đạt $2,1 tỷ (2025). ShopeeFood và GrabFood mỗi bên nắm 48% thị phần. Baemin đã rút khỏi Việt Nam cuối 2023 dù được yêu thích. Cloud kitchen đạt $390 triệu, dự báo $913 triệu vào 2033.',
    details: [
      'Thị trường giao đồ ăn online: $2,1 tỷ (2025), dự báo $3,22 tỷ vào 2033 (CAGR 13,6%).',
      'ShopeeFood: 48% thị phần. GrabFood: 48%. BeFood: 4%. Baemin: đã rút cuối 2023.',
      'Hoa hồng cho nhà hàng: 15-30% giá trị đơn hàng — ăn mòn biên lợi nhuận.',
      'Cloud kitchen Việt Nam: $390 triệu (2024), dự báo $913 triệu vào 2033 (CAGR 8,9%).',
      'Baemin thua dù marketing xuất sắc (slogan viral, thiết kế cute) — bài học: marketing không thắng được hệ sinh thái.',
      'Chiến lược: chạy 3-4 thương hiệu ảo từ 1 bếp (multi-brand cloud kitchen) để tối ưu chi phí.',
    ],
    insight: 'Đừng phụ thuộc 100% vào GrabFood/ShopeeFood — hoa hồng 25% sẽ giết biên lợi nhuận. Xây kênh đặt hàng riêng qua Zalo/Facebook song song. Mục tiêu: 30-40% đơn qua kênh riêng trong 6 tháng.',
    sources: [
      { name: 'GlobeNewsWire', url: 'https://www.globenewswire.com/' },
      { name: 'The Investor', url: 'https://theinvestor.vn/' },
      { name: 'Dedica Law', url: 'https://dedica-law.com/' },
    ],
    bg: 'bg-pastel-blue',
    stats: [
      { label: 'TT giao đồ ăn', value: '$2,1 tỷ' },
      { label: 'ShopeeFood', value: '48%' },
      { label: 'Cloud kitchen', value: '$390 tr' },
    ],
  },
  {
    title: 'Gen Z: 3-5 lần/tuần đến quán, nhưng "không đẹp = không đến"',
    category: 'consumer',
    icon: 'target',
    summary: 'Gen Z (~18-20 triệu người) chi VND 1,5-3 triệu/tháng cho F&B. Họ đến quán 3-5 lần/tuần, khám phá qua TikTok trước Google, và sẵn sàng chi 150K cho đồ uống viral — nhưng mặc cả 5K tiền cơm bình dân.',
    details: [
      'Gen Z Việt Nam: ~18-20 triệu người, tỷ lệ dùng smartphone 95%+, lớn lên với Grab & TikTok.',
      'Chi tiêu F&B trung bình: 1,5-3 triệu/tháng — chiếm phần lớn thu nhập (lương 7-15 triệu).',
      '70-80% Gen Z khám phá quán mới qua TikTok/Instagram TRƯỚC, Google sau.',
      'Không gian "Instagrammable" là điều kiện BẮT BUỘC — không chụp đẹp = không đến.',
      'Katinat vượt Phúc Long & Starbucks về social media popularity nhờ đúng "Gen Z aesthetic + giá sweet spot".',
      'Sẵn sàng trả premium cho trải nghiệm, nhưng rất nhạy giá cho bữa ăn thường ngày.',
      'Một video TikTok viral (100K+ views) có thể tạo hàng đợi 2 tuần — nhưng nếu không có chất lượng thật, quán sẽ chết sau 3-6 tháng.',
    ],
    insight: 'Thiết kế quán cho Gen Z: 1 góc "check-in" đẹp (đầu tư 5-10 triệu), menu có 2-3 món "photogenic", wifi mạnh + ổ cắm. Đừng chạy theo viral — hãy xây chất lượng để khách QUAY LẠI.',
    sources: [
      { name: 'B-Company', url: 'https://b-company.jp/vietnams-fb-industry-consumer-shifts-city-insights-and-investment-outlook/' },
      { name: 'Vietnam Briefing', url: 'https://www.vietnam-briefing.com/doing-business-guide/vietnam/sector-insights/vietnam-s-food-beverage-industry-market-trends-demographics-consumer-preferences' },
    ],
    bg: 'bg-pastel-blush',
    stats: [
      { label: 'Gen Z VN', value: '~20 triệu' },
      { label: 'Chi F&B/tháng', value: '1,5-3 tr' },
      { label: 'Đến quán/tuần', value: '3-5 lần' },
    ],
  },
  {
    title: 'Nhân sự F&B: lương tối thiểu +6,9%, turnover 30-50%/năm — tự động hóa là lối thoát',
    category: 'market',
    icon: 'team',
    summary: 'Lương tối thiểu vùng I tăng lên 4,96 triệu/tháng (+6,92%). Tỷ lệ nhân viên nghỉ việc 30-50%/năm — cao nhất mọi ngành. Nhiều người trẻ chọn chạy Grab thay vì làm phục vụ. QR ordering giảm được 1-2 nhân viên/ca.',
    details: [
      'Lương tối thiểu 2025 vùng I (TPHCM, HN): 4.960.000đ/tháng, tăng 6,92%.',
      'Turnover ngành F&B: 30-50%/năm — nghĩa là cứ 2 năm phải thay gần hết nhân sự.',
      'Barista mới: 4,5-6 triệu/tháng. Bếp trưởng Việt: 12-25 triệu. Quản lý: 12-20 triệu.',
      'Nhiều người trẻ thích chạy GrabBike/ShopeeFood hơn làm F&B vì "tự do hơn, thu nhập tương đương".',
      'QR code ordering: giảm 1-2 server/ca, tiết kiệm 8-12 triệu/tháng.',
      'POS thông minh (iPOS, KiotViet): ~500K/tháng, quản lý tồn kho + đặt hàng tự động.',
      'Robot phục vụ (Hai Di Lao): chiêu trò marketing, chưa thực sự hiệu quả vận hành.',
    ],
    insight: 'Đầu tư tự động hóa NGAY từ đầu: QR ordering (miễn phí), POS có báo cáo (~500K/tháng). Giảm phụ thuộc nhân sự = giảm rủi ro turnover. Nhưng đừng cắt quá nhiều — dịch vụ ấm áp vẫn là lợi thế.',
    sources: [
      { name: 'SGGP English', url: 'https://en.sggp.org.vn/' },
      { name: 'iPOS.vn', url: 'https://ipos.vn/' },
      { name: 'Vietnam Briefing', url: 'https://www.vietnam-briefing.com/news/foreign-food-chains-thrive-in-vietnams-growing-fb-market.html/' },
    ],
    bg: 'bg-pastel-cream',
    stats: [
      { label: 'Lương tối thiểu I', value: '4,96 tr' },
      { label: 'Turnover/năm', value: '30-50%' },
      { label: 'Tiết kiệm QR', value: '8-12 tr/th' },
    ],
  },
];

const MARKET_STATS = [
  { label: 'Quy mô 2024', value: '$27,3 tỷ', sub: '~689K tỷ VND' },
  { label: 'Tăng trưởng', value: '+9,6%', sub: '2025 YoY' },
  { label: 'Dự báo 2034', value: '$54,5 tỷ', sub: 'CAGR 9,5%' },
  { label: 'Cửa hàng H1/25', value: '~300K', sub: 'giảm 7,1%' },
  { label: 'Đóng cửa H1/25', value: '50.000+', sub: 'kỷ lục' },
  { label: 'Delivery online', value: '$2,1 tỷ', sub: 'CAGR 13,6%' },
];

type FilterType = 'all' | TrendCategory;

export default function TrendsPage() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  const [filter, setFilter] = useState<FilterType>('all');

  const filtered = filter === 'all' ? TRENDS : TRENDS.filter((t) => t.category === filter);

  const filterOptions: [FilterType, string][] = [
    ['all', 'Tất cả'],
    ['market', 'Thị trường'],
    ['consumer', 'Người dùng'],
    ['food', 'Ẩm thực'],
    ['model', 'Mô hình'],
    ['tech', 'Công nghệ'],
    ['regulation', 'Chính sách'],
  ];

  return (
    <div className="clay-card-static bg-pastel-cream p-6 mb-4">
      {/* Header */}
      <div className="text-center mb-5">
        <Icon name="trending" size={48} className="mx-auto mb-2" />
        <h2 className="text-lg font-bold text-text font-[family-name:var(--font-heading)]">
          Xu hướng F&B 2025-2026
        </h2>
        <p className="text-[13px] text-text-muted mt-1 max-w-[520px] mx-auto">
          Dữ liệu, xu hướng và insight từ thị trường F&B Việt Nam — giúp bạn đưa ra quyết định kinh doanh sáng suốt hơn.
        </p>
      </div>

      {/* Market stats banner */}
      <div className="clay-sm bg-white p-4 mb-5">
        <h3 className="text-[11px] font-bold font-[family-name:var(--font-heading)] uppercase tracking-wider text-text-muted mb-3 text-center">
          Bức tranh thị trường
        </h3>
        <div className="grid grid-cols-3 gap-2 max-md:grid-cols-2">
          {MARKET_STATS.map((stat) => (
            <div key={stat.label} className="text-center p-2 rounded-xl bg-surface3/50">
              <span className="text-[18px] font-bold font-[family-name:var(--font-heading)] text-text block">
                {stat.value}
              </span>
              <span className="text-[10px] text-text-muted block leading-tight">{stat.label}</span>
              <span className="text-[9px] text-text-light">{stat.sub}</span>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-text-light text-center mt-2 italic">
          Nguồn: iPOS.vn, Báo Chính phủ, Mordor Intelligence (2024-2025)
        </p>
      </div>

      {/* Filter pills */}
      <div className="flex flex-wrap gap-2 justify-center mb-5">
        {filterOptions.map(([key, label]) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`px-3.5 py-1.5 rounded-full text-[12px] font-semibold border-2 transition-all cursor-pointer ${
              filter === key
                ? 'border-cta bg-cta text-white shadow-[2px_2px_0_var(--color-text)]'
                : 'border-border bg-white text-text-muted hover:border-text'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Trend cards */}
      <div className="space-y-4">
        {filtered.map((trend, i) => {
          const realIdx = TRENDS.indexOf(trend);
          const isExpanded = expandedIdx === realIdx;
          const cfg = CATEGORY_CONFIG[trend.category];

          return (
            <div key={realIdx} className={`clay-sm ${trend.bg} overflow-hidden transition-all duration-300`}>
              {/* Header — always visible */}
              <div
                className="p-5 cursor-pointer"
                onClick={() => setExpandedIdx(isExpanded ? null : realIdx)}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon name={trend.icon} size={28} className="shrink-0" />
                  <span className={`clay-pill !text-[10px] !py-0.5 ${cfg.pillClass}`}>
                    {cfg.label}
                  </span>
                </div>
                <h3 className="text-[15px] font-bold font-[family-name:var(--font-heading)] text-text mb-2">
                  {trend.title}
                </h3>
                <p className="text-[13px] text-text leading-relaxed">
                  {trend.summary}
                </p>

                {/* Stats row */}
                {trend.stats && (
                  <div className="flex gap-2 mt-3 flex-wrap">
                    {trend.stats.map((stat) => (
                      <div key={stat.label} className="bg-white/70 rounded-xl px-3 py-1.5 border border-border-light">
                        <span className="text-[10px] text-text-muted block leading-tight">{stat.label}</span>
                        <span className="text-[14px] font-bold font-[family-name:var(--font-heading)] text-text">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                <button className="mt-3 text-[12px] text-cta font-semibold hover:underline">
                  {isExpanded ? 'Thu gọn ▲' : 'Đọc chi tiết ▼'}
                </button>
              </div>

              {/* Expanded content */}
              {isExpanded && (
                <div className="px-5 pb-5 animate-bounce-in">
                  {/* Details */}
                  <div className="mb-4">
                    <p className="text-[11px] font-bold font-[family-name:var(--font-heading)] uppercase tracking-wider text-text-muted mb-2">
                      Chi tiết
                    </p>
                    <div className="space-y-2">
                      {trend.details.map((d, j) => (
                        <div key={j} className="flex items-start gap-2 text-[12px] text-text leading-relaxed">
                          <span className="text-text-muted font-bold mt-0.5 shrink-0">{j + 1}.</span>
                          {d}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Insight */}
                  <div className="mb-4 bg-white/50 rounded-xl p-4 border-l-4 border-l-cta border border-border-light">
                    <p className="text-[11px] font-bold font-[family-name:var(--font-heading)] uppercase tracking-wider text-cta mb-1.5">
                      Insight cho người mở quán
                    </p>
                    <p className="text-[12.5px] text-text leading-relaxed font-medium">
                      {trend.insight}
                    </p>
                  </div>

                  {/* Sources */}
                  <div className="border-t border-border-light pt-3">
                    <p className="text-[10px] font-semibold text-text-muted uppercase tracking-wider mb-1.5">Nguồn trích dẫn</p>
                    <div className="flex flex-wrap gap-2">
                      {trend.sources.map((src) => (
                        <a
                          key={src.url}
                          href={src.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] text-cta hover:underline font-medium bg-white/60 px-2 py-1 rounded-lg border border-border-light"
                        >
                          {src.name} ↗
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <p className="text-center text-[12px] text-text-muted italic mt-5">
        Dữ liệu tổng hợp từ iPOS.vn, Báo Chính phủ, CafeF, IMARC, Cornell University, Vietnam Briefing, Mordor Intelligence và 84+ nguồn khác.
        <br />
        Cập nhật: Tháng 2/2026. Xu hướng thay đổi liên tục — hãy luôn kiểm chứng trước khi ra quyết định.
      </p>
    </div>
  );
}
