const text = document.querySelector('.text');
const TXT = 'I Love Programming ....';
const SPEED = 110;
let i = 0;

const typedText = () => {
  if (i < TXT.length) {
    text.textContent += TXT.charAt(i);
    i++;
    setTimeout(typedText, SPEED);
  }
};

//* Call Func
typedText();
