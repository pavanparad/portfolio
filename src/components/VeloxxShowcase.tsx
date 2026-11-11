import React from 'react';
import { motion } from 'framer-motion';
import { OFFICIAL_LOGOS } from '../data/logos';
import { VeloxxVideoPlayer } from './VeloxxVideoPlayer';
import { Instagram, ExternalLink, Film, Sparkles, Clapperboard, Video, Compass } from 'lucide-react';

interface VeloxxShowcaseProps {
  playClickSound?: () => void;
}

export const VeloxxShowcase: React.FC<VeloxxShowcaseProps> = ({ playClickSound }) => {
  const veloxxLogo = OFFICIAL_LOGOS.veloxxclub;

  return (
    <section
      id="client-veloxx-club"
      className="relative p-6 sm:p-10 lg:p-12 rounded-3xl bg-white/85 backdrop-blur-md border border-[#DCCCF5] shadow-lg transition-all duration-300 space-y-16"
    >
      {/* Corner Crop Marks for Editorial Brand Showcase */}
      <span className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#C9A45C]" />
      <span className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#C9A45C]" />
      <span className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#C9A45C]" />
      <span className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#C9A45C]" />

      {/* ───────────────────────────────────────────────────────────
          SHOWCASE BRAND HEADER LOCKUP
          ─────────────────────────────────────────────────────────── */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-[#DCCCF5]/80">
        <div className="flex items-start sm:items-center gap-5 sm:gap-6">
          {/* Official VELOXX CLUB Logo */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white p-2.5 border border-[#DCCCF5] shadow-xs flex items-center justify-center shrink-0">
            <img
              src={veloxxLogo.src}
              alt={veloxxLogo.alt}
              className="max-h-full max-w-full object-contain"
              loading="lazy"
            />
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="font-mono text-xs text-[#C9A45C] font-bold tracking-widest">
                CLIENT SHOWCASE 01
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#EAE0FF] text-[#6C41CE] border border-[#DCCCF5] font-semibold">
                CLIENT COLLABORATION
              </span>
            </div>

            <h3 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#17151B] tracking-tight mt-1">
              VELOXX CLUB
            </h3>
            <p className="font-mono text-xs sm:text-sm text-[#77717F] mt-1 tracking-wider uppercase">
              LIFESTYLE &amp; CREATIVE COMMUNITY BRANDING
            </p>
          </div>
        </div>

        {/* Brand Social Link */}
        <div className="flex items-center gap-3">
          <a
            href="https://instagram.com/veloxxclub"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playClickSound?.()}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono bg-[#17151B] text-[#F6F1E9] hover:text-[#C9A45C] hover:border-[#C9A45C] border border-transparent transition-all shadow-xs group"
          >
            <Instagram className="w-4 h-4 text-[#C9A45C] group-hover:scale-110 transition-transform" />
            <span className="font-semibold">@veloxxclub</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#C9A45C]" />
          </a>
        </div>
      </div>

      {/* ───────────────────────────────────────────────────────────
          PROJECT 1: RUN OF THE YEAR
          ─────────────────────────────────────────────────────────── */}
      <div className="space-y-8">
        {/* Project 1 Header Block */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAE0FF] text-[#6C41CE] text-xs font-mono tracking-widest font-bold border border-[#DCCCF5]">
              <Film className="w-3 h-3 text-[#8964DE]" />
              PROJECT 01 / 02
            </span>
            <span className="text-xs font-mono text-[#77717F] tracking-widest uppercase">
              EVENT FILM &amp; SOCIAL REELS
            </span>
          </div>

          <h4 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#17151B] tracking-tight">
            RUN OF THE YEAR
          </h4>

          {/* Description */}
          <p className="font-sans text-sm sm:text-base text-[#575360] font-medium tracking-wide uppercase max-w-4xl">
            THE BIGGEST COMMUNITY RUN EVENT ORGANISED BY VELOXX CLUB AT FLAME UNIVERSITY.
          </p>

          {/* Production Credits (No "MY ROLE" label) */}
          <div className="pt-2">
            <div className="inline-flex flex-wrap items-center gap-x-2.5 gap-y-1.5 px-3.5 py-1.5 rounded-full bg-[#17151B] text-[#C9A45C] text-xs font-mono tracking-wider font-semibold border border-[#C9A45C]/30 shadow-xs">
              <span>FILMING</span>
              <span className="text-[#8964DE]">·</span>
              <span>CINEMATOGRAPHY</span>
              <span className="text-[#8964DE]">·</span>
              <span>VIDEO EDITING</span>
              <span className="text-[#8964DE]">·</span>
              <span>MOTION GRAPHICS</span>
            </div>
          </div>
        </div>

        {/* 1. Primary Featured Event Film (Horizontal 16:9 - Largest Visual Emphasis) */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2 font-bold text-[#17151B]">
              <span className="w-2 h-2 rounded-full bg-[#C9A45C] animate-pulse" />
              <span>PRIMARY FEATURED EVENT FILM</span>
            </div>
            <span className="px-2.5 py-0.5 rounded-full bg-[#17151B] text-[#C9A45C] text-[10px] font-mono font-bold tracking-wider">
              16:9 FEATURED
            </span>
          </div>

          <VeloxxVideoPlayer
            src="/videos/veloxxclub/event-films/veloxx-runoftheyear.mp4"
            fallbackSrc="./videos/veloxxclub/event-films/veloxx-runoftheyear.mp4"
            aspectRatio="16:9"
            title="RUN OF THE YEAR — OFFICIAL EVENT FILM"
            subtitle="FEATURED 16:9 EVENT FILM"
            playClickSound={playClickSound}
            className="w-full shadow-2xl"
          />
        </div>

        {/* Supporting Media Block (Reel 1 & Reel 2 in 2-Column Grid + Typography Promo) */}
        <div className="pt-8 border-t border-[#DCCCF5]/80 space-y-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#17151B] font-bold">
              <Compass className="w-4 h-4 text-[#C9A45C]" />
              <span>SUPPORTING EVENT REELS (9:16)</span>
            </div>
            <p className="font-mono text-xs text-[#77717F] mt-1">
              VERTICAL CINEMATOGRAPHY &amp; EVENT HIGHLIGHT REELS CRAFTED FOR HIGH-ENGAGEMENT SOCIAL DISTRIBUTION
            </p>
          </div>

          {/* 2-Column Side-by-Side Grid for Reel 1 and Reel 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto">
            {/* Supporting Event Reel 1 */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-[#17151B]">SUPPORTING EVENT REEL 1</span>
                <span className="px-2 py-0.5 rounded bg-[#EAE0FF] text-[#6C41CE] text-[10px] font-semibold border border-[#DCCCF5]">
                  9:16 VERTICAL
                </span>
              </div>
              <VeloxxVideoPlayer
                src="/videos/veloxxclub/vertical-reels/veloxx-runoftheyear2.mp4"
                fallbackSrc="./videos/veloxxclub/vertical-reels/veloxx-runoftheyear2.mp4"
                aspectRatio="9:16"
                title="RUN OF THE YEAR — REEL 01"
                subtitle="VERTICAL EVENT REEL"
                playClickSound={playClickSound}
              />
            </div>

            {/* Supporting Event Reel 2 */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-[#17151B]">SUPPORTING EVENT REEL 2</span>
                <span className="px-2 py-0.5 rounded bg-[#EAE0FF] text-[#6C41CE] text-[10px] font-semibold border border-[#DCCCF5]">
                  9:16 VERTICAL
                </span>
              </div>
              <VeloxxVideoPlayer
                src="/videos/veloxxclub/vertical-reels/veloxx-runoftheyear3.mp4"
                fallbackSrc="./videos/veloxxclub/vertical-reels/veloxx-runoftheyear3.mp4"
                aspectRatio="9:16"
                title="RUN OF THE YEAR — REEL 02"
                subtitle="VERTICAL EVENT REEL"
                playClickSound={playClickSound}
              />
            </div>
          </div>

          {/* Typography & Motion Graphics Promotional Video directly below */}
          <div className="pt-6 border-t border-[#DCCCF5]/60 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="font-mono text-xs text-[#C9A45C] font-bold tracking-widest uppercase">
                  MOTION GRAPHICS &amp; PROMOTION
                </span>
                <h5 className="font-display font-bold text-lg sm:text-xl text-[#17151B] mt-0.5">
                  Typography &amp; Motion Graphics Promotional Video
                </h5>
              </div>
              <span className="self-start sm:self-auto px-2.5 py-0.5 rounded-full bg-[#17151B] text-[#C9A45C] text-[10px] font-mono tracking-widest font-semibold border border-[#C9A45C]/30">
                16:9 PROMOTIONAL
              </span>
            </div>

            <VeloxxVideoPlayer
              src="/videos/veloxxclub/motion-graphics/veloxx-typography.mp4"
              fallbackSrc="./videos/veloxxclub/motion-graphics/veloxx-typography.mp4"
              aspectRatio="16:9"
              title="VELOXX CLUB — TYPOGRAPHY PROMO"
              subtitle="MOTION DESIGN & TITLE SEQUENCE"
              playClickSound={playClickSound}
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* ───────────────────────────────────────────────────────────
          EDITORIAL DIVIDER BETWEEN THE TWO VELOXX PROJECTS
          ─────────────────────────────────────────────────────────── */}
      <div className="relative py-4 flex items-center justify-center">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[#DCCCF5]" />
        </div>
        <div className="relative px-4 bg-white/95 text-[#C9A45C] text-xs font-mono tracking-widest flex items-center gap-2 border border-[#DCCCF5] rounded-full py-1">
          <Sparkles className="w-3.5 h-3.5 text-[#8964DE]" />
          <span>VELOXX CLUB ARCHIVE</span>
          <Sparkles className="w-3.5 h-3.5 text-[#8964DE]" />
        </div>
      </div>

      {/* ───────────────────────────────────────────────────────────
          PROJECT 2: BADDIE OLYMPICS
          ─────────────────────────────────────────────────────────── */}
      <div className="space-y-8">
        {/* Project 2 Header Block */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAE0FF] text-[#6C41CE] text-xs font-mono tracking-widest font-bold border border-[#DCCCF5]">
              <Clapperboard className="w-3 h-3 text-[#8964DE]" />
              PROJECT 02 / 02
            </span>
            <span className="text-xs font-mono text-[#77717F] tracking-widest uppercase">
              HIGH-ENERGY COMPETITION COVERAGE
            </span>
          </div>

          <h4 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#17151B] tracking-tight">
            BADDIE OLYMPICS
          </h4>

          {/* Description */}
          <p className="font-sans text-sm sm:text-base text-[#575360] font-medium tracking-wide uppercase max-w-4xl">
            A HIGH-ENERGY COMPETITION FILLED WITH FRIENDLY RIVALRIES, UNEXPECTED WINS AND UNFORGETTABLE MOMENTS.
          </p>

          {/* Production Credits (No "MY ROLE" label) */}
          <div className="pt-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17151B] text-[#C9A45C] text-xs font-mono tracking-wider font-semibold border border-[#C9A45C]/30 shadow-xs">
              <span>VIDEO EDITING</span>
            </div>
          </div>
        </div>

        {/* Cinematic 16:9 Player matching RUN OF THE YEAR player style */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2 font-bold text-[#17151B]">
              <span className="w-2 h-2 rounded-full bg-[#8964DE] animate-pulse" />
              <span>OFFICIAL COMPETITION HIGHLIGHT FILM</span>
            </div>
            <span className="px-2.5 py-0.5 rounded-full bg-[#17151B] text-[#C9A45C] text-[10px] font-mono font-bold tracking-wider">
              16:9 CINEMATIC
            </span>
          </div>

          <VeloxxVideoPlayer
            src="/videos/veloxxclub/event-films/veloxx-baddie-olympic.mp4"
            fallbackSrc="./videos/veloxxclub/event-films/veloxx-baddie-olympic.mp4"
            aspectRatio="16:9"
            title="BADDIE OLYMPICS — HIGHLIGHT FILM"
            subtitle="FEATURED 16:9 CINEMATIC FILM"
            playClickSound={playClickSound}
            className="w-full shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};
