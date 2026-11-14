import React from 'react';
import { spring, useCurrentFrame, useVideoConfig } from 'remotion';

interface CodeStripperLogoProps {
  size?: number;
  glow?: boolean;
  animated?: boolean;
}

export const CodeStripperLogo: React.FC<CodeStripperLogoProps> = ({
  size = 64,
  glow = true,
  animated = true,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const pulse = animated
    ? Math.sin((frame / fps) * Math.PI * 2) * 0.08 + 1
    : 1;

  const springScale = animated
    ? spring({
        frame,
        fps,
        config: { damping: 12, stiffness: 120 },
      })
    : 1;

  return (
    <div
      style={{
        width: size,
        height: size,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: `scale(${springScale * pulse})`,
      }}
    >
      {/* Background ambient glow */}
      {glow && (
        <div
          style={{
            position: 'absolute',
            inset: -size * 0.25,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 240, 255, 0.4) 0%, rgba(168, 85, 247, 0.3) 50%, transparent 75%)',
            filter: 'blur(24px)',
            opacity: 0.9,
            pointerEvents: 'none',
          }}
        />
      )}

      {/* Squircle App Icon Container */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          filter: glow ? 'drop-shadow(0 8px 24px rgba(0, 240, 255, 0.35))' : 'none',
        }}
      >
        <defs>
          <linearGradient id="bgGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#151C2C" />
            <stop offset="1" stopColor="#0B0F19" />
          </linearGradient>

          <linearGradient id="boltGradLeft" x1="15" y1="20" x2="48" y2="80" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00F0FF" />
            <stop offset="0.5" stopColor="#38BDF8" />
            <stop offset="1" stopColor="#818CF8" />
          </linearGradient>

          <linearGradient id="boltGradRight" x1="52" y1="20" x2="85" y2="80" gradientUnits="userSpaceOnUse">
            <stop stopColor="#C084FC" />
            <stop offset="0.5" stopColor="#A855F7" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>

          <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Squircle base */}
        <rect
          x="4"
          y="4"
          width="92"
          height="92"
          rx="24"
          fill="url(#bgGrad)"
          stroke="rgba(255, 255, 255, 0.15)"
          strokeWidth="1.5"
        />

        {/* Inner subtle bevel */}
        <rect
          x="5"
          y="5"
          width="90"
          height="45"
          rx="22"
          fill="rgba(255, 255, 255, 0.04)"
        />

        {/* Left Lightning Chevron < */}
        <path
          d="M 44 26 L 24 50 L 38 52 L 28 74 L 46 48 L 34 46 Z"
          fill="url(#boltGradLeft)"
          filter="url(#neonGlow)"
        />

        {/* Right Lightning Chevron > */}
        <path
          d="M 56 74 L 76 50 L 62 48 L 72 26 L 54 52 L 66 54 Z"
          fill="url(#boltGradRight)"
          filter="url(#neonGlow)"
        />
      </svg>
    </div>
  );
};
