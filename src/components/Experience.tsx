import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../data/experience';
import { Sparkles, Calendar, ArrowUpRight, Award, CheckCircle2, ChevronRight } from 'lucide-react';

interface ExperienceProps {
  playClickSound?: () => void;
}

export const Experience: React.FC<ExperienceProps> = ({ playClickSound }) => {
  return (
    <section id="experience" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-[#DCCBFA]/70 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE0FF] text-[#6C41CE] text-xs font-mono tracking-wider font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#8964DE]" />
              CREATIVE TRACK RECORD
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#17151D] tracking-tight leading-[1.05]">
              EXPERIENCE & <br />
              <span className="font-serif italic font-normal text-[#6C41CE]">Creative Journey.</span>
            </h2>
          </div>

          <p className="font-sans text-sm sm:text-base text-[#77717F] max-w-md leading-relaxed">
            Leading video production, directing promotional campaigns, and collaborating with active student chapters, athletic leagues, and creative collectives.
          </p>
        </div>

        {/* Modern Editorial Timeline */}
        <div className="relative">
          {/* Vertical Center/Side Guide Line */}
          <div className="hidden lg:block absolute left-8 top-4 bottom-4 w-[1px] bg-gradient-to-b from-[#6C41CE] via-[#DCCBFA] to-transparent" />

          <div className="space-y-8 sm:space-y-12">
            {EXPERIENCES.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative lg:pl-20 group"
              >
                {/* Timeline Node Dot */}
                <div className="hidden lg:flex absolute left-6 top-8 w-5 h-5 rounded-full bg-[#F5F0FA] border-2 border-[#6C41CE] items-center justify-center -translate-x-1/2 group-hover:scale-125 transition-transform">
                  <div className="w-2 h-2 rounded-full bg-[#6C41CE]" />
                </div>

                {/* Timeline Card */}
                <div className="rounded-2xl glass-panel p-6 sm:p-8 border border-[#DCCBFA]/70 group-hover:border-[#6C41CE] transition-all duration-300 shadow-xs hover:shadow-lg bg-white/75">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    
                    {/* Left: Organization & Role Header */}
                    <div className="lg:col-span-5 space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[10px] font-mono tracking-wider px-2.5 py-0.5 rounded-full bg-[#EAE0FF] text-[#6C41CE] font-bold">
                          {item.period}
                        </span>
                        <span className="text-[10px] font-mono tracking-wider px-2.5 py-0.5 rounded-full bg-[#F5F0FA] text-[#77717F] border border-[#DCCBFA]">
                          {item.type}
                        </span>
                      </div>

                      <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#17151D] group-hover:text-[#6C41CE] transition-colors pt-1">
                        {item.organization}
                      </h3>

                      <div className="text-sm font-mono font-bold text-[#6C41CE] flex items-center gap-2">
                        <span>ROLE: {item.role}</span>
                      </div>
                    </div>

                    {/* Right: Description & Responsibilities */}
                    <div className="lg:col-span-7 space-y-4">
                      <p className="text-sm sm:text-base font-sans text-[#77717F] leading-relaxed">
                        {item.description}
                      </p>

                      <div className="space-y-2 pt-2 border-t border-[#DCCBFA]/50">
                        <span className="text-[11px] font-mono font-bold tracking-wider text-[#17151D] uppercase">
                          KEY DELIVERABLES & IMPACT:
                        </span>
                        <ul className="space-y-1.5 text-xs text-[#77717F] font-sans">
                          {item.responsibilities.map((resp, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-[#6C41CE] font-bold mt-0.5">✦</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
