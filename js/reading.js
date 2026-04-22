let currentStory = -1;
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
            <span class="lhe">!סיימתי ←</span>
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
        <span class="lhe" style="display:block;">!סיימתם את הסיפור</span>
        <span class="lti" style="display:block;font-size:0.7em;margin-top:4px;">ዛንታ ወዲእኩም!</span>
      </h2>
      <p>
        <span class="lhe" style="display:block;">!כל הכבוד</span>
        <span class="lti" style="display:block;margin-top:2px;">!ብራቮ</span>
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
  renderStoryPicker();
  document.getElementById('reading-content').innerHTML = '';
}
