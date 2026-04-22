let nikudSelectedLetter = null;

// Substitute letters whose TTS pronunciation is unreliable without dagesh context
const RAFE_SPEECH = { 'ב': 'ו', 'כ': 'ח', 'ך': 'ח', 'פ': 'ף', 'שׂ': 'ס' };

// Build TTS string: put nikud mark right after base letter, before any letter-dots (shin/sin dot etc.)
// This avoids wrong combining-char order that makes TTS say "sia" instead of "si"
function nikudSpeechText(letter, nikudMark) {
  const sub = RAFE_SPEECH[letter.hebrew];
  if (sub !== undefined) return sub + nikudMark;
  const baseChar = String.fromCodePoint(letter.hebrew.codePointAt(0));
  const rest = letter.hebrew.slice(baseChar.length);
  return baseChar + nikudMark + rest;
}

function getSyllable(letter, vowelOffset) {
  const st = letter.soundTigrinya;
  if (st.includes(' ') || [...st].length !== 1) return null;
  const base = st.codePointAt(0) - 5; // 6th-order → 1st-order base
  return String.fromCodePoint(base + vowelOffset);
}

function selectNikudLetter(idx) {
  nikudSelectedLetter = LETTERS[idx];
  renderNikud();
}

function renderNikud() {
  if (!nikudSelectedLetter) nikudSelectedLetter = LETTERS[1]; // default: bet
  const sel = nikudSelectedLetter;
  const container = document.getElementById('nikud-grid');
  container.innerHTML = `
    <div class="nikud-letter-picker">
      <div class="nikud-picker-label">
        <span class="lhe">בחרו אות לשמוע את הצליל:</span>
        <span class="lti">ድምጺ ንምርኣይ ፊደል ምረጹ:</span>
      </div>
      <div class="nikud-picker-btns">
        ${LETTERS.map((l, i) => `
          <button class="nikud-pick-btn${l.hebrew === sel.hebrew ? ' active' : ''}"
                  onclick="selectNikudLetter(${i})">${l.hebrew}</button>
        `).join('')}
      </div>
    </div>
    ${NIKUD.map(n => {
      const syllable = getSyllable(sel, n.vowelOffset) || n.tigrinya;
      return `
        <div class="nikud-card" data-hebrew="${nikudSpeechText(sel, n.mark)}" onclick="speak(this.dataset.hebrew)">
          <div class="nikud-symbol">${sel.hebrew}${n.mark}</div>
          <div class="nikud-name">${n.name}</div>
          <div class="nikud-syllable">${syllable}</div>
        </div>
      `;
    }).join('')}
  `;
}
