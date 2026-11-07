import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Sparkles, MapPin, Play, Film, Sliders, CheckCircle2 } from 'lucide-react';
import { DashedBoundingBox } from './DashedBoundingBox';

interface HeroProps {
  playClickSound?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ playClickSound }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Stagger animation container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen pt-28 sm:pt-32 pb-16 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full">
        {/* Asymmetric 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* ================= LEFT SIDE: Editorial Portrait Composition ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 order-2 lg:order-1 flex justify-center"
          >
            <DashedBoundingBox
              dimensions="W: 460PX • H: 600PX"
              label="SUBJECT: PAVAN • PORTFOLIO 2026"
              className="w-full max-w-[380px] sm:max-w-[420px] lg:max-w-[460px]"
            >
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#EAE0FF]/70 via-[#F5F0FA]/40 to-[#DCCBFA]/50 p-2 sm:p-3 border border-[#DCCBFA]/60 shadow-lg">
                
                {/* Purple Ambient Glow Behind Portrait */}
                <div className="absolute inset-0 purple-glow-strong -z-0 opacity-70 filter blur-2xl" />

                {/* Viewfinder Top Bar Overlay */}
                <div className="relative z-10 flex items-center justify-between px-3 py-2 bg-white/50 backdrop-blur-md rounded-t-xl border-b border-[#DCCBFA]/50 text-[10px] font-mono text-[#77717F]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                    <span className="font-semibold text-[#17151D]">REC ● 24.00 FPS</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>SHUTTER 1/48</span>
                    <span className="text-[#A88BEA]">4K DCI</span>
                  </div>
                </div>

                {/* Portrait Image Container */}
                <div className="relative z-10 w-full aspect-[4/5] overflow-hidden rounded-b-xl bg-[#EDE6F7] flex items-center justify-center group">
                  {/* Grayscale Portrait with subtle purple tint and film grain */}
                  <img
                    src={imgError ? "/images/hero-portrait.svg" : "/images/portrait.png"}
                    alt="Pavan — Video Editor & Visual Storyteller"
                    onError={() => setImgError(true)}
                    onLoad={() => setImgLoaded(true)}
                    className="w-full h-full object-cover object-top grayscale contrast-[1.08] group-hover:grayscale-[0.6] group-hover:scale-105 transition-all duration-700 ease-out"
                  />

                  {/* Gradient bottom blend to make cutout merge naturally */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#17151D]/70 via-[#17151D]/20 to-transparent pointer-events-none" />

                  {/* Viewfinder Reticle Target */}
                  <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity">
                    <div className="w-16 h-16 border border-dashed border-white rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    </div>
                  </div>

                  {/* Overlay Tag on Portrait */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-mono z-20">
                    <span className="bg-[#17151D]/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                      PAVAN • CREATIVE DIRECTOR
                    </span>
                    <span className="bg-[#A88BEA]/90 text-[#17151D] font-bold px-2 py-0.5 rounded-md">
                      EST. 2024
                    </span>
                  </div>
                </div>

                {/* Floating Creative Pill 1: Location & Status */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-4 -left-3 sm:-left-6 z-20 glass-panel px-3 py-1.5 rounded-full shadow-md flex items-center gap-2 border border-[#DCCBFA]"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#6C41CE]" />
                  <span className="text-[11px] font-mono font-medium text-[#17151D]">
                    PUNE, INDIA
                  </span>
                </motion.div>

                {/* Floating Creative Pill 2: Software Focus */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute -bottom-4 -right-3 sm:-right-5 z-20 glass-panel px-3.5 py-2 rounded-xl shadow-lg flex items-center gap-2.5 border border-[#A88BEA]/50 bg-white/90"
                >
                  <div className="w-6 h-6 rounded-lg bg-[#EAE0FF] flex items-center justify-center text-[#6C41CE]">
                    <Film className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono font-bold text-[#17151D]">
                      CAPCUT & PREMIERE
                    </span>
                    <span className="text-[9px] font-mono text-[#77717F]">
                      ADVANCED TIMELINE CRAFT
                    </span>
                  </div>
                </motion.div>
              </div>
            </DashedBoundingBox>
          </motion.div>

          {/* ================= RIGHT SIDE: Large Editorial Typography ================= */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start lg:pl-4"
          >
            {/* Small Introductory Label with Creative Marquee Badge */}
            <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#DCCBFA] shadow-xs text-xs font-mono tracking-wider text-[#17151D]">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span className="font-bold text-[#6C41CE]">HELLO, I'M PAVAN.</span>
                <span className="text-[#77717F] hidden sm:inline">•</span>
                <span className="text-[#77717F] hidden sm:inline text-[11px]">CRAFTING STORIES. CREATING IMPACT.</span>
              </div>
            </motion.div>

            {/* Main Headline: Oversized Bold Typography + Elegant Serif Italic */}
            <motion.div variants={itemVariants} className="w-full mb-6">
              <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight text-[#17151D]">
                <span className="block transform hover:translate-x-1 transition-transform">
                  CREATING
                </span>
                
                {/* Elegant Italic Serif Accent Word */}
                <span className="block font-serif italic font-normal text-[#6C41CE] my-1 sm:my-2 tracking-normal drop-shadow-xs">
                  Visual
                </span>
                
                <span className="block flex items-center gap-3 flex-wrap">
                  <span>STORIES.</span>
                  {/* Decorative Video Cut Pill */}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAE0FF] border border-[#A88BEA]/60 text-xs font-mono font-medium text-[#4D25A8] -rotate-2 shadow-xs">
                    <Sparkles className="w-3 h-3 text-[#8964DE]" />
                    FRAME ACCURATE
                  </span>
                </span>
              </h1>
            </motion.div>

            {/* Supporting Description */}
            <motion.p
              variants={itemVariants}
              className="font-sans text-base sm:text-lg lg:text-xl text-[#77717F] leading-relaxed max-w-xl mb-8"
            >
              I’m a video editor and visual storyteller passionate about transforming ideas into compelling visual experiences. From festival aftermovies to high-retention cinematic reels, every cut is intentional.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3 sm:gap-4 w-full mb-10"
            >
              {/* Primary CTA */}
              <a
                href="#work"
                onClick={playClickSound}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#17151D] text-[#F5F0FA] font-mono text-xs sm:text-sm font-semibold tracking-wider hover:bg-[#6C41CE] hover:shadow-lg transition-all duration-300 group shadow-md"
                data-cursor="PLAY"
              >
                <span>EXPLORE MY WORK</span>
                <Play className="w-3.5 h-3.5 fill-current text-[#DCCBFA] group-hover:scale-110 transition-transform" />
              </a>

              {/* Secondary CTA with Dashed Border */}
              <a
                href="#contact"
                onClick={playClickSound}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/70 border border-dashed border-[#A88BEA] text-[#17151D] font-mono text-xs sm:text-sm font-semibold tracking-wider hover:bg-[#EAE0FF] hover:border-[#6C41CE] transition-all duration-300 group shadow-xs"
                data-cursor="CONTACT"
              >
                <span>LET'S COLLABORATE</span>
                <ArrowUpRight className="w-4 h-4 text-[#6C41CE] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>

            {/* Creative Availability Indicator & Location Details */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-[#DCCBFA]/70 w-full flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#77717F]"
            >
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-[#17151D] font-medium">
                  AVAILABLE FOR COMMISSIONS & FREELANCE
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-[#77717F]">BASE: PUNE, INDIA</span>
                <span className="text-[#DCCBFA]">•</span>
                <span className="text-[#6C41CE] font-semibold">2026 EDITION</span>
              </div>
            </motion.div>

          </motion.div>

        </div>

        {/* Animated Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-14 lg:mt-20 flex flex-col items-center justify-center gap-2"
        >
          <a
            href="#collaborations"
            onClick={playClickSound}
            className="flex flex-col items-center gap-2 text-[10px] font-mono tracking-widest text-[#77717F] hover:text-[#17151D] transition-colors group cursor-pointer"
            data-cursor="SCROLL"
          >
            <span>SCROLL TO DISCOVER</span>
            <div className="w-5 h-9 rounded-full border border-[#A88BEA] flex items-start justify-center p-1">
              <motion.div
                animate={{ y: [0, 14, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 h-1.5 rounded-full bg-[#6C41CE]"
              />
            </div>
          </a>
        </motion.div>

      </div>
    </section>
  );
};
