const chucknorris = document.querySelector('.chucknorris');
const twitter_share = document.querySelector('.tw-share');
const random = document.querySelector('.random-chucknorris');
const API_URL = 'https://api.chucknorris.io/jokes/random';
const TWEET_URL = 'https://twitter.com/intent/tweet?text=';

const implementInDom = (value) => {
  if (value === '') chucknorris.innerText = 'Unknown!';
  if (value.length >= 90) chucknorris.style.fontSize = '18px';
  chucknorris.innerText = value;
};

const getChuckNorris = async () => {
  try {
    const response = await fetch(API_URL);
    const { value } = await response.json();
    implementInDom(value);
  } catch (error) {
    console.log(error);
  }
};

const tweetChuckNorris = () => {
  let chuckNorris = chucknorris.innerText;
  const URL = `${TWEET_URL}${chuckNorris}`;
  window.open(URL, '_blank');
};

// Event Listeners
twitter_share.addEventListener('click', tweetChuckNorris);
random.addEventListener('click', getChuckNorris);

// LOAD
getChuckNorris();
