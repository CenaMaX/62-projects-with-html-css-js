const btn = document.getElementById('btn');
const container = document.querySelector('.container');
const types = ['primary', 'dark', 'warning', 'success', 'error'];
const messages = ['Hello From USA', 'Hello From Canada', 'Hello From France', 'Hello From Spain'];

// Create Toast Container
const toastContainer = document.createElement('div');
toastContainer.classList.add('toast-container');

// Event Listener
btn.addEventListener('click', showNotification);

function showNotification() {
  const toast = document.createElement('div');
  toast.classList.add('toast');
  toast.classList.add(getRandomTypes());
  toast.innerText = getRandomMessages();

  toastContainer.appendChild(toast);
  container.appendChild(toastContainer);

  setTimeout(() => {
    toast.style.opacity = 0;
  }, 3000);
}

// Helper Functions
function getRandomTypes() {
  return types[Math.floor(Math.random() * types.length)];
}

function getRandomMessages() {
  return messages[Math.floor(Math.random() * messages.length)];
}
