var app = app || {};

app.SingleFlightView = Backbone.View.extend({
  el: "#main",

  render: function (flight) {
    console.log( "App view should be rendered now" );
    var flightTemplate = $("#flightTemplate").html();
      this.$el.html( flightTemplate );
      this.$el.find("#flight_number").text(flight.flight_number);
  }

});
