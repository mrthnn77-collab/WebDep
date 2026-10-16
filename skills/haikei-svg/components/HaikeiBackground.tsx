import React, { useMemo } from 'react';
import { generateBlobPath } from '../generators/blob';
import { generateLayeredWaves } from '../generators/waves';

interface HaikeiBackgroundProps {
  variant: 'blob' | 'waves' | 'mesh';
  primaryColor?: string;
  secondaryColor?: string;
  className?: string;
  seed?: number;
}

export function HaikeiBackground({
  variant,
  primaryColor = '#6366f1',
  secondaryColor = '#ec4899',
  className = '',
  seed = 42,
}: HaikeiBackgroundProps) {
  const blobPath = useMemo(() => {
    if (variant !== 'blob') return '';
    return generateBlobPath({ size: 600, complexity: 6, contrast: 0.45, seed });
  }, [variant, seed]);

  const waveLayers = useMemo(() => {
    if (variant !== 'waves') return [];
    return generateLayeredWaves({ width: 1440, height: 400, layers: 3, seed });
  }, [variant, seed]);

  if (variant === 'blob') {
    return (
      <div className={`relative flex items-center justify-center overflow-hidden ${className}`}>
        <svg viewBox="0 0 600 600" className="w-full h-full max-w-lg drop-shadow-2xl">
          <defs>
            <linearGradient id={`blob-grad-${seed}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={primaryColor} />
              <stop offset="100%" stopColor={secondaryColor} />
            </linearGradient>
          </defs>
          <path d={blobPath} fill={`url(#blob-grad-${seed})`} />
        </svg>
      </div>
    );
  }

  if (variant === 'waves') {
    return (
      <div className={`w-full overflow-hidden ${className}`}>
        <svg viewBox="0 0 1440 400" className="w-full h-auto" preserveAspectRatio="none">
          <defs>
            <linearGradient id={`wave-grad-${seed}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={primaryColor} />
              <stop offset="100%" stopColor={secondaryColor} />
            </linearGradient>
          </defs>
          {waveLayers.map((w, idx) => (
            <path
              key={idx}
              d={w.path}
              fill={`url(#wave-grad-${seed})`}
              fillOpacity={w.fillOpacity}
            />
          ))}
        </svg>
      </div>
    );
  }

  return null;
}
