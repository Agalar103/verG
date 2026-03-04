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
import { Zap, Signature, ChevronRight, Terminal, MousePointer2, Box, Monitor } from 'lucide-react';
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

const LABS_SITES = [
  { name: 'Mockly', url: 'https://www.getmockly.com/', desc: 'Mockup Design Tool' },
  { name: 'Monitor Situation', url: 'https://monitor-the-situation.com/eastern-europe', desc: 'Eastern Europe Monitoring' },
  { name: 'Vercel Triangle', url: 'https://vercel-triangle-psi.vercel.app/', desc: 'Cullen Webber Sketch' },
  { name: 'Slow Roads', url: 'https://slowroads.io/#O0-68bc78a0@0', desc: 'Chill Driving Sim' },
  { name: 'Shopify BFCM', url: 'https://bfcm.shopify.com/', desc: 'Black Friday Cyber Monday' },
];

export default function App() {
  const [activeComponent, setActiveComponent] = useState('scratch-card');
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
      <Sidebar activeId={activeComponent} onSelect={setActiveComponent} />
      
      <main className="flex-1 p-12 max-w-6xl mx-auto relative">
        <GridBackground />
        
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
                 activeComponent === 'x-ray-card' ? 'X-RAY TARAYICI' :
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
                          '// Bu bileşen için kod yakında eklenecek...'
                        } 
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
