/**
 * Haikei SVG Grain, Noise & Blurry Gradient Generator
 */

export interface GrainFilterOptions {
  id?: string;
  baseFrequency?: number; // e.g. 0.65
  numOctaves?: number; // e.g. 3
  stitchTiles?: 'stitch' | 'noStitch';
}

export function generateGrainFilterSvg(options: GrainFilterOptions = {}): string {
  const {
    id = 'haikei-grain',
    baseFrequency = 0.7,
    numOctaves = 3,
    stitchTiles = 'stitch',
  } = options;

  return `<svg style="display:none;">
  <defs>
    <filter id="${id}" x="0%" y="0%" width="100%" height="100%">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="${baseFrequency}"
        numOctaves="${numOctaves}"
        stitchTiles="${stitchTiles}"
        result="noise"
      />
      <feColorMatrix
        type="matrix"
        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.15 0"
      />
      <feComposite in2="SourceGraphic" in="gl" operator="in" />
    </filter>
  </defs>
</svg>`;
}

export interface BlurryGradientStop {
  color: string;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  radius: number; // px
  opacity?: number;
}

export function generateBlurryGradientSvg(
  width: number,
  height: number,
  stops: BlurryGradientStop[],
  blurStdDev: number = 80
): string {
  const circles = stops
    .map(
      (s) =>
        `<circle cx="${(s.x * width) / 100}" cy="${(s.y * height) / 100}" r="${s.radius}" fill="${s.color}" fill-opacity="${s.opacity ?? 0.8}" filter="url(#blur-filter)" />`
    )
    .join('\n    ');

  return `<svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
  <defs>
    <filter id="blur-filter" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="${blurStdDev}" />
    </filter>
  </defs>
  <rect width="100%" height="100%" fill="#0a0a0c" />
  <g>
    ${circles}
  </g>
</svg>`;
}
