import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[100] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 mix-blend-screen transition-transform duration-300 ease-out"
      style={{
        left: pos.x,
        top: pos.y,
        background:
          "radial-gradient(circle, oklch(0.68 0.25 295 / 0.18), oklch(0.72 0.22 240 / 0.08) 40%, transparent 70%)",
      }}
    />
  );
}
