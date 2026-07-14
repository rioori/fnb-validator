import { NextResponse, type NextRequest } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase-server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function isAuthorized(req: NextRequest): boolean {
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!serviceKey) return false;
  const auth = req.headers.get('authorization') || '';
  const bearer = auth.replace(/^Bearer\s+/i, '').trim();
  const query = req.nextUrl.searchParams.get('key')?.trim() || '';
  return bearer === serviceKey || query === serviceKey;
}

function startOfWeekUTC(offsetWeeks: number): Date {
  const now = new Date();
  const day = now.getUTCDay();
  const monday = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() - ((day + 6) % 7)));
  monday.setUTCDate(monday.getUTCDate() - offsetWeeks * 7);
  monday.setUTCHours(0, 0, 0, 0);
  return monday;
}

interface UserRow { user_id: string | null; created_at: string }

async function fetchAll(table: 'chat_messages' | 'chat_sessions' | 'scenarios', since: string): Promise<UserRow[]> {
  const { data, error } = await supabaseAdmin
    .from(table)
    .select('user_id,created_at')
    .gte('created_at', since)
    .limit(50000);
  if (error) throw error;
  return (data ?? []) as UserRow[];
}

interface WeekBucket {
  weekStart: string;
  weekLabel: string;
  wau: number;
  chatUsers: number;
  scenarioUsers: number;
  totalChatMessages: number;
  totalScenarios: number;
  totalSessions: number;
}

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  }

  const weeksParam = Number(req.nextUrl.searchParams.get('weeks') || 8);
  const weeks = Math.min(Math.max(weeksParam, 1), 26);
  const since = startOfWeekUTC(weeks).toISOString();

  try {
    const [messages, sessions, scenarios] = await Promise.all([
      fetchAll('chat_messages', since),
      fetchAll('chat_sessions', since),
      fetchAll('scenarios', since),
    ]);

    const buckets: WeekBucket[] = [];
    for (let w = weeks - 1; w >= 0; w--) {
      const weekStart = startOfWeekUTC(w);
      const weekEnd = new Date(weekStart.getTime() + 7 * 24 * 60 * 60 * 1000);
      const inWindow = (r: UserRow) => {
        const t = new Date(r.created_at).getTime();
        return t >= weekStart.getTime() && t < weekEnd.getTime();
      };
      const chatRows = messages.filter(inWindow);
      const scenarioRows = scenarios.filter(inWindow);
      const sessionRows = sessions.filter(inWindow);

      const chatUserSet = new Set(chatRows.map((r) => r.user_id).filter(Boolean) as string[]);
      const scenarioUserSet = new Set(scenarioRows.map((r) => r.user_id).filter(Boolean) as string[]);
      const wauSet = new Set<string>([...chatUserSet, ...scenarioUserSet]);

      const mm = String(weekStart.getUTCMonth() + 1).padStart(2, '0');
      const dd = String(weekStart.getUTCDate()).padStart(2, '0');

      buckets.push({
        weekStart: weekStart.toISOString().slice(0, 10),
        weekLabel: `${dd}/${mm}`,
        wau: wauSet.size,
        chatUsers: chatUserSet.size,
        scenarioUsers: scenarioUserSet.size,
        totalChatMessages: chatRows.length,
        totalScenarios: scenarioRows.length,
        totalSessions: sessionRows.length,
      });
    }

    const current = buckets[buckets.length - 1];
    const previous = buckets[buckets.length - 2];
    const wowDelta = previous && previous.wau > 0
      ? Math.round(((current.wau - previous.wau) / previous.wau) * 100)
      : null;

    return NextResponse.json({
      generatedAt: new Date().toISOString(),
      windowWeeks: weeks,
      currentWau: current?.wau ?? 0,
      wowDeltaPct: wowDelta,
      target: 20,
      sustainedTargetWeeks: 3,
      buckets,
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'unknown error';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
