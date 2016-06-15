var app = app || {};

app.AirplaneView = Backbone.View.extend({
  tagName: 'li',
  render: function () {

    var name = this.model.get("name");

    this.$el.text( name );
    this.$el.prependTo( "#airplanes" );

  }

});
