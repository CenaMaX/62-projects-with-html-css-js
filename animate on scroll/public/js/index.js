const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

function checkBoxes() {
  const trigger_Bottom = (window.innerHeight / 5) * 4;
  boxes.forEach((box) => {
    const box_Top = box.getBoundingClientRect().top;

    if (box_Top < trigger_Bottom) {
      box.classList.add('active');
    } else {
      box.classList.remove('active');
    }
  });
}
