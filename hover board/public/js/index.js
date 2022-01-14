const container = document.querySelector('.container');
const squareLength = 413;
const colors = ['red', 'blue', 'yellow', 'green', 'orange', 'pink'];

for (let i = 0; i < squareLength; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseout', () => removeColor(square));

  container.appendChild(square);
}

const setColor = (square) => {
  const color = randomColor();
  square.style.backgroundColor = color;
  square.style.boxShadow = `1px 1px 2px ${color}, 1px 1px 6px ${color}`;
};

const removeColor = (square) => {
  square.style.backgroundColor = 'black';
  square.style.boxShadow = '1px 1px 2px black';
};

const randomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};
