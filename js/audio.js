let audioEnabled = localStorage.getItem('audioEnabled') !== 'false';
let heVoice = null;

function loadVoice() {
  heVoice = speechSynthesis.getVoices().find(v => v.lang.startsWith('he')) || null;
}

if (window.speechSynthesis) {
  loadVoice();
  speechSynthesis.addEventListener('voiceschanged', loadVoice);
}

let _currentAudio = null;

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
  } else {
    if (_currentAudio) { _currentAudio.pause(); _currentAudio = null; }
    fetch(`/tts?q=${encodeURIComponent(text.trim())}`)
      .then(r => { if (!r.ok) throw new Error(r.status); return r.arrayBuffer(); })
      .then(buf => {
        const blobUrl = URL.createObjectURL(new Blob([buf], { type: 'audio/mpeg' }));
        _currentAudio = new Audio(blobUrl);
        _currentAudio.play().catch(e => console.warn('TTS play error:', e));
        _currentAudio.onended = () => { URL.revokeObjectURL(blobUrl); _currentAudio = null; };
      })
      .catch(e => console.warn('TTS fetch error:', e));
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
