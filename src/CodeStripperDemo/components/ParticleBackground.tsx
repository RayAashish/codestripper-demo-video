import React from 'react';
import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import { COLORS, FONTS } from '../constants';

const CODE_TOKENS = [
  '{ }',
  '</>',
  'pom.xml',
  'npm run dev',
  'import { Spring }',
  '@RestController',
  'application.yml',
  'skeleton.zip',
  'Option + Shift + C',
  'README.md',
  '1-Click Export',
  '0% Fluff',
];

export const ParticleBackground: React.FC<{
  intensity?: number;
  showGrid?: boolean;
}> = ({ intensity = 1, showGrid = true }) => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  // Floating ambient light blobs
  const blob1X = 250 + Math.sin(frame * 0.02) * 80;
  const blob1Y = 200 + Math.cos(frame * 0.015) * 60;
  const blob2X = width - 350 + Math.cos(frame * 0.018) * 100;
  const blob2Y = height - 250 + Math.sin(frame * 0.022) * 70;

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: COLORS.bg,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      {/* Radial ambient glow 1 (Cyan) */}
      <div
        style={{
          position: 'absolute',
          left: blob1X,
          top: blob1Y,
          width: 700,
          height: 700,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 240, 255, 0.12) 0%, transparent 65%)',
          filter: 'blur(80px)',
          transform: 'translate(-50%, -50%)',
          opacity: intensity,
        }}
      />

      {/* Radial ambient glow 2 (Purple) */}
      <div
        style={{
          position: 'absolute',
          left: blob2X,
          top: blob2Y,
          width: 800,
          height: 800,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.14) 0%, transparent 65%)',
          filter: 'blur(90px)',
          transform: 'translate(-50%, -50%)',
          opacity: intensity,
        }}
      />

      {/* Center spotlight subtle highlight */}
      <div
        style={{
          position: 'absolute',
          left: width / 2,
          top: height / 2,
          width: 1000,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(30, 41, 59, 0.6) 0%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Modern Developer Grid */}
      {showGrid && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
            opacity: 0.7,
            maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          }}
        />
      )}

      {/* Drifting Floating Code Tokens */}
      {CODE_TOKENS.map((token, i) => {
        const seed = i * 137.5;
        const initialX = (seed % (width - 200)) + 100;
        const initialY = ((seed * 1.618) % (height - 150)) + 75;
        const speedY = ((i % 3) + 1) * 0.35;
        
        const currentY = (initialY - frame * speedY + height) % height;
        const currentX = initialX + Math.sin((frame * 0.02) + i) * 20;

        const opacity = interpolate(
          currentY,
          [0, 100, height - 100, height],
          [0, 0.22, 0.22, 0],
          { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
        );

        return (
          <div
            key={token}
            style={{
              position: 'absolute',
              left: currentX,
              top: currentY,
              fontFamily: FONTS.mono,
              fontSize: 13,
              color: i % 2 === 0 ? COLORS.cyan : COLORS.purple,
              opacity: opacity * intensity,
              letterSpacing: '0.05em',
              padding: '4px 10px',
              borderRadius: 6,
              border: '1px solid rgba(255, 255, 255, 0.05)',
              backgroundColor: 'rgba(15, 23, 42, 0.35)',
              backdropFilter: 'blur(4px)',
              whiteSpace: 'nowrap',
              transform: `rotate(${Math.sin(i) * 6}deg)`,
            }}
          >
            {token}
          </div>
        );
      })}
    </div>
  );
};
