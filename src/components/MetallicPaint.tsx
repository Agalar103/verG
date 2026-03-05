import React from 'react';
import { motion } from 'motion/react';

interface MetallicPaintProps {
  text: string;
  className?: string;
  fontSize?: string;
  glowColor?: string;
}

export const MetallicPaint: React.FC<MetallicPaintProps> = ({ 
  text, 
  className = "", 
  fontSize = "text-8xl",
  glowColor = "#ff003c"
}) => {
  return (
    <div className={`relative inline-block ${className}`}>
      {/* Background Glow */}
      <div 
        className="absolute inset-0 blur-2xl opacity-20 pointer-events-none"
        style={{ backgroundColor: glowColor }}
      />
      
      {/* Main Metallic Text */}
      <motion.h2 
        className={`${fontSize} font-black tracking-tighter uppercase relative z-10`}
        style={{
          background: 'linear-gradient(180deg, #888 0%, #fff 45%, #fff 55%, #444 100%)',
          backgroundSize: '100% 200%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.5))',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '0% 100%', '0% 0%']
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {text}
      </motion.h2>
      
      {/* Reflection / Sheen Overlay */}
      <motion.div
        className="absolute inset-0 z-20 pointer-events-none mix-blend-soft-light"
        animate={{
          x: ['-100%', '100%'],
          opacity: [0, 1, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 1
        }}
      >
        <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg]" />
      </motion.div>

      {/* Bottom Accent Line */}
      <motion.div 
        className="absolute -bottom-2 left-0 w-full h-[2px] shadow-[0_0_15px_rgba(255,0,60,0.8)]"
        style={{ backgroundColor: glowColor }}
        animate={{
          opacity: [0.4, 1, 0.4],
          scaleX: [0.95, 1.05, 0.95]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};
