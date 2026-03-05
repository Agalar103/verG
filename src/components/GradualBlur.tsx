import React from 'react';
import { motion } from 'motion/react';

interface GradualBlurProps {
  text: string;
}

export const GradualBlur: React.FC<GradualBlurProps> = ({ text }) => {
  const words = text.split(' ');

  return (
    <div className="flex flex-wrap gap-x-4 gap-y-2">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ filter: 'blur(10px)', opacity: 0 }}
          whileInView={{ filter: 'blur(0px)', opacity: 1 }}
          transition={{ duration: 0.8, delay: i * 0.1 }}
          viewport={{ once: true }}
          className="text-4xl font-black text-white uppercase tracking-tighter italic"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};
