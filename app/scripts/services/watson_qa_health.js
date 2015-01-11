'use strict';

/**
 * @ngdoc service
 * @name watsonApp.watsonQaHealth
 * @description
 * # watsonQaHealth
 * Factory in the watsonApp.
 */
angular.module('watsonApp')
  .factory('watsonQaHealth', function ($http) {
      return {
              watsonQaHealth: function($scope){
                  return  $http({
                              method: 'POST', 
                              url: '/watson/classes/ask_health.php',
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
