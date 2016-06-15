var app = app || {};

app.FlightInputView = Backbone.View.extend({
  events: {
    'click button': 'createFlight',
    'keydown textarea': 'checkForEnter'
  },

  checkForEnter: function ( event ) {

    app.ENTER_KEY = 13;
    if ( event.which === app.ENTER_KEY ) {
      event.preventDefault();
      this.createFlight();
    }
  },

  createFlight: function () {
    console.log( "A new flight should be created" );
    var flight = new app.Flight();

    var flightNumber = this.$el.find('.flightNumber').val();
    var flightOrigin = this.$el.find('.flightOrigin').val();
    var flightDestination = this.$el.find('.flightDestination').val();
    var flightDate = this.$el.find('.flightDate').val();
    var flightPlane = this.$el.find('.flightPlane').val();


    flight.set({
      number: flightNumber,
      origin: flightOrigin,
      destination: flightDestination,
      date: flightDate,
      plane: flightPlane
    });
    flight.save();
    app.flights.add( flight );
    this.$el.find('.flightNumber').val('').focus();
    this.$el.find('.flightOrigin').val('').focus();
    this.$el.find('.flightDestination').val('').focus();
    this.$el.find('.flightDate').val('').focus();
    this.$el.find('.flightPlane').val('').focus();
  },

  el: "#flightNameForm",


  render: function () {

    var flightInputViewTemplate = $("#flightInputViewTemplate").html();
    this.$el.html(flightInputViewTemplate);
  }

});
