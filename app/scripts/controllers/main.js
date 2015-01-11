'use strict';

/**
 * @ngdoc function
 * @name watsonApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the watsonApp
 */
angular.module('watsonApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
