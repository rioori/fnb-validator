/**
 * Newsletter send script — runs twice per week (Mon & Thu 8 AM).
 *
 * Run:  npx tsx -r tsconfig-paths/register scripts/send-newsletter.ts
 * Test: npx tsx -r tsconfig-paths/register scripts/send-newsletter.ts --test
 *
 * Prerequisites:
 *   .env.local: GMAIL_USER, GMAIL_APP_PASSWORD, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
 */
import { config } from 'dotenv';
config({ path: '.env.local' });

import { createClient } from '@supabase/supabase-js';
import { sendEmail } from '@/lib/email';
import { aggregateContent, hasContent } from '@/lib/newsletter-content';
import { renderNewsletter } from '@/lib/newsletter-template';
import * as fs from 'fs';
import * as path from 'path';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const isTest = process.argv.includes('--test');
const LOOKBACK_DAYS = 4; // Content lookback: covers gap between sends (Mon→Thu = 3d, Thu→Mon = 4d)

interface Subscriber {
  email: string;
  locale: string;
  unsubscribe_token: string;
}

async function getActiveSubscribers(): Promise<Subscriber[]> {
  if (isTest) {
    return [
      {
        email: process.env.GMAIL_USER!,
        locale: 'vi',
        unsubscribe_token: 'test-token',
      },
    ];
  }

  const { data, error } = await supabase
    .from('email_subscribers')
    .select('email, locale, unsubscribe_token')
    .eq('subscribed', true);

  if (error) {
    console.error('Error fetching subscribers:', error);
    return [];
  }

  return data ?? [];
}

function getSubject(locale: 'vi' | 'en'): string {
  const weekNum = Math.ceil(
    (new Date().getTime() - new Date(new Date().getFullYear(), 0, 1).getTime()) /
      (7 * 24 * 60 * 60 * 1000),
  );

  return locale === 'vi'
    ? `📊 Bản tin F&B — Tuần ${weekNum} | Validator.vn`
    : `📊 F&B Newsletter — Week ${weekNum} | Validator.vn`;
}

async function main() {
  console.log(`\n📧 Validator.vn Newsletter Sender${isTest ? ' (TEST MODE)' : ''}`);
  console.log('─'.repeat(50));

  // 1. Get subscribers
  const subscribers = await getActiveSubscribers();
  if (subscribers.length === 0) {
    console.log('⚠️  No active subscribers found.');
    return;
  }
  console.log(`📋 Found ${subscribers.length} subscriber(s)`);

  // 2. Aggregate content for both locales
  const contentVi = await aggregateContent('vi', LOOKBACK_DAYS);
  const contentEn = await aggregateContent('en', LOOKBACK_DAYS);

  if (!hasContent(contentVi) && !hasContent(contentEn)) {
    console.log(`📭 No new content in the last ${LOOKBACK_DAYS} days. Skipping send.`);
    return;
  }

  console.log(`📊 VI: ${contentVi.articles.length} articles, ${contentVi.blogPosts.length} blog posts`);
  console.log(`📊 EN: ${contentEn.articles.length} articles, ${contentEn.blogPosts.length} blog posts`);

  // 3. Send emails
  let successCount = 0;
  let errorCount = 0;

  for (const sub of subscribers) {
    const locale = (sub.locale === 'en' ? 'en' : 'vi') as 'vi' | 'en';
    const content = locale === 'en' ? contentEn : contentVi;
    const subject = getSubject(locale);

    const html = renderNewsletter({
      locale,
      content,
      unsubscribeToken: sub.unsubscribe_token,
    });

    try {
      await sendEmail(sub.email, subject, html);
      successCount++;
      console.log(`  ✅ ${sub.email} (${locale})`);

      // Update last_newsletter_sent
      if (!isTest) {
        await supabase
          .from('email_subscribers')
          .update({ last_newsletter_sent: new Date().toISOString() })
          .eq('email', sub.email);
      }
    } catch (err) {
      errorCount++;
      console.error(`  ❌ ${sub.email}:`, err instanceof Error ? err.message : err);
    }
  }

  // 4. Log to newsletter_sends table
  if (!isTest) {
    await supabase.from('newsletter_sends').insert({
      subject: getSubject('vi'),
      recipient_count: successCount,
      content_summary: {
        vi: { articles: contentVi.articles.length, blogPosts: contentVi.blogPosts.length },
        en: { articles: contentEn.articles.length, blogPosts: contentEn.blogPosts.length },
      },
      status: errorCount === 0 ? 'sent' : 'partial',
    });
  }

  // 5. Write log file
  const today = new Date().toISOString().slice(0, 10);
  const logDir = path.resolve(__dirname, '../content-research/logs');
  if (!fs.existsSync(logDir)) fs.mkdirSync(logDir, { recursive: true });

  const logContent = `# Newsletter Send Log — ${today}

## Summary
- **Mode:** ${isTest ? 'TEST' : 'PRODUCTION'}
- **Subscribers:** ${subscribers.length}
- **Sent:** ${successCount} | **Failed:** ${errorCount}
- **Period:** ${contentVi.period.from} → ${contentVi.period.to}

## Content (VI)
- Articles: ${contentVi.articles.map((a) => a.title).join(', ') || 'none'}
- Blog posts: ${contentVi.blogPosts.map((p) => p.title).join(', ') || 'none'}

## Content (EN)
- Articles: ${contentEn.articles.map((a) => a.title).join(', ') || 'none'}
- Blog posts: ${contentEn.blogPosts.map((p) => p.title).join(', ') || 'none'}
`;

  fs.writeFileSync(path.join(logDir, `newsletter-${today}.md`), logContent, 'utf-8');

  console.log('\n─'.repeat(50));
  console.log(`✅ Done! Sent: ${successCount}, Failed: ${errorCount}`);
  console.log(`📄 Log: content-research/logs/newsletter-${today}.md`);
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
