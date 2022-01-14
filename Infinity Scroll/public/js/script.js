const imageContainer = document.querySelector('.image-container');
const loader = document.getElementById('loader');

let ready = false;
let totalPhotos = 0;
let imageLoaded = 0;
let photosArray = [];

const count = 10;
const API_KEY = 'Your API_KEY (get your api key from unsplash website)';
const APIURL = `https://api.unsplash.com/photos/random/?client_id=${API_KEY}&count=${count}`;

// Check Images Loaded
const ImageLoaded = () => {
    imageLoaded++;
    if (imageLoaded === totalPhotos) {
        ready = true;
        loader.hidden = true;
    }
}

// Helper Function
const setAttributes = (element,attributes) => {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

// Add to DOM
const DisplayPhotos = () => {
    imageLoaded = 0;
    totalPhotos = photosArray.length;

    photosArray.forEach(photo => {
        const item = document.createElement('a');
        setAttributes(item, {
            href : photo.links.html,
            target : '_blank',
        });

        const img = document.createElement('img');
        setAttributes(img, {
            src : photo.urls.regular,
            title : photo.alt_description,
            alt : photo.alt_description,
            loading : 'lazy',
        });
        // event listener - check images loaded 
        img.addEventListener('load', ImageLoaded);

        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

// fetch data from API
const getPhotos = async () => {
   try {
    const response = await fetch(APIURL);
    photosArray = await response.json();
    DisplayPhotos();
    
   } catch (error) {
       console.log(error);
   }
}

// Scrolling for load more photos 
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
        ready = false;
        getPhotos();
    }
});

// ----- LOAD -----
getPhotos();