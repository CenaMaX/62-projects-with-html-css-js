const slider = document.getElementById('radius-slider');
const box = document.getElementById('box');

slider.addEventListener('input', (e) => {
  box.style.setProperty('--radius', e.target.value + '%');
});
