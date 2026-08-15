import 'server-only';
import { supabaseAdmin } from './supabase-server';

const BUCKET = 'news-images';

export interface UploadResult {
  publicUrl: string;
  path: string;
}

export async function uploadCoverImage(bytes: Buffer, mimeType: string, slug: string): Promise<UploadResult | null> {
  const ext = mimeType.includes('png') ? 'png' : mimeType.includes('webp') ? 'webp' : 'jpg';
  const path = `${slug}-${Date.now()}.${ext}`;

  const { error } = await supabaseAdmin.storage.from(BUCKET).upload(path, bytes, {
    contentType: mimeType,
    cacheControl: '31536000',
    upsert: false,
  });
  if (error) {
    console.error('news-image upload:', error.message);
    return null;
  }

  const { data } = supabaseAdmin.storage.from(BUCKET).getPublicUrl(path);
  return { publicUrl: data.publicUrl, path };
}

// Download a remote stock URL, re-host in bucket so it survives if the source disappears.
export async function mirrorRemoteImage(remoteUrl: string, slug: string): Promise<UploadResult | null> {
  try {
    const res = await fetch(remoteUrl, { signal: AbortSignal.timeout(20000) });
    if (!res.ok) return null;
    const contentType = res.headers.get('content-type') || 'image/jpeg';
    const buf = Buffer.from(await res.arrayBuffer());
    // Cap: 5MB storage bucket limit
    if (buf.byteLength > 5 * 1024 * 1024) return null;
    return uploadCoverImage(buf, contentType, slug);
  } catch (err) {
    console.error('mirrorRemoteImage:', err instanceof Error ? err.message : err);
    return null;
  }
}
