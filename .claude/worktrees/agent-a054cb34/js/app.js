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
      <h2>!בּוֹאוּ נִלְמַד לִקְרֹא בְּעִבְרִית</h2>
      <div class="welcome-tigrinya">!ንዑ ብዕብራይስጢ ከነንብብ ንመሃር</div>
      <p style="margin-bottom: 24px; color: var(--text-light);">
        לחצו על כפתור כדי להתחיל - ንጀምር ጠውቑ
      </p>
      <div class="welcome-cards">
        <div class="welcome-card" onclick="navigateTo('letters')">
          <div class="welcome-card-emoji">🔤</div>
          <h3>אותיות - ፊደላት</h3>
          <p>לומדים את האלף-בית</p>
          <p>ናይ ዕብራይስጢ ፊደላት ንመሃር</p>
        </div>
        <div class="welcome-card" onclick="navigateTo('nikud')">
          <div class="welcome-card-emoji">✨</div>
          <h3>ניקוד - ነጥብታት</h3>
          <p>לומדים את התנועות</p>
          <p>ናይ ድምጺ ምልክታት ንመሃር</p>
        </div>
        <div class="welcome-card" onclick="navigateTo('words')">
          <div class="welcome-card-emoji">📖</div>
          <h3>מילים - ቃላት</h3>
          <p>לומדים מילים חדשות</p>
          <p>ሓደስቲ ቃላት ንመሃር</p>
        </div>
        <div class="welcome-card" onclick="navigateTo('reading')">
          <div class="welcome-card-emoji">📖</div>
          <h3>סיפורים - ዛንታታት</h3>
          <p>קוראים סיפורים קצרים</p>
          <p>ሓጸርቲ ዛንታታት ነንብብ</p>
        </div>
        <div class="welcome-card" onclick="navigateTo('matching')">
          <div class="welcome-card-emoji">🎯</div>
          <h3>התאמה - ምትእስሳር</h3>
          <p>משחק התאמה</p>
          <p>ጸወታ ምትእስሳር</p>
        </div>
        <div class="welcome-card" onclick="navigateTo('memory')">
          <div class="welcome-card-emoji">🧠</div>
          <h3>זיכרון - ዝኽሪ</h3>
          <p>משחק זיכרון</p>
          <p>ጸወታ ዝኽሪ</p>
        </div>
        <div class="welcome-card" onclick="navigateTo('quiz')">
          <div class="welcome-card-emoji">🏆</div>
          <h3>חידון - ፈተና</h3>
          <p>בואו נבדוק מה למדנו!</p>
          <p>!ዝተመሃርናዮ ንፈትሽ</p>
        </div>
      </div>
    </div>
  `;
}

// ===== LETTERS =====
function renderLetterCard(l) {
  return `
    <div class="letter-card" onclick="toggleLetter(this)">
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
          <div class="letter-example-meaning">${l.exampleTranslit} = ${l.exampleMeaning}</div>
        </div>
      </div>
    </div>`;
}

function renderLetters() {
  const grid = document.getElementById('letters-grid');
  let html = LETTERS.map(l => renderLetterCard(l)).join('');
  html += `<div style="grid-column:1/-1;text-align:center;margin:16px 0 8px;font-size:1.2rem;font-weight:700;color:var(--primary);">
    אותיות סופיות - ናይ መወዳእታ ፊደላት
  </div>`;
  html += SOFIT_LETTERS.map(l => renderLetterCard(l)).join('');
  grid.innerHTML = html;
}

function toggleLetter(el) {
  const wasExpanded = el.classList.contains('expanded');
  document.querySelectorAll('.letter-card').forEach(c => c.classList.remove('expanded'));
  if (!wasExpanded) el.classList.add('expanded');
}

// ===== NIKUD =====
function renderNikud() {
  const grid = document.getElementById('nikud-grid');
  grid.innerHTML = NIKUD.map(n => `
    <div class="nikud-card">
      <div class="nikud-symbol">${n.symbol}</div>
      <div class="nikud-name">${n.name}</div>
      <div class="nikud-sound">צליל: "${n.sound}"</div>
      <div class="nikud-tigrinya">ትግርኛ: ${n.tigrinya}</div>
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
      <div class="word-card" onclick="toggleWord(this)">
        <div class="word-emoji">${renderEmoji(w.emoji)}</div>
        <div class="word-hebrew">${w.hebrew}</div>
        <div class="word-translit">${w.translit}</div>
        <div class="word-tigrinya">${w.tigrinya}</div>
        <div class="word-back">
          <div class="word-back-label">תרגום / ትርጉም</div>
          <div class="word-back-value" style="color: var(--secondary);">${w.tigrinya}</div>
          <div class="word-back-label" style="margin-top: 4px;">הגייה / ኣደማምጻ</div>
          <div class="word-back-value" style="color: var(--orange); direction: ltr;">${w.translit}</div>
        </div>
      </div>
    `).join('')}
  `;
}

function toggleWord(el) {
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
          <button class="reading-nav-btn" onclick="backToStories()">חזרה לסיפורים / ናብ ዛንታታት ተመለስ</button>
          <button class="reading-nav-btn" style="background:var(--primary);color:white;" onclick="currentPage=0;renderStoryPage()">→ להתחיל לקרוא</button>
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
        <div class="story-emoji">${page.emoji}</div>
        <div class="reading-sentence">
          ${page.words.map((w, i) => `
            <div class="reading-word">
              <div class="rw-hebrew">${w}</div>
              ${page.tigrinya[i] ? `<div class="rw-tooltip">
                ${page.translit[i]} = ${page.tigrinya[i]}
              </div>` : ''}
            </div>
          `).join('')}
        </div>
        <button class="toggle-btn" onclick="toggleTranslation(this)">
          הראה תרגום / ትርጉም ኣርኢ
        </button>
        <div class="reading-translation hidden" id="reading-translation">
          <div class="reading-translit">${page.translit.join(' ')}</div>
          <div class="reading-tigrinya-text">${page.fullTigrinya}</div>
        </div>
      </div>
      <div class="story-nav">
        <button class="reading-nav-btn" onclick="storyPrev()" ${currentPage === 0 ? 'disabled style="opacity:0.4"' : ''}>→ הקודם</button>
        <span class="story-page-num">עמוד ${currentPage + 1} / ${total}</span>
        ${currentPage < total - 1 ? `
          <button class="reading-nav-btn" onclick="storyNext()">הבא ←</button>
        ` : `
          <button class="reading-nav-btn" style="background:var(--green);color:white;border-color:var(--green);" onclick="storyFinish()">סיימתי! ←</button>
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
      <h2>!סיימתם את הסיפור - ዛንታ ወዲእኩም</h2>
      <p>!כל הכבוד - ብራቮ</p>
      <div style="margin-top:16px;display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">
        <button class="game-btn game-btn-primary" onclick="openStory(${currentStory})">קראו שוב / ደግሞ ኣንብቡ</button>
        <button class="game-btn game-btn-secondary" onclick="backToStories()">סיפור אחר / ካልእ ዛንታ</button>
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
      <div class="game-score">ניקוד / ነጥቢ: <span id="match-score">0</span> / ${count}</div>
      <div class="difficulty-selector">
        <button class="diff-btn ${count === 4 ? 'active' : ''}" onclick="initMatchGame(4)">קל / ቀሊል</button>
        <button class="diff-btn ${count === 6 ? 'active' : ''}" onclick="initMatchGame(6)">בינוני / ማእከላይ</button>
        <button class="diff-btn ${count === 8 ? 'active' : ''}" onclick="initMatchGame(8)">קשה / ከቢድ</button>
      </div>
    </div>
    <div class="match-container">
      <div class="match-column">
        <div class="match-column-title">עברית / ዕብራይስጢ</div>
        ${leftItems.map(item => `
          <div class="match-item" data-id="${item.id}" data-side="left" onclick="selectMatch(this)">
            <div class="match-hebrew">${item.text}</div>
            <div class="match-translit">${item.translit}</div>
          </div>
        `).join('')}
      </div>
      <div class="match-column">
        <div class="match-column-title">תרגום / ትርጉም</div>
        ${rightItems.map(item => `
          <div class="match-item" data-id="${item.id}" data-side="right" onclick="selectMatch(this)">
            ${item.text}
          </div>
        `).join('')}
      </div>
    </div>
    <div class="celebration" id="match-celebration">
      <div class="celebration-emoji">🎉🌟🎊</div>
      <h2>!כל הכבוד - ብራቮ</h2>
      <p>!סיימתם את המשחק - ጸወታ ወዲእኩም</p>
      <button class="game-btn game-btn-primary" onclick="initMatchGame(${count})" style="margin-top: 16px;">
        שחקו שוב / ደግሞ ጸውቱ
      </button>
    </div>
  `;
}

function selectMatch(el) {
  if (el.classList.contains('matched')) return;

  const side = el.dataset.side;
  const id = parseInt(el.dataset.id);

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
    cards.push({ id: i, type: 'emoji', display: w.emoji, sub: w.tigrinya });
    cards.push({ id: i, type: 'hebrew', display: w.hebrew, sub: w.translit });
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
        צעדים / ስጉምቲ: <span id="memory-moves">0</span> |
        זוגות / ጽምዲ: <span id="memory-score">0</span> / ${pairs}
      </div>
      <div class="difficulty-selector">
        <button class="diff-btn ${pairs === 4 ? 'active' : ''}" onclick="initMemoryGame(4)">קל / ቀሊል</button>
        <button class="diff-btn ${pairs === 6 ? 'active' : ''}" onclick="initMemoryGame(6)">בינוני / ማእከላይ</button>
        <button class="diff-btn ${pairs === 8 ? 'active' : ''}" onclick="initMemoryGame(8)">קשה / ከቢድ</button>
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
      <h2>!מדהים - ዓብዪ</h2>
      <p>!מצאתם את כל הזוגות - ኩሉ ጽምድታት ረኺብኩም</p>
      <button class="game-btn game-btn-primary" onclick="initMemoryGame(${pairs})" style="margin-top: 16px;">
        שחקו שוב / ደግሞ ጸውቱ
      </button>
    </div>
  `;
}

function flipMemoryCard(el) {
  if (memoryState.locked) return;
  if (el.classList.contains('flipped') || el.classList.contains('matched')) return;

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
        <h2>${pct >= 70 ? '!מצוין - ብሉጽ' : '!כל הכבוד - ብራቮ'}</h2>
        <p>עניתם נכון על ${quizState.score} מתוך ${quizState.total} שאלות</p>
        <p>ካብ ${quizState.total} ሕቶታት ${quizState.score} ትኽክል መሊስኩም</p>
        <p style="font-size: 2rem; margin: 12px 0;">${pct}%</p>
        <button class="game-btn game-btn-primary" onclick="initQuiz()" style="margin-top: 16px;">
          נסו שוב / ደግሞ ፈትኑ
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
      <div class="quiz-question">?מה המילה הזאת - እዛ ቃል እንታይ ማለት እያ</div>
      <div class="quiz-word">${q.hebrew}</div>
      <div class="quiz-translit">${q.translit}</div>
      <div class="quiz-options">
        ${options.map((opt, idx) => `
          <button class="quiz-option" data-eid="${opt}" onclick="answerQuiz(this, ${idx})" data-correct="${opt === q.emoji}">
            ${renderEmoji(opt)}
          </button>
        `).join('')}
      </div>
      <div class="quiz-progress">
        שאלה / ሕቶ ${quizState.current + 1} מתוך / ካብ ${quizState.total}
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
