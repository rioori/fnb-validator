'use client';

import type { CalcResults, ModelKey } from '@/types';
import { formatVND } from '@/lib/format';
import { MODELS } from '@/lib/constants';

interface AnalysisReportProps {
  results: CalcResults;
  model: ModelKey | null;
  rent: number;
  totalInvestment: number;
}

/** Human-readable analysis report generated from CalcResults */
export default function AnalysisReport({ results: r, model, rent, totalInvestment }: AnalysisReportProps) {
  const sm = r.stableMonth;
  const modelName = model ? MODELS[model].name : 'Mô hình F&B';
  const profitable = sm.netProfit > 0;
  const month1 = r.months[0];

  // ─── Score interpretation ───
  const scoreLabel = r.score >= 80 ? 'Khả thi tốt' : r.score >= 60 ? 'Cần cân nhắc' : r.score >= 40 ? 'Rủi ro cao' : 'Rất rủi ro';
  const scoreColor = r.score >= 80 ? 'text-cta' : r.score >= 60 ? 'text-warning' : 'text-danger';

  // ─── Dynamic paragraphs ───
  const paras: { icon: string; title: string; body: string; type: 'good' | 'warn' | 'bad' | 'info' }[] = [];

  // 1. Overall verdict
  paras.push({
    icon: r.score >= 60 ? '✅' : '⚠️',
    title: 'Đánh giá tổng quan',
    body: `Với mô hình ${modelName}, tổng vốn đầu tư ${formatVND(totalInvestment)}, mô hình của bạn được chấm ${r.score}/100 điểm — mức "${scoreLabel}". ${
      profitable
        ? `Khi hoạt động ổn định (từ tháng 7+), dự kiến lợi nhuận ròng đạt khoảng ${formatVND(sm.netProfit)}/tháng, tương đương biên lợi nhuận ${sm.netMargin.toFixed(1)}%.`
        : `Tuy nhiên, mô hình hiện tại dự kiến LỖ ${formatVND(Math.abs(sm.netProfit))}/tháng ngay cả khi đã ổn định. Bạn cần xem xét lại cấu trúc chi phí hoặc tăng doanh thu.`
    }`,
    type: profitable ? (r.score >= 60 ? 'good' : 'warn') : 'bad',
  });

  // 2. Revenue analysis
  const revGrowth = month1.netRev > 0 ? ((sm.netRev - month1.netRev) / month1.netRev * 100).toFixed(0) : '0';
  paras.push({
    icon: '📈',
    title: 'Doanh thu dự kiến',
    body: `Tháng đầu tiên (giai đoạn khởi động), doanh thu ước tính khoảng ${formatVND(month1.netRev)}. Khi đạt 100% công suất (từ tháng 7), doanh thu tăng lên ${formatVND(sm.netRev)}/tháng (+${revGrowth}%). ${
      r.deliveryPct > 30
        ? `Lưu ý: ${r.deliveryPct.toFixed(0)}% doanh thu đến từ delivery — hoa hồng app sẽ ăn mất khoảng ${formatVND(sm.deliveryComm)}/tháng.`
        : r.deliveryPct > 0
        ? `Phí delivery app chiếm ${formatVND(sm.deliveryComm)}/tháng — mức chấp nhận được.`
        : ''
    }`,
    type: 'info',
  });

  // 3. Cost structure
  paras.push({
    icon: '💰',
    title: 'Cấu trúc chi phí',
    body: `Chi phí cố định hàng tháng: ${formatVND(r.fixedMonthly)} (thuê ${formatVND(rent)} + nhân sự ${formatVND(sm.staffTotal + sm.bhxh)} + khác ${formatVND(sm.fixedOther)}). Nguyên vật liệu chiếm ${r.cogsPct.toFixed(0)}% doanh thu. Tổng Prime Cost (NVL + Nhân sự) = ${r.primeCost.toFixed(0)}% — ${
      r.primeCost <= 60 ? 'mức lý tưởng, còn dư biên lợi nhuận tốt' : r.primeCost <= 70 ? 'ở ngưỡng trung bình, nên tối ưu thêm' : 'quá cao! Cần giảm NVL hoặc tinh gọn nhân sự'
    }.`,
    type: r.primeCost <= 65 ? 'good' : r.primeCost <= 70 ? 'warn' : 'bad',
  });

  // 4. Rent ratio
  paras.push({
    icon: '🏠',
    title: 'Tỷ lệ thuê mặt bằng',
    body: `Tiền thuê chiếm ${r.rentRatio.toFixed(1)}% doanh thu ròng. ${
      r.rentRatio <= 15 ? 'Đây là tỷ lệ rất tốt — bạn có nhiều dư địa để sinh lời.' : r.rentRatio <= 20 ? 'Mức hợp lý cho ngành F&B. Cố gắng giữ dưới 20%.' : r.rentRatio <= 25 ? 'Hơi cao. Mỗi % thuê vượt 20% là ăn thẳng vào lợi nhuận ròng. Cân nhắc đàm phán lại hoặc tìm mặt bằng khác.' : 'QUÁ CAO! Với tỷ lệ này, rất khó để có lãi bền vững. Đây là nguyên nhân hàng đầu khiến quán F&B đóng cửa.'
    }`,
    type: r.rentRatio <= 20 ? 'good' : r.rentRatio <= 25 ? 'warn' : 'bad',
  });

  // 5. Break-even
  paras.push({
    icon: '⏱️',
    title: 'Thời gian hòa vốn',
    body: r.paybackMonth
      ? `Với tốc độ tăng trưởng dự kiến, bạn sẽ hòa vốn sau khoảng ${r.paybackMonth} tháng. Để hòa vốn hàng tháng, cần tối thiểu ${formatVND(r.bepRevenue)} doanh thu — tương đương ${r.bepCustomersDay < Infinity ? r.bepCustomersDay : '∞'} khách/ngày. ${r.paybackMonth <= 12 ? 'Đây là thời gian hoàn vốn khá tốt cho ngành F&B.' : r.paybackMonth <= 18 ? 'Thời gian hòa vốn chấp nhận được, nhưng cần kiểm soát chi phí chặt trong giai đoạn đầu.' : 'Thời gian khá dài — bạn cần đảm bảo có đủ vốn dự phòng để trụ được.'}`
      : `Với cấu trúc hiện tại, mô hình KHÔNG hòa vốn trong 12 tháng đầu. Cần doanh thu tối thiểu ${formatVND(r.bepRevenue)}/tháng (${r.bepCustomersDay < Infinity ? r.bepCustomersDay + ' khách/ngày' : '—'}) mới đạt điểm hòa vốn. Hãy xem xét giảm chi phí cố định hoặc tăng giá bill trung bình.`,
    type: r.paybackMonth && r.paybackMonth <= 12 ? 'good' : r.paybackMonth ? 'warn' : 'bad',
  });

  // 6. Working capital
  paras.push({
    icon: '🛡️',
    title: 'Vốn dự phòng',
    body: `Vốn lưu động dự phòng của bạn đủ cho ${r.workingCapMonths.toFixed(1)} tháng vận hành (nếu không có doanh thu). ${
      r.workingCapMonths >= 3 ? 'Đây là mức an toàn — đủ để vượt qua giai đoạn khởi động khó khăn nhất.' : r.workingCapMonths >= 2 ? 'Hơi mỏng. Ngành F&B khuyến nghị ít nhất 3 tháng dự phòng. Giai đoạn đầu thường lỗ, nếu hết tiền trước khi có khách quen, bạn sẽ phải đóng cửa.' : 'NGUY HIỂM! Không đủ vốn dự phòng là nguyên nhân số 1 khiến quán F&B đóng cửa sớm. Hãy tăng ngân sách dự phòng lên ít nhất 3 tháng chi phí cố định.'
    }`,
    type: r.workingCapMonths >= 3 ? 'good' : r.workingCapMonths >= 2 ? 'warn' : 'bad',
  });

  // 7. Profit trajectory
  const profitM1 = r.months[0].netProfit;
  const profitM6 = r.months[5]?.netProfit ?? 0;
  const profitM12 = r.months[11]?.netProfit ?? 0;
  const totalProfit12 = r.months.reduce((s, m) => s + m.netProfit, 0);
  paras.push({
    icon: '📊',
    title: 'Quỹ đạo lợi nhuận 12 tháng',
    body: `Tháng 1: ${profitM1 >= 0 ? 'lãi' : 'lỗ'} ${formatVND(Math.abs(profitM1))} → Tháng 6: ${profitM6 >= 0 ? 'lãi' : 'lỗ'} ${formatVND(Math.abs(profitM6))} → Tháng 12: ${profitM12 >= 0 ? 'lãi' : 'lỗ'} ${formatVND(Math.abs(profitM12))}. Tổng lợi nhuận 12 tháng: ${totalProfit12 >= 0 ? '' : 'lỗ '}${formatVND(Math.abs(totalProfit12))}. ${
      totalProfit12 > 0 ? 'Sau 1 năm, bạn đã bắt đầu thu hồi vốn đầu tư ban đầu.' : 'Sau 1 năm, bạn vẫn chưa thu hồi được vốn. Cần xem xét lại mô hình kinh doanh.'
    }`,
    type: totalProfit12 > 0 ? 'good' : 'bad',
  });

  // 8. Key recommendation
  const topRisk = r.rentRatio > 25 ? 'thuê mặt bằng quá cao' : r.primeCost > 70 ? 'prime cost quá cao' : r.workingCapMonths < 2 ? 'vốn dự phòng quá mỏng' : !profitable ? 'chưa có lãi ở trạng thái ổn định' : '';
  if (topRisk) {
    paras.push({
      icon: '💡',
      title: 'Khuyến nghị quan trọng nhất',
      body: `Rủi ro lớn nhất hiện tại: ${topRisk}. ${
        r.rentRatio > 25 ? 'Ưu tiên tìm mặt bằng thuê thấp hơn — đây là yếu tố ảnh hưởng lớn nhất đến khả năng sinh lời.' : r.primeCost > 70 ? 'Cần tối ưu hóa chi phí nguyên vật liệu (đàm phán NCC, giảm hao hụt) hoặc tinh gọn nhân sự.' : r.workingCapMonths < 2 ? 'Hãy chuẩn bị thêm vốn dự phòng trước khi bắt đầu. "Hết tiền" là cách phổ biến nhất mà các quán F&B đóng cửa.' : 'Xem xét tăng giá bill trung bình, giảm chi phí, hoặc tăng lượng khách để đạt điểm hòa vốn.'
      }`,
      type: 'warn',
    });
  }

  const typeStyles = {
    good: 'border-l-cta bg-mint-light/40',
    warn: 'border-l-warning bg-pastel-gold/40',
    bad: 'border-l-danger bg-[#FEE2E2]/40',
    info: 'border-l-accent bg-pastel-blue/40',
  };

  return (
    <div className="space-y-3">
      {/* Header */}
      <div className="flex items-center justify-between mb-1">
        <h4 className="text-[13px] font-semibold font-[family-name:var(--font-heading)] uppercase tracking-wider text-text-muted">
          Phân tích chi tiết
        </h4>
        <span className={`text-[14px] font-bold font-[family-name:var(--font-heading)] ${scoreColor}`}>
          {r.score}/100 — {scoreLabel}
        </span>
      </div>

      {/* Report paragraphs */}
      {paras.map((p, i) => (
        <div key={i} className={`rounded-xl border-l-4 px-4 py-3 ${typeStyles[p.type]}`}>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[16px]">{p.icon}</span>
            <span className="text-[13px] font-bold font-[family-name:var(--font-heading)] text-text">{p.title}</span>
          </div>
          <p className="text-[12.5px] text-text leading-relaxed">
            {p.body}
          </p>
        </div>
      ))}

      {/* Disclaimer */}
      <p className="text-[11px] text-text-muted italic text-center pt-1">
        * Phân tích dựa trên dữ liệu bạn nhập và benchmark ngành. Kết quả thực tế có thể khác tùy vào điều kiện thị trường.
      </p>
    </div>
  );
}
