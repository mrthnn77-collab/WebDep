/**
 * Haikei Organic Blob Generator
 * Generates smooth, closed SVG cubic Bézier paths using polar coordinate vertex distribution.
 */

export interface BlobOptions {
  size?: number; // Canvas viewBox width/height
  complexity?: number; // Number of control points (3 to 12)
  contrast?: number; // Random deviation from base radius (0.1 to 0.9)
  seed?: number; // Pseudo-random seed for deterministic outputs
}

// Simple deterministic PRNG
function createPRNG(seed: number) {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

export function generateBlobPath(options: BlobOptions = {}): string {
  const {
    size = 500,
    complexity = 6,
    contrast = 0.4,
    seed = Math.floor(Math.random() * 100000),
  } = options;

  const random = createPRNG(seed);
  const center = size / 2;
  const baseRadius = size * 0.35;
  const maxDelta = baseRadius * contrast;

  const points: { x: number; y: number }[] = [];
  const angleStep = (Math.PI * 2) / complexity;

  // 1. Generate polar vertices
  for (let i = 0; i < complexity; i++) {
    const angle = i * angleStep;
    // Jitter radius
    const delta = (random() * 2 - 1) * maxDelta;
    const r = baseRadius + delta;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    points.push({ x, y });
  }

  // 2. Compute smooth cubic Bézier spline through points
  const n = points.length;
  if (n < 3) return '';

  let path = `M ${points[0].x.toFixed(2)},${points[0].y.toFixed(2)}`;

  for (let i = 0; i < n; i++) {
    const p0 = points[(i - 1 + n) % n];
    const p1 = points[i];
    const p2 = points[(i + 1) % n];
    const p3 = points[(i + 2) % n];

    // Catmull-Rom to Cubic Bézier conversion handles
    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;

    path += ` C ${cp1x.toFixed(2)},${cp1y.toFixed(2)} ${cp2x.toFixed(2)},${cp2y.toFixed(2)} ${p2.x.toFixed(2)},${p2.y.toFixed(2)}`;
  }

  path += ' Z';
  return path;
}

export function generateBlobSvg(options: BlobOptions & { fill?: string; className?: string }): string {
  const size = options.size || 500;
  const fill = options.fill || '#6366f1';
  const path = generateBlobPath(options);

  return `<svg viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg" class="${options.className || ''}">
  <path fill="${fill}" d="${path}" />
</svg>`;
}
