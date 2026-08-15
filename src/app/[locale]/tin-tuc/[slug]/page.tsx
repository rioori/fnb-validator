import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPublishedNewsBySlug, listAllSlugs } from '@/lib/news-server';
import Attribution from '@/components/news/Attribution';
import WizardCTA from '@/components/news/WizardCTA';
import ViewPing from '@/components/news/ViewPing';

export const revalidate = 300;

const BASE_URL = 'https://www.validator.vn';

type PageProps = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  const rows = await listAllSlugs();
  return rows.map((r) => ({ locale: r.locale === 'en' ? 'en' : 'vi', slug: r.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const isEn = locale === 'en';
  const post = await getPublishedNewsBySlug(slug, isEn ? 'en' : 'vi');
  if (!post) return { title: 'Not found' };

  const canonical = isEn ? `${BASE_URL}/en/tin-tuc/${slug}` : `${BASE_URL}/tin-tuc/${slug}`;
  return {
    title: `${post.title} — Validator.vn`,
    description: post.summary.slice(0, 160),
    openGraph: {
      title: post.title,
      description: post.summary.slice(0, 160),
      url: canonical,
      type: 'article',
      publishedTime: post.published_at,
      images: post.cover_image_url ? [{ url: post.cover_image_url }] : undefined,
    },
    twitter: { card: 'summary_large_image' },
    alternates: {
      canonical,
      languages: { vi: `${BASE_URL}/tin-tuc/${slug}`, en: `${BASE_URL}/en/tin-tuc/${slug}` },
    },
  };
}

export default async function NewsPostPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const isEn = locale === 'en';
  const post = await getPublishedNewsBySlug(slug, isEn ? 'en' : 'vi');
  if (!post) notFound();

  const dateFmt = new Intl.DateTimeFormat(isEn ? 'en-US' : 'vi-VN', { year: 'numeric', month: 'long', day: 'numeric' });
  const preset = post.wizard_preset;
  const listingHref = isEn ? '/en/tin-tuc' : '/tin-tuc';
  const canonical = isEn ? `${BASE_URL}/en/tin-tuc/${slug}` : `${BASE_URL}/tin-tuc/${slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: post.title,
    datePublished: post.published_at,
    dateModified: post.published_at,
    inLanguage: isEn ? 'en' : 'vi',
    mainEntityOfPage: canonical,
    author: { '@type': 'Organization', name: 'Validator.vn', url: BASE_URL },
    publisher: {
      '@type': 'Organization',
      name: 'Validator.vn',
      url: BASE_URL,
      logo: { '@type': 'ImageObject', url: `${BASE_URL}/icon.png` },
    },
    description: post.summary.slice(0, 200),
    citation: {
      '@type': 'CreativeWork',
      name: post.source_name,
      url: post.source_url,
    },
    image: post.cover_image_url ? [post.cover_image_url] : [`${BASE_URL}/api/og?locale=${locale}&page=news&slug=${encodeURIComponent(slug)}`],
    thumbnailUrl: post.cover_image_url || undefined,
  };

  return (
    <article className="max-w-2xl mx-auto py-8">
      <ViewPing postId={post.id} postSlug={post.slug} locale={isEn ? 'en' : 'vi'} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="mb-4">
        <Link href={listingHref} className="text-[12px] text-emerald-700 font-semibold uppercase tracking-wider">
          ← {isEn ? 'All F&B briefs' : 'Tất cả bản tin F&B'}
        </Link>
      </div>

      <div className="flex items-center gap-3 text-[12px] text-text-muted mb-3">
        <span className="uppercase font-bold tracking-wider text-emerald-700">{post.source_name}</span>
        <span>·</span>
        <time dateTime={post.published_at}>{dateFmt.format(new Date(post.published_at))}</time>
      </div>

      <h1 className="text-3xl font-bold text-text mb-4 font-[family-name:var(--font-heading)] leading-tight">
        {post.title}
      </h1>

      {post.cover_image_url && (
        <figure className="mb-6">
          <div className="aspect-[16/9] bg-slate-100 overflow-hidden border-2 border-slate-900 rounded-xl shadow-[3px_3px_0_theme(colors.slate.900)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={post.cover_image_url} alt={post.title} className="w-full h-full object-cover" />
          </div>
          {post.cover_image_credit && (
            <figcaption className="text-[11px] text-slate-500 mt-2 text-right italic">
              {post.cover_image_credit}
            </figcaption>
          )}
        </figure>
      )}

      <div className="text-[16px] text-text leading-relaxed whitespace-pre-line">
        {post.summary}
      </div>

      {post.operator_angle && (
        <div className="mt-6 p-5 bg-amber-50 border-2 border-slate-900 rounded-xl shadow-[3px_3px_0_theme(colors.slate.900)]">
          <div className="text-[11px] font-bold uppercase tracking-widest text-amber-700 mb-2">
            {isEn ? 'Operator angle' : 'Vì sao chủ quán quan tâm'}
          </div>
          <p className="text-[15px] leading-relaxed text-text">{post.operator_angle}</p>
        </div>
      )}

      {preset && (
        <WizardCTA
          postId={post.id}
          postSlug={post.slug}
          presetLabel={isEn ? preset.label_en : preset.label_vi}
          wizardUrl={preset.wizard_url}
          locale={isEn ? 'en' : 'vi'}
        />
      )}

      <Attribution sourceName={post.source_name} sourceUrl={post.source_url} locale={isEn ? 'en' : 'vi'} />

      <div className="mt-8 text-center">
        <Link href={listingHref} className="text-[13px] text-emerald-700 font-semibold">
          {isEn ? '← More briefs' : '← Xem thêm bản tin'}
        </Link>
      </div>
    </article>
  );
}
