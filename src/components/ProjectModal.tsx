import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Clock, Sparkles, Film, CheckCircle2, Video, Code2, Instagram, ExternalLink } from 'lucide-react';
import { Project } from '../types';

export interface UnifiedModalData {
  title: string;
  category?: string;
  number?: string;
  year?: string;
  client?: string;
  role?: string;
  duration?: string;
  aspectRatio?: string;
  thumbnailUrl: string;
  videoUrl?: string;
  description?: string;
  highlights?: string[];
  tools?: string[];
  viewsInfo?: string;
  socialUrl?: string;
}

interface ProjectModalProps {
  isOpen?: boolean;
  project?: Project | null;
  modalData?: UnifiedModalData | null;
  onClose: () => void;
  playClickSound?: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen = true,
  project,
  modalData,
  onClose,
  playClickSound,
}) => {
  const data: UnifiedModalData | null = modalData
    ? modalData
    : project
    ? {
        title: project.title,
        category: project.category,
        number: project.number,
        year: project.year,
        client: project.client,
        role: project.role,
        duration: project.duration,
        aspectRatio: project.aspectRatio,
        thumbnailUrl: project.thumbnailUrl,
        videoUrl: project.videoUrl,
        description: project.description,
        highlights: project.highlights,
        tools: project.tools,
      }
    : null;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && (project || modalData)) {
        playClickSound?.();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, modalData, onClose, playClickSound]);

  if (!isOpen || !data) return null;

  const hasVideoUrl = Boolean(data.videoUrl && data.videoUrl.trim() !== '');
  const isYouTube =
    hasVideoUrl && (data.videoUrl?.includes('youtube.com') || data.videoUrl?.includes('youtu.be'));
  const isMp4 = hasVideoUrl && data.videoUrl?.endsWith('.mp4');

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
          className="fixed inset-0 bg-[#17151B]/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 26, stiffness: 320 }}
          className="relative w-full max-w-4xl bg-[#F6F1E9] rounded-2xl sm:rounded-3xl shadow-2xl border border-[#DCCCF5] overflow-hidden z-10 my-8 max-h-[92vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-white/95 border-b border-[#DCCCF5] backdrop-blur-md">
            <div className="flex items-center gap-3">
              {data.number && (
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#17151B] text-[#C9A45C]">
                  PROJ_{data.number}
                </span>
              )}
              {data.category && (
                <span className="text-xs font-mono text-[#6C41CE] font-semibold uppercase tracking-wider">
                  {data.category}
                </span>
              )}
            </div>

            <button
              onClick={() => {
                playClickSound?.();
                onClose();
              }}
              className="w-8 h-8 rounded-full flex items-center justify-center text-[#77717F] hover:text-[#17151B] hover:bg-[#EAE0FF] transition-colors border border-[#DCCCF5] cursor-pointer"
              aria-label="Close modal"
              data-cursor="CLOSE"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Scrollable Modal Content */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
            {/* Video Player or Interactive Media Placeholder Container */}
            <div
              className={`relative rounded-xl overflow-hidden bg-[#17151B] shadow-md border border-[#DCCCF5]/80 mx-auto ${
                data.aspectRatio === '9:16' ? 'aspect-[9/16] max-h-[520px]' : 'aspect-video w-full'
              }`}
            >
              {hasVideoUrl && isYouTube ? (
                <iframe
                  src={`${data.videoUrl}?autoplay=1&mute=0`}
                  title={data.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              ) : hasVideoUrl && isMp4 ? (
                <video
                  src={data.videoUrl}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain"
                />
              ) : (
                /* Media Placeholder Preview with Real Custom Graphic & Clear Asset Instructions */
                <div className="relative w-full h-full flex flex-col justify-between p-4 sm:p-6 bg-gradient-to-br from-[#17151B] via-[#1E1B24] to-[#141217]">
                  {/* Background SVG Thumbnail */}
                  <img
                    src={data.thumbnailUrl}
                    alt={data.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-45"
                  />

                  {/* Subtle Grid overlay */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

                  {/* Top HUD inside preview */}
                  <div className="relative z-10 flex items-center justify-between text-xs font-mono">
                    <span className="px-3 py-1 rounded-full bg-[#17151B]/80 text-[#C9A45C] border border-[#C9A45C]/40 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#C9A45C] animate-pulse" />
                      {data.viewsInfo || 'ASSET READY FOR VIDEO UPLOAD'}
                    </span>
                    <span className="text-[#DCCCF5] bg-black/60 px-2.5 py-1 rounded">
                      {data.aspectRatio || '9:16'} {data.duration ? `// ${data.duration}` : ''}
                    </span>
                  </div>

                  {/* Center Play Indicator */}
                  <div className="relative z-10 text-center my-auto py-6 space-y-3">
                    <div className="w-16 h-16 mx-auto rounded-full bg-[#C9A45C] text-[#17151B] flex items-center justify-center shadow-lg">
                      <Play className="w-7 h-7 fill-current translate-x-0.5" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-lg text-white">{data.title}</h4>
                      <p className="font-mono text-xs text-[#DCCCF5]/80 mt-1">
                        High-resolution preview configured. MP4 upload will auto-stream here.
                      </p>
                    </div>
                  </div>

                  {/* Bottom helper tip */}
                  <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-[#77717F] bg-black/60 px-3 py-1.5 rounded border border-white/10">
                    <span className="flex items-center gap-1.5 text-[#DCCCF5]">
                      <Video className="w-3.5 h-3.5 text-[#C9A45C]" />
                      MP4 ready in <code className="text-[#C9A45C]">src/data/</code>
                    </span>
                    <span className="text-[#C9A45C] font-semibold">MR. PAVAN CREATION</span>
                  </div>
                </div>
              )}
            </div>

            {/* Title & Metadata Overview */}
            <div className="space-y-3">
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#17151B] leading-tight">
                {data.title}
              </h3>

              <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono">
                {data.client && (
                  <span className="px-3 py-1.5 rounded-full bg-white border border-[#DCCCF5] text-[#17151B]">
                    CLIENT / ORG: <strong className="text-[#6C41CE]">{data.client}</strong>
                  </span>
                )}
                {data.role && (
                  <span className="px-3 py-1.5 rounded-full bg-white border border-[#DCCCF5] text-[#17151B]">
                    ROLE: <strong className="text-[#6C41CE]">{data.role}</strong>
                  </span>
                )}
                {data.duration && (
                  <span className="px-3 py-1.5 rounded-full bg-white border border-[#DCCCF5] text-[#17151B] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#C9A45C]" />
                    DURATION: {data.duration}
                  </span>
                )}
                {data.year && (
                  <span className="px-3 py-1.5 rounded-full bg-white border border-[#DCCCF5] text-[#17151B]">
                    YEAR: {data.year}
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            {data.description && (
              <div className="prose text-[#575360] font-sans text-sm sm:text-base leading-relaxed bg-white/70 p-5 rounded-2xl border border-[#DCCCF5]/70">
                <p>{data.description}</p>
              </div>
            )}

            {/* Highlights */}
            {data.highlights && data.highlights.length > 0 && (
              <div className="bg-white rounded-2xl p-5 border border-[#DCCCF5] space-y-3 shadow-xs">
                <h4 className="text-xs font-mono font-bold tracking-wider text-[#17151B] uppercase flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#C9A45C]" />
                  EDITING HIGHLIGHTS &amp; SPECIFICATIONS
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-sans text-[#575360]">
                  {data.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 bg-[#F6F1E9]/60 p-2.5 rounded-lg border border-[#DCCCF5]/50"
                    >
                      <span className="text-[#C9A45C] font-bold mt-0.5">✦</span>
                      <span className="leading-snug">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tools Used Pills */}
            {data.tools && data.tools.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#DCCCF5]/60">
                <span className="text-xs font-mono text-[#77717F] mr-2">TOOLS APPLIED:</span>
                {data.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs font-mono px-3 py-1 rounded-md bg-[#EAE0FF] text-[#4D25A8] border border-[#A88BEA]/50 font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            )}

            {/* Action Bar */}
            {data.socialUrl && (
              <div className="pt-2">
                <a
                  href={data.socialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playClickSound?.()}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono bg-[#17151B] text-[#C9A45C] hover:bg-[#C9A45C] hover:text-[#17151B] transition-all"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>WATCH ON INSTAGRAM</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
