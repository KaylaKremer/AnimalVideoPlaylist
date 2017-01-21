//Playlist constructor
function Playlist() {
  this.videos = [];
  this.videoIndex = 0;
}

//Append videos to playlist
Playlist.prototype.playlistAddVideo = function(video) {
  this.videos.push(video);
};

//Get current playing video and add selection highlight in playlist
Playlist.prototype.playlistSelect = function() {
  var currentVideo = this.videos[this.videoIndex];
  currentVideo.addSelect();
};

//Get current video and remove selection highlight in playlist
Playlist.prototype.playlistRemoveSelect = function() {
  var currentVideo = this.videos[this.videoIndex];
  currentVideo.removeSelect();
};

//Select next video in playlist
Playlist.prototype.playlistNext = function() {
  this.playlistRemoveSelect();
  this.videoIndex++;
  if (this.videoIndex === this.videos.length) {
      this.videoIndex = 0;
  }
  this.playlistSelect();
};

//Select previous video in playlist
Playlist.prototype.playlistPrevious = function () {
  this.playlistRemoveSelect();
  this.videoIndex--;
  if (this.videoIndex < 0) {
   this.videoIndex = this.videos.length-1;
  }
  this.playlistSelect();
};

//Write playlist HTML to element
Playlist.prototype.playlistHTML = function(list) {
  list.innerHTML = "";
  for (var i = 0; i < this.videos.length; i++){
   list.innerHTML += this.videos[i].toHTML(); 
  }
};

//Get current video's link and set as video source
Playlist.prototype.playlistSource =function(source) {
  var currentVideo = this.videos[this.videoIndex];
  source.src = currentVideo.getVideoSource();
};

//Get default video's link and set as video source
Playlist.prototype.playlistDefaultSource = function(source) {
  var defaultVideo = this.videos[0];
  source.src = defaultVideo.getVideoSource();
};