import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase-server';

export const revalidate = 3600; // cache 1 hour

interface ScenarioDataShape {
  data?: {
    getTotalInvestment?: number;
    totalInvestment?: number;
    budget?: number;
    rent?: number;
  } | null;
}

export async function GET() {
  const [scenariosMeta, subscribers, chatMessages, scenariosFull] = await Promise.all([
    supabaseAdmin.from('scenarios').select('id', { count: 'exact', head: true }),
    supabaseAdmin.from('email_subscribers').select('id', { count: 'exact', head: true }),
    supabaseAdmin.from('chat_messages').select('id', { count: 'exact', head: true }),
    supabaseAdmin.from('scenarios').select('data').limit(1000),
  ]);

  const validations = scenariosMeta.count ?? 0;
  const subs = subscribers.count ?? 0;
  const messages = chatMessages.count ?? 0;

  // Sum total investment analyzed across all saved scenarios
  let totalVndAnalyzed = 0;
  const rows = (scenariosFull.data ?? []) as ScenarioDataShape[];
  for (const row of rows) {
    const d = row.data;
    if (!d) continue;
    const inv = d.totalInvestment ?? d.budget ?? 0;
    if (typeof inv === 'number' && inv > 0) totalVndAnalyzed += inv;
  }

  return NextResponse.json({
    validations,
    subscribers: subs,
    messages,
    totalVndAnalyzed,
  });
}
