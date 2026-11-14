import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { COLORS, FONTS } from '../constants';
import { ParticleBackground } from '../components/ParticleBackground';

export const Scene1Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Word 1: Engineers don't read tutorials for the prose
  const line1Progress = spring({
    frame: frame - 10,
    fps,
    config: { damping: 14, stiffness: 180 },
  });

  // Strikethrough on PROSE
  const strikeProgress = spring({
    frame: frame - 40,
    fps,
    config: { damping: 16, stiffness: 220 },
  });

  // Line 2: WE READ THEM FOR THE CODE.
  const line2Progress = spring({
    frame: frame - 55,
    fps,
    config: { damping: 12, stiffness: 200 },
  });

  // Pain points comparison cards
  const painProgress = spring({
    frame: frame - 85,
    fps,
    config: { damping: 14, stiffness: 160 },
  });

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: COLORS.bg,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: FONTS.sans,
        overflow: 'hidden',
      }}
    >
      <ParticleBackground intensity={1.2} />

      {/* Main Kinetic Typography */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: 16,
          zIndex: 10,
          maxWidth: 1300,
          padding: '0 40px',
        }}
      >
        {/* Line 1 */}
        <div
          style={{
            fontSize: 54,
            fontWeight: 800,
            color: '#FFFFFF',
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            opacity: interpolate(line1Progress, [0, 1], [0, 1]),
            transform: `translateY(${interpolate(line1Progress, [0, 1], [40, 0])}px) scale(${interpolate(line1Progress, [0, 1], [0.95, 1])})`,
          }}
        >
          Engineers don’t read tutorials for the{' '}
          <span style={{ position: 'relative', display: 'inline-block', color: COLORS.red }}>
            prose.
            {/* Animated Strikethrough line */}
            <span
              style={{
                position: 'absolute',
                left: -4,
                top: '52%',
                height: 6,
                backgroundColor: COLORS.red,
                borderRadius: 3,
                boxShadow: '0 0 16px rgba(239, 68, 68, 0.8)',
                width: `${interpolate(strikeProgress, [0, 1], [0, 108])}%`,
              }}
            />
          </span>
        </div>

        {/* Line 2 */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            letterSpacing: '-0.03em',
            background: `linear-gradient(135deg, #FFFFFF 0%, ${COLORS.cyan} 50%, #38BDF8 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: `drop-shadow(0 0 35px ${COLORS.cyanGlow})`,
            opacity: interpolate(line2Progress, [0, 1], [0, 1]),
            transform: `translateY(${interpolate(line2Progress, [0, 1], [50, 0])}px) scale(${interpolate(line2Progress, [0, 1], [0.9, 1])})`,
          }}
        >
          WE READ THEM FOR THE CODE.
        </div>

        {/* Contrast Cards: The Problem vs CodeStripper */}
        <div
          style={{
            display: 'flex',
            gap: 24,
            marginTop: 40,
            opacity: interpolate(painProgress, [0, 1], [0, 1]),
            transform: `translateY(${interpolate(painProgress, [0, 1], [30, 0])}px)`,
          }}
        >
          {/* Card 1: The Struggle */}
          <div
            style={{
              padding: '16px 28px',
              borderRadius: 14,
              backgroundColor: 'rgba(239, 68, 68, 0.1)',
              border: '1.5px solid rgba(239, 68, 68, 0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              color: '#FCA5A5',
              fontSize: 20,
              fontWeight: 600,
            }}
          >
            <span style={{ fontSize: 24 }}>🚫</span>
            <span>2,000 words of SEO fluff & intrusive ad popups</span>
          </div>

          {/* Card 2: The CodeStripper Promise */}
          <div
            style={{
              padding: '16px 28px',
              borderRadius: 14,
              backgroundColor: 'rgba(0, 240, 255, 0.12)',
              border: `1.5px solid ${COLORS.cyan}`,
              boxShadow: `0 0 25px ${COLORS.cyanGlow}`,
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              color: '#FFFFFF',
              fontSize: 20,
              fontWeight: 700,
            }}
          >
            <span style={{ fontSize: 24 }}>⚡</span>
            <span>Clean, compile-ready project skeletons in 1-click</span>
          </div>
        </div>
      </div>
    </div>
  );
};
