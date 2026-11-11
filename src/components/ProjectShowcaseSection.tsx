import React from 'react';
import { motion } from 'framer-motion';
import { ProjectShowcaseItem, ProjectReel } from '../types';
import { ReelCard } from './ReelCard';
import { 
  Sparkles, 
  ArrowUpRight, 
  Instagram, 
  ExternalLink, 
  BarChart3, 
  CheckCircle2, 
  Award, 
  Layers, 
  Calendar,
  Globe,
  Film
} from 'lucide-react';

interface ProjectShowcaseSectionProps {
  project: ProjectShowcaseItem;
  index: number;
  onSelectReel?: (reel: ProjectReel) => void;
  playClickSound?: () => void;
}

export const ProjectShowcaseSection: React.FC<ProjectShowcaseSectionProps> = ({
  project,
  index,
  onSelectReel,
  playClickSound,
}) => {
  return (
    <article
      id={`project-${project.id}`}
      className="relative py-16 sm:py-24 border-b border-[#DCCCF5]/70 last:border-b-0"
    >
      {/* Background Decorative Accent Ring */}
      <div 
        className="absolute top-20 right-10 w-96 h-96 rounded-full blur-[140px] pointer-events-none opacity-20"
        style={{ backgroundColor: project.accentColor }}
      />

      <div className="space-y-12 sm:space-y-16">
        
        {/* =========================================================================
            PART A: PROJECT INTRODUCTION
        ========================================================================= */}
        <div className="rounded-3xl p-6 sm:p-10 border border-[#DCCCF5] bg-white/90 backdrop-blur-xs shadow-sm space-y-8">
          
          {/* Top Line: Monogram, Number, Category & Year */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#DCCCF5]/70 text-xs font-mono">
            <div className="flex items-center gap-3">
              {/* Project Logo / Monogram */}
              {project.logoUrl && (
                <div className="w-12 h-12 rounded-xl bg-[#17151B] p-2 flex items-center justify-center border border-[#C9A45C]/50 shadow-xs">
                  <img
                    src={project.logoUrl}
                    alt={`${project.title} logo mark`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              )}
              <div>
                <span className="px-2.5 py-0.5 rounded bg-[#17151B] text-[#C9A45C] font-bold text-[11px] tracking-wider">
                  PROJECT {project.number} // 04
                </span>
                <span className="text-[#6C41CE] font-bold tracking-wider uppercase text-[11px] ml-2 hidden sm:inline">
                  {project.category}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-[#77717F] text-xs">
              <span className="px-3 py-1 rounded-full bg-[#F6F1E9] border border-[#DCCCF5] text-[#17151B] font-semibold">
                {project.year}
              </span>
              <span className="hidden md:inline font-mono">CLIENT / ORG: <strong>{project.client}</strong></span>
            </div>
          </div>

          {/* Heading & Role Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <h3 className="font-display font-black text-3xl sm:text-5xl text-[#17151B] tracking-tight leading-[1.08]">
                {project.title}
              </h3>
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE0FF] text-[#6C41CE] text-xs font-mono font-bold tracking-wider border border-[#DCCCF5]">
                <span>✦ ROLE:</span>
                <span className="text-[#17151B]">{project.role}</span>
              </div>

              <p className="font-sans text-base sm:text-lg text-[#575360] leading-relaxed">
                {project.introduction}
              </p>
            </div>

            {/* Responsibilities Column */}
            <div className="lg:col-span-5 bg-[#F6F1E9]/70 rounded-2xl p-5 sm:p-6 border border-[#DCCCF5]/80 space-y-3">
              <div className="text-xs font-mono font-bold tracking-wider text-[#17151B] uppercase flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#C9A45C]" />
                CORE RESPONSIBILITIES &amp; SCOPE
              </div>
              <ul className="space-y-2 text-xs font-sans text-[#575360]">
                {project.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#C9A45C] font-bold mt-0.5">✦</span>
                    <span className="leading-snug">{resp}</span>
                  </li>
                ))}
              </ul>

              {/* Tools Pill Strip */}
              <div className="pt-3 border-t border-[#DCCCF5]/60 flex flex-wrap items-center gap-1.5">
                <span className="text-[10px] font-mono text-[#77717F] mr-1">STACK:</span>
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-[#17151B] border border-[#DCCCF5] font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* =========================================================================
            PART B & C: VIDEO / REEL GALLERY (VERTICAL 9:16 FRAMES)
        ========================================================================= */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-3 border-b border-[#DCCCF5]/60">
            <div>
              <span className="text-xs font-mono text-[#C9A45C] font-bold tracking-widest uppercase">
                VERTICAL VIDEO SHOWCASE // 9:16
              </span>
              <h4 className="font-display font-black text-xl sm:text-2xl text-[#17151B]">
                Curated Reel Repertoire.
              </h4>
            </div>
            <span className="text-xs font-mono text-[#77717F] flex items-center gap-1.5">
              <Film className="w-3.5 h-3.5 text-[#6C41CE]" />
              AUTO-PLAYS MUTED ON SCROLL • SOUND &amp; FULLSCREEN CONTROLS
            </span>
          </div>

          {/* Responsive Reel Gallery: 3 Columns Desktop, 2 Tablet, 1 Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {project.reels.map((reel) => (
              <ReelCard
                key={reel.id}
                reel={reel}
                accentColor={project.accentColor}
                onSelectReel={onSelectReel}
                playClickSound={playClickSound}
              />
            ))}
          </div>
        </div>

        {/* =========================================================================
            PART D: PROJECT PERFORMANCE AREA (FACTUAL & VERIFIED PLACEHOLDERS)
        ========================================================================= */}
        <div className="rounded-3xl p-6 sm:p-8 bg-[#17151B] text-[#F6F1E9] border border-[#C9A45C]/40 shadow-xl space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#C9A45C] text-[#17151B] flex items-center justify-center font-bold">
                <BarChart3 className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-display font-bold text-base sm:text-lg text-white">
                  Project Performance &amp; Analytics
                </h4>
                <span className="text-[10px] font-mono text-[#C9A45C] tracking-wider">
                  VERIFIED STATS POLICY // ZERO INVENTED METRICS
                </span>
              </div>
            </div>

            <div className="px-3 py-1 rounded-full bg-white/10 text-[#C9A45C] text-[11px] font-mono border border-white/15 self-start sm:self-auto">
              {project.performance.metricsNotice}
            </div>
          </div>

          {/* Performance Stat Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Total Views */}
            <div className="rounded-2xl p-5 bg-[#211E26] border border-white/10 space-y-2">
              <div className="text-[11px] font-mono text-[#A88BEA] tracking-wider uppercase">
                TOTAL CAMPAIGN VIEWS
              </div>
              <div className="text-xl sm:text-2xl font-mono font-bold text-[#C9A45C]">
                {project.performance.totalViewsPlaceholder}
              </div>
              <p className="text-[10px] font-mono text-[#77717F]">
                Combined impressions across reels &amp; promo trailers
              </p>
            </div>

            {/* Campaign Reach */}
            <div className="rounded-2xl p-5 bg-[#211E26] border border-white/10 space-y-2">
              <div className="text-[11px] font-mono text-[#A88BEA] tracking-wider uppercase">
                CAMPUS &amp; SOCIAL REACH
              </div>
              <div className="text-xl sm:text-2xl font-mono font-bold text-white">
                {project.performance.reachPlaceholder}
              </div>
              <p className="text-[10px] font-mono text-[#77717F]">
                Unique accounts reached during campaign window
              </p>
            </div>

            {/* Engagement Rate */}
            <div className="rounded-2xl p-5 bg-[#211E26] border border-white/10 space-y-2">
              <div className="text-[11px] font-mono text-[#A88BEA] tracking-wider uppercase">
                ENGAGEMENT DYNAMICS
              </div>
              <div className="text-xl sm:text-2xl font-mono font-bold text-[#C9A45C]">
                {project.performance.engagementPlaceholder}
              </div>
              <p className="text-[10px] font-mono text-[#77717F]">
                Saves, shares, and high retention completion rate
              </p>
            </div>
          </div>

          {/* Breakdown per individual reel */}
          <div className="pt-2">
            <span className="text-[11px] font-mono text-[#77717F] block mb-2">INDIVIDUAL REEL METRICS LOG:</span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-mono text-white/80">
              {project.reels.map((r, i) => (
                <div key={r.id} className="p-2.5 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between">
                  <span className="text-[11px] text-[#A88BEA]">REEL {i + 1}</span>
                  <span className="text-[#C9A45C] text-[10px]">{r.viewsPlaceholder}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* =========================================================================
            PART E & F: PROJECT HIGHLIGHTS & SOCIAL MEDIA LINKS
        ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* E. Project Highlights & Factual Scale */}
          <div className="lg:col-span-7 rounded-3xl p-6 sm:p-8 bg-white/90 border border-[#DCCCF5] shadow-sm space-y-5 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#6C41CE] tracking-wider uppercase">
                  EVENT HIGHLIGHTS &amp; SCALE
                </span>
                {project.highlightsSection.eventCount && (
                  <span className="px-2.5 py-0.5 rounded-full bg-[#17151B] text-[#C9A45C] text-[10px] font-mono font-bold">
                    {project.highlightsSection.eventCount} EVENTS HOSTED
                  </span>
                )}
              </div>

              {project.highlightsSection.theme && (
                <div className="p-3 rounded-xl bg-[#EAE0FF]/60 border border-[#DCCCF5] text-xs font-mono text-[#17151B]">
                  OFFICIAL THEME: <strong className="text-[#6C41CE]">"{project.highlightsSection.theme}"</strong>
                </div>
              )}

              <p className="font-sans text-sm text-[#575360] leading-relaxed">
                {project.highlightsSection.description}
              </p>
            </div>

            {/* Bullet Highlights */}
            <div className="space-y-2 pt-3 border-t border-[#DCCCF5]/60">
              {project.highlightsSection.keyMoments.map((moment, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs font-sans text-[#575360]">
                  <span className="text-[#C9A45C] font-bold mt-0.5">✦</span>
                  <span>{moment}</span>
                </div>
              ))}
            </div>
          </div>

          {/* F. Social Media & Official Links */}
          <div className="lg:col-span-5 rounded-3xl p-6 sm:p-8 bg-[#F6F1E9]/80 border border-[#DCCCF5] shadow-sm space-y-5 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#17151B] tracking-wider uppercase flex items-center gap-1.5">
                  <Instagram className="w-4 h-4 text-[#C9A45C]" />
                  OFFICIAL SOCIAL MEDIA LINKS
                </span>
                <span className="text-[10px] font-mono text-[#77717F]">VERIFIED DESTINATIONS</span>
              </div>

              <p className="font-sans text-xs text-[#575360] leading-relaxed">
                Direct links to live Instagram reels, festival handle, and official student chapter media.
              </p>
            </div>

            {/* Links List */}
            <div className="space-y-2.5">
              {/* Instagram Handle */}
              <div className="p-3 rounded-xl bg-white border border-[#DCCCF5] flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <Instagram className="w-4 h-4 text-[#6C41CE]" />
                  <span className="font-bold text-[#17151B]">{project.socialLinks.instagramPage.handle}</span>
                </div>
                <span className="text-[10px] text-[#C9A45C] font-semibold bg-[#F6F1E9] px-2 py-0.5 rounded border border-[#DCCCF5]">
                  {project.socialLinks.instagramPage.urlPlaceholder}
                </span>
              </div>

              {/* Individual Reels Links */}
              {project.socialLinks.reels.map((sReel, i) => (
                <div key={i} className="p-3 rounded-xl bg-white/70 border border-[#DCCCF5]/70 flex items-center justify-between text-xs font-mono">
                  <span className="text-[11px] text-[#575360] font-medium truncate max-w-[160px]">
                    {sReel.title}
                  </span>
                  <span className="text-[9px] text-[#77717F] font-mono bg-[#EAE0FF]/60 px-2 py-0.5 rounded border border-[#DCCCF5]">
                    {sReel.urlPlaceholder}
                  </span>
                </div>
              ))}
            </div>

            {/* User instructions badge */}
            <div className="p-2.5 rounded-lg bg-[#EAE0FF]/50 border border-[#DCCCF5] text-[10px] font-mono text-[#6C41CE] flex items-center justify-between">
              <span>CONFIG: Ready in <code className="font-bold">src/data/projects.ts</code></span>
              <span className="font-bold text-[#17151B]">MODULAR ARCHITECTURE</span>
            </div>
          </div>

        </div>

      </div>
    </article>
  );
};
