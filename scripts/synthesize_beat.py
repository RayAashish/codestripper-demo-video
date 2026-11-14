#!/usr/bin/env python3
"""
High-Energy Developer Tech Beat Synthesizer
Zero external dependencies (uses standard python3 libraries: wave, struct, math, random).
Generates an optimized 124 BPM electronic tech beat (Dm9 -> Bbmaj7 -> C -> Am7)
tailored for the CodeStripper 44-second launch video.
"""

import math
import os
import random
import struct
import wave

SAMPLE_RATE = 44100
BPM = 124
BEAT_SEC = 60.0 / BPM
TOTAL_DURATION = 44.0  # seconds
TOTAL_SAMPLES = int(TOTAL_DURATION * SAMPLE_RATE)

left_channel = [0.0] * TOTAL_SAMPLES
right_channel = [0.0] * TOTAL_SAMPLES

random.seed(42)

def add_sound(buf, start_idx, samples, gain=1.0):
    for i, s in enumerate(samples):
        idx = start_idx + i
        if 0 <= idx < len(buf):
            buf[idx] += s * gain

def make_kick(duration=0.35):
    n = int(duration * SAMPLE_RATE)
    samples = []
    for i in range(n):
        t = i / SAMPLE_RATE
        freq = 45.0 + 115.0 * math.exp(-t * 28.0)
        phase = 2.0 * math.pi * (45.0 * t + (115.0 / 28.0) * (1.0 - math.exp(-t * 28.0)))
        amp = math.exp(-t * 9.0)
        click = (random.random() * 2.0 - 1.0) * math.exp(-t * 120.0) * 0.4
        samples.append(math.sin(phase) * amp + click)
    return samples

def make_snare(duration=0.22):
    n = int(duration * SAMPLE_RATE)
    samples = []
    for i in range(n):
        t = i / SAMPLE_RATE
        body = math.sin(2.0 * math.pi * 180.0 * t) * math.exp(-t * 20.0) * 0.5
        noise = (random.random() * 2.0 - 1.0) * math.exp(-t * 15.0) * 0.8
        samples.append(body + noise)
    return samples

def make_hihat(duration=0.08, open_hat=False):
    decay = 12.0 if open_hat else 65.0
    dur = 0.25 if open_hat else duration
    n = int(dur * SAMPLE_RATE)
    samples = []
    for i in range(n):
        t = i / SAMPLE_RATE
        noise = (random.random() * 2.0 - 1.0) * math.exp(-t * decay)
        samples.append(noise * (math.sin(2.0 * math.pi * 7500.0 * t) * 0.6 + 0.4))
    return samples

def make_bass(freq, duration, decay=4.0):
    n = int(duration * SAMPLE_RATE)
    samples = []
    for i in range(n):
        t = i / SAMPLE_RATE
        saw = 2.0 * ((t * freq) % 1.0) - 1.0
        sub = math.sin(2.0 * math.pi * (freq / 2.0) * t)
        env = math.exp(-t * decay)
        samples.append((saw * 0.5 + sub * 0.7) * env)
    return samples

def make_pluck(freq, duration=0.2):
    n = int(duration * SAMPLE_RATE)
    samples = []
    for i in range(n):
        t = i / SAMPLE_RATE
        s1 = math.sin(2.0 * math.pi * freq * t)
        s2 = math.sin(2.0 * math.pi * (freq * 2.01) * t) * 0.4
        s3 = math.sin(2.0 * math.pi * (freq * 3.0) * t) * 0.2
        env = math.exp(-t * 14.0)
        samples.append((s1 + s2 + s3) * env)
    return samples

def make_pad_chord(freqs, duration):
    n = int(duration * SAMPLE_RATE)
    samples = []
    for i in range(n):
        t = i / SAMPLE_RATE
        att = min(1.0, t / 0.15)
        rel = min(1.0, (duration - t) / 0.2)
        env = att * rel
        val = 0.0
        for f in freqs:
            val += math.sin(2.0 * math.pi * f * t) * 0.5 + math.sin(2.0 * math.pi * (f * 1.004) * t) * 0.5
        samples.append((val / len(freqs)) * env)
    return samples

def main():
    kick = make_kick()
    snare = make_snare()
    hihat_closed = make_hihat(open_hat=False)
    hihat_open = make_hihat(open_hat=True)

    chords = [
        [146.83, 174.61, 220.00, 261.63], # Dm7
        [116.54, 146.83, 174.61, 220.00], # Bbmaj7
        [130.81, 164.81, 196.00, 246.94], # C
        [110.00, 130.81, 164.81, 196.00], # Am7
    ]
    bass_notes = [73.42, 58.27, 65.41, 55.0]
    arp_notes_pool = [
        [293.66, 349.23, 440.00, 523.25, 587.33],
        [233.08, 293.66, 349.23, 440.00, 466.16],
        [261.63, 329.63, 392.00, 493.88, 523.25],
        [220.00, 261.63, 329.63, 392.00, 440.00],
    ]

    total_beats = int(TOTAL_DURATION / BEAT_SEC)

    for b in range(total_beats):
        t_start = b * BEAT_SEC
        idx = int(t_start * SAMPLE_RATE)
        chord_idx = (b // 4) % 4

        if b % 4 == 0:
            pad = make_pad_chord(chords[chord_idx], BEAT_SEC * 3.9)
            add_sound(left_channel, idx, pad, gain=0.28)
            add_sound(right_channel, idx, pad, gain=0.28)

        if b >= 8:
            add_sound(left_channel, idx, kick, gain=0.75)
            add_sound(right_channel, idx, kick, gain=0.75)

            if b % 2 == 1:
                add_sound(left_channel, idx, snare, gain=0.45)
                add_sound(right_channel, idx, snare, gain=0.45)

            bass_note = bass_notes[chord_idx]
            bass_s = make_bass(bass_note, BEAT_SEC * 0.85)
            add_sound(left_channel, idx, bass_s, gain=0.48)
            add_sound(right_channel, idx, bass_s, gain=0.48)

        for sub in range(4):
            sub_idx = int((t_start + sub * (BEAT_SEC / 4.0)) * SAMPLE_RATE)
            if b < 4 and sub != 0:
                continue
            if b >= 4:
                if sub == 2:
                    add_sound(left_channel, sub_idx, hihat_open, gain=0.18)
                    add_sound(right_channel, sub_idx, hihat_open, gain=0.22)
                else:
                    hh_gain = 0.12 if sub % 2 == 0 else 0.08
                    add_sound(left_channel, sub_idx, hihat_closed, gain=hh_gain * 0.9)
                    add_sound(right_channel, sub_idx, hihat_closed, gain=hh_gain * 1.1)

        arp_scale = arp_notes_pool[chord_idx]
        for sub in range(4):
            sub_idx = int((t_start + sub * (BEAT_SEC / 4.0)) * SAMPLE_RATE)
            note_f = arp_scale[(sub + (b * 2)) % len(arp_scale)]
            if (b + sub) % 3 == 0:
                note_f *= 2.0
            p = make_pluck(note_f, duration=0.16)
            pan = 0.5 + 0.3 * math.sin((b * 4 + sub) * 0.8)
            arp_gain = 0.22 if b >= 8 else 0.10 + 0.12 * (b / 8.0)
            add_sound(left_channel, sub_idx, p, gain=arp_gain * (1.0 - pan))
            add_sound(right_channel, sub_idx, p, gain=arp_gain * pan)

    fade_samples = int(2.5 * SAMPLE_RATE)
    for i in range(fade_samples):
        idx = TOTAL_SAMPLES - fade_samples + i
        if 0 <= idx < TOTAL_SAMPLES:
            fade = 1.0 - (i / fade_samples)
            left_channel[idx] *= fade
            right_channel[idx] *= fade

    max_val = max(max(map(abs, left_channel)), max(map(abs, right_channel)), 1e-4)
    norm_gain = 0.88 / max_val

    os.makedirs("public", exist_ok=True)
    out_path = "public/tech_beat.wav"
    with wave.open(out_path, "w") as wav_file:
        wav_file.setnchannels(2)
        wav_file.setsampwidth(2)
        wav_file.setframerate(SAMPLE_RATE)
        raw_data = bytearray()
        for i in range(TOTAL_SAMPLES):
            l = math.tanh(left_channel[i] * norm_gain)
            r = math.tanh(right_channel[i] * norm_gain)
            left_int = int(max(-32767, min(32767, l * 32767.0)))
            right_int = int(max(-32767, min(32767, r * 32767.0)))
            raw_data.extend(struct.pack("<hh", left_int, right_int))
        wav_file.writeframes(raw_data)

    print(f"Synthesized soundtrack: {out_path} ({TOTAL_DURATION}s @ {SAMPLE_RATE}Hz)")

if __name__ == "__main__":
    main()
