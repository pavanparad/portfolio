import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CLIENT_PROJECTS } from '../data/clientProjects';
import { ClientProjectItem, ProjectReel } from '../types';
import { ReelCard } from './ReelCard';
import { ProjectModal } from './ProjectModal';
import { VeloxxShowcase } from './VeloxxShowcase';
import { ShuttleclubShowcase } from './ShuttleclubShowcase';
import { Sparkles, ArrowDown, ExternalLink, CheckCircle2, Instagram, Award, BarChart3, Layers } from 'lucide-react';

interface ClientProjectsProps {
  playClickSound?: () => void;
}

export const ClientProjects: React.FC<ClientProjectsProps> = ({ playClickSound }) => {
  const [selectedReel, setSelectedReel] = useState<ProjectReel | null>(null);
  const [selectedProject, setSelectedProject] = useState<ClientProjectItem | null>(null);

  const handleSelectReel = (reel: ProjectReel, project: ClientProjectItem) => {
    playClickSound?.();
    setSelectedReel(reel);
    setSelectedProject(project);
  };

  return (
    <section id="work" className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-[#F6F1E9]/40 via-[#F3EDFB]/60 to-[#EFE7F9]/80 border-b border-[#DCCCF5]/60">
      
      {/* Background Ambient Glow & Grid Pattern */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#DCCCF5]/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#C9A45C]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#DCCCF515_1px,transparent_1px),linear-gradient(to_bottom,#DCCCF515_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 border-b border-[#DCCCF5]/80 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE0FF] text-[#6C41CE] text-xs font-mono tracking-widest font-semibold mb-4 border border-[#DCCCF5]">
              <Sparkles className="w-3.5 h-3.5 text-[#8964DE]" />
              CLIENT PROJECTS / 02
            </div>

            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-[#17151B] tracking-tight leading-[1.02]">
              FRAMES THAT <br />
              <span className="font-serif italic font-normal text-[#6C41CE] selection:bg-[#DCCCF5]">
                SPEAK.
              </span>
            </h2>
          </div>

          <div className="max-w-md space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#17151B] text-[#C9A45C] text-[10px] font-mono tracking-widest font-bold">
              <span>✦</span>
              <span>THE WORK SPEAKS FOR ITSELF.</span>
            </div>

            <p className="font-sans text-sm sm:text-base text-[#575360] leading-relaxed">
              A collection of stories, experiences and visuals crafted through editing for confirmed client collaborations.
            </p>

            <div className="flex items-center gap-2 text-[11px] font-mono text-[#6C41CE]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C] animate-pulse" />
              <span>DEDICATED SHOWCASES FOR CONFIRMED BRAND COLLABORATIONS</span>
            </div>
          </div>
        </div>

        {/* Quick Showcase Jump Bar */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-16 no-scrollbar">
          <span className="text-xs font-mono text-[#77717F] mr-1 hidden sm:inline">JUMP TO CLIENT:</span>
          {CLIENT_PROJECTS.map((p) => (
            <a
              key={p.id}
              href={`#client-${p.id}`}
              onClick={() => playClickSound?.()}
              className="px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-200 whitespace-nowrap bg-white/80 hover:bg-[#17151B] text-[#575360] hover:text-[#C9A45C] border border-[#DCCCF5] hover:border-[#17151B] shadow-xs flex items-center gap-1.5"
            >
              <span className="text-[#C9A45C] font-bold">{p.number}</span>
              <span>{p.title}</span>
              <ArrowDown className="w-3 h-3 text-[#6C41CE]" />
            </a>
          ))}
        </div>

        {/* Client Project Showcases (Vertically Stacked, Strictly Separate) */}
        <div className="space-y-24 sm:space-y-32">
          {CLIENT_PROJECTS.map((project, idx) => {
            if (project.id === 'veloxx-club') {
              return (
                <VeloxxShowcase
                  key={project.id}
                  playClickSound={playClickSound}
                />
              );
            }

            if (project.id === 'shuttleclub') {
              return (
                <ShuttleclubShowcase
                  key={project.id}
                  playClickSound={playClickSound}
                />
              );
            }

            return (
              <section
                key={project.id}
                id={`client-${project.id}`}
                className="relative p-6 sm:p-10 lg:p-12 rounded-3xl bg-white/85 backdrop-blur-md border border-[#DCCCF5] shadow-lg transition-all duration-300"
              >
              {/* Corner Reticles */}
              <span className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#C9A45C]" />
              <span className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#C9A45C]" />
              <span className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#C9A45C]" />
              <span className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#C9A45C]" />

              {/* Project Header Lockup */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-[#DCCCF5]/80 mb-10">
                <div className="flex items-start sm:items-center gap-5 sm:gap-6">
                  {/* Official Logo Container */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white p-2.5 border border-[#DCCCF5] shadow-xs flex items-center justify-center shrink-0">
                    <img
                      src={project.logoUrl}
                      alt={project.logoAlt}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>

                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-[#C9A45C] font-bold tracking-widest">
                        CLIENT SHOWCASE {project.number}
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-[#EAE0FF] text-[#6C41CE] border border-[#DCCCF5]">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="font-display font-black text-2xl sm:text-4xl text-[#17151B] tracking-tight mt-1">
                      {project.title}
                    </h3>
                    <p className="font-mono text-xs sm:text-sm text-[#77717F] mt-0.5 tracking-wider">
                      {project.tagline}
                    </p>
                  </div>
                </div>

                {/* Social Links Bar */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <a
                    href={project.socialLinks.instagramPage.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playClickSound?.()}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-[#17151B] text-[#F6F1E9] hover:text-[#C9A45C] hover:border-[#C9A45C] border border-transparent transition-all shadow-xs"
                  >
                    <Instagram className="w-3.5 h-3.5 text-[#C9A45C]" />
                    <span>{project.socialLinks.instagramPage.handle}</span>
                    <ExternalLink className="w-3 h-3 text-[#C9A45C]" />
                  </a>
                </div>
              </div>

              {/* Vertical 9:16 Video Gallery */}
              <div className="mb-12">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#17151B] font-bold">
                    <Layers className="w-4 h-4 text-[#C9A45C]" />
                    <span>PROMOTIONAL VIDEOS &amp; REELS GALLERY (9:16)</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#77717F]">
                    {project.reels.length} CURATED REELS
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {project.reels.map((reel) => (
                    <ReelCard
                      key={reel.id}
                      reel={reel}
                      accentColor={project.accentColor}
                      onSelectReel={() => handleSelectReel(reel, project)}
                      playClickSound={playClickSound}
                    />
                  ))}
                </div>
              </div>

              {/* Details Grid: My Contribution & Project Highlights */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8 border-t border-[#DCCCF5]/80">
                
                {/* A. My Contribution */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#C9A45C]" />
                    <h4 className="font-mono text-xs uppercase tracking-widest font-bold text-[#17151B]">
                      My Contribution — {project.myContribution.role}
                    </h4>
                  </div>
                  <p className="font-sans text-sm text-[#575360] leading-relaxed">
                    {project.myContribution.description}
                  </p>
                  <ul className="space-y-2.5 pt-2">
                    {project.myContribution.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-[#575360] leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#8964DE] shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* B. Project Highlights & Verified Metrics */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#8964DE]" />
                    <h4 className="font-mono text-xs uppercase tracking-widest font-bold text-[#17151B]">
                      Project Highlights &amp; Performance
                    </h4>
                  </div>

                  <ul className="space-y-2.5">
                    {project.projectHighlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-[#575360] leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C] shrink-0 mt-1.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Performance Metric Container */}
                  <div className="p-4 rounded-2xl bg-[#F5F0FA] border border-[#DCCCF5] mt-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#17151B]">
                        <BarChart3 className="w-3.5 h-3.5 text-[#C9A45C]" />
                        VERIFIED VIEWS &amp; METRICS
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white text-[#6C41CE] border border-[#DCCCF5]">
                        {project.performance.verifiedViews}
                      </span>
                    </div>
                    <p className="font-mono text-[11px] text-[#77717F] leading-tight">
                      {project.performance.notice}
                    </p>
                  </div>
                </div>

              </div>

            </section>
            );
          })}
        </div>

      </div>

      {/* Reel Modal Preview */}
      {selectedReel && selectedProject && (
        <ProjectModal
          isOpen={Boolean(selectedReel)}
          onClose={() => {
            setSelectedReel(null);
            setSelectedProject(null);
          }}
          modalData={{
            title: selectedReel.title,
            category: selectedProject.category,
            number: selectedProject.number,
            year: '2026',
            client: selectedProject.title,
            role: selectedProject.myContribution.role,
            duration: selectedReel.duration,
            aspectRatio: selectedReel.aspectRatio,
            thumbnailUrl: selectedReel.thumbnailUrl,
            videoUrl: selectedReel.videoUrl,
            description: selectedProject.myContribution.description,
            highlights: selectedProject.projectHighlights,
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
