app.airplanes = new app.Airplanes();

$(document).ready(function () {

  app.router = new app.AppRouter();

  Backbone.history.start();

  app.airplanes.fetch();

  window.setInterval(function () {
    app.airplanes.fetch();
  }, 1000);

});
