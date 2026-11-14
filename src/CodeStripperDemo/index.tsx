import React from 'react';
import { interpolate, Sequence, staticFile, useCurrentFrame } from 'remotion';
import { Audio } from '@remotion/media';
import { TIMINGS } from './constants';
import { Scene1Hook } from './scenes/Scene1Hook';
import { Scene2Trigger } from './scenes/Scene2Trigger';
import { Scene3Extraction } from './scenes/Scene3Extraction';
import { Scene4FileNaming } from './scenes/Scene4FileNaming';
import { Scene5ZipDownload } from './scenes/Scene5ZipDownload';
import { Scene6MarkdownObsidian } from './scenes/Scene6MarkdownObsidian';
import { Scene7Outro } from './scenes/Scene7Outro';

export const CodeStripperDemo: React.FC = () => {
  const frame = useCurrentFrame();

  // Background music volume curve
  const musicVolume = interpolate(
    frame,
    [
      0,
      30,
      TIMINGS.scene7.from,
      TIMINGS.totalFrames - 45,
      TIMINGS.totalFrames,
    ],
    [0, 0.85, 0.85, 0.8, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  return (
    <div
      style={{
        flex: 1,
        backgroundColor: '#080B11',
        position: 'relative',
        width: 1920,
        height: 1080,
        overflow: 'hidden',
      }}
    >
      {/* Background High-Energy Music Track */}
      <Audio
        src={staticFile('tech_beat.wav')}
        volume={musicVolume}
      />

      {/* Synchronized Sound Effects */}
      {/* Scene Transitions Whoosh */}
      <Audio
        src={staticFile('sfx/whoosh.wav')}
        from={TIMINGS.scene1.duration - 8}
        volume={0.35}
      />
      <Audio
        src={staticFile('sfx/whoosh.wav')}
        from={TIMINGS.scene2.from + TIMINGS.scene2.duration - 8}
        volume={0.35}
      />
      <Audio
        src={staticFile('sfx/whoosh.wav')}
        from={TIMINGS.scene3.from + TIMINGS.scene3.duration - 8}
        volume={0.35}
      />
      <Audio
        src={staticFile('sfx/whoosh.wav')}
        from={TIMINGS.scene4.from + TIMINGS.scene4.duration - 8}
        volume={0.35}
      />
      <Audio
        src={staticFile('sfx/whoosh.wav')}
        from={TIMINGS.scene5.from + TIMINGS.scene5.duration - 8}
        volume={0.35}
      />
      <Audio
        src={staticFile('sfx/whoosh.wav')}
        from={TIMINGS.scene6.from + TIMINGS.scene6.duration - 8}
        volume={0.35}
      />

      {/* Keyboard Shortcut Keypress Click */}
      <Audio
        src={staticFile('sfx/mouse-click.wav')}
        from={TIMINGS.scene2.from + 35}
        volume={0.6}
      />

      {/* Download Skeleton Mouse Click */}
      <Audio
        src={staticFile('sfx/mouse-click.wav')}
        from={TIMINGS.scene5.from + 45}
        volume={0.7}
      />

      {/* Download Complete Ding */}
      <Audio
        src={staticFile('sfx/ding.wav')}
        from={TIMINGS.scene5.from + 55}
        volume={0.5}
      />

      {/* Scene 1: The Hook (0.0s - 4.5s) */}
      <Sequence
        from={TIMINGS.scene1.from}
        durationInFrames={TIMINGS.scene1.duration}
        name="Scene 1: The Hook"
      >
        <Scene1Hook />
      </Sequence>

      {/* Scene 2: Product Reveal & Trigger (4.5s - 9.5s) */}
      <Sequence
        from={TIMINGS.scene2.from}
        durationInFrames={TIMINGS.scene2.duration}
        name="Scene 2: Trigger & Reveal"
      >
        <Scene2Trigger />
      </Sequence>

      {/* Scene 3: Clean Code Extraction (9.5s - 17.0s) */}
      <Sequence
        from={TIMINGS.scene3.from}
        durationInFrames={TIMINGS.scene3.duration}
        name="Scene 3: Clean Extraction (Baeldung)"
      >
        <Scene3Extraction />
      </Sequence>

      {/* Scene 4: Deterministic File Naming (17.0s - 24.5s) */}
      <Sequence
        from={TIMINGS.scene4.from}
        durationInFrames={TIMINGS.scene4.duration}
        name="Scene 4: Deterministic File Naming"
      >
        <Scene4FileNaming />
      </Sequence>

      {/* Scene 5: Download Project Skeleton (.zip) (24.5s - 32.0s) */}
      <Sequence
        from={TIMINGS.scene5.from}
        durationInFrames={TIMINGS.scene5.duration}
        name="Scene 5: 1-Click ZIP Generation"
      >
        <Scene5ZipDownload />
      </Sequence>

      {/* Scene 6: Markdown Export & Universal Privacy (32.0s - 39.0s) */}
      <Sequence
        from={TIMINGS.scene6.from}
        durationInFrames={TIMINGS.scene6.duration}
        name="Scene 6: Markdown & Privacy"
      >
        <Scene6MarkdownObsidian />
      </Sequence>

      {/* Scene 7: Outro & Call to Action (39.0s - 44.0s) */}
      <Sequence
        from={TIMINGS.scene7.from}
        durationInFrames={TIMINGS.scene7.duration}
        name="Scene 7: Outro & Edge Store CTA"
      >
        <Scene7Outro />
      </Sequence>
    </div>
  );
};
