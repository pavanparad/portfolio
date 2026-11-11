import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  Camera,
  Compass,
  Film,
  Layers,
  MapPin,
  Palette,
  PenTool,
  Scissors,
  Sparkles,
} from 'lucide-react';

export interface AboutPageProps {
  onNavigate: (path: '/' | '/about' | '/contact', hash?: string) => void;
  playClickSound?: () => void;
}

interface CreativeCategory {
  index: string;
  title: string;
  items: string[];
  icon: React.ComponentType<{ className?: string }>;
}

interface SoftwareItem {
  monogram: string;
  name: string;
  level: string;
  accent: string;
  badgeStyle: string;
  isOrigin?: boolean;
}

const CREATIVE_CATEGORIES: CreativeCategory[] = [
  {
    index: '01',
    title: 'VIDEO PRODUCTION',
    items: ['Cinematography & Filming.', 'Visual Storytelling.'],
    icon: Film,
  },
  {
    index: '02',
    title: 'POST-PRODUCTION',
    items: ['Video Editing.', 'Motion Graphics & Animation.'],
    icon: Scissors,
  },
  {
    index: '03',
    title: 'CREATIVE DIRECTION',
    items: [
      'Creative Concepts.',
      'Visual Direction.',
      'Graphic Design.',
      'Visual Design.',
    ],
    icon: Compass,
  },
  {
    index: '04',
    title: 'DIGITAL CONTENT',
    items: ['Social Media Content Strategy.', 'AI-Assisted Video Creation.'],
    icon: Sparkles,
  },
  {
    index: '05',
    title: 'PERSONAL ART',
    items: ['Sketching.', 'Traditional Art.', 'Visual Experimentation.'],
    icon: PenTool,
  },
];

const SOFTWARE_TOOLKIT: SoftwareItem[] = [
  {
    monogram: 'CC',
    name: 'CAPCUT',
    level: 'ADVANCED.',
    accent: 'text-[#DCCCF5]',
    badgeStyle: 'border-[#DCCCF5]/35 bg-[#DCCCF5]/10 text-[#DCCCF5]',
  },
  {
    monogram: 'Pr',
    name: 'ADOBE PREMIERE PRO',
    level: 'INTERMEDIATE.',
    accent: 'text-[#BBA1E8]',
    badgeStyle: 'border-[#BBA1E8]/40 bg-[#BBA1E8]/10 text-[#DCCCF5]',
  },
  {
    monogram: 'Ae',
    name: 'ADOBE AFTER EFFECTS',
    level: 'INTERMEDIATE.',
    accent: 'text-[#DCCCF5]',
    badgeStyle: 'border-[#DCCCF5]/35 bg-[#DCCCF5]/10 text-[#F6F1E9]',
  },
  {
    monogram: 'KM',
    name: 'KINEMASTER',
    level: 'WHERE IT ALL BEGAN.',
    accent: 'text-[#C9A45C]',
    badgeStyle: 'border-[#C9A45C]/50 bg-[#C9A45C]/15 text-[#C9A45C]',
    isOrigin: true,
  },
];

const PERSONALITY_WORDS = [
  { word: 'CURIOUS.', italic: false },
  { word: 'EXPERIMENTAL.', italic: true },
  { word: 'ARTISTIC.', italic: false },
  { word: 'AMBITIOUS.', italic: false },
  { word: 'ALWAYS EXPLORING.', italic: true },
];

const VISUAL_DETAIL_TAGS = [
  { label: 'TRAVELLING', icon: Compass },
  { label: 'EXPLORING', icon: MapPin },
  { label: 'SKETCHING', icon: PenTool },
  { label: 'ART', icon: Palette },
  { label: 'CREATIVE EXPERIMENTS', icon: Layers },
];

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  playClickSound,
}) => {
  const prefersReducedMotion = useReducedMotion();

  const handleGoToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    playClickSound?.();
    onNavigate('/contact');
  };

  return (
    <article className="relative bg-[#F6F1E9]/70 text-[#17151B]">
      {/* ================================================================
          SECTION A — ABOUT HERO
      ================================================================ */}
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Editorial Copy Column */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-8 bg-[#C9A45C]" />
                <span className="font-mono text-xs tracking-[0.22em] uppercase text-[#C9A45C] font-semibold">
                  BEHIND THE FRAME.
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl tracking-tight text-[#17151B] leading-[0.95]">
                  I&apos;M PAVAN<span className="text-[#C9A45C]">.</span>
                </h1>

                <p className="font-mono text-xs sm:text-sm tracking-[0.16em] uppercase text-[#17151B]/80 border-l-2 border-[#BBA1E8] pl-4 py-0.5 leading-relaxed">
                  CREATIVE VIDEO EDITOR.{' '}
                  <span className="text-[#17151B] font-semibold">VISUAL STORYTELLER.</span>{' '}
                  ALWAYS EXPERIMENTING.
                </p>
              </div>

              {/* Concise 6-7 visual lines on desktop matching exact narrative */}
              <div className="max-w-[66ch] space-y-2 pt-2 text-[15px] text-[#17151B]/85 font-sans leading-[1.6]">
                <p>
                  I&apos;m Pavan, a creative video editor and visual storyteller who loves turning ideas into visual experiences. What started as mobile editing on KineMaster just to look cool among friends slowly became a passion for creating.
                </p>
                <p>
                  With nearly 2 years of experience, I explore cinematic storytelling, emotional visuals and unexpected creative concepts. Beyond editing, I&apos;m passionate about cinematography, motion graphics, design, sketching and exploring new perspectives.
                </p>
                <p className="font-medium text-[#17151B]">
                  Always experimenting, always learning, and always looking for a story worth telling.
                </p>
              </div>

              {/* Subtle Editorial Identity Strip */}
              <div className="pt-4 border-t border-[#17151B]/12 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-mono tracking-[0.16em] uppercase text-[#17151B]/65">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C]" />
                  MR. PAVAN CREATION
                </span>
                <span>CREATIVE VIDEO EDITOR &amp; VISUAL STORYTELLER</span>
              </div>
            </motion.div>

            {/* Primary Editorial Portrait Visual */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5"
            >
              <div className="relative max-w-md mx-auto lg:ml-auto lg:mr-0">
                {/* Offset Lavender Editorial Backing Plane */}
                <div
                  aria-hidden="true"
                  className="hidden sm:block absolute -inset-3 translate-x-3 translate-y-3 rounded-2xl border border-[#BBA1E8]/60 bg-[#DCCCF5]/35 -z-10"
                />

                {/* Top Corner Annotations */}
                <div className="flex items-center justify-between text-[10px] font-mono tracking-[0.2em] uppercase text-[#17151B]/60 mb-2.5 px-0.5">
                  <span>FRAME // PORTRAIT 01</span>
                  <span className="text-[#C9A45C] font-semibold">AUTHENTIC</span>
                </div>

                {/* Primary Portrait Frame matching native 1200x1600 (3:4) */}
                <div className="group relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-[#17151B]/15 bg-[#17151B] shadow-[0_24px_60px_rgba(23,21,27,0.12)]">
                  <img
                    src="/images/pavanabout.jpg"
                    alt="Pavan — Creative Video Editor & Visual Storyteller outdoors"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />

                  {/* Subtle Editorial Vignette & Champagne Corner Ticks */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#17151B]/55 via-transparent to-transparent" />
                  <span className="pointer-events-none absolute top-3.5 left-3.5 w-3.5 h-3.5 border-t border-l border-[#C9A45C]/80" />
                  <span className="pointer-events-none absolute top-3.5 right-3.5 w-3.5 h-3.5 border-t border-r border-[#C9A45C]/80" />
                  <span className="pointer-events-none absolute bottom-3.5 left-3.5 w-3.5 h-3.5 border-b border-l border-[#C9A45C]/80" />
                  <span className="pointer-events-none absolute bottom-3.5 right-3.5 w-3.5 h-3.5 border-b border-r border-[#C9A45C]/80" />

                  <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-[10px] font-mono tracking-[0.18em] uppercase text-[#F6F1E9]/90">
                    <span>BEHIND THE FRAME</span>
                    <span className="text-[#DCCCF5]">PUNE, INDIA</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION B — CREATIVE TOOLKIT
      ================================================================ */}
      <section className="py-16 sm:py-24 bg-[#F6F1E9] border-y border-[#17151B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-10 border-b border-[#17151B]/12"
          >
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C]" />
                <span className="font-mono text-xs tracking-[0.22em] uppercase text-[#C9A45C] font-semibold">
                  WHAT I DO.
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#17151B]">
                FROM AN IDEA TO THE{' '}
                <span className="font-serif italic font-semibold text-[#17151B]">
                  FINAL FRAME.
                </span>
              </h2>
            </div>

            <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#17151B]/60">
              CREATIVE TOOLKIT // 05 DISCIPLINES
            </span>
          </motion.div>

          {/* Compact Architectural Ledger Grid */}
          <div className="divide-y divide-[#17151B]/10">
            {CREATIVE_CATEGORIES.map((category, idx) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.index}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: idx * 0.04 }}
                  className="group grid grid-cols-1 md:grid-cols-12 items-start md:items-center gap-4 md:gap-8 py-6 sm:py-7 px-2 sm:px-4 rounded-xl transition-colors duration-300 hover:bg-[#DCCCF5]/30"
                >
                  <div className="md:col-span-5 flex items-center gap-4">
                    <span className="font-mono text-xs tracking-widest text-[#C9A45C] font-semibold">
                      {category.index}
                    </span>
                    <div className="w-9 h-9 rounded-lg border border-[#17151B]/15 bg-white/70 flex items-center justify-center text-[#17151B] group-hover:border-[#C9A45C] group-hover:bg-[#17151B] group-hover:text-[#F6F1E9] transition-colors duration-300 shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-display font-semibold text-lg sm:text-xl tracking-wide text-[#17151B]">
                      {category.title}
                    </h3>
                  </div>

                  <div className="md:col-span-7 flex flex-wrap items-center gap-2.5 pl-9 md:pl-0">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-sans text-[#17151B]/90 bg-white/75 border border-[#17151B]/12 group-hover:border-[#BBA1E8] transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION C — SOFTWARE TOOLKIT
      ================================================================ */}
      <section className="py-16 sm:py-24 bg-[#17151B] text-[#F6F1E9] relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 right-1/4 w-96 h-96 rounded-full bg-[#BBA1E8]/10 blur-3xl"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-10 border-b border-white/10">
            <div className="space-y-3">
              <span className="inline-block font-mono text-xs tracking-[0.22em] uppercase text-[#C9A45C] font-semibold">
                SOFTWARE TOOLKIT
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#F6F1E9]">
                TOOLS OF THE TRADE.
              </h2>
            </div>

            <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#DCCCF5]/70">
              HONEST CRAFT // ZERO INFLATED METRICS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l border-t border-white/10 mt-10">
            {SOFTWARE_TOOLKIT.map((tool, idx) => (
              <motion.div
                key={tool.name}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                className="group p-6 sm:p-7 border-r border-b border-white/10 bg-white/[0.015] hover:bg-white/[0.04] transition-colors flex flex-col justify-between gap-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl border flex items-center justify-center font-display font-bold text-base tracking-tight ${tool.badgeStyle}`}
                  >
                    {tool.monogram}
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-white/40">
                    0{idx + 1}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-semibold text-lg tracking-wide text-[#F6F1E9]">
                    {tool.name}
                  </h3>
                  <p
                    className={`font-mono text-xs tracking-[0.18em] uppercase font-medium ${
                      tool.isOrigin ? 'text-[#C9A45C]' : tool.accent
                    }`}
                  >
                    {tool.level}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION D — PERSONALITY STRIP
      ================================================================ */}
      <section className="py-16 sm:py-24 bg-[#F5F0FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          {/* Heading & Supporting Line */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#C9A45C]" />
              <h2 className="font-mono text-xs tracking-[0.22em] uppercase text-[#C9A45C] font-semibold">
                BEYOND THE TIMELINE.
              </h2>
            </div>

            {/* Prominent Editorial Personality Words */}
            <div className="flex flex-wrap items-baseline gap-x-5 sm:gap-x-8 gap-y-2 border-y border-[#17151B]/12 py-6 sm:py-8">
              {PERSONALITY_WORDS.map((item) => (
                <span
                  key={item.word}
                  className={
                    item.italic
                      ? 'font-serif italic font-semibold text-2xl sm:text-4xl lg:text-5xl text-[#17151B]'
                      : 'font-display font-bold text-2xl sm:text-4xl lg:text-5xl tracking-tight text-[#17151B]'
                  }
                >
                  {item.word}
                </span>
              ))}
            </div>

            <p className="font-mono text-xs sm:text-sm tracking-[0.16em] uppercase text-[#17151B]/80 max-w-3xl leading-relaxed">
              FINDING STORIES IN ORDINARY MOMENTS AND TURNING IDEAS INTO SOMETHING VISUAL.
            </p>
          </motion.div>

          {/* Compact Genuine Photography + Visual Perspective Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Widescreen Camera Perspective (Native 16:9 - 4160x2340) */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 flex flex-col justify-between gap-4"
            >
              <div className="group relative aspect-video w-full overflow-hidden rounded-2xl border border-[#17151B]/15 bg-[#17151B]">
                <img
                  src="/images/pavancamera.jpg"
                  alt="Pavan framing a shot with his camera"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#17151B]/65 via-transparent to-transparent" />
                <div className="absolute bottom-3.5 left-4 right-4 sm:bottom-4 sm:left-5 sm:right-5 flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono tracking-[0.16em] uppercase text-[#F6F1E9]">
                  <span className="inline-flex items-center gap-1.5">
                    <Camera className="w-3.5 h-3.5 text-[#C9A45C] shrink-0" />
                    <span>CREATIVE EXPERIMENTS</span>
                  </span>
                  <span className="text-[#DCCCF5]">FIELD // FRAME</span>
                </div>
              </div>

              {/* Minimal Interest Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                {VISUAL_DETAIL_TAGS.map((tag) => {
                  const Icon = tag.icon;
                  return (
                    <span
                      key={tag.label}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 border border-[#17151B]/10 text-[11px] font-mono tracking-[0.14em] uppercase text-[#17151B]/80"
                    >
                      <Icon className="w-3 h-3 text-[#C9A45C]" />
                      {tag.label}
                    </span>
                  );
                })}
              </div>
            </motion.div>

            {/* Companion Portrait (Native 3:4 - 1200x1600, unclipped proportions) */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="lg:col-span-5"
            >
              <div className="group relative aspect-[3/4] max-w-[360px] lg:max-w-[380px] mx-auto w-full overflow-hidden rounded-2xl border border-[#17151B]/15 bg-[#17151B]">
                <img
                  src="/images/pavan-hero.jpg"
                  alt="Pavan outdoors exploring architecture and light"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#17151B]/55 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between gap-2 text-[10px] font-mono tracking-[0.18em] uppercase text-[#F6F1E9]">
                  <span>TRAVELLING &amp; EXPLORING</span>
                  <span className="text-[#C9A45C] shrink-0">VISUAL DIARY</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION E — CLOSING CTA
      ================================================================ */}
      <section className="py-20 sm:py-28 bg-[#DCCCF5]/45 border-t border-[#17151B]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-8">
          <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-[#17151B] leading-[1.05]">
            LET&apos;S CREATE{' '}
            <span className="font-serif italic font-semibold">SOMETHING</span>{' '}
            TOGETHER.
          </h2>

          <div>
            <a
              href="/contact"
              onClick={handleGoToContact}
              data-cursor="CONTACT"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#17151B] text-[#F6F1E9] hover:bg-[#C9A45C] hover:text-[#17151B] font-mono text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase transition-all duration-300 shadow-md"
            >
              <span>GET IN TOUCH.</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>
    </article>
  );
};

export default AboutPage;
