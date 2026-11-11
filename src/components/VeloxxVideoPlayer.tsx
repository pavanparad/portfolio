import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play,
  Pause,
  Volume2,
  Volume1,
  VolumeX,
  Maximize2,
  Minimize2,
  AlertCircle,
} from 'lucide-react';

interface VeloxxVideoPlayerProps {
  src: string;
  fallbackSrc?: string;
  aspectRatio: '16:9' | '9:16';
  title?: string;
  subtitle?: string;
  playClickSound?: () => void;
  className?: string;
}

export const VeloxxVideoPlayer: React.FC<VeloxxVideoPlayerProps> = ({
  src,
  fallbackSrc,
  aspectRatio,
  title,
  subtitle,
  playClickSound,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(1);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [bufferedEnd, setBufferedEnd] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showControls, setShowControls] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Time format helper (MM:SS)
  const formatTime = (secs: number): string => {
    if (isNaN(secs) || secs < 0) return '00:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Sync fullscreen state
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    };
  }, []);

  // Controls auto-hide on inactivity while playing
  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    if (isPlaying) {
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }
  };

  // Toggle Play / Pause
  const handleTogglePlay = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    playClickSound?.();
    if (!videoRef.current || hasError) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
      setShowControls(true);
    } else {
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          setIsPlaying(false);
        });
    }
  };

  // Toggle Mute / Unmute
  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    playClickSound?.();
    if (!videoRef.current) return;

    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
    if (!nextMuted && volume === 0) {
      videoRef.current.volume = 0.6;
      setVolume(0.6);
    }
  };

  // Volume Slider Change
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (videoRef.current) {
      videoRef.current.volume = newVol;
      videoRef.current.muted = newVol === 0;
      setIsMuted(newVol === 0);
    }
  };

  // Interactive Seek Scrubber
  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    playClickSound?.();
    if (!progressBarRef.current || !videoRef.current || duration === 0) return;

    const rect = progressBarRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const seekPercent = Math.max(0, Math.min(1, clickX / rect.width));
    const targetTime = seekPercent * duration;

    videoRef.current.currentTime = targetTime;
    setCurrentTime(targetTime);
  };

  // Fullscreen Toggle
  const handleToggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    playClickSound?.();
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      containerRef.current
        .requestFullscreen()
        .then(() => setIsFullscreen(true))
        .catch(() => {});
    } else {
      document
        .exitFullscreen()
        .then(() => setIsFullscreen(false))
        .catch(() => {});
    }
  };

  // HTML5 Video Event Listeners
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    setCurrentTime(videoRef.current.currentTime);

    if (videoRef.current.buffered.length > 0) {
      const buffered = videoRef.current.buffered.end(videoRef.current.buffered.length - 1);
      setBufferedEnd(buffered);
    }
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    if (videoRef.current.duration && !isNaN(videoRef.current.duration)) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const video = e.currentTarget;
    if (fallbackSrc && video.src !== fallbackSrc && !video.src.endsWith(fallbackSrc)) {
      video.src = fallbackSrc;
      video.load();
      return;
    }
    setHasError(true);
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;
  const bufferPercent = duration > 0 ? (bufferedEnd / duration) * 100 : 0;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => isPlaying && setShowControls(false)}
      className={`group relative overflow-hidden bg-[#17151B] border border-[#DCCCF5]/80 hover:border-[#C9A45C] transition-all duration-300 shadow-xl select-none ${
        aspectRatio === '16:9' ? 'aspect-video w-full' : 'aspect-[9/16] w-full'
      } ${isFullscreen ? 'rounded-none' : 'rounded-2xl sm:rounded-3xl'} ${className}`}
    >
      {/* Corner Crop Marks for Premium Editorial Film Feel */}
      <span className="absolute top-3 left-3 w-3.5 h-3.5 border-t-2 border-l-2 border-[#C9A45C] z-30 pointer-events-none" />
      <span className="absolute top-3 right-3 w-3.5 h-3.5 border-t-2 border-r-2 border-[#C9A45C] z-30 pointer-events-none" />
      <span className="absolute bottom-3 left-3 w-3.5 h-3.5 border-b-2 border-l-2 border-[#C9A45C] z-30 pointer-events-none" />
      <span className="absolute bottom-3 right-3 w-3.5 h-3.5 border-b-2 border-r-2 border-[#C9A45C] z-30 pointer-events-none" />

      {/* HTML5 Video Element (preload="metadata", no autoplay) */}
      {!hasError ? (
        <video
          ref={videoRef}
          src={src}
          preload="metadata"
          playsInline
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={() => {
            setIsPlaying(false);
            setShowControls(true);
          }}
          onError={handleVideoError}
          onClick={handleTogglePlay}
          className="w-full h-full object-contain cursor-pointer bg-black"
        >
          <source src={src} type="video/mp4" />
          {fallbackSrc && <source src={fallbackSrc} type="video/mp4" />}
        </video>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-[#DCCCF5] bg-[#17151B]">
          <AlertCircle className="w-8 h-8 text-[#C9A45C] mb-2" />
          <p className="font-mono text-xs font-semibold">Video currently unavailable</p>
          <p className="font-mono text-[10px] text-[#77717F] mt-1">{src}</p>
          <button
            onClick={() => {
              setHasError(false);
              if (videoRef.current) {
                videoRef.current.src = fallbackSrc || src;
                videoRef.current.load();
              }
            }}
            className="mt-3 px-3 py-1 rounded-full bg-[#C9A45C] text-[#17151B] text-[10px] font-mono font-bold hover:bg-white transition-colors"
          >
            Retry Loading
          </button>
        </div>
      )}

      {/* Top Metadata HUD Overlay (Visible on Hover or when Paused) */}
      <AnimatePresence>
        {(!isPlaying || showControls) && !hasError && (
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-0 left-0 right-0 p-3.5 sm:p-5 bg-gradient-to-b from-black/80 via-black/35 to-transparent flex items-center justify-between pointer-events-none z-30"
          >
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[#17151B]/90 text-[#C9A45C] border border-[#C9A45C]/40 text-[10px] font-mono font-bold tracking-wider backdrop-blur-md">
                {aspectRatio === '16:9' ? '16:9 CINEMATIC' : '9:16 VERTICAL REEL'}
              </span>
              {title && (
                <span className="text-white/85 font-mono text-[11px] truncate max-w-[200px] sm:max-w-[320px] hidden xs:inline">
                  {title}
                </span>
              )}
            </div>

            <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#DCCCF5]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C] animate-pulse" />
              <span>{duration > 0 ? formatTime(duration) : 'HD'}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Elegant Center Play Button Overlay (Visible when Paused) */}
      <AnimatePresence>
        {!isPlaying && !hasError && (
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.2 }}
            onClick={handleTogglePlay}
            className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer z-20 bg-black/30 backdrop-blur-[1px]"
          >
            <motion.div
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.96 }}
              className={`rounded-full bg-white/95 text-[#17151B] flex items-center justify-center shadow-[0_0_35px_rgba(201,164,92,0.4)] border border-[#C9A45C] hover:bg-[#C9A45C] hover:text-white transition-all duration-300 ${
                aspectRatio === '9:16' ? 'w-14 h-14 sm:w-16 sm:h-16' : 'w-16 h-16 sm:w-20 sm:h-20'
              }`}
            >
              <Play
                className={`fill-current translate-x-0.5 ${
                  aspectRatio === '9:16' ? 'w-6 h-6 sm:w-7 sm:h-7' : 'w-7 h-7 sm:w-9 sm:h-9'
                }`}
              />
            </motion.div>

            {subtitle && (
              <p className="mt-3 font-mono text-[11px] tracking-wider text-[#C9A45C] font-semibold uppercase px-3 py-1 rounded-full bg-black/70 border border-white/10 backdrop-blur-xs">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Controls Bar (Playback, Volume, Progress, Fullscreen) */}
      <AnimatePresence>
        {(!isPlaying || showControls) && !hasError && (
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.2 }}
            className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/75 to-transparent z-30 space-y-2 sm:space-y-2.5 ${
              aspectRatio === '9:16' ? 'p-2.5 sm:p-3.5' : 'p-3 sm:p-5'
            }`}
          >
            {/* Interactive Progress Bar */}
            <div
              ref={progressBarRef}
              onClick={handleSeek}
              className="group/bar relative w-full h-1.5 hover:h-2.5 bg-white/20 rounded-full cursor-pointer transition-all duration-200 overflow-hidden"
              title="Click to seek"
            >
              {/* Buffer Bar */}
              <div
                className="absolute top-0 bottom-0 left-0 bg-white/30 rounded-full"
                style={{ width: `${bufferPercent}%` }}
              />
              {/* Playback Progress */}
              <div
                className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-[#8964DE] to-[#C9A45C] rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            {/* Controls Row */}
            <div className="flex items-center justify-between text-xs font-mono text-white gap-2">
              {/* Left Group: Play/Pause, Volume, Time */}
              <div className={`flex items-center ${aspectRatio === '9:16' ? 'gap-1.5 sm:gap-2' : 'gap-2 sm:gap-3'}`}>
                {/* Play/Pause Button */}
                <button
                  onClick={handleTogglePlay}
                  className={`rounded-full bg-white/10 hover:bg-[#C9A45C] text-white hover:text-[#17151B] flex items-center justify-center transition-colors cursor-pointer border border-white/20 shrink-0 ${
                    aspectRatio === '9:16' ? 'w-7 h-7' : 'w-7 h-7 sm:w-8 sm:h-8'
                  }`}
                  title={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? (
                    <Pause className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
                  ) : (
                    <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current translate-x-0.5" />
                  )}
                </button>

                {/* Mute/Volume Toggle */}
                <button
                  onClick={handleToggleMute}
                  className={`rounded-full bg-white/5 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0 ${
                    aspectRatio === '9:16' ? 'w-7 h-7' : 'w-7 h-7 sm:w-8 sm:h-8'
                  }`}
                  title={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted || volume === 0 ? (
                    <VolumeX className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-red-400" />
                  ) : volume < 0.5 ? (
                    <Volume1 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  ) : (
                    <Volume2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C9A45C]" />
                  )}
                </button>

                {/* Volume Slider (hidden on narrow vertical reels to preserve space) */}
                {aspectRatio === '16:9' && (
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className="w-12 sm:w-16 h-1 bg-white/25 rounded-lg appearance-none cursor-pointer accent-[#C9A45C] hidden sm:block"
                    title={`Volume: ${Math.round((isMuted ? 0 : volume) * 100)}%`}
                  />
                )}

                {/* Current / Duration Counter */}
                <div className="text-[10px] sm:text-[11px] text-[#DCCCF5] tracking-wider pl-0.5 whitespace-nowrap">
                  <span className="text-white font-bold">{formatTime(currentTime)}</span>
                  <span className="text-white/40 mx-1">/</span>
                  <span className="text-[#C9A45C]">{formatTime(duration)}</span>
                </div>
              </div>

              {/* Right Group: Fullscreen */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleToggleFullscreen}
                  className={`rounded-full bg-white/10 hover:bg-[#C9A45C] text-white hover:text-[#17151B] flex items-center justify-center transition-colors cursor-pointer border border-white/20 shrink-0 ${
                    aspectRatio === '9:16' ? 'w-7 h-7' : 'w-7 h-7 sm:w-8 sm:h-8'
                  }`}
                  title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
                >
                  {isFullscreen ? (
                    <Minimize2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  ) : (
                    <Maximize2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
