import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Eye, Scissors, HeartHandshake, Film, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { DashedBoundingBox } from './DashedBoundingBox';

interface AboutProps {
  playClickSound?: () => void;
}

export const About: React.FC<AboutProps> = ({ playClickSound }) => {
  const [imgError, setImgError] = useState(false);

  const stats = [
    { value: '50+', label: 'Visual Projects Cut', sub: 'Festivals, reels & promos' },
    { value: '2.5M+', label: 'Organic Views Generated', sub: 'Across client social channels' },
    { value: '24 FPS', label: 'Cinematic Precision', sub: 'Frame-accurate rhythm & sound' },
    { value: '100%', label: 'Creative Dedication', sub: 'Direct collaborative vision' },
  ];

  const pillars = [
    {
      title: 'RHYTHM & PACING',
      desc: 'Editing is music without notes. I build tension, drop into euphoria, and hold breath right where the story demands.',
      icon: Scissors,
    },
    {
      title: 'RETENTION SCIENCE',
      desc: 'From the first 1.8 seconds hook to seamless replay loops, every frame is engineered to keep eyes glued to screen.',
      icon: Eye,
    },
    {
      title: 'CINEMATIC TEXTURE',
      desc: 'Color grading, grain, kinetic typography, and custom audio impacts that elevate digital content into cinema.',
      icon: Film,
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-[#DCCBFA]/70 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE0FF] text-[#6C41CE] text-xs font-mono tracking-wider font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#8964DE]" />
              CREATIVE PHILOSOPHY
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#17151D] tracking-tight leading-[1.05]">
              BEHIND <br />
              <span className="font-serif italic font-normal text-[#6C41CE]">The Frame.</span>
            </h2>
          </div>

          <p className="font-sans text-sm sm:text-base text-[#77717F] max-w-md leading-relaxed">
            A deeper look into who I am, what drives my editorial choices, and how visual storytelling turns ordinary clips into unforgettable experiences.
          </p>
        </div>

        {/* 2-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center mb-16">
          
          {/* Left Column: Secondary Photograph Composition with Dashed Handles */}
          <div className="lg:col-span-5 flex justify-center">
            <DashedBoundingBox
              dimensions="W: 420PX • H: 520PX"
              label="STUDIO SUITE • NLE TIMELINE"
              className="w-full max-w-[380px] sm:max-w-[420px]"
            >
              <div className="relative rounded-2xl overflow-hidden glass-panel p-3 border border-[#DCCBFA] shadow-lg bg-white/80">
                
                {/* Secondary Photograph */}
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#17151D] group">
                  <img
                    src={imgError ? "/images/about-portrait.svg" : "/images/about-portrait.svg"}
                    alt="Pavan in the editing suite"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Dark subtle vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#17151D]/90 via-transparent to-transparent" />

                  {/* Audio Meters Overlay Badge */}
                  <div className="absolute bottom-4 inset-x-4 flex items-center justify-between text-white text-xs font-mono z-10">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#A88BEA] animate-pulse" />
                      <span>EDIT SUITE PUNE</span>
                    </div>
                    <span className="text-[#DCCBFA] text-[10px] bg-white/10 px-2 py-0.5 rounded">
                      TIMELINE ACTIVE
                    </span>
                  </div>
                </div>

                {/* Floating Craft Quote Pill */}
                <div className="mt-3 p-3 rounded-xl bg-[#F5F0FA] border border-[#DCCBFA]/60 text-xs font-mono text-[#17151D] flex items-center justify-between">
                  <span className="text-[#6C41CE] font-bold">CRAFT & OBSESSION</span>
                  <span className="text-[#77717F]">24.00 FPS • PRO RES</span>
                </div>

              </div>
            </DashedBoundingBox>
          </div>

          {/* Right Column: Editorial Narrative & Manifesto */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Main Featured Statement in Serif Elegance */}
            <blockquote className="font-serif italic text-xl sm:text-2xl lg:text-3xl text-[#17151D] leading-snug border-l-2 border-[#6C41CE] pl-6 py-1">
              "I’m Pavan — a video editor and visual storyteller who believes that great editing is more than putting clips together. It’s about creating emotions, building rhythm and making every frame count."
            </blockquote>

            <div className="prose text-sm sm:text-base text-[#77717F] font-sans leading-relaxed space-y-4">
              <p>
                Based in <strong className="text-[#17151D]">Pune, India</strong>, I specialize in combining cinematic video editing, kinetic motion graphics, and social media creativity. Whether I am directing the content narrative for university festivals like <strong className="text-[#6C41CE]">PICT Addiction’26</strong> and <strong className="text-[#6C41CE]">PASC Pulzion’26</strong>, or partnering with lifestyle collectives like <strong className="text-[#6C41CE]">Veloxx Club</strong> and <strong className="text-[#6C41CE]">ShuttleClub</strong>, my objective remains constant: Crafting stories that leave a lasting mark.
              </p>
              <p>
                I thrive in the space where technical editing rigor meets instinctual rhythm. From micro-cuts and whip-pans to deliberate slow-motion breathers, every timeline decision serves the audience's emotional journey.
              </p>
            </div>

            {/* 3 Core Editorial Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {pillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-4 rounded-xl bg-white/80 border border-[#DCCBFA] shadow-2xs hover:border-[#6C41CE] transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#EAE0FF] flex items-center justify-center text-[#6C41CE] mb-2.5">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h4 className="font-mono text-xs font-bold text-[#17151D] tracking-wide mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-[11px] text-[#77717F] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

        {/* Key Numerical Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-[#DCCBFA]/70">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl glass-panel border border-[#DCCBFA]/70 bg-white/70 flex flex-col justify-between"
            >
              <div className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#6C41CE] tracking-tight mb-2">
                {stat.value}
              </div>
              <div>
                <div className="font-mono text-xs font-bold text-[#17151D] tracking-wide uppercase">
                  {stat.label}
                </div>
                <div className="text-[11px] text-[#77717F] font-sans mt-0.5">
                  {stat.sub}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
