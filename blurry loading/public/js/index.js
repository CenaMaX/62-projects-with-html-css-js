const background = document.querySelector('.background');
const loadingTxt = document.querySelector('.loading');

let load = 0;

const interval = setInterval(blurringBg, 40);

function blurringBg() {
  load++;

  if (load > 99) {
    clearInterval(interval);
  }

  loadingTxt.innerText = `${load}%`;
  loadingTxt.style.opacity = scale(load, 0, 100, 1, 0);
  background.style.filter = `blur(${scale(load, 0, 100, 40, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
