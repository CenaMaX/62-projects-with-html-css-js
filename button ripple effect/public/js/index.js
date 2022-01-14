const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
  let x = e.clientX;
  let y = e.clientY;

  let btnTop = e.target.offsetTop;
  let btnLeft = e.target.offsetLeft;

  let xIn = x - btnLeft;
  let yIn = y - btnTop;

  const circle = document.createElement('span');
  circle.classList.add('circle');
  circle.style.top = `${yIn}px`;
  circle.style.left = `${xIn}px`;

  btn.appendChild(circle);

  setTimeout(() => circle.remove(), 300);
});
