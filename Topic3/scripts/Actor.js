function Actor(){
  this.description = {};

	this.get = function(attr){
		return this.description[attr];
	};

	this.set = function(attr,value){
		this.description[attr] = value;
	};

}
