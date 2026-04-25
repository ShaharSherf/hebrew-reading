let matchState = {};
let memoryState = {};
let quizState = {};

// Per-difficulty pool tracker so replay always shows fresh words
const _memUsed = {};

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

  const leftItems  = shuffle(selected.map((w, i) => ({ id: i, text: w.hebrew, translit: w.translit })));
  const rightItems = shuffle(selected.map((w, i) => ({ id: i, text: `${renderEmoji(w.emoji, '1.5rem')} ${w.tigrinya}` })));

  const container = document.getElementById('match-content');
  container.innerHTML = `
    <div class="game-controls">
      <div class="game-score">
        <span class="lhe">ניקוד</span> / <span class="lti">ነጥቢ</span>:
        <span id="match-score">0</span> / ${count}
      </div>
      <div class="difficulty-selector">
        <button class="diff-btn ${count === 4 ? 'active' : ''}" onclick="initMatchGame(4)">
          <span class="lhe">קל</span> / <span class="lti">ቀሊል</span>
        </button>
        <button class="diff-btn ${count === 6 ? 'active' : ''}" onclick="initMatchGame(6)">
          <span class="lhe">בינוני</span> / <span class="lti">ማእከላይ</span>
        </button>
        <button class="diff-btn ${count === 8 ? 'active' : ''}" onclick="initMatchGame(8)">
          <span class="lhe">קשה</span> / <span class="lti">ከቢድ</span>
        </button>
      </div>
    </div>
    <div class="match-container">
      <div class="match-column">
        <div class="match-column-title">
          <span class="lhe">עברית</span> / <span class="lti">ዕብራይስጢ</span>
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
          <span class="lhe">תרגום</span> / <span class="lti">ትርጉም</span>
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
        <span class="lti" style="display:block;font-size:0.7em;margin-top:4px;">!ብራቮ</span>
      </h2>
      <p>
        <span class="lhe" style="display:block;">!סיימתם את המשחק</span>
        <span class="lti" style="display:block;margin-top:2px;">!ጸወታ ወዲእኩም</span>
      </p>
      <button class="game-btn game-btn-primary" onclick="initMatchGame(${count})" style="margin-top: 16px;">
        <span class="lhe">שחקו שוב</span> / <span class="lti">ደግሞ ጸውቱ</span>
      </button>
    </div>
  `;
}

function selectMatch(el) {
  if (el.classList.contains('matched')) return;

  const side = el.dataset.side;
  const id = parseInt(el.dataset.id);
  speak(matchState.words[id].hebrew, matchState.words[id].translit);

  if (side === 'left') {
    document.querySelectorAll('.match-item[data-side="left"]').forEach(e => e.classList.remove('selected'));
    matchState.selectedLeft = id;
  } else {
    document.querySelectorAll('.match-item[data-side="right"]').forEach(e => e.classList.remove('selected'));
    matchState.selectedRight = id;
  }

  el.classList.add('selected');

  if (matchState.selectedLeft !== null && matchState.selectedRight !== null) {
    matchState.attempts++;

    if (matchState.selectedLeft === matchState.selectedRight) {
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
      const leftEl  = document.querySelector(`.match-item[data-side="left"][data-id="${matchState.selectedLeft}"]`);
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

  if (!_memUsed[pairs]) _memUsed[pairs] = new Set();
  let pool = allWords.filter((_, i) => !_memUsed[pairs].has(i));
  if (pool.length < pairs) {
    _memUsed[pairs].clear();
    pool = allWords;
  }

  const selected = shuffle(pool).slice(0, pairs);
  selected.forEach(w => _memUsed[pairs].add(allWords.indexOf(w)));

  const cards = [];
  selected.forEach((w, i) => {
    cards.push({ id: i, type: 'emoji',  display: w.emoji,                    hebrew: w.hebrew, translit: w.translit });
    cards.push({ id: i, type: 'hebrew', display: w.hebrew, tigrinya: w.tigrinya, translit: w.translit, hebrew: w.hebrew });
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
        <span class="lhe">צעדים</span> / <span class="lti">ስጉምቲ</span>:
        <span id="memory-moves">0</span> |
        <span class="lhe">זוגות</span> / <span class="lti">ጽምዲ</span>:
        <span id="memory-score">0</span> / ${pairs}
      </div>
      <div class="difficulty-selector">
        <button class="diff-btn ${pairs === 4 ? 'active' : ''}" onclick="initMemoryGame(4)">
          <span class="lhe">קל</span> / <span class="lti">ቀሊል</span>
        </button>
        <button class="diff-btn ${pairs === 6 ? 'active' : ''}" onclick="initMemoryGame(6)">
          <span class="lhe">בינוני</span> / <span class="lti">ማእከላይ</span>
        </button>
        <button class="diff-btn ${pairs === 8 ? 'active' : ''}" onclick="initMemoryGame(8)">
          <span class="lhe">קשה</span> / <span class="lti">ከቢድ</span>
        </button>
      </div>
    </div>
    <div class="memory-grid">
      ${shuffled.map((card, idx) => `
        <div class="memory-card" data-idx="${idx}" data-id="${card.id}" onclick="flipMemoryCard(this)">
          <div class="memory-card-inner">
            <div class="memory-card-front">❓</div>
            <div class="memory-card-back">
              ${card.type === 'emoji' ? `
                <div class="mem-emoji">${renderEmoji(card.display, '2rem')}</div>
              ` : `
                <div class="mem-text">${card.display}</div>
                <div class="mem-sub mem-sub-tr">${card.translit}</div>
                <div class="mem-sub mem-sub-ti">${card.tigrinya}</div>
              `}
            </div>
          </div>
        </div>
      `).join('')}
    </div>
    <div class="celebration" id="memory-celebration">
      <div class="celebration-emoji">🧠⭐🏆</div>
      <h2>
        <span class="lhe" style="display:block;">!מדהים</span>
        <span class="lti" style="display:block;font-size:0.7em;margin-top:4px;">!ዓብዪ</span>
      </h2>
      <p>
        <span class="lhe" style="display:block;">!מצאתם את כל הזוגות</span>
        <span class="lti" style="display:block;margin-top:2px;">!ኩሉ ጽምድታት ረኺብኩም</span>
      </p>
      <button class="game-btn game-btn-primary" onclick="initMemoryGame(${pairs})" style="margin-top: 16px;">
        <span class="lhe">מילים חדשות! 🔄</span> / <span class="lti">ሓደስቲ ቃላት!</span>
      </button>
    </div>
  `;
}

function flipMemoryCard(el) {
  if (memoryState.locked) return;
  if (el.classList.contains('flipped') || el.classList.contains('matched')) return;

  speak(memoryState.cards[parseInt(el.dataset.idx)].hebrew, memoryState.cards[parseInt(el.dataset.idx)].translit);
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

function getWordCategory(emoji) {
  for (const [key, cat] of Object.entries(WORDS)) {
    if (cat.words.some(w => w.emoji === emoji)) return key;
  }
  return null;
}

// Easy: visual/familiar words; Hard: abstract/longer vocabulary
const QUIZ_LEVELS = {
  easy:   { cats: ['family', 'animals', 'body'],           count: 5  },
  medium: { cats: null,                                    count: 10 },
  hard:   { cats: ['colors', 'numbers', 'nature', 'food'], count: 15 },
};

function initQuiz(level = null) {
  if (level === null) { renderQuizStart(); return; }

  const allWords = getAllWords();
  const cfg = QUIZ_LEVELS[level];
  const pool = cfg.cats
    ? allWords.filter(w => cfg.cats.includes(getWordCategory(w.emoji)))
    : allWords;

  const selected = shuffle(pool.length >= cfg.count ? pool : allWords).slice(0, cfg.count);
  quizState = { questions: selected, current: 0, score: 0, total: selected.length, answered: false, level };
  renderQuizQuestion();
}

function renderQuizStart() {
  const container = document.getElementById('quiz-content');
  container.innerHTML = `
    <div class="quiz-start">
      <div class="quiz-start-emoji">🏆</div>
      <h3>
        <span class="lhe" style="display:block;">?בחרו רמה</span>
        <span class="lti" style="display:block;margin-top:4px;">ደረጃ ምረጹ</span>
      </h3>
      <div class="difficulty-selector" style="margin-top:16px;">
        <button class="diff-btn" onclick="initQuiz('easy')">
          <span class="lhe">קל</span> / <span class="lti">ቀሊል</span>
          <span style="display:block;font-size:0.8em;opacity:0.7;">משפחה, חיות, גוף · 5 שאלות</span>
        </button>
        <button class="diff-btn" onclick="initQuiz('medium')">
          <span class="lhe">בינוני</span> / <span class="lti">ማእከላይ</span>
          <span style="display:block;font-size:0.8em;opacity:0.7;">כל המילים · 10 שאלות</span>
        </button>
        <button class="diff-btn" onclick="initQuiz('hard')">
          <span class="lhe">קשה</span> / <span class="lti">ከቢድ</span>
          <span style="display:block;font-size:0.8em;opacity:0.7;">צבעים, מספרים, טבע · 15 שאלות</span>
        </button>
      </div>
    </div>
  `;
}

function renderQuizQuestion() {
  const container = document.getElementById('quiz-content');

  if (quizState.current >= quizState.total) {
    const pct = Math.round((quizState.score / quizState.total) * 100);
    container.innerHTML = `
      <div class="celebration show">
        <div class="celebration-emoji">${pct >= 70 ? '🏆🌟🎉' : pct >= 31 ? '💪📚✨' : '📚🌱💡'}</div>
        <h2>
          <span class="lhe" style="display:block;">${pct >= 70 ? '!מצוין' : pct >= 31 ? '!כל הכבוד' : '!ממשיכים להתאמן'}</span>
          <span class="lti" style="display:block;font-size:0.7em;margin-top:4px;">${pct >= 70 ? '!ብሉጽ' : pct >= 31 ? '!ብራቮ' : '!ደጋጊምካ ፈትን'}</span>
        </h2>
        <p>
          <span class="lhe" style="display:block;">עניתם נכון על ${quizState.score} מתוך ${quizState.total} שאלות</span>
          <span class="lti" style="display:block;margin-top:2px;">ካብ ${quizState.total} ሕቶታት ${quizState.score} ትኽክል መሊስኩም</span>
        </p>
        <p style="font-size: 2rem; margin: 12px 0;">${pct}%</p>
        <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:16px;">
          <button class="game-btn game-btn-primary" onclick="initQuiz('${quizState.level}')">
            <span class="lhe">נסו שוב</span> / <span class="lti">ደግሞ ፈትኑ</span>
          </button>
          <button class="game-btn game-btn-secondary" onclick="initQuiz()">
            <span class="lhe">רמה אחרת</span> / <span class="lti">ካልእ ደረጃ</span>
          </button>
        </div>
      </div>
    `;
    if (pct >= 70) showConfetti();
    return;
  }

  const q = quizState.questions[quizState.current];
  const allWords = getAllWords();
  const emojiToWord = {};
  allWords.forEach(w => { emojiToWord[w.emoji] = w; });

  // Prefer distractors from different categories to avoid semantically close options
  const correctCat = getWordCategory(q.emoji);
  const crossCat = allWords.filter(w => w.emoji !== q.emoji && getWordCategory(w.emoji) !== correctCat);
  const distractorPool = crossCat.length >= 3 ? crossCat : allWords.filter(w => w.emoji !== q.emoji);
  const wrongOptions = shuffle(distractorPool).slice(0, 3).map(w => w.emoji);
  const options = shuffle([...wrongOptions, q.emoji]);

  container.innerHTML = `
    <div class="quiz-card">
      <div class="quiz-question">
        <span class="lhe">?מה המילה הזאת</span>
        <span class="lti" style="display:block;margin-top:3px;">እዛ ቃል እንታይ ማለት እያ?</span>
      </div>
      <div class="quiz-word">${q.hebrew}</div>
      <div class="quiz-translit">${q.translit}</div>
      <div class="quiz-options">
        ${options.map((opt, idx) => {
          const w = emojiToWord[opt];
          const label = w ? `${w.hebrew} - ${w.tigrinya}` : opt;
          return `
            <button class="quiz-option" aria-label="${label}"
                    data-hebrew="${q.hebrew}" data-translit="${q.translit}"
                    onclick="answerQuiz(this, ${idx})" data-correct="${opt === q.emoji}">
              ${renderEmoji(opt)}
            </button>`;
        }).join('')}
      </div>
      <div class="quiz-progress">
        <span class="lhe">שאלה</span> / <span class="lti">ሕቶ</span>
        ${quizState.current + 1}
        <span class="lhe">מתוך</span> / <span class="lti">ካብ</span>
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
  speak(el.dataset.hebrew, el.dataset.translit);

  document.querySelectorAll('.quiz-option').forEach(b => b.classList.add('disabled'));

  const isCorrect = el.dataset.correct === 'true';
  if (isCorrect) {
    el.classList.add('correct');
    quizState.score++;
  } else {
    el.classList.add('wrong');
    document.querySelectorAll('.quiz-option').forEach(b => {
      if (b.dataset.correct === 'true') b.classList.add('correct');
    });
  }

  setTimeout(() => {
    quizState.current++;
    renderQuizQuestion();
  }, 1200);
}
