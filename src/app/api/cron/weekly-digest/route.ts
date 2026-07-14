import { NextResponse, type NextRequest } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase-server';
import { sendEmail } from '@/lib/email';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 60;

interface ScenarioRow {
  id: string;
  user_id: string;
  name: string;
  model_key: string | null;
  updated_at: string;
  created_at: string;
  data: Record<string, unknown> | null;
}

interface MessageRow {
  user_id: string;
  content: string;
  role: string;
  created_at: string;
}

interface UserSummary {
  userId: string;
  email: string | null;
  locale: 'vi' | 'en';
  scenarios: ScenarioRow[];
  questionsAsked: number;
  lastMessage?: string;
}

function isAuthorized(req: NextRequest): boolean {
  // Vercel cron signs requests with CRON_SECRET or its own header. Accept either
  // a matching bearer token or Vercel's automatic auth header on production.
  const auth = req.headers.get('authorization') || '';
  const cronSecret = process.env.CRON_SECRET;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (cronSecret && auth === `Bearer ${cronSecret}`) return true;
  if (serviceKey && auth === `Bearer ${serviceKey}`) return true;
  // Vercel cron passes x-vercel-cron in production
  if (req.headers.get('x-vercel-cron')) return true;
  return false;
}

function iso(date: Date): string {
  return date.toISOString();
}

function renderEmail(summary: UserSummary): { subject: string; html: string } {
  const vi = summary.locale !== 'en';
  const scen = summary.scenarios[0];
  const scenName = scen?.name || (vi ? 'quán của bạn' : 'your shop');
  const questionCount = summary.questionsAsked;

  const insights: string[] = [];
  if (scen) {
    const d = scen.data as Record<string, unknown> | null;
    const rent = typeof d?.rent === 'number' ? d.rent : null;
    const cogsPct = typeof d?.cogsPct === 'number' ? d.cogsPct : null;
    if (cogsPct && cogsPct > 35) {
      insights.push(
        vi
          ? `⚠️ COGS ${cogsPct}% đang trên ngưỡng an toàn 35% — mỗi 1% cắt được ≈ 10% margin.`
          : `⚠️ COGS ${cogsPct}% is above the 35% safe threshold — every 1% cut ≈ 10% margin.`
      );
    }
    if (rent && rent > 30_000_000) {
      insights.push(
        vi
          ? `💰 Tiền thuê ${(rent / 1_000_000).toFixed(0)}tr/tháng — check rent ratio nên < 20% doanh thu.`
          : `💰 Rent VND ${(rent / 1_000_000).toFixed(0)}M/mo — rent ratio should stay under 20% of revenue.`
      );
    }
  }
  if (questionCount > 0) {
    insights.push(
      vi
        ? `📊 Tuần này bạn hỏi AI ${questionCount} câu — tiếp tục dùng để track cost + margin tuần tới.`
        : `📊 You asked AI ${questionCount} questions this week — keep using it to track cost + margin next week.`
    );
  }
  if (insights.length === 0) {
    insights.push(
      vi
        ? '💡 Chưa có scenario tuần này — mở Validator.vn để cập nhật số liệu.'
        : '💡 No scenario this week — open Validator.vn to update your numbers.'
    );
  }

  const subject = vi
    ? `📊 Validator: 3 insight cho ${scenName} tuần này`
    : `📊 Validator: 3 insights for ${scenName} this week`;

  const html = `
<!DOCTYPE html>
<html><body style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Arial,sans-serif;background:#F8FAFC;padding:20px;color:#0F172A;line-height:1.6;">
  <div style="max-width:560px;margin:0 auto;background:#FFF;border:2px solid #0F172A;border-radius:12px;box-shadow:3px 3px 0 #0F172A;padding:28px;">
    <div style="text-align:center;margin-bottom:20px;">
      <div style="font-size:11px;font-weight:700;letter-spacing:2px;color:#16A34A;text-transform:uppercase;">
        Weekly Digest · Validator.vn
      </div>
      <h1 style="font-size:22px;margin:8px 0 4px;">
        ${vi ? 'Insight cho' : 'Insights for'} <span style="color:#16A34A;">${scenName}</span>
      </h1>
      <p style="font-size:13px;color:#64748B;margin:0;">
        ${vi ? 'Tuần ' : 'Week of '}${new Date().toLocaleDateString(vi ? 'vi-VN' : 'en-US')}
      </p>
    </div>
    <div style="border-top:1px solid #E2E8F0;padding-top:20px;">
      ${insights
        .map(
          (i) => `<div style="background:#FAF3E3;border:1.5px solid #E2E8F0;border-radius:10px;padding:14px;margin-bottom:10px;font-size:14px;">${i}</div>`
        )
        .join('')}
    </div>
    <div style="text-align:center;margin-top:24px;">
      <a href="https://www.validator.vn?utm_source=weekly-digest&utm_medium=email&utm_campaign=proactive-insights" style="display:inline-block;background:#16A34A;color:#FFF;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:700;font-size:14px;border:2px solid #0F172A;box-shadow:2px 2px 0 #0F172A;">
        ${vi ? 'Mở Validator.vn' : 'Open Validator.vn'} →
      </a>
    </div>
    <p style="font-size:11px;color:#94A3B8;text-align:center;margin-top:20px;line-height:1.5;">
      ${vi ? 'Nhận vì bạn đã đăng ký monthly benchmark trên Validator.' : "You're receiving this because you subscribed to Validator's monthly benchmark."} <br>
      <a href="https://www.validator.vn/unsubscribe?email=${encodeURIComponent(summary.email || '')}" style="color:#64748B;">${vi ? 'Huỷ đăng ký' : 'Unsubscribe'}</a>
    </p>
  </div>
</body></html>
  `.trim();

  return { subject, html };
}

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  }

  const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

  try {
    // Users active this week (via chat messages or scenario updates)
    const [messagesRes, scenariosRes] = await Promise.all([
      supabaseAdmin
        .from('chat_messages')
        .select('user_id,content,role,created_at')
        .gte('created_at', iso(oneWeekAgo))
        .limit(1000),
      supabaseAdmin
        .from('scenarios')
        .select('id,user_id,name,model_key,updated_at,created_at,data')
        .order('updated_at', { ascending: false })
        .limit(1000),
    ]);

    if (messagesRes.error) throw messagesRes.error;
    if (scenariosRes.error) throw scenariosRes.error;

    const messages = (messagesRes.data ?? []) as MessageRow[];
    const scenarios = (scenariosRes.data ?? []) as ScenarioRow[];

    // Collect active user ids (any activity in last 7d)
    const activeUserIds = new Set<string>();
    for (const m of messages) if (m.user_id) activeUserIds.add(m.user_id);
    for (const s of scenarios) {
      if (s.user_id && new Date(s.updated_at) >= oneWeekAgo) activeUserIds.add(s.user_id);
    }

    if (activeUserIds.size === 0) {
      return NextResponse.json({ sent: 0, reason: 'no_active_users' });
    }

    // Fetch emails for active users from auth.users (admin API)
    const userRows = await Promise.all(
      Array.from(activeUserIds).map((uid) => supabaseAdmin.auth.admin.getUserById(uid))
    );

    const summaries: UserSummary[] = [];
    for (let i = 0; i < userRows.length; i++) {
      const r = userRows[i];
      const userId = Array.from(activeUserIds)[i];
      const email = r.data?.user?.email ?? null;
      if (!email) continue;

      const userMessages = messages.filter((m) => m.user_id === userId && m.role === 'user');
      const userScenarios = scenarios.filter((s) => s.user_id === userId).slice(0, 1);
      const localeGuess = (r.data?.user?.user_metadata?.locale === 'en' ? 'en' : 'vi') as 'vi' | 'en';

      summaries.push({
        userId,
        email,
        locale: localeGuess,
        scenarios: userScenarios,
        questionsAsked: userMessages.length,
        lastMessage: userMessages[0]?.content,
      });
    }

    // Send emails (sequential — avoid rate limits on Gmail)
    let sent = 0;
    const errors: string[] = [];
    for (const s of summaries) {
      try {
        const { subject, html } = renderEmail(s);
        await sendEmail(s.email!, subject, html);
        sent++;
      } catch (err) {
        errors.push(`${s.email}: ${err instanceof Error ? err.message : 'unknown'}`);
      }
    }

    return NextResponse.json({
      sent,
      total_active_users: activeUserIds.size,
      errors: errors.slice(0, 10),
    });
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : 'unknown' }, { status: 500 });
  }
}
