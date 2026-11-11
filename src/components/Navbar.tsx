import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Volume2, VolumeX } from 'lucide-react';

export type AppRoute = '/' | '/about' | '/contact';

interface NavbarProps {
  soundEnabled: boolean;
  onToggleSound: () => void;
  playClickSound?: () => void;
  currentRoute?: AppRoute;
  onNavigate?: (route: AppRoute, hash?: string) => void;
}

interface NavLinkItem {
  name: string;
  href: string;
  id: string;
  route: AppRoute;
  hash?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  soundEnabled,
  onToggleSound,
  playClickSound,
  currentRoute = '/',
  onNavigate,
}) => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: NavLinkItem[] = [
    { name: 'HOME', href: '/', id: 'home', route: '/' },
    { name: 'WORK', href: '/#work', id: 'work', route: '/', hash: '#work' },
    { name: 'LEADERSHIP', href: '/#experience', id: 'experience', route: '/', hash: '#experience' },
    { name: 'CREATOR', href: '/#creator', id: 'creator', route: '/', hash: '#creator' },
    { name: 'ABOUT', href: '/about', id: 'about', route: '/about' },
    { name: 'CONTACT', href: '/contact', id: 'contact', route: '/contact' },
  ];

  // Track scroll position & active page/section
  useEffect(() => {
    if (currentRoute === '/about') {
      setActiveSection('about');
    } else if (currentRoute === '/contact') {
      setActiveSection('contact');
    } else {
      setActiveSection('home');
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      if (currentRoute !== '/') {
        return;
      }

      const sections = ['home', 'brands', 'work', 'experience', 'creator', 'institutional', 'social', 'about', 'skills', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentRoute]);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
    route: AppRoute,
    hash?: string
  ) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      return;
    }
    e.preventDefault();
    playClickSound?.();
    setActiveSection(id);
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(route, hash);
    } else if (hash) {
      window.location.href = `${route}${hash}`;
    } else {
      window.location.href = route;
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-4 px-4 sm:px-8 ${
          scrolled ? 'pt-2 sm:pt-3' : 'pt-4 sm:pt-6'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <nav
            aria-label="Primary navigation"
            className="glass-panel rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between shadow-xs border border-[#DCCBFA]/70 transition-all duration-300"
          >
            {/* Left: Brand Identity with Official CP Logo */}
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, 'home', '/')}
              className="flex items-center gap-2.5 sm:gap-3 group cursor-pointer"
              data-cursor="HOME"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#17151B] border border-[#C9A45C]/60 p-1 flex items-center justify-center overflow-hidden shadow-xs group-hover:border-[#C9A45C] group-hover:scale-105 transition-all duration-300 shrink-0">
                <img
                  src="/images/logo/logo.jpg"
                  alt="MR. PAVAN CREATION Official Logo"
                  className="w-full h-full object-contain scale-[1.35] filter drop-shadow-[0_2px_6px_rgba(201,164,92,0.4)]"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold tracking-wider text-xs sm:text-sm text-[#17151B] flex items-center gap-1.5 whitespace-nowrap">
                  MR. PAVAN CREATION
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C] animate-pulse shrink-0" />
                </span>
                <span className="text-[9px] font-mono tracking-widest text-[#77717F] -mt-0.5 hidden sm:block whitespace-nowrap">
                  VIDEO EDITOR & STORYTELLER
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive =
                  currentRoute === '/about'
                    ? link.id === 'about'
                    : currentRoute === '/contact'
                    ? link.id === 'contact'
                    : activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.id, link.route, link.hash)}
                    aria-current={
                      (link.route === '/about' && currentRoute === '/about') ||
                      (link.route === '/contact' && currentRoute === '/contact') ||
                      (link.id === 'home' && currentRoute === '/' && activeSection === 'home')
                        ? 'page'
                        : undefined
                    }
                    data-cursor={link.name}
                    className={`relative px-3.5 py-1.5 text-xs font-mono tracking-wider transition-colors duration-200 rounded-full ${
                      isActive
                        ? 'text-[#17151D] font-semibold'
                        : 'text-[#77717F] hover:text-[#17151D]'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavPill"
                        className="absolute inset-0 bg-[#EAE0FF] border border-[#A88BEA]/50 rounded-full -z-10 shadow-xs"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {link.name}
                  </a>
                );
              })}
            </div>

            {/* Right: Sound Toggle & Quick Action CTA */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Sound Toggle */}
              <button
                type="button"
                onClick={() => {
                  onToggleSound();
                  playClickSound?.();
                }}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#77717F] hover:text-[#17151D] hover:bg-[#EAE0FF] transition-colors border border-transparent hover:border-[#DCCBFA]"
                title={soundEnabled ? 'Mute ambient SFX' : 'Enable ambient SFX'}
                aria-label={soundEnabled ? 'Mute ambient SFX' : 'Enable ambient SFX'}
                data-cursor="SOUND"
              >
                {soundEnabled ? (
                  <Volume2 className="w-4 h-4 text-[#6C41CE]" />
                ) : (
                  <VolumeX className="w-4 h-4 opacity-60" />
                )}
              </button>

              {/* Direct Let's Collaborate CTA */}
              <a
                href="/contact"
                onClick={(e) => handleLinkClick(e, 'contact', '/contact')}
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono font-medium tracking-wide bg-[#17151D] text-[#F5F0FA] px-4 py-2 rounded-full hover:bg-[#6C41CE] transition-all duration-300 group shadow-xs whitespace-nowrap shrink-0"
                data-cursor="HIRE"
              >
                <span>LET'S TALK</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Mobile / Tablet Menu Hamburger */}
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(!mobileMenuOpen);
                  playClickSound?.();
                }}
                className="lg:hidden w-9 h-9 rounded-full flex items-center justify-center text-[#17151D] bg-[#EAE0FF]/80 hover:bg-[#DCCBFA] transition-colors border border-[#DCCBFA] shrink-0"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile / Tablet Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 top-20 z-40 lg:hidden glass-panel rounded-2xl p-6 shadow-xl border border-[#DCCBFA]"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link, idx) => {
                const isActive =
                  currentRoute === '/about'
                    ? link.id === 'about'
                    : currentRoute === '/contact'
                    ? link.id === 'contact'
                    : activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.id, link.route, link.hash)}
                    className={`flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-mono tracking-wider transition-colors ${
                      isActive
                        ? 'bg-[#EAE0FF] text-[#17151D] font-bold'
                        : 'text-[#77717F] hover:bg-white/60 hover:text-[#17151D]'
                    }`}
                  >
                    <span>{link.name}</span>
                    <span className="text-[10px] text-[#A88BEA]">0{idx + 1}</span>
                  </a>
                );
              })}

              <div className="pt-3 border-t border-[#DCCBFA]/60 flex items-center justify-between">
                <span className="text-xs font-mono text-[#77717F]">PUNE, INDIA</span>
                <a
                  href="/contact"
                  onClick={(e) => handleLinkClick(e, 'contact', '/contact')}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium tracking-wide bg-[#17151D] text-[#F5F0FA] px-4 py-2 rounded-full"
                >
                  LET'S COLLABORATE
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
