import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export const BlobCursor: React.FC = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setMouse({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      setIsHovering(
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') !== null ||
        target.closest('a') !== null
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
      style={{ x, y, translateX: '-50%', translateY: '-50%' }}
    >
      <motion.div
        animate={{
          width: isHovering ? 80 : 40,
          height: isHovering ? 80 : 40,
          borderRadius: isHovering ? ['40%', '50%', '30%', '40%'] : ['50%', '40%', '60%', '50%'],
          rotate: isHovering ? 90 : 0
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="bg-white flex items-center justify-center overflow-hidden"
      >
        {isHovering && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-black text-[10px] font-black uppercase tracking-tighter"
          >
            VIEW
          </motion.div>
        )}
      </motion.div>
      
      {/* Outer Ring */}
      <motion.div
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.5 : 0.2
        }}
        className="absolute inset-0 border-2 border-white rounded-full -m-2"
      />
    </motion.div>
  );
};
