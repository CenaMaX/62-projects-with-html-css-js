const container = document.querySelector('.container');
const form = document.querySelector('.searchForm');
const searchInput = document.querySelector('.searchInput');
const URL = 'http://www.omdbapi.com/?apikey=';
const API_KEY = 'your API Key';
const PARAMS = '&s=';
let moviesArray = [];

const generateInDom = () => {
    container.innerHTML = '';
    if (moviesArray.Search) {
      moviesArray.Search.forEach((movie) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.title = movie.Title;
    
        const title = document.createElement('h3');
        title.classList.add('title');
        title.textContent = movie.Title;
        card.appendChild(title);
    
        const img = document.createElement('img');
        img.classList.add('img');
        img.title = movie.Title;
        img.src = movie.Poster == 'N/A' ? 'http://placehold.it/320x400' : movie.Poster;
        img.setAttribute('loading', 'lazy');
        card.appendChild(img);
    
        const info = document.createElement('div');
        info.classList.add('info');
    
        const year = document.createElement('span');
        year.classList.add('year');
        year.textContent = movie.Year;
        info.appendChild(year);
    
        const type = document.createElement('span');
        type.classList.add('type');
        type.textContent = movie.Type;
        info.appendChild(type);
    
        card.appendChild(info);
        container.appendChild(card);
      });
    } else {
      const notFound = document.createElement('h2');
      notFound.classList.add('notFound');
      notFound.textContent = 'Sorry, I didnt found anything !';
      container.appendChild(notFound);
    }
};

// Fetch Data From API
const fetchMovies = async (searchTerms) => {
  try {
    const res = await fetch(`${URL}${API_KEY}${PARAMS}${searchTerms}`);
    moviesArray = await res.json();
    generateInDom();

  } catch (error) {
    console.log(error);
  }
};

// LOAD with Default Value
fetchMovies('spider man');

// Event Listener For Search And LOAD Value
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let value = searchInput.value;
  fetchMovies(value);
  searchInput.value = '';
});
