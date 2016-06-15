
$(document).ready(function () {


  var $lucky = $("#lucky");
  var $luckyButton = $lucky.find("button");

  $("#uptime button").on("click", function(){
    // $.ajax({
    //   url: "/flights",
    //   type: "GET",
    //   dataType: "JSON"
    // }).done(function (data) {
    //   console.log("it worked");
    //   result = _.where( data, {origin:"SYD"} )
    //   debugger;
    // data.where
    //   $("#uptime p").prepend(  );
    //   $("#uptime p").prepend( "<br />")
    // })

    var result = app.flights.where({ origin: "SYD" });
    console.log( result );
  })

});
