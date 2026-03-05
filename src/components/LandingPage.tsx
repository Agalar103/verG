import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Zap } from 'lucide-react';

interface LandingPageProps {
  onExplore: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onExplore }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-punk-pink/10 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-punk-blue/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center px-6"
      >
        <div className="flex items-center justify-center gap-3 mb-8">
          <Zap className="text-punk-pink fill-punk-pink animate-bounce" size={32} />
          <span className="text-xs font-black text-punk-pink tracking-[0.5em] uppercase">System_Initial_Boot</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-12 italic leading-none">
          GELECEĞİNİZ <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-punk-pink via-white to-punk-blue">
            EMİN ELLERDE
          </span>
        </h1>

        <motion.button
          onClick={onExplore}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative px-12 py-5 bg-white text-black font-black text-xl uppercase tracking-[0.2em] skew-x-[-12deg] transition-all hover:bg-punk-pink hover:text-white"
        >
          <span className="relative z-10 flex items-center gap-3">
            Keşfet <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-punk-blue translate-x-2 translate-y-2 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform"></div>
        </motion.button>

        <div className="mt-24 flex flex-col items-center gap-4">
          <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-zinc-800 to-zinc-500"></div>
          <p className="text-[10px] font-black text-zinc-600 tracking-[0.4em] uppercase">
            Ver-G // Protocol_v4.0.2
          </p>
        </div>
      </motion.div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      
      {/* Scanning Line */}
      <motion.div 
        animate={{ top: ['0%', '100%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-[2px] bg-punk-pink/20 shadow-[0_0_15px_rgba(255,46,99,0.5)] z-50 pointer-events-none"
      />
    </div>
  );
};
