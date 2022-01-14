const searchInput = document.getElementById('search-inpt');
const userlist = document.querySelector('.userlist-container');

const URL = 'https://randomuser.me/api?results=50';

let usersArray = [];

function filterUser(searchTerm) {
  let filterArray = usersArray.results.filter((user) => {
    return (
      user.name.first.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.name.last.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  putInDom(filterArray);
}

function putInDom(array) {
  userlist.innerHTML = '';
  array.forEach((user) => {
    const userInfo = `
        <div class="user-information">
        <div class="user-head">
        <img src="${user.picture.thumbnail}" alt="${user.first} ${user.last}" class="user-img">
        <h2 class="user-name">${user.name.first} ${user.name.last}</h2>
        </div>
        <span class="user-location">${user.location.country}</span>
        </div>
        `;
    userlist.innerHTML += userInfo;
  });
}

// Fetch Data from api
const fetchData = async () => {
  const res = await fetch(URL);
  usersArray = await res.json();
  putInDom(usersArray.results);
};

// Event Listener for get value of input with keyup event
searchInput.addEventListener('keyup', (e) => filterUser(e.target.value));

// LOAD
fetchData();
