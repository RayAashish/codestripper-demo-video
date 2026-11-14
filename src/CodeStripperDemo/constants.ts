export const COLORS = {
  bg: '#080B11',
  bgDark: '#05070A',
  bgCard: 'rgba(15, 23, 42, 0.82)',
  bgGlass: 'rgba(255, 255, 255, 0.05)',
  borderGlass: 'rgba(255, 255, 255, 0.12)',
  borderHighlight: 'rgba(56, 189, 248, 0.35)',
  
  cyan: '#00F0FF',
  cyanGlow: 'rgba(0, 240, 255, 0.45)',
  purple: '#A855F7',
  purpleGlow: 'rgba(168, 85, 247, 0.45)',
  emerald: '#10B981',
  emeraldGlow: 'rgba(16, 185, 129, 0.45)',
  amber: '#F59E0B',
  red: '#EF4444',
  
  textPrimary: '#FFFFFF',
  textSecondary: '#94A3B8',
  textMuted: '#64748B',
  
  edgeBlue: '#0078D4',
  baeldungGreen: '#39783D',
};

export const FONTS = {
  sans: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", sans-serif',
  mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "JetBrains Mono", monospace',
};

export const TIMINGS = {
  fps: 30,
  totalFrames: 1320, // 44.0 seconds
  
  scene1: { from: 0, duration: 135 },       // 0.0s - 4.5s: The Hook & Pain Point
  scene2: { from: 135, duration: 150 },     // 4.5s - 9.5s: Shortcut & Extension Reveal
  scene3: { from: 285, duration: 225 },     // 9.5s - 17.0s: Clean Code Extraction (Baeldung)
  scene4: { from: 510, duration: 225 },     // 17.0s - 24.5s: Deterministic File Naming
  scene5: { from: 735, duration: 225 },     // 24.5s - 32.0s: Download Skeleton (.zip)
  scene6: { from: 960, duration: 210 },     // 32.0s - 39.0s: Markdown Export + Universal + Privacy
  scene7: { from: 1170, duration: 150 },    // 39.0s - 44.0s: Outro & Edge Store CTA
};
