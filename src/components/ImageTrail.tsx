import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const IMAGES = [
  "https://picsum.photos/seed/cyber1/300/400",
  "https://picsum.photos/seed/cyber2/300/400",
  "https://picsum.photos/seed/cyber3/300/400",
  "https://picsum.photos/seed/cyber4/300/400",
  "https://picsum.photos/seed/cyber5/300/400",
];

export const ImageTrail: React.FC = () => {
  const [items, setItems] = useState<{ x: number; y: number; id: number; url: string }[]>([]);
  const lastPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const dist = Math.hypot(e.clientX - lastPos.current.x, e.clientY - lastPos.current.y);
      
      if (dist > 50) {
        const id = Date.now();
        const url = IMAGES[Math.floor(Math.random() * IMAGES.length)];
        setItems((prev) => [...prev, { x: e.clientX, y: e.clientY, id, url }].slice(-12));
        lastPos.current = { x: e.clientX, y: e.clientY };
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9997] overflow-hidden">
      <AnimatePresence mode="popLayout">
        {items.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 0.6, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 1.2, rotate: 10 }}
            transition={{ duration: 0.5 }}
            className="absolute w-48 h-64 border-2 border-punk-pink/50 rounded-lg overflow-hidden shadow-2xl"
            style={{ 
              left: item.x, 
              top: item.y,
              transform: 'translate(-50%, -50%)',
              boxShadow: '0 0 30px rgba(255, 0, 60, 0.3)'
            }}
          >
            <img 
              src={item.url} 
              alt="Trail" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-punk-pink/10 mix-blend-overlay" />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
