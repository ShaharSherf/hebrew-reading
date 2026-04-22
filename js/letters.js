function renderLetterCard(l) {
  return `
    <div class="letter-card" data-hebrew="${l.name.replace(/\s*\(.*\)/, '')}" data-translit="${l.sound}" onclick="toggleLetter(this)">
      <div class="letter-hebrew">${l.hebrew}</div>
      <div class="letter-name">${l.name}</div>
      <div class="letter-tigrinya">${l.nameTranslit}</div>
      <div class="letter-sound-badge">${l.soundTigrinya}</div>
      <div class="letter-details">
        <div class="letter-example">
          <div class="letter-example-word">${l.example}</div>
          <div class="letter-example-translit">${l.exampleTranslit}</div>
          <div class="letter-example-meaning">${l.exampleMeaning}</div>
        </div>
      </div>
    </div>`;
}

function renderLetters() {
  const grid = document.getElementById('letters-grid');
  let html = LETTERS.map(l => renderLetterCard(l)).join('');
  html += `<div style="grid-column:1/-1;text-align:center;margin:16px 0 8px;font-size:1.2rem;font-weight:700;color:var(--primary);">
    <span class="lhe">אותיות סופיות</span>
    <span style="font-size:0.75em;color:var(--orange);margin:0 6px;">ኦቲዮት ሶፊት</span>
    <span class="lti">ናይ መወዳእታ ፊደላት</span>
  </div>`;
  html += SOFIT_LETTERS.map(l => renderLetterCard(l)).join('');
  grid.innerHTML = html;
}

function toggleLetter(el) {
  speak(el.dataset.hebrew, el.dataset.translit);
  const wasExpanded = el.classList.contains('expanded');
  document.querySelectorAll('.letter-card').forEach(c => c.classList.remove('expanded'));
  if (!wasExpanded) el.classList.add('expanded');
}
