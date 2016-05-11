(function() {
  'use strict';

  angular.module('boldtech')
    .controller('MainController', function($http, $scope) {

      $http({
          method: 'GET',
          url: 'https://maps.googleapis.com/maps/api/geocode/json?address=orlando'
        })
        .then(function(response) {
          $scope.location = response.data.results;
          console.log(response.data.results);
        });

    });
})();
