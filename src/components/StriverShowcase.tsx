import React from 'react';
import { motion } from 'framer-motion';
import { OFFICIAL_LOGOS } from '../data/logos';
import { VeloxxVideoPlayer } from './VeloxxVideoPlayer';
import { Instagram, ExternalLink, Sparkles, Award, Layers, Flame, Trophy } from 'lucide-react';

interface StriverShowcaseProps {
  playClickSound?: () => void;
}

export const StriverShowcase: React.FC<StriverShowcaseProps> = ({ playClickSound }) => {
  const pascLogo = OFFICIAL_LOGOS.pasc;

  return (
    <section
      id="project-striver"
      className="relative p-6 sm:p-10 lg:p-12 rounded-3xl bg-white/90 backdrop-blur-md border border-[#DCCCF5] shadow-xl transition-all duration-300 space-y-12 sm:space-y-16"
    >
      {/* Corner Crop Marks for Editorial Brand Showcase */}
      <span className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#C9A45C]" />
      <span className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#C9A45C]" />
      <span className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#C9A45C]" />
      <span className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#C9A45C]" />

      {/* ───────────────────────────────────────────────────────────
          1. PROJECT INTRODUCTION & PASC / STRIVER HEADER LOCKUP
          ─────────────────────────────────────────────────────────── */}
      <div className="space-y-8 pb-8 border-b border-[#DCCCF5]/80">
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6">
            {/* Logos & Speaker Lockup */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Official PASC Logo Container */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white p-2.5 border border-[#DCCCF5] shadow-xs flex items-center justify-center">
                <img
                  src={pascLogo.src}
                  alt={pascLogo.alt}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>

              {/* Striver 1:1 Square Portrait Avatar */}
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-[#C9A45C] shadow-sm relative group shrink-0"
                title="Raj Vikramaditya (Striver) — Keynote Speaker"
              >
                <img
                  src="./images/striver-square.jpg"
                  onError={(e) => {
                    // Fallback to absolute or portrait path if relative fails
                    const target = e.currentTarget;
                    if (!target.src.includes('striver-portrait')) {
                      target.src = '/images/striver-square.jpg';
                    }
                  }}
                  alt="Raj Vikramaditya (Striver)"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <span className="absolute bottom-0 inset-x-0 bg-black/75 text-[8px] font-mono font-bold text-[#C9A45C] text-center py-0.5 tracking-wider uppercase">
                  STRIVER
                </span>
              </div>
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="font-mono text-xs text-[#C9A45C] font-bold tracking-widest uppercase">
                  COLLEGIATE LEADERSHIP
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#EAE0FF] text-[#6C41CE] border border-[#DCCCF5] font-semibold">
                  PASC — PICT ACM STUDENT CHAPTER
                </span>
              </div>

              {/* Project Title */}
              <h3 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#17151B] tracking-tight mt-1">
                STRIVER: CODE TO CAREER
              </h3>

              {/* My Designation */}
              <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#17151B] text-[#C9A45C] font-mono text-xs font-bold tracking-wider shadow-xs">
                <Award className="w-3.5 h-3.5 text-[#C9A45C]" />
                <span>VIDEO EDITING &amp; SOCIAL MEDIA LEAD</span>
              </div>
            </div>
          </div>

          {/* Quick Instagram Profile Pill */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://www.instagram.com/acm.pict/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playClickSound?.()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono bg-[#17151B] text-[#F6F1E9] hover:text-[#C9A45C] hover:border-[#C9A45C] border border-transparent transition-all shadow-xs group"
            >
              <Instagram className="w-4 h-4 text-[#C9A45C] group-hover:scale-110 transition-transform" />
              <span className="font-semibold">@acm.pict</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#C9A45C]" />
            </a>
          </div>
        </div>

        {/* Project Description (Exact, concise, one line) */}
        <p className="font-sans text-sm sm:text-base text-[#575360] font-medium tracking-wide uppercase max-w-4xl">
          A PROMOTIONAL CONTENT CAMPAIGN FOR STRIVER: CODE TO CAREER, CREATED TO BUILD EXCITEMENT AND ANTICIPATION AROUND THE EVENT AT PICT.
        </p>

        {/* ───────────────────────────────────────────────────────────
            2. CAMPAIGN HIGHLIGHT STRIP
            ─────────────────────────────────────────────────────────── */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#17151B] via-[#231F2C] to-[#17151B] border border-[#C9A45C]/50 text-[#F6F1E9] shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-[#C9A45C]/20 border border-[#C9A45C] flex items-center justify-center shrink-0">
              <Flame className="w-5 h-5 text-[#C9A45C]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono tracking-widest text-[#C9A45C] uppercase font-bold">
                  EVENT PROMOTION CAMPAIGN
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C] animate-pulse" />
              </div>
              <p className="font-display font-bold text-sm sm:text-base text-white tracking-wide mt-0.5">
                THREE PROMOTIONAL EDITS, ONE EVENT CAMPAIGN — BUILDING MAXIMUM CAMPUS ANTICIPATION.
              </p>
            </div>
          </div>

          <a
            href="https://www.instagram.com/acm.pict/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playClickSound?.()}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider bg-[#C9A45C] hover:bg-white text-[#17151B] transition-all shadow-sm shrink-0 self-start md:self-auto"
          >
            <Instagram className="w-4 h-4 text-[#17151B]" />
            <span>EXPLORE PASC ON INSTAGRAM</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#17151B]" />
          </a>
        </div>
      </div>

      {/* ───────────────────────────────────────────────────────────
          3. VERTICAL VIDEO GALLERY (9:16 — 3 VIDEOS, ANNOUNCEMENT AS CENTREPIECE)
          ─────────────────────────────────────────────────────────── */}
      <div className="space-y-8">
        <div>
          <div className="flex items-center justify-between pb-2 border-b border-[#DCCCF5]/60">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#17151B] font-bold">
              <Layers className="w-4 h-4 text-[#8964DE]" />
              <span>VERTICAL CAMPAIGN REELS (9:16)</span>
            </div>
            <span className="text-[11px] font-mono text-[#77717F]">
              3 FEATURED PROMOTIONS
            </span>
          </div>
          <p className="font-mono text-xs text-[#77717F] mt-1">
            STRIVER: CODE TO CAREER — THREE PROMOTIONAL EDITS FEATURING THE ANNOUNCEMENT REEL AS THE CENTREPIECE
          </p>
        </div>

        {/* 3-Column Responsive Grid on Desktop; Announcement Reel is Order-First on Mobile & Centerpiece on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {/* ─────────────────────────────────────────────────────
              CARD A: VIDEO 01 — PASC FOR THE REASON (Supporting)
              ───────────────────────────────────────────────────── */}
          <div className="order-2 lg:order-1 space-y-3 flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-white/70 border border-[#DCCCF5] shadow-sm hover:border-[#8964DE] transition-colors">
            <div className="min-h-[110px]">
              <div className="flex items-center justify-between text-xs font-mono mb-1">
                <span className="text-[10px] font-bold text-[#8964DE]">VIDEO 01</span>
                <span className="px-2 py-0.5 rounded bg-[#EAE0FF] text-[#6C41CE] text-[10px] font-bold">
                  9:16 VERTICAL
                </span>
              </div>
              <h5 className="font-display font-black text-base sm:text-lg text-[#17151B] tracking-tight">
                PASC FOR THE REASON
              </h5>
              <p className="font-sans text-[11px] sm:text-xs text-[#575360] font-medium tracking-wide uppercase mt-1 leading-snug">
                A CREATIVE PASC PROMOTIONAL EDIT BUILT AROUND THE REASON BEHIND THE EVENT.
              </p>
            </div>

            <div className="pt-2">
              <VeloxxVideoPlayer
                src="/videos/stirver/striverr-pasc-aura.mp4"
                fallbackSrc="./videos/stirver/striverr-pasc-aura.mp4"
                aspectRatio="9:16"
                title="PASC FOR THE REASON"
                subtitle="VERTICAL 9:16 REEL"
                playClickSound={playClickSound}
              />
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────
              CARD B: VIDEO 03 — THE ANNOUNCEMENT (Featured Centrepiece · Most-Viewed)
              ───────────────────────────────────────────────────── */}
          <div className="order-1 lg:order-2 space-y-3 flex flex-col justify-between p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#17151B] via-[#211B2C] to-[#17151B] text-white border-2 border-[#C9A45C] shadow-2xl relative lg:-translate-y-2 lg:scale-[1.02] transition-transform">
            {/* Featured Badge Corner Highlight */}
            <div className="min-h-[110px]">
              <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#C9A45C] text-[#17151B] text-[10px] font-mono font-bold tracking-wider">
                  <Sparkles className="w-3 h-3 text-[#17151B]" />
                  <span>FEATURED CENTREPIECE</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-white/10 text-[#C9A45C] border border-[#C9A45C]/40 text-[10px] font-mono font-bold">
                  MOST VIEWED
                </span>
              </div>

              <div className="flex items-center gap-2 mt-1">
                <span className="text-[10px] font-mono font-bold text-[#C9A45C]">VIDEO 03</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C] animate-pulse" />
              </div>

              <h5 className="font-display font-black text-lg sm:text-xl text-white tracking-tight mt-0.5">
                THE ANNOUNCEMENT
              </h5>
              <p className="font-sans text-[11px] sm:text-xs text-[#DCCCF5]/90 font-medium tracking-wide uppercase mt-1 leading-snug">
                THE MOST-VIEWED REEL, FEATURING STRIVER HIMSELF ANNOUNCING HIS UPCOMING VISIT TO PICT.
              </p>
            </div>

            <div className="pt-2">
              <VeloxxVideoPlayer
                src="/videos/stirver/striver-announcemnt.mp4"
                fallbackSrc="./videos/stirver/striver-announcemnt.mp4"
                aspectRatio="9:16"
                title="THE ANNOUNCEMENT"
                subtitle="FEATURED MOST-VIEWED REEL"
                playClickSound={playClickSound}
                className="border-2 border-[#C9A45C]/60 shadow-[0_0_25px_rgba(201,164,92,0.25)]"
              />
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────
              CARD C: VIDEO 02 — ONE NAME TO RULE THE GAME (Supporting)
              ───────────────────────────────────────────────────── */}
          <div className="order-3 lg:order-3 space-y-3 flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-white/70 border border-[#DCCCF5] shadow-sm hover:border-[#8964DE] transition-colors">
            <div className="min-h-[110px]">
              <div className="flex items-center justify-between text-xs font-mono mb-1">
                <span className="text-[10px] font-bold text-[#8964DE]">VIDEO 02</span>
                <span className="px-2 py-0.5 rounded bg-[#EAE0FF] text-[#6C41CE] text-[10px] font-bold">
                  9:16 VERTICAL
                </span>
              </div>
              <h5 className="font-display font-black text-base sm:text-lg text-[#17151B] tracking-tight">
                ONE NAME TO RULE THE GAME
              </h5>
              <p className="font-sans text-[11px] sm:text-xs text-[#575360] font-medium tracking-wide uppercase mt-1 leading-snug">
                A HIGH-ENERGY PROMOTIONAL EDIT FEATURING THE 'ONE NAME TO RULE THE GAME' CONCEPT.
              </p>
            </div>

            <div className="pt-2">
              <VeloxxVideoPlayer
                src="/videos/stirver/striver-bgm.mp4"
                fallbackSrc="./videos/stirver/striver-bgm.mp4"
                aspectRatio="9:16"
                title="ONE NAME TO RULE THE GAME"
                subtitle="VERTICAL 9:16 REEL"
                playClickSound={playClickSound}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ───────────────────────────────────────────────────────────
          4. PASC CLOSING PROJECT CTA
          ─────────────────────────────────────────────────────────── */}
      <div className="pt-8 border-t border-[#DCCCF5]/80 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 sm:p-6 rounded-2xl bg-[#F6F1E9]/80 border border-[#DCCCF5]">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-white p-2 border border-[#DCCCF5] shadow-xs flex items-center justify-center shrink-0">
            <img
              src={pascLogo.src}
              alt={pascLogo.alt}
              className="max-h-full max-w-full object-contain"
              loading="lazy"
            />
          </div>
          <div>
            <span className="font-mono text-xs font-bold text-[#17151B] block">
              PASC — PICT ACM STUDENT CHAPTER
            </span>
            <span className="font-mono text-[11px] text-[#77717F]">
              Official Computing Chapter · @acm.pict
            </span>
          </div>
        </div>

        <a
          href="https://www.instagram.com/acm.pict/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => playClickSound?.()}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-bold tracking-wider bg-[#17151B] text-[#F6F1E9] hover:text-[#C9A45C] hover:border-[#C9A45C] border border-transparent transition-all shadow-sm group shrink-0"
        >
          <Instagram className="w-4 h-4 text-[#C9A45C] group-hover:scale-110 transition-transform" />
          <span>EXPLORE PASC ON INSTAGRAM</span>
          <ExternalLink className="w-3.5 h-3.5 text-[#C9A45C]" />
        </a>
      </div>
    </section>
  );
};
