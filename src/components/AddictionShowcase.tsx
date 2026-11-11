import React from 'react';
import { motion } from 'framer-motion';
import { OFFICIAL_LOGOS } from '../data/logos';
import { VeloxxVideoPlayer } from './VeloxxVideoPlayer';
import { Instagram, ExternalLink, Award } from 'lucide-react';

interface AddictionShowcaseProps {
  playClickSound?: () => void;
}

export const AddictionShowcase: React.FC<AddictionShowcaseProps> = ({ playClickSound }) => {
  const addictionLogo = OFFICIAL_LOGOS.addiction;

  return (
    <section
      id="project-addiction26"
      className="relative p-4 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl bg-white/90 backdrop-blur-md border border-[#DCCCF5] shadow-xl transition-all duration-300 space-y-8 sm:space-y-12 overflow-hidden"
    >
      {/* Corner Crop Marks for Editorial Brand Showcase */}
      <span className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#C9A45C]" />
      <span className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#C9A45C]" />
      <span className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#C9A45C]" />
      <span className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#C9A45C]" />

      {/* ───────────────────────────────────────────────────────────
          1. PROJECT INTRODUCTION & ADDICTION'26 HEADER LOCKUP
          ─────────────────────────────────────────────────────────── */}
      <div className="space-y-6 pb-6 border-b border-[#DCCCF5]/80">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 sm:gap-6">
          <div className="flex items-start sm:items-center gap-4 sm:gap-6 min-w-0">
            {/* Official ADDICTION Logo Container */}
            <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl bg-[#17151B] p-2 sm:p-2.5 border border-[#DCCCF5] shadow-xs flex items-center justify-center shrink-0 overflow-hidden">
              <img
                src={addictionLogo.src}
                alt={addictionLogo.alt}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>

            <div className="min-w-0">
              {/* Exactly requested heading */}
              <h3 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl text-[#17151B] tracking-tight">
                ADDICTION'26
              </h3>

              {/* Exactly requested subtitle */}
              <p className="font-mono text-xs sm:text-sm text-[#6C41CE] tracking-wider uppercase font-bold mt-1 break-words">
                BIGGEST ANNUAL CULTURAL FEST OF PICT
              </p>

              {/* Official Designation */}
              <div className="mt-2 sm:mt-2.5 inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-lg bg-[#17151B] text-[#C9A45C] font-mono text-[11px] sm:text-xs font-bold tracking-wider shadow-xs">
                <Award className="w-3.5 h-3.5 text-[#C9A45C] shrink-0" />
                <span>MEDIA TEAM LEAD</span>
              </div>
            </div>
          </div>

          {/* Quick Instagram Profile Pill */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://www.instagram.com/pict_addiction/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playClickSound?.()}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-mono bg-[#17151B] text-[#F6F1E9] hover:text-[#C9A45C] hover:border-[#C9A45C] border border-transparent transition-all shadow-xs group"
            >
              <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C9A45C] group-hover:scale-110 transition-transform shrink-0" />
              <span className="font-semibold">@pict_addiction</span>
              <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C9A45C] shrink-0" />
            </a>
          </div>
        </div>
      </div>

      {/* ───────────────────────────────────────────────────────────
          2. ASYMMETRIC VIDEO GRID — EXACT REFERENCE COMPOSITION
             Left Column: 1 Vertical Video (9:16) spanning full height of 3 rows
             Right Column: 3 Stacked Horizontal Videos (16:9) of equal visual height
          ─────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
        
        {/* ═════════════════════════════════════════════════════════
            LEFT COLUMN — ONE VERTICAL VIDEO (9:16)
            Spans the full combined height of all 3 horizontal rows on desktop
            ═════════════════════════════════════════════════════════ */}
        <div className="lg:col-span-5 lg:row-span-3 flex flex-col h-full">
          <div className="h-full flex flex-col justify-between p-3 sm:p-4 rounded-2xl sm:rounded-3xl bg-[#17151B] border border-[#DCCCF5]/80 hover:border-[#C9A45C] transition-all shadow-xl group/kgf">
            
            {/* Vertical Video Wrapper */}
            <div className="relative flex-1 w-full flex items-center justify-center overflow-hidden rounded-xl sm:rounded-2xl bg-black">
              <div className="w-full max-w-[320px] sm:max-w-[380px] lg:max-w-none lg:h-full flex items-center justify-center">
                <VeloxxVideoPlayer
                  src="/videos/addiction/addiction-kgf.mp4"
                  fallbackSrc="/videos/addiction26/addiction-kgf.mp4"
                  aspectRatio="9:16"
                  title="DADDY'S HOME"
                  subtitle="KGF-STYLE BANGER EDIT"
                  playClickSound={playClickSound}
                  className="w-full lg:h-full lg:max-h-full object-contain"
                />
              </div>
            </div>

            {/* Minimal Caption */}
            <div className="pt-3 px-1 flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C] shrink-0" />
                  <h4 className="font-display font-black text-sm sm:text-base text-white tracking-tight truncate">
                    DADDY'S HOME
                  </h4>
                </div>
                <p className="font-mono text-[11px] sm:text-xs text-[#C9A45C] font-semibold uppercase leading-snug">
                  DADDY'S HOME — A HIGH-ENERGY KGF-STYLE BANGER EDIT.
                </p>
              </div>
              <span className="shrink-0 px-2 py-0.5 rounded bg-[#2A2438] text-[#C9A45C] text-[10px] font-mono font-bold tracking-wider border border-[#C9A45C]/30">
                9:16
              </span>
            </div>
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════
            RIGHT COLUMN — VIDEO 01 (TOP): ADDICTION LEGACY (16:9)
            ═════════════════════════════════════════════════════════ */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="h-full flex flex-col justify-between p-3 sm:p-4 rounded-2xl sm:rounded-3xl bg-[#17151B] border border-[#DCCCF5]/80 hover:border-[#8964DE] transition-all shadow-xl group/legacy">
            <div className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl bg-black">
              <VeloxxVideoPlayer
                src="/videos/addiction/addiction-legacy.mp4"
                fallbackSrc="/videos/addiction26/addiction-legacy.mp4"
                aspectRatio="16:9"
                title="ADDICTION LEGACY"
                subtitle="SINCE 1999"
                playClickSound={playClickSound}
                className="w-full"
              />
            </div>
            <div className="pt-3 px-1 flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8964DE] shrink-0" />
                  <h4 className="font-display font-black text-sm sm:text-base text-white tracking-tight truncate">
                    ADDICTION LEGACY
                  </h4>
                </div>
                <p className="font-mono text-[11px] sm:text-xs text-[#DCCCF5]/90 font-medium uppercase leading-snug">
                  SHOWCASING THE LEGACY OF ADDICTION SINCE 1999.
                </p>
              </div>
              <span className="shrink-0 px-2 py-0.5 rounded bg-[#2A2438] text-[#DCCCF5] text-[10px] font-mono font-bold tracking-wider border border-[#DCCCF5]/30">
                16:9
              </span>
            </div>
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════
            RIGHT COLUMN — VIDEO 02 (MIDDLE): ADDICTION HYPE-UP (16:9)
            ═════════════════════════════════════════════════════════ */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="h-full flex flex-col justify-between p-3 sm:p-4 rounded-2xl sm:rounded-3xl bg-[#17151B] border border-[#DCCCF5]/80 hover:border-[#8964DE] transition-all shadow-xl group/hype">
            <div className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl bg-black">
              <VeloxxVideoPlayer
                src="/videos/addiction/addiction-hypeup.mp4"
                fallbackSrc="/videos/addiction26/addiction-hypeup.mp4"
                aspectRatio="16:9"
                title="ADDICTION HYPE-UP"
                subtitle="FESTIVAL HYPE REEL"
                playClickSound={playClickSound}
                className="w-full"
              />
            </div>
            <div className="pt-3 px-1 flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8964DE] shrink-0" />
                  <h4 className="font-display font-black text-sm sm:text-base text-white tracking-tight truncate">
                    ADDICTION HYPE-UP
                  </h4>
                </div>
                <p className="font-mono text-[11px] sm:text-xs text-[#DCCCF5]/90 font-medium uppercase leading-snug">
                  GLIMPSES OF ADDICTION'25 AND THE CRAZE OF ADDICTION'26.
                </p>
              </div>
              <span className="shrink-0 px-2 py-0.5 rounded bg-[#2A2438] text-[#DCCCF5] text-[10px] font-mono font-bold tracking-wider border border-[#DCCCF5]/30">
                16:9
              </span>
            </div>
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════
            RIGHT COLUMN — VIDEO 03 (BOTTOM): ADDICTION'26 EVENT COVERAGE (16:9)
            ═════════════════════════════════════════════════════════ */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="h-full flex flex-col justify-between p-3 sm:p-4 rounded-2xl sm:rounded-3xl bg-[#17151B] border border-[#DCCCF5]/80 hover:border-[#C9A45C] transition-all shadow-xl group/event">
            <div className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl bg-black">
              <VeloxxVideoPlayer
                src="/videos/addiction/addiction-event.mp4"
                fallbackSrc="/videos/addiction26/addiction-event.mp4"
                aspectRatio="16:9"
                title="ADDICTION'26 EVENT COVERAGE"
                subtitle="FESTIVAL HIGHLIGHTS"
                playClickSound={playClickSound}
                className="w-full"
              />
            </div>
            <div className="pt-3 px-1 flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C] shrink-0" />
                  <h4 className="font-display font-black text-sm sm:text-base text-white tracking-tight truncate">
                    ADDICTION'26 EVENT COVERAGE
                  </h4>
                </div>
                <p className="font-mono text-[11px] sm:text-xs text-[#C9A45C] font-semibold uppercase leading-snug">
                  EVENT COVERAGE CAPTURING THE ENERGY AND HIGHLIGHTS OF ADDICTION'26.
                </p>
              </div>
              <span className="shrink-0 px-2 py-0.5 rounded bg-[#2A2438] text-[#C9A45C] text-[10px] font-mono font-bold tracking-wider border border-[#C9A45C]/30">
                16:9
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* ───────────────────────────────────────────────────────────
          3. ADDICTION CLOSING PROJECT CTA
          ─────────────────────────────────────────────────────────── */}
      <div className="pt-6 border-t border-[#DCCCF5]/80 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-6 rounded-2xl bg-[#F6F1E9]/80 border border-[#DCCCF5]">
        <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#17151B] p-1.5 sm:p-2 border border-[#DCCCF5] shadow-xs flex items-center justify-center shrink-0 overflow-hidden">
            <img
              src={addictionLogo.src}
              alt={addictionLogo.alt}
              className="max-h-full max-w-full object-contain"
              loading="lazy"
            />
          </div>
          <div className="min-w-0">
            <span className="font-mono text-xs font-bold text-[#17151B] block truncate">
              ADDICTION'26 — PICT ANNUAL CULTURAL FESTIVAL
            </span>
            <span className="font-mono text-[11px] text-[#77717F]">
              Official Cultural Fest · @pict_addiction
            </span>
          </div>
        </div>

        <a
          href="https://www.instagram.com/pict_addiction/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => playClickSound?.()}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-3.5 sm:px-5 py-2.5 rounded-full text-[11px] sm:text-xs font-mono font-bold tracking-wider bg-[#17151B] text-[#F6F1E9] hover:text-[#C9A45C] hover:border-[#C9A45C] border border-transparent transition-all shadow-sm group shrink-0"
        >
          <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C9A45C] group-hover:scale-110 transition-transform shrink-0" />
          <span>EXPLORE ON INSTAGRAM</span>
          <ExternalLink className="w-3.5 h-3.5 text-[#C9A45C] shrink-0" />
        </a>
      </div>
    </section>
  );
};
