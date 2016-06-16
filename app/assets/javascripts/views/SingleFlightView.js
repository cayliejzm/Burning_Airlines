var app = app || {};

app.currentFlightId = null;

app.SingleFlightView = Backbone.View.extend({
  events: {
    'click .seat': 'selectSeat',
    // 'keydown input': 'checkForEnter',
    // 'click button': 'selectSeat',
    // 'click #seatBoard ul li': 'test'
    'click #save': 'createReservation'
  },

  createReservation: function (reservation) {
    var reservation = new app.Reservation();
    var selectedSeat = this.$el.find(".selected")
    var row = selectedSeat.attr('data-row')
    var column = selectedSeat.attr('data-column')
    var seatID = row + column;
    var user_id = $("#user_id").text();
    var flight_id = app.currentFlightId
// debugger;
    // var reserveUserId=
    reservation.set({
      user_id: user_id,
      flight_id: flight_id,
      seatID: seatID
    }),
    reservation.save();
    selectedSeat.addClass("reserved")

    app.reservations.add( reservation );
    console.log("Save will work");
  },

  selectSeat: function (e) {
    var seat = $(e.currentTarget)
    var userName = $("#user_name")
     // $(this).css({"background-color": "red"})
     $(".selected").removeClass("selected")
     seat.addClass("selected")
    //  seat.toggleClass("selected")
     seat.html(userName)

// debugger;
     var seatRow = seat.attr('data-row')
     var seatColumn = seat.attr('data-column')
     var seatNumber = seatRow + '' + seatColumn

     var text = $("<li>").text(seatNumber)
     $("#selectedSeat").html(text)

//     $('#seatBoard ul li').on("click", function(t){
//       var userName = $("#user_name")
//       // $(this).css({"background-color": "red"})
//       $(this).toggleClass("selected")
//       $(this).html(userName)
//
// // debugger;
//       var currentSeat = $(this)
//       var seatRow = currentSeat.attr('data-row')
//       var seatColumn = currentSeat.attr('data-column')
//       var seatNumber = seatRow + '' + seatColumn
//
//       var text = $("<li>").text(seatNumber)
//       $("#selectedSeat").html(text)
// // Maybe, I can user .template to make this seat info paragraph
//
//     })
    console.log( "A seat selected" );
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
