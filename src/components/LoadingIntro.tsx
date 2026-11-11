import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingIntroProps {
  onComplete: () => void;
}

export const LoadingIntro: React.FC<LoadingIntroProps> = ({ onComplete }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Auto-dismiss after 2.4s
    const timer = setTimeout(() => {
      handleDismiss();
    }, 2400);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleDismiss();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleDismiss = () => {
    setVisible(false);
    setTimeout(onComplete, 600); // allow exit animation to complete
  };

  // 12 gentle floating golden particles
  const goldParticles = [
    { x: '15%', y: '20%', size: 3, delay: 0 },
    { x: '82%', y: '25%', size: 4, delay: 0.3 },
    { x: '25%', y: '75%', size: 3, delay: 0.6 },
    { x: '78%', y: '70%', size: 5, delay: 0.2 },
    { x: '48%', y: '18%', size: 2, delay: 0.8 },
    { x: '65%', y: '40%', size: 3, delay: 0.4 },
    { x: '35%', y: '35%', size: 4, delay: 0.5 },
    { x: '88%', y: '85%', size: 3, delay: 0.7 },
  ];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[99999] bg-[#000000] flex flex-col items-center justify-center overflow-hidden select-none"
        >
          {/* Subtle Golden Particles Background */}
          {goldParticles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[#C9A45C]"
              style={{
                left: p.x,
                top: p.y,
                width: `${p.size}px`,
                height: `${p.size}px`,
              }}
              animate={{
                y: [0, -18, 0],
                opacity: [0.3, 0.85, 0.3],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: p.delay,
                ease: 'easeInOut',
              }}
            />
          ))}

          {/* Golden Ambient Radial Glow behind logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.75, 0.4] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute w-[360px] h-[360px] sm:w-[460px] sm:h-[460px] rounded-full filter blur-3xl pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(201, 164, 92, 0.45) 0%, rgba(168, 139, 234, 0.25) 45%, transparent 75%)',
            }}
          />

          {/* Central Logo Plaque Reveal */}
          <motion.div
            initial={{ scale: 0.82, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center"
          >
            {/* The Logo Container */}
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-[#000000] border-2 border-[#C9A45C]/60 p-2 shadow-[0_0_50px_rgba(201,164,92,0.35)] flex items-center justify-center overflow-hidden mb-6 group">
              <img
                src="./images/logo/logo.jpg"
                alt="MR. PAVAN CREATION Logo"
                className="w-full h-full object-contain scale-[1.3] filter drop-shadow-[0_4px_12px_rgba(201,164,92,0.5)]"
              />
              {/* Outer decorative ring */}
              <div className="absolute inset-0 rounded-full border border-[#DCCCF5]/20 pointer-events-none" />
            </div>

            {/* Brand Title Typography */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="text-center space-y-1.5"
            >
              <h1 className="font-display font-extrabold text-xl sm:text-2xl tracking-[0.25em] text-[#F6F1E9] uppercase">
                MR. PAVAN CREATION
              </h1>
              <p className="font-mono text-[10px] sm:text-xs tracking-[0.3em] text-[#C9A45C] uppercase">
                CRAFTING STORIES • CREATING IMPACT
              </p>
            </motion.div>
          </motion.div>

          {/* Discreet Skip Button (Top Right) */}
          <button
            onClick={handleDismiss}
            className="absolute top-6 right-6 z-20 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-[#C9A45C]/40 text-[#C9A45C] hover:text-[#F6F1E9] font-mono text-[11px] tracking-wider transition-colors cursor-pointer"
          >
            SKIP [ESC]
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
