import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface DashedBoundingBoxProps {
  children: ReactNode;
  dimensions?: string;
  className?: string;
  active?: boolean;
  label?: string;
}

export const DashedBoundingBox: React.FC<DashedBoundingBoxProps> = ({
  children,
  dimensions = 'W: AUTO • H: AUTO',
  className = '',
  active = true,
  label,
}) => {
  return (
    <div className={`relative group ${className}`}>
      {/* Outer bounding dashed border */}
      <div
        className={`absolute -inset-2.5 sm:-inset-3 border border-dashed transition-colors duration-300 pointer-events-none rounded-[3px] ${
          active
            ? 'border-[#A88BEA]/70 group-hover:border-[#6C41CE]'
            : 'border-transparent'
        }`}
      >
        {/* 4 Corner Handles (Photoshop / Figma Selection Handles) */}
        <span className="absolute -top-[4px] -left-[4px] w-[7px] h-[7px] bg-white border border-[#6C41CE] shadow-sm pointer-events-none" />
        <span className="absolute -top-[4px] -right-[4px] w-[7px] h-[7px] bg-white border border-[#6C41CE] shadow-sm pointer-events-none" />
        <span className="absolute -bottom-[4px] -left-[4px] w-[7px] h-[7px] bg-white border border-[#6C41CE] shadow-sm pointer-events-none" />
        <span className="absolute -bottom-[4px] -right-[4px] w-[7px] h-[7px] bg-white border border-[#6C41CE] shadow-sm pointer-events-none" />

        {/* 4 Midpoint Edge Handles */}
        <span className="hidden sm:block absolute top-1/2 -left-[3.5px] -translate-y-1/2 w-[6px] h-[6px] bg-[#DCCBFA] border border-[#6C41CE]" />
        <span className="hidden sm:block absolute top-1/2 -right-[3.5px] -translate-y-1/2 w-[6px] h-[6px] bg-[#DCCBFA] border border-[#6C41CE]" />
        <span className="hidden sm:block absolute -top-[3.5px] left-1/2 -translate-x-1/2 w-[6px] h-[6px] bg-[#DCCBFA] border border-[#6C41CE]" />
        <span className="hidden sm:block absolute -bottom-[3.5px] left-1/2 -translate-x-1/2 w-[6px] h-[6px] bg-[#DCCBFA] border border-[#6C41CE]" />

        {/* Optional Dimensions Badge at Top or Bottom */}
        {dimensions && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute -top-7 right-0 text-[10px] font-mono tracking-wider px-2 py-0.5 rounded bg-[#17151D] text-[#EAE0FF] border border-[#A88BEA]/40 shadow-sm pointer-events-none select-none flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#A88BEA] animate-pulse" />
            {dimensions}
          </motion.div>
        )}

        {label && (
          <div className="absolute -bottom-6 left-0 text-[10px] font-mono tracking-wider px-2 py-0.5 rounded bg-white text-[#6C41CE] border border-[#DCCBFA] shadow-xs pointer-events-none select-none uppercase font-semibold">
            {label}
          </div>
        )}
      </div>

      {children}
    </div>
  );
};
