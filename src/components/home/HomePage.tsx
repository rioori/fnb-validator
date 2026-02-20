'use client';

import { useState, useEffect } from 'react';
import { track } from '@vercel/analytics';
import Image from 'next/image';
import Icon from '@/components/ui/Icon';
import HeroSection from './HeroSection';
import FeatureCards from './FeatureCards';
import QuickCalc from './QuickCalc';
import KnowledgeSection from './KnowledgeSection';
import AboutAuthor from './AboutAuthor';
import StoriesPage from './StoriesPage';
import ChecklistPage from './ChecklistPage';
import TrendsPage from './TrendsPage';
import WhyFnBPage from './WhyFnBPage';
import AIChatPage from './AIChatPage';
import Footer from './Footer';

export type HomeView = 'main' | 'quick-calc' | 'knowledge' | 'about' | 'stories' | 'checklist' | 'trends' | 'why-fnb' | 'ai-chat';

export default function HomePage() {
  const [view, setView] = useState<HomeView>('main');

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
          <Image src="/logo.png" alt="F&B Validator" width={80} height={50} className="mx-auto" />
        </div>

        {view === 'quick-calc' && <QuickCalc />}
        {view === 'knowledge' && <KnowledgeSection />}
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
