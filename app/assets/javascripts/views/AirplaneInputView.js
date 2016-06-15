var app = app || {};

app.AirplaneInputView = Backbone.View.extend({
  events: {
    'click button': 'createAirplane',
    'keydown textarea': 'checkForEnter'
  },

  checkForEnter: function ( event ) {

    app.ENTER_KEY = 13;
    if ( event.which === app.ENTER_KEY ) {
      event.preventDefault();
      this.createAirplane();
    }
  },

  createAirplane: function () {
    console.log( "A new airplane should be created" );
    var airplane = new app.Airplane();

    var planeName = this.$el.find('#planeName').val();
    var planeRow = this.$el.find('#planeRow').val();
    var planeColumn = this.$el.find('#planeColumn').val();
    airplane.set({
      name: planeName,
      row: planeRow,
      column: planeColumn
    });
    airplane.save();
    app.airplanes.add( airplane );
    this.$el.find("#planeName").val('').focus();
    this.$el.find('#planeRow').val('').focus();
    this.$el.find('#planeColumn').val('').focus();
  },

  el: "#planeNameForm",
  // "#planeRowForm",
  // "#planeColumnForm"

  render: function () {

    var airplaneInputViewTemplate = $("#airplaneInputViewTemplate").html();
    this.$el.html(airplaneInputViewTemplate);
  }

});


// <script id="airplaneInputViewTemplate" type="html/template">
// <input type="text" name="planeNameForm" placeholder="Put plane name here"></input>
// <hr/>
// <input type="text" name="planeRowForm" placeholder="Put number of rows here"></input>
// <hr/>
// <input type="text" name="planeColumnForm" placeholder="Put column letter here"></input>
// <hr/>
// <button type="submit" value="Submit">Submit</button>
// <hr/>
// </script>
