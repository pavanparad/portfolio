import React from 'react';
import { motion } from 'framer-motion';
import { OFFICIAL_LOGOS } from '../data/logos';
import { VeloxxVideoPlayer } from './VeloxxVideoPlayer';
import { Instagram, ExternalLink, Film, Sparkles, Activity, Layers } from 'lucide-react';

interface ShuttleclubShowcaseProps {
  playClickSound?: () => void;
}

export const ShuttleclubShowcase: React.FC<ShuttleclubShowcaseProps> = ({ playClickSound }) => {
  const shuttleLogo = OFFICIAL_LOGOS.shuttleclub;

  return (
    <section
      id="client-shuttleclub"
      className="relative p-6 sm:p-10 lg:p-12 rounded-3xl bg-white/85 backdrop-blur-md border border-[#DCCCF5] shadow-lg transition-all duration-300 space-y-12 sm:space-y-16"
    >
      {/* Corner Crop Marks for Editorial Brand Showcase */}
      <span className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#C9A45C]" />
      <span className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#C9A45C]" />
      <span className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#C9A45C]" />
      <span className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#C9A45C]" />

      {/* ───────────────────────────────────────────────────────────
          1. SHOWCASE BRAND HEADER LOCKUP
          ─────────────────────────────────────────────────────────── */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-[#DCCCF5]/80">
        <div className="flex items-start sm:items-center gap-5 sm:gap-6">
          {/* Official SHUTTLECLUB Logo */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white p-2.5 border border-[#DCCCF5] shadow-xs flex items-center justify-center shrink-0">
            <img
              src={shuttleLogo.src}
              alt={shuttleLogo.alt}
              className="max-h-full max-w-full object-contain"
              loading="lazy"
            />
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="font-mono text-xs text-[#C9A45C] font-bold tracking-widest">
                CLIENT SHOWCASE 02
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#EAE0FF] text-[#6C41CE] border border-[#DCCCF5] font-semibold">
                CLIENT COLLABORATION / SPORTS MEDIA
              </span>
            </div>

            <h3 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#17151B] tracking-tight mt-1">
              SHUTTLECLUB
            </h3>
            <p className="font-mono text-xs sm:text-sm text-[#77717F] mt-1 tracking-wider uppercase">
              HIGH-VELOCITY SPORTS CINEMATICS &amp; COMPETITION COVERAGE
            </p>
          </div>
        </div>

        {/* Brand Social Link */}
        <div className="flex items-center gap-3">
          <a
            href="https://www.instagram.com/shuttleclub_official/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playClickSound?.()}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono bg-[#17151B] text-[#F6F1E9] hover:text-[#C9A45C] hover:border-[#C9A45C] border border-transparent transition-all shadow-xs group"
          >
            <Instagram className="w-4 h-4 text-[#C9A45C] group-hover:scale-110 transition-transform" />
            <span className="font-semibold">@shuttleclub_official</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#C9A45C]" />
          </a>
        </div>
      </div>

      {/* ───────────────────────────────────────────────────────────
          2. PROJECT: BADMINTON TOURNAMENT
          ─────────────────────────────────────────────────────────── */}
      <div className="space-y-10">
        {/* Project Introduction Header */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAE0FF] text-[#6C41CE] text-xs font-mono tracking-widest font-bold border border-[#DCCCF5]">
              <Film className="w-3 h-3 text-[#8964DE]" />
              PROJECT SHOWCASE
            </span>
            <span className="text-xs font-mono text-[#77717F] tracking-widest uppercase">
              BADMINTON TOURNAMENT FILM &amp; SOCIAL REEL
            </span>
          </div>

          <h4 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#17151B] tracking-tight">
            BADMINTON TOURNAMENT
          </h4>

          {/* Description */}
          <p className="font-sans text-sm sm:text-base text-[#575360] font-medium tracking-wide uppercase max-w-4xl">
            A VISUAL RECAP OF THE SHUTTLECLUB BADMINTON TOURNAMENT, CAPTURING THE ENERGY, COMPETITION AND MOMENTS ON COURT.
          </p>

          {/* Production Credits (No "MY ROLE" label) */}
          <div className="pt-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17151B] text-[#C9A45C] text-xs font-mono tracking-wider font-semibold border border-[#C9A45C]/30 shadow-xs">
              <span>VIDEO EDITING</span>
            </div>
          </div>
        </div>

        {/* ───────────────────────────────────────────────────────────
            A. PRIMARY FEATURED TOURNAMENT FILM (Horizontal 16:9)
            ─────────────────────────────────────────────────────────── */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2 font-bold text-[#17151B]">
              <span className="w-2 h-2 rounded-full bg-[#C9A45C] animate-pulse" />
              <span>PRIMARY FEATURED TOURNAMENT FILM</span>
            </div>
            <span className="px-2.5 py-0.5 rounded-full bg-[#17151B] text-[#C9A45C] text-[10px] font-mono font-bold tracking-wider">
              16:9 FEATURED
            </span>
          </div>

          <VeloxxVideoPlayer
            src="/videos/shuttleclub/shuttleclub-horizontal.mp4"
            fallbackSrc="./videos/shuttleclub/shuttleclub-horizontal.mp4"
            aspectRatio="16:9"
            title="SHUTTLECLUB — BADMINTON TOURNAMENT"
            subtitle="FEATURED 16:9 TOURNAMENT FILM"
            playClickSound={playClickSound}
            className="w-full shadow-2xl"
          />
        </div>

        {/* ───────────────────────────────────────────────────────────
            B. SUPPORTING SOCIAL MEDIA REEL (Vertical 9:16)
            ─────────────────────────────────────────────────────────── */}
        <div className="pt-8 border-t border-[#DCCCF5]/80 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#17151B] font-bold">
                <Activity className="w-4 h-4 text-[#8964DE]" />
                <span>SUPPORTING SOCIAL MEDIA REEL (9:16)</span>
              </div>
              <p className="font-mono text-xs text-[#77717F] mt-1">
                VERTICAL COURT-SIDE SOCIAL REEL CAPTURING FAST-PACED RALLIES &amp; COMPETITIVE INTENSITY
              </p>
            </div>
            <span className="self-start sm:self-auto px-2.5 py-0.5 rounded-full bg-[#EAE0FF] text-[#6C41CE] text-[10px] font-mono font-bold border border-[#DCCCF5]">
              9:16 VERTICAL
            </span>
          </div>

          <div className="max-w-md mx-auto w-full">
            <VeloxxVideoPlayer
              src="/videos/shuttleclub/shutterclubb-vertical.mp4"
              fallbackSrc="./videos/shuttleclub/shutterclubb-vertical.mp4"
              aspectRatio="9:16"
              title="BADMINTON TOURNAMENT — SOCIAL REEL"
              subtitle="VERTICAL 9:16 EVENT REEL"
              playClickSound={playClickSound}
              className="w-full shadow-xl"
            />
          </div>
        </div>

        {/* ───────────────────────────────────────────────────────────
            3. MINIMAL PROJECT-RELATED INSTAGRAM CTA
            ─────────────────────────────────────────────────────────── */}
        <div className="pt-8 border-t border-[#DCCCF5]/80 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 sm:p-6 rounded-2xl bg-[#F6F1E9]/80 border border-[#DCCCF5]">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-white p-2 border border-[#DCCCF5] shadow-xs flex items-center justify-center shrink-0">
              <img
                src={shuttleLogo.src}
                alt={shuttleLogo.alt}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
            <div>
              <span className="font-mono text-xs font-bold text-[#17151B] block">
                SHUTTLECLUB
              </span>
              <span className="font-mono text-[11px] text-[#77717F]">
                Official Badminton Community · @shuttleclub_official
              </span>
            </div>
          </div>

          <a
            href="https://www.instagram.com/shuttleclub_official/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playClickSound?.()}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-bold tracking-wider bg-[#17151B] text-[#F6F1E9] hover:text-[#C9A45C] hover:border-[#C9A45C] border border-transparent transition-all shadow-sm group shrink-0"
          >
            <Instagram className="w-4 h-4 text-[#C9A45C] group-hover:scale-110 transition-transform" />
            <span>EXPLORE SHUTTLECLUB ON INSTAGRAM</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#C9A45C]" />
          </a>
        </div>
      </div>
    </section>
  );
};
