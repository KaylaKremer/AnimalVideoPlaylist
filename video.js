//Video constructor
function Video(source, title, duration) {
  this.source = source;  
  this.title = title;
  this.duration = duration;
}

//Add selection highlight for video playing
Video.prototype.addSelect = function() {
  this.isPlaying = true;
};

//Remove selection highlight for video not playing
Video.prototype.removeSelect = function() {
  this.isPlaying = false;
};

//Generate HTML for playlist
Video.prototype.toHTML = function() {
  var htmlString = '<li';
  if (this.isPlaying) {
    htmlString += ' class="current"';
  }
  htmlString += '>';
  htmlString += this.title;
  htmlString += '<span class="duration">';
  htmlString += this.duration;
  htmlString += '</span></li>';
  return htmlString;
};

//Retrieve video link
Video.prototype.getVideoSource = function () {
  return this.source;  
};