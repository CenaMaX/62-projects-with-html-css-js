function Mytime() {
  let Hour = document.getElementById('hour');
  let Min = document.getElementById('min');
  let Sec = document.getElementById('sec');

  let H = new Date().getHours();
  let M = new Date().getMinutes();
  let S = new Date().getSeconds();

  Hour.innerHTML = H;
  Min.innerHTML = M;
  Sec.innerHTML = S;
}

setInterval(Mytime, 1000);
