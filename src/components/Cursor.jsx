import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 });

  useEffect(() => {
    const onMove = (e) => {
      pos.current.mx = e.clientX;
      pos.current.my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + "px";
        dotRef.current.style.top = e.clientY + "px";
      }
    };
    document.addEventListener("mousemove", onMove);

    let raf;
    const animate = () => {
      pos.current.rx += (pos.current.mx - pos.current.rx) * 0.12;
      pos.current.ry += (pos.current.my - pos.current.ry) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = pos.current.rx + "px";
        ringRef.current.style.top = pos.current.ry + "px";
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    const expand = () =>
      ringRef.current?.classList.add("!w-16", "!h-16", "!opacity-50");
    const shrink = () =>
      ringRef.current?.classList.remove("!w-16", "!h-16", "!opacity-50");
    document.querySelectorAll("a,button,.service-card").forEach((el) => {
      el.addEventListener("mouseenter", expand);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed w-2 h-2 bg-white rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{ transition: "transform 0.1s" }}
      />
      <div
        ref={ringRef}
        className="fixed w-10 h-10 border border-white/50 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 mix-blend-difference transition-all duration-150"
      />
    </>
  );
}
