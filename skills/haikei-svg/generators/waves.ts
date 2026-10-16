/**
 * Haikei Layered Waves Generator
 * Generates smooth stacked harmonic wave dividers with gradients.
 */

export interface WaveOptions {
  width?: number;
  height?: number;
  layers?: number; // Number of stacked wave layers
  points?: number; // Points per wave curve
  amplitude?: number; // Height of the peaks
  frequency?: number; // Wavelength frequency
  seed?: number;
}

export interface LayeredWaveResult {
  path: string;
  fillOpacity: number;
}

export function generateLayeredWaves(options: WaveOptions = {}): LayeredWaveResult[] {
  const {
    width = 1440,
    height = 400,
    layers = 4,
    points = 6,
    amplitude = 80,
    frequency = 1.5,
    seed = 42,
  } = options;

  const results: LayeredWaveResult[] = [];
  const baseStepY = height / (layers + 1);

  for (let l = 0; l < layers; l++) {
    const layerBaseY = height - (l + 1) * (baseStepY * 0.75);
    const layerAmp = amplitude * (0.6 + (l / layers) * 0.5);
    const pts: { x: number; y: number }[] = [];

    const dx = width / (points - 1);
    for (let p = 0; p < points; p++) {
      const x = p * dx;
      // Multi-sine harmonic equation
      const phase = (seed + l * 17) * 0.1;
      const sin1 = Math.sin((p / (points - 1)) * Math.PI * 2 * frequency + phase);
      const cos1 = Math.cos((p / (points - 1)) * Math.PI * 3 + phase * 0.5);
      const y = layerBaseY + (sin1 * 0.7 + cos1 * 0.3) * layerAmp;
      pts.push({ x, y });
    }

    // Build SVG Path
    let path = `M 0,${height} L 0,${pts[0].y.toFixed(2)}`;

    for (let i = 0; i < pts.length - 1; i++) {
      const p1 = pts[i];
      const p2 = pts[i + 1];
      const cx = (p1.x + p2.x) / 2;
      path += ` Q ${p1.x.toFixed(2)},${p1.y.toFixed(2)} ${cx.toFixed(2)},${((p1.y + p2.y) / 2).toFixed(2)}`;
    }

    const last = pts[pts.length - 1];
    path += ` T ${last.x.toFixed(2)},${last.y.toFixed(2)}`;
    path += ` L ${width},${height} Z`;

    results.push({
      path,
      fillOpacity: 0.25 + (l / layers) * 0.65,
    });
  }

  return results;
}
