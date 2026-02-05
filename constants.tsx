
import React, { useEffect } from 'react';

export const COLORS = {
  navy: '#1B2B44',
  blue: '#007AFF',
  gold: '#C5A059',
  silver: '#94A3B8',
  white: '#FFFFFF',
};

export const Logo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    {/* Shield Background */}
    <path d="M50 85C50 85 20 75 20 40V25L50 15L80 25V40C80 75 50 85 50 85Z" stroke="#94A3B8" strokeWidth="4" />
    
    {/* Stylized A */}
    <path d="M30 65L50 25L70 65M40 50H60" stroke="#1B2B44" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    
    {/* Internal Nodes/Circuitry */}
    <circle cx="50" cy="45" r="2" fill="#007AFF" className="animate-pulse" />
    <circle cx="46" cy="52" r="2" fill="#007AFF" className="animate-pulse" />
    <circle cx="54" cy="52" r="2" fill="#007AFF" className="animate-pulse" />
    <path d="M50 45V55" stroke="#007AFF" strokeWidth="1" opacity="0.5" />
    
    {/* Gold Peak */}
    <path d="M50 15L54 20H46L50 15Z" fill="#C5A059" />
  </svg>
);

export const NodeBackground: React.FC = () => {
  useEffect(() => {
    const canvas = document.getElementById('nodes-bg') as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: any[] = [];
    let w: number, h: number;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    class Particle {
      x: number; y: number; vx: number; vy: number; radius: number;
      pulse: number; pulseSpeed: number;
      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * 0.2;
        this.vy = (Math.random() - 0.5) * 0.2;
        this.radius = Math.random() * 1.2 + 0.5;
        this.pulse = Math.random() * Math.PI;
        this.pulseSpeed = 0.02 + Math.random() * 0.03;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.pulse += this.pulseSpeed;
        if (this.x < 0 || this.x > w) this.vx *= -1;
        if (this.y < 0 || this.y > h) this.vy *= -1;
      }
      draw() {
        if (!ctx) return;
        const opacity = 0.05 + Math.sin(this.pulse) * 0.05;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(27, 43, 68, ${opacity})`;
        ctx.fill();
        
        // Occasional highlight
        if (Math.random() > 0.99) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius * 2, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(0, 122, 255, 0.2)';
            ctx.fill();
        }
      }
    }

    const init = () => {
      resize();
      particles = Array.from({ length: 120 }, () => new Particle());
    };

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p, i) => {
        p.update();
        p.draw();
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(27, 43, 68, ${0.04 * (1 - dist / 180)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });
      requestAnimationFrame(animate);
    };

    init();
    animate();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return null;
};

export const VeritaDermVisual = () => (
    <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden bg-[#0A0E14] border border-white/5 shadow-2xl transition-transform duration-1000 hover:scale-[1.02]">
        <img 
            src="https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&w=1200&q=80" 
            alt="ML Visualization" 
            className="object-cover w-full h-full opacity-30 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-blue-500/10"></div>
        
        {/* Animated HUD elements */}
        <div className="absolute top-8 left-8">
            <div className="flex items-center gap-3">
               <div className="w-2 h-2 rounded-full bg-[#007AFF] glow-blue animate-pulse"></div>
               <span className="text-white/40 font-mono text-[9px] tracking-widest uppercase">Kernel_Status: Nominal</span>
            </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-48 h-48">
                <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_12s_linear_infinite]"></div>
                <div className="absolute inset-4 border border-blue-500/20 rounded-full animate-[spin_8s_linear_infinite_reverse]"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <Logo className="w-16 h-16 opacity-80" />
                </div>
            </div>
        </div>

        <div className="absolute bottom-8 right-8 text-right">
            <span className="text-white/60 text-[10px] font-mono tracking-widest block mb-1">ACCURACY_VAL_SET</span>
            <span className="text-white text-3xl font-bold tabular-nums">85.4% mAP</span>
        </div>
    </div>
);
