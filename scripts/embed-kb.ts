/**
 * One-off script to embed all KB content (knowledge, blog, experts) into Supabase.
 *
 * Run:  npx tsx -r tsconfig-paths/register scripts/embed-kb.ts
 *
 * Prerequisites:
 *   1. Supabase: kb_embeddings table + match_kb_embeddings function created
 *   2. .env.local: OPENAI_API_KEY, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
 */
import { config } from 'dotenv';
config({ path: '.env.local' });
import OpenAI from 'openai';
import { createClient } from '@supabase/supabase-js';
import { flattenKBTopic, flattenBlogPost, flattenExpert } from '@/lib/flatten-content';

// --- Data imports (VI + EN) ---
import KNOWLEDGE_VI from '@/i18n/data/vi/knowledge/index';
import BLOG_VI from '@/i18n/data/vi/blog';
import EXPERTS_VI from '@/i18n/data/vi/experts/index';
import KNOWLEDGE_EN from '@/i18n/data/en/knowledge/index';
import BLOG_EN from '@/i18n/data/en/blog';
import EXPERTS_EN from '@/i18n/data/en/experts/index';

// --- Clients ---
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
  timeout: 60_000, // 60s timeout
  maxRetries: 3,
});
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { persistSession: false } },
);

const EMBEDDING_MODEL = 'text-embedding-3-small';
const BATCH_SIZE = 5; // Small batches to avoid timeout

interface DocToEmbed {
  content_id: string;
  content_type: 'knowledge' | 'blog' | 'expert';
  locale: 'vi' | 'en';
  title: string;
  slug: string;
  content_text: string;
  metadata: Record<string, unknown>;
}

// --- Build document list ---
function buildDocs(): DocToEmbed[] {
  const docs: DocToEmbed[] = [];

  // Knowledge articles
  for (const topic of KNOWLEDGE_VI) {
    docs.push({
      content_id: `knowledge-${topic.slug}`,
      content_type: 'knowledge',
      locale: 'vi',
      title: topic.title,
      slug: topic.slug,
      content_text: flattenKBTopic(topic),
      metadata: { category: topic.category, id: topic.id },
    });
  }
  for (const topic of KNOWLEDGE_EN) {
    docs.push({
      content_id: `knowledge-${topic.slug}`,
      content_type: 'knowledge',
      locale: 'en',
      title: topic.title,
      slug: topic.slug,
      content_text: flattenKBTopic(topic),
      metadata: { category: topic.category, id: topic.id },
    });
  }

  // Blog posts
  for (const post of BLOG_VI) {
    docs.push({
      content_id: `blog-${post.slug}`,
      content_type: 'blog',
      locale: 'vi',
      title: post.title,
      slug: post.slug,
      content_text: flattenBlogPost(post),
      metadata: { author: post.author, date: post.date, tags: post.tags },
    });
  }
  for (const post of BLOG_EN) {
    docs.push({
      content_id: `blog-${post.slug}`,
      content_type: 'blog',
      locale: 'en',
      title: post.title,
      slug: post.slug,
      content_text: flattenBlogPost(post),
      metadata: { author: post.author, date: post.date, tags: post.tags },
    });
  }

  // Experts
  for (const expert of EXPERTS_VI) {
    docs.push({
      content_id: `expert-${expert.slug}`,
      content_type: 'expert',
      locale: 'vi',
      title: expert.name,
      slug: expert.slug,
      content_text: flattenExpert(expert),
      metadata: { category: expert.category, tags: expert.tags },
    });
  }
  for (const expert of EXPERTS_EN) {
    docs.push({
      content_id: `expert-${expert.slug}`,
      content_type: 'expert',
      locale: 'en',
      title: expert.name,
      slug: expert.slug,
      content_text: flattenExpert(expert),
      metadata: { category: expert.category, tags: expert.tags },
    });
  }

  return docs;
}

// --- Batch embed ---
async function batchEmbed(texts: string[]): Promise<number[][]> {
  const res = await openai.embeddings.create({
    model: EMBEDDING_MODEL,
    input: texts,
  });
  return res.data.map((d) => d.embedding);
}

// --- Main ---
async function main() {
  const docs = buildDocs();
  console.log(`Total documents to embed: ${docs.length}`);
  console.log(`  Knowledge: ${docs.filter(d => d.content_type === 'knowledge').length}`);
  console.log(`  Blog: ${docs.filter(d => d.content_type === 'blog').length}`);
  console.log(`  Expert: ${docs.filter(d => d.content_type === 'expert').length}`);
  console.log(`  VI: ${docs.filter(d => d.locale === 'vi').length}, EN: ${docs.filter(d => d.locale === 'en').length}`);
  console.log();

  let embedded = 0;
  let upserted = 0;

  for (let i = 0; i < docs.length; i += BATCH_SIZE) {
    const batch = docs.slice(i, i + BATCH_SIZE);
    const texts = batch.map((d) => d.content_text);

    console.log(`Embedding batch ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(docs.length / BATCH_SIZE)} (${batch.length} docs)...`);
    const embeddings = await batchEmbed(texts);
    embedded += batch.length;

    // Upsert to Supabase
    for (let j = 0; j < batch.length; j++) {
      const doc = batch[j];
      const embedding = embeddings[j];

      const { error } = await supabase
        .from('kb_embeddings')
        .upsert(
          {
            content_id: doc.content_id,
            locale: doc.locale,
            content_type: doc.content_type,
            title: doc.title,
            slug: doc.slug,
            content_text: doc.content_text,
            embedding: JSON.stringify(embedding),
            metadata: doc.metadata,
            updated_at: new Date().toISOString(),
          },
          { onConflict: 'content_id,locale' },
        );

      if (error) {
        console.error(`  Error upserting ${doc.content_id} (${doc.locale}):`, error.message);
      } else {
        upserted++;
      }
    }
  }

  console.log();
  console.log(`Done! Embedded: ${embedded}, Upserted: ${upserted}/${docs.length}`);

  // Verify count
  const { count } = await supabase
    .from('kb_embeddings')
    .select('id', { count: 'exact', head: true });
  console.log(`Total rows in kb_embeddings: ${count}`);
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
