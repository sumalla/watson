'use strict';

/**
 * @ngdoc function
 * @name watsonApp.controller:AskTravelCtrl
 * @description
 * # AskTravelCtrl
 * Controller of the watsonApp
 */
angular.module('watsonApp')
  .controller('AskTravelCtrl', function ($scope,watsonQaTravel) {

  	  	$scope.showhideanswers = true;

	  	$scope.askquestion = function askquestion(){
  	  		
  	  		$scope.showhideanswers = true;

	  		watsonQaTravel.watsonQaTravel($scope)
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
