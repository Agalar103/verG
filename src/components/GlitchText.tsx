import React from 'react';
import { motion } from 'motion/react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

export const GlitchText: React.FC<GlitchTextProps> = ({ text, className }) => {
  return (
    <div className={`relative inline-block font-black uppercase tracking-tighter ${className}`}>
      <span className="relative z-10">{text}</span>
      <motion.span
        className="absolute top-0 left-0 -z-10 text-punk-pink opacity-70"
        animate={{
          x: [0, -2, 2, -1, 0],
          y: [0, 1, -1, 0, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 0.2,
          ease: "linear",
        }}
      >
        {text}
      </motion.span>
      <motion.span
        className="absolute top-0 left-0 -z-20 text-punk-blue opacity-70"
        animate={{
          x: [0, 2, -2, 1, 0],
          y: [0, -1, 1, 0, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 0.25,
          ease: "linear",
        }}
      >
        {text}
      </motion.span>
    </div>
  );
};
