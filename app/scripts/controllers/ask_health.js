'use strict';

/**
 * @ngdoc function
 * @name watsonApp.controller:AskHealthCtrl
 * @description
 * # AskHealthCtrl
 * Controller of the watsonApp
 */
angular.module('watsonApp')
  .controller('AskHealthCtrl', function ($scope, watsonQaHealth) {
  	  	$scope.showhideanswers = true;

	  	$scope.askquestion = function askquestion(){
  	  		
  	  		$scope.showhideanswers = true;

	  		watsonQaHealth.watsonQaHealth($scope)
	  		.success(function(data, status, headers, config){
	  			console.log(data);
	  			$scope.returndata = data[0];
	  			$scope.showhideanswers = false;

			})
			.error(function(data, status, headers, config) {
				console.log(config);
			}); 
	  	}
  });
