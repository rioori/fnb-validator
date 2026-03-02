import type { NewsletterContent } from './newsletter-content';

const BASE_URL = 'https://www.validator.vn';
const MAX_BLOG_POSTS = 4;

interface TemplateOptions {
  locale: 'vi' | 'en';
  content: NewsletterContent;
  unsubscribeToken: string;
}

const t = {
  vi: {
    preheader: 'Bản tin F&B mới nhất từ Validator.vn',
    greeting: 'Chào bạn chủ quán! 👋',
    intro: 'Đây là bản tin tổng hợp nội dung mới từ Validator.vn trong 2 tuần qua — tin tức, kiến thức và mẹo kinh doanh F&B dành riêng cho bạn.',
    thisWeekHighlight: '🔥 Nổi bật tuần này',
    newArticles: 'Bài phân tích mới',
    newBlogPosts: 'Kiến thức & mẹo hay',
    moreOnBlog: 'Xem thêm trên Blog',
    readMore: 'Đọc ngay →',
    noContent: 'Tuần này chưa có nội dung mới — hẹn gặp lại bản tin sau!',
    socialProof: '1,200+ chủ quán đã dùng Validator.vn để kiểm tra ý tưởng kinh doanh',
    cta: 'Thử miễn phí — chỉ 5 phút',
    ctaDesc: 'Nhập số liệu của quán → biết ngay có lãi không, bao lâu hòa vốn, rủi ro ở đâu.',
    sharePrompt: 'Thấy hữu ích? Forward email này cho bạn bè đang tính mở quán nhé!',
    unsubscribe: 'Hủy đăng ký nhận bản tin',
    footer: 'Bạn nhận email này vì đã đăng ký bản tin tại Validator.vn.',
    copyright: `© ${new Date().getFullYear()} Validator.vn — Công cụ thẩm định kinh doanh F&B miễn phí`,
  },
  en: {
    preheader: 'Latest F&B insights from Validator.vn',
    greeting: 'Hey there! 👋',
    intro: "Here's your bi-weekly roundup of F&B insights, news, and practical tips from Validator.vn.",
    thisWeekHighlight: '🔥 This week\'s highlight',
    newArticles: 'New Analysis',
    newBlogPosts: 'Knowledge & Tips',
    moreOnBlog: 'More on our Blog',
    readMore: 'Read now →',
    noContent: 'No new content this period — see you next time!',
    socialProof: '1,200+ F&B operators have used Validator.vn to stress-test their business idea',
    cta: 'Try free — only 5 minutes',
    ctaDesc: 'Enter your numbers → instantly see profitability, break-even, and risk areas.',
    sharePrompt: 'Found this useful? Forward this email to a friend planning to open a restaurant!',
    unsubscribe: 'Unsubscribe from this newsletter',
    footer: 'You received this email because you subscribed at Validator.vn.',
    copyright: `© ${new Date().getFullYear()} Validator.vn — Free F&B business validation tool`,
  },
};

function articleUrl(slug: string, locale: string, category: string): string {
  const prefix = locale === 'en' ? '/en' : '';
  if (category === 'trends' || category === 'cost' || category === 'operations' || category === 'strategy' || category === 'legal' || category === 'technology') {
    return `${BASE_URL}${prefix}/kien-thuc/${slug}`;
  }
  return `${BASE_URL}${prefix}/blog/${slug}`;
}

function blogUrl(slug: string, locale: string): string {
  const prefix = locale === 'en' ? '/en' : '';
  return `${BASE_URL}${prefix}/blog/${slug}`;
}

export function renderNewsletter({ locale, content, unsubscribeToken }: TemplateOptions): string {
  const l = t[locale];
  const unsubscribeUrl = `${BASE_URL}/api/unsubscribe?token=${unsubscribeToken}`;

  const featured = content.articles[0] || null;
  const featuredUrl = featured ? articleUrl(featured.slug, locale, featured.category) : '';

  // --- Build sections ---

  let highlightHtml = '';
  if (featured) {
    highlightHtml = `
          <!-- Highlight -->
          <tr>
            <td style="padding: 24px 40px 8px;">
              <p style="font-family: Arial, sans-serif; font-size: 13px; font-weight: 700; color: #22C55E; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 12px 0;">${l.thisWeekHighlight}</p>
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding: 20px 24px; border: 2px solid #1E293B; border-radius: 12px; background: linear-gradient(135deg, #F0FDF4 0%, #E5F4F8 100%); box-shadow: 2px 2px 0 #1E293B;">
                    <a href="${featuredUrl}" style="color: #1E293B; text-decoration: none; font-family: Arial, sans-serif; font-weight: 700; font-size: 18px; line-height: 1.4; display: block;">${featured.title}</a>
                    <p style="color: #64748B; font-size: 14px; line-height: 1.5; margin: 8px 0 16px 0;">${featured.subtitle}</p>
                    <a href="${featuredUrl}" style="display: inline-block; color: #22C55E; font-weight: 600; font-size: 14px; text-decoration: none; border-bottom: 2px solid #22C55E; padding-bottom: 2px;">${l.readMore}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>`;
  }

  const remainingArticles = featured ? content.articles.slice(1) : content.articles;
  let articlesHtml = '';
  if (remainingArticles.length > 0) {
    const cards = remainingArticles
      .map(
        (a) => `
                <tr>
                  <td style="padding: 14px 20px; border: 2px solid #1E293B; border-radius: 12px; background: #F0FDF4;">
                    <a href="${articleUrl(a.slug, locale, a.category)}" style="color: #1E293B; text-decoration: none; font-weight: 600; font-size: 15px; display: block;">${a.title}</a>
                    <p style="color: #64748B; font-size: 13px; margin: 4px 0 0 0;">${a.subtitle}</p>
                  </td>
                </tr>
                <tr><td style="height: 10px;"></td></tr>`,
      )
      .join('');

    articlesHtml = `
          <tr>
            <td style="padding: 24px 40px 8px;">
              <h2 style="font-family: Arial, sans-serif; font-size: 18px; color: #1E293B; margin: 0 0 16px 0;">📊 ${l.newArticles}</h2>
              <table width="100%" cellpadding="0" cellspacing="0" border="0">${cards}</table>
            </td>
          </tr>`;
  }

  const displayPosts = content.blogPosts.slice(0, MAX_BLOG_POSTS);
  const hasMorePosts = content.blogPosts.length > MAX_BLOG_POSTS;
  let blogHtml = '';
  if (displayPosts.length > 0) {
    const cards = displayPosts
      .map(
        (p) => `
                <tr>
                  <td style="padding: 14px 20px; border: 2px solid #1E293B; border-radius: 12px; background: #FAF3E3;">
                    <a href="${blogUrl(p.slug, locale)}" style="color: #1E293B; text-decoration: none; font-weight: 600; font-size: 15px; display: block;">${p.title}</a>
                    <p style="color: #64748B; font-size: 13px; margin: 4px 0 0 0; line-height: 1.4;">${p.excerpt.length > 100 ? p.excerpt.slice(0, 100) + '...' : p.excerpt}</p>
                  </td>
                </tr>
                <tr><td style="height: 10px;"></td></tr>`,
      )
      .join('');

    const moreLink = hasMorePosts
      ? `<tr><td style="text-align: center; padding-top: 8px;"><a href="${BASE_URL}${locale === 'en' ? '/en' : ''}/blog" style="color: #22C55E; font-size: 14px; font-weight: 600; text-decoration: none;">${l.moreOnBlog} →</a></td></tr>`
      : '';

    blogHtml = `
          <tr>
            <td style="padding: 24px 40px 8px;">
              <h2 style="font-family: Arial, sans-serif; font-size: 18px; color: #1E293B; margin: 0 0 16px 0;">📝 ${l.newBlogPosts}</h2>
              <table width="100%" cellpadding="0" cellspacing="0" border="0">${cards}${moreLink}</table>
            </td>
          </tr>`;
  }

  const hasAny = content.articles.length > 0 || content.blogPosts.length > 0;

  const contentSection = hasAny
    ? `
          <!-- Divider -->
          <tr><td style="padding: 20px 40px 0;"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-top: 1px solid #E2E8F0;"></td></tr></table></td></tr>
          ${highlightHtml}
          ${articlesHtml}
          ${blogHtml}`
    : `
          <tr>
            <td style="padding: 32px 40px;">
              <p style="font-size: 14px; color: #64748B;">${l.noContent}</p>
            </td>
          </tr>`;

  // --- Assemble full email (flat table structure, no nesting issues) ---

  return `<!DOCTYPE html>
<html lang="${locale}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${l.preheader}</title>
  <!--[if mso]><noscript><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript><![endif]-->
</head>
<body style="margin: 0; padding: 0; background-color: #F1F5F9; font-family: 'Roboto', Arial, Helvetica, sans-serif; color: #1E293B;">
  <div style="display: none; max-height: 0; overflow: hidden;">${l.preheader}</div>

  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #F1F5F9;">
    <tr>
      <td align="center" style="padding: 24px 12px;">

        <!-- ===== MAIN CONTAINER ===== -->
        <table width="700" cellpadding="0" cellspacing="0" border="0" style="max-width: 700px; width: 100%;">

          <!-- ===== HEADER with floating shapes ===== -->
          <tr>
            <td style="position: relative; background: linear-gradient(150deg, #FAF3E3 0%, #E5F4F8 30%, #D2ECD0 60%, #FDEEC4 100%); border: 2px solid #2D3748; border-radius: 16px 16px 0 0; box-shadow: 3px 3px 0 #2D3748; overflow: hidden;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding: 40px 40px 16px; text-align: center;">
                    <!-- Floating deco shapes (using table cells with colored backgrounds) -->
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 8px;">
                      <tr>
                        <td width="60" style="vertical-align: top;">
                          <div style="width: 36px; height: 36px; background: #FDE8E4; border: 2px solid #2D3748; border-radius: 8px; transform: rotate(-12deg); box-shadow: 2px 2px 0 #2D3748;"></div>
                        </td>
                        <td style="text-align: center; vertical-align: middle;">
                          <img src="${BASE_URL}/logo.png" alt="Validator.vn" width="56" height="56" style="display: inline-block; border: 0;">
                        </td>
                        <td width="60" style="vertical-align: top; text-align: right;">
                          <div style="width: 32px; height: 32px; background: #ADD8E6; border: 2px solid #2D3748; border-radius: 50%; box-shadow: 2px 2px 0 #2D3748; display: inline-block;"></div>
                        </td>
                      </tr>
                    </table>
                    <h1 style="font-family: 'Montserrat', Arial, sans-serif; font-size: 28px; font-weight: 800; color: #0F172A; margin: 8px 0 6px 0;">Validator.vn</h1>
                    <p style="font-size: 14px; color: #475569; margin: 0 0 8px 0;">${l.preheader}</p>
                    <!-- Bottom deco row -->
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td width="80" style="vertical-align: bottom;">
                          <div style="width: 24px; height: 24px; background: #D2ECD0; border: 2px solid #2D3748; border-radius: 6px; box-shadow: 1px 1px 0 #2D3748;"></div>
                        </td>
                        <td></td>
                        <td width="80" style="text-align: right; vertical-align: bottom;">
                          <div style="width: 28px; height: 28px; background: #FDEEC4; border: 2px solid #2D3748; border-radius: 50%; box-shadow: 1px 1px 0 #2D3748; display: inline-block;"></div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ===== BODY ===== -->
          <tr>
            <td style="background: #FFFFFF; border-left: 2px solid #2D3748; border-right: 2px solid #2D3748;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">

                <!-- Greeting -->
                <tr>
                  <td style="padding: 28px 40px 0;">
                    <p style="font-size: 17px; font-weight: 600; color: #1E293B; margin: 0 0 8px 0;">${l.greeting}</p>
                    <p style="font-size: 14px; color: #64748B; line-height: 1.6; margin: 0;">${l.intro}</p>
                  </td>
                </tr>

                ${contentSection}

                <!-- Social proof -->
                <tr>
                  <td style="padding: 24px 40px 0;">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="background: #F8FAFC; border-radius: 10px; padding: 16px 24px; text-align: center;">
                          <p style="font-size: 13px; color: #64748B; margin: 0; line-height: 1.5;">✅ ${l.socialProof}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- CTA -->
                <tr>
                  <td style="padding: 28px 40px 12px; text-align: center;">
                    <p style="font-size: 14px; color: #475569; margin: 0 0 20px 0; line-height: 1.5;">${l.ctaDesc}</p>
                    <a href="${BASE_URL}${locale === 'en' ? '/en' : ''}/fnb" style="display: inline-block; background: #22C55E; color: #FFFFFF; font-weight: 700; font-size: 16px; padding: 14px 40px; border-radius: 10px; border: 2px solid #2D3748; box-shadow: 3px 3px 0 #16A34A; text-decoration: none;">${l.cta}</a>
                  </td>
                </tr>

                <!-- Share prompt -->
                <tr>
                  <td style="padding: 16px 40px 28px; text-align: center;">
                    <p style="font-size: 13px; color: #94A3B8; margin: 0;">💌 ${l.sharePrompt}</p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <!-- ===== FOOTER ===== -->
          <tr>
            <td style="background: #F8FAFC; border: 2px solid #2D3748; border-radius: 0 0 16px 16px; padding: 28px 40px; text-align: center; box-shadow: 3px 3px 0 #2D3748;">
              <p style="font-size: 12px; color: #94A3B8; margin: 0 0 8px 0;">${l.footer}</p>
              <a href="${unsubscribeUrl}" style="font-size: 12px; color: #94A3B8; text-decoration: underline;">${l.unsubscribe}</a>
              <p style="font-size: 11px; color: #CBD5E1; margin: 14px 0 0 0;">${l.copyright}</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
