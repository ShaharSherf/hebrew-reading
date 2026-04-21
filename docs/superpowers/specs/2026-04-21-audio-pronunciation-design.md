# Audio Pronunciation Feature — Design Spec
**Date:** 2026-04-21
**Status:** Approved

## Overview

Add Hebrew pronunciation audio to every interactive element on the site using the browser's Web Speech API. A global on/off toggle in the nav persists the user's preference across sessions.

---

## Architecture

### New file: `js/audio.js`

Add in `index.html` at the **bottom of `<body>`**, between the two existing script tags (not in `<head>`):
```html
<script src="js/data.js"></script>
<script src="js/audio.js"></script>   <!-- new — must be in <body>, not <head> -->
<script src="js/app.js"></script>
```
Placing it in `<body>` ensures the DOM (including `#audio-toggle`) exists when `audio.js`'s `DOMContentLoaded` handler fires.

Exposes two globals:

- `speak(text)` — speaks the given text in Hebrew (`he-IL`). No-ops silently if: audio is muted, `window.speechSynthesis` is unavailable, `text` is empty/whitespace, or no `he-IL` voice has loaded yet.
- `toggleAudio()` — flips the `audioEnabled` flag, persists to `localStorage` under key `'audioEnabled'`, and updates the toggle button icon.

**State:**
- `audioEnabled` — boolean, initialized from `localStorage.getItem('audioEnabled')` (defaults to `true` if not set).
- `heVoice` — module-level variable, initially `null`. Set when voices load.

**Voice loading:**
```js
function loadVoice() {
  heVoice = speechSynthesis.getVoices().find(v => v.lang.startsWith('he')) || null;
}
loadVoice();
speechSynthesis.addEventListener('voiceschanged', loadVoice);
```
If `speak()` is called before voices load (first click on some browsers), it no-ops silently. Subsequent clicks work once voices are available.

**Speech:**
```js
function speak(text) {
  if (!audioEnabled || !heVoice || !text?.trim()) return;
  const u = new SpeechSynthesisUtterance(text.trim());
  u.voice = heVoice;
  u.lang = 'he-IL';
  u.rate = 0.9;
  u.onerror = () => {};  // 'interrupted' from cancel() is expected; all errors silent
  speechSynthesis.cancel();
  speechSynthesis.speak(u);
}
```

No debounce needed — `cancel()` before each call is the correct behavior (new word interrupts old one).

---

## Toggle Button

The toggle must **not** use class `.nav-btn` because `setupNav()` in `app.js` attaches `navigateTo(btn.dataset.section)` to every `.nav-btn`. Use a separate class to avoid that conflict:

```html
<button class="nav-audio-btn" id="audio-toggle" onclick="toggleAudio()">🔊</button>
```

Add CSS for `.nav-audio-btn` in `style.css` to match the visual style of `.nav-btn`.

- Shows `🔊` when `audioEnabled = true`, `🔇` when `audioEnabled = false`
- `audio.js` sets the correct icon on `DOMContentLoaded` based on the stored preference

---

## Integration Points

### Letters — `toggleLetter(el)` in `app.js`

Add `data-hebrew="${l.hebrew}"` to each letter card in `renderLetterCard()`:
```js
<div class="letter-card" data-hebrew="${l.hebrew}" onclick="toggleLetter(this)">
```
In `toggleLetter(el)`: call `speak(el.dataset.hebrew)`.

### Nikud — `renderNikud()` in `app.js`

Add inline `onclick` to each nikud card template. Speak `n.name` (the Hebrew name of the nikud, e.g. `פַּתַח` — this is what teachers say):
```js
<div class="nikud-card" onclick="speak('${n.name}')">
```

### Words — `toggleWord(el)` in `app.js`

Add `data-hebrew="${w.hebrew}"` to each word card in `renderCategoryWords()`:
```js
<div class="word-card" data-hebrew="${w.hebrew}" onclick="toggleWord(this)">
```
In `toggleWord(el)`: call `speak(el.dataset.hebrew)`.

### Stories — `renderStoryPage()` in `app.js`

`page.words` is a plain string array (e.g. `["הַיְּלָדָה", "רָצָה"]`). Add inline `onclick` to each `.reading-word` div in the template (safe because `renderStoryPage()` rebuilds the DOM on every page turn):
```js
<div class="reading-word" onclick="speak('${w}')">
```

### Matching — `selectMatch(el)` in `app.js`

Both left (Hebrew) and right (Tigrinya/emoji) tiles speak the Hebrew word — clicking either side reinforces the pairing. Look up by `data-id`:
```js
speak(matchState.words[parseInt(el.dataset.id)].hebrew);
```
Add this call at the start of `selectMatch()`, before the selection logic.

### Memory — `flipMemoryCard(el)` in `app.js`

Store `hebrew: w.hebrew` on all card objects at construction time in `initMemoryGame()`. Change both `cards.push(...)` lines:
```js
cards.push({ id: i, type: 'emoji',   display: w.emoji,   sub: w.tigrinya, hebrew: w.hebrew });
cards.push({ id: i, type: 'hebrew',  display: w.hebrew,  sub: w.translit, hebrew: w.hebrew });
```
In `flipMemoryCard(el)`: `speak(memoryState.cards[parseInt(el.dataset.idx)].hebrew)`.

Speak fires on click (card face-down → flipping up). No speak on mis-match flip-back. Both card types speak the Hebrew word: seeing an emoji while hearing the Hebrew word is the core learning moment.

### Quiz — `renderQuizQuestion()` and `answerQuiz(el)` in `app.js`

The quiz shows `q.hebrew` (the word being tested) and four emoji options. Add `data-hebrew="${q.hebrew}"` to every option button — all four carry the same value because all four options are answers to the same question:
```js
<button class="quiz-option" data-eid="${opt}" data-hebrew="${q.hebrew}" data-correct="..." onclick="answerQuiz(this, ${idx})">
```
In `answerQuiz(el)`: call `speak(el.dataset.hebrew)` — the child clicks any option and hears the word they are identifying, reinforcing the test word regardless of correct/wrong.

---

## Data Flow

```
User click
  → existing handler runs (game logic unchanged)
  → speak(hebrewText) called
      → if !audioEnabled or !heVoice or !text: return
      → speechSynthesis.cancel()
      → speechSynthesis.speak(utterance)
```

---

## Out of Scope

- Tigrinya pronunciation (no reliable browser TTS voice for Tigrinya)
- Audio for the parent banner, section titles, or nav buttons
- Sound effects for game win/lose states
- Any backend or external TTS API
- Utterance queuing
