music = 'creativeminds.mp3';

const music_play = document.getElementById('music-play');
const music_range = document.getElementById('music-range');
const icon = document.querySelector('.fa');

let duration = 0;
let currentTime = 0;
let isPlaying = false;
let player = new Audio();

const playSong = () => {
  player.src = music;
  music_play.addEventListener('click', () => {
    if (!isPlaying) {
      player.play();
      isPlaying = true;
      duration = player.duration;
      music_range.max = duration;
      icon.classList.toggle('active');
    } else {
      player.pause();
      isPlaying = false;
    }
    player.addEventListener('timeupdate', () => {
      music_range.value = player.currentTime;
    });
    music_range.addEventListener('change', () => {
      player.currentTime = music_range.value;
    });
    player.addEventListener('ended', () => {
      player.currentTime = 0;
      player.pause();
      isPlaying = false;
      music_range.value = 0;
    });
  });
};

window.onload = () => {
  playSong();
};
