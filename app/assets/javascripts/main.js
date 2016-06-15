app.flights = new app.Flights();
app.reservations = new app.Reservations();

$(document).ready(function () {

  app.router = new app.AppRouter();

  Backbone.history.start();

  app.flights.fetch();
  app.reservations.fetch();

  window.setInterval(function () {
    app.flights.fetch();
  }, 7000);

  window.setInterval(function () {
    app.reservations.fetch();
  }, 7000);

});
