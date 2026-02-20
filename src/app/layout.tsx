import type { Metadata } from 'next';
import { Montserrat, Roboto } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin', 'latin-ext', 'vietnamese'],
  variable: '--font-heading',
  weight: ['400', '500', '600', '700', '800'],
});

const roboto = Roboto({
  subsets: ['latin', 'latin-ext', 'vietnamese'],
  variable: '--font-body',
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'F&B Validator — Kiểm tra ý tưởng kinh doanh F&B',
  description: 'Validate ý tưởng kinh doanh ẩm thực trong 5 phút. Phân tích tài chính, break-even, scoring cho 8 mô hình F&B phổ biến tại Việt Nam.',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${montserrat.variable} ${roboto.variable} antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
