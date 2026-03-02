import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase-server';

export const revalidate = 3600; // cache 1 hour

export async function GET() {
  const [scenarios, subscribers] = await Promise.all([
    supabaseAdmin.from('scenarios').select('id', { count: 'exact', head: true }),
    supabaseAdmin.from('email_subscribers').select('id', { count: 'exact', head: true }),
  ]);

  const validations = scenarios.count ?? 0;
  const subs = subscribers.count ?? 0;

  return NextResponse.json({ validations, subscribers: subs });
}
