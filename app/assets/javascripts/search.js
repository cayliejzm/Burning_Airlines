
$(document).ready(function () {
  var $lucky = $("#lucky");
  var $luckyButton = $lucky.find("button");

  $("#uptime button").on("click", function(){
    $.ajax({
      url: "/flights",
      type: "GET",
      dataType: "JSON"
    }).done(function (data) {
      console.log("it worked");
      debugger;

      $("#uptime p").prepend( data[0].origin );
      $("#uptime p").prepend( "<br />")
    })
  })

});
