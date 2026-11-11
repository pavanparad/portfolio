import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Camera, Film, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface AboutProps {
  playClickSound?: () => void;
}

export const About: React.FC<AboutProps> = ({ playClickSound }) => {
  const [imgError, setImgError] = useState(false);

  const capabilities = [
    { num: '01', title: 'VIDEO EDITING' },
    { num: '02', title: 'VISUAL STORYTELLING' },
    { num: '03', title: 'MOTION GRAPHICS' },
    { num: '04', title: 'CONTENT CREATION' },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 lg:py-36 overflow-hidden bg-[#F5F0FA]">
      
      {/* Fine Ambient Grid & Decorative Alignment Lines */}
      <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header: Label + Title */}
        <div className="mb-12 sm:mb-16 border-b border-[#DCCCF5]/70 pb-6 sm:pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE0FF] text-[#6C41CE] text-xs font-mono tracking-wider font-semibold mb-3 border border-[#DCCCF5]">
              <span className="text-[#C9A45C]">✦</span>
              <span>THE PERSON BEHIND THE PROJECTS</span>
            </div>

            {/* Section Main Heading */}
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#17151B] tracking-tight leading-[1.05]">
              BEHIND <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-[#6C41CE]">The Frame.</span>
            </h2>
          </div>

          <div className="text-right hidden md:block">
            <span className="font-mono text-xs text-[#77717F] tracking-widest uppercase block">
              MR. PAVAN CREATION • 2026
            </span>
            <span className="font-mono text-[11px] text-[#C9A45C] tracking-wider block mt-0.5">
              PUNE, MAHARASHTRA
            </span>
          </div>
        </div>

        {/* Asymmetric 2-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20 lg:mb-24">
          
          {/* ================= LEFT SIDE: Dominant Portrait Cutout (Pavan with Camera) ================= */}
          <div className="lg:col-span-5 xl:col-span-6 flex justify-center relative order-1">
            
            {/* Ambient Backlight Halo behind the cutout */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] rounded-full filter blur-3xl opacity-60 pointer-events-none bg-gradient-to-tr from-[#DCCCF5] via-[#EAE0FF] to-[#F3E5CF]" />

            {/* Subtle Editorial Viewfinder Crop Marks around portrait */}
            <div className="absolute -top-4 -left-4 w-6 h-6 border-t-2 border-l-2 border-[#C9A45C]/60 pointer-events-none hidden sm:block" />
            <div className="absolute -top-4 -right-4 w-6 h-6 border-t-2 border-r-2 border-[#C9A45C]/60 pointer-events-none hidden sm:block" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 border-b-2 border-l-2 border-[#C9A45C]/60 pointer-events-none hidden sm:block" />
            <div className="absolute -bottom-4 -right-4 w-6 h-6 border-b-2 border-r-2 border-[#C9A45C]/60 pointer-events-none hidden sm:block" />

            {/* Transparent Cutout Container — NO rectangular card frame */}
            <div className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[560px] flex items-center justify-center">
              <img
                src={imgError ? "./images/pavanabout.jpg" : "./images/pavan-about-cutout.png"}
                alt="Pavan holding camera on set — Video Editor & Visual Storyteller"
                onError={() => setImgError(true)}
                className="w-full h-auto object-contain select-none max-h-[580px] sm:max-h-[660px] lg:max-h-[720px] filter drop-shadow-[0_20px_40px_rgba(23,21,27,0.16)] grayscale contrast-[1.06] hover:grayscale-[0.2] transition-all duration-700 pointer-events-auto"
                style={{
                  // Soft, natural bottom feather blend
                  maskImage: 'linear-gradient(to bottom, black 86%, rgba(0,0,0,0.6) 95%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 86%, rgba(0,0,0,0.6) 95%, transparent 100%)',
                }}
              />

              {/* Minimal Editorial Annotation Tag */}
              <div className="absolute bottom-6 left-2 sm:left-4 z-20 glass-panel px-3.5 py-1.5 rounded-full shadow-xs flex items-center gap-2 border border-[#C9A45C]/50 bg-white/90 backdrop-blur-md">
                <Camera className="w-3.5 h-3.5 text-[#C9A45C]" />
                <span className="text-[10px] font-mono font-bold text-[#17151B] tracking-wider">
                  DIRECTOR OF VISUALS
                </span>
                <span className="text-[#C9A45C]">✦</span>
                <span className="text-[10px] font-mono text-[#77717F]">ON SET & IN SUITE</span>
              </div>
            </div>

          </div>

          {/* ================= RIGHT SIDE: Editorial Copy & Narrative ================= */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col items-start space-y-6 lg:pl-2 order-2">
            
            {/* Introduction Headline */}
            <div className="space-y-2">
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#17151B] leading-tight">
                <span>I'm Pavan. </span>
                <span className="font-serif italic font-normal text-[#6C41CE] block sm:inline">
                  I turn ideas into{' '}
                </span>
                <span className="relative inline-block text-[#17151B]">
                  visual experiences.
                  <span className="absolute bottom-1 left-0 right-0 h-2 bg-[#C9A45C]/20 -z-10 rounded-sm" />
                </span>
              </h3>
            </div>

            {/* Editorial Paragraphs */}
            <div className="space-y-4 font-sans text-base sm:text-lg text-[#77717F] leading-relaxed">
              <p>
                I'm a video editor and visual storyteller driven by the art of making visuals speak.
              </p>

              <p>
                For me, editing is more than arranging clips — it's about finding the right rhythm, creating emotion and turning ordinary footage into something people remember.
              </p>

              <p>
                From cinematic event films to engaging social media content, I enjoy experimenting with visuals, motion and storytelling to create work that leaves an impression.
              </p>
            </div>

            {/* Closing Manifesto Quote Block */}
            <div className="w-full pt-2">
              <blockquote className="relative p-5 sm:p-6 rounded-2xl bg-white/80 border-l-4 border-[#C9A45C] border-y border-r border-[#DCCCF5]/70 shadow-xs">
                <span className="text-2xl text-[#C9A45C] font-serif leading-none block mb-1">“</span>
                <p className="font-serif italic text-lg sm:text-xl lg:text-2xl text-[#17151B] leading-snug">
                  I don't just edit videos. I craft experiences, one frame at a time.
                </p>
                <div className="mt-3 flex items-center justify-between text-xs font-mono text-[#77717F] pt-2 border-t border-[#DCCCF5]/50">
                  <span className="text-[#C9A45C] font-bold">PAVAN • EDITORIAL CREATIVE</span>
                  <span>CRAFTED IN PUNE</span>
                </div>
              </blockquote>
            </div>

          </div>

        </div>

        {/* ================= BOTTOM INFORMATION STRIP ================= */}
        <div className="pt-8 pb-4 border-t border-[#DCCCF5]/80">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            {/* Core Capabilities Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 flex-1">
              {capabilities.map((cap) => (
                <div key={cap.title} className="flex items-center gap-2.5">
                  <span className="text-[10px] font-mono font-bold text-[#C9A45C]">
                    {cap.num}
                  </span>
                  <span className="text-xs sm:text-sm font-mono font-bold text-[#17151B] tracking-wider uppercase">
                    {cap.title}
                  </span>
                </div>
              ))}
            </div>

            {/* Experience Pill */}
            <div className="shrink-0 flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF5EE] border border-[#C9A45C]/60 text-xs font-mono font-bold text-[#7D5F28] shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#C9A45C] animate-pulse" />
              <span>01+ YEARS OF EDITING EXPERIENCE</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
