import Icon from '@/components/ui/Icon';
import ChecklistPanel from '@/components/dashboard/ChecklistPanel';

export default function ChecklistPage() {
  return (
    <div className="clay-card-static bg-pastel-cream p-6 mb-4">
      <div className="text-center mb-4">
        <Icon name="checklist" size={48} className="mx-auto mb-2" />
        <h2 className="text-lg font-bold text-text font-[family-name:var(--font-heading)]">
          Checklist mở quán
        </h2>
        <p className="text-[13px] text-text-muted mt-1 max-w-[480px] mx-auto">
          80+ mục cần chuẩn bị từ pháp lý, thi công, thiết bị đến vận hành.
          Đánh dấu những gì bạn đã hoàn thành — dữ liệu được lưu trên trình duyệt.
        </p>
      </div>

      <ChecklistPanel />
    </div>
  );
}
