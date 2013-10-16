requirejs.config({
  baseUrl: 'scripts',
  paths: {
    'Movie' : 'app/Movie',
    'Director': 'app/Director',
  },
  shim: {
        'jquery' : {
            exports:'JQuery'
        }
    }
});

requirejs(['Movie','Director', 'jquery'], function (Movie,Director,$) {
	console.log('*** Test Topic 5 ***');
	
	var titanic = new Movie();
	titanic.set('title','Titanic');
		
	var peter = new Director('Peter');
	peter.set('quotes', ['All you need is a good script.','Find new actors and Boom!']);

	titanic.set('director', peter);
	titanic.get('director').speak();


	
	
	
});
