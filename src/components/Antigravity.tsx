import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'motion/react';

interface AntigravityProps {
  children: React.ReactNode;
  amplitude?: number;
  duration?: number;
}

export const Antigravity: React.FC<AntigravityProps> = ({ 
  children, 
  amplitude = 20, 
  duration = 3 
}) => {
  return (
    <motion.div
      animate={{
        y: [0, -amplitude, 0],
        rotate: [0, 2, -2, 0],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
};
