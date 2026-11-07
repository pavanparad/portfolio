import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for trailing follower
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Disable on touch devices or small screens
    const checkTouch = () => {
      if ('ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 1024) {
        setIsTouchDevice(true);
      } else {
        setIsTouchDevice(false);
      }
    };
    checkTouch();
    window.addEventListener('resize', checkTouch);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('button, a, input, textarea, select, [data-cursor]');
      if (interactive) {
        setIsHovered(true);
        const customText = interactive.getAttribute('data-cursor');
        if (customText) {
          setCursorText(customText);
        } else {
          setCursorText('');
        }
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleElementHover);

    return () => {
      window.removeEventListener('resize', checkTouch);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleElementHover);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300">
      {/* Precision Center Pixel Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-[#17151D] rounded-none pointer-events-none"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Trailing Dashed Reticle / Frame Follower */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none flex items-center justify-center"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            width: isHovered ? (cursorText ? 88 : 52) : 34,
            height: isHovered ? (cursorText ? 40 : 52) : 34,
            borderRadius: isHovered ? (cursorText ? 6 : 9999) : 4,
            borderColor: isHovered ? '#6C41CE' : '#A88BEA',
            backgroundColor: isHovered ? 'rgba(220, 203, 250, 0.28)' : 'rgba(220, 203, 250, 0.08)',
          }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="border-[1.5px] border-dashed flex items-center justify-center relative backdrop-blur-[2px]"
        >
          {/* Corner pixel handles */}
          <span className="absolute -top-[2px] -left-[2px] w-[3px] h-[3px] bg-[#6C41CE]" />
          <span className="absolute -top-[2px] -right-[2px] w-[3px] h-[3px] bg-[#6C41CE]" />
          <span className="absolute -bottom-[2px] -left-[2px] w-[3px] h-[3px] bg-[#6C41CE]" />
          <span className="absolute -bottom-[2px] -right-[2px] w-[3px] h-[3px] bg-[#6C41CE]" />

          {cursorText && (
            <span className="text-[10px] font-mono tracking-wider font-semibold text-[#17151D] uppercase">
              {cursorText}
            </span>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};
