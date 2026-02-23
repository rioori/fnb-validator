'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { track } from '@vercel/analytics';
import Image from 'next/image';
import Icon from '@/components/ui/Icon';
import { useTranslation } from '@/i18n/LocaleProvider';
import { localePath } from '@/i18n/link';
import type { Locale } from '@/i18n/config';
import HeroSection from './HeroSection';
import FeatureCards from './FeatureCards';
import QuickCalc from './QuickCalc';
import AboutAuthor from './AboutAuthor';
import StoriesPage from './StoriesPage';
import ChecklistPage from './ChecklistPage';
import TrendsPage from './TrendsPage';
import WhyFnBPage from './WhyFnBPage';
import AIChatPage from './AIChatPage';
import Footer from './Footer';

export type HomeView = 'main' | 'quick-calc' | 'knowledge' | 'about' | 'stories' | 'checklist' | 'trends' | 'why-fnb' | 'ai-chat';

const VALID_VIEWS = new Set<string>([
  'main', 'quick-calc', 'knowledge', 'about', 'stories',
  'checklist', 'trends', 'why-fnb', 'ai-chat',
]);

export default function HomePage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { locale } = useTranslation();
  const viewParam = searchParams.get('view');
  const [view, setView] = useState<HomeView>(
    viewParam && VALID_VIEWS.has(viewParam) ? (viewParam as HomeView) : 'main',
  );

  // Redirect ?view=knowledge to /kien-thuc route
  useEffect(() => {
    if (viewParam === 'knowledge') {
      router.replace(localePath('/kien-thuc', locale as Locale));
      return;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewParam]);

  // Clean URL after consuming the ?view= param
  useEffect(() => {
    if (viewParam && VALID_VIEWS.has(viewParam) && viewParam !== 'knowledge') {
      window.history.replaceState({}, '', window.location.pathname);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    track('page_view', { page: view });
  }, [view]);

  if (view !== 'main') {
    return (
      <div>
        {/* Sub-page header with logo */}
        <div className="clay-card-static bg-pastel-cream py-2.5 px-6 mb-4 text-center relative max-md:py-2 max-md:px-5">
          <button
            onClick={() => setView('main')}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border-2 border-text bg-white flex items-center justify-center text-[16px] hover:bg-surface3 transition-colors cursor-pointer shadow-[2px_2px_0_var(--color-text)]"
            title="Về trang chủ"
          >
            <Icon name="home" size={20} className="!border-0 !shadow-none !bg-transparent" />
          </button>
          <Image src="/logo.png" alt="Validator.vn" width={56} height={56} className="mx-auto" />
        </div>

        {view === 'quick-calc' && <QuickCalc />}
        {view === 'about' && <AboutAuthor />}
        {view === 'stories' && <StoriesPage />}
        {view === 'checklist' && <ChecklistPage />}
        {view === 'trends' && <TrendsPage />}
        {view === 'why-fnb' && <WhyFnBPage />}
        {view === 'ai-chat' && <AIChatPage />}
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <HeroSection onNavigate={setView} />
      <FeatureCards onNavigate={setView} />
      <Footer />
    </div>
  );
}
