import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SOFTWARE_TOOLS, CREATIVE_SKILLS } from '../data/skills';
import { Sparkles, Scissors, Clapperboard, Layers, TrendingUp, Video, Eye, Film, Smartphone } from 'lucide-react';

interface SkillsProps {
  playClickSound?: () => void;
}

export const Skills: React.FC<SkillsProps> = ({ playClickSound }) => {
  const [activeTab, setActiveTab] = useState<'software' | 'creative'>('software');

  // Icon mapping
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scissors': return <Scissors className="w-5 h-5 text-[#6C41CE]" />;
      case 'Clapperboard': return <Clapperboard className="w-5 h-5 text-[#6C41CE]" />;
      case 'Layers': return <Layers className="w-5 h-5 text-[#6C41CE]" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-[#6C41CE]" />;
      case 'Video': return <Video className="w-5 h-5 text-[#6C41CE]" />;
      case 'Eye': return <Eye className="w-5 h-5 text-[#6C41CE]" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-[#6C41CE]" />;
      case 'Film': return <Film className="w-5 h-5 text-[#6C41CE]" />;
      default: return <Sparkles className="w-5 h-5 text-[#6C41CE]" />;
    }
  };

  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-[#DCCBFA]/70 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE0FF] text-[#6C41CE] text-xs font-mono tracking-wider font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#8964DE]" />
              TECHNICAL CAPABILITIES
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#17151D] tracking-tight leading-[1.05]">
              TOOLS OF <br />
              <span className="font-serif italic font-normal text-[#6C41CE]">My Craft.</span>
            </h2>
          </div>

          <p className="font-sans text-sm sm:text-base text-[#77717F] max-w-md leading-relaxed">
            From desktop non-linear suites to mobile-first viral workflows, balancing speed, fidelity, and storytelling precision.
          </p>
        </div>

        {/* Part 1: Featured Software Stack */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-mono text-xs sm:text-sm font-bold tracking-widest text-[#17151D] uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#6C41CE]" />
              PRIMARY NON-LINEAR EDITING SUITES
            </h3>
            <span className="text-[11px] font-mono text-[#77717F]">03 CORE TOOLS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SOFTWARE_TOOLS.map((tool, idx) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="rounded-2xl glass-panel p-6 sm:p-7 border border-[#DCCBFA]/70 hover:border-[#6C41CE] transition-all duration-300 shadow-xs hover:shadow-xl bg-white/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#EAE0FF] flex items-center justify-center border border-[#A88BEA]/40 shadow-xs">
                      {renderIcon(tool.iconName)}
                    </div>
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#17151D] text-[#EAE0FF]">
                      {tool.level}
                    </span>
                  </div>

                  <h4 className="font-display font-extrabold text-2xl text-[#17151D] mb-1">
                    {tool.name}
                  </h4>
                  <p className="text-xs text-[#77717F] font-sans leading-relaxed mb-6">
                    {tool.description}
                  </p>
                </div>

                <div>
                  {/* Proficiency Meter */}
                  <div className="space-y-1.5 mb-5">
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="text-[#77717F]">PROFICIENCY</span>
                      <span className="font-bold text-[#6C41CE]">{tool.proficiency}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-[#EAE0FF] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tool.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                        className="h-full bg-[#6C41CE] rounded-full"
                      />
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#DCCBFA]/50">
                    {tool.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F5F0FA] text-[#6C41CE] border border-[#DCCBFA]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Part 2: Creative & Storytelling Skills */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-mono text-xs sm:text-sm font-bold tracking-widest text-[#17151D] uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#6C41CE]" />
              CREATIVE DISCIPLINES & EXPERTISE
            </h3>
            <span className="text-[11px] font-mono text-[#77717F]">06 DISCIPLINES</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CREATIVE_SKILLS.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-5 sm:p-6 rounded-2xl glass-panel border border-[#DCCBFA]/60 hover:border-[#6C41CE] transition-all bg-white/70"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-[#EAE0FF] flex items-center justify-center shrink-0">
                    {renderIcon(skill.iconName)}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-[#17151D]">
                      {skill.name}
                    </h4>
                    <span className="text-[10px] font-mono text-[#6C41CE] uppercase">
                      {skill.level}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-[#77717F] font-sans leading-relaxed mb-4">
                  {skill.description}
                </p>

                <div className="flex flex-wrap gap-1">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#F5F0FA] text-[#77717F] border border-[#DCCBFA]/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
