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
    <footer className="relative pt-16 pb-12 border-t border-[#DCCBFA]/80 bg-[#EAE0FF]/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Top Tier: Brand identity & Back to top button */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-[#DCCBFA]/60">
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#6C41CE] animate-pulse" />
              <h2 className="font-display font-black text-xl sm:text-2xl text-[#17151D] tracking-wider">
                MR. PAVAN CREATION
              </h2>
            </div>
            <p className="font-mono text-xs text-[#77717F] tracking-widest uppercase">
              DESIGNED WITH CREATIVITY. BUILT WITH PURPOSE.
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href="https://www.instagram.com/mr.pavancreation"
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClickSound}
                className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-[#17151D] hover:text-[#6C41CE] hover:border-[#6C41CE] transition-colors border border-[#DCCBFA]"
                title="Instagram @mr.pavancreation"
                data-cursor="INSTA"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/pavan-creation"
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClickSound}
                className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-[#17151D] hover:text-[#6C41CE] hover:border-[#6C41CE] transition-colors border border-[#DCCBFA]"
                title="LinkedIn Profile"
                data-cursor="LINKEDIN"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="mailto:mr.pavancreation@gmail.com"
                onClick={playClickSound}
                className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-[#17151D] hover:text-[#6C41CE] hover:border-[#6C41CE] transition-colors border border-[#DCCBFA]"
                title="Email Pavan"
                data-cursor="EMAIL"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Back To Top Button */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#17151D] text-[#F5F0FA] text-xs font-mono font-medium hover:bg-[#6C41CE] transition-colors shadow-xs group"
              data-cursor="TOP"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

        {/* Bottom Tier: Copyright & Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#77717F]">
          <div>
            © {currentYear} MR. PAVAN CREATION • ALL RIGHTS RESERVED.
          </div>
          
          <div className="flex items-center gap-1.5 text-[11px]">
            <span>PUNE, INDIA</span>
            <span>•</span>
            <span>VIDEO EDITOR & VISUAL STORYTELLER</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
