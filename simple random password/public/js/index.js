const btn = document.querySelector('.btn');
const result = document.querySelector('.result');
const chars =
  'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890!@#$%^&*()-=_+?><';

btn.addEventListener('click', generatePassword);
result.addEventListener('click', copyToClipboard);

function generatePassword() {
  let password = '';
  for (let i = 0; i <= 15; i++) {
    password += randomChars();
  }
  return result.innerText = password;
}

function randomChars() {
  return chars[Math.floor(Math.random() * chars.length)];
}

async function copyToClipboard() {
  let password = result.innerHTML;
  await navigator.clipboard.writeText(password)
  alert('Password Copied !');
}
