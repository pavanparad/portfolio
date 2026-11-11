import React from 'react';
import { motion } from 'framer-motion';
import { OFFICIAL_LOGOS } from '../data/logos';
import { VeloxxVideoPlayer } from './VeloxxVideoPlayer';
import { Instagram, ExternalLink, Film, Sparkles, Trophy, Award, Layers, Video } from 'lucide-react';

interface PulzionShowcaseProps {
  playClickSound?: () => void;
}

export const PulzionShowcase: React.FC<PulzionShowcaseProps> = ({ playClickSound }) => {
  const pascLogo = OFFICIAL_LOGOS.pasc;

  return (
    <section
      id="project-pulzion26"
      className="relative p-6 sm:p-10 lg:p-12 rounded-3xl bg-white/90 backdrop-blur-md border border-[#DCCCF5] shadow-xl transition-all duration-300 space-y-12 sm:space-y-16"
    >
      {/* Corner Crop Marks for Editorial Brand Showcase */}
      <span className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#C9A45C]" />
      <span className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#C9A45C]" />
      <span className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#C9A45C]" />
      <span className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#C9A45C]" />

      {/* ───────────────────────────────────────────────────────────
          1. PROJECT INTRODUCTION & PASC HEADER LOCKUP
          ─────────────────────────────────────────────────────────── */}
      <div className="space-y-8 pb-8 border-b border-[#DCCCF5]/80">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-5 sm:gap-6">
            {/* Official PASC Logo Container */}
            <div className="w-18 h-18 sm:w-22 sm:h-22 rounded-2xl bg-white p-3 border border-[#DCCCF5] shadow-xs flex items-center justify-center shrink-0">
              <img
                src={pascLogo.src}
                alt={pascLogo.alt}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
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

              {/* Project Heading */}
              <h3 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#17151B] tracking-tight mt-1">
                PULZION'26
              </h3>

              {/* My Designation */}
              <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#17151B] text-[#C9A45C] font-mono text-xs font-bold tracking-wider shadow-xs">
                <Award className="w-3.5 h-3.5 text-[#C9A45C]" />
                <span>VIDEO EDITING &amp; SOCIAL MEDIA LEAD</span>
              </div>
            </div>
          </div>

          {/* Quick Instagram Profile Pill */}
          <div className="flex items-center gap-3">
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

        {/* Project Description (Concise, exactly 1 statement) */}
        <p className="font-sans text-sm sm:text-base text-[#575360] font-medium tracking-wide uppercase max-w-4xl">
          A YEAR OF CREATIVE STORYTELLING, EVENT COVERAGE AND SOCIAL MEDIA CONTENT FOR PULZION'26.
        </p>

        {/* ───────────────────────────────────────────────────────────
            2. PASC INSTAGRAM ACHIEVEMENT HIGHLIGHT
            ─────────────────────────────────────────────────────────── */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#17151B] via-[#231F2C] to-[#17151B] border border-[#C9A45C]/50 text-[#F6F1E9] shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-[#C9A45C]/20 border border-[#C9A45C] flex items-center justify-center shrink-0">
              <Trophy className="w-5 h-5 text-[#C9A45C]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono tracking-widest text-[#C9A45C] uppercase font-bold">
                  PASC INSTAGRAM ACHIEVEMENT
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C] animate-pulse" />
              </div>
              <p className="font-display font-bold text-sm sm:text-base text-white tracking-wide mt-0.5">
                HIGHEST INSTAGRAM VIEWS IN THE PAST 5 YEARS — ACHIEVED THIS YEAR.
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
          3. HORIZONTAL COVERAGE (VIDEOS 01 & 02 — 16:9)
          ─────────────────────────────────────────────────────────── */}
      <div className="space-y-8">
        <div className="flex items-center justify-between pb-2 border-b border-[#DCCCF5]/60">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#17151B] font-bold">
            <Film className="w-4 h-4 text-[#C9A45C]" />
            <span>HORIZONTAL EVENT COVERAGE (16:9)</span>
          </div>
          <span className="text-[11px] font-mono text-[#77717F]">
            2 FEATURED HORIZONTAL PRODUCTIONS
          </span>
        </div>

        {/* VIDEO 01 — PULZION EVENT COVERAGE (Primary Featured Video) */}
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C9A45C] animate-pulse" />
                <span className="font-mono text-xs text-[#C9A45C] font-bold tracking-wider uppercase">
                  VIDEO 01 — MAIN FEATURED COVERAGE
                </span>
              </div>
              <h4 className="font-display font-black text-xl sm:text-2xl lg:text-3xl text-[#17151B] tracking-tight mt-0.5">
                PULZION EVENT COVERAGE
              </h4>
            </div>
            <span className="self-start sm:self-auto px-2.5 py-0.5 rounded-full bg-[#17151B] text-[#C9A45C] text-[10px] font-mono font-bold tracking-wider">
              16:9 FEATURED
            </span>
          </div>

          <p className="font-sans text-xs sm:text-sm text-[#575360] font-medium tracking-wide uppercase">
            A COMPLETE VISUAL RECAP OF PULZION'26, CAPTURING THE EVENT'S BIGGEST MOMENTS.
          </p>

          <VeloxxVideoPlayer
            src="/videos/pulzion26/pulzion-event-coverage.mp4"
            fallbackSrc="./videos/pulzion26/pulzion-event-coverage.mp4"
            aspectRatio="16:9"
            title="PULZION EVENT COVERAGE"
            subtitle="FEATURED 16:9 EVENT FILM"
            playClickSound={playClickSound}
            className="w-full shadow-2xl"
          />
        </div>

        {/* VIDEO 02 — PULZION'26 TYPOGRAPHY REEL (Horizontal 16:9 Typography Film) */}
        <div className="pt-10 border-t border-[#DCCCF5]/60 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#8964DE]" />
                <span className="font-mono text-xs text-[#8964DE] font-bold tracking-wider uppercase">
                  VIDEO 02 — TYPOGRAPHY &amp; PROMOTIONAL REEL
                </span>
              </div>
              <h4 className="font-display font-black text-xl sm:text-2xl lg:text-3xl text-[#17151B] tracking-tight mt-0.5">
                PULZION'26 — TYPOGRAPHY REEL
              </h4>
            </div>
            <span className="self-start sm:self-auto px-2.5 py-0.5 rounded-full bg-[#EAE0FF] text-[#6C41CE] text-[10px] font-mono font-bold border border-[#DCCCF5]">
              16:9 HORIZONTAL
            </span>
          </div>

          <p className="font-sans text-xs sm:text-sm text-[#575360] font-medium tracking-wide uppercase">
            A TYPOGRAPHY-DRIVEN PROMOTIONAL REEL BUILDING THE VISUAL IDENTITY AND HYPE OF PULZION'26.
          </p>

          <VeloxxVideoPlayer
            src="/videos/pulzion26/pulzion-typo.mp4"
            fallbackSrc="./videos/pulzion26/pulzion-typo.mp4"
            aspectRatio="16:9"
            title="PULZION'26 — TYPOGRAPHY REEL"
            subtitle="FEATURED 16:9 TYPOGRAPHY FILM"
            playClickSound={playClickSound}
            className="w-full shadow-2xl"
          />
        </div>
      </div>

      {/* ───────────────────────────────────────────────────────────
          4. VERTICAL SOCIAL CONTENT (VIDEOS 03, 04, 05, 06 — 9:16)
          ─────────────────────────────────────────────────────────── */}
      <div className="pt-8 border-t border-[#DCCCF5]/80 space-y-8">
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#17151B] font-bold">
              <Layers className="w-4 h-4 text-[#8964DE]" />
              <span>VERTICAL SOCIAL CONTENT (9:16)</span>
            </div>
            <span className="text-[11px] font-mono text-[#77717F]">
              4 FEATURED VERTICAL REELS
            </span>
          </div>
          <p className="font-mono text-xs text-[#77717F] mt-1">
            FOUR HIGH-IMPACT SOCIAL REELS CRAFTED FOR VIRAL REACH AND AUDIENCE ENGAGEMENT
          </p>
        </div>

        {/* 4-Column Responsive Grid on Desktop, 2-Col on Tablet, Stack on Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {/* VIDEO 03 — PULZION DAY 1 */}
          <div className="space-y-3 flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-white/70 border border-[#DCCCF5] shadow-sm hover:border-[#8964DE] transition-colors">
            <div className="min-h-[105px]">
              <div className="flex items-center justify-between text-xs font-mono mb-1">
                <span className="text-[10px] font-bold text-[#8964DE]">VIDEO 03</span>
                <span className="px-2 py-0.5 rounded bg-[#EAE0FF] text-[#6C41CE] text-[10px] font-bold">
                  9:16 VERTICAL
                </span>
              </div>
              <h5 className="font-display font-black text-base sm:text-lg text-[#17151B] tracking-tight">
                PULZION DAY 1
              </h5>
              <p className="font-sans text-[11px] sm:text-xs text-[#575360] font-medium tracking-wide uppercase mt-1 leading-snug">
                A LOOK BACK AT THE ENERGY, HIGHLIGHTS AND MOMENTS FROM DAY ONE.
              </p>
            </div>

            <div className="pt-2">
              <VeloxxVideoPlayer
                src="/videos/pulzion26/pulzion-day1.mp4"
                fallbackSrc="./videos/pulzion26/pulzion-day1.mp4"
                aspectRatio="9:16"
                title="PULZION DAY 1"
                subtitle="VERTICAL 9:16 REEL"
                playClickSound={playClickSound}
              />
            </div>
          </div>

          {/* VIDEO 04 — AI BGM REEL */}
          <div className="space-y-3 flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-white/70 border border-[#DCCCF5] shadow-sm hover:border-[#C9A45C] transition-colors">
            <div className="min-h-[105px]">
              <div className="flex items-center justify-between text-xs font-mono mb-1">
                <span className="text-[10px] font-bold text-[#C9A45C]">VIDEO 04</span>
                <span className="px-2 py-0.5 rounded bg-[#EAE0FF] text-[#6C41CE] text-[10px] font-bold">
                  9:16 VERTICAL
                </span>
              </div>
              <h5 className="font-display font-black text-base sm:text-lg text-[#17151B] tracking-tight">
                AI BGM REEL
              </h5>
              <p className="font-sans text-[11px] sm:text-xs text-[#575360] font-medium tracking-wide uppercase mt-1 leading-snug">
                AN AI-GENERATED VISUAL EXPERIENCE PAIRED WITH ANIRUDH'S HIGH-ENERGY BGM.
              </p>
            </div>

            <div className="pt-2">
              <VeloxxVideoPlayer
                src="/videos/pulzion26/pulzion-ai-bgm.mp4"
                fallbackSrc="./videos/pulzion26/pulzion-ai-bgm.mp4"
                aspectRatio="9:16"
                title="AI BGM REEL"
                subtitle="VERTICAL 9:16 REEL"
                playClickSound={playClickSound}
              />
            </div>
          </div>

          {/* VIDEO 05 — TESLA FLYING CAR TREND */}
          <div className="space-y-3 flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-white/70 border border-[#DCCCF5] shadow-sm hover:border-[#8964DE] transition-colors">
            <div className="min-h-[105px]">
              <div className="flex items-center justify-between text-xs font-mono mb-1">
                <span className="text-[10px] font-bold text-[#8964DE]">VIDEO 05</span>
                <span className="px-2 py-0.5 rounded bg-[#EAE0FF] text-[#6C41CE] text-[10px] font-bold">
                  9:16 VERTICAL
                </span>
              </div>
              <h5 className="font-display font-black text-base sm:text-lg text-[#17151B] tracking-tight">
                TESLA FLYING CAR TREND
              </h5>
              <p className="font-sans text-[11px] sm:text-xs text-[#575360] font-medium tracking-wide uppercase mt-1 leading-snug">
                A TREND-INSPIRED AI VISUAL FEATURING THE TESLA FLYING CAR CONCEPT.
              </p>
            </div>

            <div className="pt-2">
              <VeloxxVideoPlayer
                src="/videos/pulzion26/pulzion-elon-flyingcar-ai.mp4"
                fallbackSrc="./videos/pulzion26/pulzion-elon-flyingcar-ai.mp4"
                aspectRatio="9:16"
                title="TESLA FLYING CAR TREND"
                subtitle="VERTICAL 9:16 REEL"
                playClickSound={playClickSound}
              />
            </div>
          </div>

          {/* VIDEO 06 — GUESS WHAT? */}
          <div className="space-y-3 flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-white/70 border border-[#DCCCF5] shadow-sm hover:border-[#6C41CE] transition-colors">
            <div className="min-h-[105px]">
              <div className="flex items-center justify-between text-xs font-mono mb-1">
                <span className="text-[10px] font-bold text-[#6C41CE]">VIDEO 06</span>
                <span className="px-2 py-0.5 rounded bg-[#EAE0FF] text-[#6C41CE] text-[10px] font-bold">
                  9:16 VERTICAL
                </span>
              </div>
              <h5 className="font-display font-black text-base sm:text-lg text-[#17151B] tracking-tight">
                GUESS WHAT?
              </h5>
              <p className="font-sans text-[11px] sm:text-xs text-[#575360] font-medium tracking-wide uppercase mt-1 leading-snug">
                A FUNNY, UNEXPECTED HYPE REEL BUILT AROUND THE 'GUESS WHAT?' CONCEPT.
              </p>
            </div>

            <div className="pt-2">
              <VeloxxVideoPlayer
                src="/videos/pulzion26/pulzion-hype-funny.mp4"
                fallbackSrc="./videos/pulzion26/pulzion-hype-funny.mp4"
                aspectRatio="9:16"
                title="GUESS WHAT?"
                subtitle="VERTICAL 9:16 REEL"
                playClickSound={playClickSound}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ───────────────────────────────────────────────────────────
          5. PASC CLOSING PROJECT CTA
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
