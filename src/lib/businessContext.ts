import type { WizardState } from '@/hooks/useWizardStore';
import { MODELS } from '@/lib/constants';
import { formatVND } from '@/lib/format';

/**
 * Build a human-readable business-context string from wizard state, for injection
 * into AI system prompt (chat + insights). Uses Vietnamese since prompt is VN-first.
 * Returns undefined if no model selected (nothing meaningful to say).
 */
export function buildBusinessContextFromState(s: Partial<WizardState>): string | undefined {
  if (!s.selectedModel) return undefined;

  const model = MODELS[s.selectedModel];
  const cityMap: Record<string, string> = { hcm: 'TP.HCM', hanoi: 'Hà Nội', danang: 'Đà Nẵng', other: 'Khác' };
  const areaMap: Record<string, string> = { center: 'Trung tâm', suburb: 'Ngoại thành', residential: 'Khu dân cư', office: 'Khu văn phòng' };

  const lines: (string | null)[] = [
    s.projectName ? `Tên dự án: ${s.projectName}` : null,
    `Chế độ: ${s.businessMode === 'existing' ? 'Đang kinh doanh' : 'Dự án mới'}`,
    `Mô hình: ${model.name}`,
    `Thành phố: ${cityMap[s.city as string] || s.city}, Khu vực: ${areaMap[s.area as string] || s.area}`,
    s.sqm ? `Diện tích: ${s.sqm}m², Số chỗ ngồi: ${s.seats}` : null,
    s.daysPerWeek ? `Hoạt động: ${s.daysPerWeek} ngày/tuần` : null,
    s.chDinein !== undefined ? `Kênh bán: Dine-in ${s.chDinein}%, Takeaway ${s.chTakeaway}%, Delivery ${s.chDelivery}%` : null,
    s.rent ? `Tiền thuê: ${formatVND(s.rent)}/tháng` : null,
    s.cogsPct !== undefined ? `COGS: ${s.cogsPct}%, Hao hụt: ${s.wastePct}%, Hoa hồng delivery: ${s.deliveryCommPct}%` : null,
  ];

  return lines.filter(Boolean).join('\n');
}
