const videoElement = document.getElementById('video');
const btnElement = document.getElementById('btn');

const SelecetMediaStream = async () => {
  try {
    const mediaDevice = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaDevice;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log(error);
  }
};

btnElement.addEventListener('click', async () => {
  btnElement.disabled = true;
  await videoElement.requestPictureInPicture();
  btnElement.disabled = false;
});

// --------Load-------------
SelecetMediaStream();
