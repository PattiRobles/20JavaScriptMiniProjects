//grab elements from DOM
const video = document.getElementById('video')
const play = document.getElementById('play')
const stop = document.getElementById('stop')
const progress = document.getElementById('progress')
const timestamp = document.getElementById('timestamp')

//functions
//play and pause
function toggleVideoStatus() {
return true;
}

//change between play and pause icons
function updatePlayIcon() {
  return true;
}

//update progress in timestamp
function updateProgress() {
  return true;
}

//stop video
function stopVideo() {
  return true;
}

//video time progression
function setVideoProgress() {
  return true;
}

//event listeners
video.addEventListener('click', toggleVideoStatus)
video.addEventListener('pause', updatePlayIcon)
video.addEventListener('play', updatePlayIcon)
video.addEventListener('timeupdate', updateProgress)
play.addEventListener('click', toggleVideoStatus)
stop.addEventListener('click', stopVideo)
progress.addEventListener('change', setVideoProgress)