import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECT_SHOWCASES } from '../data/projects';
import { ProjectShowcaseItem, ProjectReel } from '../types';
import { ProjectShowcaseSection } from './ProjectShowcaseSection';
import { ProjectModal } from './ProjectModal';
import { Sparkles, Film, ArrowDown, ExternalLink } from 'lucide-react';

interface ProjectsProps {
  playClickSound?: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ playClickSound }) => {
  const [activeReel, setActiveReel] = useState<ProjectReel | null>(null);
  const [activeProject, setActiveProject] = useState<ProjectShowcaseItem | null>(null);

  const handleSelectReel = (reel: ProjectReel, project: ProjectShowcaseItem) => {
    playClickSound?.();
    setActiveReel(reel);
    setActiveProject(project);
  };

  return (
    <section id="work" className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-[#F6F1E9]/40 via-[#F3EDFB]/60 to-[#EFE7F9]/80">
      
      {/* Background Subtle Ambient Glow & Architectural Grid Lines */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#DCCCF5]/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#C9A45C]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#DCCCF515_1px,transparent_1px),linear-gradient(to_bottom,#DCCCF515_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* 1. SECTION IDENTITY */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 border-b border-[#DCCCF5]/80 pb-8">
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE0FF] text-[#6C41CE] text-xs font-mono tracking-widest font-semibold mb-4 border border-[#DCCCF5]">
              <Sparkles className="w-3.5 h-3.5 text-[#8964DE]" />
              SELECTED WORKS / 02
            </div>

            {/* Main Heading */}
            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-[#17151B] tracking-tight leading-[1.02]">
              FRAMES THAT <br />
              <span className="font-serif italic font-normal text-[#6C41CE] selection:bg-[#DCCCF5]">
                SPEAK.
              </span>
            </h2>
          </div>

          <div className="max-w-md space-y-3">
            {/* Small Annotation Badge */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#17151B] text-[#C9A45C] text-[10px] font-mono tracking-widest font-bold">
              <span>✦</span>
              <span>THE WORK SPEAKS FOR ITSELF.</span>
            </div>

            {/* Supporting Text */}
            <p className="font-sans text-sm sm:text-base text-[#575360] leading-relaxed">
              A collection of stories, experiences and visuals crafted through editing.
            </p>

            <div className="flex items-center gap-2 text-[11px] font-mono text-[#6C41CE]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C] animate-pulse" />
              <span>DEDICATED VERTICAL SHOWCASES FOR MAJOR PRODUCTIONS</span>
            </div>
          </div>
        </div>

        {/* Quick Showcase Jump Bar */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-14 no-scrollbar">
          <span className="text-xs font-mono text-[#77717F] mr-1 hidden sm:inline">JUMP TO SHOWCASE:</span>
          {PROJECT_SHOWCASES.map((p) => (
            <a
              key={p.id}
              href={`#project-${p.id}`}
              onClick={() => playClickSound?.()}
              className="px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-200 whitespace-nowrap bg-white/80 hover:bg-[#17151B] text-[#575360] hover:text-[#C9A45C] border border-[#DCCCF5] hover:border-[#17151B] shadow-xs flex items-center gap-1.5"
            >
              <span className="text-[#C9A45C] font-bold">{p.number}</span>
              <span>{p.title.split('—')[0].trim()}</span>
              <ArrowDown className="w-3 h-3 text-[#6C41CE]" />
            </a>
          ))}
        </div>

        {/* 2. DEDICATED VERTICALLY STACKED PROJECT SHOWCASES */}
        <div className="space-y-16 sm:space-y-24">
          {PROJECT_SHOWCASES.map((project, idx) => (
            <ProjectShowcaseSection
              key={project.id}
              project={project}
              index={idx}
              onSelectReel={(reel) => handleSelectReel(reel, project)}
              playClickSound={playClickSound}
            />
          ))}
        </div>

        {/* Modal Viewer when a Reel is selected */}
        <ProjectModal
          project={
            activeProject
              ? {
                  id: activeProject.id,
                  number: activeProject.number,
                  title: `${activeProject.title} — ${activeReel?.title || 'Reel Preview'}`,
                  category: activeProject.category,
                  categoryKey: 'event',
                  year: activeProject.year,
                  role: activeProject.role,
                  tools: activeProject.tools,
                  duration: activeReel?.duration || '00:30',
                  aspectRatio: '9:16',
                  thumbnailUrl: activeReel?.thumbnailUrl || activeProject.logoUrl || '',
                  videoUrl: activeReel?.videoUrl || '',
                  description: activeProject.introduction,
                  client: activeProject.client,
                  highlights: activeProject.responsibilities,
                  accentColor: activeProject.accentColor
                }
              : null
          }
          onClose={() => {
            setActiveReel(null);
            setActiveProject(null);
          }}
          playClickSound={playClickSound}
        />

      </div>
    </section>
  );
};
