const inputFile = document.getElementById('inptFile');
const img = document.getElementById('img');

inputFile.addEventListener('change', (e) => {
  const reader = new FileReader();

  reader.addEventListener('load', () => {
    if (localStorage.getItem('data-img')) {
      localStorage.removeItem('data-img')
    }
    localStorage.setItem('data-img', reader.result);
  });

  reader.readAsDataURL(e.target.files[0]);
  window.location.reload()
});

window.addEventListener('DOMContentLoaded', () => {
  const dataInLS = localStorage.getItem('data-img');
  if (dataInLS) {
    img.setAttribute('src', dataInLS);
  }
});
