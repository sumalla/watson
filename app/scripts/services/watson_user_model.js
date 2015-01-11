'use strict';

/**
 * @ngdoc service
 * @name watsonApp.watsonUserModel
 * @description
 * # watsonUserModel
 * Factory in the watsonApp.
 */
angular.module('watsonApp')
  .factory('watsonUserModel', function ($http) {
      return {
          watsonUserModel: function($scope){
              return  $http({
                          method: 'POST', 
                          url: '/watson/classes/usermodel.php',
                          data: {
                              "twitter_id": $scope.usermodelinput
                            },
                      }); 
          }

      };
  });
