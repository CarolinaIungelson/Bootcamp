$(function(){

    //Model
		var Movie = Backbone.Model.extend({

			defaults: function() {
        return {    
          id: this.get('id'),          
          title: "empty movie...",
          genre: "drama",
          order: Movies.nextOrder()
        };
      },
    });

    //Collection
    var MovieList = Backbone.Collection.extend({
      model: Movie,

      localStorage: new Backbone.LocalStorage("movies-backbone"),

      nextOrder: function() {
        if (!this.length) return 1;
          return this.last().get('order') + 1;
      },

      comparator: 'order'

    });

    var Movies = new MovieList;

    //View of one item
    var MovieView = Backbone.View.extend({

      tagName:  "li",
      
      template: _.template($('#item-template').html()),
      
      events: {
        "dblclick .view"  : "edit",
        "click a.destroy" : "clear",
        "keypress .edit"  : "updateOnEnter",
        "blur .edit"      : "close"
      },

      initialize: function() {
        this.listenTo(this.model, 'change', this.render);
        this.listenTo(this.model, 'destroy', this.remove);
      },

      render: function() {
        this.$el.html(this.template(this.model.toJSON()));        
        this.input = this.$('.edit');
        return this;
      },

      edit: function() {
        this.$el.addClass("editing");
        this.input.focus();
      },

      close: function() {
        var value = this.input.val();
        if (!value) {
          this.clear();
        } else {
          this.model.save({title: value});
          this.$el.removeClass("editing");
        }
      },

      updateOnEnter: function(e) {
        if (e.keyCode == 13) this.close();
      },

      clear: function() {
       this.model.destroy();
      }

    });

    //AppView
    var AppView = Backbone.View.extend({
      el: $("#movie-app"),

      events: {
        "keypress #new-movie":  "createOnEnter",
        "click #clear-completed": "clearCompleted"
      },

      initialize: function() {
        this.input = this.$("#new-movie");

        this.listenTo(Movies, 'add', this.addOne);
        this.listenTo(Movies, 'reset', this.addAll);
        this.listenTo(Movies, 'all', this.render);

        this.main = $('#main');
        this.moviedetails = $('#moviedetails');        
        
        this.addAll();
        this.render();
      },

      render: function() {     
        if (Movies.length) {
          this.main.show();          
        } else {
          this.main.hide();          
        }
      },

      addOne: function(movie) {            
        var view = new MovieView({model: movie});
        this.$("#movie-list").append(view.render().el);
      },

      addAll: function() {
        Movies.each(this.addOne, this);
      },

      createOnEnter: function(e) {
        if (e.keyCode != 13) return;
        if (!this.input.val()) return;

        Movies.create({title: this.input.val()});
        this.input.val('');
      },

       clearCompleted: function() {
        _.invoke(Movies.done(), 'destroy');
        return false;
      },

    });
    
  
    
    //View of one movie detail
    var DetailsView = Backbone.View.extend({
      el: $("#details"),     
      
      template: _.template($('#details-template').html()),      
 
      initialize: function() {
        this.render();
      },

      render: function() {            
        this.$el.html(this.template(this.model.toJSON()));     
      },  

    });


    
    //Router
    var MovieRouter = Backbone.Router.extend({    
      routes: {
          "details/:id" : "showDetails",
          "" : "defaultRoute"          
      },
      detailsView : null,
      appView : null,

      initialize: function () {        
        Movies.fetch();
      },

      showDetails: function(id){  
        $(".movie-app").hide();
        var movie = Movies.get(id);       
        this.detailsView = new DetailsView({model:movie});
        this.detailsView.$el.show();
      },

      defaultRoute: function(){ 
       $(".movie-app").hide();
       if (this.appView == null ){
          this.appView = new AppView;
       }
       this.appView.$el.show();
      },

    });

    var Router = new MovieRouter();
    Backbone.history.start();
});