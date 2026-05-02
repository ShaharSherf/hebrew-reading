// Get all words as flat array
function getAllWords() {
  const all = [];
  Object.values(WORDS).forEach(cat => {
    cat.words.forEach(w => all.push(w));
  });
  return all;
}

// Render emoji or image
function renderEmoji(emoji, size = '3rem') {
  if (emoji.startsWith('img:')) {
    const src = emoji.slice(4);
    return `<img src="${src}" alt="" style="width:${size};height:${size};vertical-align:middle;display:inline-block;">`;
  }
  return emoji;
}

// Get a unique ID for an emoji (for comparison in games)
function emojiId(emoji) {
  return emoji;
}

// Shuffle array
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
