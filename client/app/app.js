(function() {
  'use strict';

  angular.module("Common", ["ui.router", "ngMaterial", "highcharts-ng"]);
  angular.module("nginlog.Controllers", ["Common"]);

  var app = angular.module("nginlog", [
    "nginlog.Controllers"
  ]);

  window.app = app;

  app.config(function($mdThemingProvider) {
          $mdThemingProvider.theme('default')
        .primaryPalette('indigo')
        .dark();
  });
})();
