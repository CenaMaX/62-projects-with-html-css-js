const audio = document.getElementById('audio');
const canvas = document.getElementById('audio-visual');

window.onload = () => {
  let ctx = canvas.getContext('2d');

  let audioCtx = new AudioContext();
  let analyser = audioCtx.createAnalyser();
  analyser.fftSize = 512;
  let source = audioCtx.createMediaElementSource(audio);
  source.connect(analyser);
  source.connect(audioCtx.destination);

  let data = new Uint8Array(analyser.frequencyBinCount);

  // LOAD
  loopingFunction();

  function loopingFunction() {
    requestAnimationFrame(loopingFunction);
    analyser.getByteFrequencyData(data);
    Draw(data);
  }

  // Draw Canvas
  function Draw(data) {
    data = [...data];
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let space = canvas.width / data.length;

    data.forEach((value, idx) => {
      ctx.beginPath();
      ctx.strokeStyle = 'blue';
      ctx.moveTo(space * idx, canvas.height);
      ctx.lineTo(space * idx, canvas.height - value);
      ctx.stroke();
    });

    audio.onplay = () => {
      audioCtx.resume();
    };
  }
};
