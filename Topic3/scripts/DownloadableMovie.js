//This module is for using Movie as a Module
function DownloadableMovie(){

  this.download = function(){
  	console.log('Downloading '+this.get('title')+' ...');
  }
}

DownloadableMovie.prototype = Movie;
