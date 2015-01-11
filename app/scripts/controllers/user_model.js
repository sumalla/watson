'use strict';

/**
 * @ngdoc function
 * @name watsonApp.controller:UserModelCtrl
 * @description
 * # UserModelCtrl
 * Controller of the watsonApp
 */
angular.module('watsonApp')
  .controller('UserModelCtrl', function ($scope, watsonUserModel, $sce) {
      $scope.charthide  = true;
      $scope.usermodelinput = '';
      $scope.getusermodel = function getusermodel(){
      $scope.chartreturn = '';

      watsonUserModel.watsonUserModel($scope)
        .success(function(data, status, headers, config){
          console.log(data);
          $scope.chartreturn = $sce.trustAsHtml(data);
          $scope.charthide  = false;
  		})
  		.error(function(data, status, headers, config) {
  			console.log(config);
  		}); 
  	}
  });
