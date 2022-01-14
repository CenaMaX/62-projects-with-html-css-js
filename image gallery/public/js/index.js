const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    RemoveClass();
    panel.classList.add('active');
  });
});

function RemoveClass() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}
