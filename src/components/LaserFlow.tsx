import React from 'react';
import { motion } from 'motion/react';

interface LaserFlowProps {
  color?: string;
  duration?: number;
}

export const LaserFlow: React.FC<LaserFlowProps> = ({ 
  color = '#FF2E63', 
  duration = 2 
}) => {
  return (
    <div className="relative w-full h-[1px] bg-white/5 overflow-hidden">
      <motion.div
        animate={{ x: ['-100%', '100%'] }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-y-0 w-1/3"
        style={{
          background: `linear-gradient(to right, transparent, ${color}, transparent)`,
          boxShadow: `0 0 15px ${color}`
        }}
      />
    </div>
  );
};
