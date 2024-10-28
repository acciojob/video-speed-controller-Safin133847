const video = document.getElementById('video');
const playButton = document.getElementById('playButton');
const rewindButton = document.getElementById('rewind');
const skipButton = document.getElementById('skip');
const progress = document.getElementById('progress');
const volumeControl = document.getElementById('volume');
const playbackSpeedControl = document.getElementById('playbackSpeed');
const speedBar = document.querySelector('.speed-bar');

// Toggle play/pause
playButton.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playButton.textContent = '❚ ❚';
  } else {
    video.pause();
    playButton.textContent = '►'; 
  }
});

rewindButton.addEventListener('click', () => {
  video.currentTime -= 10;
});

skipButton.addEventListener('click', () => {
  video.currentTime += 25;
});

video.addEventListener('timeupdate', () => {
  const percent = (video.currentTime / video.duration) * 100;
  progress.value = percent;
});

progress.addEventListener('input', () => {
  const newTime = (progress.value * video.duration) / 100;
  video.currentTime = newTime;
});

volumeControl.addEventListener('input', () => {
  video.volume = volumeControl.value;
});

playbackSpeedControl.addEventListener('input', () => {
  video.playbackRate = playbackSpeedControl.value;
  speedBar.textContent = `${playbackSpeedControl.value}×`;
});