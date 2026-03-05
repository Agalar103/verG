import React from 'react';
import { motion } from 'motion/react';

interface AnimatedContentProps {
  children: React.ReactNode;
  distance?: number;
  direction?: 'vertical' | 'horizontal';
  reverse?: boolean;
  config?: any;
  className?: string;
  delay?: number;
}

export const AnimatedContent: React.FC<AnimatedContentProps> = ({
  children,
  distance = 40,
  direction = 'vertical',
  reverse = false,
  config = { tension: 120, friction: 14 },
  className = "",
  delay = 0
}) => {
  const x = direction === 'horizontal' ? (reverse ? -distance : distance) : 0;
  const y = direction === 'vertical' ? (reverse ? -distance : distance) : 0;

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        x, 
        y 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        type: "spring",
        ...config,
        delay
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
