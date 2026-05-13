import { useEffect, useRef, useState } from "react";
import shield from "@/assets/bsp-shield.png";

/**
 * BSP Tech animated mark — cinematic card reveal:
 *  - Soft layered glow halo (no rotating orbits)
 *  - Animated holographic shimmer sweep across the shield
 *  - Slow floating + cursor-reactive 3D tilt
 *  - Subtle drifting light particles
 */
export function AnimatedLogo({ size = 360 }: { size?: number }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      setTilt({ x: py * -8, y: px * 12 });
    };
    const onLeave = () => setTilt({ x: 0, y: 0 });
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  // deterministic particle positions
  const particles = Array.from({ length: 14 }).map((_, i) => ({
    id: i,
    top: `${(i * 53) % 100}%`,
    left: `${(i * 37 + 11) % 100}%`,
    delay: (i % 7) * 0.5,
    dur: 6 + (i % 5),
    sz: 3 + (i % 3),
  }));

  return (
    <div
      ref={wrapRef}
      className="relative mx-auto select-none"
      style={{ width: size, height: size, perspective: 1000 }}
      aria-label="BSP Tech Solutions animated logo"
    >
      {/* Soft outer halo */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 55%, color-mix(in oklch, var(--sky) 55%, transparent) 0%, transparent 62%)",
          filter: "blur(28px)",
          animation: "pulse-glow 5s ease-in-out infinite",
        }}
      />
      {/* Inner radial */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, color-mix(in oklch, var(--navy) 22%, transparent) 0%, transparent 55%)",
        }}
      />

      {/* Drifting particles */}
      <div className="absolute inset-0 overflow-hidden rounded-full" aria-hidden>
        {particles.map((p) => (
          <span
            key={p.id}
            style={{
              position: "absolute",
              top: p.top,
              left: p.left,
              width: p.sz,
              height: p.sz,
              borderRadius: 9999,
              background: "color-mix(in oklch, var(--sky) 80%, white)",
              boxShadow: "0 0 10px color-mix(in oklch, var(--sky) 70%, transparent)",
              animation: `float ${p.dur}s ease-in-out ${p.delay}s infinite, pulse-glow ${p.dur + 1}s ease-in-out ${p.delay}s infinite`,
              opacity: 0.7,
            }}
          />
        ))}
      </div>

      {/* Shield card with float + 3D tilt + shimmer sweep */}
      <div
        className="absolute inset-0 grid place-items-center"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: "preserve-3d",
          transition: "transform 280ms ease-out",
        }}
      >
        <div
          className="relative"
          style={{
            width: size * 0.62,
            height: size * 0.62,
            animation: "float 6s ease-in-out infinite",
            filter:
              "drop-shadow(0 20px 36px color-mix(in oklch, var(--navy) 35%, transparent))",
          }}
        >
          <img
            src={shield}
            alt="BSP Shield"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            draggable={false}
          />
          {/* Holographic shimmer sweep masked to shield silhouette */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              WebkitMaskImage: `url(${shield})`,
              maskImage: `url(${shield})`,
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskPosition: "center",
              background:
                "linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.85) 50%, transparent 70%)",
              backgroundSize: "250% 100%",
              mixBlendMode: "screen",
              animation: "shimmer-sweep 3.6s ease-in-out infinite",
              pointerEvents: "none",
            }}
          />
          {/* Specular highlight */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 30% 22%, rgba(255,255,255,0.55), transparent 42%)",
              mixBlendMode: "overlay",
              pointerEvents: "none",
            }}
          />
        </div>
      </div>
    </div>
  );
}
