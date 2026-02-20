import { useState } from 'react';
import Image from 'next/image';
import Icon from '@/components/ui/Icon';
import { SocialIcon } from '@/components/ui/Icon';

export default function AboutAuthor() {
  const [showQR, setShowQR] = useState(false);

  return (
    <div className="clay-card-static bg-pastel-cream p-6 mb-4">
      {/* Page title */}
      <h2 className="text-lg font-bold text-text font-[family-name:var(--font-heading)] text-center mb-5">
        Tác phẩm & Tác giả
      </h2>

      {/* === Tác giả === */}
      <div className="clay-sm bg-white p-5 mb-4">
        <div className="text-center mb-4">
          <h3 className="text-[16px] font-bold text-text font-[family-name:var(--font-heading)]">
            Khang Phạm
          </h3>
          <p className="text-[12px] text-text-muted mt-1 italic max-w-[360px] mx-auto">
            &ldquo;F&B thành công không phải vì ý tưởng hay, mà vì người chủ yêu từng chi tiết nhỏ mỗi ngày.&rdquo;
          </p>
        </div>

        <div className="space-y-3 text-[13px] text-text leading-relaxed">
          <p>
            Hơn <strong>10 năm</strong> gắn bó với F&B, tôi thành thật thừa nhận: mình nếm trải thất bại nhiều hơn thành công.
            Nhưng chính những lần vấp ngã đó đã dạy tôi những bài học mà không trường lớp nào có thể dạy được.
          </p>

          <div className="clay-sm bg-pastel-gold p-4">
            <p className="font-bold font-[family-name:var(--font-heading)] text-[13px] mb-1.5 flex items-center gap-1.5">
              <Icon name="home" size={20} className="shrink-0" /> Sadec Quán — 2013 ~ 2021
            </p>
            <p className="text-[12px] leading-relaxed">
              Tôi đồng sáng lập <strong>Sadec Quán</strong> — quán hủ tiếu và bánh tằm mang hương vị dân dã Sa Đéc
              giữa lòng Sài Gòn. <strong>8 năm</strong> vận hành, được khách hàng yêu mến mỗi ngày,
              cho đến khi đại dịch COVID buộc chúng tôi phải đóng cửa. Tôi không hối tiếc —
              tôi thấy mình may mắn.
            </p>
          </div>

          <p>
            Chúng tôi bước vào ngành chỉ với đam mê nấu ăn và khao khát phục vụ — hoàn toàn <strong>không có kinh nghiệm
            hay kiến thức chuyên môn</strong>. Mọi thứ đều là tự mày mò, sai đâu sửa đó, trả giá bằng thời gian và tiền bạc.
          </p>

          <div className="clay-sm bg-pastel-blue p-4">
            <p className="text-[12px] italic leading-relaxed text-text-muted">
              &ldquo;Giá như lúc đó có ai đó tư vấn cho mình, hay ít nhất là một công cụ giúp mình nhìn rõ bức tranh tài chính
              trước khi lao vào — thì chắc tôi và các cộng sự đã tránh được không ít bài học xương máu.&rdquo;
            </p>
          </div>

          <p>
            Dù hiện tại tôi tạm rời F&B, nhưng ngọn lửa đam mê chưa bao giờ tắt.
            Tôi vẫn luôn kính trọng những anh chị em đang ngày đêm cháy hết mình với ngành này.
          </p>

          <p className="font-medium">
            Và tôi biết — một ngày không xa, tôi sẽ quay lại. Bởi vì F&B tuy khắc nghiệt,
            nhưng cũng là nơi tôi tìm thấy niềm vui thuần khiết nhất.
          </p>
        </div>

        {/* Social */}
        <div className="flex gap-3 justify-center mt-4 pt-3 border-t border-border-light">
          <a href="https://linkedin.com/in/phamdinhkhang" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <SocialIcon name="linkedin" size={34} className="hover:opacity-80 transition-opacity" />
          </a>
          <a href="https://facebook.com/phamdinhkhang" target="_blank" rel="noopener noreferrer" title="Facebook">
            <SocialIcon name="facebook" size={34} className="hover:opacity-80 transition-opacity" />
          </a>
          <a href="mailto:phamdinhkhang@gmail.com" title="Email">
            <SocialIcon name="email" size={34} className="hover:opacity-80 transition-opacity" />
          </a>
        </div>
      </div>

      {/* === Buy me a coffee === */}
      <div className="clay-sm bg-pastel-gold p-5 mb-4 text-center">
        <p className="text-[22px] mb-1">&#9749;</p>
        <h3 className="text-[15px] font-bold text-text font-[family-name:var(--font-heading)] mb-1.5">
          Buy me a coffee
        </h3>
        <p className="text-[12px] text-text-muted leading-relaxed max-w-[380px] mx-auto mb-3">
          F&B Validator hoàn toàn miễn phí. Nếu công cụ này hữu ích với bạn,
          một ly cà phê nhỏ sẽ giúp tôi có thêm động lực để tiếp tục phát triển.
        </p>

        <button
          onClick={() => setShowQR(!showQR)}
          className="clay-btn clay-btn-primary text-[13px] px-5 py-2.5"
        >
          {showQR ? 'Ẩn mã QR' : 'Ủng hộ tác giả'}
        </button>

        {showQR && (
          <div className="mt-4 animate-bounce-in">
            <div className="inline-block bg-white rounded-2xl p-3 border-2 border-border shadow-[3px_3px_0_var(--color-text)]">
              <Image
                src="/donate-qr.jpg"
                alt="QR Donate"
                width={220}
                height={220}
                className="rounded-xl"
              />
            </div>
            <p className="text-[11px] text-text-muted mt-2 italic">
              Quét mã QR để chuyển khoản. Cảm ơn bạn rất nhiều!
            </p>
          </div>
        )}
      </div>

      {/* === Tác phẩm === */}
      <div className="clay-sm bg-white p-5">
        <h3 className="text-[15px] font-bold text-text font-[family-name:var(--font-heading)] mb-3 text-center">
          Vì sao có F&B Validator?
        </h3>

        <div className="space-y-3 text-[13px] text-text leading-relaxed">
          <p>
            Khi còn làm F&B, tôi đã dành vô số thời gian tìm kiếm tài liệu, nghiên cứu mô hình,
            hỏi han người đi trước, đọc sách và những câu chuyện thành công trong ngành.
            Một điều tôi nhận ra: <strong>thông tin thì rất nhiều, nhưng không có nơi nào giúp mình
            nhìn toàn cảnh và validate ý tưởng bằng con số thực tế.</strong>
          </p>

          <p>
            Từ đó, tôi ấp ủ xây dựng một công cụ nhỏ gọn để bất kỳ ai đang nuôi giấc mơ F&B đều có thể:
          </p>

          <ul className="space-y-1.5 pl-1">
            <li className="flex items-start gap-2">
              <span className="text-cta font-bold mt-0.5 shrink-0">{'>'}</span>
              Hiểu cấu trúc chi phí, dòng tiền, điểm hòa vốn trước khi rót vốn
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cta font-bold mt-0.5 shrink-0">{'>'}</span>
              Thẩm định ý tưởng kinh doanh bằng dữ liệu thay vì cảm tính
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cta font-bold mt-0.5 shrink-0">{'>'}</span>
              Biết cần chuẩn bị gì để giảm thiểu những sai lầm tốn kém
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cta font-bold mt-0.5 shrink-0">{'>'}</span>
              Tự tin hơn khi đưa ra quyết định — hoặc biết khi nào nên dừng lại
            </li>
          </ul>

          <div className="clay-sm bg-pastel-mint p-4 text-center">
            <p className="text-[14px] font-bold font-[family-name:var(--font-heading)] text-text">
              F&B Validator ra đời từ đó.
            </p>
            <p className="text-[12px] text-text-muted mt-1.5 max-w-[400px] mx-auto">
              Kết hợp giữa AI, kinh nghiệm thực chiến và nghiên cứu chuyên sâu — được xây dựng cho những người dám mơ,
              và đủ tỉnh táo để chuẩn bị.
            </p>
          </div>

          <p className="text-center text-[12px] text-text-muted italic">
            Sản phẩm sẽ tiếp tục được hoàn thiện. Mọi góp ý của bạn đều vô cùng quý giá.
          </p>

          <p className="text-center font-bold font-[family-name:var(--font-heading)] text-[14px] mt-1">
            — Khang Phạm
          </p>
        </div>
      </div>
    </div>
  );
}
