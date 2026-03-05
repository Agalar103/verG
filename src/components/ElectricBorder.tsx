import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface ElectricBorderProps {
  children: React.ReactNode;
  className?: string;
  borderColor?: string;
  duration?: number;
}

export const ElectricBorder: React.FC<ElectricBorderProps> = ({ 
  children, 
  className = "", 
  borderColor = "#00ffff",
  duration = 3
}) => {
  return (
    <div className={`relative p-[2px] overflow-hidden rounded-xl group ${className}`}>
      <motion.div
        className="absolute inset-[-100%] z-0"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          background: `conic-gradient(from 0deg, transparent 0%, ${borderColor} 25%, transparent 50%, ${borderColor} 75%, transparent 100%)`,
        }}
      />
      <div className="relative z-10 bg-[#050505] rounded-[10px] h-full w-full">
        {children}
      </div>
    </div>
  );
};
