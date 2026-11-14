import React from 'react';
import { interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import { Video } from '@remotion/media';
import { COLORS, FONTS } from '../constants';
import { BrowserFrame } from '../components/BrowserFrame';
import { FeatureBadge } from '../components/FeatureBadge';
import { ParticleBackground } from '../components/ParticleBackground';

export const Scene6MarkdownObsidian: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Switch between Kotlin docs (0-100) and MDN docs (100-210)
  const isKotlin = frame < 105;

  const privacySpring = spring({
    frame: frame - 45,
    fps,
    config: { damping: 13, stiffness: 150 },
  });

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

      {/* Browser Mockup */}
      <BrowserFrame
        url={
          isKotlin
            ? 'https://kotlinlang.org/docs/collections-overview.html'
            : 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections'
        }
        title={
          isKotlin
            ? 'Collections overview | Kotlin Documentation'
            : 'Keyed collections - JavaScript | MDN'
        }
        width={1450}
        height={820}
        scale={1.12}
        translateX={-100}
        translateY={70}
        glow={true}
      >
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          {isKotlin ? (
            <Video
              src={staticFile('codestripper_demo.mp4')}
              trimBefore={67 * fps}
              playbackRate={1}
              objectFit="cover"
              style={{
                width: '100%',
                height: '100%',
                objectPosition: 'top center',
              }}
            />
          ) : (
            <Video
              src={staticFile('codestripper_demo.mp4')}
              trimBefore={83 * fps}
              playbackRate={1}
              objectFit="cover"
              style={{
                width: '100%',
                height: '100%',
                objectPosition: 'top center',
              }}
            />
          )}
        </div>
      </BrowserFrame>

      {/* Feature 4 Badge (Top Left) */}
      <div
        style={{
          position: 'absolute',
          top: 36,
          left: 60,
          zIndex: 40,
        }}
      >
        <FeatureBadge
          number="4"
          title="Copy All as Markdown"
          subtitle="Formats complete tutorial into clean Obsidian & Notion study notes"
          variant="amber"
          delay={5}
        />
      </div>

      {/* Feature 5 / Privacy Shield Card (Bottom Left) */}
      <div
        style={{
          position: 'absolute',
          bottom: 50,
          left: 60,
          zIndex: 40,
          padding: '18px 26px',
          borderRadius: 18,
          backgroundColor: 'rgba(11, 15, 25, 0.94)',
          border: `1.5px solid ${COLORS.emerald}`,
          boxShadow: `0 16px 40px rgba(0, 0, 0, 0.7), 0 0 25px ${COLORS.emeraldGlow}`,
          backdropFilter: 'blur(16px)',
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          opacity: interpolate(privacySpring, [0, 1], [0, 1]),
          transform: `translateY(${interpolate(privacySpring, [0, 1], [30, 0])}px)`,
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: '50%',
            backgroundColor: 'rgba(16, 185, 129, 0.15)',
            border: `1.5px solid ${COLORS.emerald}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 24,
            flexShrink: 0,
          }}
        >
          🔒
        </div>

        <div>
          <div style={{ fontSize: 17, fontWeight: 800, color: '#FFFFFF' }}>
            5. 100% Client-Side & Private
          </div>
          <div style={{ fontSize: 13, color: COLORS.textSecondary, marginTop: 2 }}>
            Zero external servers • $0 backend cost • Zero data tracking • Pure in-memory
          </div>
        </div>
      </div>
    </div>
  );
};
