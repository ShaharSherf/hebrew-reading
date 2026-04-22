let currentCategory = 'family';

function renderWords() {
  renderCategoryTabs();
  renderCategoryWords(currentCategory);
}

function renderCategoryTabs() {
  const tabs = document.getElementById('category-tabs');
  tabs.innerHTML = Object.entries(WORDS).map(([key, cat]) => `
    <button class="cat-btn ${key === currentCategory ? 'active' : ''}" onclick="switchCategory('${key}')">
      ${cat.emoji} ${cat.title}
    </button>
  `).join('');
}

function switchCategory(cat) {
  currentCategory = cat;
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  document.querySelector(`.cat-btn[onclick="switchCategory('${cat}')"]`)?.classList.add('active');
  renderCategoryWords(cat);
}

function renderCategoryWords(cat) {
  const grid = document.getElementById('words-grid');
  const category = WORDS[cat];
  grid.innerHTML = `
    <div class="cat-header" style="grid-column: 1 / -1;">
      <h3>${category.emoji} ${category.title}</h3>
      <div class="cat-tigrinya">${category.titleTigrinya}</div>
    </div>
    ${category.words.map(w => `
      <div class="word-card" data-hebrew="${w.hebrew}" data-translit="${w.translit}" onclick="toggleWord(this)">
        <div class="word-emoji">${renderEmoji(w.emoji)}</div>
        <div class="word-hebrew">${w.hebrew}</div>
        <div class="word-translit">${w.translit}</div>
        <div class="word-tigrinya">${w.tigrinya}</div>
      </div>
    `).join('')}
  `;
}

function toggleWord(el) {
  speak(el.dataset.hebrew, el.dataset.translit);
}
