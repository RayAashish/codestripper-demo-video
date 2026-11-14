import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { COLORS, FONTS } from '../constants';

interface KeyboardShortcutProps {
  os?: 'mac' | 'win';
  activeAtFrame?: number;
}

export const KeyboardShortcut: React.FC<KeyboardShortcutProps> = ({
  os = 'mac',
  activeAtFrame = 25,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const keys =
    os === 'mac'
      ? [
          { symbol: '⌥', label: 'Option' },
          { symbol: '⇧', label: 'Shift' },
          { symbol: 'C', label: 'C' },
        ]
      : [
          { symbol: 'Alt', label: 'Alt' },
          { symbol: '⇧', label: 'Shift' },
          { symbol: 'C', label: 'C' },
        ];

  // Press animation when active
  const isPressed = frame >= activeAtFrame && frame < activeAtFrame + 18;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 16,
      }}
    >
      {keys.map((k, index) => {
        const keyDelay = activeAtFrame + index * 4;
        const keySpring = spring({
          frame: frame - keyDelay,
          fps,
          config: { damping: 12, stiffness: 180 },
        });

        const translateY = isPressed ? 4 : interpolate(keySpring, [0, 1], [-20, 0]);
        const keyGlow = isPressed
          ? '0 0 25px rgba(0, 240, 255, 0.7), inset 0 0 10px rgba(0, 240, 255, 0.4)'
          : '0 8px 20px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.2)';

        return (
          <React.Fragment key={k.label}>
            <div
              style={{
                width: 90,
                height: 78,
                borderRadius: 14,
                backgroundColor: isPressed ? '#0C2D48' : '#182030',
                border: isPressed
                  ? `2px solid ${COLORS.cyan}`
                  : '1px solid rgba(255, 255, 255, 0.18)',
                boxShadow: keyGlow,
                transform: `translateY(${translateY}px) scale(${isPressed ? 0.96 : 1})`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: FONTS.mono,
                position: 'relative',
              }}
            >
              <span
                style={{
                  fontSize: 26,
                  fontWeight: 700,
                  color: isPressed ? COLORS.cyan : COLORS.textPrimary,
                  textShadow: isPressed ? `0 0 12px ${COLORS.cyan}` : 'none',
                }}
              >
                {k.symbol}
              </span>
              {k.label !== k.symbol && (
                <span
                  style={{
                    fontSize: 10,
                    textTransform: 'uppercase',
                    color: isPressed ? COLORS.cyan : COLORS.textMuted,
                    letterSpacing: '0.08em',
                    marginTop: 2,
                  }}
                >
                  {k.label}
                </span>
              )}
            </div>

            {index < keys.length - 1 && (
              <span
                style={{
                  fontSize: 22,
                  fontWeight: 600,
                  color: COLORS.textMuted,
                  fontFamily: FONTS.sans,
                }}
              >
                +
              </span>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
