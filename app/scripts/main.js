(function() {
  'use strict';

  angular.module('boldtech')
    .controller('MainController', function($http, $q, $scope) {
      var vm = this;
      var defer = $q.defer();

      $http({
          method: 'GET',
          url: 'https://maps.googleapis.com/maps/api/geocode/json?address=orlando'
        })
        .then(function(response) {
          vm.location = response.data.results;
          console.log(response.data.results);
          defer.resolve;
        });

    });
})();
