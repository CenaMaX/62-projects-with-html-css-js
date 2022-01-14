const container = document.querySelector('.container');
const API = 'https://api.nasa.gov/planetary/apod?api_key=';
const API_KEY = 'i8aBhxqAqlTTZUDnkTwa8rQcMTnlNFfXktVSjeJm';
const param = '&count=5';
let nasaArray = [];

// Remove Context Menu (RightClick)
document.body.addEventListener('contextmenu', (e) => {
  e.preventDefault();
});

// Set Attributes Function
const setAttributes = (element, attributes) => {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
};

const generateInDom = () => {
  nasaArray.forEach((nasa) => {
    const box = document.createElement('div');
    box.classList.add('box');

    const title = document.createElement('h1');
    title.classList.add('title');
    title.innerText = nasa.title;

    box.appendChild(title);

    const image = document.createElement('img');
    image.classList.add('img');
    setAttributes(image, {
      title: nasa.title,
      src: nasa.url ? nasa.url : 'http://placehold.it/500x500',
      loading: 'lazy',
    });

    box.appendChild(image);

    const infoBox = document.createElement('div');
    infoBox.classList.add('info-box');

    const copyright = document.createElement('h6');
    copyright.classList.add('copyright');
    copyright.innerText = `Copyright: ${
      nasa.copyright ? nasa.copyright : 'Unknown'
    }`;

    infoBox.appendChild(copyright);

    const date = document.createElement('h6');
    date.classList.add('date');
    date.innerText = `Date: ${nasa.date}`;

    infoBox.appendChild(date);

    const explanation = document.createElement('p');
    explanation.classList.add('explanation');
    explanation.innerText = nasa.explanation;

    box.addEventListener('click', () => {
      box.replaceChild(explanation, image);
    });

    box.addEventListener('contextmenu', () => {
      box.replaceChild(image, explanation);
    });

    box.appendChild(infoBox);
    container.appendChild(box);
  });
};

// Fetch Data From API
const getNasaPlanetary = async () => {
  try {
    const res = await fetch(`${API}${API_KEY}${param}`);
    nasaArray = await res.json();
    generateInDom();
  } catch (error) {
    console.log(error);
  }
};

// LOAD More On Scroll
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 5) {
    getNasaPlanetary();
  }
});

// LOAD
getNasaPlanetary();
