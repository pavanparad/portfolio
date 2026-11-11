import React from 'react';
import { ArrowUp, Instagram, Linkedin, Mail, Sparkles, Heart } from 'lucide-react';

interface FooterProps {
  playClickSound?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ playClickSound }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    playClickSound?.();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-20 pb-12 border-t border-[#C9A45C]/30 bg-[#17151B] text-[#F6F1E9] overflow-hidden">
      {/* Ambient Gold & Lavender Backdrop Glows */}
      <div className="absolute top-0 left-1/4 w-[450px] h-[250px] rounded-full filter blur-3xl pointer-events-none opacity-20 bg-gradient-to-r from-[#C9A45C] to-[#A88BEA]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] rounded-full filter blur-3xl pointer-events-none opacity-15 bg-[#C9A45C]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Top Tier: Prominent Official CP Logo & Brand Identity */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 pb-16 border-b border-white/10">
          
          {/* Left Side: Complete Official Logo + Brand Statement */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            
            {/* The Complete Official Logo Plaque */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-[#000000] border-2 border-[#C9A45C]/60 p-2 shadow-[0_0_35px_rgba(201,164,92,0.25)] flex items-center justify-center overflow-hidden shrink-0 group hover:border-[#C9A45C] transition-all duration-300">
              <img
                src="/images/logo/logo.jpg"
                alt="MR. PAVAN CREATION Official Logo"
                className="w-full h-full object-contain scale-[1.3] filter drop-shadow-[0_4px_12px_rgba(201,164,92,0.4)] group-hover:scale-[1.38] transition-transform duration-500"
              />
              <div className="absolute inset-0 rounded-2xl border border-[#DCCCF5]/15 pointer-events-none" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#C9A45C] animate-pulse" />
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#F6F1E9] tracking-wider">
                  MR. PAVAN CREATION
                </h2>
              </div>
              <p className="font-mono text-xs sm:text-sm text-[#C9A45C] tracking-widest uppercase">
                DESIGNED WITH CREATIVITY. BUILT WITH PURPOSE.
              </p>
              <p className="font-sans text-xs text-[#77717F] max-w-md">
                Video Editor, Visual Storyteller and Creative Collaborator based in Pune, India.
              </p>
            </div>

          </div>

          {/* Right Side: Social Media Links & Back to Top */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2.5">
              <a
                href="https://www.instagram.com/mr.pavan_creation/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClickSound}
                className="w-11 h-11 rounded-full bg-white/5 hover:bg-[#C9A45C]/20 border border-white/10 hover:border-[#C9A45C] flex items-center justify-center text-[#F6F1E9] hover:text-[#C9A45C] transition-all shadow-xs"
                title="Instagram @mr.pavan_creation"
                aria-label="Instagram @mr.pavan_creation"
                data-cursor="INSTA"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/pavanparad"
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClickSound}
                className="w-11 h-11 rounded-full bg-white/5 hover:bg-[#C9A45C]/20 border border-white/10 hover:border-[#C9A45C] flex items-center justify-center text-[#F6F1E9] hover:text-[#C9A45C] transition-all shadow-xs"
                title="LinkedIn — Pavan Parad"
                aria-label="LinkedIn — Pavan Parad"
                data-cursor="LINKEDIN"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="mailto:mr.pavancreation@gmail.com"
                onClick={playClickSound}
                className="w-11 h-11 rounded-full bg-white/5 hover:bg-[#C9A45C]/20 border border-white/10 hover:border-[#C9A45C] flex items-center justify-center text-[#F6F1E9] hover:text-[#C9A45C] transition-all shadow-xs"
                title="Email Pavan"
                data-cursor="EMAIL"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Back To Top Button */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#C9A45C] hover:bg-[#DFC8A4] text-[#17151B] text-xs font-mono font-bold tracking-wider transition-all shadow-md group cursor-pointer"
              data-cursor="TOP"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

        {/* Bottom Tier: Copyright & Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#77717F]">
          <div className="flex items-center gap-2">
            <span>© {currentYear} MR. PAVAN CREATION</span>
            <span className="text-[#C9A45C]">✦</span>
            <span>ALL RIGHTS RESERVED</span>
          </div>
          
          <div className="flex items-center gap-2 text-[11px]">
            <span className="text-[#C9A45C]">PUNE, MAHARASHTRA, INDIA</span>
            <span>•</span>
            <span>OFFICIAL BRAND PORTFOLIO</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
