const split_left = document.querySelector('.split.left');
const split_right = document.querySelector('.split.right');
const container = document.querySelector('.container');

split_left.addEventListener('mouseenter', () => {
  container.classList.add('hover-left');
});

split_left.addEventListener('mouseleave', () => {
  container.classList.remove('hover-left');
});

split_right.addEventListener('mouseenter', () => {
  container.classList.add('hover-right');
});

split_right.addEventListener('mouseleave', () => {
  container.classList.remove('hover-right');
});
