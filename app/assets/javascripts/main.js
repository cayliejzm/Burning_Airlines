app.flights = new app.Flights();

$(document).ready(function () {

  app.router = new app.AppRouter();

  Backbone.history.start();

  app.flights.fetch();

  window.setInterval(function () {
    app.flights.fetch();
  }, 5000);

});
