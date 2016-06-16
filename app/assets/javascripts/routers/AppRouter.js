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

    flight.fetch().done(function(flight, reservation){
      var singleFlightView = new app.SingleFlightView();
      singleFlightView.render(flight, reservation, id);
      // var reservationInputView = new app.ReservationInputView();
      // reservationInputView.render(reservation)
    })

  }

});
