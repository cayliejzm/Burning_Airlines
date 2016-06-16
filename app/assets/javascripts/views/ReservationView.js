var app = app || {};

app.ReservationView = Backbone.View.extend({
  // tagName: 'li',
  render: function () {
// debugger;
  app.reservations.where()

// What do I need here? I need the flight_id and the seatID, that the reservation model has. Yes, it has everything. Wow.
  // selectedSeat.addClass("reserved")

    //
    // this.$el.text( flight_number + " / " + origin + " / " + destination + " / " + date + " / " + plane );
    // this.$el.prependTo( "#flights" );
  }

});
