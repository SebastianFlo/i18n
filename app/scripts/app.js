'use strict';

/**
 * @ngdoc overview
 * @name translateApp
 * @description
 * # translateApp
 *
 * Main module of the application.
 */
angular
  .module('translateApp', [
    'ngAnimate',
    'ngRoute',
    'pascalprecht.translate'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function ($translateProvider) {
    // translate config code goes here
    
    
    //static translations
    
    $translateProvider.translations('en', {
      'APP_TITLE' : 'Angular Translate App',
      'INTRODUCTION_TEXT' : 'Trying out how this thing works'
    });
    
    $translateProvider.translations('da', {
      'APP_TITLE' : 'Angular Oversætte Appen',
      'INTRODUCTION_TEXT' : 'Trying out how this thing works'
    });
    
    $translateProvider.preferredLanguage('da');
  });
