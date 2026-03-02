import { createClient } from '@supabase/supabase-js';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
  let body: { email?: string; source?: string; locale?: string; utm?: Record<string, string> };
  try { body = await request.json(); }
  catch { return Response.json({ error: 'invalid_body' }, { status: 400 }); }

  const email = (body.email ?? '').trim().toLowerCase();
  if (!EMAIL_RE.test(email)) {
    return Response.json({ error: 'invalid_email' }, { status: 400 });
  }

  const { error } = await supabase.from('email_subscribers').insert({
    email,
    source: body.source ?? 'footer',
    locale: body.locale ?? 'vi',
    utm_source: body.utm?.utm_source ?? null,
    utm_medium: body.utm?.utm_medium ?? null,
    utm_campaign: body.utm?.utm_campaign ?? null,
  });

  if (error) {
    if (error.code === '23505') {
      return Response.json({ error: 'already_subscribed' }, { status: 409 });
    }
    console.error('Subscribe error:', error);
    return Response.json({ error: 'server_error' }, { status: 500 });
  }

  return Response.json({ ok: true });
}
