import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { COLORS, FONTS } from '../constants';

interface FeatureBadgeProps {
  number?: string;
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  variant?: 'cyan' | 'purple' | 'emerald' | 'amber';
  delay?: number;
}

export const FeatureBadge: React.FC<FeatureBadgeProps> = ({
  number,
  title,
  subtitle,
  icon,
  variant = 'cyan',
  delay = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 14, stiffness: 140 },
  });

  const color =
    variant === 'cyan'
      ? COLORS.cyan
      : variant === 'purple'
      ? COLORS.purple
      : variant === 'emerald'
      ? COLORS.emerald
      : COLORS.amber;

  const glowColor =
    variant === 'cyan'
      ? COLORS.cyanGlow
      : variant === 'purple'
      ? COLORS.purpleGlow
      : variant === 'emerald'
      ? COLORS.emeraldGlow
      : 'rgba(245, 158, 11, 0.45)';

  const translateY = interpolate(progress, [0, 1], [30, 0]);
  const opacity = interpolate(progress, [0, 1], [0, 1]);
  const scale = interpolate(progress, [0, 1], [0.92, 1]);

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 16,
        padding: '12px 22px',
        borderRadius: 16,
        backgroundColor: 'rgba(15, 23, 42, 0.88)',
        border: `1.5px solid ${color}`,
        boxShadow: `0 8px 32px rgba(0, 0, 0, 0.5), 0 0 24px ${glowColor}`,
        backdropFilter: 'blur(16px)',
        transform: `translateY(${translateY}px) scale(${scale})`,
        opacity,
        fontFamily: FONTS.sans,
      }}
    >
      {number && (
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: '50%',
            backgroundColor: color,
            color: '#000000',
            fontWeight: 800,
            fontSize: 16,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: FONTS.mono,
            flexShrink: 0,
          }}
        >
          {number}
        </div>
      )}

      {icon && (
        <div
          style={{
            color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          {icon}
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span
          style={{
            fontSize: 19,
            fontWeight: 700,
            color: COLORS.textPrimary,
            letterSpacing: '-0.01em',
          }}
        >
          {title}
        </span>
        {subtitle && (
          <span
            style={{
              fontSize: 13,
              fontWeight: 500,
              color: COLORS.textSecondary,
              marginTop: 2,
            }}
          >
            {subtitle}
          </span>
        )}
      </div>
    </div>
  );
};
