const trackContainers = document.querySelectorAll('.track-item');
let currentAudio = null;

trackContainers.forEach((trackContainer) => {
  const playIcon = trackContainer.querySelector('.bx-play');
  const audio = trackContainer.querySelector('audio');

  playIcon.addEventListener('click', () => {
    if (currentAudio && currentAudio !== audio) {
      currentAudio.currentTime = 0; 
      currentAudio.pause();
      currentAudio.parentElement.querySelector('.bx-pause').classList.replace('bx-pause', 'bx-play');
    }

    if (audio.paused) {
      audio.play();
      playIcon.classList.replace('bx-play', 'bx-pause');
      currentAudio = audio;
    } else {
      audio.pause();
      playIcon.classList.replace('bx-pause', 'bx-play');
      currentAudio = null;
    }
  });
});

