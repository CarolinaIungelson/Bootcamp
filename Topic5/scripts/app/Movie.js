define (['Director'],function(){

  var Movie = function(){
    this.attributes = {};

    this.get = function (attr){
      return this.attributes[attr];
    };

    this.set = function (attr, value){
      this.attributes[attr] = value;
    };

    this.play = function(){
      console.log('Playing'+this.attributes.title);
    };

    this.stop = function(){
      console.log('Stopped'+this.attributes.title);
    };

  };
  return Movie;
});