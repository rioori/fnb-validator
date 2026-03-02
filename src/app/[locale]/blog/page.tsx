import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import { getDictionary } from '@/i18n/get-dictionary';
import { defaultLocale, type Locale } from '@/i18n/config';
import { localePath } from '@/i18n/link';
import type { BlogPost } from '@/types';
import BLOG_VI from '@/i18n/data/vi/blog';
import BLOG_EN from '@/i18n/data/en/blog';

function getBlog(locale: string): BlogPost[] {
  return locale === 'en' ? BLOG_EN : BLOG_VI;
}

const BASE_URL = 'https://www.validator.vn';

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const canonical = locale === defaultLocale ? `${BASE_URL}/blog` : `${BASE_URL}/en/blog`;

  return {
    title: dict.blog.metaTitle,
    description: dict.blog.metaDesc,
    openGraph: {
      title: dict.blog.metaTitle,
      description: dict.blog.metaDesc,
      url: canonical,
      type: 'website',
    },
    alternates: {
      canonical,
      languages: { vi: `${BASE_URL}/blog`, en: `${BASE_URL}/en/blog` },
    },
  };
}

function BreadcrumbJsonLd({ locale }: { locale: string }) {
  const isEn = locale === 'en';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: isEn ? 'Home' : 'Trang chủ', item: isEn ? `${BASE_URL}/en/fnb` : `${BASE_URL}/fnb` },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: isEn ? `${BASE_URL}/en/blog` : `${BASE_URL}/blog`,
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

function formatDate(dateStr: string, locale: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString(locale === 'en' ? 'en-US' : 'vi-VN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function BlogPage({ params }: PageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const posts = getBlog(locale);

  return (
    <>
      <BreadcrumbJsonLd locale={locale} />

      <div className="py-2 max-md:py-0">
        {/* Header */}
        <div className="clay-card-static bg-pastel-mint p-6 mb-6 text-center">
          <Icon name="blog" size={48} className="mx-auto mb-2" />
          <h1 className="text-xl font-bold text-text font-[family-name:var(--font-heading)]">
            {dict.blog.heading}
          </h1>
          <p className="text-[14px] text-text-muted mt-2 max-w-[520px] mx-auto">
            {dict.blog.desc}
          </p>
        </div>

        {/* Blog card grid */}
        <div className="space-y-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={localePath(`/blog/${post.slug}`, locale as Locale)}
              className="clay-card-static block p-5 hover:shadow-[3px_3px_0_var(--color-text)] transition-shadow bg-white"
            >
              <div className="flex items-start gap-2 flex-wrap mb-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="clay-pill bg-mint-light !text-[10px] !py-0.5">
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-[16px] font-bold font-[family-name:var(--font-heading)] text-text mb-1.5">
                {post.title}
              </h2>
              <p className="text-[13px] text-text-muted leading-relaxed mb-3">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-[11px] text-text-light">
                <span>
                  {dict.blog.publishedOn} {formatDate(post.date, locale)} &middot; {post.author}
                </span>
                <span className="text-cta font-semibold">{dict.blog.readMore}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <Link
            href={localePath('/fnb', locale as Locale)}
            className="clay-btn clay-btn-primary text-[14px] px-6 py-2.5 inline-flex items-center gap-2"
          >
            <Icon
              name="wizard"
              size={18}
              className="!border-0 !shadow-none !bg-transparent"
            />
            {dict.blog.cta.validateIdea}
          </Link>
        </div>
      </div>
    </>
  );
}
