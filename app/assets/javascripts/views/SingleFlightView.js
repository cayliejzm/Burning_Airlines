var app = app || {};

app.currentFlightId = null;

app.SingleFlightView = Backbone.View.extend({
  events: {
    'click .seat': 'selectSeat',
    'click #save': 'createReservation'
  },

  createReservation: function (reservation) {
    var reservation = new app.Reservation();
    console.log("Save will work");
  },

  selectSeat: function (e) {
    var seat = $(e.currentTarget)
  },

  el: "#main",

  render: function (flight, reservation, id) {
    app.currentFlightId = id;
    console.log( "App view should be rendered now" );
    var flightTemplate = $("#flightTemplate").html();
      this.$el.html( flightTemplate );
      this.$el.find("#flight_number").text(flight.flight_number);
      this.$el.find("#origin").text(flight.origin);
      this.$el.find("#destination").text(flight.destination);
      this.$el.find("#date").text(flight.date);
      this.$el.find("#plane").text(flight.plane);
  }
});
