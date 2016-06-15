var app = || {};

app.Airplane = Backbone.Model.extend({
  urlRoot: "/airplanes",

  defaults: {
    name: "747 Boeing",
    row: "",
    column: ""
  },

  initialize: function () {
    console.log( "A new airplane was created" );
  }
});
