/**
 * Lightweight Zero-Dependency HTML5 Canvas Confetti Burst
 * Runs at 60 FPS and cleans up its own canvas DOM automatically after 2.5s
 */

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  rotation: number;
  vRot: number;
  shape: 'rect' | 'circle';
  opacity: number;
}

const CONFETTI_COLORS = [
  '#3b82f6', // bright blue
  '#10b981', // emerald
  '#f59e0b', // amber
  '#ec4899', // pink
  '#8b5cf6', // purple
  '#06b6d4', // cyan
  '#ef4444', // coral
];

export function fireConfetti(originX?: number, originY?: number) {
  if (typeof window === 'undefined') return;

  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '999999';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    canvas.remove();
    return;
  }

  const dpr = window.devicePixelRatio || 1;
  const width = window.innerWidth;
  const height = window.innerHeight;
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  ctx.scale(dpr, dpr);

  const startX = originX ?? width / 2;
  const startY = originY ?? height * 0.45;

  const particleCount = 65;
  const particles: Particle[] = [];

  for (let i = 0; i < particleCount; i++) {
    const angle = (Math.PI * 2 * i) / particleCount + (Math.random() - 0.5) * 0.5;
    const speed = 6 + Math.random() * 12;

    particles.push({
      x: startX,
      y: startY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 5, // initial upward lift
      size: 6 + Math.random() * 8,
      color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
      rotation: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 15,
      shape: Math.random() > 0.4 ? 'rect' : 'circle',
      opacity: 1,
    });
  }

  let animationFrameId: number;
  const startTime = performance.now();
  const maxDuration = 2200; // ms

  function render(currentTime: number) {
    const elapsed = currentTime - startTime;
    if (elapsed > maxDuration) {
      cancelAnimationFrame(animationFrameId);
      canvas.remove();
      return;
    }

    ctx?.clearRect(0, 0, width, height);

    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.28; // gravity
      p.vx *= 0.98; // air resistance
      p.rotation += p.vRot;

      if (elapsed > 1200) {
        p.opacity = Math.max(0, 1 - (elapsed - 1200) / 1000);
      }

      ctx?.save();
      ctx!.translate(p.x, p.y);
      ctx!.rotate((p.rotation * Math.PI) / 180);
      ctx!.globalAlpha = p.opacity;
      ctx!.fillStyle = p.color;

      if (p.shape === 'rect') {
        ctx?.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      } else {
        ctx?.beginPath();
        ctx?.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        ctx?.fill();
      }
      ctx?.restore();
    });

    animationFrameId = requestAnimationFrame(render);
  }

  animationFrameId = requestAnimationFrame(render);
}
