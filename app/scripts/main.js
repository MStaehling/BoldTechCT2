(function() {
  'use strict';

  angular.module('boldtech')
    .controller('MainController', function($http, $scope) {
      var vm = this;

      vm.test = function() {
        console.log('hi');
      };

      $scope.dog = {
        pop: "no"
      };
      vm.g = {
        name: "roger",
        age: "34"
      };

      // $http({
      //   method: 'GET',
      //   url: 'https://maps.googleapis.com/maps/api/geocode/json?address=orlando'})
      //   .then(function(response) {
      //     vm.location = response.data;
      //     console.log(response.data);
      //   });

      $.get('https://maps.googleapis.com/maps/api/geocode/json?address=orlando')
        .then(function(response) {
          vm.location = response.data;
          console.log(response.data);
        });
    });
})();
