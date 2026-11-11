import React from 'react';
import { motion } from 'framer-motion';
import { BRANDS_SHOWCASE } from '../data/collaborations';

interface CollaborationsProps {
  playClickSound?: () => void;
}

export const Collaborations: React.FC<CollaborationsProps> = ({ playClickSound }) => {
  return (
    <section id="brands" className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-[#F5F0FA] to-[#F6F1E9]/40 border-b border-[#DCCCF5]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        {/* Section Header: Heading & Subheading ONLY */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h2 className="font-display font-black text-2xl sm:text-5xl lg:text-6xl text-[#17151B] tracking-tight leading-[1.15]">
            <span className="block sm:inline">BRANDS &amp; </span>
            <span>ORGANIZATIONS</span>
          </h2>
          <p className="font-serif italic font-normal text-xl sm:text-4xl lg:text-5xl text-[#6C41CE] mt-1.5">
            I've Worked With.
          </p>
        </div>

        {/* Logos Display: VELOXX CLUB & SHUTTLECLUB ONLY */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 max-w-3xl mx-auto items-center">
          {BRANDS_SHOWCASE.map((logo) => (
            <motion.div
              key={logo.id}
              initial={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              onClick={() => playClickSound?.()}
              className="group relative rounded-3xl p-6 sm:p-10 border border-[#DCCCF5] hover:border-[#C9A45C] transition-all duration-300 shadow-sm hover:shadow-xl bg-white/90 backdrop-blur-xs flex items-center justify-center cursor-pointer"
              data-cursor="BRAND"
            >
              {/* Corner Selection Accents on Hover */}
              <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border border-[#C9A45C] shadow-xs" />
              <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-1.5 -right-1.5 w-3 h-3 bg-white border border-[#C9A45C] shadow-xs" />
              <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white border border-[#C9A45C] shadow-xs" />
              <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white border border-[#C9A45C] shadow-xs" />

              {/* Logo Container Preserving Aspect Ratio & Visual Prominence */}
              <div className="w-full aspect-[4/3] sm:aspect-square max-h-56 sm:max-h-64 flex items-center justify-center p-4 sm:p-6 overflow-hidden rounded-2xl bg-white">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-full max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
