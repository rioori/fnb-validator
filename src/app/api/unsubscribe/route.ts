import { createClient } from '@supabase/supabase-js';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get('token');
  if (!token) {
    return Response.json({ error: 'missing_token' }, { status: 400 });
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );

  const { data, error } = await supabase
    .from('email_subscribers')
    .update({ subscribed: false })
    .eq('unsubscribe_token', token)
    .select('email')
    .single();

  if (error || !data) {
    // Redirect to unsubscribe page with error
    return Response.redirect(new URL('/unsubscribe?status=invalid', request.url));
  }

  // Redirect to unsubscribe confirmation page
  return Response.redirect(new URL('/unsubscribe?status=success', request.url));
}
