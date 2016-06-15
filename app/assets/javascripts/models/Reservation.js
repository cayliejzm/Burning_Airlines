var app = app || {};

app.Reservation = Backbone.Model.extend({
  urlRoot: "/reservations",

  defaults: {
    user_id: "",
    flight_id: ""
  },

  initialize: function () {
    console.log( "A new reservation was created" );
  }
});
