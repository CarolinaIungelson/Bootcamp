App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
  	model : function() {
  		localStorage.setItem('moviesember', JSON.stringify(['movie1', 'movie2', 'movie3']));
  		if (localStorage.getItem('moviesember')) {
  			return JSON.parse(localStorage.getItem('moviesember'));
  		}
  	}
});
