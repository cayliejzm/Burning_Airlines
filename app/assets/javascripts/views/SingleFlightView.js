var app = app || {};

app.SingleFlightView = Backbone.View.extend({

  events: {
    'click .seat': 'selectSeat',
    // 'keydown input': 'checkForEnter',
    // 'click button': 'selectSeat',
    // 'click #seatBoard ul li': 'test'
  },


  selectSeat: function () {

    $('#seatBoard ul li').on("click", function(t){
      $(this).css({"background-color": "red"})
      debugger;
      // console.log("Kane")
    })
    console.log( "A seat selected" );
  },


  el: "#main",

  render: function (flight) {
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
