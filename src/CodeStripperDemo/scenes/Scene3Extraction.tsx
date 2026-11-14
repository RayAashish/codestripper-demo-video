import React from 'react';
import { interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import { Video } from '@remotion/media';
import { COLORS, FONTS } from '../constants';
import { BrowserFrame } from '../components/BrowserFrame';
import { FeatureBadge } from '../components/FeatureBadge';
import { ParticleBackground } from '../components/ParticleBackground';

export const Scene3Extraction: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Camera zoom towards the side panel on the right
  const zoomSpring = spring({
    frame: frame - 20,
    fps,
    config: { damping: 16, stiffness: 100 },
  });

  const scale = interpolate(zoomSpring, [0, 1], [0.92, 1.18]);
  const translateX = interpolate(zoomSpring, [0, 1], [0, -180]);
  const translateY = interpolate(zoomSpring, [0, 1], [60, 80]);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: COLORS.bg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: FONTS.sans,
        overflow: 'hidden',
      }}
    >
      <ParticleBackground intensity={0.9} />

      {/* Screencast Browser Frame */}
      <BrowserFrame
        url="https://www.baeldung.com/spring-boot-start"
        title="Spring Boot Tutorial - Bootstrap a Simple Application"
        width={1450}
        height={820}
        scale={scale}
        translateX={translateX}
        translateY={translateY}
        glow={true}
      >
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <Video
            src={staticFile('codestripper_demo.mp4')}
            trimBefore={33 * fps}
            playbackRate={1}
            objectFit="cover"
            style={{
              width: '100%',
              height: '100%',
              objectPosition: 'top center',
            }}
          />
        </div>
      </BrowserFrame>

      {/* Floating Feature Highlight Badge (Top Left) */}
      <div
        style={{
          position: 'absolute',
          top: 36,
          left: 60,
          zIndex: 30,
        }}
      >
        <FeatureBadge
          number="1"
          title="Clean Code Extraction"
          subtitle="Zero line numbers • Zero copy buttons • Zero prose clutter"
          variant="cyan"
          delay={5}
        />
      </div>

      {/* Floating Counter Chip (Bottom Left) */}
      <div
        style={{
          position: 'absolute',
          bottom: 55,
          left: 60,
          zIndex: 30,
        }}
      >
        <div
          style={{
            padding: '14px 24px',
            borderRadius: 14,
            backgroundColor: 'rgba(11, 15, 25, 0.92)',
            border: `1.5px solid ${COLORS.emerald}`,
            boxShadow: `0 8px 30px rgba(0, 0, 0, 0.6), 0 0 20px ${COLORS.emeraldGlow}`,
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            backdropFilter: 'blur(16px)',
          }}
        >
          <span style={{ fontSize: 22 }}>⚡</span>
          <div>
            <div style={{ fontSize: 16, fontWeight: 800, color: '#FFFFFF' }}>
              30 Code Snippets Extracted Instantly
            </div>
            <div style={{ fontSize: 12, color: COLORS.emerald, fontFamily: FONTS.mono, marginTop: 2 }}>
              Filters: All (30) • Source (21) • Configs (9)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
