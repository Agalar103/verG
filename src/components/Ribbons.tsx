import React, { useEffect, useRef } from 'react';

export const Ribbons: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const ribbons: {
      points: { x: number; y: number }[];
      color: string;
      width: number;
      speed: number;
      offset: number;
    }[] = [];

    const colors = ['#ff003c', '#00ff00', '#00f0ff', '#f0ff00'];

    for (let i = 0; i < 5; i++) {
      ribbons.push({
        points: Array.from({ length: 50 }, (_, j) => ({ x: 0, y: 0 })),
        color: colors[i % colors.length],
        width: Math.random() * 20 + 10,
        speed: Math.random() * 0.05 + 0.02,
        offset: Math.random() * Math.PI * 2
      });
    }

    let time = 0;
    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      ribbons.forEach((ribbon) => {
        const headX = width / 2 + Math.cos(time * ribbon.speed * 10 + ribbon.offset) * (width / 3);
        const headY = height / 2 + Math.sin(time * ribbon.speed * 8 + ribbon.offset) * (height / 3);

        ribbon.points.unshift({ x: headX, y: headY });
        ribbon.points.pop();

        ctx.beginPath();
        ctx.moveTo(ribbon.points[0].x, ribbon.points[0].y);

        for (let i = 1; i < ribbon.points.length - 2; i++) {
          const xc = (ribbon.points[i].x + ribbon.points[i + 1].x) / 2;
          const yc = (ribbon.points[i].y + ribbon.points[i + 1].y) / 2;
          ctx.quadraticCurveTo(ribbon.points[i].x, ribbon.points[i].y, xc, yc);
        }

        ctx.strokeStyle = ribbon.color;
        ctx.lineWidth = ribbon.width;
        ctx.lineCap = 'round';
        ctx.globalAlpha = 0.4;
        ctx.stroke();

        // Glow effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = ribbon.color;
        ctx.stroke();
        ctx.shadowBlur = 0;
      });

      requestAnimationFrame(render);
    };

    render();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-[9996] opacity-30"
    />
  );
};
