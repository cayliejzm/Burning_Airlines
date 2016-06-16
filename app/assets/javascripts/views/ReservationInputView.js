var app = app || {};

app.ReservationInputView = Backbone.View.extend({
  events: {
    'click .seat1': 'selectSeat',
    // 'keydown input': 'checkForEnter',
    'click button': 'selectSeat'
  },

  showFlight: function (event) {
    console.log("Can you see me?");
    // debugger;
  },
  //
  // $(".pixel").on("click", function () {
  //     var $currentPixel = $( this );
  //     if(turn === 1) {
  //       user="X"
  //       $currentPixel.css("background-image", url[0]);
  //       $currentPixel.css("background-size", "cover");
  //       console.log("X is moving??");
  //       var idNum = $($currentPixel).attr('data-i')
  //       var idName = $($currentPixel).attr('data-j')


  selectSeat: function () {

    $('#seatBoard ul li').on("click", function(t){
      $(this).css({"background-color": "red"})
      console.log("Kane")
      debugger;
    })

    console.log( "A seat selected" );
    debugger;
    var rowNum = this.$el.find('.data-row').val();
    var columnChar = this.$el.find('.data-column').val();



    // var result = app.flights.where({ origin: originKeyword, destination: destinationKeyword  });

    // for(var i=0; i<result.length; i +=1){
    //   var $result = $("<p>")
    //   // var flight_number = result[i].get("flight_number");
    //   // var origin = result[i].get("origin");
    //   // var destination = result[i].get("destination");
    //   // var date = result[i].get("date");
    //   // var plane = result[i].get("plane");
    //   // var flight_id = result[i].get("id")
    //   // $result.text( flight_number + " / " + origin + " / " + destination + " / " + date + " / " + plane );
    //   // var linkedResult = $("<a>").html($result)
    //   // // linkedResult.attr("class", "result")
    //   // linkedResult.attr("href", "/flights/"+flight_id)
    //   linkedResult.prependTo( "#selectedSeat" );
    // }
  },

  el: "#seatBoard",

  render: function () {
    console.log("Something will show up");
    var $flightSeatInputViewTemplate = $("#flightSeatInputViewTemplate").html();
    this.$el.html($flightSeatInputViewTemplate);
  }

});
