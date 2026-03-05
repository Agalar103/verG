import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

export const MagnetLines = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const rows = 15;
  const cols = 25;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[400px] bg-black/20 overflow-hidden grid gap-4 p-8"
      style={{ 
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`
      }}
    >
      {Array.from({ length: rows * cols }).map((_, i) => {
        const x = (i % cols) * (100 / cols);
        const y = Math.floor(i / cols) * (100 / rows);
        
        return (
          <LineItem key={i} mousePos={mousePos} index={i} cols={cols} rows={rows} />
        );
      })}
    </div>
  );
};

const LineItem = ({ mousePos, index, cols, rows }: { mousePos: { x: number, y: number }, index: number, cols: number, rows: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const angle = Math.atan2(mousePos.y - (centerY - ref.current.parentElement!.getBoundingClientRect().top), mousePos.x - (centerX - ref.current.parentElement!.getBoundingClientRect().left));
      setRotation(angle * (180 / Math.PI));
    }
  }, [mousePos]);

  return (
    <div ref={ref} className="flex items-center justify-center">
      <motion.div
        animate={{ rotate: rotation }}
        className="w-full h-[2px] bg-zinc-800 rounded-full"
        style={{ originX: 0.5, originY: 0.5 }}
      />
    </div>
  );
};
