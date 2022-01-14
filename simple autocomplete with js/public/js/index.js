const searchInput = document.getElementById('search-inpt');

const colors = ['red', 'blue', 'yellow', 'green', 'pink', 'white', 'black'];

window.onload = () => {
  searchInput.focus();
};

searchInput.addEventListener('input', (e) => {
  let colorsArray = [];

  if (e.target.value) {
    colorsArray = colors.filter((color) =>
      color.toLowerCase().includes(e.target.value)
    );
    colorsArray = colorsArray.map((color) => `<li>${color}</li>`);
  }

  showColorsArray(colorsArray);
});

function showColorsArray(array) {
  const colors = array.length ? array.join('') : '';
  document.querySelector('ul').innerHTML = colors;
}
