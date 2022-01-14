const btns = document.querySelectorAll('.item');
const boxes = document.querySelectorAll('.box');

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', () => {
    btns.forEach((btn) => {
      btn.classList.remove('active');
    });
    btns[i].classList.add('active');
    let li_attr = btns[i].getAttribute('data-show');
    boxes.forEach((box) => {
      box.style.display = 'none';
    });

    if (li_attr == 'Profile') {
      document.querySelector('.' + li_attr).style.display = 'block';
    } else if (li_attr == 'Notification') {
      document.querySelector('.' + li_attr).style.display = 'block';
    }
  });
}
