define (['jquery'],function($){

  var Director = function(theName){
    this.name = theName;
    this.quotes = [];

    this.get = function (attr){
      if (attr == 'name'){
        return this.name;
      }
      if (attr == 'quotes'){
        return this.quotes;
      }
      return null;
    };

    this.set = function (attr, value){
      if (attr == 'quotes'){
        this.quotes = value;
      }else{
        this.name = value;
      }
    };

    this.speak = function(){
      console.log(this.name+' says:...');
      $('#quotes').append(this.name+' says:...<br/>');
      var quotesLength = this.quotes.length;
      for (i=0;i<quotesLength;i++){
        console.log('   ...'+this.quotes[i]);
        $('#quotes').append(this.quotes[i]+'<br/>');
      }
    };

  };
  return Director;
});