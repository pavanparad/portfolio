import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { INSTITUTIONAL_PROJECT } from '../data/institutionalProject';
import {
  Sparkles,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Volume1,
  Maximize2,
  Minimize2,
  CheckCircle2,
  Film,
  Award,
  Clock,
  Building2,
  Layers,
  ShieldAlert,
} from 'lucide-react';

interface InstitutionalProjectProps {
  playClickSound?: () => void;
}

export const InstitutionalProject: React.FC<InstitutionalProjectProps> = ({ playClickSound }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerContainerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(1);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(388); // 06:28 = 388 seconds
  const [bufferedEnd, setBufferedEnd] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [controlsVisible, setControlsVisible] = useState<boolean>(true);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Time Formatter utility (e.g. 06:28)
  const formatTime = (seconds: number): string => {
    if (isNaN(seconds) || seconds < 0) return '00:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Sync fullscreen change listener
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

  // Controls auto-hide on inactivity when playing
  const handleMouseMove = () => {
    setControlsVisible(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    if (isPlaying) {
      controlsTimeoutRef.current = setTimeout(() => {
        setControlsVisible(false);
      }, 3500);
    }
  };

  // Play / Pause Toggle
  const handleTogglePlay = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    playClickSound?.();
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
      setControlsVisible(true);
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

  // Mute / Unmute Toggle
  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    playClickSound?.();
    if (!videoRef.current) return;

    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
    if (!nextMuted && volume === 0) {
      videoRef.current.volume = 0.5;
      setVolume(0.5);
    }
  };

  // Volume Slider
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

  // Seek on Scrubber Click
  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    playClickSound?.();
    if (!progressBarRef.current || !videoRef.current) return;

    const rect = progressBarRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const seekPercent = Math.max(0, Math.min(1, clickX / rect.width));
    const targetTime = seekPercent * (videoRef.current.duration || 388);

    videoRef.current.currentTime = targetTime;
    setCurrentTime(targetTime);
  };

  // Fullscreen Toggle
  const handleToggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    playClickSound?.();
    if (!playerContainerRef.current) return;

    if (!document.fullscreenElement) {
      playerContainerRef.current
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

  // Video Events
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    setCurrentTime(videoRef.current.currentTime);

    // Calculate buffer status
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

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;
  const bufferPercent = duration > 0 ? (bufferedEnd / duration) * 100 : 0;

  return (
    <section
      id="institutional"
      className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-[#F6F1E9]/40 via-[#F3EDFB]/50 to-[#EFE7F9]/80 border-b border-[#DCCCF5]/60"
    >
      {/* Background Ambient Glow & Grid Lines */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-[#8964DE]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#C9A45C]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#DCCCF515_1px,transparent_1px),linear-gradient(to_bottom,#DCCCF515_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* ================= 1. HEADER ================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 border-b border-[#DCCCF5]/80 pb-8">
          <div>
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE0FF] text-[#6C41CE] text-xs font-mono tracking-widest font-semibold mb-4 border border-[#DCCCF5]">
              <Sparkles className="w-3.5 h-3.5 text-[#8964DE]" />
              INSTITUTIONAL PROJECT / 01
            </div>

            {/* Large Heading */}
            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-[#17151B] tracking-tight leading-[1.02]">
              INSTITUTIONAL STORIES. <br />
              <span className="font-serif italic font-normal text-[#6C41CE] selection:bg-[#DCCCF5]">
                VISUALISED.
              </span>
            </h2>
          </div>

          <div className="max-w-md space-y-3">
            {/* Small Annotation Badge */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#17151B] text-[#C9A45C] text-[10px] font-mono tracking-widest font-bold">
              <span>✦</span>
              <span>CINEMATIC CAMPUS FILM</span>
            </div>

            {/* Supporting Description */}
            <p className="font-sans text-sm sm:text-base text-[#575360] leading-relaxed">
              A promotional film created to visually represent Pune Institute of Computer Technology.
            </p>

            <div className="inline-block px-3 py-1 rounded-full bg-[#EFE7F9] text-[#6C41CE] text-[11px] font-mono border border-[#DCCCF5]">
              INSTITUTIONAL PRODUCTION — NOT AN EXTERNAL CLIENT
            </div>
          </div>
        </div>

        {/* Project & Institution Header Lockup */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-6 sm:p-8 rounded-3xl bg-white/85 backdrop-blur-md border border-[#DCCCF5] shadow-md mb-8">
          <div className="flex items-center gap-4 sm:gap-6">
            {/* PICT Official Logo Container */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white p-2.5 border border-[#DCCCF5] shadow-xs flex items-center justify-center shrink-0">
              <img
                src={INSTITUTIONAL_PROJECT.logoUrl}
                alt={INSTITUTIONAL_PROJECT.logoAlt}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>

            <div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="font-mono text-xs text-[#C9A45C] font-bold tracking-widest uppercase">
                  {INSTITUTIONAL_PROJECT.institution}
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#EAE0FF] text-[#6C41CE] border border-[#DCCCF5]">
                  {INSTITUTIONAL_PROJECT.verifiedStatus}
                </span>
              </div>
              <h3 className="font-display font-black text-xl sm:text-3xl text-[#17151B] tracking-tight mt-0.5">
                {INSTITUTIONAL_PROJECT.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3 self-start sm:self-auto">
            {/* Role Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17151B] text-[#C9A45C] text-xs font-mono font-bold tracking-wider shadow-xs">
              <Award className="w-3.5 h-3.5 text-[#C9A45C]" />
              MY ROLE: {INSTITUTIONAL_PROJECT.role}
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-[#575360] border border-[#DCCCF5] text-xs font-mono">
              <Clock className="w-3.5 h-3.5 text-[#6C41CE]" />
              <span>{INSTITUTIONAL_PROJECT.duration}</span>
            </div>
          </div>
        </div>

        {/* ================= 2. LARGE CINEMATIC 16:9 VIDEO PLAYER ================= */}
        <div
          ref={playerContainerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => isPlaying && setControlsVisible(false)}
          className={`group relative w-full aspect-video rounded-3xl overflow-hidden bg-[#17151B] border border-[#DCCCF5] shadow-2xl transition-all duration-300 select-none ${
            isFullscreen ? 'rounded-none' : ''
          }`}
        >
          {/* Corner Crop Marks for Editorial Cinema Feel */}
          <span className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#C9A45C] z-30 pointer-events-none" />
          <span className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#C9A45C] z-30 pointer-events-none" />
          <span className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#C9A45C] z-30 pointer-events-none" />
          <span className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#C9A45C] z-30 pointer-events-none" />

          {/* Actual HTML5 Video Element (No Autoplay, Preload Metadata) */}
          <video
            ref={videoRef}
            preload="metadata"
            poster={INSTITUTIONAL_PROJECT.thumbnailUrl}
            playsInline
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={() => {
              setIsPlaying(false);
              setControlsVisible(true);
            }}
            onClick={handleTogglePlay}
            className="w-full h-full object-contain cursor-pointer bg-black"
          >
            <source src="./videos/pict-promotional-video.mp4" type="video/mp4" />
            <source src="/videos/pict-promotional-video.mp4" type="video/mp4" />
          </video>

          {/* Top Cinema HUD Overlay (Visible on Hover or when Paused) */}
          <AnimatePresence>
            {(!isPlaying || controlsVisible) && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-0 left-0 right-0 p-5 sm:p-7 bg-gradient-to-b from-black/80 via-black/40 to-transparent flex items-center justify-between pointer-events-none z-30"
              >
                <div className="flex items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full bg-[#17151B]/90 text-[#C9A45C] border border-[#C9A45C]/40 text-xs font-mono font-bold tracking-wider backdrop-blur-md">
                    16:9 CINEMATIC MASTER
                  </span>
                  <span className="text-white/80 font-mono text-xs hidden sm:inline">
                    PUNE INSTITUTE OF COMPUTER TECHNOLOGY
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-[#DCCCF5]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>4K UHD • 60 FPS</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Elegant Center Play Button Overlay (Visible when Paused) */}
          <AnimatePresence>
            {!isPlaying && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                onClick={handleTogglePlay}
                className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer z-20 bg-black/35 backdrop-blur-[2px]"
              >
                <motion.div
                  whileHover={{ scale: 1.12 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/95 text-[#17151B] flex items-center justify-center shadow-[0_0_50px_rgba(201,164,92,0.45)] border-2 border-[#C9A45C] hover:bg-[#C9A45C] hover:text-white transition-all duration-300"
                >
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current translate-x-1" />
                </motion.div>

                <div className="mt-5 text-center space-y-1">
                  <h4 className="font-display font-black text-lg sm:text-2xl text-white tracking-tight drop-shadow-md">
                    PLAY PROMOTIONAL FILM
                  </h4>
                  <p className="font-mono text-xs sm:text-sm text-[#C9A45C] font-semibold tracking-wider">
                    {INSTITUTIONAL_PROJECT.duration} • ORIGINAL EDIT
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom Custom Playback, Volume, Progress & Fullscreen Controls */}
          <AnimatePresence>
            {(!isPlaying || controlsVisible) && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/95 via-black/80 to-transparent z-30 space-y-3"
              >
                {/* Interactive Click-to-Seek Scrubber / Progress Bar */}
                <div
                  ref={progressBarRef}
                  onClick={handleSeek}
                  className="group/bar relative w-full h-2 hover:h-3.5 bg-white/20 rounded-full cursor-pointer transition-all duration-200 overflow-hidden"
                  title="Click to seek"
                >
                  {/* Buffer Bar */}
                  <div
                    className="absolute top-0 bottom-0 left-0 bg-white/30 rounded-full"
                    style={{ width: `${bufferPercent}%` }}
                  />
                  {/* Current Playback Progress */}
                  <div
                    className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-[#8964DE] to-[#C9A45C] rounded-full"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>

                {/* Control Action Buttons Row */}
                <div className="flex items-center justify-between text-xs font-mono text-white">
                  {/* Left Controls: Play/Pause, Volume, Time */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    {/* Play/Pause Button */}
                    <button
                      onClick={handleTogglePlay}
                      className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C9A45C] text-white hover:text-[#17151B] flex items-center justify-center transition-colors cursor-pointer border border-white/20"
                      title={isPlaying ? 'Pause (Space)' : 'Play (Space)'}
                    >
                      {isPlaying ? (
                        <Pause className="w-4 h-4 fill-current" />
                      ) : (
                        <Play className="w-4 h-4 fill-current translate-x-0.5" />
                      )}
                    </button>

                    {/* Volume Mute/Unmute + Slider */}
                    <div className="flex items-center gap-2 group/vol">
                      <button
                        onClick={handleToggleMute}
                        className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                        title={isMuted ? 'Unmute' : 'Mute'}
                      >
                        {isMuted || volume === 0 ? (
                          <VolumeX className="w-4 h-4 text-red-400" />
                        ) : volume < 0.5 ? (
                          <Volume1 className="w-4 h-4" />
                        ) : (
                          <Volume2 className="w-4 h-4 text-[#C9A45C]" />
                        )}
                      </button>

                      {/* Volume Slider */}
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.05"
                        value={isMuted ? 0 : volume}
                        onChange={handleVolumeChange}
                        className="w-16 sm:w-20 h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#C9A45C] opacity-75 hover:opacity-100 transition-opacity"
                        title={`Volume: ${Math.round((isMuted ? 0 : volume) * 100)}%`}
                      />
                    </div>

                    {/* Time Counter: Current / Duration */}
                    <div className="text-[11px] sm:text-xs text-[#DCCCF5] tracking-wider pl-1">
                      <span className="font-bold text-white">{formatTime(currentTime)}</span>
                      <span className="text-white/40 mx-1">/</span>
                      <span className="text-[#C9A45C]">{INSTITUTIONAL_PROJECT.duration}</span>
                    </div>
                  </div>

                  {/* Right Controls: HD Tag, Fullscreen */}
                  <div className="flex items-center gap-3">
                    <span className="hidden sm:inline-block px-2.5 py-0.5 rounded bg-white/10 text-[#C9A45C] border border-white/15 text-[10px]">
                      16:9 FULL FRAME
                    </span>

                    {/* Fullscreen Button */}
                    <button
                      onClick={handleToggleFullscreen}
                      className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C9A45C] text-white hover:text-[#17151B] flex items-center justify-center transition-colors cursor-pointer border border-white/20"
                      title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
                    >
                      {isFullscreen ? (
                        <Minimize2 className="w-4 h-4" />
                      ) : (
                        <Maximize2 className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ================= 3. PROJECT INFORMATION ================= */}
        <div className="mt-10 p-6 sm:p-10 rounded-3xl bg-white/90 backdrop-blur-md border border-[#DCCCF5] shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Project Title & Quote */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C9A45C]" />
                <span className="font-mono text-xs uppercase tracking-widest font-bold text-[#6C41CE]">
                  PICT — INSTITUTIONAL PROMOTIONAL FILM
                </span>
              </div>

              {/* Exact Quote */}
              <blockquote className="font-serif italic text-lg sm:text-2xl text-[#17151B] leading-snug pl-4 border-l-3 border-[#C9A45C]">
                "{INSTITUTIONAL_PROJECT.description}"
              </blockquote>

              <p className="font-sans text-xs sm:text-sm text-[#575360] leading-relaxed pt-2">
                Structured with an inspirational cinematic arc, this production documents the academic rigor, research legacy, campus culture, and student technological achievements of Pune Institute of Computer Technology.
              </p>
            </div>

            {/* Right Column: Technical Details & Role */}
            <div className="lg:col-span-5 space-y-4 p-5 rounded-2xl bg-[#F5F0FA] border border-[#DCCCF5]">
              <div className="flex items-center justify-between pb-3 border-b border-[#DCCCF5]">
                <span className="font-mono text-xs font-bold text-[#17151B] tracking-wider flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#C9A45C]" />
                  MY ROLE: VIDEO EDITING
                </span>
                <span className="text-[10px] font-mono text-[#6C41CE] bg-white px-2 py-0.5 rounded border border-[#DCCCF5]">
                  CONFIRMED
                </span>
              </div>

              <div className="space-y-2">
                <span className="text-[11px] font-mono text-[#77717F] uppercase tracking-wider block">
                  TECHNICAL EXECUTION &amp; SCOPE
                </span>
                <ul className="space-y-2">
                  {INSTITUTIONAL_PROJECT.contribution.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#575360] leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8964DE] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-[#DCCCF5] flex items-center justify-between text-[11px] font-mono text-[#77717F]">
                <span>ORIENTATION: 16:9 HORIZONTAL</span>
                <span className="text-[#17151B] font-semibold">RUN TIME: 06:28</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
