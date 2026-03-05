import React from 'react';
import { motion } from 'motion/react';

export const MetaBalls: React.FC = () => {
  return (
    <div className="relative w-full h-[400px] bg-black overflow-hidden flex items-center justify-center rounded-3xl border border-white/5">
      {/* SVG Filter for Gooey Effect */}
      <svg className="hidden">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
            <feColorMatrix 
              in="blur" 
              mode="matrix" 
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 30 -15" 
              result="goo" 
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <div className="relative w-full h-full" style={{ filter: 'url(#goo)' }}>
        {/* Central Ball */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-punk-pink rounded-full shadow-[0_0_50px_#ff003c]"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Orbiting Balls */}
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 w-16 h-16 bg-punk-pink rounded-full"
            animate={{
              x: [
                Math.cos(i * Math.PI / 2) * 100,
                Math.cos(i * Math.PI / 2 + Math.PI) * 100,
                Math.cos(i * Math.PI / 2) * 100
              ],
              y: [
                Math.sin(i * Math.PI / 2) * 100,
                Math.sin(i * Math.PI / 2 + Math.PI) * 100,
                Math.sin(i * Math.PI / 2) * 100
              ],
              scale: [1, 1.5, 1]
            }}
            transition={{ 
              duration: 6 + i, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            style={{ marginLeft: -32, marginTop: -32 }}
          />
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h4 className="text-4xl font-black text-white/20 tracking-[0.5em] uppercase">
          META_BALL_FLUID
        </h4>
      </div>
    </div>
  );
};
