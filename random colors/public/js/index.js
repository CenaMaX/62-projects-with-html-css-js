const btn = document.querySelector('.btn');
const container = document.querySelector('.container');
const HEX = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

function createColorBox() {
  container.innerHTML = '';
  for (let i = 0; i < 200; i++) {
    const colorBox = document.createElement('div');
    colorBox.classList.add('color-box');
    colorBox.style.backgroundColor = generateColor();

    const colorCode = document.createElement('span');
    colorCode.classList.add('color-code');
    colorCode.innerText = generateColor();

    colorBox.appendChild(colorCode);
    container.appendChild(colorBox);
  }
}

function generateColor() {
  let hexCode = '#';

  for (let i = 0; i < 6; i++) {
    hexCode += HEX[randomColor()];
  }
  return hexCode;
}

// Helper Func
function randomColor() {
  return Math.floor(Math.random() * HEX.length);
}

// Event Listener
btn.addEventListener('click', () => {
  createColorBox();
});

// LOAD
createColorBox();
