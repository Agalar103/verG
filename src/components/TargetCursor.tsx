import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export const TargetCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  const springX = useSpring(0, { stiffness: 150, damping: 15 });
  const springY = useSpring(0, { stiffness: 150, damping: 15 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      springX.set(e.clientX);
      springY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [springX, springY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <motion.div
        style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
        className="absolute w-12 h-12 border border-punk-pink rounded-full flex items-center justify-center"
      >
        <div className="w-1 h-1 bg-punk-pink rounded-full"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-2 bg-punk-pink"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-2 bg-punk-pink"></div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-[1px] bg-punk-pink"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-[1px] bg-punk-pink"></div>
      </motion.div>
      
      <motion.div
        style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute w-20 h-20 border border-dashed border-punk-blue/30 rounded-full"
      />
    </div>
  );
};
