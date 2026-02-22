'use client';

import { useState } from 'react';
import { track } from '@vercel/analytics';
import { useTranslation } from '@/i18n/LocaleProvider';

const EMOJIS = ['😞', '😕', '😐', '🙂', '😍'];

export default function FeedbackForm() {
  const { t } = useTranslation();
  const fb = t.wizard.feedback;
  const [rating, setRating] = useState<number | null>(null);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (rating === null) return;
    track('wizard_feedback', {
      rating: rating + 1,
      comment: comment.trim().slice(0, 200),
    });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="clay-card-static bg-pastel-mint p-4 mt-4 text-center">
        <p className="text-[14px] font-semibold text-text">{fb.thanks}</p>
      </div>
    );
  }

  return (
    <div className="clay-card-static bg-white p-4 mt-4">
      <p className="text-[13px] font-bold font-[family-name:var(--font-heading)] text-text mb-0.5 text-center">
        {fb.heading}
      </p>
      <p className="text-[11px] text-text-muted mb-3 text-center">{fb.desc}</p>

      {/* Emoji rating */}
      <div className="flex justify-center gap-2 mb-3">
        {EMOJIS.map((emoji, i) => (
          <button
            key={i}
            onClick={() => setRating(i)}
            className={`w-10 h-10 rounded-full border-2 text-[20px] cursor-pointer transition-all ${
              rating === i
                ? 'border-cta bg-pastel-mint scale-110 shadow-[2px_2px_0_var(--color-text)]'
                : 'border-border-light bg-white hover:border-text-muted'
            }`}
            title={fb.ratings[i]}
          >
            {emoji}
          </button>
        ))}
      </div>

      {/* Selected label */}
      {rating !== null && (
        <p className="text-[11px] text-cta font-semibold text-center mb-2">
          {fb.ratings[rating]}
        </p>
      )}

      {/* Optional comment */}
      {rating !== null && (
        <div className="space-y-2">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder={fb.commentPlaceholder}
            maxLength={200}
            rows={2}
            className="w-full text-[12px] p-2.5 border-2 border-border-light rounded-lg bg-white text-text resize-none focus:border-cta focus:outline-none transition-colors"
          />
          <button
            onClick={handleSubmit}
            className="clay-btn clay-btn-primary w-full text-[13px] py-2 cursor-pointer"
          >
            {fb.submit}
          </button>
        </div>
      )}
    </div>
  );
}
