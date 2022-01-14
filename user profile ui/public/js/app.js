const setting_btn = document.querySelector('.setting-btn');
const setting_box = document.querySelector('.setting-box');

setting_btn.addEventListener('click', () => {
  setting_box.classList.toggle('active');
});
