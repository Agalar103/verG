import { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { SpotlightCard } from './components/SpotlightCard';
import { ScratchCard } from './components/ScratchCard';
import { Beta } from './components/Beta';
import { XRayCard } from './components/XRayCard';
import { CodePreview } from './components/CodePreview';
import { BentoGrid, BentoGridItem } from './components/BentoGrid';
import { SplitText } from './components/SplitText';
import { GlitchText } from './components/GlitchText';
import { GridBackground } from './components/GridBackground';
import { AnimatedTabs } from './components/AnimatedTabs';
import { Windows12 } from './components/Windows12';
import { ElectricBorder } from './components/ElectricBorder';
import { GlareHover } from './components/GlareHover';
import { OrbitImages } from './components/OrbitImages';
import { PixelTransition } from './components/PixelTransition';
import { AnimatedContent } from './components/AnimatedContent';
import { LandingPage } from './components/LandingPage';
import { Antigravity } from './components/Antigravity';
import { LogoLoop } from './components/LogoLoop';
import { TargetCursor } from './components/TargetCursor';
import { LaserFlow } from './components/LaserFlow';
import { MagnetLines } from './components/MagnetLines';
import { GhostCursor } from './components/GhostCursor';
import { GradualBlur } from './components/GradualBlur';
import { ClickSpark } from './components/ClickSpark';
import { Magnet } from './components/Magnet';
import { StickerPeel } from './components/StickerPeel';
import { PixelTrail } from './components/PixelTrail';
import { Cubes } from './components/Cubes';
import { MetallicPaint } from './components/MetallicPaint';
import { Noise } from './components/Noise';
import { ShapeBlur } from './components/ShapeBlur';
import { Crosshair } from './components/Crosshair';
import { ImageTrail } from './components/ImageTrail';
import { Ribbons } from './components/Ribbons';
import { SplashCursor } from './components/SplashCursor';
import { MetaBalls } from './components/MetaBalls';
import { BlobCursor } from './components/BlobCursor';
import { StarBorder } from './components/StarBorder';
import { 
  ProCard, StarBanner, CarAnimation, MasterCard, HoodieCard, 
  AstronautCard, TruckAnimation, PhoneCard1, PhoneCard2, 
  SocialSquircle, TransactionCard, ThreeDCard, Spot
} from './components/UiverseComponents';
import { 
  Zap, Signature, ChevronRight, Terminal, MousePointer2, Box, 
  Monitor, Sparkles, LayoutGrid, Palette, Wrench, CreditCard,
  Ghost, Magnet as MagnetIcon, Target, Wind, Droplets, MousePointer,
  Image as ImageIcon, Ribbon, Waves, Circle, Star, MousePointerClick,
  Activity, Eye, Square, Sticker
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const SMOOTH_SCROLL_CODE = `// Smooth Scroll Implementation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});`;

const WINDOWS_12_CODE = `import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Play, Pause, Monitor } from 'lucide-react';

export const Windows12 = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative group rounded-[2.5rem] overflow-hidden border-4 border-white/10 bg-black">
      <video
        ref={videoRef}
        className="w-full aspect-video object-cover"
        src="https://cdn.pixabay.com/video/2021/08/05/83985-585351834_large.mp4"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <button onClick={togglePlay} className="p-6 bg-white/10 backdrop-blur-xl rounded-full text-white">
          {isPlaying ? <Pause size={32} /> : <Play size={32} />}
        </button>
      </div>
    </div>
  );
};

${SMOOTH_SCROLL_CODE}`;

const SCRATCH_CARD_CLI = `npm install motion lucide-react clsx tailwind-merge`;

const SCRATCH_CARD_USAGE = `import { ScratchCard } from './components/ScratchCard';

export default function Example() {
  return (
    <ScratchCard width={600} height={350}>
      <div className="p-8 text-center">
        <h2 className="text-4xl font-bold">$500 KAZANDIN!</h2>
      </div>
    </ScratchCard>
  );
}`;

const SCRATCH_CARD_CODE = `import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { RefreshCw, ShieldAlert, Cpu, Zap } from 'lucide-react';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const ScratchCard = ({ children, width = 600, height = 350, scratchRadius = 30 }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isScratching, setIsScratching] = useState(false);
  const [isMouseIn, setIsMouseIn] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);
  
  const flipRotation = useSpring(isFlipped ? 180 : 0, { stiffness: 100, damping: 20 });
  const rotateYCombined = useTransform([rotateY, flipRotation], ([ry, f]) => {
    const ryNum = parseFloat(ry as string);
    return \`\${ryNum + (f as number)}deg\`;
  });

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
    if (isScratching) scratch(mouseX, mouseY);
  };

  const scratch = (x, y) => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, scratchRadius, 0, Math.PI * 2);
    ctx.fill();
  };

  useEffect(() => {
    flipRotation.set(isFlipped ? 180 : 0);
  }, [isFlipped, flipRotation]);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.fillStyle = '#1a1a1a';
    ctx.fillRect(0, 0, width, height);

    // Grid Pattern
    ctx.strokeStyle = 'rgba(255, 0, 255, 0.15)';
    ctx.lineWidth = 1;
    for (let i = 0; i < width; i += 20) {
      ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, height); ctx.stroke();
    }
    for (let i = 0; i < height; i += 20) {
      ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(width, i); ctx.stroke();
    }

    // Fish Scale Pattern
    ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
    const scaleSize = 30;
    for (let y = 0; y < height + scaleSize; y += scaleSize / 2) {
      const offset = (Math.floor(y / (scaleSize / 2)) % 2) * (scaleSize / 2);
      for (let x = -offset; x < width + scaleSize; x += scaleSize) {
        ctx.beginPath();
        ctx.arc(x + scaleSize / 2, y, scaleSize / 2, Math.PI, 0);
        ctx.stroke();
      }
    }

    // Text
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 48px "Space Grotesk"';
    ctx.textAlign = 'center';
    ctx.fillText('KAZI KAZAN', width / 2, height / 2);
  }, [width, height]);

  return (
    <div className="perspective-[2000px] w-full flex flex-col items-center gap-8">
      <div className="relative group">
        <motion.div
          ref={containerRef}
          style={{ rotateX, rotateY: rotateYCombined, transformStyle: "preserve-3d", width: width + 16, height: height + 16 }}
          onMouseMove={handleMouseMove}
          className={cn("relative cursor-none rounded-3xl border-8 border-white/10 bg-zinc-950 shadow-2xl overflow-hidden", isFlipped ? "shadow-cyan-500/20" : "shadow-purple-500/20")}
        >
          {/* Front Side */}
          <motion.div className="absolute inset-0 w-full h-full" style={{ backfaceVisibility: "hidden" }}>
            <div className="absolute inset-0 flex items-center justify-center bg-[#050505] z-0">{children}</div>
            <canvas ref={canvasRef} width={width} height={height} className="relative z-10 touch-none block" />
          </motion.div>

          {/* Back Side */}
          <motion.div className="absolute inset-0 w-full h-full bg-zinc-900" style={{ backfaceVisibility: "hidden", rotateY: 180 }}>
            <div className="p-8 h-full flex flex-col justify-between border border-white/5 m-4 rounded-2xl">
              <h3 className="text-xl font-black text-white uppercase italic">Kullanım Talimatları</h3>
              <div className="space-y-2 text-[11px] text-zinc-400 uppercase">
                <p>01_ Kartı kazıyın.</p>
                <p>02_ Ödülü bulun.</p>
                <p>03_ Bakiyenize ekleyin.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Flip Button */}
        <button onClick={() => setIsFlipped(!isFlipped)} className="absolute -right-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-zinc-900 border border-white/10 text-zinc-400">
          <RefreshCw size={20} className={cn("transition-transform duration-500", isFlipped && "rotate-180")} />
        </button>
      </div>

      {/* 25 Kurus Cursor */}
      <AnimatePresence>
        {isMouseIn && !isFlipped && (
          <motion.div style={{ left: cursorX, top: cursorY }} className="coin-cursor">
            <img src="https://upload.wikimedia.org/wikipedia/tr/d/d4/25_Kuru%C5%9F_arka.png" className="w-full h-full object-contain" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};`;

const SCRATCH_CARD_CSS = `@theme {
  --font-sans: "Space Grotesk", ui-sans-serif, system-ui, sans-serif;
}

.perspective-[1200px] {
  perspective: 1200px;
}

.coin-cursor {
  position: fixed;
  pointer-events: none;
  z-index: 100;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: radial-gradient(circle, #eab308 0%, #a16207 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%);
  box-shadow: 0 10px 20px rgba(0,0,0,0.3);
}`;

const SPLIT_TEXT_CODE = `import { motion } from 'motion/react';

export const SplitText = ({ text }) => {
  const letters = text.split("");
  return (
    <motion.div style={{ display: "flex", overflow: "hidden" }}>
      {letters.map((l, i) => (
        <motion.span key={i} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
          {l === " " ? "\\u00A0" : l}
        </motion.span>
      ))}
    </motion.div>
  );
};`;

const GLITCH_TEXT_CODE = `import { motion } from 'motion/react';

export const GlitchText = ({ text }) => {
  return (
    <div className="relative inline-block font-black uppercase">
      <span className="relative z-10">{text}</span>
      <motion.span className="absolute top-0 left-0 -z-10 text-punk-pink opacity-70" animate={{ x: [-2, 2, -1, 0] }}>{text}</motion.span>
      <motion.span className="absolute top-0 left-0 -z-20 text-punk-blue opacity-70" animate={{ x: [2, -2, 1, 0] }}>{text}</motion.span>
    </div>
  );
};`;

const BETA_CODE = `import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { RefreshCw, Zap, Info, Heart } from 'lucide-react';

export const Beta = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const opacity1 = useTransform(mouseXSpring, [-0.5, 0, 0.5], [0, 0.5, 1]);
  const opacity2 = useTransform(mouseXSpring, [-0.5, 0, 0.5], [1, 0.5, 0]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const steamKey = "CSGO-BETA-2011-VALV-7777";

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[1000px] p-8 gap-12 bg-[#050505]">
      <div className="flex flex-col items-center text-center gap-2 mb-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-zinc-500 text-[9px] font-black tracking-[0.5em] uppercase">
          <Zap size={10} />
          Authentic_Slab_Collector
        </div>
        <h2 className="text-6xl font-black tracking-tighter text-white uppercase italic">
          CS:GO <span className="text-punk-blue glitch-text">BETA_ACCESS</span>
        </h2>
      </div>

      <div className="relative perspective-[2000px]">
        <motion.div
          ref={containerRef}
          style={{
            rotateX: isFlipped ? 0 : rotateX,
            rotateY: isFlipped ? 180 : rotateY,
            transformStyle: "preserve-3d",
          }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative w-[640px] h-[880px] cursor-crosshair"
        >
          <div className="absolute inset-0 w-full h-full rounded-[2.5rem] border-[2px] border-white/20 bg-white/5 shadow-[0_0_60px_rgba(0,0,0,0.8)] pointer-events-none z-50 overflow-hidden">
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-zinc-300 to-zinc-500 border-2 border-zinc-200 flex items-center justify-center shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
              <div className="w-5 h-5 rounded-full bg-zinc-800/20"></div>
            </div>
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-white/10 via-transparent to-white/5 pointer-events-none"></div>
          </div>

          <div className="absolute inset-[20px] rounded-2xl bg-[#0a0a0a] overflow-hidden shadow-inner" style={{ backfaceVisibility: "hidden" }}>
            <motion.div style={{ opacity: opacity1 }} className="absolute inset-0 z-10">
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop" alt="Billy Butcher Style" className="w-full h-full object-cover brightness-110 contrast-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-punk-blue/10 mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
            </motion.div>

            <motion.div style={{ opacity: opacity2 }} className="absolute inset-0 z-20">
              <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop" alt="SAS Character" className="w-full h-full object-cover brightness-110 contrast-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-punk-pink/10 mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
            </motion.div>

            <div className="absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-none">
              <motion.div style={{ x: useTransform(mouseXSpring, [-0.5, 0.5], [-15, 15]), y: useTransform(mouseYSpring, [-0.5, 0.5], [-15, 15]) }} className="flex flex-col items-center">
                <div className="relative mb-6">
                  <div className="w-32 h-32 bg-white/90 flex items-center justify-center rounded-full shadow-[0_0_50px_rgba(255,255,255,0.4)]">
                    <svg viewBox="0 0 24 24" className="w-20 h-20 text-black fill-current">
                      <path d="M12,2L4.5,20.29L5.21,21L12,18L18.79,21L19.5,20.29L12,2Z" />
                    </svg>
                  </div>
                  <div className="absolute -inset-4 border-2 border-white/20 rounded-full animate-ping opacity-10"></div>
                </div>
                <h3 className="text-8xl font-black text-white tracking-tighter italic leading-none text-center drop-shadow-[0_10px_20px_rgba(0,0,0,1)]">
                  CS<span className="text-punk-blue">GO</span>
                </h3>
              </motion.div>
            </div>

            <motion.div style={{ x: useTransform(mouseXSpring, [-0.5, 0.5], ["-150%", "150%"]) }} className="absolute inset-0 z-40 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none" />
          </div>

          <motion.div className="absolute inset-[20px] rounded-2xl bg-[#080808] flex flex-col p-12 font-sans overflow-hidden border border-white/5" style={{ backfaceVisibility: "hidden", rotateY: 180 }}>
            <div className="relative z-10 flex flex-col h-full text-center">
              <div className="flex flex-col items-center mb-10">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-3xl font-black text-white tracking-tighter uppercase">COUNTER</span>
                  <div className="w-10 h-10 bg-white flex items-center justify-center rounded-sm">
                    <svg viewBox="0 0 24 24" className="w-8 h-8 text-black fill-current"><path d="M12,2L4.5,20.29L5.21,21L12,18L18.79,21L19.5,20.29L12,2Z" /></svg>
                  </div>
                  <span className="text-3xl font-black text-white tracking-tighter uppercase">STRIKE</span>
                </div>
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.6em]">GLOBAL OFFENSIVE</span>
              </div>
              <div className="space-y-8 flex-1">
                <p className="text-xs text-zinc-300 font-black leading-relaxed uppercase italic border-y border-white/10 py-6">Bu özel beta erişimi için seçildiniz. Steam üzerinden aktif edebilirsiniz.</p>
                <div className="mt-12 space-y-6">
                  <div className="p-8 bg-zinc-900/80 border-2 border-white/5 relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 bg-[#080808] text-[10px] font-black text-zinc-600 uppercase tracking-widest">Unique_Product_Key</div>
                    <code className="text-2xl font-black text-white tracking-[0.3em]">{steamKey}</code>
                  </div>
                  <div className="py-6 border-t border-white/5 flex flex-col items-center gap-4">
                    <div className="flex items-center gap-2 text-punk-blue">
                      <Heart size={16} className="fill-current" />
                      <span className="text-sm font-black uppercase tracking-[0.2em]">Teşekkürler!</span>
                    </div>
                    <p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest leading-relaxed">CS:GO launches on PC, Mac, PSN, and XBLA in 2012.</p>
                  </div>
                </div>
              </div>
              <div className="mt-auto pt-8 opacity-30">
                <p className="text-[8px] text-zinc-700 font-bold uppercase">© 2011 Valve Corporation. All rights reserved.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <button onClick={() => setIsFlipped(!isFlipped)} className="absolute -right-20 top-1/2 -translate-y-1/2 p-5 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-punk-blue transition-all duration-500 shadow-2xl z-[60]">
          <RefreshCw className={\`transition-transform duration-700 \${isFlipped ? 'rotate-180' : ''}\`} size={28} />
        </button>
      </div>

      <div className="flex flex-col items-center gap-4">
        <div className="px-8 py-3 rounded-full bg-white/5 border border-white/10 flex items-center gap-3">
          <Info size={16} className="text-punk-blue" />
          <p className="text-xs font-black text-zinc-500 uppercase tracking-widest">Hologram geçişi için fareyi sağa/sola kaydırın</p>
        </div>
      </div>
    </div>
  );
};`;

const ANIMATED_TABS_CODE = `import { motion } from 'motion/react';

export const AnimatedTabs = ({ tabs, activeTab, onChange }) => {
  return (
    <div className="flex gap-2 p-1 bg-zinc-900 border-2 border-white/10">
      {tabs.map((tab) => (
        <button key={tab.id} onClick={() => onChange(tab.id)} className="relative px-6 py-2">
          {activeTab === tab.id && (
            <motion.div layoutId="active-tab" className="absolute inset-0 bg-punk-pink" />
          )}
          <span className="relative z-10">{tab.label}</span>
        </button>
      ))}
    </div>
  );
};`;

const ELECTRIC_BORDER_CODE = `import React from 'react';
import { motion } from 'motion/react';

export const ElectricBorder = ({ children, borderColor = "#00ffff", duration = 3 }) => {
  return (
    <div className="relative p-[2px] overflow-hidden rounded-xl group">
      <motion.div
        className="absolute inset-[-100%] z-0"
        animate={{ rotate: [0, 360] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
        style={{
          background: \`conic-gradient(from 0deg, transparent 0%, \${borderColor} 25%, transparent 50%, \${borderColor} 75%, transparent 100%)\`,
        }}
      />
      <div className="relative z-10 bg-[#050505] rounded-[10px] h-full w-full">
        {children}
      </div>
    </div>
  );
};`;

const GLARE_HOVER_CODE = `import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

export const GlareHover = ({ children }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative group cursor-pointer"
    >
      <div className="relative z-10 h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
        {children}
        <motion.div
          style={{
            background: \`radial-gradient(circle at var(--glare-x) var(--glare-y), rgba(255,255,255,0.15) 0%, transparent 60%)\`,
            "--glare-x": glareX,
            "--glare-y": glareY,
          } as any}
          className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
        />
      </div>
    </motion.div>
  );
};`;

const ORBIT_IMAGES_CODE = `import React from 'react';
import { motion } from 'motion/react';

export const OrbitImages = ({ images, centerImage, radius = 150, duration = 20 }) => {
  return (
    <div className="relative w-[400px] h-[400px] flex items-center justify-center">
      <div className="relative z-10 w-24 h-24 rounded-full border-4 border-punk-pink overflow-hidden">
        <img src={centerImage} className="w-full h-full object-cover" />
      </div>
      {images.map((src, index) => {
        const angle = (index / images.length) * (Math.PI * 2);
        return (
          <motion.div
            key={index}
            className="absolute w-16 h-16 rounded-xl border-2 border-punk-blue overflow-hidden"
            animate={{ rotate: [0, 360] }}
            transition={{ duration, repeat: Infinity, ease: "linear" }}
            style={{ x: Math.cos(angle) * radius, y: Math.sin(angle) * radius }}
          >
            <motion.img src={src} animate={{ rotate: [0, -360] }} transition={{ duration, repeat: Infinity, ease: "linear" }} className="w-full h-full object-cover" />
          </motion.div>
        );
      })}
    </div>
  );
};`;

const PIXEL_TRANSITION_CODE = `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const PixelTransition = ({ firstContent, secondContent, gridSize = 10 }) => {
  const [isFirst, setIsFirst] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggle = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsFirst(!isFirst);
    setTimeout(() => setIsAnimating(false), 800);
  };

  return (
    <div className="relative w-full h-full cursor-pointer overflow-hidden rounded-2xl" onClick={toggle}>
      <div className="absolute inset-0">{isFirst ? firstContent : secondContent}</div>
      <AnimatePresence>
        {isAnimating && (
          <div className="absolute inset-0 z-50 grid" style={{ gridTemplateColumns: \`repeat(\${gridSize}, 1fr)\` }}>
            {Array.from({ length: gridSize * gridSize }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: [0, 1, 0], scale: [0, 1.1, 0] }}
                transition={{ duration: 0.6, delay: Math.random() * 0.3 }}
                className="bg-punk-pink"
              />
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};`;

const ANIMATED_CONTENT_CODE = `import React from 'react';
import { motion } from 'motion/react';

export const AnimatedContent = ({ children, distance = 40, direction = 'vertical', delay = 0 }) => {
  const x = direction === 'horizontal' ? distance : 0;
  const y = direction === 'vertical' ? distance : 0;

  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 120, damping: 14, delay }}
    >
      {children}
    </motion.div>
  );
};`;

const GRID_BACKGROUND_CODE = `export const GridBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
    </div>
  );
};`;

const BENTO_GRID_CODE = `import { cn } from "../utils/cn";

export const BentoGrid = ({ className, children }) => {
  return (
    <div className={cn("grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto", className)}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({ className, title, description, header, icon }) => {
  return (
    <div className={cn("row-span-1 rounded-none group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4", className)}>
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};`;

const X_RAY_CARD_CODE = `import { XRayCard } from './components/XRayCard';

export default function Example() {
  return (
    <XRayCard 
      topImage="https://picsum.photos/seed/cyber/800/600"
      bottomImage="https://picsum.photos/seed/xray/800/600"
      width={600}
      height={400}
    />
  );
}`;

const ANTIGRAVITY_CODE = `import React from 'react';
import { motion } from 'motion/react';

export const Antigravity = ({ children, amplitude = 20, duration = 3 }) => {
  return (
    <motion.div
      animate={{
        y: [0, -amplitude, 0],
        rotate: [0, 2, -2, 0],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
};`;

const LOGO_LOOP_CODE = `import React from 'react';
import { motion } from 'motion/react';

export const LogoLoop = ({ logos, duration = 20 }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap py-10 relative">
      <motion.div
        animate={{ x: [0, '-50%'] }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear"
        }}
        className="inline-flex gap-12 items-center"
      >
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="opacity-50 hover:opacity-100 transition-opacity">
            {logo}
          </div>
        ))}
      </motion.div>
    </div>
  );
};`;

const TARGET_CURSOR_CODE = `import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export const TargetCursor = () => {
  const springX = useSpring(0, { stiffness: 150, damping: 15 });
  const springY = useSpring(0, { stiffness: 150, damping: 15 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      springX.set(e.clientX);
      springY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
      className="fixed inset-0 pointer-events-none z-[9999] w-12 h-12 border border-punk-pink rounded-full flex items-center justify-center"
    >
      <div className="w-1 h-1 bg-punk-pink rounded-full"></div>
    </motion.div>
  );
};`;

const LASER_FLOW_CODE = `import React from 'react';
import { motion } from 'motion/react';

export const LaserFlow = ({ color = '#FF2E63', duration = 2 }) => {
  return (
    <div className="relative w-full h-[1px] bg-white/5 overflow-hidden">
      <motion.div
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
        className="absolute inset-y-0 w-1/3"
        style={{
          background: \`linear-gradient(to right, transparent, \${color}, transparent)\`,
          boxShadow: \`0 0 15px \${color}\`
        }}
      />
    </div>
  );
};`;

const MAGNET_LINES_CODE = `import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

export const MagnetLines = () => {
  // Implementation details...
  return <div className="grid gap-4 p-8">...</div>;
};`;

const GHOST_CURSOR_CODE = `import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const GhostCursor = () => {
  const [ghosts, setGhosts] = useState([]);
  useEffect(() => {
    const handleMouseMove = (e) => {
      setGhosts((prev) => [...prev, { x: e.clientX, y: e.clientY, id: Date.now() }].slice(-10));
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <AnimatePresence>
      {ghosts.map((ghost) => (
        <motion.div key={ghost.id} ... />
      ))}
    </AnimatePresence>
  );
};`;

const GRADUAL_BLUR_CODE = `import React from 'react';
import { motion } from 'motion/react';

export const GradualBlur = ({ text }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {text.split(' ').map((word, i) => (
        <motion.span
          key={i}
          initial={{ filter: 'blur(10px)', opacity: 0 }}
          animate={{ filter: 'blur(0px)', opacity: 1 }}
          transition={{ duration: 0.8, delay: i * 0.1 }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};`;

const CLICK_SPARK_CODE = `import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const ClickSpark = () => {
  const [sparks, setSparks] = useState([]);
  useEffect(() => {
    const handleClick = (e) => {
      setSparks((prev) => [...prev, { x: e.clientX, y: e.clientY, id: Date.now() }]);
    };
    window.addEventListener('mousedown', handleClick);
    return () => window.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <AnimatePresence>
      {sparks.map((spark) => (
        <SparkItem key={spark.id} x={spark.x} y={spark.y} />
      ))}
    </AnimatePresence>
  );
};`;

const MAGNET_CODE = `import React, { useRef } from 'react';
import { motion, useSpring } from 'motion/react';

export const Magnet = ({ children, strength = 40 }) => {
  const x = useSpring(0);
  const y = useSpring(0);
  // Mouse handlers...
  return <motion.div style={{ x, y }}>{children}</motion.div>;
};`;

const STICKER_PEEL_CODE = `import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

export const StickerPeel = ({ children, stickerImage }) => {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  // ... implementation ...
};`;

const PIXEL_TRAIL_CODE = `import React, { useEffect, useRef } from 'react';

export const PixelTrail = () => {
  const canvasRef = useRef(null);
  // ... implementation ...
};`;

const CUBES_CODE = `import React from 'react';
import { motion } from 'motion/react';

export const Cubes = () => {
  // ... implementation ...
};`;

const METALLIC_PAINT_CODE = `import React from 'react';
import { motion } from 'motion/react';

export const MetallicPaint = ({ text }) => {
  // ... implementation ...
};`;

const NOISE_CODE = `import React from 'react';

export const Noise = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03]">
      <svg width="100%" height="100%">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
};`;

const SHAPE_BLUR_CODE = `import React from 'react';
import { motion } from 'motion/react';

export const ShapeBlur = () => {
  // ... implementation ...
};`;

const CROSSHAIR_CODE = `import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const Crosshair = () => {
  // ... implementation ...
};`;

const IMAGE_TRAIL_CODE = `import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const ImageTrail = () => {
  // ... implementation ...
};`;

const RIBBONS_CODE = `import React, { useEffect, useRef } from 'react';

export const Ribbons = () => {
  // ... implementation ...
};`;

const SPLASH_CURSOR_CODE = `import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const SplashCursor = () => {
  // ... implementation ...
};`;

const META_BALLS_CODE = `import React from 'react';
import { motion } from 'motion/react';

export const MetaBalls = () => {
  // ... implementation ...
};`;

const BLOB_CURSOR_CODE = `import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export const BlobCursor = () => {
  // ... implementation ...
};`;

const STAR_BORDER_CODE = `import React from 'react';
import { motion } from 'motion/react';

export const StarBorder = ({ children }) => {
  // ... implementation ...
};`;

const UIVERSE_PRO_CODE = `<div class="card">
  <span class="title">Pro
    <p class="pricing">$8 <span class="pricing-time">/ month</span></p>
    <span class="sub-title">Everything on Basic plus:
      <ul class="list">
        <li class="list-item"><span class="check">✓</span> Feature</li>
        <li class="list-item"><span class="check">✓</span> Feature</li>
        <li class="list-item"><span class="check">✓</span> Feature</li>
        <li class="list-item"><span class="check">✓</span> Feature</li>
        <li class="list-item"><span class="check">✓</span> Feature</li>
      </ul>
      <button class="button">
        <span class="text-button">Get pro now</span>
      </button>
    </span>
  </span>
</div>`;

const UIVERSE_STAR_CODE = `<div class="card">
  <h2>WORLD</h2>
</div>`;

const UIVERSE_CAR_CODE = `<div class="container">
  <div class="car"></div>
</div>`;

const UIVERSE_MASTERCARD_CODE = `<div class="card">
  <div class="logo">
    <div class="circle red"></div>
    <div class="circle yellow"></div>
  </div>
  ...
</div>`;

const UIVERSE_HOODIE_CODE = `<div class="card">
  <div class="text-4xl">👕</div>
  <p class="mt-4 font-bold">CYBER HOODIE</p>
  <p class="text-xs text-zinc-500">$49.99</p>
</div>`;

const UIVERSE_ASTRO_CODE = `<div class="card flex flex-col items-center justify-center p-6 text-center">
  <div class="text-6xl mb-4">👨‍🚀</div>
  <h3 class="text-xl font-bold text-white">ASTRO_PUNK</h3>
  ...
</div>`;

const UIVERSE_TRUCK_CODE = `<div class="truck"></div>`;

const UIVERSE_PHONE1_CODE = `<div class="phone flex flex-col items-center p-4">
  <div class="w-16 h-1 bg-white/20 rounded-full mb-8"></div>
  ...
</div>`;

const UIVERSE_PHONE2_CODE = `<div class="phone p-6">
  <div class="w-full h-full bg-gradient-to-b from-zinc-800 to-black rounded-[32px] ...">
    ...
  </div>
</div>`;

const UIVERSE_SQUIRCLE_CODE = `<svg width="0" height="0">
  <defs>
    <clipPath id="squircle" clipPathUnits="objectBoundingBox">
      <path d="M .5,0 C .1,0 0,.1 0,.5 0,.9 .1,1 .5,1 .9,1 1,.9 1,.5 1,.1 .9,0 .5,0 Z" />
    </clipPath>
  </defs>
</svg>
<div class="flex gap-4">
  <div class="icon ...">FB</div>
  ...
</div>`;

const UIVERSE_TRANSACTION_CODE = `<div class="card space-y-4">
  <div class="flex justify-between items-center">
    <p class="text-xs text-zinc-500 font-bold uppercase">Recent Transaction</p>
    ...
  </div>
  ...
</div>`;

const UIVERSE_3D_CODE = `<div class="card p-8 flex flex-col justify-between border border-white/10">
  ...
</div>`;

const UIVERSE_SPOT_CODE = `<!-- From Uiverse.io by Praashoo7 --> 
<div class="u-spot">
  <div class="main">
    <div class="currentplaying">
      <svg height="50px" width="50px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" class="spotify"><radialGradient gradientUnits="userSpaceOnUse" gradientTransform="translate(0 -534)" r="43.888" cy="572.064" cx="33.34" id="ipdIa4~cOclR8yt_ClW93a"><stop stop-color="#f4e9c3" offset="0"></stop><stop stop-color="#f8eecd" offset=".219"></stop><stop stop-color="#fdf4dc" offset=".644"></stop><stop stop-color="#fff6e1" offset="1"></stop></radialGradient><path d="M51.03,37.34c0.16,0.98,1.08,1.66,2.08,1.66h5.39c2.63,0,4.75,2.28,4.48,4.96	C62.74,46.3,60.64,48,58.29,48H49c-1.22,0-2.18,1.08-1.97,2.34c0.16,0.98,1.08,1.66,2.08,1.66h8.39c1.24,0,2.37,0.5,3.18,1.32	C61.5,54.13,62,55.26,62,56.5c0,2.49-2.01,4.5-4.5,4.5h-49c-1.52,0-2.9-0.62-3.89-1.61C3.62,58.4,3,57.02,3,55.5	C3,52.46,5.46,50,8.5,50H14c1.22,0,2.18-1.08,1.97-2.34C15.81,46.68,14.89,44,13.89,44H5.5c-2.63,0-4.75-2.28-4.48-4.96	C1.26,36.7,3.36,35,5.71,35H8c1.71,0,3.09-1.43,3-3.16C10.91,30.22,9.45,29,7.83,29H4.5c-2.63,0-4.75-2.28-4.48-4.96	C0.26,21.7,2.37,20,4.71,20H20c0.83,0,1.58-0.34,2.12-0.88C22.66,18.58,23,17.83,23,17c0-1.66-1.34-3-3-3h-1.18	c-0.62-0.09-1.43,0-2.32,0h-9c-1.52,0-2.9-0.62-3.89-1.61S2,10.02,2,8.5C2,5.46,4.46,3,7.5,3h49c3.21,0,5.8,2.79,5.47,6.06	C61.68,11.92,60.11,14,57.24,14H52c-2.76,0-5,2.24-5,5c0,1.38,0.56,2.63,1.46,3.54C49.37,23.44,50.62,24,52,24h6.5	c3.21,0,5.8,2.79,5.47,6.06C63.68,32.92,61.11,35,58.24,35H53C51.78,35,50.82,36.08,51.03,37.34z" fill="url(#ipdIa4~cOclR8yt_ClW93a)"></path><linearGradient gradientUnits="userSpaceOnUse" gradientTransform="translate(0 -534)" y2="590.253" y1="530.096" x2="32" x1="32" id="ipdIa4~cOclR8yt_ClW93b"><stop stop-color="#42d778" offset="0"></stop><stop stop-color="#3dca76" offset=".428"></stop><stop stop-color="#34b171" offset="1"></stop></linearGradient><path d="M57,32c0,12.837-9.663,23.404-22.115,24.837C33.942,56.942,32.971,57,32,57	c-1.644,0-3.25-0.163-4.808-0.471C15.683,54.298,7,44.163,7,32C7,18.192,18.192,7,32,7S57,18.192,57,32z" fill="url(#ipdIa4~cOclR8yt_ClW93b)"></path><path d="M41.683,44.394c-0.365,0-0.731-0.181-1.096-0.365c-3.471-2.009-7.674-3.105-12.24-3.105	c-2.559,0-5.116,0.364-7.491,0.912c-0.365,0-0.914,0.183-1.096,0.183c-0.914,0-1.461-0.732-1.461-1.462	c0-0.913,0.547-1.463,1.279-1.643c2.923-0.732,5.846-1.096,8.951-1.096c5.116,0,9.866,1.276,13.885,3.655	c0.548,0.364,0.914,0.73,0.914,1.642C43.145,43.847,42.414,44.394,41.683,44.394z M44.241,38.181c-0.547,0-0.912-0.18-1.279-0.364	c-3.835-2.375-9.135-3.839-15.163-3.839c-2.924,0-5.664,0.366-7.674,0.916c-0.549,0.18-0.731,0.18-1.096,0.18	c-1.096,0-1.827-0.912-1.827-1.826c0-1.096,0.549-1.645,1.461-2.009c2.74-0.73,5.481-1.279,9.317-1.279	c6.213,0,12.241,1.463,16.991,4.384c0.73,0.364,1.096,1.096,1.096,1.826C46.069,37.269,45.337,38.181,44.241,38.181z M47.165,30.876	c-0.548,0-0.731-0.182-1.279-0.364c-4.385-2.559-10.961-4.021-17.356-4.021c-3.289,0-6.577,0.366-9.5,1.096	c-0.366,0-0.731,0.182-1.279,0.182c-1.279,0.183-2.193-0.912-2.193-2.192c0-1.279,0.731-2.009,1.644-2.192	c3.471-1.096,7.125-1.462,11.327-1.462c6.943,0,14.25,1.462,19.731,4.567c0.73,0.366,1.278,1.096,1.278,2.193	C49.357,29.961,48.442,30.876,47.165,30.876z" fill="#fff"></path></svg>
      <p class="heading">Currently Playing</p>
    </div>
    <div class="loader">
      <div class="song">
        <p class="name">Time in a Bottle</p>
        <p class="artist">Jim Corce</p>
      </div>
      <div class="albumcover"></div>
      <div class="loading">
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
      </div>
    </div>
    <div class="loader">
      <div class="song">
        <p class="name">My Way</p>
        <p class="artist">Frank Sinatra</p>
      </div>
      <div class="albumcover"></div>
      <div class="play"></div>
    </div>
    <div class="loader">
      <div class="song">
        <p class="name">Lemon Tree</p>
        <p class="artist">Fools Garden</p>
      </div>
      <div class="albumcover"></div>
      <div class="play"></div>
    </div>
  </div>
</div>`;

const LABS_SITES = [
  { name: 'Mockly', url: 'https://www.getmockly.com/', desc: 'Mockup Design Tool' },
  { name: 'Monitor Situation', url: 'https://monitor-the-situation.com/eastern-europe', desc: 'Eastern Europe Monitoring' },
  { name: 'Vercel Triangle', url: 'https://vercel-triangle-psi.vercel.app/', desc: 'Cullen Webber Sketch' },
  { name: 'Slow Roads', url: 'https://slowroads.io/#O0-68bc78a0@0', desc: 'Chill Driving Sim' },
  { name: 'Shopify BFCM', url: 'https://bfcm.shopify.com/', desc: 'Black Friday Cyber Monday' },
];

const CoinCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="coin-cursor" 
      style={{ 
        left: position.x - 12.5, 
        top: position.y - 12.5 
      }}
    >
      25
    </div>
  );
};

export default function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [activeComponent, setActiveComponent] = useState('scratch-card');
  const [metallicText, setMetallicText] = useState('CYBER PUNK');
  const [metallicFontSize, setMetallicFontSize] = useState('text-8xl');
  const [metallicGlowColor, setMetallicGlowColor] = useState('#ff003c');
  const [isEditingMetallic, setIsEditingMetallic] = useState(false);
  const [activeTab, setActiveTab] = useState('tab1');
  const [selectedLab, setSelectedLab] = useState(LABS_SITES[0].url);
  const [prize, setPrize] = useState('$299');

  const prizes = ['$50', '$100', '$200', '$300', '$500'];

  useEffect(() => {
    if (activeComponent === 'scratch-card') {
      const randomPrize = prizes[Math.floor(Math.random() * prizes.length)];
      setPrize(randomPrize);
    }
  }, [activeComponent]);

  const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-none bg-zinc-900 border-2 border-white/10 group-hover:border-punk-pink transition-colors"></div>
  );

  const bentoItems = [
    {
      title: "SİBER SOKAKLAR",
      description: "Geleceğin neon ışıklı sokaklarını keşfedin.",
      header: <Skeleton />,
      icon: <Terminal className="h-4 w-4 text-punk-pink" />,
    },
    {
      title: "DİJİTAL ANARŞİ",
      description: "Sistemdeki hataları sanat haline getirin.",
      header: <Skeleton />,
      icon: <Zap className="h-4 w-4 text-punk-green" />,
    },
    {
      title: "PUNK TASARIM",
      description: "Kuralları yıkın ve kendi stilinizi yaratın.",
      header: <Skeleton />,
      icon: <Signature className="h-4 w-4 text-punk-blue" />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 flex overflow-x-hidden">
      <AnimatePresence>
        {showLanding && (
          <motion.div
            key="landing"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100]"
          >
            <LandingPage onExplore={() => setShowLanding(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      <GridBackground />
      <Sidebar activeId={activeComponent} onSelect={setActiveComponent} />
      <CoinCursor />
      
      <main className="flex-1 p-12 max-w-6xl mx-auto relative">
        
        {/* Background Decorative Elements */}
        <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-punk-pink/5 blur-[120px] -z-10"></div>
        <div className="fixed bottom-0 left-72 w-[500px] h-[500px] bg-punk-blue/5 blur-[120px] -z-10"></div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeComponent}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <header className="mb-16 relative">
              <div className="absolute -left-8 top-0 bottom-0 w-1 bg-punk-pink"></div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] font-black text-punk-pink tracking-[0.4em] uppercase">Bileşen Kütüphanesi</span>
                <span className="text-zinc-800 font-black text-[10px] tracking-[0.4em]">&gt;</span>
                <span className="text-[10px] font-black text-zinc-500 tracking-[0.4em] uppercase">
                  {activeComponent.replace('-', ' ')}
                </span>
              </div>
              <h1 className="text-7xl font-black tracking-tighter mb-6 glitch-text leading-none">
                {activeComponent === 'scratch-card' ? 'KAZI KAZAN' : 
                 activeComponent === 'split-text' ? 'PARÇALI METİN' :
                 activeComponent === 'glitch-text' ? 'GLITCH METİN' :
                 activeComponent === 'grid-background' ? 'IZGARA ARKA PLAN' :
                 activeComponent === 'animated-tabs' ? 'SEKMELER' :
                 activeComponent === 'bento-grid' ? 'BENTO IZGARA' : 
                 activeComponent === 'x-ray-card' ? 'X-RAY KART' :
                 activeComponent === 'electric-border' ? 'ELEKTRİKLİ KENAR' :
                 activeComponent === 'glare-hover' ? 'PARLAMA EFEKTİ' :
                 activeComponent === 'orbit-images' ? 'YÖRÜNGE RESİMLERİ' :
                 activeComponent === 'pixel-transition' ? 'PIXEL GEÇİŞİ' :
                 activeComponent === 'animated-content' ? 'HAREKETLİ İÇERİK' :
                 activeComponent === 'antigravity' ? 'ANTIGRAVITY' :
                 activeComponent === 'logo-loop' ? 'LOGO DÖNGÜSÜ' :
                 activeComponent === 'target-cursor' ? 'HEDEF İMLEÇ' :
                 activeComponent === 'laser-flow' ? 'LAZER AKIŞI' :
                 activeComponent === 'magnet-lines' ? 'MANYETİK ÇİZGİLER' :
                 activeComponent === 'ghost-cursor' ? 'HAYALET İMLEÇ' :
                 activeComponent === 'gradual-blur' ? 'KADEMELİ BLUR' :
                 activeComponent === 'click-spark' ? 'TIKLAMA KIVILCIMI' :
                 activeComponent === 'magnet' ? 'MIKNATIS' :
                 activeComponent === 'color-picker' ? 'RENK SEÇİCİ' :
                 activeComponent === 'unit-converter' ? 'BİRİM DÖNÜŞTÜRÜCÜ' :
                 activeComponent === 'sticker-peel' ? 'STICKER PEEL' :
                 activeComponent === 'pixel-trail' ? 'PIXEL TRAIL' :
                 activeComponent === 'cubes' ? '3D KÜPLER' :
                 activeComponent === 'metallic-paint' ? 'METALİK BOYA' :
                 activeComponent === 'noise' ? 'NOISE EFEKTİ' :
                 activeComponent === 'shape-blur' ? 'SHAPE BLUR' :
                 activeComponent === 'crosshair' ? 'CROSSHAIR' :
                 activeComponent === 'image-trail' ? 'RESİM TAKİBİ' :
                 activeComponent === 'ribbons' ? 'RIBBONS' :
                 activeComponent === 'splash-cursor' ? 'SPLASH CURSOR' :
                 activeComponent === 'meta-balls' ? 'META BALLS' :
                 activeComponent === 'blob-cursor' ? 'BLOB CURSOR' :
                 activeComponent === 'star-border' ? 'YILDIZ KENAR' :
                 activeComponent === 'labs' ? 'SİBER LABORATUVAR' :
                 activeComponent === 'beta' ? 'BETA_ACCESS' : 'BİLEŞEN ÖNİZLEME'}
              </h1>
              <p className="text-zinc-500 text-xl max-w-2xl font-bold italic leading-relaxed">
                {activeComponent === 'scratch-card' ? 'Gerçekçi 3D eğim efektli, balık pulu desenli ve interaktif kazıma deneyimi sunan siberpunk kart.' :
                 activeComponent === 'split-text' ? 'Karakter bazlı akıcı giriş animasyonları sunan metin bileşeni.' :
                 activeComponent === 'glitch-text' ? 'Siberpunk estetiğine uygun, rastgele kayma ve renk bozulması efektli metin.' :
                 activeComponent === 'grid-background' ? 'Modern ve teknik bir görünüm sağlayan, özelleştirilebilir ızgara arka planı.' :
                 activeComponent === 'animated-tabs' ? 'Akıcı geçiş animasyonlarına sahip, punk tarzı modern sekmeler.' :
                 activeComponent === 'bento-grid' ? 'Kaotik ama düzenli, punk estetiğine uygun içerik yerleşim sistemi.' :
                 activeComponent === 'x-ray-card' ? 'Fare hareketiyle alt katmanı ortaya çıkaran interaktif maskeleme efekti.' :
                 activeComponent === 'electric-border' ? 'Hareketli ışık efektli ve siberpunk tarzı elektrikli kenar bileşeni.' :
                 activeComponent === 'glare-hover' ? 'Fare hareketine duyarlı, gerçekçi ışık yansıması ve 3D eğim efekti.' :
                 activeComponent === 'orbit-images' ? 'Merkezi bir nokta etrafında dönen, dinamik görsellerden oluşan yörünge sistemi.' :
                 activeComponent === 'pixel-transition' ? 'İçerikler arasında pikselleşme efektiyle geçiş sağlayan interaktif bileşen.' :
                 activeComponent === 'animated-content' ? 'Görünürlük alanına girdiğinde akıcı bir şekilde beliren animasyonlu içerik wrapperı.' :
                 activeComponent === 'antigravity' ? 'Yerçekimine meydan okuyan, süzülen ve dönen bileşen efekti.' :
                 activeComponent === 'logo-loop' ? 'Sonsuz döngüde kayan logo veya ikon bandı.' :
                 activeComponent === 'target-cursor' ? 'Ekran üzerinde hedefleme yapan gelişmiş siberpunk imleç.' :
                 activeComponent === 'laser-flow' ? 'Sürekli akan, parlayan lazer ışığı çizgileri.' :
                 activeComponent === 'magnet-lines' ? 'Fareyi takip eden manyetik alan çizgileri ızgarası.' :
                 activeComponent === 'ghost-cursor' ? 'Fare hareketlerini takip eden hayalet izler.' :
                 activeComponent === 'gradual-blur' ? 'Metinlerin kademeli olarak netleştiği sinematik efekt.' :
                 activeComponent === 'click-spark' ? 'Tıklama anında oluşan siberpunk kıvılcım efekti.' :
                 activeComponent === 'magnet' ? 'Fareye doğru çekilen interaktif mıknatıs bileşenleri.' :
                 activeComponent === 'color-picker' ? 'Siberpunk paletinden hızlı renk seçimi ve kopyalama aracı.' :
                 activeComponent === 'unit-converter' ? 'Tasarımcılar için hızlı PX to REM dönüşüm modülü.' :
                 activeComponent === 'sticker-peel' ? 'İnteraktif soyulma efektli siberpunk sticker bileşeni.' :
                 activeComponent === 'pixel-trail' ? 'Fare hareketlerini takip eden piksellerden oluşan dijital iz.' :
                 activeComponent === 'cubes' ? 'Sonsuz döngüde dönen 3D siberpunk küpler.' :
                 activeComponent === 'metallic-paint' ? 'Parlayan ve yansıyan metalik boya efektli metin.' :
                 activeComponent === 'noise' ? 'Ekrana siberpunk bir hava katan statik noise efekti.' :
                 activeComponent === 'shape-blur' ? 'Arka planda süzülen ve netleşen amorf şekiller.' :
                 activeComponent === 'crosshair' ? 'Ekranı tarayan ve hedefleme yapan gelişmiş crosshair.' :
                 activeComponent === 'image-trail' ? 'Fareyi takip eden dinamik resim galerisi izi.' :
                 activeComponent === 'ribbons' ? 'Ekranda süzülen parlayan siber şeritler.' :
                 activeComponent === 'splash-cursor' ? 'Tıklama anında oluşan dijital splash efekti.' :
                 activeComponent === 'meta-balls' ? 'Birbirine yapışan ve ayrılan akışkan meta-ball simülasyonu.' :
                 activeComponent === 'blob-cursor' ? 'Şekil değiştiren ve etkileşime giren akışkan imleç.' :
                 activeComponent === 'star-border' ? 'Dönen ışık efektli ve siberpunk tarzı yıldız kenar.' :
                 activeComponent === 'labs' ? 'Dış dünyadan gelen siber sinyaller ve canlı arayüz portalları.' :
                 activeComponent === 'beta' ? 'Deneysel siberpunk protokolleri ve yayınlanmamış arayüz birimleri.' :
                 'Sıradaki projeniz için kuralları yıkan modern UI bileşenleri.'}
              </p>
            </header>

            <section className="space-y-20">
              {/* Preview Area */}
              <div className="relative">
                {activeComponent !== 'labs' && (
                  <>
                    <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-punk-pink z-20"></div>
                    <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-punk-green z-20"></div>
                  </>
                )}
                
                <div className={`relative bg-zinc-900/20 backdrop-blur-sm border-2 border-white/5 flex items-center justify-center overflow-hidden ${activeComponent === 'labs' ? 'p-0 min-h-[800px]' : 'p-12 md:p-24 min-h-[600px]'}`}>
                  {activeComponent === 'scratch-card' && (
                    <ScratchCard width={800} height={450}>
                      <div className="h-full w-full flex flex-col justify-between font-black p-10 bg-gradient-to-br from-zinc-900 to-black relative overflow-hidden">
                        <div className="flex justify-between items-start relative z-10">
                          <div className="flex items-center gap-2">
                            <Zap className="text-punk-pink fill-punk-pink" size={24} />
                            <span className="text-xs tracking-[0.2em] text-punk-pink">SYSTEM_AUTH</span>
                          </div>
                          <span className="text-[10px] text-zinc-500 uppercase tracking-[0.3em]">Nandi_OS // v2.6</span>
                        </div>
                        <div className="flex flex-col items-center justify-center py-6 relative z-10">
                          <h2 className="text-8xl font-black text-white tracking-tighter glitch-text drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">{prize}</h2>
                          <div className="absolute -bottom-2 left-0 w-full h-1 bg-punk-green shadow-[0_0_10px_#00ff00]"></div>
                        </div>
                        <div className="flex justify-between items-end text-[10px] uppercase tracking-[0.4em] relative z-10">
                          <div className="space-y-2">
                            <p className="text-punk-green font-black">ACCESS: GRANTED</p>
                            <p className="text-zinc-400">PRICE_VAL // $750H</p>
                          </div>
                          <div className="text-right text-zinc-400 font-bold">
                            <p>TIMESTAMP</p>
                            <p>04.03.2026 // 22:00</p>
                          </div>
                        </div>
                      </div>
                    </ScratchCard>
                  )}

                  {activeComponent === 'beta' && <Beta />}

                  {activeComponent === 'x-ray-card' && (
                    <XRayCard 
                      topImage="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200"
                      bottomImage="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=1200"
                      width={800}
                      height={500}
                    />
                  )}

                  {activeComponent === 'labs' && (
                    <div className="w-full h-full flex flex-col">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8 bg-black/40 border-b border-white/10">
                        {LABS_SITES.map((site) => (
                          <button
                            key={site.url}
                            onClick={() => setSelectedLab(site.url)}
                            className={`p-4 border-2 transition-all text-left group relative overflow-hidden ${
                              selectedLab === site.url 
                                ? 'border-punk-pink bg-punk-pink/10' 
                                : 'border-white/5 bg-white/5 hover:border-white/20'
                            }`}
                          >
                            <div className="relative z-10">
                              <h3 className={`font-black text-sm tracking-widest uppercase mb-1 ${selectedLab === site.url ? 'text-punk-pink' : 'text-white'}`}>
                                {site.name}
                              </h3>
                              <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">{site.desc}</p>
                            </div>
                            {selectedLab === site.url && (
                              <motion.div 
                                layoutId="lab-active"
                                className="absolute inset-0 bg-punk-pink/5 z-0"
                              />
                            )}
                          </button>
                        ))}
                      </div>
                      <div className="flex-1 relative min-h-[600px] bg-black">
                        <iframe 
                          src={selectedLab} 
                          className="w-full h-full border-none"
                          title="Lab Preview"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                        <div className="absolute top-4 right-4 pointer-events-none">
                          <div className="px-3 py-1 bg-punk-pink text-black font-black text-[10px] tracking-[0.3em] uppercase skew-x-[-12deg]">
                            LIVE_PORTAL // ACTIVE
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeComponent === 'split-text' && (
                    <div className="flex flex-col items-center gap-8">
                      <SplitText text="GELECEĞİ KODLA" className="text-7xl font-black text-white" />
                      <SplitText text="SİBERPUNK UI KİT" className="text-2xl font-bold text-punk-pink italic" delay={0.5} />
                    </div>
                  )}

                  {activeComponent === 'glitch-text' && (
                    <div className="flex flex-col items-center gap-12">
                      <GlitchText text="SİSTEM HATASI" className="text-8xl" />
                      <GlitchText text="ERİŞİM ENGELLENDİ" className="text-4xl text-punk-green" />
                    </div>
                  )}

                  {activeComponent === 'grid-background' && (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="p-12 border-2 border-punk-pink bg-black/80 backdrop-blur-xl relative">
                        <div className="absolute -top-4 -left-4 w-8 h-8 bg-punk-pink"></div>
                        <p className="text-punk-pink font-black tracking-widest">ARKA PLAN AKTİF</p>
                      </div>
                    </div>
                  )}

                  {activeComponent === 'animated-tabs' && (
                    <div className="flex flex-col items-center gap-12">
                      <AnimatedTabs 
                        tabs={[
                          { id: 'tab1', label: 'ERİŞİM' },
                          { id: 'tab2', label: 'GÜVENLİK' },
                          { id: 'tab3', label: 'AYARLAR' }
                        ]}
                        activeTab={activeTab}
                        onChange={setActiveTab}
                      />
                      <div className="p-12 border-2 border-white/10 bg-zinc-900/50 min-w-[400px] text-center">
                        <p className="text-zinc-500 font-bold uppercase tracking-widest">
                          {activeTab === 'tab1' ? 'ERİŞİM PANELİ AKTİF' :
                           activeTab === 'tab2' ? 'GÜVENLİK PROTOKOLLERİ ÇALIŞIYOR' :
                           'SİSTEM AYARLARI YÜKLENİYOR'}
                        </p>
                      </div>
                    </div>
                  )}

                  {activeComponent === 'bento-grid' && (
                    <BentoGrid className="w-full">
                      {bentoItems.map((item, i) => (
                        <BentoGridItem
                          key={i}
                          title={item.title}
                          description={item.description}
                          header={item.header}
                          icon={item.icon}
                          className={i === 0 ? "md:col-span-2 punk-border" : "punk-border-green"}
                        />
                      ))}
                    </BentoGrid>
                  )}

                  {activeComponent === 'electric-border' && (
                    <ElectricBorder className="w-[400px] h-[200px]">
                      <div className="flex items-center justify-center h-full text-punk-blue font-black tracking-widest uppercase">
                        Siber Güvenlik Aktif
                      </div>
                    </ElectricBorder>
                  )}

                  {activeComponent === 'glare-hover' && (
                    <GlareHover className="w-[400px] h-[500px]">
                      <div className="p-8 h-full flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                          <Zap className="text-punk-pink" size={32} />
                          <div className="text-right">
                            <p className="text-[10px] text-zinc-500 font-bold uppercase">ID_CARD // v4.0</p>
                            <p className="text-sm font-black text-white">USER_077</p>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="h-1 bg-white/10 w-full"></div>
                          <h3 className="text-4xl font-black text-white italic tracking-tighter">NEON_CITIZEN</h3>
                        </div>
                      </div>
                    </GlareHover>
                  )}

                  {activeComponent === 'orbit-images' && (
                    <OrbitImages 
                      images={[
                        "https://picsum.photos/seed/1/100/100",
                        "https://picsum.photos/seed/2/100/100",
                        "https://picsum.photos/seed/3/100/100",
                        "https://picsum.photos/seed/4/100/100",
                        "https://picsum.photos/seed/5/100/100",
                        "https://picsum.photos/seed/6/100/100",
                      ]}
                      centerImage="https://picsum.photos/seed/cyberpunk/200/200"
                    />
                  )}

                  {activeComponent === 'pixel-transition' && (
                    <div className="w-[600px] h-[400px]">
                      <PixelTransition 
                        firstContent={
                          <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
                            <h3 className="text-4xl font-black text-white italic">KATMAN_01</h3>
                          </div>
                        }
                        secondContent={
                          <div className="w-full h-full bg-punk-pink/20 flex items-center justify-center border-4 border-punk-pink">
                            <h3 className="text-4xl font-black text-punk-pink italic">KATMAN_02</h3>
                          </div>
                        }
                      />
                    </div>
                  )}

                  {activeComponent === 'sticker-peel' && (
                    <StickerPeel className="w-[400px] h-[400px]">
                      <div className="text-center">
                        <h3 className="text-3xl font-black text-punk-green mb-2 tracking-tighter">ERİŞİM_KODU</h3>
                        <p className="text-white font-mono text-2xl tracking-[0.5em] bg-black/50 px-4 py-2 border border-punk-green/30">X-77-PUNK</p>
                      </div>
                    </StickerPeel>
                  )}

                  {activeComponent === 'pixel-trail' && (
                    <div className="flex flex-col items-center gap-4">
                      <PixelTrail />
                      <p className="text-punk-pink font-black tracking-[0.3em] animate-pulse bg-black/80 px-6 py-3 border-2 border-punk-pink/50 skew-x-[-12deg]">
                        FARE_TAKİBİ_AKTİF // PİKSEL_İZİ
                      </p>
                    </div>
                  )}

                  {activeComponent === 'cubes' && <Cubes />}

                  {activeComponent === 'metallic-paint' && (
                    <div className="flex flex-col items-center gap-12 w-full max-w-4xl">
                      <div className="flex flex-col items-center gap-4">
                        <MetallicPaint 
                          text={metallicText} 
                          fontSize={metallicFontSize} 
                          glowColor={metallicGlowColor} 
                        />
                      </div>

                      <div className="flex flex-col items-center gap-6 w-full">
                        <button 
                          onClick={() => setIsEditingMetallic(!isEditingMetallic)}
                          className="px-8 py-4 bg-zinc-900 border-2 border-punk-pink/50 text-punk-pink font-black tracking-[0.3em] uppercase hover:bg-punk-pink hover:text-black transition-all duration-300 flex items-center gap-3 group"
                        >
                          <Wrench size={20} className="group-hover:rotate-45 transition-transform" />
                          BU YAZIYI MODİFİYE ET
                        </button>

                        <AnimatePresence>
                          {isEditingMetallic && (
                            <motion.div 
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 20 }}
                              className="w-full p-8 bg-black/80 border-2 border-white/10 backdrop-blur-xl grid grid-cols-1 md:grid-cols-3 gap-8"
                            >
                              <div className="space-y-4">
                                <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Metin İçeriği</label>
                                <input 
                                  type="text" 
                                  value={metallicText}
                                  onChange={(e) => setMetallicText(e.target.value)}
                                  className="w-full bg-zinc-900 border border-white/10 p-4 text-white font-black uppercase tracking-widest focus:border-punk-pink outline-none"
                                />
                              </div>
                              <div className="space-y-4">
                                <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Yazı Boyutu</label>
                                <select 
                                  value={metallicFontSize}
                                  onChange={(e) => setMetallicFontSize(e.target.value)}
                                  className="w-full bg-zinc-900 border border-white/10 p-4 text-white font-black uppercase tracking-widest focus:border-punk-pink outline-none"
                                >
                                  <option value="text-4xl">KÜÇÜK</option>
                                  <option value="text-6xl">ORTA</option>
                                  <option value="text-8xl">BÜYÜK</option>
                                  <option value="text-[12rem]">DEVASA</option>
                                </select>
                              </div>
                              <div className="space-y-4">
                                <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Parlama Rengi</label>
                                <div className="flex gap-4">
                                  <input 
                                    type="color" 
                                    value={metallicGlowColor}
                                    onChange={(e) => setMetallicGlowColor(e.target.value)}
                                    className="w-16 h-16 bg-transparent border-none cursor-pointer"
                                  />
                                  <input 
                                    type="text" 
                                    value={metallicGlowColor}
                                    onChange={(e) => setMetallicGlowColor(e.target.value)}
                                    className="flex-1 bg-zinc-900 border border-white/10 p-4 text-white font-mono uppercase tracking-widest focus:border-punk-pink outline-none"
                                  />
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  )}

                  {activeComponent === 'noise' && (
                    <div className="flex flex-col items-center gap-4">
                      <Noise />
                      <div className="p-12 border-2 border-white/10 bg-black/50 backdrop-blur-sm relative overflow-hidden group">
                        <div className="absolute inset-0 bg-punk-pink/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <p className="text-white font-black tracking-[0.5em] relative z-10">STATİK_GÜRÜLTÜ_PROTOKOLÜ</p>
                      </div>
                    </div>
                  )}

                  {activeComponent === 'shape-blur' && <ShapeBlur />}

                  {activeComponent === 'crosshair' && (
                    <div className="flex flex-col items-center gap-4">
                      <Crosshair />
                      <p className="text-punk-pink font-black tracking-[0.3em] bg-black/80 px-6 py-3 border-2 border-punk-pink/50">
                        HEDEFLEME_SİSTEMİ_ÇEVRİMİÇİ
                      </p>
                    </div>
                  )}

                  {activeComponent === 'image-trail' && (
                    <div className="flex flex-col items-center gap-4">
                      <ImageTrail />
                      <p className="text-punk-pink font-black tracking-[0.3em] bg-black/80 px-6 py-3 border-2 border-punk-pink/50 skew-x-[-12deg]">
                        GÖRSEL_BELLEK_İZİ // ACTIVE
                      </p>
                    </div>
                  )}

                  {activeComponent === 'ribbons' && (
                    <div className="flex flex-col items-center gap-4">
                      <Ribbons />
                      <p className="text-punk-green font-black tracking-[0.3em] bg-black/80 px-6 py-3 border-2 border-punk-green/50">
                        SİBER_ŞERİT_AKIŞI
                      </p>
                    </div>
                  )}

                  {activeComponent === 'splash-cursor' && (
                    <div className="flex flex-col items-center gap-4">
                      <SplashCursor />
                      <p className="text-punk-blue font-black tracking-[0.3em] bg-black/80 px-6 py-3 border-2 border-punk-blue/50 skew-x-[-12deg]">
                        TIKLAMA_TEPKİSİ_AKTİF
                      </p>
                    </div>
                  )}

                  {activeComponent === 'meta-balls' && <MetaBalls />}

                  {activeComponent === 'blob-cursor' && (
                    <div className="flex flex-col items-center gap-4">
                      <BlobCursor />
                      <p className="text-white font-black tracking-[0.3em] bg-black/80 px-6 py-3 border-2 border-white/20">
                        AKIŞKAN_İMLEÇ_AKTİF
                      </p>
                    </div>
                  )}

                  {activeComponent === 'star-border' && (
                    <StarBorder className="w-[400px] h-[200px]">
                      <div className="text-center">
                        <h3 className="text-2xl font-black text-white mb-2 tracking-tighter">PREMIUM_ACCESS</h3>
                        <p className="text-punk-pink font-bold italic tracking-widest">VIP_SİSTEM_AKTİF</p>
                      </div>
                    </StarBorder>
                  )}

                  {activeComponent === 'u-pro-card' && <ProCard />}
                  {activeComponent === 'u-star-banner' && <StarBanner />}
                  {activeComponent === 'u-car-anim' && <CarAnimation />}
                  {activeComponent === 'u-mastercard' && <MasterCard />}
                  {activeComponent === 'u-hoodie-card' && <HoodieCard />}
                  {activeComponent === 'u-astro-card' && <AstronautCard />}
                  {activeComponent === 'u-truck-anim' && <TruckAnimation />}
                  {activeComponent === 'u-phone-card-1' && <PhoneCard1 />}
                  {activeComponent === 'u-phone-card-2' && <PhoneCard2 />}
                  {activeComponent === 'u-social-squircle' && <SocialSquircle />}
                  {activeComponent === 'u-transaction-card' && <TransactionCard />}
                  {activeComponent === 'u-3d-ui-card' && <ThreeDCard />}
                  {activeComponent === 'u-spot' && <Spot />}

                  {activeComponent === 'animated-content' && (
                    <div className="flex flex-col gap-8">
                      <AnimatedContent delay={0.1}>
                        <div className="p-8 bg-zinc-900 border border-white/10 rounded-xl">
                          <h3 className="text-2xl font-black text-white mb-2">MODÜL_01</h3>
                          <p className="text-zinc-500 text-sm">Sistem verileri yükleniyor...</p>
                        </div>
                      </AnimatedContent>
                      <AnimatedContent delay={0.3} direction="horizontal">
                        <div className="p-8 bg-zinc-900 border border-white/10 rounded-xl">
                          <h3 className="text-2xl font-black text-white mb-2">MODÜL_02</h3>
                          <p className="text-zinc-500 text-sm">Ağ bağlantısı kuruldu.</p>
                        </div>
                      </AnimatedContent>
                      <AnimatedContent delay={0.5} reverse>
                        <div className="p-8 bg-zinc-900 border border-white/10 rounded-xl">
                          <h3 className="text-2xl font-black text-white mb-2">MODÜL_03</h3>
                          <p className="text-zinc-500 text-sm">Erişim yetkisi onaylandı.</p>
                        </div>
                      </AnimatedContent>
                    </div>
                  )}

                  {activeComponent === 'antigravity' && (
                    <Antigravity amplitude={30} duration={4}>
                      <div className="p-16 bg-gradient-to-br from-punk-pink/20 to-punk-blue/20 border-2 border-white/10 backdrop-blur-xl rounded-3xl flex flex-col items-center gap-6 shadow-[0_0_50px_rgba(255,46,99,0.2)]">
                        <Zap className="text-punk-pink fill-punk-pink" size={64} />
                        <h3 className="text-4xl font-black text-white italic tracking-tighter">ANTIGRAVITY_CORE</h3>
                        <div className="px-4 py-1 bg-punk-green text-black font-black text-[10px] tracking-widest uppercase">Stable_Orbit</div>
                      </div>
                    </Antigravity>
                  )}

                  {activeComponent === 'logo-loop' && (
                    <div className="w-full max-w-4xl">
                      <LogoLoop 
                        logos={[
                          <Zap size={40} className="text-punk-pink" />,
                          <Monitor size={40} className="text-punk-blue" />,
                          <Terminal size={40} className="text-punk-green" />,
                          <Box size={40} className="text-white" />,
                          <Sparkles size={40} className="text-punk-pink" />,
                          <LayoutGrid size={40} className="text-punk-blue" />,
                        ]} 
                      />
                    </div>
                  )}

                  {activeComponent === 'target-cursor' && (
                    <div className="flex flex-col items-center gap-6">
                      <TargetCursor />
                      <p className="text-zinc-500 font-bold uppercase tracking-[0.3em] animate-pulse">Hedefleme Sistemi Aktif</p>
                      <div className="p-8 border-2 border-dashed border-punk-pink/30 text-punk-pink font-black italic">
                        EKRANDA GEZİNİN
                      </div>
                    </div>
                  )}

                  {activeComponent === 'laser-flow' && (
                    <div className="w-full flex flex-col gap-12">
                      <LaserFlow color="#FF2E63" duration={1.5} />
                      <LaserFlow color="#08D9D6" duration={2.5} />
                      <LaserFlow color="#00FF00" duration={3.5} />
                    </div>
                  )}

                  {activeComponent === 'magnet-lines' && (
                    <div className="w-full max-w-4xl border-2 border-white/5 bg-black/40">
                      <MagnetLines />
                    </div>
                  )}

                  {activeComponent === 'ghost-cursor' && (
                    <div className="flex flex-col items-center gap-6">
                      <GhostCursor />
                      <p className="text-zinc-500 font-bold uppercase tracking-[0.3em] animate-pulse">Hayalet İzleyici Aktif</p>
                      <div className="p-8 border-2 border-punk-pink/20 text-punk-pink font-black italic">
                        FAREYİ HAREKET ETTİRİN
                      </div>
                    </div>
                  )}

                  {activeComponent === 'gradual-blur' && (
                    <div className="max-w-2xl text-center">
                      <GradualBlur text="GELECEĞİN SİBERPUNK ARAYÜZLERİNİ BUGÜNDEN İNŞA EDİN" />
                    </div>
                  )}

                  {activeComponent === 'click-spark' && (
                    <div className="flex flex-col items-center gap-6">
                      <ClickSpark />
                      <p className="text-zinc-500 font-bold uppercase tracking-[0.3em] animate-pulse">Kıvılcım Modülü Aktif</p>
                      <button className="px-12 py-6 bg-punk-pink text-black font-black text-2xl uppercase skew-x-[-12deg] hover:scale-110 transition-transform">
                        BURAYA TIKLA
                      </button>
                    </div>
                  )}

                  {activeComponent === 'magnet' && (
                    <div className="flex gap-12">
                      <Magnet strength={50}>
                        <div className="w-32 h-32 bg-punk-pink flex items-center justify-center font-black text-black text-xl skew-x-[-12deg]">PUNK</div>
                      </Magnet>
                      <Magnet strength={80}>
                        <div className="w-32 h-32 bg-punk-blue flex items-center justify-center font-black text-black text-xl skew-x-[-12deg]">CORE</div>
                      </Magnet>
                      <Magnet strength={120}>
                        <div className="w-32 h-32 bg-punk-green flex items-center justify-center font-black text-black text-xl skew-x-[-12deg]">TECH</div>
                      </Magnet>
                    </div>
                  )}

                  {activeComponent === 'color-picker' && (
                    <div className="p-12 bg-zinc-900 border-2 border-white/10 rounded-3xl flex flex-col gap-8 w-full max-w-md">
                      <h3 className="text-2xl font-black text-white tracking-tighter italic">SİBER_RENK_SEÇİCİ</h3>
                      <div className="grid grid-cols-4 gap-4">
                        {['#FF2E63', '#08D9D6', '#00FF00', '#FFFFFF', '#FFD700', '#8A2BE2', '#FF4500', '#1E90FF'].map(c => (
                          <button 
                            key={c}
                            onClick={() => navigator.clipboard.writeText(c)}
                            className="w-full aspect-square border-2 border-white/10 hover:border-white transition-colors flex items-center justify-center group"
                            style={{ backgroundColor: c }}
                          >
                            <span className="text-[8px] font-black text-black opacity-0 group-hover:opacity-100 uppercase">Kopyala</span>
                          </button>
                        ))}
                      </div>
                      <div className="p-4 bg-black/40 border border-white/5 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                        Renk koduna tıklayarak kopyalayabilirsiniz.
                      </div>
                    </div>
                  )}

                  {activeComponent === 'unit-converter' && (
                    <div className="p-12 bg-zinc-900 border-2 border-white/10 rounded-3xl flex flex-col gap-8 w-full max-w-md">
                      <h3 className="text-2xl font-black text-white tracking-tighter italic">BİRİM_DÖNÜŞTÜRÜCÜ</h3>
                      <div className="space-y-4">
                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-black text-punk-pink uppercase tracking-widest">Piksel (PX)</label>
                          <input type="number" defaultValue={16} className="bg-black/40 border border-white/10 p-3 text-white font-black focus:outline-none focus:border-punk-pink" />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-black text-punk-blue uppercase tracking-widest">REM</label>
                          <input type="text" value="1rem" readOnly className="bg-black/40 border border-white/10 p-3 text-zinc-500 font-black" />
                        </div>
                      </div>
                      <div className="p-4 bg-punk-pink/5 border border-punk-pink/20 text-[10px] font-bold text-punk-pink uppercase tracking-widest">
                        Standart 16px baz alınmıştır.
                      </div>
                    </div>
                  )}

                  {activeComponent === 'windows-12' && (
                    <Windows12 />
                  )}
                  
                  {['glass-button', 'follow-mouse'].includes(activeComponent) && (
                    <div className="flex flex-col items-center gap-6">
                      <div className="w-20 h-20 border-4 border-punk-pink border-t-transparent animate-spin"></div>
                      <div className="text-punk-pink font-black tracking-[0.5em] uppercase animate-pulse">
                        Veri Yükleniyor...
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Code Area */}
              <div className="relative space-y-12">
                {activeComponent !== 'labs' && (
                  activeComponent === 'scratch-card' ? (
                    <>
                      {/* CLI Section */}
                      <div className="relative">
                        <div className="flex items-center gap-4 mb-8">
                          <div className="h-[1px] flex-1 bg-zinc-800"></div>
                          <h3 className="text-sm font-black uppercase tracking-[0.5em] text-zinc-100 flex items-center gap-2">
                            <span className="text-punk-pink">&gt;_</span> CLI
                          </h3>
                        </div>
                        <CodePreview code={SCRATCH_CARD_CLI} language="bash" />
                      </div>

                      {/* Usage Section */}
                      <div className="relative">
                        <div className="flex items-center gap-4 mb-8">
                          <div className="h-[1px] flex-1 bg-zinc-800"></div>
                          <h3 className="text-sm font-black uppercase tracking-[0.5em] text-zinc-100 flex items-center gap-2">
                            <span className="text-punk-pink">&gt;_</span> Usage
                          </h3>
                        </div>
                        <CodePreview code={SCRATCH_CARD_USAGE} language="tsx" />
                      </div>

                      {/* Code Section */}
                      <div className="relative">
                        <div className="flex items-center gap-4 mb-8">
                          <div className="h-[1px] flex-1 bg-zinc-800"></div>
                          <h3 className="text-sm font-black uppercase tracking-[0.5em] text-zinc-100 flex items-center gap-2">
                            <span className="text-punk-pink">&gt;_</span> Code
                          </h3>
                        </div>
                        <CodePreview code={SCRATCH_CARD_CODE} language="tsx" />
                      </div>

                      {/* CSS Section */}
                      <div className="relative">
                        <div className="flex items-center gap-4 mb-8">
                          <div className="h-[1px] flex-1 bg-zinc-800"></div>
                          <h3 className="text-sm font-black uppercase tracking-[0.5em] text-zinc-100 flex items-center gap-2">
                            <span className="text-punk-pink">&gt;_</span> CSS
                          </h3>
                        </div>
                        <CodePreview code={SCRATCH_CARD_CSS} language="css" />
                      </div>
                    </>
                  ) : activeComponent === 'electric-border' ? (
                    <div className="relative">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="h-[1px] flex-1 bg-zinc-800"></div>
                        <h3 className="text-sm font-black uppercase tracking-[0.5em] text-zinc-100 flex items-center gap-2">
                          <span className="text-punk-pink">&gt;_</span> Code
                        </h3>
                      </div>
                      <CodePreview code={ELECTRIC_BORDER_CODE} language="tsx" />
                    </div>
                  ) : activeComponent === 'glare-hover' ? (
                    <div className="relative">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="h-[1px] flex-1 bg-zinc-800"></div>
                        <h3 className="text-sm font-black uppercase tracking-[0.5em] text-zinc-100 flex items-center gap-2">
                          <span className="text-punk-pink">&gt;_</span> Code
                        </h3>
                      </div>
                      <CodePreview code={GLARE_HOVER_CODE} language="tsx" />
                    </div>
                  ) : activeComponent === 'orbit-images' ? (
                    <div className="relative">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="h-[1px] flex-1 bg-zinc-800"></div>
                        <h3 className="text-sm font-black uppercase tracking-[0.5em] text-zinc-100 flex items-center gap-2">
                          <span className="text-punk-pink">&gt;_</span> Code
                        </h3>
                      </div>
                      <CodePreview code={ORBIT_IMAGES_CODE} language="tsx" />
                    </div>
                  ) : activeComponent === 'pixel-transition' ? (
                    <div className="relative">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="h-[1px] flex-1 bg-zinc-800"></div>
                        <h3 className="text-sm font-black uppercase tracking-[0.5em] text-zinc-100 flex items-center gap-2">
                          <span className="text-punk-pink">&gt;_</span> Code
                        </h3>
                      </div>
                      <CodePreview code={PIXEL_TRANSITION_CODE} language="tsx" />
                    </div>
                  ) : activeComponent === 'animated-content' ? (
                    <div className="relative">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="h-[1px] flex-1 bg-zinc-800"></div>
                        <h3 className="text-sm font-black uppercase tracking-[0.5em] text-zinc-100 flex items-center gap-2">
                          <span className="text-punk-pink">&gt;_</span> Code
                        </h3>
                      </div>
                      <CodePreview code={ANIMATED_CONTENT_CODE} language="tsx" />
                    </div>
                  ) : activeComponent === 'antigravity' ? (
                    <div className="relative">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="h-[1px] flex-1 bg-zinc-800"></div>
                        <h3 className="text-sm font-black uppercase tracking-[0.5em] text-zinc-100 flex items-center gap-2">
                          <span className="text-punk-pink">&gt;_</span> Code
                        </h3>
                      </div>
                      <CodePreview code={ANTIGRAVITY_CODE} language="tsx" />
                    </div>
                  ) : activeComponent === 'logo-loop' ? (
                    <div className="relative">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="h-[1px] flex-1 bg-zinc-800"></div>
                        <h3 className="text-sm font-black uppercase tracking-[0.5em] text-zinc-100 flex items-center gap-2">
                          <span className="text-punk-pink">&gt;_</span> Code
                        </h3>
                      </div>
                      <CodePreview code={LOGO_LOOP_CODE} language="tsx" />
                    </div>
                  ) : activeComponent === 'target-cursor' ? (
                    <div className="relative">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="h-[1px] flex-1 bg-zinc-800"></div>
                        <h3 className="text-sm font-black uppercase tracking-[0.5em] text-zinc-100 flex items-center gap-2">
                          <span className="text-punk-pink">&gt;_</span> Code
                        </h3>
                      </div>
                      <CodePreview code={TARGET_CURSOR_CODE} language="tsx" />
                    </div>
                  ) : activeComponent === 'laser-flow' ? (
                    <div className="relative">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="h-[1px] flex-1 bg-zinc-800"></div>
                        <h3 className="text-sm font-black uppercase tracking-[0.5em] text-zinc-100 flex items-center gap-2">
                          <span className="text-punk-pink">&gt;_</span> Code
                        </h3>
                      </div>
                      <CodePreview code={LASER_FLOW_CODE} language="tsx" />
                    </div>
                  ) : activeComponent === 'magnet-lines' ? (
                    <div className="relative">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="h-[1px] flex-1 bg-zinc-800"></div>
                        <h3 className="text-sm font-black uppercase tracking-[0.5em] text-zinc-100 flex items-center gap-2">
                          <span className="text-punk-pink">&gt;_</span> Code
                        </h3>
                      </div>
                      <CodePreview code={MAGNET_LINES_CODE} language="tsx" />
                    </div>
                  ) : activeComponent === 'ghost-cursor' ? (
                    <div className="relative">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="h-[1px] flex-1 bg-zinc-800"></div>
                        <h3 className="text-sm font-black uppercase tracking-[0.5em] text-zinc-100 flex items-center gap-2">
                          <span className="text-punk-pink">&gt;_</span> Code
                        </h3>
                      </div>
                      <CodePreview code={GHOST_CURSOR_CODE} language="tsx" />
                    </div>
                  ) : activeComponent === 'gradual-blur' ? (
                    <div className="relative">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="h-[1px] flex-1 bg-zinc-800"></div>
                        <h3 className="text-sm font-black uppercase tracking-[0.5em] text-zinc-100 flex items-center gap-2">
                          <span className="text-punk-pink">&gt;_</span> Code
                        </h3>
                      </div>
                      <CodePreview code={GRADUAL_BLUR_CODE} language="tsx" />
                    </div>
                  ) : activeComponent === 'click-spark' ? (
                    <div className="relative">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="h-[1px] flex-1 bg-zinc-800"></div>
                        <h3 className="text-sm font-black uppercase tracking-[0.5em] text-zinc-100 flex items-center gap-2">
                          <span className="text-punk-pink">&gt;_</span> Code
                        </h3>
                      </div>
                      <CodePreview code={CLICK_SPARK_CODE} language="tsx" />
                    </div>
                  ) : activeComponent === 'magnet' ? (
                    <div className="relative">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="h-[1px] flex-1 bg-zinc-800"></div>
                        <h3 className="text-sm font-black uppercase tracking-[0.5em] text-zinc-100 flex items-center gap-2">
                          <span className="text-punk-pink">&gt;_</span> Code
                        </h3>
                      </div>
                      <CodePreview code={MAGNET_CODE} language="tsx" />
                    </div>
                  ) : (
                    <div className="relative">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="h-[1px] flex-1 bg-zinc-800"></div>
                        <h3 className="text-sm font-black uppercase tracking-[0.5em] text-zinc-100 flex items-center gap-2">
                          <span className="text-punk-pink">&gt;_</span> Code
                        </h3>
                      </div>
                      <div className="flex gap-2 mb-4">
                        <div className="px-3 py-1 bg-zinc-900 border border-white/10 text-[10px] font-bold text-zinc-400 flex items-center gap-2">
                          TSX TypeScript <ChevronRight size={10} className="rotate-90" />
                        </div>
                      </div>
                      <CodePreview 
                        code={
                          activeComponent === 'split-text' ? SPLIT_TEXT_CODE :
                          activeComponent === 'glitch-text' ? GLITCH_TEXT_CODE :
                          activeComponent === 'animated-tabs' ? ANIMATED_TABS_CODE :
                          activeComponent === 'grid-background' ? GRID_BACKGROUND_CODE :
                          activeComponent === 'bento-grid' ? BENTO_GRID_CODE :
                          activeComponent === 'x-ray-card' ? X_RAY_CARD_CODE :
                          activeComponent === 'beta' ? BETA_CODE :
                          activeComponent === 'windows-12' ? WINDOWS_12_CODE :
                          activeComponent === 'antigravity' ? ANTIGRAVITY_CODE :
                          activeComponent === 'logo-loop' ? LOGO_LOOP_CODE :
                          activeComponent === 'sticker-peel' ? STICKER_PEEL_CODE :
                          activeComponent === 'pixel-trail' ? PIXEL_TRAIL_CODE :
                          activeComponent === 'cubes' ? CUBES_CODE :
                          activeComponent === 'metallic-paint' ? METALLIC_PAINT_CODE :
                          activeComponent === 'noise' ? NOISE_CODE :
                          activeComponent === 'shape-blur' ? SHAPE_BLUR_CODE :
                          activeComponent === 'crosshair' ? CROSSHAIR_CODE :
                          activeComponent === 'image-trail' ? IMAGE_TRAIL_CODE :
                          activeComponent === 'ribbons' ? RIBBONS_CODE :
                          activeComponent === 'splash-cursor' ? SPLASH_CURSOR_CODE :
                          activeComponent === 'meta-balls' ? META_BALLS_CODE :
                          activeComponent === 'blob-cursor' ? BLOB_CURSOR_CODE :
                          activeComponent === 'star-border' ? STAR_BORDER_CODE :
                          activeComponent === 'u-pro-card' ? UIVERSE_PRO_CODE :
                          activeComponent === 'u-star-banner' ? UIVERSE_STAR_CODE :
                          activeComponent === 'u-car-anim' ? UIVERSE_CAR_CODE :
                          activeComponent === 'u-mastercard' ? UIVERSE_MASTERCARD_CODE :
                          activeComponent === 'u-hoodie-card' ? UIVERSE_HOODIE_CODE :
                          activeComponent === 'u-astro-card' ? UIVERSE_ASTRO_CODE :
                          activeComponent === 'u-truck-anim' ? UIVERSE_TRUCK_CODE :
                          activeComponent === 'u-phone-card-1' ? UIVERSE_PHONE1_CODE :
                          activeComponent === 'u-phone-card-2' ? UIVERSE_PHONE2_CODE :
                          activeComponent === 'u-social-squircle' ? UIVERSE_SQUIRCLE_CODE :
                          activeComponent === 'u-transaction-card' ? UIVERSE_TRANSACTION_CODE :
                          activeComponent === 'u-3d-ui-card' ? UIVERSE_3D_CODE :
                          activeComponent === 'u-spot' ? UIVERSE_SPOT_CODE :
                          '// Bu bileşen için kod yakında eklenecek...'
                        } 
                        language={activeComponent.startsWith('u-') ? 'html' : 'tsx'}
                      />
                    </div>
                  )
                )}
              </div>
            </section>

            <footer className="mt-40 pb-20 border-t-2 border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-black skew-x-[-12deg]">VG</div>
                <p className="text-xs font-black text-zinc-600 tracking-[0.2em] uppercase">
                  &copy; 2026 VER-G // SİBERPUNK UI KİT
                </p>
              </div>
              <div className="flex gap-8">
                <a href="#" className="text-[10px] font-black text-zinc-600 hover:text-punk-pink tracking-[0.3em] uppercase transition-colors">Github</a>
                <a href="#" className="text-[10px] font-black text-zinc-600 hover:text-punk-green tracking-[0.3em] uppercase transition-colors">Discord</a>
                <a href="#" className="text-[10px] font-black text-zinc-600 hover:text-punk-blue tracking-[0.3em] uppercase transition-colors">Twitter</a>
              </div>
            </footer>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
