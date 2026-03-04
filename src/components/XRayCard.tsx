import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

interface XRayCardProps {
  topImage: string;
  bottomImage: string;
  width?: number;
  height?: number;
  maskSize?: number;
}

export const XRayCard = ({ 
  topImage, 
  bottomImage, 
  width = 600, 
  height = 400,
  maskSize = 150 
}: XRayCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative overflow-hidden cursor-none border-2 border-white/10 rounded-2xl bg-black"
      style={{ width, height }}
    >
      {/* Bottom Image (The "X-Ray" result) */}
      <img 
        src={bottomImage} 
        alt="Bottom" 
        className="absolute inset-0 w-full h-full object-cover grayscale-0"
        referrerPolicy="no-referrer"
      />

      {/* Top Image (The "Surface") */}
      <motion.div 
        className="absolute inset-0 w-full h-full z-10 pointer-events-none"
        style={{
          backgroundImage: `url(${topImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          WebkitMaskImage: `radial-gradient(circle ${maskSize}px at var(--x) var(--y), transparent 100%, black 100%)`,
          maskImage: `radial-gradient(circle ${maskSize}px at var(--x) var(--y), transparent 100%, black 100%)`,
        } as any}
        animate={{
          opacity: 1
        }}
      >
        <img 
          src={topImage} 
          alt="Top" 
          className="w-full h-full object-cover grayscale"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* The Mask Overlay (CSS Variables for the mask) */}
      <motion.div 
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          '--x': smoothX,
          '--y': smoothY,
          WebkitMaskImage: `radial-gradient(circle ${maskSize}px at var(--x) var(--y), black 100%, transparent 100%)`,
          maskImage: `radial-gradient(circle ${maskSize}px at var(--x) var(--y), black 100%, transparent 100%)`,
        } as any}
      >
        <img 
          src={bottomImage} 
          alt="X-Ray Reveal" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Custom Cursor */}
      <motion.div
        className="absolute top-0 left-0 w-4 h-4 border-2 border-punk-pink rounded-full z-30 pointer-events-none mix-blend-difference"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          scale: isHovered ? 8 : 0,
          opacity: isHovered ? 1 : 0,
        }}
      />
      
      {/* Scanline Effect in the X-Ray area */}
      <motion.div
        className="absolute inset-0 z-25 pointer-events-none overflow-hidden"
        style={{
          '--x': smoothX,
          '--y': smoothY,
          WebkitMaskImage: `radial-gradient(circle ${maskSize}px at var(--x) var(--y), black 100%, transparent 100%)`,
          maskImage: `radial-gradient(circle ${maskSize}px at var(--x) var(--y), black 100%, transparent 100%)`,
        } as any}
      >
        <div className="w-full h-full bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none opacity-50" />
      </motion.div>

      <div className="absolute bottom-4 left-4 z-40 bg-black/80 backdrop-blur-md border border-white/10 px-3 py-1 rounded text-[10px] font-black text-white tracking-widest uppercase">
        X-RAY SCANNER v1.0
      </div>
    </div>
  );
};
