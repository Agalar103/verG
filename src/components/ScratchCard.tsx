import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { RefreshCw, ShieldAlert, Cpu, Zap, MousePointer2 } from 'lucide-react';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ScratchCardProps {
  children: React.ReactNode;
  className?: string;
  width?: number;
  height?: number;
  scratchRadius?: number;
}

export const ScratchCard: React.FC<ScratchCardProps> = ({
  children,
  className,
  width = 800,
  height = 450,
  scratchRadius = 35,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScratching, setIsScratching] = useState(false);
  const [isMouseIn, setIsMouseIn] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);

  // 3D Tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);
  
  const flipRotation = useSpring(isFlipped ? 180 : 0, { stiffness: 100, damping: 20 });
  const rotateYCombined = useTransform([rotateY, flipRotation], ([ry, f]) => {
    const ryNum = parseFloat(ry as string);
    return `${ryNum + (f as number)}deg`;
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    
    x.set(xPct);
    y.set(yPct);

    if (isScratching) {
      scratch(e.clientX, e.clientY);
    }
  };

  const handleMouseEnter = () => setIsMouseIn(true);
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsScratching(false);
    setIsMouseIn(false);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsScratching(true);
    scratch(e.clientX, e.clientY);
  };

  const handleMouseUp = () => setIsScratching(false);

  const scratch = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = (clientX - rect.left) * (canvas.width / rect.width);
    const y = (clientY - rect.top) * (canvas.height / rect.height);
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, scratchRadius, 0, Math.PI * 2);
    ctx.fill();
  };

  const handleFlip = () => {
    setIsGlitching(true);
    setIsFlipped(!isFlipped);
    setTimeout(() => setIsGlitching(false), 500);
  };

  useEffect(() => {
    flipRotation.set(isFlipped ? 180 : 0);
  }, [isFlipped, flipRotation]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Background
    ctx.fillStyle = '#1a1a1a';
    ctx.fillRect(0, 0, width, height);

    // Pattern
    ctx.strokeStyle = 'rgba(255, 0, 255, 0.15)';
    ctx.lineWidth = 1;
    for (let i = 0; i < width; i += 20) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, height);
      ctx.stroke();
    }
    for (let i = 0; i < height; i += 20) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(width, i);
      ctx.stroke();
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
    
    ctx.font = '16px "Space Grotesk"';
    ctx.fillStyle = '#ff00ff';
    ctx.fillText('SİBERPUNK ÖZEL SERİ // 2026', width / 2, height / 2 + 40);

    // Border details
    ctx.strokeStyle = '#ff00ff';
    ctx.lineWidth = 2;
    ctx.strokeRect(10, 10, width - 20, height - 20);
    
    ctx.strokeStyle = '#00ffff';
    ctx.lineWidth = 1;
    ctx.strokeRect(15, 15, width - 30, height - 30);

  }, [width, height]);

  return (
    <div className="perspective-[2000px] w-full flex flex-col items-center gap-8">
      <div className="relative group">
        <motion.div
          ref={containerRef}
          style={{
            rotateX,
            rotateY: rotateYCombined,
            transformStyle: "preserve-3d",
            width: width + 16, // Add border width
            height: height + 16, // Add border width
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          className={cn(
            "relative cursor-none rounded-3xl border-8 border-white/10 bg-zinc-950 shadow-2xl transition-shadow duration-500 overflow-hidden",
            isFlipped ? "shadow-cyan-500/20" : "shadow-purple-500/20",
            className
          )}
        >
          {/* Front Side */}
          <motion.div 
            className="absolute inset-0 w-full h-full"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="absolute inset-0 flex items-center justify-center bg-[#050505] z-0">
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
              {children}
            </div>

            <canvas
              ref={canvasRef}
              width={width}
              height={height}
              className="relative z-10 touch-none block"
            />
          </motion.div>

          {/* Back Side (Credit Card Design) */}
          <motion.div 
            className="absolute inset-0 w-full h-full bg-zinc-900 flex flex-col p-10 font-mono overflow-hidden"
            style={{ 
              backfaceVisibility: "hidden",
              rotateY: 180,
              background: "linear-gradient(135deg, #0f172a 0%, #020617 100%)"
            }}
          >
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            
            {/* Magnetic Stripe */}
            <div className="absolute top-12 left-0 w-full h-16 bg-black/80"></div>

            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-md flex items-center justify-center shadow-lg border border-amber-300/50">
                      <Cpu size={24} className="text-amber-900" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-cyan-500 tracking-widest uppercase">NANDI_SECURE_CHIP</span>
                      <span className="text-[8px] text-zinc-500">ENCRYPTED_AUTH_v4.2</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <h3 className="text-2xl font-black text-white tracking-tighter uppercase italic opacity-50">SİBER_CARD</h3>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex flex-col gap-1">
                  <span className="text-[8px] text-zinc-500 uppercase tracking-[0.3em]">Card Number</span>
                  <div className="text-3xl font-black text-white tracking-[0.2em] flex gap-4">
                    <span>4412</span>
                    <span>8890</span>
                    <span>1234</span>
                    <motion.span animate={isGlitching ? { x: [-2, 2, -1, 0], opacity: [0.5, 1] } : {}}>5678</motion.span>
                  </div>
                </div>

                <div className="flex gap-12">
                  <div className="flex flex-col gap-1">
                    <span className="text-[8px] text-zinc-500 uppercase tracking-[0.3em]">Expiry</span>
                    <span className="text-lg font-bold text-zinc-300 tracking-widest">03 / 26</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[8px] text-zinc-500 uppercase tracking-[0.3em]">Card Holder</span>
                    <span className="text-lg font-bold text-zinc-300 tracking-widest uppercase">SİBERPUNK USER</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-end border-t border-white/5 pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center">
                    <Zap size={20} className="text-cyan-500" />
                  </div>
                  <div className="text-[9px] text-zinc-600">
                    <p>SERIAL: 882-991-002</p>
                    <p>STATUS: ACTIVE_NODE</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-8 h-5 bg-red-500/20 rounded-sm border border-red-500/30"></div>
                  <div className="w-8 h-5 bg-orange-500/20 rounded-sm border border-orange-500/30"></div>
                </div>
              </div>
            </div>

            {/* Glitch Overlay */}
            <AnimatePresence>
              {isGlitching && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-50 pointer-events-none bg-cyan-500/10 mix-blend-overlay"
                >
                  <motion.div 
                    animate={{ y: [-10, 10, -5, 0] }}
                    className="w-full h-1 bg-white/50 absolute top-1/4"
                  />
                  <motion.div 
                    animate={{ y: [10, -10, 5, 0] }}
                    className="w-full h-1 bg-punk-pink/50 absolute top-3/4"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Flip Button */}
        <button
          onClick={handleFlip}
          className="absolute -right-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-cyan-500/50 transition-all duration-300 shadow-xl group/btn"
        >
          <RefreshCw className={cn("transition-transform duration-500", isFlipped && "rotate-180")} size={20} />
          <span className="absolute left-full ml-4 px-2 py-1 rounded bg-black text-[10px] font-bold text-zinc-500 opacity-0 group-hover/btn:opacity-100 transition-opacity whitespace-nowrap uppercase tracking-widest">
            {isFlipped ? "Ön Yüz" : "Arka Yüz"}
          </span>
        </button>
      </div>

      {/* 25 Kurus Coin Cursor Removed */}
      
      <div className="flex flex-col items-center gap-2">
        <div className="px-6 py-2 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 text-sm font-medium tracking-wider uppercase flex items-center gap-3">
          <MousePointer2 size={14} className="text-cyan-500" />
          {isFlipped ? "KARTI ÇEVİRMEK İÇİN TUŞA BASIN" : "KAZIMAK İÇİN TIKLA VE SÜRÜKLE"}
        </div>
      </div>
    </div>
  );
};
