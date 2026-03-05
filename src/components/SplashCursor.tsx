import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
}

export const SplashCursor: React.FC = () => {
  const [splashes, setSplashes] = useState<{ id: number; x: number; y: number; particles: Particle[] }[]>([]);

  const colors = ['#ff003c', '#00ff00', '#00f0ff', '#f0ff00', '#ffffff'];

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const id = Date.now();
      const particles: Particle[] = [];
      
      for (let i = 0; i < 15; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 8 + 4;
        particles.push({
          id: i,
          x: 0,
          y: 0,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * 6 + 2
        });
      }

      setSplashes((prev) => [...prev, { id, x: e.clientX, y: e.clientY, particles }]);
      
      setTimeout(() => {
        setSplashes((prev) => prev.filter(s => s.id !== id));
      }, 1000);
    };

    window.addEventListener('mousedown', handleClick);
    return () => window.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <AnimatePresence>
        {splashes.map((splash) => (
          <div key={splash.id} className="absolute" style={{ left: splash.x, top: splash.y, transform: 'translate(-50%, -50%)' }}>
            {splash.particles.map((p) => (
              <motion.div
                key={p.id}
                initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                animate={{ 
                  x: p.vx * 20, 
                  y: p.vy * 20, 
                  opacity: 0, 
                  scale: 0,
                  rotate: 360
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute rounded-sm"
                style={{ 
                  width: p.size, 
                  height: p.size, 
                  backgroundColor: p.color,
                  boxShadow: `0 0 10px ${p.color}`
                }}
              />
            ))}
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
};
