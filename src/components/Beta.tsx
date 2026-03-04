import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { RefreshCw, Zap, Info, Heart } from 'lucide-react';

export const Beta = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // 3D Tilt Efekti
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  // Hologram Geçiş Mantığı (Mouse X konumuna göre)
  // En Sağ (0.5): Resim 1 = %100, Resim 2 = %0
  // Tam Orta (0): Resim 1 = %50, Resim 2 = %50
  // En Sol (-0.5): Resim 1 = %0, Resim 2 = %100
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
      {/* Başlık Bölümü */}
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
          {/* Plastik Koruyucu Kap (Slab Case) */}
          <div className="absolute inset-0 w-full h-full rounded-[2.5rem] border-[2px] border-white/20 bg-white/5 shadow-[0_0_60px_rgba(0,0,0,0.8)] pointer-events-none z-50 overflow-hidden">
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-zinc-300 to-zinc-500 border-2 border-zinc-200 flex items-center justify-center shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
              <div className="w-5 h-5 rounded-full bg-zinc-800/20"></div>
            </div>
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-white/10 via-transparent to-white/5 pointer-events-none"></div>
          </div>

          {/* ÖN YÜZ (Hologramlı Kısım) */}
          <div 
            className="absolute inset-[20px] rounded-2xl bg-[#0a0a0a] overflow-hidden shadow-inner"
            style={{ backfaceVisibility: "hidden" }}
          >
            {/* Hologram 1 (Sağda Görünür) */}
            <motion.div 
              style={{ opacity: opacity1 }}
              className="absolute inset-0 z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop" 
                alt="Billy Butcher Style"
                className="w-full h-full object-cover brightness-110 contrast-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-punk-blue/10 mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
            </motion.div>

            {/* Hologram 2 (Solda Görünür) */}
            <motion.div 
              style={{ opacity: opacity2 }}
              className="absolute inset-0 z-20"
            >
              <img 
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop" 
                alt="SAS Character"
                className="w-full h-full object-cover brightness-110 contrast-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-punk-pink/10 mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
            </motion.div>

            {/* Logo ve Yazı Katmanı */}
            <div className="absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-none">
              <motion.div 
                style={{ 
                  x: useTransform(mouseXSpring, [-0.5, 0.5], [-15, 15]),
                  y: useTransform(mouseYSpring, [-0.5, 0.5], [-15, 15])
                }}
                className="flex flex-col items-center"
              >
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

            {/* Parlama Efekti */}
            <motion.div 
              style={{ x: useTransform(mouseXSpring, [-0.5, 0.5], ["-150%", "150%"]) }}
              className="absolute inset-0 z-40 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"
            />
          </div>

          {/* ARKA YÜZ (Steam Key ve Not) */}
          <motion.div 
            className="absolute inset-[20px] rounded-2xl bg-[#080808] flex flex-col p-12 font-sans overflow-hidden border border-white/5"
            style={{ 
              backfaceVisibility: "hidden",
              rotateY: 180,
            }}
          >
            <div className="relative z-10 flex flex-col h-full text-center">
              <div className="flex flex-col items-center mb-10">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-3xl font-black text-white tracking-tighter uppercase">COUNTER</span>
                  <div className="w-10 h-10 bg-white flex items-center justify-center rounded-sm">
                    <svg viewBox="0 0 24 24" className="w-8 h-8 text-black fill-current">
                       <path d="M12,2L4.5,20.29L5.21,21L12,18L18.79,21L19.5,20.29L12,2Z" />
                    </svg>
                  </div>
                  <span className="text-3xl font-black text-white tracking-tighter uppercase">STRIKE</span>
                </div>
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.6em]">GLOBAL OFFENSIVE</span>
              </div>

              <div className="space-y-8 flex-1">
                <p className="text-xs text-zinc-300 font-black leading-relaxed uppercase italic border-y border-white/10 py-6">
                  Bu özel beta erişimi için seçildiniz. Steam üzerinden aktif edebilirsiniz.
                </p>

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
                    <p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest leading-relaxed">
                      CS:GO launches on PC, Mac, PSN, and XBLA in 2012.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-8 opacity-30">
                <p className="text-[8px] text-zinc-700 font-bold uppercase">© 2011 Valve Corporation. All rights reserved.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Kartı Çevirme Butonu */}
        <button
          onClick={() => setIsFlipped(!isFlipped)}
          className="absolute -right-20 top-1/2 -translate-y-1/2 p-5 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-punk-blue transition-all duration-500 shadow-2xl z-[60]"
        >
          <RefreshCw className={`transition-transform duration-700 ${isFlipped ? 'rotate-180' : ''}`} size={28} />
        </button>
      </div>

      {/* Bilgi Notu */}
      <div className="flex flex-col items-center gap-4">
        <div className="px-8 py-3 rounded-full bg-white/5 border border-white/10 flex items-center gap-3">
          <Info size={16} className="text-punk-blue" />
          <p className="text-xs font-black text-zinc-500 uppercase tracking-widest">
            Hologram geçişi için fareyi sağa/sola kaydırın
          </p>
        </div>
      </div>
    </div>
  );
};
