// Digital rain animation starts when the page loads
window.addEventListener('load', () => {
  const canvas = document.getElementById('Matrix');
  const context = canvas.getContext('2d');

  // ... (rest of the digital rain animation code) ...
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
  const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const nums = '0123456789';
  const kanji = '一二三四五六七八九十百千万円日週月年時間分午前後今先来半毎何人男女子母父友火水木土金本川花気生魚天空山雨電車語耳手足目口名店駅道社国外学校上下中北西東南右左	';

  const alphabet = katakana + latin + nums + kanji;

  const fontSize = 16;
  const columns = canvas.width / fontSize;

  const rainDrops = [];

  for (let x = 0; x < columns; x++) {
    rainDrops[x] = 1;
  }

  const draw = () => {
    context.fillStyle = 'rgba(0, 0, 0, 0.05)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = '#0F0';
    context.font = fontSize + 'px monospace';

    for (let i = 0; i < rainDrops.length; i++) {
      const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
      context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

      if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        rainDrops[i] = 0;
      }
      rainDrops[i]++;
    }
  };

  const animationInterval = setInterval(draw, 30);

  // Stop the digital rain animation after a few seconds (adjust the duration as needed)
  // setTimeout(() => {
  //   clearInterval(animationInterval);
  // }, 3000);
});

// Typing animation for "Brandon's Cybersecurity Website"
const titleText = "Brandon's Cybersecurity Website";
const typingElement = document.getElementById('typing-animation');

const typeText = (text, i = 0) => {
  if (i < text.length) {
    typingElement.innerHTML += text.charAt(i);
    setTimeout(() => typeText(text, i + 1), 100); // Adjust typing speed here (milliseconds)
  }
};

typeText(titleText);
