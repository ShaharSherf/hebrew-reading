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
  if (!audioEnabled || !heVoice || !text?.trim()) return;
  const u = new SpeechSynthesisUtterance(text.trim());
  u.voice = heVoice;
  u.lang = 'he-IL';
  u.rate = 0.9;
  u.onerror = () => {};
  speechSynthesis.cancel();
  speechSynthesis.speak(u);
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
