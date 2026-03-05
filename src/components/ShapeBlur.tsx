import React from 'react';
import { motion } from 'motion/react';

export const ShapeBlur: React.FC = () => {
  return (
    <div className="relative w-full h-[500px] bg-black overflow-hidden flex items-center justify-center rounded-3xl">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Animated Shapes */}
        <motion.div
          className="w-64 h-64 bg-punk-pink/40 rounded-full blur-[60px]"
          animate={{
            x: [-100, 100, -100],
            y: [-50, 50, -50],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="w-80 h-80 bg-punk-blue/40 rounded-full blur-[80px]"
          animate={{
            x: [100, -100, 100],
            y: [50, -50, 50],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="w-72 h-72 bg-punk-green/40 rounded-full blur-[70px]"
          animate={{
            x: [0, 150, -150, 0],
            y: [100, -100, 100],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 text-center">
        <h3 className="text-6xl font-black text-white tracking-tighter mix-blend-difference">
          SHAPE_BLUR_PROTOCOL
        </h3>
        <p className="text-zinc-400 font-mono mt-4 tracking-[0.3em]">
          ATMOSPHERIC_INTERFERENCE_DETECTED
        </p>
      </div>

      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 backdrop-blur-[2px] pointer-events-none" />
    </div>
  );
};
