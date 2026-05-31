import { useEffect, useState } from "react";

export default function Loader({ onDone }) {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let current = 0;
    const timer = setInterval(() => {
      current += Math.random() * 14;
      if (current >= 100) {
        current = 100;
        clearInterval(timer);
        setTimeout(onDone, 500);
      }
      setPct(Math.floor(current));
    }, 60);
    return () => clearInterval(timer);
  }, [onDone]);

  return (
    <div className="fixed inset-0 z-[9999] bg-[#050508] flex flex-col items-center justify-center gap-8">
      <div
        className="font-display font-black text-7xl animate-pulse-slow"
        style={{
          background: "linear-gradient(135deg,#e8c97a,#fff,#c8a850)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        BE
      </div>
      <p className="font-mono text-xs tracking-[4px] text-zinc-500 uppercase">
        Loading Visual Stories
      </p>
      <div className="w-64 h-0.5 bg-white/10 rounded overflow-hidden">
        <div
          className="h-full rounded transition-all duration-75"
          style={{
            width: `${pct}%`,
            background: "linear-gradient(90deg,#c8a850,#e8c97a,#fff)",
            boxShadow: "0 0 12px #e8c97a",
          }}
        />
      </div>
      <span className="font-mono text-sm text-amber-400">{pct}%</span>
    </div>
  );
}
