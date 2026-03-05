import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, Maximize, Volume2, Settings, Monitor, Cpu, HardDrive, Wifi, Layers } from 'lucide-react';

export const Windows12 = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  // Auto-play when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current) {
            videoRef.current.play().catch(err => console.log("Autoplay prevented:", err));
            setIsPlaying(true);
          } else if (videoRef.current) {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const togglePlay = async () => {
    if (videoRef.current) {
      try {
        if (isPlaying) {
          videoRef.current.pause();
          setIsPlaying(false);
        } else {
          // play() returns a promise, we should wait for it or handle it
          await videoRef.current.play();
          setIsPlaying(true);
        }
      } catch (error) {
        // This catches the "interrupted by pause" error or "autoplay prevented"
        console.log("Video playback interaction handled:", error);
        setIsPlaying(false);
      }
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(currentProgress);
    }
  };

  return (
    <div className="w-full flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black tracking-[0.3em] uppercase w-fit">
          <Monitor size={12} />
          Next Gen OS Concept
        </div>
        <h2 className="text-6xl font-black tracking-tighter text-white uppercase italic">
          Windows <span className="text-blue-500">12</span>
        </h2>
        <p className="text-zinc-500 text-sm uppercase font-bold tracking-widest">Geleceğin işletim sistemi deneyimi.</p>
      </div>

      <div 
        ref={containerRef}
        className="relative group overflow-hidden border-4 border-white/10 bg-black shadow-2xl shadow-blue-500/10"
      >
        {/* Glass Overlay */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-tr from-blue-500/5 via-transparent to-white/5"></div>
        
        {/* Video Player */}
        <video
          ref={videoRef}
          onClick={togglePlay}
          onTimeUpdate={handleTimeUpdate}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          playsInline
          muted
          loop
          src="https://v1.coverr.co/videos/preview/720p/coverr-abstract-blue-lines-9258.mp4"
          className="w-full aspect-video object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 cursor-pointer"
          poster="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop"
        >
          Your browser does not support the video tag.
        </video>

        {/* Custom Controls */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <div className="bg-black/60 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 flex flex-col gap-4">
            {/* Progress Bar */}
            <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-blue-500"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <button onClick={togglePlay} className="text-white hover:text-blue-400 transition-colors">
                  {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" />}
                </button>
                <div className="flex items-center gap-2 text-zinc-400">
                  <Volume2 size={20} />
                  <div className="w-20 h-1 bg-white/10 rounded-full">
                    <div className="w-2/3 h-full bg-white/40 rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6 text-zinc-400">
                <Settings size={20} className="hover:text-white cursor-pointer" />
                <Maximize size={20} className="hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        {/* Windows 12 Taskbar Mockup */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex items-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/40">
            <div className="grid grid-cols-2 gap-0.5">
              <div className="w-2 h-2 bg-white/90"></div>
              <div className="w-2 h-2 bg-white/90"></div>
              <div className="w-2 h-2 bg-white/90"></div>
              <div className="w-2 h-2 bg-white/90"></div>
            </div>
          </div>
          <div className="h-4 w-[1px] bg-white/20"></div>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"></div>
            <div className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"></div>
            <div className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"></div>
          </div>
        </div>
      </div>

      {/* System Specs Bento */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { icon: Cpu, label: 'Processor', value: 'Quantum X1', color: 'text-blue-400' },
          { icon: HardDrive, label: 'Storage', value: '4TB NVMe Gen6', color: 'text-purple-400' },
          { icon: Layers, label: 'Memory', value: '128GB LPDDR6', color: 'text-emerald-400' },
          { icon: Wifi, label: 'Network', value: 'Wi-Fi 8E Ready', color: 'text-orange-400' },
        ].map((spec, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 bg-white/5 border border-white/10 rounded-3xl flex flex-col gap-4 hover:bg-white/10 transition-colors group"
          >
            <spec.icon size={24} className={spec.color} />
            <div>
              <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">{spec.label}</p>
              <p className="text-lg font-bold text-white tracking-tight">{spec.value}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
