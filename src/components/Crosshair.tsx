import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const Crosshair: React.FC = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {/* Horizontal Line */}
      <motion.div 
        className="absolute left-0 right-0 h-[1px] bg-punk-pink/30"
        animate={{ top: mouse.y }}
        transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
      />
      {/* Vertical Line */}
      <motion.div 
        className="absolute top-0 bottom-0 w-[1px] bg-punk-pink/30"
        animate={{ left: mouse.x }}
        transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
      />
      
      {/* Center Reticle */}
      <motion.div
        className="absolute w-8 h-8 border border-punk-pink flex items-center justify-center"
        animate={{ left: mouse.x, top: mouse.y }}
        style={{ transform: 'translate(-50%, -50%)' }}
        transition={{ type: "spring", damping: 20, stiffness: 150, mass: 0.5 }}
      >
        <div className="w-1 h-1 bg-punk-pink rounded-full" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-2 bg-punk-pink" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-2 bg-punk-pink" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-[1px] bg-punk-pink" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-[1px] bg-punk-pink" />
      </motion.div>

      {/* Coordinates Display */}
      <motion.div
        className="absolute text-[10px] font-mono text-punk-pink bg-black/80 px-2 py-1 border border-punk-pink/30"
        animate={{ left: mouse.x + 20, top: mouse.y + 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 150 }}
      >
        X: {Math.round(mouse.x)} Y: {Math.round(mouse.y)}
      </motion.div>
    </div>
  );
};
