import React from 'react';
import { motion } from 'motion/react';

interface StarBorderProps {
  children: React.ReactNode;
  className?: string;
}

export const StarBorder: React.FC<StarBorderProps> = ({ children, className = "" }) => {
  return (
    <div className={`relative p-[2px] overflow-hidden rounded-xl group ${className}`}>
      {/* Animated Border Background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0%,#ff003c_25%,transparent_50%,#00f0ff_75%,transparent_100%)]"
        />
      </div>

      {/* Inner Content */}
      <div className="relative z-10 bg-zinc-900 rounded-[10px] p-6 h-full w-full flex flex-col justify-center">
        {children}
        
        {/* Corner Accents */}
        <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-punk-pink opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-punk-pink opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-punk-pink opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-punk-pink opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      
      {/* Scanning Line Effect */}
      <motion.div
        animate={{
          top: ['-10%', '110%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-0 right-0 h-[1px] bg-white/20 z-20 pointer-events-none"
      />
    </div>
  );
};
