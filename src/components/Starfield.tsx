import { useEffect, useRef } from 'react';

type Star = {
  x: number;
  y: number;
  z: number;
  previousX: number;
  previousY: number;
  color: string;
};

const STAR_COLORS = [
  '248, 249, 252',
  '139, 233, 253',
  '75, 234, 255',
  '255, 214, 150',
  '186, 168, 255',
];

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animationId = 0;

    const stars: Star[] = [];
    const STAR_COUNT = 520;
    const SPEED = 0.006;

    const createStar = (): Star => ({
      x: Math.random() * 2 - 1,
      y: Math.random() * 2 - 1,
      z: Math.random() * 0.9 + 0.1,
      previousX: 0,
      previousY: 0,
      color:
        STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)] ??
        '248, 249, 252',
    });

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const project = (star: Star) => {
      const focalLength = Math.min(width, height) * 0.5;

      return {
        x: width / 2 + (star.x / star.z) * focalLength,
        y: height / 2 + (star.y / star.z) * focalLength,
      };
    };

    const resetStar = (star: Star) => {
      star.x = Math.random() * 2 - 1;
      star.y = Math.random() * 2 - 1;
      star.z = 1;

      const position = project(star);

      star.previousX = position.x;
      star.previousY = position.y;
    };

    const animate = () => {
      ctx.fillStyle = '#06111e';
      ctx.fillRect(0, 0, width, height);

      for (const star of stars) {
        const oldPosition = project(star);

        star.z -= SPEED;

        const position = project(star);

        if (
          star.z <= 0.05 ||
          position.x < -width ||
          position.x > width * 2 ||
          position.y < -height ||
          position.y > height * 2
        ) {
          resetStar(star);
          continue;
        }

        const brightness = 1 - star.z;
        const length = Math.max(1, (1 - star.z) * 16);

        const dx = position.x - oldPosition.x;
        const dy = position.y - oldPosition.y;

        const magnitude = Math.hypot(dx, dy) || 1;

        ctx.beginPath();
        ctx.moveTo(
          position.x - (dx / magnitude) * length,
          position.y - (dy / magnitude) * length,
        );
        ctx.lineTo(position.x, position.y);

        ctx.strokeStyle = `rgba(${star.color}, ${brightness})`;
        ctx.lineWidth = brightness * 2.6;
        ctx.stroke();

        star.previousX = position.x;
        star.previousY = position.y;
      }

      const vignetteRadius = Math.hypot(width, height) / 2;
      const vignette = ctx.createRadialGradient(
        width / 2,
        height / 2,
        vignetteRadius * 0.22,
        width / 2,
        height / 2,
        vignetteRadius,
      );
      vignette.addColorStop(0, 'rgba(0, 0, 0, 0)');
      vignette.addColorStop(1, 'rgba(0, 0, 0, 0.88)');
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);

      animationId = requestAnimationFrame(animate);
    };

    resize();

    for (let i = 0; i < STAR_COUNT; i++) {
      const star = createStar();
      resetStar(star);
      stars.push(star);
    }

    animate();

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
      className="absolute inset-0 h-full w-full pointer-events-none"
    />
  );
}
