'use strict';

/**
 * @ngdoc function
 * @name watsonApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the watsonApp
 */
angular.module('watsonApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
