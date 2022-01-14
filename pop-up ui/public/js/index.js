const popup = document.querySelector('.popup');
const popup_body = document.querySelector('.popup_body');

popup.addEventListener('click', () => {
  popup_body.classList.toggle('show');
});
