var app = app || {};

app.Flight = Backbone.Model.extend({
  urlRoot: "/flights",

  defaults: {
    flight_number: "",
    origin: "Sydney",
    destination: "",
    date: "",
    plane: "747 Boeing"
  },

  initialize: function () {
    console.log( "A new flight was created" );
  }
});
