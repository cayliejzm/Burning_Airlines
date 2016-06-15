var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
<<<<<<< HEAD
    '': 'index',
    // 'flights/:id': 'showFlight'

=======
    '': 'index'
>>>>>>> 18612432e197bba527dd7d8e532282841622b2dc
  },

  index: function () {
    console.log( "Empty client-side URL, index method ran" );
    var appView = new app.AppView();
    appView.render();
    
  }

});
