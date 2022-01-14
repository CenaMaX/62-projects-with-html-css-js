const boxContainer = document.querySelector('.quote-box');
const quoteText = document.getElementById('text');
const quoteAuthor = document.getElementById('author');
const newQuote = document.getElementById('new-quote');
const twitterQuote = document.getElementById('twitter');

// ----------- Urls ------------
const APIURL =
  'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';

// ------------ Fetch Data ----------
const GetQuote = async () => {
  try {
    const response = await fetch(APIURL);
    const data = await response.json();

    if (data.quoteAuthor === '') {
      quoteAuthor.innerText = 'Unknown';
    } else {
      quoteAuthor.innerText = data.quoteAuthor;
    }
    if (data.quoteText.length > 100) {
      boxContainer.classList.add('long-quote');
    } else {
      boxContainer.classList.remove('long-quote');
    }
    quoteText.innerText = data.quoteText;
  } catch (error) {}
};

// ------------- Tweet Quote ------------
const TweetQuote = () => {
  const quote = quoteText.innerText;
  const author = quoteAuthor.innerText;
  const URL = `https://twitter.com/intent/tweet?text=${quote} - ${author} -`;
  window.open(URL, '_blank');
};

// ------------- Event Listerners -----------
newQuote.addEventListener('click', GetQuote);
twitterQuote.addEventListener('click', TweetQuote);

// ----------- Load -----------
GetQuote();
