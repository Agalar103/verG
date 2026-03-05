import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

interface GlareHoverProps {
  children: React.ReactNode;
  className?: string;
}

export const GlareHover: React.FC<GlareHoverProps> = ({ children, className = "" }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative group cursor-pointer ${className}`}
    >
      <div className="relative z-10 h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl">
        {children}
        
        {/* Glare Effect */}
        <motion.div
          style={{
            background: `radial-gradient(circle at var(--glare-x) var(--glare-y), rgba(255,255,255,0.15) 0%, transparent 60%)`,
            "--glare-x": glareX,
            "--glare-y": glareY,
          } as any}
          className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>
    </motion.div>
  );
};
