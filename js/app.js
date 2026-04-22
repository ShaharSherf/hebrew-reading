let currentSection = 'welcome';

document.addEventListener('DOMContentLoaded', () => {
  renderWelcome();
  renderLetters();
  renderNikud();
  renderWords();
  renderReading();
  setupNav();
});

function setupNav() {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => navigateTo(btn.dataset.section));
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

  if (section === 'matching') initMatchGame();
  if (section === 'memory') initMemoryGame();
  if (section === 'quiz') initQuiz();

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

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
