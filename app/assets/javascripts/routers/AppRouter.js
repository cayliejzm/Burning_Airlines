var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {

    '': 'index',
    '/flights/:id': 'showPlane'

  },

  index: function () {
    console.log( "Empty client-side URL, index method ran" );
    var appView = new app.AppView();
    appView.render();
  },

  showPlane: function(id){
    // console.log("It's working");
    // var flight = new app.Flight({
    //   id:id
    // });
    flight.fetch().done(function(){
      console.log("Seatboard Rendered");
      var appView = new app.AppView();
      appView.render();
    })
    //
    // console.log( "Empty client-side URL, index method ran" );
    // var appView = new app.AppView();
    // appView.render();
  }

});
