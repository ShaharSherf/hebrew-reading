// ===== APP STATE =====
let currentSection = 'welcome';
let matchState = {};
let memoryState = {};
let quizState = {};
let readingIndex = 0;
let currentCategory = 'family';

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
  renderWelcome();
  renderLetters();
  renderNikud();
  renderWords();
  renderReading();
  setupNav();
});

// ===== NAVIGATION =====
function setupNav() {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      navigateTo(btn.dataset.section);
    });
  });
}

function navigateTo(section) {
  currentSection = section;
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

  const sectionEl = document.getElementById(section);
  const navBtn = document.querySelector(`.nav-btn[data-section="${section}"]`);

  if (sectionEl) sectionEl.classList.add('active');
  if (navBtn) navBtn.classList.add('active');

  // Initialize games when navigated to
  if (section === 'matching') initMatchGame();
  if (section === 'memory') initMemoryGame();
  if (section === 'quiz') initQuiz();

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== WELCOME =====
function renderWelcome() {
  const el = document.getElementById('welcome');
  el.innerHTML = `
    <div class="welcome">
      <div class="welcome-hero">📚✨🎓</div>
      <h2>
        <span class="lhe" style="display:block;">!בּוֹאוּ נִלְמַד לִקְרֹא בְּעִבְרִית</span>
        <span class="ltr" style="display:block;font-size:0.6em;margin-top:6px;">bo'u nilmad likro be-ivrit!</span>
        <span class="lti" style="display:block;font-size:0.7em;margin-top:4px;">!ንዑ ብዕብራይስጢ ከነንብብ ንመሃር</span>
      </h2>
      <p style="margin-bottom: 24px; color: var(--text-light);">
        <span class="lhe" style="display:block;">לחצו על כפתור כדי להתחיל</span>
        <span class="ltr" style="display:block;font-size:0.9em;margin-top:4px;">lachtsu al kaftor kedei lehat'chil</span>
        <span class="lti" style="display:block;margin-top:4px;">ንጀምር ጠውቑ</span>
      </p>
      <div class="welcome-cards">
        <div class="welcome-card" onclick="navigateTo('letters')">
          <div class="welcome-card-emoji">🔤</div>
          <h3>
            <span class="lhe">אותיות</span>
            <span class="ltr" style="display:block;font-size:0.75em;margin-top:3px;">otiyot</span>
            <span class="lti" style="display:block;font-size:0.8em;margin-top:2px;">ፊደላት</span>
          </h3>
          <p>
            <span class="lhe" style="display:block;">לומדים את האלף-בית</span>
            <span class="ltr" style="display:block;font-size:0.85em;margin-top:3px;">lomdim et ha-alef-bet</span>
            <span class="lti" style="display:block;margin-top:2px;">ናይ ዕብራይስጢ ፊደላት ንመሃር</span>
          </p>
        </div>
        <div class="welcome-card" onclick="navigateTo('nikud')">
          <div class="welcome-card-emoji">✨</div>
          <h3>
            <span class="lhe">ניקוד</span>
            <span class="ltr" style="display:block;font-size:0.75em;margin-top:3px;">nikud</span>
            <span class="lti" style="display:block;font-size:0.8em;margin-top:2px;">ነጥብታት</span>
          </h3>
          <p>
            <span class="lhe" style="display:block;">לומדים את התנועות</span>
            <span class="ltr" style="display:block;font-size:0.85em;margin-top:3px;">lomdim et ha-tnu'ot</span>
            <span class="lti" style="display:block;margin-top:2px;">ናይ ድምጺ ምልክታት ንመሃር</span>
          </p>
        </div>
        <div class="welcome-card" onclick="navigateTo('words')">
          <div class="welcome-card-emoji">📖</div>
          <h3>
            <span class="lhe">מילים</span>
            <span class="ltr" style="display:block;font-size:0.75em;margin-top:3px;">milim</span>
            <span class="lti" style="display:block;font-size:0.8em;margin-top:2px;">ቃላት</span>
          </h3>
          <p>
            <span class="lhe" style="display:block;">לומדים מילים חדשות</span>
            <span class="ltr" style="display:block;font-size:0.85em;margin-top:3px;">lomdim milim khadashot</span>
            <span class="lti" style="display:block;margin-top:2px;">ሓደስቲ ቃላት ንመሃር</span>
          </p>
        </div>
        <div class="welcome-card" onclick="navigateTo('reading')">
          <div class="welcome-card-emoji">📖</div>
          <h3>
            <span class="lhe">סיפורים</span>
            <span class="ltr" style="display:block;font-size:0.75em;margin-top:3px;">sipurim</span>
            <span class="lti" style="display:block;font-size:0.8em;margin-top:2px;">ዛንታታት</span>
          </h3>
          <p>
            <span class="lhe" style="display:block;">קוראים סיפורים קצרים</span>
            <span class="ltr" style="display:block;font-size:0.85em;margin-top:3px;">kor'im sipurim ktsarim</span>
            <span class="lti" style="display:block;margin-top:2px;">ሓጸርቲ ዛንታታት ነንብብ</span>
          </p>
        </div>
        <div class="welcome-card" onclick="navigateTo('matching')">
          <div class="welcome-card-emoji">🎯</div>
          <h3>
            <span class="lhe">התאמה</span>
            <span class="ltr" style="display:block;font-size:0.75em;margin-top:3px;">hata'ama</span>
            <span class="lti" style="display:block;font-size:0.8em;margin-top:2px;">ምትእስሳር</span>
          </h3>
          <p>
            <span class="lhe" style="display:block;">משחק התאמה</span>
            <span class="ltr" style="display:block;font-size:0.85em;margin-top:3px;">miskhak hata'ama</span>
            <span class="lti" style="display:block;margin-top:2px;">ጸወታ ምትእስሳር</span>
          </p>
        </div>
        <div class="welcome-card" onclick="navigateTo('memory')">
          <div class="welcome-card-emoji">🧠</div>
          <h3>
            <span class="lhe">זיכרון</span>
            <span class="ltr" style="display:block;font-size:0.75em;margin-top:3px;">zikaron</span>
            <span class="lti" style="display:block;font-size:0.8em;margin-top:2px;">ዝኽሪ</span>
          </h3>
          <p>
            <span class="lhe" style="display:block;">משחק זיכרון</span>
            <span class="ltr" style="display:block;font-size:0.85em;margin-top:3px;">miskhak zikaron</span>
            <span class="lti" style="display:block;margin-top:2px;">ጸወታ ዝኽሪ</span>
          </p>
        </div>
        <div class="welcome-card" onclick="navigateTo('quiz')">
          <div class="welcome-card-emoji">🏆</div>
          <h3>
            <span class="lhe">חידון</span>
            <span class="ltr" style="display:block;font-size:0.75em;margin-top:3px;">khidon</span>
            <span class="lti" style="display:block;font-size:0.8em;margin-top:2px;">ፈተና</span>
          </h3>
          <p>
            <span class="lhe" style="display:block;">!בואו נבדוק מה למדנו</span>
            <span class="ltr" style="display:block;font-size:0.85em;margin-top:3px;">bo'u nivdok ma lamadnu!</span>
            <span class="lti" style="display:block;margin-top:2px;">!ዝተመሃርናዮ ንፈትሽ</span>
          </p>
        </div>
      </div>
    </div>
  `;
}

// ===== LETTERS =====
function renderLetterCard(l) {
  return `
    <div class="letter-card" data-hebrew="${l.hebrew}" onclick="toggleLetter(this)">
      <div class="letter-hebrew">${l.hebrew}</div>
      <div class="letter-name">${l.name}</div>
      <div class="letter-tigrinya">${l.nameTranslit}</div>
      <div class="letter-details">
        <div class="letter-detail-row">
          <span class="letter-detail-label">צליל / ድምጺ:</span>
          <span class="letter-detail-value">${l.sound} / ${l.soundTigrinya}</span>
        </div>
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
    <span class="ltr" style="display:inline-block;font-size:0.75em;margin:0 6px;">otiyot sofit</span>
    <span class="lti">ናይ መወዳእታ ፊደላት</span>
  </div>`;
  html += SOFIT_LETTERS.map(l => renderLetterCard(l)).join('');
  grid.innerHTML = html;
}

function toggleLetter(el) {
  speak(el.dataset.hebrew);
  const wasExpanded = el.classList.contains('expanded');
  document.querySelectorAll('.letter-card').forEach(c => c.classList.remove('expanded'));
  if (!wasExpanded) el.classList.add('expanded');
}

// ===== NIKUD =====
function renderNikud() {
  const grid = document.getElementById('nikud-grid');
  grid.innerHTML = NIKUD.map(n => `
    <div class="nikud-card" data-name="${n.name}" onclick="speak(this.dataset.name)">
      <div class="nikud-symbol">${n.symbol}</div>
      <div class="nikud-name">${n.name}</div>
      <div class="nikud-sound">
        <span class="lhe">צליל:</span>
        <span class="ltr" style="margin-right:4px;">"${n.sound}"</span>
      </div>
      <div class="nikud-tigrinya">
        <span class="lti">ትግርኛ: ${n.tigrinya}</span>
      </div>
    </div>
  `).join('');
}

// ===== WORDS =====
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
    ${category.words.map((w, i) => `
      <div class="word-card" data-hebrew="${w.hebrew}" onclick="toggleWord(this)">
        <div class="word-emoji">${renderEmoji(w.emoji)}</div>
        <div class="word-hebrew">${w.hebrew}</div>
        <div class="word-translit">${w.translit}</div>
        <div class="word-tigrinya">${w.tigrinya}</div>
        <div class="word-back">
          <div class="word-back-label">
            <span class="lhe">תרגום</span> /
            <span class="lti">ትርጉም</span>
          </div>
          <div class="word-back-value" style="color: var(--secondary);">${w.tigrinya}</div>
          <div class="word-back-label" style="margin-top: 4px;">
            <span class="lhe">הגייה</span> /
            <span class="lti">ኣደማምጻ</span>
          </div>
          <div class="word-back-value" style="color: var(--orange); direction: ltr;">${w.translit}</div>
        </div>
      </div>
    `).join('')}
  `;
}

function toggleWord(el) {
  speak(el.dataset.hebrew);
  el.classList.toggle('flipped');
}

// ===== READING / STORIES =====
let currentStory = -1; // -1 = show picker
let currentPage = 0;

function renderReading() {
  renderStoryPicker();
  document.getElementById('reading-content').innerHTML = '';
}

function renderStoryPicker() {
  const picker = document.getElementById('story-picker');
  picker.innerHTML = STORIES.map((s, i) => `
    <div class="story-pick-card ${currentStory === i ? 'active' : ''}" onclick="openStory(${i})">
      <div class="story-pick-cover">${s.cover}</div>
      <div class="story-pick-title">${s.title}</div>
      <div class="story-pick-tigrinya">${s.titleTigrinya}</div>
      <div class="story-pick-pages">${s.pages.length} עמודים</div>
    </div>
  `).join('');
}

function openStory(index) {
  currentStory = index;
  currentPage = 0;
  renderStoryPicker();
  renderStoryPage();
}

function renderStoryPage() {
  const container = document.getElementById('reading-content');
  const story = STORIES[currentStory];

  if (currentPage < 0) {
    // Cover page
    container.innerHTML = `
      <div class="story-book">
        <div class="story-cover-page">
          <div class="story-cover-emoji">${story.cover}</div>
          <h2 class="story-cover-title">${story.title}</h2>
          <div class="story-cover-tigrinya">${story.titleTigrinya}</div>
          <div class="story-cover-translit">${story.titleTranslit}</div>
        </div>
        <div class="story-nav">
          <button class="reading-nav-btn" onclick="backToStories()">
            <span class="lhe">חזרה לסיפורים</span>
            <span class="ltr" style="font-size:0.85em;margin-right:4px;">khazara le-sipurim</span>
            /
            <span class="lti">ናብ ዛንታታት ተመለስ</span>
          </button>
          <button class="reading-nav-btn" style="background:var(--primary);color:white;" onclick="currentPage=0;renderStoryPage()">
            <span class="lhe">→ להתחיל לקרוא</span>
            <span class="ltr" style="display:block;font-size:0.8em;margin-top:2px;">lehat'khil likro →</span>
          </button>
        </div>
      </div>
    `;
    return;
  }

  const page = story.pages[currentPage];
  const total = story.pages.length;

  container.innerHTML = `
    <div class="story-book">
      <div class="story-header">
        <span class="story-header-title">${story.cover} ${story.title} - ${story.titleTigrinya}</span>
      </div>
      <div class="story-page">
        <div class="story-emoji">${page.emoji && page.emoji.startsWith('img:') ? `<img src="${page.emoji.slice(4)}" alt="" class="story-page-image">` : (page.emoji || '')}</div>
        <div class="reading-sentence">
          ${page.words.map((w, i) => `
            <div class="reading-word" data-hebrew="${w}" onclick="speak(this.dataset.hebrew)">
              <div class="rw-hebrew">${w}</div>
              ${page.tigrinya[i] ? `<div class="rw-tigrinya">${page.tigrinya[i]}</div>` : ''}
              ${page.translit[i] ? `<div class="rw-translit">${page.translit[i]}</div>` : ''}
            </div>
          `).join('')}
        </div>
        <button class="toggle-btn" onclick="toggleTranslation(this)">
          <span class="lhe">הראה תרגום</span>
          <span class="ltr" style="font-size:0.85em;margin-right:4px;">har'e tirgum</span>
          /
          <span class="lti">ትርጉም ኣርኢ</span>
        </button>
        <div class="reading-translation hidden" id="reading-translation">
          <div class="reading-translit">${page.translit.join(' ')}</div>
          <div class="reading-tigrinya-text">${page.fullTigrinya}</div>
        </div>
      </div>
      <div class="story-nav">
        <button class="reading-nav-btn" onclick="storyPrev()" ${currentPage === 0 ? 'disabled style="opacity:0.4"' : ''}>
          <span class="lhe">→ הקודם</span>
        </button>
        <span class="story-page-num">
          <span class="lhe">עמוד</span>
          ${currentPage + 1} / ${total}
        </span>
        ${currentPage < total - 1 ? `
          <button class="reading-nav-btn" onclick="storyNext()">
            <span class="lhe">הבא ←</span>
          </button>
        ` : `
          <button class="reading-nav-btn" style="background:var(--green);color:white;border-color:var(--green);" onclick="storyFinish()">
            <span class="lhe">!סיימתי ←</span>
          </button>
        `}
      </div>
    </div>
  `;
}

function toggleTranslation(btn) {
  const el = document.getElementById('reading-translation');
  el.classList.toggle('hidden');
  btn.classList.toggle('active');
}

function storyNext() {
  const story = STORIES[currentStory];
  if (currentPage < story.pages.length - 1) {
    currentPage++;
    renderStoryPage();
  }
}

function storyPrev() {
  if (currentPage > 0) {
    currentPage--;
    renderStoryPage();
  }
}

function storyFinish() {
  const container = document.getElementById('reading-content');
  container.innerHTML = `
    <div class="celebration show">
      <div class="celebration-emoji">📖⭐🎉</div>
      <h2>
        <span class="lhe" style="display:block;">!סיימתם את הסיפור</span>
        <span class="ltr" style="display:block;font-size:0.6em;margin-top:6px;">siyamtem et ha-sipur!</span>
        <span class="lti" style="display:block;font-size:0.7em;margin-top:4px;">ዛንታ ወዲእኩም!</span>
      </h2>
      <p>
        <span class="lhe" style="display:block;">!כל הכבוד</span>
        <span class="ltr" style="display:block;font-size:0.85em;margin-top:3px;">kol ha-kavod!</span>
        <span class="lti" style="display:block;margin-top:2px;">!ብራቮ</span>
      </p>
      <div style="margin-top:16px;display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">
        <button class="game-btn game-btn-primary" onclick="openStory(${currentStory})">
          <span class="lhe">קראו שוב</span>
          <span class="ltr" style="font-size:0.85em;margin-right:4px;">kre'u shuv</span>
          /
          <span class="lti">ደግሞ ኣንብቡ</span>
        </button>
        <button class="game-btn game-btn-secondary" onclick="backToStories()">
          <span class="lhe">סיפור אחר</span>
          <span class="ltr" style="font-size:0.85em;margin-right:4px;">sipur akher</span>
          /
          <span class="lti">ካልእ ዛንታ</span>
        </button>
      </div>
    </div>
  `;
  showConfetti();
}

function backToStories() {
  currentStory = -1;
  currentPage = 0;
  renderStoryPicker();
  document.getElementById('reading-content').innerHTML = '';
}

// ===== MATCHING GAME =====
function initMatchGame(count = 6) {
  const allWords = getAllWords();
  const selected = shuffle(allWords).slice(0, count);

  matchState = {
    words: selected,
    selectedLeft: null,
    selectedRight: null,
    matched: new Set(),
    score: 0,
    attempts: 0,
  };

  const leftItems = shuffle(selected.map((w, i) => ({ id: i, text: w.hebrew, translit: w.translit, side: 'left' })));
  const rightItems = shuffle(selected.map((w, i) => ({ id: i, text: `${renderEmoji(w.emoji, '1.5rem')} ${w.tigrinya}`, side: 'right' })));

  const container = document.getElementById('match-content');
  container.innerHTML = `
    <div class="game-controls">
      <div class="game-score">
        <span class="lhe">ניקוד</span>
        <span class="ltr" style="font-size:0.85em;margin-right:4px;">nikud</span>
        /
        <span class="lti">ነጥቢ</span>:
        <span id="match-score">0</span> / ${count}
      </div>
      <div class="difficulty-selector">
        <button class="diff-btn ${count === 4 ? 'active' : ''}" onclick="initMatchGame(4)">
          <span class="lhe">קל</span>
          <span class="ltr" style="font-size:0.85em;margin-right:3px;">kal</span>
          /
          <span class="lti">ቀሊል</span>
        </button>
        <button class="diff-btn ${count === 6 ? 'active' : ''}" onclick="initMatchGame(6)">
          <span class="lhe">בינוני</span>
          <span class="ltr" style="font-size:0.85em;margin-right:3px;">beinoni</span>
          /
          <span class="lti">ማእከላይ</span>
        </button>
        <button class="diff-btn ${count === 8 ? 'active' : ''}" onclick="initMatchGame(8)">
          <span class="lhe">קשה</span>
          <span class="ltr" style="font-size:0.85em;margin-right:3px;">kashe</span>
          /
          <span class="lti">ከቢድ</span>
        </button>
      </div>
    </div>
    <div class="match-container">
      <div class="match-column">
        <div class="match-column-title">
          <span class="lhe">עברית</span>
          <span class="ltr" style="font-size:0.85em;margin-right:4px;">ivrit</span>
          /
          <span class="lti">ዕብራይስጢ</span>
        </div>
        ${leftItems.map(item => `
          <div class="match-item" data-id="${item.id}" data-side="left" onclick="selectMatch(this)">
            <div class="match-hebrew">${item.text}</div>
            <div class="match-translit">${item.translit}</div>
          </div>
        `).join('')}
      </div>
      <div class="match-column">
        <div class="match-column-title">
          <span class="lhe">תרגום</span>
          <span class="ltr" style="font-size:0.85em;margin-right:4px;">tirgum</span>
          /
          <span class="lti">ትርጉም</span>
        </div>
        ${rightItems.map(item => `
          <div class="match-item" data-id="${item.id}" data-side="right" onclick="selectMatch(this)">
            ${item.text}
          </div>
        `).join('')}
      </div>
    </div>
    <div class="celebration" id="match-celebration">
      <div class="celebration-emoji">🎉🌟🎊</div>
      <h2>
        <span class="lhe" style="display:block;">!כל הכבוד</span>
        <span class="ltr" style="display:block;font-size:0.6em;margin-top:6px;">kol ha-kavod!</span>
        <span class="lti" style="display:block;font-size:0.7em;margin-top:4px;">!ብራቮ</span>
      </h2>
      <p>
        <span class="lhe" style="display:block;">!סיימתם את המשחק</span>
        <span class="ltr" style="display:block;font-size:0.85em;margin-top:3px;">siyamtem et ha-miskhak!</span>
        <span class="lti" style="display:block;margin-top:2px;">!ጸወታ ወዲእኩም</span>
      </p>
      <button class="game-btn game-btn-primary" onclick="initMatchGame(${count})" style="margin-top: 16px;">
        <span class="lhe">שחקו שוב</span>
        <span class="ltr" style="font-size:0.85em;margin-right:4px;">sakhaku shuv</span>
        /
        <span class="lti">ደግሞ ጸውቱ</span>
      </button>
    </div>
  `;
}

function selectMatch(el) {
  if (el.classList.contains('matched')) return;

  const side = el.dataset.side;
  const id = parseInt(el.dataset.id);
  speak(matchState.words[id].hebrew);

  // Deselect same side
  if (side === 'left') {
    document.querySelectorAll('.match-item[data-side="left"]').forEach(e => e.classList.remove('selected'));
    matchState.selectedLeft = id;
  } else {
    document.querySelectorAll('.match-item[data-side="right"]').forEach(e => e.classList.remove('selected'));
    matchState.selectedRight = id;
  }

  el.classList.add('selected');

  // Check for match
  if (matchState.selectedLeft !== null && matchState.selectedRight !== null) {
    matchState.attempts++;

    if (matchState.selectedLeft === matchState.selectedRight) {
      // Match!
      matchState.score++;
      matchState.matched.add(matchState.selectedLeft);

      document.querySelectorAll(`.match-item[data-id="${matchState.selectedLeft}"]`).forEach(e => {
        e.classList.remove('selected');
        e.classList.add('matched');
      });

      document.getElementById('match-score').textContent = matchState.score;

      if (matchState.matched.size === matchState.words.length) {
        setTimeout(() => {
          document.getElementById('match-celebration').classList.add('show');
          showConfetti();
        }, 500);
      }
    } else {
      // No match
      const leftEl = document.querySelector(`.match-item[data-side="left"][data-id="${matchState.selectedLeft}"]`);
      const rightEl = document.querySelector(`.match-item[data-side="right"][data-id="${matchState.selectedRight}"]`);

      leftEl.classList.add('wrong');
      rightEl.classList.add('wrong');

      setTimeout(() => {
        leftEl.classList.remove('selected', 'wrong');
        rightEl.classList.remove('selected', 'wrong');
      }, 800);
    }

    matchState.selectedLeft = null;
    matchState.selectedRight = null;
  }
}

// ===== MEMORY GAME =====
function initMemoryGame(pairs = 6) {
  const allWords = getAllWords();
  const selected = shuffle(allWords).slice(0, pairs);

  // Create pairs: one card shows emoji, other shows hebrew word
  const cards = [];
  selected.forEach((w, i) => {
    cards.push({ id: i, type: 'emoji',   display: w.emoji,   sub: w.tigrinya, hebrew: w.hebrew });
    cards.push({ id: i, type: 'hebrew',  display: w.hebrew,  sub: w.translit,  hebrew: w.hebrew });
  });

  const shuffled = shuffle(cards);

  memoryState = {
    cards: shuffled,
    flipped: [],
    matched: new Set(),
    score: 0,
    moves: 0,
    locked: false,
  };

  const container = document.getElementById('memory-content');
  container.innerHTML = `
    <div class="game-controls">
      <div class="game-score">
        <span class="lhe">צעדים</span>
        <span class="ltr" style="font-size:0.85em;margin-right:3px;">tse'adim</span>
        /
        <span class="lti">ስጉምቲ</span>:
        <span id="memory-moves">0</span> |
        <span class="lhe">זוגות</span>
        <span class="ltr" style="font-size:0.85em;margin-right:3px;">zugot</span>
        /
        <span class="lti">ጽምዲ</span>:
        <span id="memory-score">0</span> / ${pairs}
      </div>
      <div class="difficulty-selector">
        <button class="diff-btn ${pairs === 4 ? 'active' : ''}" onclick="initMemoryGame(4)">
          <span class="lhe">קל</span>
          <span class="ltr" style="font-size:0.85em;margin-right:3px;">kal</span>
          /
          <span class="lti">ቀሊል</span>
        </button>
        <button class="diff-btn ${pairs === 6 ? 'active' : ''}" onclick="initMemoryGame(6)">
          <span class="lhe">בינוני</span>
          <span class="ltr" style="font-size:0.85em;margin-right:3px;">beinoni</span>
          /
          <span class="lti">ማእከላይ</span>
        </button>
        <button class="diff-btn ${pairs === 8 ? 'active' : ''}" onclick="initMemoryGame(8)">
          <span class="lhe">קשה</span>
          <span class="ltr" style="font-size:0.85em;margin-right:3px;">kashe</span>
          /
          <span class="lti">ከቢድ</span>
        </button>
      </div>
    </div>
    <div class="memory-grid">
      ${shuffled.map((card, idx) => `
        <div class="memory-card" data-idx="${idx}" data-id="${card.id}" onclick="flipMemoryCard(this)">
          <div class="memory-card-inner">
            <div class="memory-card-front">❓</div>
            <div class="memory-card-back">
              <div class="mem-emoji">${card.type === 'emoji' ? renderEmoji(card.display, '2rem') : ''}</div>
              <div class="mem-text">${card.type === 'hebrew' ? card.display : ''}</div>
              <div class="mem-sub">${card.sub}</div>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
    <div class="celebration" id="memory-celebration">
      <div class="celebration-emoji">🧠⭐🏆</div>
      <h2>
        <span class="lhe" style="display:block;">!מדהים</span>
        <span class="ltr" style="display:block;font-size:0.6em;margin-top:6px;">madhim!</span>
        <span class="lti" style="display:block;font-size:0.7em;margin-top:4px;">!ዓብዪ</span>
      </h2>
      <p>
        <span class="lhe" style="display:block;">!מצאתם את כל הזוגות</span>
        <span class="ltr" style="display:block;font-size:0.85em;margin-top:3px;">mtsatem et kol ha-zugot!</span>
        <span class="lti" style="display:block;margin-top:2px;">!ኩሉ ጽምድታት ረኺብኩም</span>
      </p>
      <button class="game-btn game-btn-primary" onclick="initMemoryGame(${pairs})" style="margin-top: 16px;">
        <span class="lhe">שחקו שוב</span>
        <span class="ltr" style="font-size:0.85em;margin-right:4px;">sakhaku shuv</span>
        /
        <span class="lti">ደግሞ ጸውቱ</span>
      </button>
    </div>
  `;
}

function flipMemoryCard(el) {
  if (memoryState.locked) return;
  if (el.classList.contains('flipped') || el.classList.contains('matched')) return;

  speak(memoryState.cards[parseInt(el.dataset.idx)].hebrew);
  el.classList.add('flipped');
  memoryState.flipped.push(el);

  if (memoryState.flipped.length === 2) {
    memoryState.locked = true;
    memoryState.moves++;
    document.getElementById('memory-moves').textContent = memoryState.moves;

    const [card1, card2] = memoryState.flipped;
    const id1 = parseInt(card1.dataset.id);
    const id2 = parseInt(card2.dataset.id);

    if (id1 === id2) {
      // Match!
      memoryState.score++;
      memoryState.matched.add(id1);
      document.getElementById('memory-score').textContent = memoryState.score;

      card1.classList.add('matched');
      card2.classList.add('matched');

      memoryState.flipped = [];
      memoryState.locked = false;

      const totalPairs = document.querySelectorAll('.memory-card').length / 2;
      if (memoryState.matched.size === totalPairs) {
        setTimeout(() => {
          document.getElementById('memory-celebration').classList.add('show');
          showConfetti();
        }, 500);
      }
    } else {
      setTimeout(() => {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
        memoryState.flipped = [];
        memoryState.locked = false;
      }, 1000);
    }
  }
}

// ===== QUIZ =====
function initQuiz() {
  const allWords = getAllWords();
  const selected = shuffle(allWords).slice(0, 10);

  quizState = {
    questions: selected,
    current: 0,
    score: 0,
    total: selected.length,
    answered: false,
  };

  renderQuizQuestion();
}

function renderQuizQuestion() {
  const container = document.getElementById('quiz-content');

  if (quizState.current >= quizState.total) {
    const pct = Math.round((quizState.score / quizState.total) * 100);
    container.innerHTML = `
      <div class="celebration show">
        <div class="celebration-emoji">${pct >= 70 ? '🏆🌟🎉' : '💪📚✨'}</div>
        <h2>
          <span class="lhe" style="display:block;">${pct >= 70 ? '!מצוין' : '!כל הכבוד'}</span>
          <span class="ltr" style="display:block;font-size:0.6em;margin-top:6px;">${pct >= 70 ? 'metsuyyan!' : 'kol ha-kavod!'}</span>
          <span class="lti" style="display:block;font-size:0.7em;margin-top:4px;">${pct >= 70 ? '!ብሉጽ' : '!ብራቮ'}</span>
        </h2>
        <p>
          <span class="lhe" style="display:block;">עניתם נכון על ${quizState.score} מתוך ${quizState.total} שאלות</span>
          <span class="ltr" style="display:block;font-size:0.85em;margin-top:3px;">anittem nakhon al ${quizState.score} mi-tokh ${quizState.total} she'elot</span>
          <span class="lti" style="display:block;margin-top:2px;">ካብ ${quizState.total} ሕቶታት ${quizState.score} ትኽክል መሊስኩም</span>
        </p>
        <p style="font-size: 2rem; margin: 12px 0;">${pct}%</p>
        <button class="game-btn game-btn-primary" onclick="initQuiz()" style="margin-top: 16px;">
          <span class="lhe">נסו שוב</span>
          <span class="ltr" style="font-size:0.85em;margin-right:4px;">nasu shuv</span>
          /
          <span class="lti">ደግሞ ፈትኑ</span>
        </button>
      </div>
    `;
    if (pct >= 70) showConfetti();
    return;
  }

  const q = quizState.questions[quizState.current];
  const allWords = getAllWords();

  // Create wrong options
  const wrongOptions = shuffle(allWords.filter(w => w.emoji !== q.emoji))
    .slice(0, 3)
    .map(w => w.emoji);

  const options = shuffle([...wrongOptions, q.emoji]);

  container.innerHTML = `
    <div class="quiz-card">
      <div class="quiz-question">
        <span class="lhe">?מה המילה הזאת</span>
        <span class="ltr" style="display:block;font-size:0.85em;margin-top:4px;">ma ha-mila ha-zot?</span>
        <span class="lti" style="display:block;margin-top:3px;">እዛ ቃል እንታይ ማለት እያ?</span>
      </div>
      <div class="quiz-word">${q.hebrew}</div>
      <div class="quiz-translit">${q.translit}</div>
      <div class="quiz-options">
        ${options.map((opt, idx) => `
          <button class="quiz-option" data-eid="${opt}" data-hebrew="${q.hebrew}" onclick="answerQuiz(this, ${idx})" data-correct="${opt === q.emoji}">
            ${renderEmoji(opt)}
          </button>
        `).join('')}
      </div>
      <div class="quiz-progress">
        <span class="lhe">שאלה</span>
        <span class="ltr" style="font-size:0.85em;margin-right:3px;">she'ela</span>
        /
        <span class="lti">ሕቶ</span>
        ${quizState.current + 1}
        <span class="lhe">מתוך</span>
        <span class="ltr" style="font-size:0.85em;margin-right:3px;">mi-tokh</span>
        /
        <span class="lti">ካብ</span>
        ${quizState.total}
        <div class="quiz-progress-bar">
          <div class="quiz-progress-fill" style="width: ${(quizState.current / quizState.total) * 100}%"></div>
        </div>
      </div>
    </div>
  `;

  quizState.answered = false;
}

function answerQuiz(el, idx) {
  if (quizState.answered) return;
  quizState.answered = true;
  speak(el.dataset.hebrew);

  document.querySelectorAll('.quiz-option').forEach(b => b.classList.add('disabled'));

  const isCorrect = el.dataset.correct === 'true';
  if (isCorrect) {
    el.classList.add('correct');
    quizState.score++;
  } else {
    el.classList.add('wrong');
    // Highlight correct
    document.querySelectorAll('.quiz-option').forEach(b => {
      if (b.dataset.correct === 'true') b.classList.add('correct');
    });
  }

  setTimeout(() => {
    quizState.current++;
    renderQuizQuestion();
  }, 1200);
}

// ===== CONFETTI =====
function showConfetti() {
  const container = document.createElement('div');
  container.className = 'confetti-container';
  document.body.appendChild(container);

  const colors = ['#6C63FF', '#FF6B6B', '#FFD93D', '#6BCB77', '#4FC3F7', '#F48FB1'];

  for (let i = 0; i < 60; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDelay = Math.random() * 2 + 's';
    confetti.style.animationDuration = (2 + Math.random() * 2) + 's';
    confetti.style.width = (6 + Math.random() * 8) + 'px';
    confetti.style.height = (6 + Math.random() * 8) + 'px';
    container.appendChild(confetti);
  }

  setTimeout(() => container.remove(), 4000);
}
