import React from 'react';
import { motion } from 'motion/react';

interface OrbitImagesProps {
  images: string[];
  centerImage?: string;
  radius?: number;
  duration?: number;
}

export const OrbitImages: React.FC<OrbitImagesProps> = ({ 
  images, 
  centerImage = "https://picsum.photos/seed/center/200/200",
  radius = 150,
  duration = 20
}) => {
  return (
    <div className="relative w-[400px] h-[400px] flex items-center justify-center">
      {/* Center Image */}
      <div className="relative z-10 w-24 h-24 rounded-full border-4 border-punk-pink overflow-hidden shadow-[0_0_30px_rgba(255,0,255,0.3)]">
        <img src={centerImage} alt="Center" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      </div>

      {/* Orbiting Images */}
      {images.map((src, index) => {
        const angle = (index / images.length) * (Math.PI * 2);
        return (
          <motion.div
            key={index}
            className="absolute w-16 h-16 rounded-xl border-2 border-punk-blue overflow-hidden bg-black"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              originX: "50%",
              originY: "50%",
              x: Math.cos(angle) * radius,
              y: Math.sin(angle) * radius,
            }}
          >
            <motion.img 
              src={src} 
              alt={`Orbit ${index}`} 
              className="w-full h-full object-cover"
              animate={{
                rotate: [0, -360],
              }}
              transition={{
                duration,
                repeat: Infinity,
                ease: "linear",
              }}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        );
      })}

      {/* Orbit Path */}
      <div 
        className="absolute border border-white/5 rounded-full pointer-events-none"
        style={{ width: radius * 2, height: radius * 2 }}
      />
    </div>
  );
};
