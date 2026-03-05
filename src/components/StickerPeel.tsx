import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

interface StickerPeelProps {
  children: React.ReactNode;
  stickerImage?: string;
  className?: string;
}

export const StickerPeel: React.FC<StickerPeelProps> = ({ 
  children, 
  stickerImage = "https://picsum.photos/seed/sticker/400/400",
  className = "" 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150 };
  const rotateX = useSpring(useTransform(y, [-100, 100], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(x, [-100, 100], [-15, 15]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  return (
    <div 
      className={`relative group perspective-1000 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
      }}
    >
      <motion.div
        style={{ rotateX, rotateY }}
        className="relative w-full h-full transition-transform duration-500 ease-out"
      >
        {/* The "Sticker" that peels */}
        <motion.div 
          className="absolute inset-0 z-20 overflow-hidden rounded-2xl border-2 border-punk-pink/20 bg-zinc-900 shadow-2xl"
          animate={{
            clipPath: isHovered 
              ? 'polygon(0 0, 100% 0, 100% 0, 0 0)' 
              : 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
          }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <img 
            src={stickerImage} 
            alt="Sticker" 
            className="w-full h-full object-cover opacity-80"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-punk-pink/20 to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-4">
            <span className="text-[10px] font-black tracking-[0.3em] text-punk-pink bg-black/80 px-2 py-1 border border-punk-pink/50">
              PEEL_TO_REVEAL
            </span>
          </div>
        </motion.div>

        {/* The Content underneath */}
        <div className="relative z-10 w-full h-full bg-black rounded-2xl border-2 border-punk-green/30 flex items-center justify-center p-8">
          {children}
        </div>

        {/* The "Peel" effect shadow/highlight */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-white/10 z-30 pointer-events-none origin-top-left"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: isHovered ? 1 : 0 }}
          style={{ skewY: -5 }}
          transition={{ duration: 0.8 }}
        />
      </motion.div>
    </div>
  );
};
