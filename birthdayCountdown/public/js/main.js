const countdown = document.getElementById('countdown');

var birthday = new Date('2022-09-10 ,23:59:59').getTime(); // Set your birthday

const CountDown = () => {
  let now = new Date().getTime();
  let remainingTime = birthday - now;

  let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  countdown.innerHTML = `${days} D , ${hours} H : ${minutes} M : ${seconds} S`;

  if (remainingTime < 0) {
    clearInterval(CountDown);
    countdown.innerHTML = 'Happy Birthday john!'; // Change this name with yours
  }
};

// call this function every 1s or 1000ms
setInterval(CountDown, 1000);
