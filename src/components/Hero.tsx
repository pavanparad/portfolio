import React from 'react';
import { ArrowUpRight, Sparkles, MapPin, Play } from 'lucide-react';

interface HeroProps {
  playClickSound?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ playClickSound }) => {
  return (
    <section
      id="home"
      style={{ minHeight: 'min(90vh, 900px)' }}
      className="relative pt-24 sm:pt-28 pb-16 lg:pb-24 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#D4C2FA] via-[#DBCFFB] to-[#F5F0FA]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full">
        {/* Asymmetric 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ================= LEFT SIDE: Official Complete Head-Burst Artwork ================= */}
          <div className="lg:col-span-6 xl:col-span-6 order-2 lg:order-1 flex justify-center items-center">
            <div className="relative w-full max-w-[460px] sm:max-w-[540px] lg:max-w-[620px] xl:max-w-[680px] flex items-center justify-center">
              
              {/* The User's Exact Complete Head-Burst Artwork */}
              <img
                src="./images/head-burst-pavan.png"
                alt="MR. PAVAN CREATION — Video Editor & Visual Storyteller"
                className="w-full h-auto object-contain select-none max-h-[720px] sm:max-h-[800px] lg:max-h-[860px] drop-shadow-[0_20px_45px_rgba(23,21,27,0.14)]"
                style={{
                  // Subtle feathered edge to blend 100% seamlessly into the surrounding lavender background
                  maskImage: 'radial-gradient(ellipse 96% 96% at 50% 50%, black 85%, transparent 100%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 96% 96% at 50% 50%, black 85%, transparent 100%)',
                }}
              />

            </div>
          </div>

          {/* ================= RIGHT SIDE: Large Editorial Typography & Introduction ================= */}
          <div className="lg:col-span-6 xl:col-span-6 order-1 lg:order-2 flex flex-col items-start lg:pl-2">
            
            {/* Small Introductory Label with Official CP Badge */}
            <div className="mb-4 sm:mb-6">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/85 border border-[#DCCCF5] shadow-xs text-xs font-mono tracking-wider text-[#17151B]">
                <div className="w-4 h-4 rounded-full overflow-hidden bg-black border border-[#C9A45C]/70 flex items-center justify-center shrink-0">
                  <img
                    src="./images/logo/logo.jpg"
                    alt="CP Logo"
                    className="w-full h-full object-contain scale-[1.35]"
                  />
                </div>
                <span className="font-bold text-[#6C41CE]">HELLO, I'M PAVAN.</span>
                <span className="text-[#C9A45C]">✦</span>
                <span className="text-[#77717F] hidden sm:inline text-[11px]">
                  CRAFTING STORIES. CREATING IMPACT.
                </span>
              </div>
            </div>

            {/* Main Headline: Oversized Bold Typography + Elegant Serif Italic */}
            <div className="w-full mb-6">
              <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight text-[#17151B]">
                <span className="block transform hover:translate-x-1 transition-transform">
                  CREATING
                </span>
                
                {/* Elegant Italic Serif Accent Word */}
                <span className="block font-serif italic font-normal text-[#6C41CE] my-1 sm:my-2 tracking-normal drop-shadow-xs">
                  Visual
                </span>
                
                <span className="block flex items-center gap-3 flex-wrap">
                  <span>STORIES.</span>
                  {/* Restrained Champagne-Gold Highlight Pill */}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5EE] border border-[#C9A45C]/60 text-xs font-mono font-medium text-[#7D5F28] -rotate-1 shadow-2xs">
                    <Sparkles className="w-3 h-3 text-[#C9A45C]" />
                    CINEMATIC 24 FPS
                  </span>
                </span>
              </h1>
            </div>

            {/* Supporting Description */}
            <p className="font-sans text-base sm:text-lg lg:text-xl text-[#77717F] leading-relaxed max-w-xl mb-8">
              I’m a video editor and visual storyteller passionate about transforming ideas into compelling visual experiences. From festival aftermovies to high-retention cinematic reels, every cut is intentional.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full mb-10">
              {/* Primary CTA */}
              <a
                href="#work"
                onClick={playClickSound}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#17151B] text-[#F6F1E9] font-mono text-xs sm:text-sm font-semibold tracking-wider hover:bg-[#6C41CE] hover:shadow-lg transition-all duration-300 group shadow-md cursor-pointer"
                data-cursor="PLAY"
              >
                <span>EXPLORE MY WORK</span>
                <Play className="w-3.5 h-3.5 fill-current text-[#DCCCF5] group-hover:scale-110 transition-transform" />
              </a>

              {/* Secondary CTA */}
              <a
                href="#contact"
                onClick={playClickSound}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/80 border border-dashed border-[#A88BEA] text-[#17151B] font-mono text-xs sm:text-sm font-semibold tracking-wider hover:bg-[#FAF5EE] hover:border-[#C9A45C] transition-all duration-300 group shadow-xs cursor-pointer"
                data-cursor="CONTACT"
              >
                <span>LET'S COLLABORATE</span>
                <ArrowUpRight className="w-4 h-4 text-[#6C41CE] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Creative Availability Indicator & Location Details */}
            <div className="pt-6 border-t border-[#DCCCF5]/80 w-full flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#77717F]">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-[#17151B] font-medium">
                  AVAILABLE FOR COMMISSIONS & FREELANCE
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-[#6C41CE]" />
                  PUNE, MAHARASHTRA
                </span>
                <span className="text-[#C9A45C]">✦</span>
                <span className="text-[#6C41CE] font-semibold">2026 EDITION</span>
              </div>
            </div>

          </div>

        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-12 lg:mt-16 flex flex-col items-center justify-center gap-2">
          <a
            href="#brands"
            onClick={playClickSound}
            className="flex flex-col items-center gap-2 text-[10px] font-mono tracking-widest text-[#77717F] hover:text-[#17151B] transition-colors group cursor-pointer"
            data-cursor="SCROLL"
          >
            <span>SCROLL TO DISCOVER</span>
            <div className="w-5 h-9 rounded-full border border-[#A88BEA] flex items-start justify-center p-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[#6C41CE] animate-bounce" />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};
