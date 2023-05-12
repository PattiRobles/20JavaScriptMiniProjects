//DOM elements
const video = document.getElementById('video')
const play = document.getElementById('play')
const stop = document.getElementById('stop')
const progress = document.getElementById('progress')
const timestamp = document.getElementById('timestamp')

//FUNCTIONS
//play and pause
function toggleVideoStatus() {
if(video.paused){
  video.play();
} else {
  video.pause()
}
}

//change between play and pause icons
function updatePlayIcon() {
  if(video.paused) {
    play.innerHTML = '<i class="fa-solid fa-play fa-xl"></i>'
  } else {
    play.innerHTML = '<i class="fa-solid fa-pause fa-xl"></i>'
  }
  return true;
}

//update progress in timestamp
function updateProgress() {
  return true;
}

//stop video
function stopVideo() {
  //there is no stop property in the video api
  video.currentTime = 0; //returns to beginning
  video.pause(); //stops at beginning
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