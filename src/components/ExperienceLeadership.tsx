import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { COLLEGE_EXPERIENCES } from '../data/experienceLeadership';
import { CollegeExperienceItem, CollegeProjectShowcase, ProjectReel } from '../types';
import { ReelCard } from './ReelCard';
import { ProjectModal } from './ProjectModal';
import { PulzionShowcase } from './PulzionShowcase';
import { StriverShowcase } from './StriverShowcase';
import { AddictionShowcase } from './AddictionShowcase';
import { Sparkles, Calendar, CheckCircle2, Layers, Award, Instagram, ExternalLink, Flame } from 'lucide-react';

interface ExperienceLeadershipProps {
  playClickSound?: () => void;
}

export const ExperienceLeadership: React.FC<ExperienceLeadershipProps> = ({ playClickSound }) => {
  const [selectedReel, setSelectedReel] = useState<ProjectReel | null>(null);
  const [activeProject, setActiveProject] = useState<{
    org: CollegeExperienceItem;
    project: CollegeProjectShowcase;
  } | null>(null);

  const handleSelectReel = (
    reel: ProjectReel,
    org: CollegeExperienceItem,
    project: CollegeProjectShowcase
  ) => {
    playClickSound?.();
    setSelectedReel(reel);
    setActiveProject({ org, project });
  };

  return (
    <section id="experience" className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-[#EFE7F9]/80 via-[#F6F1E9]/50 to-[#F5F0FA] border-b border-[#DCCCF5]/60">
      
      {/* Background Decorative Blur & Grid */}
      <div className="absolute top-1/3 right-10 w-[600px] h-[600px] bg-[#8964DE]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#C9A45C]/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-20 border-b border-[#DCCCF5]/80 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE0FF] text-[#6C41CE] text-xs font-mono tracking-widest font-semibold mb-4 border border-[#DCCCF5]">
              <Sparkles className="w-3.5 h-3.5 text-[#8964DE]" />
              EXPERIENCE &amp; LEADERSHIP / 03
            </div>

            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-[#17151B] tracking-tight leading-[1.02]">
              LEADING THE <br />
              <span className="font-serif italic font-normal text-[#6C41CE] selection:bg-[#DCCCF5]">
                VISUAL NARRATIVE.
              </span>
            </h2>
          </div>

          <div className="max-w-md space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#17151B] text-[#C9A45C] text-[10px] font-mono tracking-widest font-bold">
              <span>✦</span>
              <span>COLLEGIATE LEADERSHIP ROLES</span>
            </div>

            <p className="font-sans text-sm sm:text-base text-[#575360] leading-relaxed">
              Showcasing my core responsibilities, creative direction, and video production leadership across PICT student organizations and flagship festivals.
            </p>

            <div className="inline-block px-3 py-1 rounded-full bg-[#EFE7F9] text-[#6C41CE] text-[11px] font-mono border border-[#DCCCF5]">
              NOTE: College leadership experiences — not external client work
            </div>
          </div>
        </div>

        {/* Organizations Stack */}
        <div className="space-y-24 sm:space-y-32">
          {COLLEGE_EXPERIENCES.map((org) => {
            if (org.id === 'pict-acm-pasc') {
              return (
                <React.Fragment key={org.id}>
                  {/* PASC Showcase 1: PULZION'26 */}
                  <PulzionShowcase playClickSound={playClickSound} />

                  {/* PASC Showcase 2: STRIVER: CODE TO CAREER */}
                  <StriverShowcase playClickSound={playClickSound} />
                </React.Fragment>
              );
            }

            if (org.id === 'pict-addiction-26') {
              return (
                <AddictionShowcase
                  key={org.id}
                  playClickSound={playClickSound}
                />
              );
            }

            return (
              <div
                key={org.id}
                className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-white/90 backdrop-blur-md border border-[#DCCCF5] shadow-xl relative"
              >
              {/* Organization Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-[#DCCCF5]/80 mb-10">
                <div className="flex items-start sm:items-center gap-5 sm:gap-6">
                  {/* Official Organization Logo */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white p-3 border border-[#DCCCF5] shadow-xs flex items-center justify-center shrink-0">
                    <img
                      src={org.logoUrl}
                      alt={org.logoAlt}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>

                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-[#C9A45C] font-bold tracking-widest">
                        {org.badge}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#EAE0FF] text-[#6C41CE] border border-[#DCCCF5]">
                        <Calendar className="w-3 h-3" />
                        {org.period}
                      </span>
                    </div>

                    <h3 className="font-display font-black text-2xl sm:text-4xl text-[#17151B] tracking-tight mt-1">
                      {org.organization}
                    </h3>

                    {/* Official Role Badge */}
                    <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#17151B] text-[#C9A45C] font-mono text-xs font-bold tracking-wider">
                      <Award className="w-3.5 h-3.5 text-[#C9A45C]" />
                      ROLE: {org.role}
                    </div>
                  </div>
                </div>

                <p className="max-w-md font-sans text-xs sm:text-sm text-[#575360] leading-relaxed">
                  {org.overview}
                </p>
              </div>

              {/* Responsibilities Bar */}
              <div className="mb-12 p-5 rounded-2xl bg-[#F5F0FA] border border-[#DCCCF5]/80">
                <div className="text-xs font-mono font-bold text-[#17151B] tracking-wider mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#6C41CE]" />
                  LEADERSHIP RESPONSIBILITIES &amp; SCOPE
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {org.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2.5 text-xs text-[#575360] leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#8964DE] shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dedicated Project Showcases under this organization */}
              <div className="space-y-16">
                {org.projects.map((proj, pIdx) => (
                  <div
                    key={proj.id}
                    className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#FAF8FC] to-white border border-[#DCCCF5] shadow-sm space-y-8"
                  >
                    {/* Project Title Bar */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#DCCCF5]/60">
                      <div>
                        <div className="flex items-center gap-2 text-xs font-mono text-[#8964DE] font-semibold tracking-wider">
                          <span>PROJECT SHOWCASE 0{pIdx + 1}</span>
                          {proj.theme && (
                            <span className="px-2 py-0.5 rounded bg-[#17151B] text-[#C9A45C] text-[10px] font-bold">
                              THEME: {proj.theme}
                            </span>
                          )}
                          {proj.eventCount && (
                            <span className="px-2 py-0.5 rounded bg-[#EAE0FF] text-[#6C41CE] text-[10px] font-bold">
                              {proj.eventCount} EVENTS HOSTED
                            </span>
                          )}
                        </div>
                        <h4 className="font-display font-black text-2xl sm:text-3xl text-[#17151B] mt-1 tracking-tight">
                          {proj.title}
                        </h4>
                        <p className="font-mono text-xs text-[#77717F] mt-0.5">
                          {proj.tagline}
                        </p>
                      </div>

                      {proj.socialLinks?.instagramUrl && (
                        <a
                          href={proj.socialLinks.instagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => playClickSound?.()}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono bg-white hover:bg-[#17151B] text-[#575360] hover:text-[#C9A45C] border border-[#DCCCF5] hover:border-[#17151B] transition-all self-start sm:self-auto"
                        >
                          <Instagram className="w-3.5 h-3.5 text-[#C9A45C]" />
                          <span>{proj.socialLinks.instagramHandle}</span>
                          <ExternalLink className="w-3 h-3 text-[#77717F]" />
                        </a>
                      )}
                    </div>

                    <p className="font-sans text-sm text-[#575360] leading-relaxed">
                      {proj.description}
                    </p>

                    {/* Vertical Reels Gallery (2-3 per row) */}
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#17151B] tracking-wider">
                          <Layers className="w-4 h-4 text-[#C9A45C]" />
                          <span>EVENT REELS &amp; PROMOTIONAL EDITS (9:16)</span>
                        </div>
                        <span className="text-[11px] font-mono text-[#77717F]">
                          {proj.reels.length} REELS
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {proj.reels.map((reel) => (
                          <ReelCard
                            key={reel.id}
                            reel={reel}
                            accentColor={org.accentColor}
                            onSelectReel={() => handleSelectReel(reel, org, proj)}
                            playClickSound={playClickSound}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Highlights List */}
                    <div className="pt-6 border-t border-[#DCCCF5]/60">
                      <div className="text-xs font-mono font-bold text-[#17151B] tracking-wider mb-3">
                        EVENT HIGHLIGHTS &amp; VIDEO PRODUCTION WINS
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                        {proj.highlights.map((hl, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs text-[#575360] leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C] shrink-0 mt-1.5" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Verified Metrics Badge */}
                    <div className="p-3.5 rounded-xl bg-[#EFE7F9]/50 border border-[#DCCCF5] flex items-center justify-between text-xs font-mono">
                      <span className="text-[#6C41CE] font-semibold">VERIFIED PERFORMANCE METRICS</span>
                      <span className="text-[#77717F] text-[11px]">{proj.verifiedMetricsNotice}</span>
                    </div>

                  </div>
                ))}
              </div>

            </div>
            );
          })}
        </div>

      </div>

      {/* Reel Modal Preview */}
      {selectedReel && activeProject && (
        <ProjectModal
          isOpen={Boolean(selectedReel)}
          onClose={() => {
            setSelectedReel(null);
            setActiveProject(null);
          }}
          modalData={{
            title: selectedReel.title,
            category: activeProject.org.role,
            number: '03',
            year: activeProject.org.period,
            client: activeProject.org.organization,
            role: activeProject.org.role,
            duration: selectedReel.duration,
            aspectRatio: selectedReel.aspectRatio,
            thumbnailUrl: selectedReel.thumbnailUrl,
            videoUrl: selectedReel.videoUrl,
            description: activeProject.project.description,
            highlights: activeProject.project.highlights,
            tools: ['Premiere Pro', 'After Effects', 'Photoshop'],
            viewsInfo: selectedReel.viewsPlaceholder,
            socialUrl: selectedReel.socialUrl,
          }}
          playClickSound={playClickSound}
        />
      )}

    </section>
  );
};
