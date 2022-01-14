const key = document.querySelector('.key');
const key_Code = document.querySelector('.keycode');
const code = document.querySelector('.code');

alert('enter any key on your keyboard')

document.addEventListener('keydown', (e) => {
  key.innerText = e.key;
  key_Code.innerText = e.which || e.keyCode;
  code.innerText = e.code;
});
