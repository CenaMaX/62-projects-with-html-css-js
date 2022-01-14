const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
  // Default Value
  counter.innerText = '0';

  function updateCounter() {
    const targetValue = +counter.getAttribute('data-target');
    const value = +counter.innerText;

    const incerement = targetValue / 40;

    if (value < targetValue) {
      counter.innerText = `${Math.ceil(value + incerement)}`;
      setTimeout(updateCounter, 50);
    } else {
      counter.innerText = targetValue;
    }
  }

  // Call Func
  updateCounter();
});
