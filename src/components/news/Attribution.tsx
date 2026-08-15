interface AttributionProps {
  sourceName: string;
  sourceUrl: string;
  locale: 'vi' | 'en';
}

export default function Attribution({ sourceName, sourceUrl, locale }: AttributionProps) {
  const isEn = locale === 'en';
  return (
    <div className="mt-8 pt-6 border-t border-slate-200 text-[13px] text-slate-500">
      <div className="mb-2">
        <strong>{isEn ? 'Source:' : 'Nguồn:'}</strong>{' '}
        <a
          href={sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-700 font-semibold underline"
        >
          {sourceName}
        </a>{' '}
        · {isEn ? 'Summarised by' : 'Tổng hợp bởi'} <strong>Validator.vn</strong>
      </div>
      <p className="text-[12px] leading-relaxed italic">
        {isEn
          ? 'Content is a short editorial summary with independent operator commentary. All rights to the original article belong to the source publisher. Please visit the source link for the full story.'
          : 'Nội dung là tóm tắt biên tập ngắn kèm bình luận độc lập từ góc nhìn vận hành F&B. Bản quyền bài gốc thuộc về đơn vị xuất bản. Vui lòng truy cập link nguồn để đọc bài đầy đủ.'}
      </p>
    </div>
  );
}
