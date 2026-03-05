import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const ClickSpark = () => {
  const [sparks, setSparks] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const id = Date.now();
      setSparks((prev) => [...prev, { x: e.clientX, y: e.clientY, id }]);
      setTimeout(() => {
        setSparks((prev) => prev.filter((s) => s.id !== id));
      }, 1000);
    };
    window.addEventListener('mousedown', handleClick);
    return () => window.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[10000]">
      <AnimatePresence>
        {sparks.map((spark) => (
          <SparkItem key={spark.id} x={spark.x} y={spark.y} />
        ))}
      </AnimatePresence>
    </div>
  );
};

const SparkItem = ({ x, y }: { x: number; y: number }) => {
  const particles = Array.from({ length: 8 });
  
  return (
    <div className="absolute" style={{ left: x, top: y }}>
      {particles.map((_, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, x: 0, y: 0 }}
          animate={{ 
            scale: [0, 1, 0],
            x: Math.cos(i * 45 * (Math.PI / 180)) * 50,
            y: Math.sin(i * 45 * (Math.PI / 180)) * 50
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute w-1 h-1 bg-punk-pink rounded-full shadow-[0_0_10px_#FF2E63]"
        />
      ))}
    </div>
  );
};
