import React from 'react';
import { motion } from 'motion/react';

export const Cubes: React.FC = () => {
  const cubes = Array.from({ length: 12 });

  return (
    <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden bg-black/20 rounded-3xl border border-white/5">
      <div className="grid grid-cols-4 gap-8 p-12">
        {cubes.map((_, i) => (
          <motion.div
            key={i}
            className="w-16 h-16 relative preserve-3d"
            animate={{
              rotateX: [0, 360],
              rotateY: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.2
            }}
          >
            {/* Cube Faces */}
            {[
              "translateZ(32px)",
              "translateZ(-32px) rotateY(180deg)",
              "translateX(32px) rotateY(90deg)",
              "translateX(-32px) rotateY(-90deg)",
              "translateY(32px) rotateX(-90deg)",
              "translateY(-32px) rotateX(90deg)"
            ].map((transform, j) => (
              <div
                key={j}
                className="absolute inset-0 border border-punk-pink/50 bg-punk-pink/10 backdrop-blur-sm"
                style={{ transform }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-1 h-1 bg-punk-pink rounded-full shadow-[0_0_5px_#ff003c]" />
                </div>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
      
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>
    </div>
  );
};
