import type { Metadata } from 'next';
import Link from 'next/link';
import { defaultLocale, type Locale } from '@/i18n/config';
import { localePath } from '@/i18n/link';

const BASE_URL = 'https://www.validator.vn';

const COPY = {
  vi: {
    metaTitle: 'Đối tác & Nhúng công cụ — Validator.vn',
    metaDescription: 'Nhúng công cụ tính điểm hòa vốn Validator vào blog/website của bạn miễn phí. Hợp tác content, guest post, đồng tạo nội dung F&B Việt Nam.',
    h1: 'Hợp tác cùng Validator',
    subtitle: 'Embed công cụ tính điểm hòa vốn miễn phí, hợp tác content F&B, hoặc trở thành đối tác phân phối kiến thức.',
    sectionEmbedH2: 'Nhúng công cụ tính điểm hòa vốn',
    sectionEmbedDesc: 'Cho phép độc giả của bạn tính ngay break-even cho quán F&B mà không rời khỏi blog. Miễn phí, không cần đăng ký, hoạt động trên mọi browser.',
    previewLabel: 'Demo trực tiếp',
    previewSubLabel: 'Click để mở widget trong tab mới',
    iframeLabel: 'Code nhúng (HTML iframe)',
    iframeNote: 'Copy đoạn code dưới đây và dán vào blog/website của bạn. Widget tự responsive theo kích thước parent.',
    customLabel: 'Tùy chỉnh ngôn ngữ',
    customNote: 'Thêm tham số `?lang=en` để hiển thị tiếng Anh. Pre-fill data bằng `?inv=500000000&rev=200000000&rent=25000000`.',
    sectionPartnerH2: 'Cộng tác content F&B',
    sectionPartnerDesc: 'Validator hoan nghênh content collaboration với blog, publication, và creator chuyên sâu về F&B Việt Nam.',
    partnerOpts: [
      { title: 'Guest post / cross-post', desc: 'Viết case study, phân tích chuyên sâu cho Validator (hoặc ngược lại). Topic: chi phí F&B thực tế, lessons-learned từ founder, market data.' },
      { title: 'Data partnership', desc: 'Đóng góp data thực tế (anonymized) cho industry benchmark page → backlink + co-attribution. Format: Google Sheet hoặc CSV.' },
      { title: 'Tool integration', desc: 'Hợp tác với SaaS F&B (POS, kế toán, HR): nhúng tool, share user data, joint content. Đang mở thảo luận với Sapo, KiotViet, MISA CukCuk.' },
      { title: 'Expert interview', desc: 'Nếu bạn là founder F&B (10+ năm) hoặc consultant chuyên sâu, có thể được thêm vào "Góc nhìn chuyên gia" — 29 expert hiện có, traffic ổn định mỗi tháng.' },
    ],
    contactLabel: 'Liên hệ hợp tác',
    contactDesc: 'Email trực tiếp với chủ đề "[Partnership]":',
    backHome: '← Về trang chủ',
    backKnowledge: '← Kho kiến thức',
  },
  en: {
    metaTitle: 'Partners & Embed Tool — Validator.vn',
    metaDescription: 'Embed Validator break-even calculator on your blog/website for free. Content partnerships, guest posts, F&B co-creation in Vietnam.',
    h1: 'Partner with Validator',
    subtitle: 'Embed our free break-even calculator, collaborate on F&B content, or become a knowledge distribution partner.',
    sectionEmbedH2: 'Embed break-even calculator',
    sectionEmbedDesc: 'Let your readers instantly calculate break-even for any F&B shop without leaving your blog. Free, no signup, works in every browser.',
    previewLabel: 'Live demo',
    previewSubLabel: 'Click to open widget in new tab',
    iframeLabel: 'Embed code (HTML iframe)',
    iframeNote: 'Copy this snippet and paste into your blog/website. Widget auto-responds to parent container width.',
    customLabel: 'Customize language',
    customNote: 'Add `?lang=en` for English. Pre-fill data with `?inv=500000000&rev=200000000&rent=25000000`.',
    sectionPartnerH2: 'F&B content collaboration',
    sectionPartnerDesc: 'Validator welcomes content collaboration with blogs, publications, and creators focused on Vietnam F&B.',
    partnerOpts: [
      { title: 'Guest post / cross-post', desc: 'Write case studies, deep analysis for Validator (or vice versa). Topics: real F&B costs, founder lessons, market data.' },
      { title: 'Data partnership', desc: 'Contribute anonymized real data to industry benchmark pages → backlink + co-attribution. Format: Google Sheet or CSV.' },
      { title: 'Tool integration', desc: 'Partner with F&B SaaS (POS, accounting, HR): embed tool, share user data, joint content. Currently discussing with Sapo, KiotViet, MISA CukCuk.' },
      { title: 'Expert interview', desc: 'If you\'re a 10+ year F&B founder or specialized consultant, you may be added to "Expert Perspectives" — 29 experts currently, stable monthly traffic.' },
    ],
    contactLabel: 'Partnership contact',
    contactDesc: 'Email directly with subject "[Partnership]":',
    backHome: '← Back to home',
    backKnowledge: '← Knowledge hub',
  },
} as const;

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = COPY[locale === 'en' ? 'en' : 'vi'];
  const canonical = locale === defaultLocale ? `${BASE_URL}/doi-tac` : `${BASE_URL}${localePath('/doi-tac', 'en')}`;
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    openGraph: { title: t.metaTitle, description: t.metaDescription, url: canonical },
    alternates: {
      canonical,
      languages: { vi: `${BASE_URL}/doi-tac`, en: `${BASE_URL}${localePath('/doi-tac', 'en')}` },
    },
  };
}

export default async function PartnersPage({ params }: PageProps) {
  const { locale } = await params;
  const t = COPY[locale === 'en' ? 'en' : 'vi'];
  const isVi = locale === defaultLocale;

  const iframeSnippet = `<iframe
  src="https://www.validator.vn/embed/break-even?lang=${isVi ? 'vi' : 'en'}"
  width="100%"
  height="780"
  frameborder="0"
  style="border-radius:12px;max-width:680px;"
  title="F&B Break-Even Calculator by Validator.vn"
  loading="lazy"
></iframe>`;

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-6 py-12 max-md:px-4 max-md:py-8">
        <nav className="text-sm text-slate-500 mb-6 flex gap-4">
          <Link href={localePath('/', locale as Locale)} className="hover:text-slate-900">
            {t.backHome}
          </Link>
          <Link href={localePath('/kien-thuc', locale as Locale)} className="hover:text-slate-900">
            {t.backKnowledge}
          </Link>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-3 tracking-tight max-md:text-3xl">{t.h1}</h1>
          <p className="text-lg text-slate-600 max-w-2xl">{t.subtitle}</p>
        </header>

        {/* Section 1: Embed */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">{t.sectionEmbedH2}</h2>
          <p className="text-slate-600 mb-8 max-w-2xl">{t.sectionEmbedDesc}</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Live preview */}
            <div className="bg-slate-50 rounded-xl p-4">
              <div className="text-sm font-semibold text-slate-700 mb-1">{t.previewLabel}</div>
              <div className="text-xs text-slate-500 mb-3">{t.previewSubLabel}</div>
              <a
                href={`/embed/break-even?lang=${isVi ? 'vi' : 'en'}`}
                target="_blank"
                rel="noopener"
                className="block border-2 border-dashed border-slate-300 rounded-lg overflow-hidden hover:border-emerald-500 transition-colors"
              >
                <iframe
                  src={`/embed/break-even?lang=${isVi ? 'vi' : 'en'}`}
                  width="100%"
                  height="780"
                  className="border-0 pointer-events-none"
                  title="Validator break-even widget preview"
                  loading="lazy"
                />
              </a>
            </div>

            {/* Embed code */}
            <div>
              <div className="text-sm font-semibold text-slate-700 mb-1">{t.iframeLabel}</div>
              <div className="text-xs text-slate-500 mb-3">{t.iframeNote}</div>
              <pre className="bg-slate-900 text-emerald-200 rounded-lg p-4 overflow-x-auto text-xs leading-relaxed">
                {iframeSnippet}
              </pre>

              <div className="mt-6 text-sm font-semibold text-slate-700 mb-1">{t.customLabel}</div>
              <p className="text-xs text-slate-500 mb-3">{t.customNote}</p>
              <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside bg-slate-50 rounded-lg p-3">
                <li><code className="bg-white px-1 rounded">?lang=en</code> — English UI</li>
                <li><code className="bg-white px-1 rounded">?inv=500000000</code> — pre-fill investment (VND)</li>
                <li><code className="bg-white px-1 rounded">?rent=25000000</code> — pre-fill rent</li>
                <li><code className="bg-white px-1 rounded">?rev=200000000</code> — pre-fill revenue</li>
                <li><code className="bg-white px-1 rounded">?staff=45000000</code> — pre-fill payroll</li>
                <li><code className="bg-white px-1 rounded">?cogs=30</code> — pre-fill food cost %</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Partnership */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">{t.sectionPartnerH2}</h2>
          <p className="text-slate-600 mb-8 max-w-2xl">{t.sectionPartnerDesc}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {t.partnerOpts.map((opt, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                <div className="font-semibold text-slate-900 mb-1">{opt.title}</div>
                <div className="text-sm text-slate-600 leading-relaxed">{opt.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
          <div className="font-semibold text-emerald-900 mb-2">{t.contactLabel}</div>
          <p className="text-sm text-emerald-800 mb-3">{t.contactDesc}</p>
          <a
            href="mailto:hello@validator.vn?subject=%5BPartnership%5D"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-5 py-2.5 rounded-lg transition-colors"
          >
            hello@validator.vn
          </a>
        </section>
      </main>
    </div>
  );
}
