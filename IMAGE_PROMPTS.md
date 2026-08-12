# NOT RIGGED — AI Image Prompts (Nano Banana / Gemini)

Generate each image, then save it as `public/images/<slot>.webp` (png/jpg also work).
The site detects the file automatically — no code changes needed.

**Global style suffix — append to every prompt:**

> Brutalist graphic design aesthetic, high-contrast black (#060606) and acid yellow-green (#D7FF00) color grade, harsh flash photography look, grainy 35mm film texture, raw and energetic, no text, no logos, no watermarks, 16:9 unless stated otherwise.

| Slot (filename) | Aspect | Prompt |
|---|---|---|
| `hero-crowd` | 21:9 | Massive crowd of young people at an indoor tech festival at night, hands up, dramatic acid yellow-green stage lighting cutting through haze, silhouettes in the foreground, giant LED screen glowing in the background, shot from within the crowd, wide angle |
| `festival-hall` | 21:9 | Huge industrial exhibition hall converted into a tech festival, rows of booths with glowing screens, dramatic overhead beams of acid green light, crowds walking between stands, cinematic wide shot from an elevated position |
| `zone-main-stage` | 4:3 | Young programmer presenting on a big festival main stage, giant LED wall behind showing abstract glitch graphics and large numbers, dramatic backlight, audience silhouettes in the foreground, confident pose mid-gesture |
| `zone-project-alley` | 4:3 | Science-fair style alley of project booths at a night tech event, teenagers demonstrating apps on laptops and phones to curious visitors, tangled cables, sticker-covered laptops, warm chaos, candid documentary style |
| `zone-expo` | 4:3 | Tech company expo booths at a festival, branded stands with screens and swag tables, recruiters talking with young developers, energetic atmosphere, acid green accent lighting |
| `zone-arcade` | 4:3 | Retro arcade corner at a tech festival, CRT monitors and arcade cabinets glowing in the dark, teenagers competing in a typing race, dramatic screen glow on faces, neon green highlights |
| `zone-merch` | 4:3 | Festival merch stand at night selling black t-shirts and hoodies with bold brutalist typography (abstract, unreadable), stacks of stickers, acid green spotlight, streetwear drop energy |
| `zone-showcase` | 4:3 | Dance school performing on a festival side stage, dynamic mid-jump motion blur, dramatic stage light beams in acid green and white, audience clapping, high energy |
| `expo-hall` | 21:9 | Bird's-eye view of a packed tech expo floor at night, glowing booth islands, streams of people between them, one main stage burning bright with acid green light at the far end |

## Workflow

1. Open Gemini (Nano Banana) / Google AI Studio.
2. Paste prompt + the global style suffix.
3. Iterate until it slaps; export at max resolution.
4. Save as `public/images/<slot>.webp`.
5. Refresh the site — the placeholder is replaced automatically.
