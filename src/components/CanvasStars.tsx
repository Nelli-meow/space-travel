import { useEffect, useRef } from 'react';

type Star = {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  phase: number;
  speed: number;
  color: string;
};

const STAR_COLORS = [
  '255, 255, 255',
  '200, 225, 255',
  '139, 233, 253',
];

export function CanvasStars() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animationId = 0;

    const STAR_COUNT = 555;
    const stars: Star[] = [];

    const createStar = (): Star => ({
      x: Math.random(),
      y: Math.random(),
      radius: Math.random() * 1.1 + 0.3,
      opacity: Math.random() * 0.45 + 0.2,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.8 + 0.3,
      color:
        STAR_COLORS[
          Math.floor(Math.random() * STAR_COLORS.length)
        ] ?? '255, 255, 255',
    });

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const animate = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      for (const star of stars) {
        const twinkle =
          0.55 +
          0.45 * Math.sin(time * 0.001 * star.speed + star.phase);

        const alpha = star.opacity * twinkle;
        const x = star.x * width;
        const y = star.y * height;

        // Мягкое свечение у отдельных звёзд
        if (star.radius > 1) {
          ctx.beginPath();
          ctx.arc(x, y, star.radius * 4, 0, Math.PI * 2);

          const glow = ctx.createRadialGradient(
            x, y, 0,
            x, y, star.radius * 4,
          );

          glow.addColorStop(
            0,
            `rgba(${star.color}, ${alpha * 0.2})`,
          );
          glow.addColorStop(1, `rgba(${star.color}, 0)`);

          ctx.fillStyle = glow;
          ctx.fill();
        }

        // Сама звезда
        ctx.beginPath();
        ctx.arc(x, y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${star.color}, ${alpha})`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    };

    resize();

    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push(createStar());
    }

    animationId = requestAnimationFrame(animate);

    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}