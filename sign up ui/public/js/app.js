const sign_up_form = document.querySelector('.sign-up-form');
const usernameInput = document.getElementById('inp-username');
const emailInput = document.getElementById('inp-email');
const passwordInput = document.getElementById('inp-password');

function validateForm() {
  if (usernameInput.value === '' || usernameInput.value === ' ') {
    alert('Username is Empty');
    return false;
  } else if (emailInput.value === '' || emailInput.value === ' ') {
    alert('Email is Empty');
    return false;
  } else if (
    passwordInput.value === '' ||
    passwordInput.value <= 3 ||
    passwordInput.value === ' '
  ) {
    alert('Password Must bigger than 3 characters !');
    return false;
  }
  return true;
}

sign_up_form.addEventListener('submit', () => {
  validateForm();
});
