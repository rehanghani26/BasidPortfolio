import { useEffect, useRef } from "react";

export default function Particles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let W,
      H,
      particles = [],
      raf;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    class P {
      constructor() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.size = Math.random() * 1.5 + 0.5;
        this.sx = (Math.random() - 0.5) * 0.3;
        this.sy = (Math.random() - 0.5) * 0.3;
        this.op = Math.random() * 0.5 + 0.1;
      }
      update() {
        this.x += this.sx;
        this.y += this.sy;
        if (this.x < 0) this.x = W;
        if (this.x > W) this.x = 0;
        if (this.y < 0) this.y = H;
        if (this.y > H) this.y = 0;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232,201,122,${this.op})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < 70; i++) particles.push(new P());

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 100) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(232,201,122,${0.06 * (1 - d / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-0 pointer-events-none opacity-40"
    />
  );
}
