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
  if (!audioEnabled || !text?.trim()) return;

  if (heVoice) {
    const u = new SpeechSynthesisUtterance(text.trim());
    u.voice = heVoice;
    u.lang = 'he-IL';
    u.rate = 0.9;
    u.onerror = (e) => console.warn('TTS error:', e.error);
    speechSynthesis.cancel();
    setTimeout(() => speechSynthesis.speak(u), 0);
  } else if (typeof responsiveVoice !== 'undefined') {
    responsiveVoice.cancel();
    responsiveVoice.speak(text.trim(), 'Hebrew Female', { rate: 0.9 });
  }
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
