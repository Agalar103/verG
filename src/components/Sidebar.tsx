import React from 'react';
import { LayoutGrid, Sparkles, Box, Layers, Type, MousePointer2, Palette, Zap, Beaker, Terminal, Monitor } from 'lucide-react';
import { motion } from 'motion/react';

interface SidebarProps {
  activeId: string;
  onSelect: (id: string) => void;
}

const categories = [
  {
    title: 'Metin Animasyonları',
    items: [
      { id: 'split-text', name: 'Parçalı Metin', icon: Type },
      { id: 'glitch-text', name: 'Glitch Metin', icon: Zap },
    ]
  },
  {
    title: 'Bileşenler',
    items: [
      { id: 'scratch-card', name: 'Kazı Kazan', icon: Sparkles },
      { id: 'bento-grid', name: 'Bento Izgara', icon: LayoutGrid },
      { id: 'x-ray-card', name: 'X-Ray Kart', icon: Sparkles },
      { id: 'glass-button', name: 'Cam Buton', icon: Box },
    ]
  },
  {
    title: 'Animasyonlar',
    items: [
      { id: 'animated-tabs', name: 'Sekmeler', icon: Layers },
      { id: 'follow-mouse', name: 'Fare Takibi', icon: MousePointer2 },
    ]
  },
  {
    title: 'Arka Planlar',
    items: [
      { id: 'grid-background', name: 'Izgara Arka Plan', icon: Palette },
    ]
  },
  {
    title: 'Deneysel',
    items: [
      { id: 'beta', name: 'Beta', icon: Beaker },
      { id: 'labs', name: 'Labs', icon: Terminal },
      { id: 'windows-12', name: 'Windows 12', icon: Monitor },
    ]
  }
];

export const Sidebar: React.FC<SidebarProps> = ({ activeId, onSelect }) => {
  return (
    <aside className="w-72 border-r-2 border-white h-screen sticky top-0 bg-[#050505] p-8 flex flex-col gap-10 z-20">
      {/* Modern Punk Logo */}
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-4 cursor-pointer group"
      >
        <div className="relative">
          <div className="w-12 h-12 bg-punk-pink flex items-center justify-center font-black text-black text-2xl skew-x-[-12deg] border-2 border-white z-10 relative">
            VG
          </div>
          <div className="absolute inset-0 bg-punk-blue skew-x-[-12deg] translate-x-1 translate-y-1 -z-0 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
        </div>
        <div className="flex flex-col">
          <span className="text-2xl font-black tracking-tighter text-white glitch-text">VER-G</span>
          <span className="text-[10px] font-bold text-punk-green tracking-[0.2em] uppercase">Cyber UI Kit</span>
        </div>
      </motion.div>

      <nav className="flex flex-col gap-8 overflow-y-auto pr-2 custom-scrollbar">
        {categories.map((cat) => (
          <div key={cat.title} className="flex flex-col gap-2">
            <p className="text-[10px] uppercase font-black tracking-[0.3em] text-zinc-600 px-3 mb-2">{cat.title}</p>
            <div className="flex flex-col gap-1">
              {cat.items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onSelect(item.id)}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-none border-l-4 transition-all text-sm font-bold uppercase tracking-tight ${
                    activeId === item.id
                      ? 'bg-white text-black border-punk-pink'
                      : 'text-zinc-400 border-transparent hover:text-white hover:bg-white/5 hover:border-zinc-700'
                  }`}
                >
                  <item.icon size={16} className={activeId === item.id ? 'text-punk-pink' : ''} />
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        ))}
      </nav>

      <div className="mt-auto pt-8 border-t-2 border-white/10">
        <div className="p-4 bg-punk-pink/5 border-2 border-punk-pink/20 relative">
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-punk-green skew-x-[-12deg]"></div>
          <p className="text-[11px] text-zinc-400 font-bold leading-relaxed uppercase italic">
            Punk estetiği ile güçlendirilmiş modern React bileşenleri.
          </p>
        </div>
      </div>
    </aside>
  );
};
