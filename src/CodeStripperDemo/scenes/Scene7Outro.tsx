import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { COLORS, FONTS } from '../constants';
import { CodeStripperLogo } from '../components/CodeStripperLogo';
import { ParticleBackground } from '../components/ParticleBackground';

export const Scene7Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const introSpring = spring({
    frame: frame - 5,
    fps,
    config: { damping: 14, stiffness: 140 },
  });

  const ctaSpring = spring({
    frame: frame - 25,
    fps,
    config: { damping: 13, stiffness: 150 },
  });

  const ratingSpring = spring({
    frame: frame - 45,
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
      <ParticleBackground intensity={1.4} />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: 24,
          zIndex: 10,
          maxWidth: 1100,
        }}
      >
        {/* Brand Icon & Name */}
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
          <CodeStripperLogo size={110} glow={true} animated={true} />

          <div style={{ fontSize: 60, fontWeight: 900, color: '#FFFFFF', letterSpacing: '-0.03em' }}>
            Get CodeStripper Today
          </div>

          <div
            style={{
              fontSize: 24,
              color: COLORS.cyan,
              fontWeight: 600,
              maxWidth: 800,
              lineHeight: 1.4,
            }}
          >
            Turn messy, ad-riddled blog posts into ready-to-run project skeletons in 1 click.
          </div>
        </div>

        {/* CTA Store Badge Box */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            padding: '18px 36px',
            borderRadius: 20,
            backgroundColor: 'rgba(0, 120, 212, 0.18)',
            border: '2px solid #0078D4',
            boxShadow: '0 20px 50px rgba(0, 120, 212, 0.35)',
            backdropFilter: 'blur(20px)',
            opacity: interpolate(ctaSpring, [0, 1], [0, 1]),
            transform: `translateY(${interpolate(ctaSpring, [0, 1], [30, 0])}px) scale(${interpolate(ctaSpring, [0, 1], [0.95, 1])})`,
          }}
        >
          {/* Microsoft Edge Wave Logo */}
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #0078D4 0%, #00F0FF 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 16px rgba(0, 120, 212, 0.5)',
              fontSize: 22,
            }}
          >
            🌐
          </div>

          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#38BDF8', fontWeight: 700 }}>
              Available Now (100% Free)
            </div>
            <div style={{ fontSize: 24, fontWeight: 800, color: '#FFFFFF' }}>
              Microsoft Edge Add-ons Store
            </div>
          </div>
        </div>

        {/* Support & Star Rating Pill */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 24,
            opacity: interpolate(ratingSpring, [0, 1], [0, 1]),
            transform: `translateY(${interpolate(ratingSpring, [0, 1], [20, 0])}px)`,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '10px 20px',
              borderRadius: 30,
              backgroundColor: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              fontSize: 15,
              color: '#FDE047',
              fontWeight: 600,
            }}
          >
            <span>⭐⭐⭐⭐⭐</span>
            <span style={{ color: '#FFFFFF' }}>
              Please drop a rating if it saves you 5 minutes of scrolling!
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              fontFamily: FONTS.mono,
              fontSize: 14,
              color: COLORS.cyan,
              backgroundColor: 'rgba(0, 240, 255, 0.08)',
              padding: '10px 18px',
              borderRadius: 30,
              border: '1px solid rgba(0, 240, 255, 0.25)',
            }}
          >
            <span>⚡ Shortcut:</span>
            <strong>Option + Shift + C</strong>
          </div>
        </div>
      </div>
    </div>
  );
};
