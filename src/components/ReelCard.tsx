import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ProjectReel } from '../types';
import { Play, Pause, Volume2, VolumeX, Maximize2, Instagram, Film, ExternalLink, Sparkles } from 'lucide-react';

interface ReelCardProps {
  reel: ProjectReel;
  accentColor?: string;
  onSelectReel?: (reel: ProjectReel) => void;
  playClickSound?: () => void;
}

export const ReelCard: React.FC<ReelCardProps> = ({
  reel,
  accentColor = '#C9A45C',
  onSelectReel,
  playClickSound,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const hasVideoFile = Boolean(reel.videoUrl && reel.videoUrl.trim() !== '');

  // IntersectionObserver: Play muted on enter viewport, pause on leave
  useEffect(() => {
    if (!hasVideoFile || !videoRef.current) return;

    const currentVideo = videoRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            currentVideo.muted = true;
            currentVideo.play().then(() => {
              setIsPlaying(true);
            }).catch(() => {
              setIsPlaying(false);
            });
          } else {
            currentVideo.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasVideoFile]);

  // Toggle Mute / Sound
  const handleToggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    playClickSound?.();
    if (videoRef.current) {
      const nextMuted = !isMuted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  // Toggle Play / Pause
  const handleTogglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    playClickSound?.();
    if (!hasVideoFile) {
      onSelectReel?.(reel);
      return;
    }

    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    }
  };

  // Fullscreen trigger
  const handleToggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    playClickSound?.();
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(() => {});
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      }).catch(() => {});
    }
  };

  return (
    <div
      ref={containerRef}
      onClick={() => onSelectReel?.(reel)}
      className="group relative w-full aspect-[9/16] rounded-2xl overflow-hidden bg-[#17151B] border border-[#DCCCF5] hover:border-[#C9A45C] transition-all duration-300 shadow-sm hover:shadow-2xl cursor-pointer flex flex-col justify-between"
      data-cursor="REEL"
    >
      {/* Corner Crop Marks on Hover */}
      <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-1 -left-1 w-3 h-3 bg-white border border-[#C9A45C] z-30" />
      <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-1 -right-1 w-3 h-3 bg-white border border-[#C9A45C] z-30" />
      <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-1 -left-1 w-3 h-3 bg-white border border-[#C9A45C] z-30" />
      <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-1 -right-1 w-3 h-3 bg-white border border-[#C9A45C] z-30" />

      {/* Video or Thumbnail Media Layer */}
      {hasVideoFile ? (
        <video
          ref={videoRef}
          src={reel.videoUrl}
          muted={isMuted}
          playsInline
          loop
          preload="none"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      ) : (
        <img
          src={reel.thumbnailUrl}
          alt={reel.title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
      )}

      {/* Film Grain & Dark Ambient Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#17151B] via-[#17151B]/20 to-black/50 pointer-events-none group-hover:via-[#17151B]/35 transition-colors" />

      {/* Top HUD Controls Bar */}
      <div className="relative z-20 flex items-center justify-between p-3.5 sm:p-4 text-xs font-mono">
        <span className="px-2.5 py-1 rounded-full bg-[#17151B]/80 text-[#C9A45C] border border-[#C9A45C]/40 text-[10px] font-bold tracking-wider backdrop-blur-md">
          {reel.label}
        </span>

        <div className="flex items-center gap-1.5">
          {hasVideoFile && (
            <button
              onClick={handleToggleSound}
              className="w-7 h-7 rounded-full bg-[#17151B]/80 hover:bg-[#C9A45C] text-[#F6F1E9] hover:text-[#17151B] flex items-center justify-center transition-colors border border-white/20 backdrop-blur-md"
              title={isMuted ? 'Unmute video' : 'Mute video'}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            </button>
          )}

          <button
            onClick={handleToggleFullscreen}
            className="w-7 h-7 rounded-full bg-[#17151B]/80 hover:bg-[#C9A45C] text-[#F6F1E9] hover:text-[#17151B] flex items-center justify-center transition-colors border border-white/20 backdrop-blur-md"
            title="Fullscreen viewing"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Center Play Button Overlay on Hover */}
      <div className="relative z-20 my-auto flex items-center justify-center pointer-events-none">
        <motion.div
          whileHover={{ scale: 1.15 }}
          onClick={handleTogglePlay}
          className="w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-white/95 text-[#17151B] flex items-center justify-center shadow-2xl group-hover:bg-[#C9A45C] group-hover:text-white transition-all duration-300 pointer-events-auto"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 fill-current" />
          ) : (
            <Play className="w-5 h-5 fill-current translate-x-0.5" />
          )}
        </motion.div>
      </div>

      {/* Bottom Reel Narrative & Metrics Metadata */}
      <div className="relative z-20 p-4 sm:p-5 space-y-2">
        <div className="flex items-center justify-between text-[11px] font-mono text-[#DCCCF5]">
          <span className="flex items-center gap-1 text-[#C9A45C]">
            <Film className="w-3 h-3" />
            9:16 VERTICAL
          </span>
          {reel.duration && <span>{reel.duration}</span>}
        </div>

        <h4 className="font-display font-black text-base sm:text-lg text-[#F6F1E9] leading-snug group-hover:text-[#C9A45C] transition-colors">
          {reel.title}
        </h4>

        {/* Clear Performance Placeholder / Count Badge */}
        <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono">
          <span className="px-2 py-0.5 rounded bg-black/70 text-[#C9A45C] border border-[#C9A45C]/30 flex items-center gap-1 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C] animate-pulse" />
            {reel.viewsCount || reel.viewsPlaceholder || '[VERIFIED VIEWS PENDING]'}
          </span>

          <span className="text-[#DCCCF5]/80 hover:text-white flex items-center gap-1">
            <Instagram className="w-3 h-3 text-[#C9A45C]" />
            REEL LINK
          </span>
        </div>
      </div>
    </div>
  );
};
