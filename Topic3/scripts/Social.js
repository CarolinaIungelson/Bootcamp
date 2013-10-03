var Social = {

  share: function(friendName){
    console.log( 'Shared '+ this.get('title')+' with '+friendName );
  },

  like: function(){
    console.log( 'Like '+ this.get('title') +'!');
  }

};
