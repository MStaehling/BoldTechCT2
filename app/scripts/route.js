(function() {
  'use strict';

  angular
    .module('boldtech', ['ngRoute', 'restangular'])
    .config(function($routeProvider) {
      $routeProvider
        .when('/home', {
          templateUrl: '/views/main.html'
            controller: 'MainController',
          //  controllerAs: 'main'
        })
        .when('/', {
          redirectTo: '/home'
        });
    });
})();
