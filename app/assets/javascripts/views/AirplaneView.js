var app = app || {};

app.AirplaneView = Backbone.View.extend({
  tagName: 'li',
  render: function () {

    var name = this.model.get("name");
    var row = this.model.get("row");
    var column = this.model.get("column");

    this.$el.text( name + " / " + row + " / " + column );
    this.$el.prependTo( "#airplanes" );

  }

});
