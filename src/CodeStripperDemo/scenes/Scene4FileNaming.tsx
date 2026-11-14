import React from 'react';
import { interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import { Video } from '@remotion/media';
import { COLORS, FONTS } from '../constants';
import { BrowserFrame } from '../components/BrowserFrame';
import { FeatureBadge } from '../components/FeatureBadge';
import { ParticleBackground } from '../components/ParticleBackground';

export const Scene4FileNaming: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Camera zoom focused on the side panel code list
  const zoomSpring = spring({
    frame,
    fps,
    config: { damping: 15, stiffness: 120 },
  });

  const scale = interpolate(zoomSpring, [0, 1], [1.05, 1.25]);
  const translateX = interpolate(zoomSpring, [0, 1], [-160, -260]);
  const translateY = interpolate(zoomSpring, [0, 1], [60, 75]);

  const paths = [
    { name: 'src/main/java/Application.java', tag: 'Spring Main Class', color: COLORS.cyan },
    { name: 'src/main/java/SecurityConfig.java', tag: 'Security Configuration', color: COLORS.purple },
    { name: 'home.html', tag: 'Web Template', color: COLORS.amber },
    { name: 'pom.xml', tag: 'Maven Build Root', color: COLORS.emerald },
  ];

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
            trimBefore={34 * fps}
            playbackRate={0.35}
            objectFit="cover"
            style={{
              width: '100%',
              height: '100%',
              objectPosition: 'top center',
            }}
          />
        </div>
      </BrowserFrame>

      {/* Feature Badge (Top Left) */}
      <div
        style={{
          position: 'absolute',
          top: 36,
          left: 60,
          zIndex: 30,
        }}
      >
        <FeatureBadge
          number="2"
          title="Deterministic File Naming"
          subtitle="Smart automatic mapping to standard project directories"
          variant="purple"
          delay={5}
        />
      </div>

      {/* Inferred Paths Callout Card (Left Side) */}
      <div
        style={{
          position: 'absolute',
          top: 145,
          left: 60,
          width: 440,
          padding: '22px 26px',
          borderRadius: 18,
          backgroundColor: 'rgba(11, 15, 25, 0.94)',
          border: '1.5px solid rgba(168, 85, 247, 0.4)',
          boxShadow: `0 20px 50px rgba(0, 0, 0, 0.7), 0 0 30px ${COLORS.purpleGlow}`,
          backdropFilter: 'blur(18px)',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          zIndex: 30,
        }}
      >
        <div
          style={{
            fontSize: 12,
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: COLORS.purple,
            fontFamily: FONTS.mono,
          }}
        >
          Auto-Inferred Paths
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {paths.map((p, idx) => {
            const itemSpring = spring({
              frame: frame - (15 + idx * 8),
              fps,
              config: { damping: 14, stiffness: 180 },
            });

            return (
              <div
                key={p.name}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '8px 12px',
                  borderRadius: 8,
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  opacity: interpolate(itemSpring, [0, 1], [0, 1]),
                  transform: `translateX(${interpolate(itemSpring, [0, 1], [-20, 0])}px)`,
                }}
              >
                <span
                  style={{
                    fontFamily: FONTS.mono,
                    fontSize: 12.5,
                    fontWeight: 600,
                    color: '#FFFFFF',
                  }}
                >
                  {p.name}
                </span>

                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    color: p.color,
                    padding: '2px 8px',
                    borderRadius: 4,
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  }}
                >
                  {p.tag}
                </span>
              </div>
            );
          })}
        </div>

        <div
          style={{
            fontSize: 12,
            color: COLORS.textSecondary,
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: 10,
            marginTop: 4,
            display: 'flex',
            alignItems: 'center',
            gap: 6,
          }}
        >
          <span>✏️</span>
          <span>Click any path in the panel to edit before downloading!</span>
        </div>
      </div>
    </div>
  );
};
