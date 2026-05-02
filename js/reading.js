let currentStory = -1;
let currentPage = 0;
let pageAnswers = {};

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
  pageAnswers = {};
  renderStoryPicker();
  renderStoryPage();
}

function renderStoryPage() {
  const container = document.getElementById('reading-content');
  const story = STORIES[currentStory];

  if (currentPage < 0) {
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
            <span class="lti">ናብ ዛንታታት ተመለስ</span>
          </button>
          <button class="reading-nav-btn" style="background:var(--primary);color:white;" onclick="currentPage=0;renderStoryPage()">
            <span class="lhe">→ להתחיל לקרוא</span>
          </button>
        </div>
      </div>
    `;
    return;
  }

  const page = story.pages[currentPage];
  const total = story.pages.length;

  if (page.type === 'mcq') { renderMCQPage(container, page, total); return; }
  if (page.type === 'truefalse') { renderTrueFalsePage(container, page, total); return; }
  if (page.type === 'write') { renderWritePage(container, page, total); return; }
  if (page.type === 'pot') { renderPotPage(container, page, total); return; }

  container.innerHTML = `
    <div class="story-book">
      <div class="story-header">
        <span class="story-header-title">${story.cover} ${story.title} - ${story.titleTigrinya}</span>
      </div>
      <div class="story-page">
        <div class="story-emoji">${page.emoji && page.emoji.startsWith('img:') ? `<img src="${page.emoji.slice(4)}" alt="" class="story-page-image">` : (page.emoji || '')}</div>
        <div class="reading-sentence">
          ${page.words.map((w, i) => `
            <div class="reading-word" data-hebrew="${w}" data-translit="${page.translit[i]}" onclick="speak(this.dataset.hebrew, this.dataset.translit)">
              <div class="rw-hebrew">${w}</div>
              ${page.translit[i] ? `<div class="rw-translit">${page.translit[i]}</div>` : ''}
              ${page.tigrinya[i] ? `<div class="rw-tigrinya">${page.tigrinya[i]}</div>` : ''}
            </div>
          `).join('')}
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
            <span class="lhe">סיימתי! ←</span>
          </button>
        `}
      </div>
    </div>
  `;
}

function storyNext() {
  if (currentPage < STORIES[currentStory].pages.length - 1) {
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
        <span class="lhe" style="display:block;">סיימתם את הסיפור!</span>
        <span class="lti" style="display:block;font-size:0.7em;margin-top:4px;">ዛንታ ወዲእኩም!</span>
      </h2>
      <p>
        <span class="lhe" style="display:block;">כל הכבוד!</span>
        <span class="lti" style="display:block;margin-top:2px;">ብራቮ!</span>
      </p>
      <div style="margin-top:16px;display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">
        <button class="game-btn game-btn-primary" onclick="openStory(${currentStory})">
          <span class="lhe">קראו שוב</span>
          /
          <span class="lti">ደግሞ ኣንብቡ</span>
        </button>
        <button class="game-btn game-btn-secondary" onclick="backToStories()">
          <span class="lhe">סיפור אחר</span>
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
  pageAnswers = {};
  renderStoryPicker();
  document.getElementById('reading-content').innerHTML = '';
}

function renderMCQPage(container, page, total) {
  const story = STORIES[currentStory];
  if (!pageAnswers[currentPage]) pageAnswers[currentPage] = { selected: null };
  const state = pageAnswers[currentPage];
  const answered = state.selected !== null;

  container.innerHTML = `
    <div class="story-book">
      <div class="story-header">
        <span class="story-header-title">${story.cover} ${story.title} - ${story.titleTigrinya}</span>
      </div>
      <div class="story-page story-question-page">
        <div class="story-emoji">${page.emoji || '❓'}</div>
        <div class="question-heading" onclick="speak('${page.question.replace(/'/g,"\\'")}')">
          <div class="lhe q-hebrew">${page.question}</div>
          ${page.questionTigrinya ? `<div class="lti q-tigrinya">${page.questionTigrinya}</div>` : ''}
          ${page.questionTranslit ? `<div class="q-translit">${page.questionTranslit}</div>` : ''}
        </div>
        <div class="mcq-options">
          ${page.options.map((opt, i) => {
            let cls = 'mcq-option';
            if (answered) {
              if (i === page.correct) cls += ' mcq-correct';
              else if (i === state.selected) cls += ' mcq-wrong';
            }
            return `<button class="${cls}" data-speak="${opt}" onmouseenter="speakOnHover(this)" onmouseleave="cancelHoverSpeak()" onclick="selectMCQ(${i})" ${answered ? 'disabled' : ''}>
              <div class="lhe mcq-opt-hebrew">${opt}</div>
              ${page.optionsTigrinya?.[i] ? `<div class="mcq-opt-tigrinya">${page.optionsTigrinya[i]}</div>` : ''}
              ${page.optionsTranslit?.[i] ? `<div class="mcq-opt-translit">${page.optionsTranslit[i]}</div>` : ''}
            </button>`;
          }).join('')}
        </div>
        ${answered ? `<div class="question-feedback ${state.selected === page.correct ? 'feedback-correct' : 'feedback-wrong'} lhe">
          ${state.selected === page.correct ? '✓ נכון!' : '✗ לא נכון — ' + page.options[page.correct]}
        </div>` : ''}
      </div>
      <div class="story-nav">
        <button class="reading-nav-btn" onclick="storyPrev()" ${currentPage === 0 ? 'disabled style="opacity:0.4"' : ''}>
          <span class="lhe">→ הקודם</span>
        </button>
        <span class="story-page-num"><span class="lhe">עמוד</span> ${currentPage + 1} / ${total}</span>
        ${answered ? (currentPage < total - 1 ?
          `<button class="reading-nav-btn" onclick="storyNext()"><span class="lhe">הבא ←</span></button>` :
          `<button class="reading-nav-btn" style="background:var(--green);color:white;border-color:var(--green);" onclick="storyFinish()"><span class="lhe">סיימתי! ←</span></button>`
        ) : '<span></span>'}
      </div>
    </div>
  `;
}

function selectMCQ(i) {
  pageAnswers[currentPage] = { selected: i };
  renderStoryPage();
}

function renderTrueFalsePage(container, page, total) {
  const story = STORIES[currentStory];
  if (!pageAnswers[currentPage]) pageAnswers[currentPage] = { answers: new Array(page.items.length).fill(null) };
  const state = pageAnswers[currentPage];
  const allAnswered = state.answers.every(a => a !== null);
  const score = state.answers.filter((a, i) => a !== null && a === page.items[i].correct).length;

  container.innerHTML = `
    <div class="story-book">
      <div class="story-header">
        <span class="story-header-title">${story.cover} ${story.title} - ${story.titleTigrinya}</span>
      </div>
      <div class="story-page story-question-page">
        <div class="story-emoji">${page.emoji || '✅'}</div>
        <div class="question-heading">
          <div class="lhe q-hebrew">נכון או לא נכון?</div>
          <div class="lti q-tigrinya">ቅኑዕ ዶ ሓሶት?</div>
          <div class="q-translit">ናኮን ኦ ሎ ናኮን?</div>
        </div>
        <div class="tf-list">
          ${page.items.map((item, i) => {
            const ans = state.answers[i];
            const answered = ans !== null;
            const isCorrect = ans === item.correct;
            const safeText = item.text.replace(/'/g, "\\'");
            return `
              <div class="tf-item ${answered ? (isCorrect ? 'tf-item-correct' : 'tf-item-wrong') : ''}">
                <div class="tf-text-block" data-speak="${item.text}" onmouseenter="speakOnHover(this)" onmouseleave="cancelHoverSpeak()" onclick="speak(this.dataset.speak)">
                  <div class="lhe tf-text">${item.text}</div>
                  ${item.tigrinya ? `<div class="tf-tigrinya">${item.tigrinya}</div>` : ''}
                  ${item.translit ? `<div class="tf-translit">${item.translit}</div>` : ''}
                </div>
                <div class="tf-btns">
                  <button class="tf-btn ${answered && item.correct === true ? 'tf-btn-correct' : ''} ${answered && ans === true && !isCorrect ? 'tf-btn-wrong' : ''}"
                    onclick="answerTF(${i}, true)" ${answered ? 'disabled' : ''}>
                    <span class="lhe">נכון</span>
                    <span class="tf-btn-ti">ቅኑዕ</span>
                    <span class="tf-btn-translit">ናኮን</span>
                  </button>
                  <button class="tf-btn ${answered && item.correct === false ? 'tf-btn-correct' : ''} ${answered && ans === false && !isCorrect ? 'tf-btn-wrong' : ''}"
                    onclick="answerTF(${i}, false)" ${answered ? 'disabled' : ''}>
                    <span class="lhe">לא נכון</span>
                    <span class="tf-btn-ti">ሓሶት</span>
                    <span class="tf-btn-translit">ሎ ናኮን</span>
                  </button>
                </div>
              </div>
            `;
          }).join('')}
        </div>
        ${allAnswered ? `<div class="question-feedback feedback-neutral lhe">ניקוד: ${score} / ${page.items.length} 🌟</div>` : ''}
      </div>
      <div class="story-nav">
        <button class="reading-nav-btn" onclick="storyPrev()" ${currentPage === 0 ? 'disabled style="opacity:0.4"' : ''}>
          <span class="lhe">→ הקודם</span>
        </button>
        <span class="story-page-num"><span class="lhe">עמוד</span> ${currentPage + 1} / ${total}</span>
        ${allAnswered ? (currentPage < total - 1 ?
          `<button class="reading-nav-btn" onclick="storyNext()"><span class="lhe">הבא ←</span></button>` :
          `<button class="reading-nav-btn" style="background:var(--green);color:white;border-color:var(--green);" onclick="storyFinish()"><span class="lhe">סיימתי! ←</span></button>`
        ) : '<span></span>'}
      </div>
    </div>
  `;
}

function answerTF(itemIndex, answer) {
  const page = STORIES[currentStory].pages[currentPage];
  if (!pageAnswers[currentPage]) pageAnswers[currentPage] = { answers: new Array(page.items.length).fill(null) };
  pageAnswers[currentPage].answers[itemIndex] = answer;
  renderStoryPage();
}

function renderWritePage(container, page, total) {
  const story = STORIES[currentStory];
  const safePrompt = page.prompt.replace(/'/g, "\\'");
  const safeHint = (page.hint || '').replace(/'/g, "\\'");
  container.innerHTML = `
    <div class="story-book">
      <div class="story-header">
        <span class="story-header-title">${story.cover} ${story.title} - ${story.titleTigrinya}</span>
      </div>
      <div class="story-page story-question-page">
        <div class="story-emoji">${page.emoji || '✏️'}</div>
        <div class="question-heading" onclick="speak('${safePrompt}')">
          <div class="lhe q-hebrew">${page.prompt}</div>
          ${page.promptTigrinya ? `<div class="lti q-tigrinya">${page.promptTigrinya}</div>` : ''}
          ${page.promptTranslit ? `<div class="q-translit">${page.promptTranslit}</div>` : ''}
        </div>
        ${page.hint ? `
        <div class="write-hint-block" onclick="speak('${safeHint}')">
          <div class="lhe write-hint">${page.hint}</div>
          ${page.hintTigrinya ? `<div class="lti write-hint-ti">${page.hintTigrinya}</div>` : ''}
          ${page.hintTranslit ? `<div class="write-hint-translit">${page.hintTranslit}</div>` : ''}
        </div>` : ''}
        <textarea class="write-textarea lhe" placeholder="כתוב כאן..." rows="4" dir="rtl"></textarea>
      </div>
      <div class="story-nav">
        <button class="reading-nav-btn" onclick="storyPrev()" ${currentPage === 0 ? 'disabled style="opacity:0.4"' : ''}>
          <span class="lhe">→ הקודם</span>
        </button>
        <span class="story-page-num"><span class="lhe">עמוד</span> ${currentPage + 1} / ${total}</span>
        ${currentPage < total - 1 ?
          `<button class="reading-nav-btn" onclick="storyNext()"><span class="lhe">הבא ←</span></button>` :
          `<button class="reading-nav-btn" style="background:var(--green);color:white;border-color:var(--green);" onclick="storyFinish()"><span class="lhe">סיימתי! ←</span></button>`
        }
      </div>
    </div>
  `;
}

function renderPotPage(container, page, total) {
  const story = STORIES[currentStory];
  if (!pageAnswers[currentPage]) pageAnswers[currentPage] = { clicked: {} };
  const state = pageAnswers[currentPage];

  const correctIndices = page.items.reduce((acc, item, i) => item.correct ? [...acc, i] : acc, []);
  const allFound = correctIndices.every(i => state.clicked[i] === 'correct');
  const safePrompt = page.prompt.replace(/'/g, "\\'");

  container.innerHTML = `
    <div class="story-book">
      <div class="story-header">
        <span class="story-header-title">${story.cover} ${story.title} - ${story.titleTigrinya}</span>
      </div>
      <div class="story-page story-question-page">
        <div class="story-emoji">${page.emoji || '🍲'}</div>
        <div class="question-heading" onclick="speak('${safePrompt}')">
          <div class="lhe q-hebrew">${page.prompt}</div>
          ${page.promptTigrinya ? `<div class="lti q-tigrinya">${page.promptTigrinya}</div>` : ''}
          ${page.promptTranslit ? `<div class="q-translit">${page.promptTranslit}</div>` : ''}
        </div>
        <div class="pot-grid">
          ${page.items.map((item, i) => {
            const clicked = state.clicked[i];
            let cls = 'pot-item';
            let badge = '';
            if (clicked === 'correct') { cls += ' pot-correct'; badge = '<span class="pot-badge">✓</span>'; }
            else if (clicked === 'wrong') { cls += ' pot-wrong'; badge = '<span class="pot-badge">✗</span>'; }
            return `
              <div class="${cls}" onclick="clickPotItem(${i})">
                ${badge}
                <div class="pot-item-emoji">${item.emoji}</div>
                <div class="lhe pot-item-hebrew">${item.text}</div>
                ${item.tigrinya ? `<div class="pot-item-tigrinya">${item.tigrinya}</div>` : ''}
                ${item.translit ? `<div class="pot-item-translit">${item.translit}</div>` : ''}
              </div>`;
          }).join('')}
        </div>
        ${allFound
          ? `<div class="question-feedback feedback-correct lhe">כל הכבוד! מצאת את כל המצרכים!</div>`
          : `<div class="pot-hint lhe">לחץ על מה שסבתא שמה בסיר 🍲</div>`}
      </div>
      <div class="story-nav">
        <button class="reading-nav-btn" onclick="storyPrev()" ${currentPage === 0 ? 'disabled style="opacity:0.4"' : ''}>
          <span class="lhe">→ הקודם</span>
        </button>
        <span class="story-page-num"><span class="lhe">עמוד</span> ${currentPage + 1} / ${total}</span>
        ${allFound ? (currentPage < total - 1 ?
          `<button class="reading-nav-btn" onclick="storyNext()"><span class="lhe">הבא ←</span></button>` :
          `<button class="reading-nav-btn" style="background:var(--green);color:white;border-color:var(--green);" onclick="storyFinish()"><span class="lhe">סיימתי! ←</span></button>`
        ) : '<span></span>'}
      </div>
    </div>
  `;
}

function clickPotItem(i) {
  const page = STORIES[currentStory].pages[currentPage];
  if (!pageAnswers[currentPage]) pageAnswers[currentPage] = { clicked: {} };
  if (pageAnswers[currentPage].clicked[i]) return;
  pageAnswers[currentPage].clicked[i] = page.items[i].correct ? 'correct' : 'wrong';
  renderStoryPage();
}
