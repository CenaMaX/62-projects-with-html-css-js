const box = document.querySelector('.box');
const connectionStatus = document.querySelector('.status');
const message = document.querySelector('.msg');

window.addEventListener('load', () => {
  isOnline(navigator.onLine);

  window.addEventListener('online', () => {
    isOnline(true);
  });

  window.addEventListener('offline', () => {
    isOnline(false);
  });
});

function isOnline(online) {
  if (online) {
    box.style.backgroundColor = '#198754';
    connectionStatus.innerText = 'Online';
    message.innerText = 'You are now Online';
  } else {
    box.style.backgroundColor = '#DC3545';
    connectionStatus.innerText = 'Offline';
    message.innerText = 'You are now Offline';
  }
}
