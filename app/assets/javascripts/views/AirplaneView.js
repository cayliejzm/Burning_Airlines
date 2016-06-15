var app = app || {};

app.AirplaneView = Backbone.View.extend({
  tagName: 'li',
  render: function () {

    var column = this.model.get("column");

    console.log( this );
    console.log( this.model );

    debugger;

    this.$el.text( column );
    this.$el.prependTo( "#airplanes" );

  }

});
