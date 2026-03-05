import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const GhostCursor = () => {
  const [ghosts, setGhosts] = useState<{ x: number; y: number; id: number }[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      const id = Date.now();
      setGhosts((prev) => [...prev, { x: e.clientX, y: e.clientY, id }].slice(-10));
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9998]">
      <AnimatePresence>
        {ghosts.map((ghost, index) => (
          <motion.div
            key={ghost.id}
            initial={{ opacity: 0.5, scale: 1 }}
            animate={{ opacity: 0, scale: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute w-4 h-4 bg-punk-pink/30 rounded-full blur-sm"
            style={{ left: ghost.x, top: ghost.y, transform: 'translate(-50%, -50%)' }}
          />
        ))}
      </AnimatePresence>
      <div 
        className="absolute w-4 h-4 bg-punk-pink rounded-full"
        style={{ left: mousePos.x, top: mousePos.y, transform: 'translate(-50%, -50%)' }}
      />
    </div>
  );
};
