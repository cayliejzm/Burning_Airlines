var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'flights/:id': 'showFlight'

  },

  index: function () {
    console.log( "Empty client-side URL, index method ran" );
    var appView = new app.AppView();
    // debugger;
    appView.render();
  },

  showFlight: function(id){
    console.log("It's working");
    var flight = new app.Flight({
      id:id
    });

  }

});
