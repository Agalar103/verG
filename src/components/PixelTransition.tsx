import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PixelTransitionProps {
  firstContent: React.ReactNode;
  secondContent: React.ReactNode;
  gridSize?: number;
}

export const PixelTransition: React.FC<PixelTransitionProps> = ({ 
  firstContent, 
  secondContent,
  gridSize = 10 
}) => {
  const [isFirst, setIsFirst] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggle = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsFirst(!isFirst);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const pixels = Array.from({ length: gridSize * gridSize });

  return (
    <div 
      className="relative w-full h-full cursor-pointer overflow-hidden rounded-2xl border border-white/10"
      onClick={toggle}
    >
      <div className="absolute inset-0">
        {isFirst ? firstContent : secondContent}
      </div>

      <AnimatePresence>
        {isAnimating && (
          <div 
            className="absolute inset-0 z-50 grid pointer-events-none"
            style={{ 
              gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
              gridTemplateRows: `repeat(${gridSize}, 1fr)`
            }}
          >
            {pixels.map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 1, 0],
                  scale: [0, 1.1, 0],
                }}
                transition={{
                  duration: 0.6,
                  delay: Math.random() * 0.3,
                  ease: "easeInOut"
                }}
                className="bg-punk-pink"
              />
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
