const video = document.getElementById('video');
const playPauseBtn = document.getElementById('play-pause');
const progressBar = document.getElementById('progress-filled');
const volumeControl = document.getElementById('volume');
const speedControl = document.getElementById('speed');
const rewindBtn = document.getElementById('rewind');
const forwardBtn = document.getElementById('forward');

playPauseBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPauseBtn.textContent = '❚ ❚'; // Pause icon
    } else {
        video.pause();
        playPauseBtn.textContent = '►'; // Play icon
    }
});

video.addEventListener('timeupdate', () => {
    const progress = (video.currentTime / video.duration) * 100;
    progressBar.style.width = `${progress}%`;
});

volumeControl.addEventListener('input', () => {
    video.volume = volumeControl.value;
});

// Playback speed control functionality
speedControl.addEventListener('input', () => {
    video.playbackRate = speedControl.value;
});

rewindBtn.addEventListener('click', () => {
    video.currentTime -= 10;
});

forwardBtn.addEventListener('click', () => {
    video.currentTime += 25;
});

progressBar.parentElement.addEventListener('click', (e) => {
    const progress = (e.offsetX / progressBar.parentElement.offsetWidth) * video.duration;
    video.currentTime = progress;
});
