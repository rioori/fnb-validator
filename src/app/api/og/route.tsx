import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const locale = searchParams.get('locale') || 'vi';
  const page = searchParams.get('page') || 'landing';

  const customTitle = searchParams.get('title');
  const customSubtitle = searchParams.get('subtitle');

  const titles: Record<string, Record<string, string>> = {
    landing: {
      vi: 'Thẩm định & tối ưu\nkinh doanh',
      en: 'Validate & optimize\nyour business',
    },
    fnb: {
      vi: 'Thẩm định ý tưởng\nkinh doanh F&B',
      en: 'Validate your\nF&B business idea',
    },
    knowledge: {
      vi: 'Kiến thức F&B\ncho người mới bắt đầu',
      en: 'F&B Knowledge Base\nfor beginners',
    },
    feature: {
      vi: customTitle || 'Tính năng',
      en: customTitle || 'Feature',
    },
    article: {
      vi: customTitle || 'Bài viết',
      en: customTitle || 'Article',
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
    feature: {
      vi: customSubtitle || 'Validator.vn',
      en: customSubtitle || 'Validator.vn',
    },
    article: {
      vi: customSubtitle || 'Validator.vn · Kiến thức F&B',
      en: customSubtitle || 'Validator.vn · F&B Knowledge',
    },
  };

  const title = titles[page]?.[locale] || titles.landing.vi;
  const subtitle = subtitles[page]?.[locale] || subtitles.landing.vi;

  // Fetch logo as base64 for embedding
  const logoUrl = new URL('/logo.png', request.url);
  let logoSrc = '';
  try {
    const logoRes = await fetch(logoUrl);
    const logoBuf = await logoRes.arrayBuffer();
    logoSrc = `data:image/png;base64,${Buffer.from(logoBuf).toString('base64')}`;
  } catch {
    // fallback: no logo
  }

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
          background: '#F8FAFC',
          fontFamily: 'sans-serif',
          padding: '50px 80px',
          position: 'relative',
        }}
      >
        {/* Top green accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: '#16A34A',
          }}
        />

        {/* Subtle decorative circles */}
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            right: '-80px',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'rgba(22, 163, 74, 0.06)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-60px',
            left: '-60px',
            width: '220px',
            height: '220px',
            borderRadius: '50%',
            background: 'rgba(22, 163, 74, 0.04)',
          }}
        />

        {/* Card container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'white',
            borderRadius: '24px',
            border: '2px solid #E2E8F0',
            boxShadow: '0 4px 24px rgba(15, 23, 42, 0.08)',
            padding: '48px 64px',
            width: '100%',
            height: '100%',
          }}
        >
          {/* Logo */}
          {logoSrc ? (
            <img
              src={logoSrc}
              width={80}
              height={80}
              style={{ marginBottom: '16px' }}
            />
          ) : (
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '16px',
                background: '#0F172A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '32px',
                color: 'white',
                fontWeight: 800,
                marginBottom: '16px',
              }}
            >
              V
            </div>
          )}

          {/* Brand name */}
          <div
            style={{
              fontSize: '18px',
              color: '#64748B',
              fontWeight: 600,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              marginBottom: '28px',
            }}
          >
            VALIDATOR.VN
          </div>

          {/* Main title */}
          <div
            style={{
              fontSize: '48px',
              fontWeight: 800,
              color: '#0F172A',
              textAlign: 'center',
              lineHeight: 1.2,
              marginBottom: '20px',
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
              fontSize: '20px',
              color: '#64748B',
              textAlign: 'center',
              letterSpacing: '0.5px',
            }}
          >
            {subtitle}
          </div>

          {/* Bottom badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '15px',
              color: '#94A3B8',
              marginTop: '32px',
              padding: '8px 20px',
              borderRadius: '999px',
              background: '#F1F5F9',
            }}
          >
            <span style={{ color: '#16A34A', fontWeight: 700 }}>FREE</span>
            <span>·</span>
            <span>{locale === 'vi' ? 'Miễn phí cho cộng đồng' : 'Free for the community'}</span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
