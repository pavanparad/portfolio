import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundElements: React.FC = () => {
  // Static array of gentle floating particles
  const particles = [
    { id: 1, x: '8%', y: '15%', size: 4, delay: 0, duration: 9 },
    { id: 2, x: '88%', y: '22%', size: 6, delay: 1.5, duration: 11 },
    { id: 3, x: '18%', y: '45%', size: 3, delay: 2, duration: 8 },
    { id: 4, x: '78%', y: '65%', size: 5, delay: 0.8, duration: 12 },
    { id: 5, x: '35%', y: '82%', size: 4, delay: 2.5, duration: 10 },
    { id: 6, x: '62%', y: '38%', size: 3, delay: 3, duration: 9.5 },
    { id: 7, x: '92%', y: '88%', size: 5, delay: 1.2, duration: 13 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none">
      {/* 1. Base Subtle Geometric Grid Overlay */}
      <div className="absolute inset-0 bg-grid-subtle opacity-70" />

      {/* 2. Soft Gradient Light Blobs */}
      <div className="absolute -top-[20%] -left-[10%] w-[55vw] h-[55vw] rounded-full purple-glow filter blur-3xl opacity-60 animate-float-slow" />
      <div className="absolute top-[40%] -right-[15%] w-[50vw] h-[50vw] rounded-full purple-glow-strong filter blur-3xl opacity-40 animate-float-reverse" />
      <div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] rounded-full purple-glow filter blur-3xl opacity-50" />

      {/* 3. Subtle Grain Texture Overlay */}
      <div className="absolute inset-0 grain-overlay pointer-events-none" />

      {/* 4. Fine Floating Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-[#A88BEA]/50 backdrop-blur-xs"
          style={{
            left: p.x,
            top: p.y,
            width: `${p.size}px`,
            height: `${p.size}px`,
          }}
          animate={{
            y: ['0px', '-24px', '0px'],
            opacity: [0.3, 0.75, 0.3],
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* 5. Minimal Editorial Coordinate Marks in corners */}
      <div className="hidden lg:block absolute top-8 left-8 text-[10px] font-mono tracking-widest text-[#77717F]/40">
        [+] 18°31'49"N 73°51'18"E • PUNE
      </div>
      <div className="hidden lg:block absolute top-8 right-8 text-[10px] font-mono tracking-widest text-[#77717F]/40">
        MR. PAVAN CREATION • 2026
      </div>
    </div>
  );
};
