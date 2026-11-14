import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { COLORS, FONTS } from '../constants';

export const ZipTreeModal: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 13, stiffness: 140 },
  });

  const scale = interpolate(progress, [0, 1], [0.8, 1]);
  const opacity = interpolate(progress, [0, 1], [0, 1]);
  const translateY = interpolate(progress, [0, 1], [40, 0]);

  const treeItems = [
    { type: 'folder', name: 'src/main/java/com/baeldung/demo/', highlight: false, delay: 6 },
    { type: 'java', name: '├── Application.java', highlight: true, tag: 'Mapped Package', delay: 10 },
    { type: 'java', name: '└── SecurityConfig.java', highlight: true, tag: 'Mapped Package', delay: 14 },
    { type: 'folder', name: 'src/main/resources/', highlight: false, delay: 18 },
    { type: 'file', name: '└── application.yml', highlight: true, tag: 'Config Inferred', delay: 22 },
    { type: 'xml', name: 'pom.xml', highlight: true, tag: 'Cleaned Dependencies', delay: 26 },
    { type: 'readme', name: 'README.md', highlight: true, tag: '⚡ Auto-Generated Guide', delay: 30 },
  ];

  return (
    <div
      style={{
        width: 520,
        backgroundColor: 'rgba(11, 15, 25, 0.95)',
        border: `2px solid ${COLORS.cyan}`,
        borderRadius: 18,
        boxShadow: `0 24px 60px rgba(0, 0, 0, 0.8), 0 0 35px ${COLORS.cyanGlow}`,
        backdropFilter: 'blur(20px)',
        padding: '24px 28px',
        transform: `translateY(${translateY}px) scale(${scale})`,
        opacity,
        fontFamily: FONTS.mono,
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          paddingBottom: 14,
          marginBottom: 16,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 24 }}>📦</span>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700, color: '#FFFFFF', fontFamily: FONTS.sans }}>
              spring-boot-skeleton.zip
            </div>
            <div style={{ fontSize: 11, color: COLORS.emerald, fontFamily: FONTS.mono }}>
              ✓ Ready-to-compile project skeleton
            </div>
          </div>
        </div>

        <div
          style={{
            padding: '4px 10px',
            borderRadius: 6,
            backgroundColor: 'rgba(16, 185, 129, 0.15)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            color: COLORS.emerald,
            fontSize: 11,
            fontWeight: 700,
          }}
        >
          1-CLICK ZIP
        </div>
      </div>

      {/* Directory Tree */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
        {treeItems.map((item) => {
          const itemProgress = spring({
            frame: frame - delay - item.delay,
            fps,
            config: { damping: 15, stiffness: 200 },
          });

          const itemOpacity = interpolate(itemProgress, [0, 1], [0, 1]);
          const itemX = interpolate(itemProgress, [0, 1], [-15, 0]);

          return (
            <div
              key={item.name}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '4px 8px',
                borderRadius: 6,
                backgroundColor: item.highlight ? 'rgba(255, 255, 255, 0.04)' : 'transparent',
                opacity: itemOpacity,
                transform: `translateX(${itemX}px)`,
                fontSize: 13,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#E2E8F0' }}>
                <span style={{ color: item.highlight ? COLORS.cyan : COLORS.textMuted }}>
                  {item.name}
                </span>
              </div>

              {item.tag && (
                <span
                  style={{
                    fontSize: 10,
                    padding: '2px 8px',
                    borderRadius: 4,
                    backgroundColor:
                      item.name === 'README.md'
                        ? 'rgba(0, 240, 255, 0.15)'
                        : 'rgba(255, 255, 255, 0.08)',
                    color: item.name === 'README.md' ? COLORS.cyan : COLORS.textSecondary,
                    fontWeight: 600,
                  }}
                >
                  {item.tag}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
