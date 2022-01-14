for (let i = 0; i <= 20; i++) {
  const hearts = document.createElement('div');
  hearts.classList.add('heart');
  document.body.appendChild(hearts);
}

const animateHearts = () => {
  anime({
    targets: '.heart',
    translateX: function () {
      return anime.random(-800, 800);
    },
    translateY: function () {
      return anime.random(-500, 500);
    },
    rotate: -45,
    scale: function () {
      return anime.random(1, 3);
    },
    easing: 'easeInOutBack',
    duration: 5000,
    delay: anime.stagger(10),
    complete: animateHearts,
  });
};

// LOAD
animateHearts();
