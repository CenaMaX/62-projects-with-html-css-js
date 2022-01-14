const timeEl = document.getElementById('time');
const nameEl = document.getElementById('name');
const focusEl = document.getElementById('focusToday');
const msgEl = document.getElementById('msg');

function showTime() {
  let time = new Date(),
    hour = time.getHours(),
    minute = time.getMinutes(),
    second = time.getSeconds();
  let pmam = hour >= 12 ? 'PM' : 'AM';
  let zeroMinute = zeroFormat(minute),
    zeroSecond = zeroFormat(second),
    formatHour = hour % 12 || 12;
  return (timeEl.innerHTML = `${formatHour}<span>:</span>${zeroMinute}<span>:</span>${zeroSecond} <span>${pmam}</span>`);
}
setInterval(showTime, 1000);

function zeroFormat(n) {
  return n < 10 ? '0' + n : n;
}

function setBackground() {
  let time = new Date(),
    hour = time.getHours();
  if (hour >= 5 && hour < 12) {
    document.body.style.backgroundImage = 'url("images/morning.jpg")';
    msgEl.style.color = '#ffdd59';
    msgEl.textContent = 'Good Morning';
  } else if (hour >= 12 && hour < 18) {
    document.body.style.backgroundImage = 'url("images/afternoon.jpg")';
    msgEl.style.color = '#26de81';
    msgEl.textContent = 'Good Afternoon';
  } else {
    document.body.style.backgroundImage = 'url("images/evening.jpg")';
    msgEl.style.color = '#48dbfb';
    msgEl.textContent = 'Good Evening';
  }
}

function getName() {
  if (localStorage.getItem('name') === null) {
    nameEl.textContent = '[Enter Name]';
  } else {
    nameEl.textContent = localStorage.getItem('name');
  }
}

function setName(e) {
  if (e.type === 'keypress') {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      nameEl.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focusEl.textContent = '[Enter Focus]';
  } else {
    focusEl.textContent = localStorage.getItem('focus');
  }
}

function setFocus(e) {
  if (e.type === 'keypress') {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focusEl.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

// Event Listeners
nameEl.addEventListener('keypress', setName);
nameEl.addEventListener('blur', setName);
focusEl.addEventListener('keypress', setFocus);
focusEl.addEventListener('blur', setFocus);

// Call Funcs to run
showTime();
setBackground();
getName();
getFocus();
setName();
setFocus();
