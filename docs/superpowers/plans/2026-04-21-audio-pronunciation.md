# Audio Pronunciation Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Hebrew pronunciation audio (Web Speech API) to every interactive element, with a global on/off toggle in the nav.

**Architecture:** A new `js/audio.js` module exposes two globals — `speak(text)` and `toggleAudio()`. Each of the 7 interactive sections calls `speak()` with the Hebrew text on click. The toggle button uses class `nav-audio-btn` (not `nav-btn`) to avoid the existing `setupNav()` listener conflict.

**Tech Stack:** Vanilla JS, Web Speech API (`window.speechSynthesis`), CSS custom properties, localStorage.

**Spec:** `docs/superpowers/specs/2026-04-21-audio-pronunciation-design.md`

---

## Chunk 1: audio.js + HTML/CSS foundation

### Task 1: Create `js/audio.js`

**Files:**
- Create: `js/audio.js`

- [ ] **Step 1: Create the file with voice loading and speak()**

Create `js/audio.js`:

```js
let audioEnabled = localStorage.getItem('audioEnabled') !== 'false';
let heVoice = null;

function loadVoice() {
  heVoice = speechSynthesis.getVoices().find(v => v.lang.startsWith('he')) || null;
}

if (window.speechSynthesis) {
  loadVoice();
  speechSynthesis.addEventListener('voiceschanged', loadVoice);
}

function speak(text) {
  if (!audioEnabled || !heVoice || !text?.trim()) return;
  const u = new SpeechSynthesisUtterance(text.trim());
  u.voice = heVoice;
  u.lang = 'he-IL';
  u.rate = 0.9;
  u.onerror = () => {};
  speechSynthesis.cancel();
  speechSynthesis.speak(u);
}

function toggleAudio() {
  audioEnabled = !audioEnabled;
  localStorage.setItem('audioEnabled', audioEnabled);
  const btn = document.getElementById('audio-toggle');
  if (btn) btn.textContent = audioEnabled ? '🔊' : '🔇';
}

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('audio-toggle');
  if (btn) btn.textContent = audioEnabled ? '🔊' : '🔇';
});
```

- [ ] **Step 2: Verify in browser console**

Open `index.html` in browser (or local server). Open DevTools console and run:
```js
speak('שָׁלוֹם')
```
Expected: Hebrew word spoken aloud (or silent if no `he-IL` voice — that's correct behavior, not a bug).

Also run:
```js
console.log(typeof speak, typeof toggleAudio)
// Expected: "function" "function"
```

---

### Task 2: Add script tag + toggle button to `index.html`

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Add `<script>` tag for audio.js**

In `index.html`, find the two existing script tags at the bottom of `<body>` (lines 156–157):
```html
<script src="js/data.js"></script>
<script src="js/app.js"></script>
```

**Replace** those two lines with these three (do not append — replace):
```html
<script src="js/data.js"></script>
<script src="js/audio.js"></script>
<script src="js/app.js"></script>
```

- [ ] **Step 2: Add toggle button to nav**

In `index.html`, find the `<nav class="nav">` block. Add the toggle button as the **last** item in the nav:
```html
<button class="nav-audio-btn" id="audio-toggle" onclick="toggleAudio()">🔊</button>
```

The full nav closing should look like:
```html
    <button class="nav-btn" data-section="quiz">🏆 ...</button>
    <button class="nav-audio-btn" id="audio-toggle" onclick="toggleAudio()">🔊</button>
  </nav>
```

- [ ] **Step 3: Verify toggle button appears and works**

Reload the page. The nav should show a 🔊 button at the end. Click it — it should flip to 🔇. Reload the page — it should stay 🔇 (preference persisted). Click again to re-enable (back to 🔊).

Also verify clicking 🔊/🔇 does **not** navigate away from the current section (confirms the `nav-audio-btn` vs `nav-btn` separation is working).

---

### Task 3: Style `nav-audio-btn` in `css/style.css`

**Files:**
- Modify: `css/style.css`

- [ ] **Step 1: Add styles after existing `.nav-btn.active` block**

In `css/style.css`, find the `.nav-btn.active` rule (around line 113). Add after it:

```css
.nav-audio-btn {
  padding: 10px 14px;
  border: 2px solid var(--primary);
  background: white;
  color: var(--primary);
  border-radius: var(--radius-sm);
  cursor: pointer;
  font-size: 1.1rem;
  transition: var(--transition);
  white-space: nowrap;
  margin-right: auto; /* RTL: fills right-side space, pushing toggle to far-left — intentional separation from nav buttons */
}

.nav-audio-btn:hover {
  background: var(--primary-light);
  color: white;
  transform: translateY(-2px);
  box-shadow: var(--shadow);
}
```

The `margin-right: auto` (RTL: pushes button to the left end of the nav) visually separates it from the section nav buttons.

- [ ] **Step 2: Add responsive override**

In `css/style.css`, find the `@media (max-width: 768px)` block that contains `.nav-btn { padding: 8px 14px; font-size: 0.85rem; }`. Add alongside it:

```css
  .nav-audio-btn { padding: 8px 10px; font-size: 0.95rem; }
```

- [ ] **Step 3: Verify visual**

Reload and confirm the 🔊 button is visually consistent with nav buttons but clearly separated (pushed to one end). Resize the window to mobile width and confirm it doesn't overflow.

- [ ] **Step 4: Commit Chunk 1**

```bash
git add js/audio.js index.html css/style.css
git commit -m "feat: add audio.js module and toggle button"
```

---

## Chunk 2: app.js integrations

### Task 4: Letters section

**Files:**
- Modify: `js/app.js` — `renderLetterCard()` and `toggleLetter()`

- [ ] **Step 1: Add `data-hebrew` to letter card in `renderLetterCard()`**

Find `renderLetterCard(l)`. The card div currently starts:
```js
<div class="letter-card" onclick="toggleLetter(this)">
```

Change it to:
```js
<div class="letter-card" data-hebrew="${l.hebrew}" onclick="toggleLetter(this)">
```

- [ ] **Step 2: Call `speak()` in `toggleLetter()`**

Find `toggleLetter(el)`:
```js
function toggleLetter(el) {
  const wasExpanded = el.classList.contains('expanded');
  document.querySelectorAll('.letter-card').forEach(c => c.classList.remove('expanded'));
  if (!wasExpanded) el.classList.add('expanded');
}
```

Add `speak()` call at the top:
```js
function toggleLetter(el) {
  speak(el.dataset.hebrew);
  const wasExpanded = el.classList.contains('expanded');
  document.querySelectorAll('.letter-card').forEach(c => c.classList.remove('expanded'));
  if (!wasExpanded) el.classList.add('expanded');
}
```

- [ ] **Step 3: Verify**

Open the Letters section. Click any letter card. Expected: the Hebrew letter is spoken. Click while 🔇 is active — no audio.

---

### Task 5: Nikud section

**Files:**
- Modify: `js/app.js` — `renderNikud()`

- [ ] **Step 1: Add `data-name` and `onclick` to nikud card template**

Find `renderNikud()`. The nikud card div currently starts:
```js
<div class="nikud-card">
```

Change it to (use `data-name` + `dataset` to avoid single-quote breakage in Hebrew strings):
```js
<div class="nikud-card" data-name="${n.name}" onclick="speak(this.dataset.name)">
```

- [ ] **Step 2: Verify**

Open the Nikud section. Click any vowel card. Expected: the Hebrew name (e.g. פַּתַח) is spoken.

---

### Task 6: Words section

**Files:**
- Modify: `js/app.js` — `renderCategoryWords()` and `toggleWord()`

- [ ] **Step 1: Add `data-hebrew` to word card in `renderCategoryWords()`**

Find the word card div in `renderCategoryWords()`:
```js
<div class="word-card" onclick="toggleWord(this)">
```

Change to:
```js
<div class="word-card" data-hebrew="${w.hebrew}" onclick="toggleWord(this)">
```

- [ ] **Step 2: Call `speak()` in `toggleWord()`**

Find `toggleWord(el)`:
```js
function toggleWord(el) {
  el.classList.toggle('flipped');
}
```

Change to:
```js
function toggleWord(el) {
  speak(el.dataset.hebrew);
  el.classList.toggle('flipped');
}
```

- [ ] **Step 3: Verify**

Open Words section. Click any word card. Expected: Hebrew word spoken. Card still flips correctly.

---

### Task 7: Stories section

**Files:**
- Modify: `js/app.js` — `renderStoryPage()`

- [ ] **Step 1: Add `data-hebrew` and `onclick` to `.reading-word` divs**

Find `renderStoryPage()`. Locate the `page.words.map(...)` template:
```js
<div class="reading-word">
  <div class="rw-hebrew">${w}</div>
```

Change the outer div to (use `data-hebrew` + `dataset` to avoid single-quote breakage):
```js
<div class="reading-word" data-hebrew="${w}" onclick="speak(this.dataset.hebrew)">
  <div class="rw-hebrew">${w}</div>
```

Note: `w` is a plain Hebrew string (e.g. `"הַיְּלָדָה"`), not an object.

- [ ] **Step 2: Verify**

Open any story and navigate to a page. Click any word in the sentence. Expected: that Hebrew word is spoken. Navigate to the next page and click again — still works (DOM is rebuilt each page turn, inline onclick is re-attached).

---

### Task 8: Matching game

**Files:**
- Modify: `js/app.js` — `selectMatch()`

- [ ] **Step 1: Call `speak()` at the start of `selectMatch()`**

Find `selectMatch(el)`:
```js
function selectMatch(el) {
  if (el.classList.contains('matched')) return;

  const side = el.dataset.side;
  const id = parseInt(el.dataset.id);
```

Add `speak()` after the early return, using the word lookup:
```js
function selectMatch(el) {
  if (el.classList.contains('matched')) return;

  const side = el.dataset.side;
  const id = parseInt(el.dataset.id);
  speak(matchState.words[id].hebrew);
```

- [ ] **Step 2: Verify**

Open Matching game. Click a Hebrew tile — the Hebrew word is spoken. Click a Tigrinya/emoji tile — the same Hebrew word is also spoken (reinforcing the pair). Game logic (selection, matching, wrong flash) is unchanged.

---

### Task 9: Memory game

**Files:**
- Modify: `js/app.js` — `initMemoryGame()` and `flipMemoryCard()`

- [ ] **Step 1: Add `hebrew` field to card objects in `initMemoryGame()`**

Find the two `cards.push(...)` lines inside `initMemoryGame()`:
```js
cards.push({ id: i, type: 'emoji', display: w.emoji, sub: w.tigrinya });
cards.push({ id: i, type: 'hebrew', display: w.hebrew, sub: w.translit });
```

Change both to include `hebrew: w.hebrew`:
```js
cards.push({ id: i, type: 'emoji',   display: w.emoji,   sub: w.tigrinya, hebrew: w.hebrew });
cards.push({ id: i, type: 'hebrew',  display: w.hebrew,  sub: w.translit,  hebrew: w.hebrew });
```

- [ ] **Step 2: Call `speak()` in `flipMemoryCard()`**

Find `flipMemoryCard(el)`:
```js
function flipMemoryCard(el) {
  if (memoryState.locked) return;
  if (el.classList.contains('flipped') || el.classList.contains('matched')) return;

  el.classList.add('flipped');
  memoryState.flipped.push(el);
```

Add `speak()` after the early returns:
```js
function flipMemoryCard(el) {
  if (memoryState.locked) return;
  if (el.classList.contains('flipped') || el.classList.contains('matched')) return;

  speak(memoryState.cards[parseInt(el.dataset.idx)].hebrew);
  el.classList.add('flipped');
  memoryState.flipped.push(el);
```

- [ ] **Step 3: Verify**

Open Memory game. Click any face-down card — Hebrew word is spoken as it flips. Click a mismatched second card — its Hebrew word is spoken too. Cards flip back after 1s (no extra audio). Matched cards do not re-speak when clicked (they are `.matched`, caught by the early return).

---

### Task 10: Quiz section

**Files:**
- Modify: `js/app.js` — `renderQuizQuestion()` and `answerQuiz()`

- [ ] **Step 1: Add `data-hebrew` to option buttons in `renderQuizQuestion()`**

Find the option button template in `renderQuizQuestion()`:
```js
<button class="quiz-option" data-eid="${opt}" onclick="answerQuiz(this, ${idx})" data-correct="${opt === q.emoji}">
```

Add `data-hebrew="${q.hebrew}"` (all four buttons carry the same value — the word being tested):
```js
<button class="quiz-option" data-eid="${opt}" data-hebrew="${q.hebrew}" onclick="answerQuiz(this, ${idx})" data-correct="${opt === q.emoji}">
```

- [ ] **Step 2: Call `speak()` in `answerQuiz()`**

Find `answerQuiz(el, idx)`:
```js
function answerQuiz(el, idx) {
  if (quizState.answered) return;
  quizState.answered = true;
```

Add `speak()` after the early return:
```js
function answerQuiz(el, idx) {
  if (quizState.answered) return;
  quizState.answered = true;
  speak(el.dataset.hebrew);
```

- [ ] **Step 3: Verify**

Open Quiz. Click any emoji answer — the Hebrew word being tested is spoken (same word regardless of which option). On wrong answer, the word is spoken once and the correct answer is highlighted visually after 1200ms (no second speak). Quiz auto-advances correctly.

- [ ] **Step 4: Commit Chunk 2**

```bash
git add js/app.js
git commit -m "feat: integrate speak() across all 7 sections"
```

---

## Final Verification

- [ ] **Full site smoke test**

Open each section and verify audio plays on click:
- [ ] Letters: click a letter card → spoken
- [ ] Nikud: click a nikud card → spoken
- [ ] Words: click a word card → spoken
- [ ] Stories: open a story, click a word → spoken
- [ ] Matching: click Hebrew tile → spoken; click Tigrinya tile → same word spoken
- [ ] Memory: flip a card → spoken
- [ ] Quiz: click any answer → spoken

- [ ] **Toggle persistence test**

Click 🔊 → becomes 🔇 → reload page → still 🔇. Click again → 🔊. Audio resumes on click.

- [ ] **Mobile test**

Resize to 375px width. Toggle button visible in nav, not overflowing. Tap targets adequate.
