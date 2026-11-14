import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { COLORS, FONTS } from '../constants';
import { CodeStripperLogo } from '../components/CodeStripperLogo';
import { KeyboardShortcut } from '../components/KeyboardShortcut';
import { ParticleBackground } from '../components/ParticleBackground';

export const Scene2Trigger: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Logo & Title entrance
  const introSpring = spring({
    frame: frame - 5,
    fps,
    config: { damping: 14, stiffness: 150 },
  });

  // Shortcut keys entrance
  const shortcutSpring = spring({
    frame: frame - 25,
    fps,
    config: { damping: 13, stiffness: 140 },
  });

  // Callout pills entrance
  const pillsSpring = spring({
    frame: frame - 55,
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
      <ParticleBackground intensity={1.3} />

      {/* Main Container */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: 28,
          zIndex: 10,
        }}
      >
        {/* Logo + Brand Name */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 16,
            opacity: interpolate(introSpring, [0, 1], [0, 1]),
            transform: `translateY(${interpolate(introSpring, [0, 1], [40, 0])}px) scale(${interpolate(introSpring, [0, 1], [0.92, 1])})`,
          }}
        >
          <CodeStripperLogo size={100} glow={true} animated={true} />

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
            <div
              style={{
                fontSize: 58,
                fontWeight: 900,
                color: '#FFFFFF',
                letterSpacing: '-0.03em',
              }}
            >
              CodeStripper
            </div>

            <div
              style={{
                fontSize: 22,
                fontWeight: 600,
                color: COLORS.cyan,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                fontFamily: FONTS.mono,
              }}
            >
              Technical Tutorial Distiller
            </div>
          </div>
        </div>

        {/* Keyboard Shortcut Visual Box */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 16,
            padding: '24px 36px',
            borderRadius: 24,
            backgroundColor: 'rgba(15, 23, 42, 0.85)',
            border: '1.5px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            opacity: interpolate(shortcutSpring, [0, 1], [0, 1]),
            transform: `translateY(${interpolate(shortcutSpring, [0, 1], [30, 0])}px)`,
          }}
        >
          <div
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: COLORS.textSecondary,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              fontFamily: FONTS.mono,
            }}
          >
            Press 1 shortcut on any article
          </div>

          <KeyboardShortcut os="mac" activeAtFrame={35} />

          <div
            style={{
              fontSize: 13,
              color: COLORS.textMuted,
              fontFamily: FONTS.mono,
              marginTop: 4,
            }}
          >
            (or Alt + Shift + C on Windows / Linux)
          </div>
        </div>

        {/* Supported Platforms Pill */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            opacity: interpolate(pillsSpring, [0, 1], [0, 1]),
            transform: `translateY(${interpolate(pillsSpring, [0, 1], [20, 0])}px)`,
          }}
        >
          <span style={{ fontSize: 14, color: COLORS.textMuted, fontWeight: 500 }}>
            Works seamlessly on:
          </span>
          {['Baeldung', 'Medium', 'MDN Docs', 'Dev.to', 'Spring Docs'].map((platform) => (
            <span
              key={platform}
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: COLORS.textPrimary,
                backgroundColor: 'rgba(255, 255, 255, 0.07)',
                padding: '6px 14px',
                borderRadius: 20,
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              {platform}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
