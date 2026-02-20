'use client';

import { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useScenarios } from '@/hooks/useScenarios';
import { useWizardStore } from '@/hooks/useWizardStore';
import { MODELS } from '@/lib/constants';

export default function UserBar() {
  const { user, displayName, logout } = useAuth();
  const { scenarios, selectedId, setSelectedId, loadList, save, load, remove } = useScenarios();
  const store = useWizardStore();

  useEffect(() => {
    if (user) loadList(user.id);
  }, [user, loadList]);

  const handleSave = async () => {
    if (!user) { alert('Vui lòng đăng nhập để lưu!'); return; }
    const modelName = store.selectedModel ? MODELS[store.selectedModel].name : 'Kịch bản mới';
    const name = prompt('Tên kịch bản:', modelName);
    if (!name) return;
    await save(user.id, name, store.selectedModel, store.collectAll());
    await loadList(user.id);
    alert('Đã lưu!');
  };

  const handleLoad = async (id: string) => {
    if (!id) return;
    const result = await load(id);
    if (!result) return;
    const d = result.data as Record<string, unknown>;
    store.restoreAll(d);
  };

  const handleDelete = async () => {
    if (!selectedId) { alert('Chọn kịch bản cần xóa!'); return; }
    if (!confirm('Xóa kịch bản này?')) return;
    await remove(selectedId);
    if (user) await loadList(user.id);
  };

  if (!user) return null;

  return (
    <div className="flex items-center justify-between px-4 py-3 clay-sm mb-4 text-[13px] no-print max-md:flex-col max-md:gap-2 max-md:items-stretch">
      <div>
        Xin chào, <span className="font-bold text-text font-[family-name:var(--font-heading)]">{displayName}</span>
      </div>
      <div className="flex gap-2 items-center max-md:flex-wrap">
        <select
          value={selectedId}
          onChange={(e) => { setSelectedId(e.target.value); handleLoad(e.target.value); }}
          className="max-w-[200px] text-[13px] font-[family-name:var(--font-body)]"
        >
          <option value="">— Kịch bản mới —</option>
          {scenarios.map(s => (
            <option key={s.id} value={s.id}>{s.name}</option>
          ))}
        </select>
        <button onClick={handleSave} className="clay-btn clay-btn-primary text-[12px] !py-1.5 !px-3">Lưu</button>
        <button onClick={handleDelete} className="clay-btn clay-btn-secondary text-[12px] !py-1.5 !px-3">Xóa</button>
        <button onClick={logout} className="clay-btn clay-btn-secondary text-[12px] !py-1.5 !px-3">Đăng xuất</button>
      </div>
    </div>
  );
}
