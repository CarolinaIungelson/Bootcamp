function Movie(){
  this.attributes = {};
  this.myObserver = null;
  this.actors = [];

  this.get = function(attr){
    return this.attributes[attr];
  };

  this.set = function(attr,value){
    this.attributes[attr] = value;
  };

  this.play = function(){
   var anEvent = new CustomEvent('Playing', { 'detail': this.attributes['title'] });
   document.dispatchEvent(anEvent);
  };

  this.stop = function(){
   var anEvent = new CustomEvent('Stopped', { 'detail': this.attributes['title'] });
   document.dispatchEvent(anEvent);
  };

  this.addObserver = function(observer){
    this.myObserver = observer;
  };

  //Adding actors
  this.addActor = function(actor) {
    this.actors.push(actor);
  };

  this.getActorIndex = function(name) {
      var i, index, actorsLength;
      actorsLength = this.actors.length;
      for ( i=0; i < actorsLength; i++ ) {
        if (this.actors[i].get('name') == name){
          index = i;
          break;
        }
      }
      return index;
  };
}


// Movie as a Module
/*var Movie = ( function () {
  var attributes = {},
      myObserver = null;    
  
  return {
    get: function( attr) {
      return attributes[attr];
    },

    set: function( attr, value ) {
      attributes[attr] = value;
    },

    play: function() {
      //movieObserver.Notify('Playing ',attributes['title']);
      var anEvent = new CustomEvent('Playing', { 'detail': attributes['title'] });
      document.dispatchEvent(anEvent);
    },

    stop: function() {
      //movieObserver.Notify('Stopped ',attributes['title']);
      var anEvent = new CustomEvent('Stopped', { 'detail': attributes['title'] });
      document.dispatchEvent(anEvent);
    },

    addObserver: function(observer) {
      myObserver = observer;
    }
   
  };
})();
*/