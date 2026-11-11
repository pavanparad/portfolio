import React, { useState, useEffect, useCallback } from 'react';
import { MotionConfig } from 'framer-motion';
import { Navbar, AppRoute } from './components/Navbar';
import { Hero } from './components/Hero';
import { Collaborations } from './components/Collaborations';
import { ClientProjects } from './components/ClientProjects';
import { VeloxxShowcase } from './components/VeloxxShowcase';
import { ShuttleclubShowcase } from './components/ShuttleclubShowcase';
import { ExperienceLeadership } from './components/ExperienceLeadership';
import { PulzionShowcase } from './components/PulzionShowcase';
import { StriverShowcase } from './components/StriverShowcase';
import { AddictionShowcase } from './components/AddictionShowcase';
import { PersonalCreatorWork } from './components/PersonalCreatorWork';
import { SocialMediaContent } from './components/SocialMediaContent';
import { InstitutionalProject } from './components/InstitutionalProject';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { BackgroundElements } from './components/BackgroundElements';
import { LoadingIntro } from './components/LoadingIntro';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

const resolveRouteFromLocation = (): AppRoute => {
  if (typeof window === 'undefined') return '/';
  const params = new URLSearchParams(window.location.search);
  const viewParam = params.get('view')?.toLowerCase();
  if (viewParam === 'about') return '/about';
  if (viewParam === 'contact') return '/contact';

  const normalizedPath = window.location.pathname.replace(/\/+$/, '').toLowerCase() || '/';
  if (normalizedPath === '/about') return '/about';
  if (normalizedPath === '/contact') return '/contact';
  return '/';
};

export const App: React.FC = () => {
  const isWorkPreview = typeof window !== 'undefined' && window.location.search.includes('view=work');
  const isBrandsPreview = typeof window !== 'undefined' && window.location.search.includes('view=brands');
  const isExperiencePreview = typeof window !== 'undefined' && window.location.search.includes('view=experience');
  const isCreatorPreview = typeof window !== 'undefined' && window.location.search.includes('view=creator');
  const isSocialPreview = typeof window !== 'undefined' && window.location.search.includes('view=social');
  const isInstitutionalPreview = typeof window !== 'undefined' && window.location.search.includes('view=institutional');
  const isVeloxxPreview = typeof window !== 'undefined' && window.location.search.includes('view=veloxx');
  const isShuttleclubPreview = typeof window !== 'undefined' && window.location.search.includes('view=shuttleclub');
  const isPulzionPreview = typeof window !== 'undefined' && window.location.search.includes('view=pulzion');
  const isStriverPreview = typeof window !== 'undefined' && window.location.search.includes('view=striver');
  const isAddictionPreview = typeof window !== 'undefined' && window.location.search.includes('view=addiction');

  const hasSpecificView =
    isWorkPreview ||
    isBrandsPreview ||
    isExperiencePreview ||
    isCreatorPreview ||
    isSocialPreview ||
    isInstitutionalPreview ||
    isVeloxxPreview ||
    isShuttleclubPreview ||
    isPulzionPreview ||
    isStriverPreview ||
    isAddictionPreview;

  const [currentRoute, setCurrentRoute] = useState<AppRoute>(() => resolveRouteFromLocation());

  const [introComplete, setIntroComplete] = useState<boolean>(() => {
    // If navigating directly to a page, hash or query param, skip intro for seamless load
    if (
      typeof window !== 'undefined' &&
      (window.location.hash ||
        window.location.search.includes('nointro') ||
        hasSpecificView ||
        resolveRouteFromLocation() !== '/')
    ) {
      return true;
    }
    return false;
  });

  // Normalize trailing slash on sub-routes so direct visits like /about/ resolve cleanly
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const rawPath = window.location.pathname;
    if (rawPath.length > 1 && rawPath.endsWith('/')) {
      const cleanPath = rawPath.replace(/\/+$/, '') || '/';
      window.history.replaceState(
        window.history.state,
        '',
        `${cleanPath}${window.location.search}${window.location.hash}`
      );
    }
  }, []);

  // Synchronize document title with active route
  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (currentRoute === '/about') {
      document.title = 'ABOUT — MR. PAVAN CREATION | Creative Video Editor & Visual Storyteller';
    } else if (currentRoute === '/contact') {
      document.title = 'CONTACT — MR. PAVAN CREATION | Creative Collaborations';
    } else {
      document.title = 'MR. PAVAN CREATION — Video Editor & Visual Storyteller';
    }
  }, [currentRoute]);

  const scrollToHashTarget = useCallback((hash?: string) => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }
    const attemptScroll = () => {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        return true;
      }
      return false;
    };
    if (!attemptScroll()) {
      setTimeout(attemptScroll, 120);
    }
  }, []);

  const navigateTo = useCallback(
    (route: AppRoute, hash?: string) => {
      if (typeof window === 'undefined') return;
      const targetUrl = hash ? `${route}${hash}` : route;
      const currentFullUrl = `${window.location.pathname}${window.location.hash}`;
      if (currentFullUrl !== targetUrl) {
        window.history.pushState({ route }, '', targetUrl);
      }
      setCurrentRoute(route);
      if (hash) {
        setTimeout(() => scrollToHashTarget(hash), 60);
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    },
    [scrollToHashTarget]
  );

  // Sync browser Back/Forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const nextRoute = resolveRouteFromLocation();
      setCurrentRoute(nextRoute);
      if (window.location.hash) {
        setTimeout(() => scrollToHashTarget(window.location.hash), 80);
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [scrollToHashTarget]);

  useEffect(() => {
    if (introComplete && currentRoute === '/' && window.location.hash) {
      const target = document.querySelector(window.location.hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'auto' });
        }, 150);
      }
    }
  }, [introComplete, currentRoute]);

  const [soundEnabled, setSoundEnabled] = useState<boolean>(() => {
    return localStorage.getItem('mpc_sound') === 'true';
  });

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    localStorage.setItem('mpc_sound', String(next));
  };

  const handleIntroComplete = () => {
    setIntroComplete(true);
  };

  // Web Audio subtle click synthesizer
  const playClickSound = () => {
    if (!soundEnabled) return;
    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(350, ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch {
      // AudioContext policy handled gracefully
    }
  };

  // Preview Mode Handlers for Isolated Testing
  if (isBrandsPreview) {
    return (
      <div className="relative min-h-screen selection:bg-[#DCCCF5] selection:text-[#17151B] text-[#17151B] font-sans antialiased overflow-x-hidden bg-[#F5F0FA]">
        <Collaborations playClickSound={playClickSound} />
      </div>
    );
  }

  if (isWorkPreview) {
    return (
      <div className="relative min-h-screen selection:bg-[#DCCCF5] selection:text-[#17151B] text-[#17151B] font-sans antialiased overflow-x-hidden bg-[#F5F0FA]">
        <ClientProjects playClickSound={playClickSound} />
      </div>
    );
  }

  if (isVeloxxPreview) {
    return (
      <div className="relative min-h-screen selection:bg-[#DCCCF5] selection:text-[#17151B] text-[#17151B] font-sans antialiased overflow-x-hidden bg-[#F5F0FA] p-4 sm:p-8 lg:p-12">
        <div className="max-w-7xl mx-auto">
          <VeloxxShowcase playClickSound={playClickSound} />
        </div>
      </div>
    );
  }

  if (isShuttleclubPreview) {
    return (
      <div className="relative min-h-screen selection:bg-[#DCCCF5] selection:text-[#17151B] text-[#17151B] font-sans antialiased overflow-x-hidden bg-[#F5F0FA] p-4 sm:p-8 lg:p-12">
        <div className="max-w-7xl mx-auto">
          <ShuttleclubShowcase playClickSound={playClickSound} />
        </div>
      </div>
    );
  }

  if (isExperiencePreview) {
    return (
      <div className="relative min-h-screen selection:bg-[#DCCCF5] selection:text-[#17151B] text-[#17151B] font-sans antialiased overflow-x-hidden bg-[#F5F0FA]">
        <ExperienceLeadership playClickSound={playClickSound} />
      </div>
    );
  }

  if (isPulzionPreview) {
    return (
      <div className="relative min-h-screen selection:bg-[#DCCCF5] selection:text-[#17151B] text-[#17151B] font-sans antialiased overflow-x-hidden bg-[#F5F0FA] p-4 sm:p-8 lg:p-12">
        <div className="max-w-7xl mx-auto">
          <PulzionShowcase playClickSound={playClickSound} />
        </div>
      </div>
    );
  }

  if (isStriverPreview) {
    return (
      <div className="relative min-h-screen selection:bg-[#DCCCF5] selection:text-[#17151B] text-[#17151B] font-sans antialiased overflow-x-hidden bg-[#F5F0FA] p-4 sm:p-8 lg:p-12">
        <div className="max-w-7xl mx-auto">
          <StriverShowcase playClickSound={playClickSound} />
        </div>
      </div>
    );
  }

  if (isAddictionPreview) {
    return (
      <div className="relative min-h-screen selection:bg-[#DCCCF5] selection:text-[#17151B] text-[#17151B] font-sans antialiased overflow-x-hidden bg-[#F5F0FA] p-3 sm:p-8 lg:p-12">
        <div className="max-w-7xl mx-auto">
          <AddictionShowcase playClickSound={playClickSound} />
        </div>
      </div>
    );
  }

  if (isCreatorPreview) {
    return (
      <div className="relative min-h-screen selection:bg-[#DCCCF5] selection:text-[#17151B] text-[#17151B] font-sans antialiased overflow-x-hidden bg-[#17151B]">
        <PersonalCreatorWork playClickSound={playClickSound} />
      </div>
    );
  }

  if (isSocialPreview) {
    return (
      <div className="relative min-h-screen selection:bg-[#DCCCF5] selection:text-[#17151B] text-[#17151B] font-sans antialiased overflow-x-hidden bg-[#F5F0FA]">
        <SocialMediaContent playClickSound={playClickSound} />
      </div>
    );
  }

  if (isInstitutionalPreview) {
    return (
      <div className="relative min-h-screen selection:bg-[#DCCCF5] selection:text-[#17151B] text-[#17151B] font-sans antialiased overflow-x-hidden bg-[#F5F0FA]">
        <InstitutionalProject playClickSound={playClickSound} />
      </div>
    );
  }

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen selection:bg-[#DCCCF5] selection:text-[#17151B] text-[#17151B] font-sans antialiased overflow-x-hidden bg-[#F5F0FA]">
        {/* 0. Premium Logo Reveal Intro on Page Load */}
        {!introComplete && <LoadingIntro onComplete={handleIntroComplete} />}

        {/* 1. Custom Pixel / Editorial Reticle Cursor */}
        <CustomCursor />

        {/* 2. Ambient Lavender & Grid Background Elements */}
        <BackgroundElements />

        {/* 3. Floating Navbar with Official Logo */}
        <Navbar
          soundEnabled={soundEnabled}
          onToggleSound={toggleSound}
          playClickSound={playClickSound}
          currentRoute={currentRoute}
          onNavigate={navigateTo}
        />

        {/* 4. Route View Switch: Dedicated /about, /contact, or Complete Homepage */}
        <main className="relative z-10 flex flex-col">
          {currentRoute === '/about' ? (
            <AboutPage onNavigate={navigateTo} playClickSound={playClickSound} />
          ) : currentRoute === '/contact' ? (
            <ContactPage playClickSound={playClickSound} />
          ) : (
            <>
              {/* Hero / Introduction with Surreal Head-Burst Collage */}
              <Hero playClickSound={playClickSound} />

              {/* SECTION 1: Brands & Organizations (VELOXX CLUB & SHUTTLECLUB only) */}
              <Collaborations playClickSound={playClickSound} />

              {/* SECTION 2: Client Projects (VELOXX CLUB & SHUTTLECLUB Separate Showcases) */}
              <ClientProjects playClickSound={playClickSound} />

              {/* SECTION 3: Experience & Leadership (PICT ACM - PASC & PICT ADDICTION'26) */}
              <ExperienceLeadership playClickSound={playClickSound} />

              {/* SECTION 4: Personal Creator Work (PAVAN ARTS — 5.2M+ Views & Three Viral Reels) */}
              <PersonalCreatorWork playClickSound={playClickSound} />

              {/* SECTION 5: Institutional Projects (PICT Official Promotional Film) */}
              <InstitutionalProject playClickSound={playClickSound} />

              {/* SECTION 6: Social Media Content ("CONTENT THAT CONNECTS" & 4 Category Filters) */}
              <SocialMediaContent playClickSound={playClickSound} />

              {/* About Me — Behind the Frame */}
              <About playClickSound={playClickSound} />

              {/* Software & Creative Skills */}
              <Skills playClickSound={playClickSound} />

              {/* Contact */}
              <Contact playClickSound={playClickSound} />
            </>
          )}
        </main>

        {/* 5. Footer with Prominent Official Logo Display */}
        <Footer playClickSound={playClickSound} />
      </div>
    </MotionConfig>
  );
};

export default App;
