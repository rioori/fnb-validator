import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin · Validator',
  robots: { index: false, follow: false, noarchive: true, nosnippet: true },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <div style={{ background: '#f8fafc', minHeight: '100vh' }}>{children}</div>;
}
