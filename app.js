//Playlist object
var playlist = new Playlist();

//Videos
var video1 = new Video("videos/lion.mp4", "Lion", "00:16");
var video2 = new Video("videos/bear.mp4", "Bear", "00:27");
var video3 = new Video("videos/squirrel.mp4", "Squirrel", "00:22");


//Videos added to playlist
playlist.playlistAddVideo(video1);
playlist.playlistAddVideo(video2);
playlist.playlistAddVideo(video3);


//Playlist & video elements
var playlistElement = document.getElementById("playlist");
var videoElement = document.getElementById("playlistVideo");
var videoSourceElement = document.getElementById("videoSource");

//Button controls
var playPauseButton = document.getElementById("playPause");
var replayButton = document.getElementById("replay");
var muteButton = document.getElementById("mute");
var nextButton = document.getElementById("next");
var previousButton = document.getElementById("previous");

//Volume and seek sliders
var volumeSlider = document.getElementById("volume");
var seekSlider = document.getElementById("seek");

//Button icons
var playIcon = "images/play.png";
var pauseIcon = "images/pause.png";
var nextIcon = "images/next.png";
var previousIcon = "images/previous.png";
var muteIcon = "images/mute.png";
var unmuteIcon = "images/unmute.png";

//Button img
var playPauseImg = document.getElementById("playPauseImg");
var nextImg = document.getElementById("nextImg");
var previousImg = document.getElementById("previousImg");
var muteImg = document.getElementById("muteImg");
var replayImg = document.getElementById("replayImg");

//Play and pause button 
playPauseButton.addEventListener("click", function() {
  if (videoElement.paused) {
    videoElement.play();
    playPauseImg.src = pauseIcon;
  } else {
    videoElement.pause();
    playPauseImg.src = playIcon;
  }
});

videoElement.addEventListener("ended", function(){
  if (videoElement.ended){
    playPauseImg.src = playIcon;
  }
});

//Replay button
replayButton.addEventListener("click", function() {
  videoElement.pause();
  videoElement.currentTime = 0;
  videoElement.play();
  playPauseImg.src = pauseIcon;
  seekSlider.value = 0;
});

//Mute button
muteButton.addEventListener("click", function () {
  if (videoElement.muted){
    videoElement.muted = false;
    muteImg.src = muteIcon;
    volumeSlider.value = videoElement.volume;
  } else {
    videoElement.muted = true;
    muteImg.src = unmuteIcon;
    volumeSlider.value = 0;
  }
});

//Next button 
nextButton.addEventListener("click", function() {
  playlist.playlistNext();
  playlist.playlistHTML(playlistElement);
  playlist.playlistSource(videoSourceElement);
  videoElement.load();
  playPauseImg.src = playIcon;
});

//Previous button 
previousButton.addEventListener("click", function() {
  playlist.playlistPrevious();
  playlist.playlistHTML(playlistElement);
  playlist.playlistSource(videoSourceElement);
  videoElement.load();
  playPauseImg.src = playIcon;
});

//Volume slider
volumeSlider.addEventListener("input", function() {
  videoElement.volume = volumeSlider.value;
});

//Seek slider
videoElement.addEventListener("durationchange", function() {
  seekSlider.max = videoElement.duration;
});

videoElement.addEventListener("timeupdate", function() {
  seekSlider.value = videoElement.currentTime;
});

seekSlider.addEventListener("input", function() {
  videoElement.currentTime = seekSlider.value;
  videoElement.play();
  playPauseImg.src = pauseIcon;
});

//Load default video
playlist.playlistDefaultSource(videoSourceElement);
playlist.playlistSelect();
playlist.playlistHTML(playlistElement);
videoElement.load();





