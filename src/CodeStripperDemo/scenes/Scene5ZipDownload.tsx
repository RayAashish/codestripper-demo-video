import React from 'react';
import { interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import { Video } from '@remotion/media';
import { COLORS, FONTS } from '../constants';
import { BrowserFrame } from '../components/BrowserFrame';
import { FeatureBadge } from '../components/FeatureBadge';
import { ZipTreeModal } from '../components/ZipTreeModal';
import { ParticleBackground } from '../components/ParticleBackground';

export const Scene5ZipDownload: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Mouse cursor animation to the Download Skeleton button
  const clickFrame = 45;

  const cursorProgress = spring({
    frame: frame - 10,
    fps,
    config: { damping: 16, stiffness: 90 },
  });

  const cursorX = interpolate(cursorProgress, [0, 1], [1300, 1140]);
  const cursorY = interpolate(cursorProgress, [0, 1], [400, 175]);
  const isClicking = frame >= clickFrame && frame <= clickFrame + 8;

  // Button glow pulse on click
  const buttonPulse = spring({
    frame: frame - clickFrame,
    fps,
    config: { damping: 10, stiffness: 220 },
  });

  // Modal entrance after click
  const modalDelay = clickFrame + 10;

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
      <ParticleBackground intensity={1.1} />

      {/* Background Screencast Browser Frame */}
      <BrowserFrame
        url="https://www.baeldung.com/spring-boot-start"
        title="Spring Boot Tutorial - Bootstrap a Simple Application"
        width={1450}
        height={820}
        scale={1.18}
        translateX={-200}
        translateY={70}
        glow={false}
      >
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <Video
            src={staticFile('codestripper_demo.mp4')}
            trimBefore={33 * fps}
            playbackRate={0.3}
            objectFit="cover"
            style={{
              width: '100%',
              height: '100%',
              objectPosition: 'top center',
              filter: frame > modalDelay ? 'brightness(0.35) blur(6px)' : 'none',
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
          zIndex: 40,
        }}
      >
        <FeatureBadge
          number="3"
          title="Download Project Skeleton (.zip)"
          subtitle="One-click ZIP generation with auto-generated README.md"
          variant="cyan"
          delay={5}
        />
      </div>

      {/* Interactive Mouse Cursor */}
      {frame < modalDelay + 10 && (
        <div
          style={{
            position: 'absolute',
            left: cursorX,
            top: cursorY,
            zIndex: 50,
            transform: `scale(${isClicking ? 0.88 : 1})`,
            pointerEvents: 'none',
            filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.6))',
          }}
        >
          {/* Custom SVG pointer cursor */}
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
              fill="#FFFFFF"
              stroke="#000000"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>

          {/* Click Ripple Effect */}
          {isClicking && (
            <div
              style={{
                position: 'absolute',
                top: 2,
                left: 2,
                width: 36,
                height: 36,
                borderRadius: '50%',
                border: `3px solid ${COLORS.cyan}`,
                transform: `scale(${interpolate(buttonPulse, [0, 1], [0.5, 2.2])})`,
                opacity: interpolate(buttonPulse, [0, 1], [1, 0]),
              }}
            />
          )}
        </div>
      )}

      {/* Centered ZipTreeModal Popup */}
      <div
        style={{
          position: 'absolute',
          top: '52%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 60,
        }}
      >
        <ZipTreeModal delay={modalDelay} />
      </div>

      {/* Bottom Value Prop Pill */}
      {frame >= modalDelay + 15 && (
        <div
          style={{
            position: 'absolute',
            bottom: 55,
            zIndex: 60,
            padding: '12px 28px',
            borderRadius: 30,
            backgroundColor: 'rgba(16, 185, 129, 0.15)',
            border: `1.5px solid ${COLORS.emerald}`,
            boxShadow: `0 0 30px ${COLORS.emeraldGlow}`,
            color: '#FFFFFF',
            fontSize: 18,
            fontWeight: 700,
            backdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <span>🚀</span>
          <span>Open directly in VS Code, IntelliJ, or Terminal in 5 seconds!</span>
        </div>
      )}
    </div>
  );
};
