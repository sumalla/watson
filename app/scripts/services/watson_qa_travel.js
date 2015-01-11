'use strict';

/**
 * @ngdoc service
 * @name watsonApp.watsonQaTravel
 * @description
 * # watsonQaTravel
 * Factory in the watsonApp.
 */
angular.module('watsonApp')
  .factory('watsonQaTravel', function ($http) {
      return {
              watsonQaTravel: function($scope){
                  return  $http({
                              method: 'POST', 
                              url: '/watson/classes/ask_travel.php',
                      data: {
                          "question": {
                              "evidenceRequest":{"items":5},
                              "questionText":$scope.askedquestion
                          }
                        },
                          }); 
              }

          };
  });
