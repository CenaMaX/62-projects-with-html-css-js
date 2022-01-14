const collapses = document.querySelectorAll('.collapse'),
  collapse_toggle = document.querySelectorAll('.fas');

collapses.forEach((collapse) => {
  collapse.addEventListener('click', () => {
    collapse.classList.toggle('active');

    collapse_toggle.forEach((toggle) => {
      toggle.classList.toggle('fa-angle-up');
    });
  });
});
