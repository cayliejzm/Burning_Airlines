var app = app || {};

app.FlightView = Backbone.View.extend({
  el: "#main",

  render: function () {
    console.log( "App view should be rendered now" );
    var appViewTemplate = $("#appViewTemplate").html();
      this.$el.html( appViewTemplate );

    var flightInputView = new app.FlightInputView();
    flightInputView.render();

    var searchInputView = new app.SearchInputView();
    searchInputView.render();

    var reservationInputView = new app.ReservationInputView();
    reservationInputView.render();
  }
  
  tagName: 'li',
  render: function () {
// debugger;
    var flight_number = this.model.get("flight_number");
    var origin = this.model.get("origin");
    var destination = this.model.get("destination");
    var date = this.model.get("date");
    var plane = this.model.get("plane");

    this.$el.text( flight_number + " / " + origin + " / " + destination + " / " + date + " / " + plane );
    this.$el.prependTo( "#flights" );
  }

});
