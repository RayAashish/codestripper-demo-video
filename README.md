# CodeStripper Demo Video Engine

<p align="center">
  <em>High-performance programmatic motion graphics and launch video production engine for <strong>CodeStripper: Technical Tutorial Distiller</strong> — engineered for sub-second developer retention, kinetic UI interactions, and procedural multi-track audio synthesis.</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Active-emerald?style=for-the-badge" alt="Status" />
  <img src="https://img.shields.io/badge/Remotion-4.0.538-0B84F3?style=for-the-badge&logo=remotion&logoColor=white" alt="Remotion" />
  <img src="https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Rspack-Accelerated-F05A28?style=for-the-badge&logo=webpack&logoColor=white" alt="Rspack" />
  <img src="https://img.shields.io/badge/Output-1080p_FHD_60fps-00F0FF?style=for-the-badge" alt="Output 1080p" />
  <img src="https://img.shields.io/badge/License-MIT-success?style=for-the-badge" alt="License" />
</p>

<p align="center">
  <!-- PRIMARY ACTION BUTTONS -->
  <a href="https://github.com/RayAashish/codestripper-demo-video/releases/download/v2026.11.14/codestripper_linkedin_launch.mp4">
    <img src="https://img.shields.io/badge/Download-Master_MP4-25D366?style=for-the-badge&logo=video&logoColor=white" alt="Download Master Video" />
  </a>
  <a href="https://microsoftedge.microsoft.com/addons/detail/codestripper-technical-t/hicjkkopfkoeopphhhccfejpkhkcglaa">
    <img src="https://img.shields.io/badge/Get_Extension-Microsoft_Edge-0078D4?style=for-the-badge&logo=microsoftedge&logoColor=white" alt="Edge Add-ons Store" />
  </a>
  <a href="https://github.com/RayAashish/chrome-extensions/tree/main/code-stripper">
    <img src="https://img.shields.io/badge/Core_Extension-Source_Code-8A2BE2?style=for-the-badge&logo=github&logoColor=white" alt="Core Extension Code" />
  </a>
</p>

---

## Visual Showcase & Timeline

<p align="center">
  <img src="public/stills/frame_60.png" width="48%" alt="Scene 1: The Hook" />
  <img src="public/stills/frame_200.png" width="48%" alt="Scene 2: Trigger & Reveal" />
</p>
<p align="center">
  <img src="public/stills/frame_380.png" width="48%" alt="Scene 3: Clean Code Extraction" />
  <img src="public/stills/frame_620.png" width="48%" alt="Scene 4: Deterministic File Naming" />
</p>
<p align="center">
  <img src="public/stills/frame_830.png" width="48%" alt="Scene 5: 1-Click ZIP Generation" />
  <img src="public/stills/frame_1240.png" width="48%" alt="Scene 7: Outro & Call to Action" />
</p>

---

## Overview & Key Highlights

- **Problem Statement:** Traditional product demos rely on generic screen recordings that suffer from sluggish pacing, distracting desktop clutter, poor typography, and lack of auditory feedback. Viewers drop off within the first 3 seconds, missing key architectural differentiators.
- **Core Value Proposition:** This project provides an enterprise-grade programmatic video rendering pipeline built with React and Remotion. Every camera move, mechanical key press, particle emitter, and UI layer is expressed as declarative, mathematically deterministic code with frame-perfect audio synchronization.
- **Feature Matrix:**
  - **Declarative Motion Timing:** 44.0-second timeline (1,320 frames @ 30 FPS) structured around human attention spans and social feed autoplay algorithms.
  - **Interactive 3D Elements:** Animated mechanical keycap presses (`⌥ Option + ⇧ Shift + C`), dynamic browser viewports, and glassmorphic modal popups.
  - **Procedural Audio Synthesis:** Zero-dependency Python audio synthesizer (`scripts/synthesize_beat.py`) generating a 124 BPM electronic tech beat mapped to D-minor chords with punchy 808 subs.
  - **Synchronized Audio Events:** Hardware-accelerated UI sound design including spatial whoosh transitions, mechanical clicks, and zip completion chimes.
  - **Chrome Headless Acceleration:** Multi-threaded parallel frame rendering via Rspack and Chromium Headless Shell with zero external cloud dependencies.

---

## System Architecture & Workflow

### High-Level Architecture Diagram

```mermaid
graph TD
    subgraph Assets ["1. Asset Pipeline & Synthesis"]
        A1["Raw Screencast MP4<br/>(public/codestripper_demo.mp4)"]
        A2["Procedural 124 BPM Beat<br/>(scripts/synthesize_beat.py)"]
        A3["UI Audio Effects<br/>(whoosh, click, ding)"]
        A4["Vector Geometry & Logos<br/>(SVG Squircle & Bolts)"]
    end

    subgraph Composition ["2. React 19 / Remotion Engine"]
        C0["CodeStripperDemo Master Composition<br/>(1920x1080 @ 30fps | 1320 frames)"]
        C1["Scene 1: Kinetic Hook<br/>(0s - 4.5s)"]
        C2["Scene 2: Shortcut Reveal<br/>(4.5s - 9.5s)"]
        C3["Scene 3: Baeldung Extraction<br/>(9.5s - 17.0s)"]
        C4["Scene 4: Path Inference<br/>(17.0s - 24.5s)"]
        C5["Scene 5: 1-Click ZIP Modal<br/>(24.5s - 32.0s)"]
        C6["Scene 6: Markdown & Privacy<br/>(32.0s - 39.0s)"]
        C7["Scene 7: Store CTA<br/>(39.0s - 44.0s)"]
    end

    subgraph AudioEngine ["3. Audio-Visual Synchronization"]
        AV1["Volume Ducking Envelope"]
        AV2["Transient Click Triggers"]
        AV3["Scene Transition Markers"]
    end

    subgraph RenderEngine ["4. Build & Distribution"]
        R1["Rspack Incremental Bundler"]
        R2["Chromium Headless Shell (8 Workers)"]
        R3["FFmpeg Libx264 Encapsulator"]
        R4["Master Video: out/codestripper_linkedin_launch.mp4"]
        R5["GitHub Release Binary Distribution"]
    end

    A1 --> C3
    A1 --> C4
    A1 --> C5
    A1 --> C6
    A2 --> AV1 --> C0
    A3 --> AV2 --> C0
    A4 --> C1
    A4 --> C2
    A4 --> C7

    C0 --> C1
    C0 --> C2
    C0 --> C3
    C0 --> C4
    C0 --> C5
    C0 --> C6
    C0 --> C7

    C0 --> R1 --> R2 --> R3 --> R4 --> R5
```

### Component Breakdown

⚬ **Presentation Layer:**
- `CodeStripperLogo`: Procedural SVG squircle featuring dual neon-glow lightning bolts with reactive scale pulses.
- `ParticleBackground`: Floating ambient gradient blobs with developer grid overlays and 12 drifting code tokens (`pom.xml`, `application.yml`, `Option + Shift + C`).
- `BrowserFrame`: Modern dark-mode browser mockup with macOS window controls, dynamic tab headers, and 3D perspective transforms (`rotateX`, `rotateY`, `scale`).
- `KeyboardShortcut`: Interactive 3D mechanical keycaps with realistic spring-damper depression physics and cyan neon key travel illumination.
- `ZipTreeModal`: Glassmorphic directory tree container showcasing deterministic Spring Boot folder hierarchies and auto-generated `README.md` artifacts.
- `FeatureBadge`: High-contrast pill badges styled with color-coded luminescence (Cyan, Purple, Emerald, Amber).

⚬ **Core Engine / Processing:**
- `remotion.config.ts`: Rspack-enabled bundler configuration with JPEG intermediate caching and automated stream multiplexing.
- `TIMINGS` Registry: Centralized frame map enforcing strict scene entry/exit boundaries across 1,320 frames.
- `scripts/synthesize_beat.py`: In-memory waveform synthesis generating a 16-bit 44.1kHz stereo PCM soundtrack using pure mathematical functions (`tanh` saturation, envelope decays, and melodic arpeggiators).

⚬ **Data & I/O:**
- `public/sfx/`: Low-latency uncompressed WAV audio buffers for tactile user interactions.
- `public/stills/`: Rendered keyframes utilized for promotional cards, thumbnails, and documentation badges.
- `GitHub Releases`: Offloaded binary distribution network ensuring the core Git tree remains featherlight (<2 MB).

---

## Project Structure

```text
codestripper-demo-video/
├── .env.example                               # Environment template for render workers
├── .gitignore                                 # Strict multi-layer security & binary exclusion rules
├── eslint.config.mjs                          # Flat ESLint configuration with Remotion lint rules
├── package.json                               # Dependencies & build scripts
├── remotion.config.ts                         # Remotion CLI & Rspack compilation settings
├── tsconfig.json                              # TypeScript strict compiler configuration
├── public/                                    # Public assets served via staticFile()
│   ├── sfx/                                   # Tactile audio samples (ding, click, whoosh)
│   ├── stills/                                # Exported promotional frame captures
│   └── tech_beat.wav                          # Synthesized 124 BPM soundtrack
├── scripts/
│   └── synthesize_beat.py                     # Zero-dependency Python audio synthesizer
├── src/
│   ├── index.ts                               # Remotion root entrypoint
│   ├── Root.tsx                               # Master composition catalog
│   └── CodeStripperDemo/                      # Core demo video production module
│       ├── constants.ts                       # Palette, font hierarchies, and frame timeline
│       ├── index.tsx                          # Timeline sequence orchestrator
│       ├── components/
│       │   ├── BrowserFrame.tsx               # macOS styled dark browser viewport
│       │   ├── CodeStripperLogo.tsx           # Vector squircle logo with neon glow
│       │   ├── FeatureBadge.tsx               # Numbered value proposition pills
│       │   ├── KeyboardShortcut.tsx           # 3D mechanical keypress component
│       │   ├── ParticleBackground.tsx         # Cybernetic grid & drifting tokens
│       │   └── ZipTreeModal.tsx               # 3D file tree modal with badges
│       └── scenes/
│           ├── Scene1Hook.tsx                 # 0.0s - 4.5s: "We read tutorials for the code"
│           ├── Scene2Trigger.tsx              # 4.5s - 9.5s: Shortcut keypress & platform pills
│           ├── Scene3Extraction.tsx           # 9.5s - 17.0s: Baeldung Spring Boot extraction
│           ├── Scene4FileNaming.tsx           # 17.0s - 24.5s: Deterministic path mapping
│           ├── Scene5ZipDownload.tsx          # 24.5s - 32.0s: 1-Click ZIP generation
│           ├── Scene6MarkdownObsidian.tsx     # 32.0s - 39.0s: Markdown export & privacy shield
│           └── Scene7Outro.tsx                # 39.0s - 44.0s: Edge Store download CTA
└── out/                                       # Git-ignored production render outputs
    └── codestripper_linkedin_launch.mp4       # Master 1080p release video
```

---

## Getting Started & Local Setup

### Prerequisites

⚬ **Node.js**: `v20.19.0`, `v22.13.0`, or `>=v24.0.0`  
⚬ **Package Manager**: `npm` (v10+) or `pnpm` / `bun`  
⚬ **Python**: `python3` (3.9+) for procedural beat synthesis  
⚬ **Browser**: Google Chrome or Chromium (for Remotion Studio & Headless Shell rendering)

### Installation & Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/RayAashish/codestripper-demo-video.git
   cd codestripper-demo-video
   ```

2. **Configure environment:**
   ```bash
   cp .env.example .env
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **(Optional) Re-synthesize audio soundtrack:**
   ```bash
   python3 scripts/synthesize_beat.py
   ```

5. **Launch interactive Remotion Studio:**
   ```bash
   npm run dev
   ```
   *Navigate to [http://localhost:3000](http://localhost:3000) to inspect and scrub frames in real time.*

6. **Render high-resolution stills:**
   ```bash
   npx remotion still CodeStripperDemo public/stills/frame_60.png --frame 60
   ```

7. **Render production master video:**
   ```bash
   npx remotion render CodeStripperDemo out/codestripper_linkedin_launch.mp4 --concurrency=8
   ```

---

## Privacy, Permissions & Security

⚬ **Air-Gapped Rendering:** All video textures, typography, styling, and audio layers are loaded strictly from local file descriptors. No external fonts, analytics trackers, or remote CDN scripts are fetched during compilation.  
⚬ **Zero Telemetry:** The video engine runs 100% locally on the host machine without telemetry or metrics logging.  
⚬ **Sanitized Git Tree:** Heavy raw screen captures (`*.mov`), video renders (`out/`), and temporary analysis caches are excluded via `.gitignore` to prevent repository bloat and credential exposure.

---

## License & Attribution

This project is open-source software licensed under the [MIT License](LICENSE).  
Developed with passion by [Aashish Kumar Ray](https://github.com/RayAashish).

CodeStripper is available on the [Microsoft Edge Add-ons Store](https://microsoftedge.microsoft.com/addons/detail/codestripper-technical-t/hicjkkopfkoeopphhhccfejpkhkcglaa).
