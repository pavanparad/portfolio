import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, ExternalLink, Eye, Play } from 'lucide-react';
import { PersonalCreatorReel } from '../types';

interface InstagramReelEmbedProps {
  reel: PersonalCreatorReel;
  playClickSound?: () => void;
}

export const InstagramReelEmbed: React.FC<InstagramReelEmbedProps> = ({
  reel,
  playClickSound,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isRendered, setIsRendered] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'embed' | 'poster'>('embed');

  useEffect(() => {
    // 1. Singleton script loader for Instagram official embed script
    const SCRIPT_ID = 'instagram-embed-script';
    let script = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;

    const processEmbeds = () => {
      try {
        const instgrm = (window as unknown as { instgrm?: { Embeds?: { process: () => void } } }).instgrm;
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
      document.body.appendChild(script);
    } else {
      processEmbeds();
    }

    // 2. Poll to detect when Instagram attaches its iframe
    const checkInterval = setInterval(() => {
      if (containerRef.current) {
        const iframe = containerRef.current.querySelector('iframe.instagram-media-rendered, iframe');
        if (iframe) {
          setIsRendered(true);
          clearInterval(checkInterval);
        }
      }
    }, 500);

    const timeout = setTimeout(() => {
      clearInterval(checkInterval);
    }, 6000);

    return () => {
      clearInterval(checkInterval);
      clearTimeout(timeout);
    };
  }, [reel.instagramUrl]);

  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group relative flex flex-col justify-between p-5 rounded-3xl bg-white/[0.04] border border-[#DCCCF5]/30 hover:border-[#C9A45C] transition-all duration-300 shadow-xl overflow-hidden backdrop-blur-sm"
    >
      {/* Corner Crop Marks */}
      <span className="absolute top-2.5 left-2.5 w-3 h-3 border-t-2 border-l-2 border-[#C9A45C] pointer-events-none z-20" />
      <span className="absolute top-2.5 right-2.5 w-3 h-3 border-t-2 border-r-2 border-[#C9A45C] pointer-events-none z-20" />
      <span className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b-2 border-l-2 border-[#C9A45C] pointer-events-none z-20" />
      <span className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b-2 border-r-2 border-[#C9A45C] pointer-events-none z-20" />

      {/* Card Header: Reel Number & High-Visibility View Count */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 relative z-10">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-md bg-[#17151B] text-[#C9A45C] border border-[#C9A45C]/40 font-mono text-xs font-bold tracking-wider">
            REEL {reel.reelNumber}
          </span>
          <span className="text-[11px] font-mono text-[#DCCCF5] hidden xs:inline">
            INSTAGRAM 9:16
          </span>
        </div>

        {/* View Count Display */}
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-[#C9A45C]/20 to-[#8964DE]/20 border border-[#C9A45C] text-[#C9A45C] text-xs font-mono font-black tracking-wider shadow-sm">
          <Eye className="w-3.5 h-3.5 text-[#C9A45C]" />
          <span>{reel.displayViews}</span>
        </div>
      </div>

      {/* Visual Presentation Area (Clean 9:16 Frame) */}
      <div
        ref={containerRef}
        className="relative w-full rounded-2xl overflow-hidden bg-[#17151B] border border-white/5 aspect-[9/16] max-h-[580px] flex items-center justify-center select-none"
      >
        {/* VIEW A: Official Instagram Embed (Shown when active and rendered) */}
        <div
          className={`w-full h-full overflow-y-auto overflow-x-hidden p-1 flex justify-center items-center ${
            activeTab === 'embed' && isRendered ? 'block z-20' : 'hidden z-0'
          }`}
        >
          <blockquote
            className="instagram-media"
            data-instgrm-captioned
            data-instgrm-permalink={`${reel.instagramUrl}?utm_source=ig_embed&utm_campaign=loading`}
            data-instgrm-version="14"
            style={{
              background: '#17151B',
              border: 0,
              borderRadius: '14px',
              margin: '0 auto',
              maxWidth: '540px',
              minWidth: '260px',
              padding: 0,
              width: '100%',
            }}
          >
            <div style={{ padding: '16px', textAlign: 'center' }}>
              <a
                href={`${reel.instagramUrl}?utm_source=ig_embed&utm_campaign=loading`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#C9A45C', textDecoration: 'none', fontFamily: 'monospace', fontSize: '12px' }}
              >
                View on Instagram
              </a>
            </div>
          </blockquote>
        </div>

        {/* VIEW B: Verified Editorial Fallback Poster (Always visible until iframe is ready or if poster selected) */}
        {(!isRendered || activeTab === 'poster') && (
          <div
            onClick={() => {
              playClickSound?.();
              window.open(reel.instagramUrl, '_blank', 'noopener,noreferrer');
            }}
            className="absolute inset-0 w-full h-full flex flex-col justify-between p-4 cursor-pointer group/poster z-10"
          >
            {/* Poster Background Image */}
            <img
              src={reel.thumbnailUrl}
              alt={reel.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/poster:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/60 pointer-events-none" />

            {/* Poster Top Overlay */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-full bg-black/80 text-[#C9A45C] text-[10px] font-mono font-bold border border-[#C9A45C]/40 backdrop-blur-md">
                VIRAL REEL {reel.reelNumber}
              </span>
              <span className="px-2.5 py-1 rounded-full bg-[#17151B]/80 text-[#F6F1E9] text-[10px] font-mono font-bold border border-white/20 backdrop-blur-md">
                {reel.displayViews}
              </span>
            </div>

            {/* Center Play Button Overlay */}
            <div className="relative z-10 flex flex-col items-center justify-center my-auto">
              <div className="w-16 h-16 rounded-full bg-[#C9A45C] text-[#17151B] flex items-center justify-center shadow-[0_0_35px_rgba(201,164,92,0.5)] group-hover/poster:scale-110 transition-transform">
                <Play className="w-7 h-7 fill-current translate-x-0.5" />
              </div>
              <p className="mt-3 font-mono text-[11px] tracking-wider text-[#F6F1E9] uppercase px-3 py-1 rounded-full bg-black/80 border border-white/10 backdrop-blur-xs font-semibold">
                TAP TO OPEN REEL
              </p>
            </div>

            {/* Poster Bottom Meta & CTA */}
            <div className="relative z-10 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-[#DCCCF5]">
                <span className="flex items-center gap-1.5">
                  <Instagram className="w-3.5 h-3.5 text-[#C9A45C]" />
                  <span>@pavanarts07</span>
                </span>
                <span className="text-[#C9A45C] font-bold">{reel.displayViews}</span>
              </div>
              <div className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#C9A45C] to-[#E2C485] text-[#17151B] text-center text-xs font-mono font-bold tracking-wider group-hover/poster:brightness-110 transition-all flex items-center justify-center gap-1.5 shadow-lg">
                <span>WATCH ON INSTAGRAM</span>
                <ExternalLink className="w-3 h-3 text-[#17151B]" />
              </div>
            </div>
          </div>
        )}

        {/* Hidden blockquote mounted in background for Instagram embed.js to process */}
        {!isRendered && (
          <div className="absolute inset-0 opacity-0 pointer-events-none overflow-hidden -z-10">
            <blockquote
              className="instagram-media"
              data-instgrm-captioned
              data-instgrm-permalink={`${reel.instagramUrl}?utm_source=ig_embed&utm_campaign=loading`}
              data-instgrm-version="14"
            />
          </div>
        )}

        {/* View Toggle Bar (visible once iframe is rendered) */}
        {isRendered && (
          <div className="absolute top-3 right-3 z-30 flex items-center gap-1 bg-[#17151B]/90 p-1 rounded-full border border-white/15 backdrop-blur-md">
            <button
              onClick={() => {
                playClickSound?.();
                setActiveTab('embed');
              }}
              className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono transition-all ${
                activeTab === 'embed'
                  ? 'bg-[#C9A45C] text-[#17151B] font-bold'
                  : 'text-[#DCCCF5] hover:text-white'
              }`}
            >
              EMBED
            </button>
            <button
              onClick={() => {
                playClickSound?.();
                setActiveTab('poster');
              }}
              className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono transition-all ${
                activeTab === 'poster'
                  ? 'bg-[#C9A45C] text-[#17151B] font-bold'
                  : 'text-[#DCCCF5] hover:text-white'
              }`}
            >
              POSTER
            </button>
          </div>
        )}
      </div>

      {/* Card Footer: Official Watch on Instagram Button */}
      <div className="pt-4 mt-4 border-t border-white/10">
        <a
          href={reel.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => playClickSound?.()}
          className="w-full py-3 px-4 rounded-xl text-xs font-mono tracking-wider font-bold bg-white/10 hover:bg-[#C9A45C] text-[#F6F1E9] hover:text-[#17151B] border border-white/10 hover:border-[#C9A45C] transition-all flex items-center justify-center gap-2 group/btn shadow-md"
        >
          <Instagram className="w-4 h-4 text-[#C9A45C] group-hover/btn:text-[#17151B] transition-colors" />
          <span>WATCH ON INSTAGRAM ({reel.displayViews})</span>
          <ExternalLink className="w-3.5 h-3.5 text-[#C9A45C] group-hover/btn:text-[#17151B] transition-colors" />
        </a>
      </div>
    </motion.div>
  );
};
