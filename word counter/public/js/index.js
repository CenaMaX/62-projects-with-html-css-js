const counter = document.querySelector('.counter');
const word = document.querySelector('.word');

word.addEventListener('keyup', (e) => {
  wordCounter(e.target.value);
});

const wordCounter = (text) => {
  let wordCount = 0;
  for (let i = 0; i <= text.length; i++) {
    if (text.charAt(i) == ' ') {
      wordCount++;
    }
  }
  counter.textContent = wordCount;
};
