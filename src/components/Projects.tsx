import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS, CATEGORIES } from '../data/projects';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { Play, Sparkles, ArrowUpRight, Clock, Film, Maximize2 } from 'lucide-react';

interface ProjectsProps {
  playClickSound?: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ playClickSound }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);

  // Filter projects by active tab
  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.categoryKey === selectedCategory);

  const handleCategoryChange = (key: string) => {
    playClickSound?.();
    setSelectedCategory(key);
  };

  const handleOpenProject = (project: Project) => {
    playClickSound?.();
    setActiveProject(project);
  };

  return (
    <section id="work" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 border-b border-[#DCCBFA]/70 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE0FF] text-[#6C41CE] text-xs font-mono tracking-wider font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#8964DE]" />
              CURATED REPERTOIRE
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#17151D] tracking-tight leading-[1.05]">
              MY CREATIVE <br />
              <span className="font-serif italic font-normal text-[#6C41CE]">Playground.</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="font-sans text-sm sm:text-base text-[#77717F] leading-relaxed mb-2">
              Every frame has a purpose. Every edit tells a story. Explore selected festival aftermovies, viral retention reels, event teasers, and motion graphics.
            </p>
            <span className="text-[11px] font-mono text-[#6C41CE] bg-[#EAE0FF]/60 px-2.5 py-0.5 rounded border border-[#DCCBFA]">
              CLICK ANY PROJECT TO PREVIEW & INSPECT BREAKDOWN
            </span>
          </div>
        </div>

        {/* Filter Categories Bar */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => handleCategoryChange(cat.key)}
                data-cursor={cat.label.split('—')[1]?.trim() || 'FILTER'}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-mono tracking-wider transition-all duration-200 whitespace-nowrap border ${
                  isActive
                    ? 'bg-[#17151D] text-[#F5F0FA] border-[#17151D] shadow-sm font-semibold'
                    : 'bg-white/70 text-[#77717F] border-[#DCCBFA] hover:border-[#6C41CE] hover:text-[#17151D]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Asymmetric Editorial Project Gallery */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 items-start"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => {
              // Asymmetric span: Projects alternate between wider 7-column and 5-column editorial blocks
              const isWide = idx % 3 === 0;
              const colSpanClass = isWide
                ? 'lg:col-span-7'
                : idx % 3 === 1
                ? 'lg:col-span-5'
                : 'lg:col-span-6';

              const isVerticalReel = project.aspectRatio === '9:16';

              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={`${colSpanClass} group cursor-pointer`}
                  onClick={() => handleOpenProject(project)}
                  onMouseEnter={() => setHoveredProjectId(project.id)}
                  onMouseLeave={() => setHoveredProjectId(null)}
                  data-cursor="WATCH"
                >
                  {/* Outer Card with Dashed Border on Hover */}
                  <div className="relative rounded-2xl glass-panel p-3 sm:p-4 border border-[#DCCBFA]/70 group-hover:border-[#6C41CE] transition-all duration-300 shadow-xs group-hover:shadow-xl bg-white/75">
                    
                    {/* Corner Selection Handles on Hover */}
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border border-[#6C41CE] shadow-xs" />
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-1.5 -right-1.5 w-3 h-3 bg-white border border-[#6C41CE] shadow-xs" />
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white border border-[#6C41CE] shadow-xs" />
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white border border-[#6C41CE] shadow-xs" />

                    {/* Media Thumbnail Container */}
                    <div
                      className={`relative w-full overflow-hidden rounded-xl bg-black ${
                        isVerticalReel ? 'aspect-[4/5] sm:aspect-[3/4]' : 'aspect-video'
                      }`}
                    >
                      <img
                        src={project.thumbnailUrl}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />

                      {/* Film Grain & Dark Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#17151D]/80 via-transparent to-black/20 group-hover:from-[#17151D]/90 transition-colors" />

                      {/* Top Badges Bar */}
                      <div className="absolute top-3 inset-x-3 flex items-center justify-between text-white text-[11px] font-mono z-10">
                        <span className="bg-[#17151D]/80 backdrop-blur-md px-2.5 py-1 rounded border border-white/20">
                          {project.number} / 06
                        </span>
                        <div className="flex items-center gap-1.5">
                          <span className="bg-[#6C41CE]/90 text-white font-bold px-2 py-0.5 rounded text-[10px]">
                            {project.aspectRatio}
                          </span>
                          <span className="bg-[#17151D]/80 backdrop-blur-md px-2 py-0.5 rounded text-[10px] flex items-center gap-1">
                            <Clock className="w-3 h-3 text-[#DCCBFA]" />
                            {project.duration}
                          </span>
                        </div>
                      </div>

                      {/* Center Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.15 }}
                          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/90 text-[#17151D] flex items-center justify-center shadow-xl group-hover:bg-[#6C41CE] group-hover:text-white transition-colors duration-300"
                        >
                          <Play className="w-6 h-6 fill-current translate-x-0.5" />
                        </motion.div>
                      </div>

                      {/* Bottom Client & Category tag */}
                      <div className="absolute bottom-3 inset-x-3 flex items-end justify-between text-white z-10">
                        <span className="text-[10px] font-mono tracking-wider uppercase text-[#DCCBFA] bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded">
                          {project.category}
                        </span>
                        <span className="text-[11px] font-mono text-white/90 hidden sm:block">
                          {project.client}
                        </span>
                      </div>
                    </div>

                    {/* Metadata & Title Block below image */}
                    <div className="pt-4 pb-1 space-y-2">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-display font-extrabold text-base sm:text-lg text-[#17151D] leading-snug group-hover:text-[#6C41CE] transition-colors">
                          {project.title}
                        </h3>
                        <div className="w-7 h-7 rounded-full bg-[#EAE0FF] flex items-center justify-center shrink-0 group-hover:bg-[#6C41CE] group-hover:text-white transition-colors">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>

                      <p className="text-xs text-[#77717F] font-sans line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Software & Role pills */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-2">
                        {project.tools.map((tool) => (
                          <span
                            key={tool}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F5F0FA] text-[#6C41CE] border border-[#DCCBFA]"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal Viewer */}
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
          playClickSound={playClickSound}
        />

      </div>
    </section>
  );
};
