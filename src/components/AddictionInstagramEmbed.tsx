import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, ExternalLink, Play, Sparkles } from 'lucide-react';

interface AddictionInstagramEmbedProps {
  postUrl?: string;
  playClickSound?: () => void;
  className?: string;
}

export const AddictionInstagramEmbed: React.FC<AddictionInstagramEmbedProps> = ({
  postUrl = 'https://www.instagram.com/p/DW_hPK-CvmW/',
  playClickSound,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isRendered, setIsRendered] = useState<boolean>(false);
  const [embedFailed, setEmbedFailed] = useState<boolean>(false);

  const postTitle = 'EVENT COVERAGE';
  const postDescription =
    'A GLIMPSE INTO THE MOMENTS, CELEBRATIONS AND ENERGY OF ADDICTION’26.';

  useEffect(() => {
    // 1. Singleton script loader for Instagram official embed script
    const SCRIPT_ID = 'instagram-embed-script';
    let script = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;

    const processEmbeds = () => {
      try {
        const instgrm = (window as unknown as { instgrm?: { Embeds?: { process: () => void } } })
          .instgrm;
        if (instgrm?.Embeds) {
          instgrm.Embeds.process();
        }
      } catch {
        // Handled gracefully
      }
    };

    if (!script) {
      script = document.createElement('script');
      script.id = SCRIPT_ID;
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        processEmbeds();
      };
      script.onerror = () => {
        setEmbedFailed(true);
      };
      document.body.appendChild(script);
    } else {
      processEmbeds();
    }

    // 2. Poll for the rendered Instagram iframe within container
    const checkInterval = setInterval(() => {
      if (containerRef.current) {
        const iframe = containerRef.current.querySelector(
          'iframe.instagram-media-rendered, iframe'
        );
        if (iframe) {
          setIsRendered(true);
          setEmbedFailed(false);
          clearInterval(checkInterval);
        }
      }
    }, 400);

    // 3. Fallback timeout: if no iframe is detected within 3.5s
    const timeout = setTimeout(() => {
      clearInterval(checkInterval);
      if (!isRendered) {
        setEmbedFailed(true);
      }
    }, 3500);

    return () => {
      clearInterval(checkInterval);
      clearTimeout(timeout);
    };
  }, [isRendered]);

  const handleOpenInstagram = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    playClickSound?.();
    window.open(postUrl, '_blank', 'noopener,noreferrer');
  };

  const showEmbed = isRendered && !embedFailed;

  return (
    <div
      className={`group relative overflow-hidden bg-[#17151B] border border-[#DCCCF5]/80 hover:border-[#C9A45C] transition-all duration-300 rounded-2xl sm:rounded-3xl shadow-xl select-none ${className}`}
    >
      {/* Corner Crop Marks for Premium Editorial Feel */}
      <span className="absolute top-3 left-3 w-3.5 h-3.5 border-t-2 border-l-2 border-[#C9A45C] z-30 pointer-events-none" />
      <span className="absolute top-3 right-3 w-3.5 h-3.5 border-t-2 border-r-2 border-[#C9A45C] z-30 pointer-events-none" />
      <span className="absolute bottom-3 left-3 w-3.5 h-3.5 border-b-2 border-l-2 border-[#C9A45C] z-30 pointer-events-none" />
      <span className="absolute bottom-3 right-3 w-3.5 h-3.5 border-b-2 border-r-2 border-[#C9A45C] z-30 pointer-events-none" />

      {/* Top Metadata HUD Overlay */}
      <div className="p-3.5 sm:p-5 bg-gradient-to-b from-black/90 via-black/50 to-transparent flex items-center justify-between z-30 border-b border-white/5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-[#17151B]/90 text-[#C9A45C] border border-[#C9A45C]/40 text-[10px] font-mono font-bold tracking-wider backdrop-blur-md">
            INSTAGRAM POST
          </span>
          <span className="text-white/85 font-mono text-[11px] truncate max-w-[200px] sm:max-w-[340px] hidden xs:inline">
            {postTitle}
          </span>
        </div>

        <button
          onClick={handleOpenInstagram}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-[#C9A45C] text-white hover:text-[#17151B] text-[10px] font-mono font-bold tracking-wider transition-colors cursor-pointer border border-white/20"
          title="Open on Instagram"
        >
          <Instagram className="w-3 h-3" />
          <span className="hidden sm:inline">VIEW POST</span>
          <ExternalLink className="w-2.5 h-2.5" />
        </button>
      </div>

      {/* Main Content Area */}
      <div className="relative w-full">
        {/* VIEW A: Official Instagram Embed Iframe Container */}
        <div
          ref={containerRef}
          className={`w-full flex justify-center items-center py-6 px-4 bg-[#17151B] min-h-[460px] ${
            showEmbed ? 'block' : 'hidden'
          }`}
        >
          <blockquote
            className="instagram-media"
            data-instgrm-captioned
            data-instgrm-permalink={`${postUrl}?utm_source=ig_embed&utm_campaign=loading`}
            data-instgrm-version="14"
            style={{
              background: '#17151B',
              border: 0,
              borderRadius: '16px',
              margin: '0 auto',
              maxWidth: '540px',
              minWidth: '280px',
              padding: 0,
              width: '100%',
            }}
          >
            <div style={{ padding: '16px', textAlign: 'center' }}>
              <a
                href={`${postUrl}?utm_source=ig_embed&utm_campaign=loading`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#C9A45C',
                  textDecoration: 'none',
                  fontFamily: 'monospace',
                  fontSize: '12px',
                }}
              >
                View Post on Instagram
              </a>
            </div>
          </blockquote>
        </div>

        {/* VIEW B: Verified Editorial Fallback Card */}
        {!showEmbed && (
          <div
            onClick={handleOpenInstagram}
            className="relative w-full aspect-video min-h-[360px] sm:min-h-[460px] flex flex-col justify-between p-6 sm:p-10 cursor-pointer overflow-hidden bg-gradient-to-br from-[#17151B] via-[#231B2F] to-[#121016]"
          >
            {/* Ambient Background Glow Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#8964DE]/15 via-transparent to-transparent pointer-events-none" />
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#C9A45C]/10 rounded-full blur-[90px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#8964DE]/15 rounded-full blur-[90px] pointer-events-none" />

            {/* Subtle Grid Pattern Overlay */}
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage:
                  'linear-gradient(to right, #DCCCF5 1px, transparent 1px), linear-gradient(to bottom, #DCCCF5 1px, transparent 1px)',
                backgroundSize: '36px 36px',
              }}
            />

            {/* Top Subhead */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17151B]/80 border border-[#C9A45C]/40 text-[#C9A45C] text-[10px] font-mono font-bold tracking-widest uppercase">
                <Sparkles className="w-3 h-3 text-[#C9A45C]" />
                <span>OFFICIAL FESTIVAL COVERAGE</span>
              </div>
              <span className="text-[10px] font-mono text-[#DCCCF5]/70">@pict_addiction</span>
            </div>

            {/* Center Visual Core */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto py-4">
              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="relative group/btn cursor-pointer"
              >
                {/* Glowing Outer Ring */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-[#C9A45C] via-[#E1306C] to-[#833AB4] p-[2px] shadow-[0_0_40px_rgba(201,164,92,0.35)] flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-[#17151B] flex items-center justify-center group-hover/btn:bg-[#17151B]/80 transition-colors">
                    <Play className="w-8 h-8 sm:w-9 sm:h-9 text-[#F6F1E9] fill-current translate-x-0.5 group-hover/btn:text-[#C9A45C] transition-colors" />
                  </div>
                </div>

                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#17151B] border border-[#C9A45C]/50 text-[#C9A45C] text-[9px] font-mono font-bold tracking-wider">
                  <Instagram className="w-2.5 h-2.5" />
                  <span>POST</span>
                </div>
              </motion.div>

              <h4 className="font-display font-black text-xl sm:text-2xl lg:text-3xl text-white tracking-tight mt-6">
                {postTitle}
              </h4>
              <p className="font-sans text-xs sm:text-sm text-[#DCCCF5]/80 font-medium tracking-wide uppercase max-w-xl mt-2 leading-relaxed">
                {postDescription}
              </p>

              {/* Direct CTA Button */}
              <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={handleOpenInstagram}
                  className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full text-xs font-mono font-bold tracking-wider bg-gradient-to-r from-[#C9A45C] to-[#E3C588] text-[#17151B] hover:bg-white hover:text-black transition-all shadow-xl hover:scale-105 cursor-pointer group/cta"
                >
                  <Instagram className="w-4 h-4 text-[#17151B] group-hover/cta:scale-110 transition-transform" />
                  <span>WATCH ON INSTAGRAM</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#17151B]" />
                </button>
              </div>
            </div>

            {/* Bottom Status Line */}
            <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-[#DCCCF5]/60 pt-3 border-t border-white/5">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C] animate-pulse" />
                <span>OFFICIAL INSTAGRAM EMBED METHOD</span>
              </span>
              <span>RESPONSIVE PRESENTATION</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
