const tabs = document.querySelectorAll('.tab');
const images = document.querySelectorAll('.img');

tabs.forEach((tab, idx) => {
  tab.addEventListener('click', () => {
    removeImages();
    removeActiveTabs();

    tab.classList.add('active');
    images[idx].classList.add('show');
  });
});

function removeImages() {
  images.forEach((img) => img.classList.remove('show'));
}

function removeActiveTabs() {
  tabs.forEach((tab) => tab.classList.remove('active'));
}
