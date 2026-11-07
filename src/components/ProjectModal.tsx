import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Clock, Sparkles, ExternalLink, Film, CheckCircle2, Sliders } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  playClickSound?: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  playClickSound,
}) => {
  if (!project) return null;

  const isYouTube = project.videoUrl?.includes('youtube.com') || project.videoUrl?.includes('youtu.be');
  const isMp4 = project.videoUrl?.endsWith('.mp4');

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            playClickSound?.();
            onClose();
          }}
          className="fixed inset-0 bg-[#17151D]/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-[#F5F0FA] rounded-2xl sm:rounded-3xl shadow-2xl border border-[#DCCBFA] overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-white/90 border-b border-[#DCCBFA]/70 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#17151D] text-[#EAE0FF]">
                PROJ_{project.number}
              </span>
              <span className="text-xs font-mono text-[#6C41CE] font-semibold uppercase tracking-wider">
                {project.category}
              </span>
            </div>

            <button
              onClick={() => {
                playClickSound?.();
                onClose();
              }}
              className="w-8 h-8 rounded-full flex items-center justify-center text-[#77717F] hover:text-[#17151D] hover:bg-[#EAE0FF] transition-colors border border-[#DCCBFA]"
              aria-label="Close modal"
              data-cursor="CLOSE"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Scrollable Modal Content */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
            
            {/* Video Player or Interactive Media Container */}
            <div className="relative rounded-xl overflow-hidden bg-black aspect-video shadow-md border border-[#DCCBFA]/60">
              {isYouTube ? (
                <iframe
                  src={`${project.videoUrl}?autoplay=1&mute=0`}
                  title={project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              ) : isMp4 ? (
                <video
                  src={project.videoUrl}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="relative w-full h-full">
                  <img
                    src={project.thumbnailUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center gap-3 text-white">
                    <div className="w-16 h-16 rounded-full bg-[#6C41CE]/90 flex items-center justify-center shadow-lg">
                      <Play className="w-7 h-7 fill-white translate-x-0.5" />
                    </div>
                    <span className="text-xs font-mono tracking-widest uppercase">
                      SAMPLE PREVIEW READY
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Title & Metadata Overview */}
            <div className="space-y-3">
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#17151D] leading-tight">
                {project.title}
              </h3>
              
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#77717F]">
                {project.client && (
                  <span className="px-3 py-1 rounded-full bg-white border border-[#DCCBFA] text-[#17151D]">
                    CLIENT: <strong className="text-[#6C41CE]">{project.client}</strong>
                  </span>
                )}
                <span className="px-3 py-1 rounded-full bg-white border border-[#DCCBFA] text-[#17151D]">
                  ROLE: <strong className="text-[#6C41CE]">{project.role}</strong>
                </span>
                <span className="px-3 py-1 rounded-full bg-white border border-[#DCCBFA] text-[#17151D] flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#8964DE]" />
                  {project.duration}
                </span>
                <span className="px-3 py-1 rounded-full bg-white border border-[#DCCBFA] text-[#17151D]">
                  YEAR: {project.year}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="prose text-[#77717F] font-sans text-sm sm:text-base leading-relaxed">
              <p>{project.description}</p>
            </div>

            {/* Editorial Highlights */}
            <div className="bg-white/80 rounded-2xl p-5 border border-[#DCCBFA] space-y-3">
              <h4 className="text-xs font-mono font-bold tracking-wider text-[#17151D] uppercase flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#6C41CE]" />
                EDITING HIGHLIGHTS & TECHNICAL SPECS
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-[#77717F]">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#6C41CE] font-bold mt-0.5">✦</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools Used Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#DCCBFA]/60">
              <span className="text-xs font-mono text-[#77717F] mr-2">TOOLS USED:</span>
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="text-xs font-mono px-3 py-1 rounded-md bg-[#EAE0FF] text-[#4D25A8] border border-[#A88BEA]/50 font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>

            {/* How to customize note */}
            <div className="p-3 rounded-lg bg-[#EAE0FF]/50 border border-[#DCCBFA] text-[11px] font-mono text-[#77717F] flex items-center justify-between">
              <span>CONFIG: Easily replaceable via <code className="text-[#6C41CE]">src/data/projects.ts</code></span>
              <span className="text-[#6C41CE] font-semibold">100% MODULAR</span>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
