const background = document.getElementById('background');
const password = document.getElementById('password');

password.addEventListener('input', (e) => {
  const input = e.target.value;
  const length = input.length;
  const value = 10 - length * 2;
  background.style.filter = `blur(${value}px)`;
});
