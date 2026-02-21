import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const locale = searchParams.get('locale') || 'vi';
  const page = searchParams.get('page') || 'landing';

  const titles: Record<string, Record<string, string>> = {
    landing: {
      vi: 'Validate ý tưởng kinh doanh\ntrước khi đầu tư',
      en: 'Validate your business idea\nbefore investing',
    },
    fnb: {
      vi: 'Thẩm định ý tưởng\nkinh doanh F&B',
      en: 'Validate your\nF&B business idea',
    },
    knowledge: {
      vi: 'Kiến thức F&B\ncho người mới bắt đầu',
      en: 'F&B Knowledge Base\nfor beginners',
    },
  };

  const subtitles: Record<string, Record<string, string>> = {
    landing: {
      vi: 'Công cụ miễn phí · Phân tích tài chính · AI Advisor',
      en: 'Free tool · Financial analysis · AI Advisor',
    },
    fnb: {
      vi: '8 mô hình · P&L 12 tháng · Break-even · AI Advisor',
      en: '8 models · 12-month P&L · Break-even · AI Advisor',
    },
    knowledge: {
      vi: '11 bài học · Pháp lý · Thuế · Marketing · Vận hành',
      en: '11 articles · Legal · Tax · Marketing · Operations',
    },
  };

  const title = titles[page]?.[locale] || titles.landing.vi;
  const subtitle = subtitles[page]?.[locale] || subtitles.landing.vi;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)',
          fontFamily: 'sans-serif',
          padding: '60px 80px',
        }}
      >
        {/* Top bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: 'linear-gradient(90deg, #16A34A, #22C55E, #16A34A)',
          }}
        />

        {/* Logo + brand */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '14px',
              background: '#16A34A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '28px',
              color: 'white',
              fontWeight: 700,
            }}
          >
            V
          </div>
          <div
            style={{
              fontSize: '28px',
              color: '#94A3B8',
              fontWeight: 500,
              letterSpacing: '2px',
            }}
          >
            VALIDATOR.VN
          </div>
        </div>

        {/* Main title */}
        <div
          style={{
            fontSize: '52px',
            fontWeight: 800,
            color: '#F8FAFC',
            textAlign: 'center',
            lineHeight: 1.2,
            marginBottom: '24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {title.split('\n').map((line, i) => (
            <span key={i}>{line}</span>
          ))}
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '22px',
            color: '#64748B',
            textAlign: 'center',
            letterSpacing: '1px',
          }}
        >
          {subtitle}
        </div>

        {/* Bottom badge */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '16px',
            color: '#475569',
          }}
        >
          <span style={{ color: '#16A34A', fontWeight: 700 }}>FREE</span>
          <span>·</span>
          <span>{locale === 'vi' ? 'Miễn phí cho cộng đồng' : 'Free for the community'}</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
