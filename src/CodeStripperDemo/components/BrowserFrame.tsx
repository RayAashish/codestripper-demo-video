import React from 'react';
import { COLORS, FONTS } from '../constants';

interface BrowserFrameProps {
  url?: string;
  title?: string;
  children: React.ReactNode;
  width?: number;
  height?: number;
  scale?: number;
  translateX?: number;
  translateY?: number;
  rotateX?: number;
  rotateY?: number;
  glow?: boolean;
}

export const BrowserFrame: React.FC<BrowserFrameProps> = ({
  url = 'https://www.baeldung.com/spring-boot-start',
  title = 'Spring Boot Tutorial - Bootstrap a Simple Application',
  children,
  width = 1600,
  height = 940,
  scale = 1,
  translateX = 0,
  translateY = 0,
  rotateX = 0,
  rotateY = 0,
  glow = true,
}) => {
  return (
    <div
      style={{
        width,
        height,
        transform: `perspective(1200px) translate3d(${translateX}px, ${translateY}px, 0px) scale(${scale}) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transformOrigin: 'center center',
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: '#1E1E24',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        boxShadow: glow
          ? '0 24px 60px rgba(0, 0, 0, 0.75), 0 0 40px rgba(0, 120, 212, 0.25)'
          : '0 24px 60px rgba(0, 0, 0, 0.75)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Title bar / Tab bar */}
      <div
        style={{
          height: 44,
          backgroundColor: '#141418',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          alignItems: 'center',
          padding: '0 16px',
          gap: 16,
          flexShrink: 0,
        }}
      >
        {/* macOS Traffic Lights */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#FF5F56' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#FFBD2E' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#27C93F' }} />
        </div>

        {/* Browser Tab */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '6px 14px',
            backgroundColor: '#23232A',
            borderRadius: '8px 8px 0 0',
            maxWidth: 360,
            fontFamily: FONTS.sans,
            fontSize: 12,
            color: '#FFFFFF',
            borderTop: '2px solid #0078D4',
          }}
        >
          {/* Edge mini icon */}
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #0078D4, #00F0FF)',
              flexShrink: 0,
            }}
          />
          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {title}
          </span>
        </div>

        {/* URL Address Bar */}
        <div
          style={{
            flex: 1,
            height: 28,
            backgroundColor: '#0F0F12',
            borderRadius: 6,
            border: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            padding: '0 12px',
            gap: 8,
            fontFamily: FONTS.sans,
            fontSize: 11,
            color: '#94A3B8',
          }}
        >
          <span style={{ color: '#10B981', fontSize: 10 }}>🔒</span>
          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {url}
          </span>
        </div>

        {/* Edge Side Panel Toggle Indicator */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            padding: '4px 10px',
            backgroundColor: 'rgba(0, 240, 255, 0.12)',
            borderRadius: 6,
            border: '1px solid rgba(0, 240, 255, 0.3)',
            color: COLORS.cyan,
            fontFamily: FONTS.sans,
            fontSize: 11,
            fontWeight: 600,
          }}
        >
          <span>⚡ Side Panel</span>
        </div>
      </div>

      {/* Viewport content */}
      <div
        style={{
          flex: 1,
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#000000',
        }}
      >
        {children}
      </div>
    </div>
  );
};
