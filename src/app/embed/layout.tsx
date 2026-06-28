import { Montserrat, Roboto } from 'next/font/google';
import '../globals.css';

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

export default function EmbedLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${montserrat.variable} ${roboto.variable}`}>
      <body className="antialiased font-[family-name:var(--font-body)]">
        {children}
      </body>
    </html>
  );
}
