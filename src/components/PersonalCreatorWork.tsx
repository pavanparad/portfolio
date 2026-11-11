import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_CREATOR_DATA } from '../data/personalCreator';
import { PersonalCreatorReel, ProjectReel } from '../types';
import { InstagramReelEmbed } from './InstagramReelEmbed';
import { ProjectModal } from './ProjectModal';
import {
  Sparkles,
  Instagram,
  ExternalLink,
  Flame,
  Award,
  Layers,
  ArrowUpRight,
  TrendingUp,
} from 'lucide-react';

interface PersonalCreatorWorkProps {
  playClickSound?: () => void;
}

export const PersonalCreatorWork: React.FC<PersonalCreatorWorkProps> = ({ playClickSound }) => {
  const [selectedReel, setSelectedReel] = useState<ProjectReel | null>(null);

  const handleSelectReel = (reel: PersonalCreatorReel) => {
    playClickSound?.();
    setSelectedReel({
      id: reel.id,
      title: reel.title,
      label: `REEL ${reel.reelNumber}`,
      aspectRatio: '9:16',
      thumbnailUrl: reel.thumbnailUrl,
      videoUrl: reel.videoUrl || '',
      viewsCount: reel.displayViews,
      socialUrl: reel.instagramUrl,
    });
  };

  return (
    <section
      id="creator"
      className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-[#17151B] via-[#1E1B24] to-[#17151B] text-[#F6F1E9] border-b border-[#DCCCF5]/30"
    >
      {/* Ambient Glows & Grid Pattern */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#C9A45C]/12 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-[#8964DE]/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* ───────────────────────────────────────────────────────────
            1. SECTION IDENTITY & HEADER LOCKUP
            ─────────────────────────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-16 pb-10 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#C9A45C] text-xs font-mono tracking-widest font-semibold mb-4 border border-[#C9A45C]/40">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A45C]" />
              PERSONAL CREATOR WORK / 04
            </div>

            <div className="flex items-center gap-4 mb-3">
              {/* PAVAN ARTS Official Logo */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white p-2 border border-[#C9A45C]/60 shadow-lg flex items-center justify-center shrink-0 overflow-hidden">
                <img
                  src={PERSONAL_CREATOR_DATA.logoUrl}
                  alt={PERSONAL_CREATOR_DATA.logoAlt}
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm text-[#C9A45C] tracking-widest font-bold">
                    {PERSONAL_CREATOR_DATA.platformName}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-[#8964DE]/20 text-[#DCCCF5] border border-[#8964DE]/40">
                    OWN CREATOR BRAND
                  </span>
                </div>
                <span className="text-xs font-mono text-[#DCCCF5] block mt-0.5">
                  PERSONAL CREATOR PLATFORM · NOT AN EXTERNAL CLIENT
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#F6F1E9] tracking-tight leading-[1.05]">
              MADE BY ME. <br />
              <span className="font-serif italic font-normal text-[#C9A45C]">
                WATCHED BY MILLIONS.
              </span>
            </h2>

            {/* Supporting Description */}
            <p className="font-sans text-sm sm:text-base text-[#DCCCF5] leading-relaxed max-w-2xl mt-4">
              {PERSONAL_CREATOR_DATA.supportingDescription}
            </p>

            {/* Performance Statement */}
            <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#C9A45C]/40 text-xs font-mono text-[#C9A45C]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C] animate-pulse" />
              <span className="font-semibold tracking-wide">
                {PERSONAL_CREATOR_DATA.performanceStatement}
              </span>
            </div>
          </div>

          {/* Quick Instagram Profile Pill */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3 shrink-0">
            <a
              href={PERSONAL_CREATOR_DATA.instagramProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playClickSound?.()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono bg-white/10 hover:bg-[#C9A45C] text-[#F6F1E9] hover:text-[#17151B] border border-[#C9A45C]/40 hover:border-[#C9A45C] transition-all shadow-sm group"
            >
              <Instagram className="w-4 h-4 text-[#C9A45C] group-hover:text-[#17151B] transition-colors" />
              <span className="font-bold tracking-wider">{PERSONAL_CREATOR_DATA.instagramHandle}</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#C9A45C] group-hover:text-[#17151B] transition-colors" />
            </a>
            <span className="text-[10px] font-mono text-[#A89FB5]">
              OFFICIAL CREATOR INSTAGRAM PROFILE
            </span>
          </div>
        </div>

        {/* ───────────────────────────────────────────────────────────
            2. FEATURED PERFORMANCE HIGHLIGHT (MINIMAL STATS AREA)
            ─────────────────────────────────────────────────────────── */}
        <div className="mb-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-[#C9A45C]/30 backdrop-blur-md relative overflow-hidden">
            <span className="absolute -right-12 -top-12 w-48 h-48 bg-[#C9A45C]/15 rounded-full blur-3xl pointer-events-none" />

            {PERSONAL_CREATOR_DATA.featuredStats.map((stat, sIdx) => (
              <div
                key={sIdx}
                className="flex flex-col justify-between p-5 rounded-2xl bg-[#17151B]/85 border border-white/5 relative group hover:border-[#C9A45C]/60 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono tracking-widest text-[#C9A45C] uppercase font-bold">
                    HIGHLIGHT 0{sIdx + 1}
                  </span>
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      sIdx === 0 ? 'bg-[#C9A45C] animate-pulse' : sIdx === 1 ? 'bg-[#8964DE]' : 'bg-[#DCCCF5]'
                    }`}
                  />
                </div>

                <div>
                  <div
                    className={`font-display font-black tracking-tight ${
                      sIdx === 2
                        ? 'text-3xl sm:text-4xl text-[#F6F1E9]'
                        : 'text-4xl sm:text-5xl text-[#C9A45C]'
                    }`}
                  >
                    {stat.value}
                  </div>
                  <div className="font-mono text-xs font-bold text-[#F6F1E9] uppercase tracking-wider mt-2">
                    {stat.label}
                  </div>
                </div>

                {stat.subtext && (
                  <p className="font-sans text-[11px] text-[#A89FB5] mt-2 pt-2 border-t border-white/5 leading-relaxed">
                    {stat.subtext}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Minimal Disclaimer / Verification Note */}
          <div className="mt-3 px-2 flex items-center justify-between flex-wrap gap-2 text-[10px] font-mono text-[#A89FB5]">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C]" />
              <span>
                The 5.2M+ figure represents the combined play count of the three featured reels below.
              </span>
            </div>
            <span className="text-[#C9A45C]">PORTFOLIO HIGHLIGHT</span>
          </div>
        </div>

        {/* ───────────────────────────────────────────────────────────
            3. THREE-COLUMN INSTAGRAM REEL SHOWCASE
            ─────────────────────────────────────────────────────────── */}
        <div>
          <div className="flex items-center justify-between mb-6 pb-2">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#F6F1E9] font-bold">
              <Layers className="w-4 h-4 text-[#C9A45C]" />
              <span>FEATURED INSTAGRAM REELS (9:16)</span>
            </div>
            <span className="text-[11px] font-mono text-[#DCCCF5]">
              THREE FEATURED REELS · 5.2M+ COMBINED VIEWS
            </span>
          </div>

          {/* 3-Column Grid for Desktop, 2-Column for Tablet, Stack for Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {PERSONAL_CREATOR_DATA.reels.map((reel) => (
              <InstagramReelEmbed
                key={reel.id}
                reel={reel}
                playClickSound={playClickSound}
              />
            ))}
          </div>
        </div>

        {/* ───────────────────────────────────────────────────────────
            4. PAVAN ARTS PROFILE CALL-TO-ACTION (CTA)
            ─────────────────────────────────────────────────────────── */}
        <div className="mt-16 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-white/[0.04] via-[#C9A45C]/10 to-white/[0.04] border border-[#C9A45C]/30 shadow-2xl">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-white p-2 border border-[#C9A45C]/60 shadow-md flex items-center justify-center shrink-0">
              <img
                src={PERSONAL_CREATOR_DATA.logoUrl}
                alt={PERSONAL_CREATOR_DATA.logoAlt}
                className="w-full h-full object-cover rounded-xl"
                loading="lazy"
              />
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <h4 className="font-display font-black text-xl text-[#F6F1E9]">
                  {PERSONAL_CREATOR_DATA.platformName}
                </h4>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#17151B] text-[#C9A45C] border border-[#C9A45C]/40">
                  {PERSONAL_CREATOR_DATA.instagramHandle}
                </span>
              </div>
              <p className="font-sans text-xs text-[#DCCCF5] mt-1">
                Content that connects through art, consistency, and cinematic pacing.
              </p>
            </div>
          </div>

          <a
            href={PERSONAL_CREATOR_DATA.instagramProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playClickSound?.()}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-mono font-bold tracking-widest bg-gradient-to-r from-[#C9A45C] via-[#E2C485] to-[#C9A45C] text-[#17151B] hover:shadow-[0_0_25px_rgba(201,164,92,0.45)] transition-all transform hover:scale-105 active:scale-95 shrink-0"
          >
            <Instagram className="w-4 h-4 text-[#17151B]" />
            <span>{PERSONAL_CREATOR_DATA.ctaText}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#17151B]" />
          </a>
        </div>
      </div>

      {/* Reel Modal Preview (if triggered) */}
      {selectedReel && (
        <ProjectModal
          isOpen={Boolean(selectedReel)}
          onClose={() => setSelectedReel(null)}
          modalData={{
            title: selectedReel.title,
            category: 'PERSONAL CREATOR PLATFORM',
            number: '04',
            year: '2026',
            client: 'PAVAN ARTS',
            role: 'Creator & Video Editor',
            duration: selectedReel.duration || '00:30',
            aspectRatio: selectedReel.aspectRatio,
            thumbnailUrl: selectedReel.thumbnailUrl,
            videoUrl: selectedReel.videoUrl,
            description: PERSONAL_CREATOR_DATA.supportingDescription,
            highlights: [
              '5.2M+ combined views across the three featured reels',
              'Engineered for maximum retention and organic reach',
              'Consistent 100K+ monthly audience engagement',
            ],
            tools: ['Premiere Pro', 'After Effects', 'Photoshop'],
            viewsInfo: selectedReel.viewsCount || '5.2M+ COMBINED',
            socialUrl: selectedReel.socialUrl,
          }}
          playClickSound={playClickSound}
        />
      )}
    </section>
  );
};
