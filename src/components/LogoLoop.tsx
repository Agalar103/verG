import React from 'react';
import { motion } from 'motion/react';

interface LogoLoopProps {
  logos: React.ReactNode[];
  duration?: number;
}

export const LogoLoop: React.FC<LogoLoopProps> = ({ logos, duration = 20 }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap py-10 relative">
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#050505] to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#050505] to-transparent z-10"></div>
      
      <motion.div
        animate={{ x: [0, '-50%'] }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear"
        }}
        className="inline-flex gap-12 items-center"
      >
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
            {logo}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
