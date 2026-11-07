import React from 'react';
import { motion } from 'framer-motion';
import { BRANDS } from '../data/collaborations';
import { Sparkles, ArrowUpRight, Award, Flame, Zap, ShieldCheck } from 'lucide-react';

interface CollaborationsProps {
  playClickSound?: () => void;
}

export const Collaborations: React.FC<CollaborationsProps> = ({ playClickSound }) => {
  const marqueeKeywords = [
    'EVENT AFTERMOVIES',
    'CINEMATIC COLOR GRADING',
    'VIRAL REEL RETENTION',
    'KINETIC MOTION GRAPHICS',
    'SPEED RAMPING',
    'DYNAMIC AUDIO DESIGN',
    'SHORT-FORM STORYTELLING',
    '24 FPS CINEMATIC'
  ];

  return (
    <section id="collaborations" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-16 border-b border-[#DCCBFA]/60 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE0FF] text-[#6C41CE] text-xs font-mono tracking-wider font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#8964DE]" />
              PROVEN PARTNERSHIPS
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#17151D] tracking-tight leading-[1.05]">
              BRANDS I'VE <br />
              <span className="font-serif italic font-normal text-[#6C41CE]">Worked With.</span>
            </h2>
          </div>

          <p className="font-sans text-sm sm:text-base text-[#77717F] max-w-md leading-relaxed">
            Building visual experiences and collaborating with creative teams, communities and brands. Every project represents tailored pacing, creative direction, and narrative impact.
          </p>
        </div>

        {/* Spacious Editorial Grid for 4 Real Collaborations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {BRANDS.map((brand, idx) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl glass-panel p-6 sm:p-7 border border-[#DCCBFA]/70 hover:border-[#6C41CE] transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-lg bg-white/70"
              data-cursor="BRAND"
            >
              {/* Corner Dashed Accent */}
              <div className="absolute top-3 right-3 text-[10px] font-mono text-[#A88BEA] opacity-70 group-hover:opacity-100 flex items-center gap-1">
                <span>0{idx + 1}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#A88BEA]" />
              </div>

              <div>
                {/* Brand Badge */}
                <div className="inline-flex items-center gap-1.5 text-[10px] font-mono tracking-wider px-2.5 py-1 rounded-md bg-[#F5F0FA] text-[#6C41CE] border border-[#DCCBFA] mb-6 font-semibold">
                  <ShieldCheck className="w-3 h-3 text-[#8964DE]" />
                  {brand.badge}
                </div>

                {/* Brand Logo Typography Container */}
                <div className="h-20 flex flex-col justify-center mb-6 border-b border-[#DCCBFA]/40 pb-4">
                  <h3 className="font-display font-black text-xl sm:text-2xl text-[#17151D] tracking-tight group-hover:text-[#6C41CE] transition-colors">
                    {brand.name}
                  </h3>
                  <span className="text-[10px] font-mono tracking-widest text-[#77717F] mt-1 uppercase">
                    {brand.subText}
                  </span>
                </div>

                {/* Role and Description */}
                <div className="space-y-2 mb-6">
                  <div className="text-xs font-mono font-bold text-[#17151D] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A88BEA]" />
                    ROLE: <span className="text-[#6C41CE]">{brand.role}</span>
                  </div>
                  <p className="text-xs text-[#77717F] leading-relaxed font-sans line-clamp-3 group-hover:text-[#17151D] transition-colors">
                    {brand.description}
                  </p>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-3 border-t border-[#DCCBFA]/40 flex items-center justify-between text-[11px] font-mono text-[#77717F]">
                <span>{brand.highlightYear}</span>
                <span className="text-[#6C41CE] font-semibold group-hover:underline flex items-center gap-0.5">
                  VERIFIED COLLAB
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Dynamic Infinite Marquee Ribbon */}
      <div className="mt-16 sm:mt-20 py-4 bg-[#17151D] text-[#F5F0FA] overflow-hidden -rotate-1 shadow-md border-y border-[#A88BEA]">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
          {[...marqueeKeywords, ...marqueeKeywords, ...marqueeKeywords].map((word, i) => (
            <div key={i} className="inline-flex items-center gap-8 font-mono text-xs sm:text-sm tracking-widest">
              <span className="hover:text-[#DCCBFA] transition-colors">{word}</span>
              <span className="text-[#A88BEA] font-bold">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
