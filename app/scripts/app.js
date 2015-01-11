'use strict';

/**
 * @ngdoc overview
 * @name watsonApp
 * @description
 * # watsonApp
 *
 * Main module of the application.
 */
angular
  .module('watsonApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/ask_health', {
        templateUrl: 'views/ask_health.html',
        controller: 'AskHealthCtrl'
      })
      .when('/ask_travel', {
        templateUrl: 'views/ask_travel.html',
        controller: 'AskTravelCtrl'
      })
      .when('/user_model', {
        templateUrl: 'views/user_model.html',
        controller: 'UserModelCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
