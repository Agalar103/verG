import React, { useEffect, useRef, useState } from 'react';

interface Pixel {
  x: number;
  y: number;
  color: string;
  size: number;
  life: number;
  maxLife: number;
}

export const PixelTrail: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const pixels = useRef<Pixel[]>([]);

  const colors = ['#ff003c', '#00ff00', '#00f0ff', '#f0ff00'];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
      
      // Add new pixels
      for (let i = 0; i < 3; i++) {
        pixels.current.push({
          x: e.clientX + (Math.random() - 0.5) * 4, // Reduced offset
          y: e.clientY + (Math.random() - 0.5) * 4, // Reduced offset
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * 4 + 2,
          life: 0,
          maxLife: Math.random() * 30 + 20
        });
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    handleResize();

    let animationId: number;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      pixels.current.forEach((pixel, index) => {
        pixel.life++;
        const opacity = 1 - pixel.life / pixel.maxLife;
        
        ctx.fillStyle = pixel.color;
        ctx.globalAlpha = opacity;
        ctx.fillRect(pixel.x - pixel.size / 2, pixel.y - pixel.size / 2, pixel.size, pixel.size);
        
        // Add some "glitch" movement
        pixel.x += (Math.random() - 0.5) * 2;
        pixel.y += (Math.random() - 0.5) * 2;
      });

      pixels.current = pixels.current.filter(p => p.life < p.maxLife);
      
      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};
