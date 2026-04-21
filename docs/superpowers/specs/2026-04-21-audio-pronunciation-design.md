# Audio Pronunciation Feature — Design Spec
**Date:** 2026-04-21
**Status:** Approved

## Overview

Add Hebrew pronunciation audio to every interactive element on the site using the browser's Web Speech API. A global on/off toggle in the nav persists the user's preference across sessions.

---

## Architecture

### New file: `js/audio.js`

Loaded in `index.html` before `js/app.js`. Exposes two globals:

- `speak(text)` — speaks the given text in Hebrew (`he-IL`). No-ops silently if audio is muted, the Speech API is unavailable, or `text` is empty. Cancels any in-progress speech before starting a new utterance.
- `toggleAudio()` — flips the `audioEnabled` flag, persists it to `localStorage`, and updates the toggle button label.

**State:**
- `audioEnabled` — boolean, initialized from `localStorage.getItem('audioEnabled')` (defaults to `true` if not set).

**Speech configuration:**
- `SpeechSynthesisUtterance` with `lang: 'he-IL'`
- `rate: 0.9` (slightly slower for children)
- Cancels previous utterance before each new `speak()` call

---

## Toggle Button

Added to the `<nav>` in `index.html` alongside existing nav buttons.

- `id="audio-toggle"`
- Shows 🔊 when audio is enabled, 🔇 when muted
- Calls `toggleAudio()` on click
- Styled to match existing `.nav-btn` class

---

## Integration Points

One `speak()` call added to the existing click handler in each section. Only the Hebrew text is spoken — no transliterations or Tigrinya.

| Section | Trigger | Text spoken |
|---|---|---|
| Letters | Click a letter card | The Hebrew letter (e.g. `א`) |
| Nikud | Click a nikud card | The vowel name (e.g. `פַּתַח`) |
| Words | Click a word card | The Hebrew word (e.g. `תַּפּוּחַ`) |
| Stories | Click a word span | That word's Hebrew text |
| Matching | Click either tile | The Hebrew word on that tile |
| Memory | Click to flip a card | The Hebrew word on that card |
| Quiz | Click an answer button | The Hebrew word on that button |

No handler needs restructuring — each is a single-line addition.

---

## Data Flow

```
User click
  → existing click handler runs (game logic unchanged)
  → speak(hebrewText) called
      → check audioEnabled flag
      → if enabled: cancel previous utterance, create new Utterance(text, he-IL), speak
      → if disabled: no-op
```

---

## Out of Scope

- Tigrinya pronunciation (no reliable browser TTS voice for Tigrinya)
- Audio for the parent banner or section titles
- Sound effects for game win/lose states
- Any backend or external TTS API
