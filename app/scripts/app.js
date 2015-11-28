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
    'pascalprecht.translate',
    'tmh.dynamicLocale'// angular-dynamic-locale
  ])
  .constant('LOCALES', {
    'locales': {
        'da_dk': 'Danish',
        'en_us': 'English'
    },
    'preferredLocale': 'en_US'
  })
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
    
    
    //add errors
    $translateProvider.useMissingTranslationHandlerLog();
    
    // file translations
    $translateProvider.useStaticFilesLoader({
        prefix: 'resources/lang-',// path to translations files
        suffix: '.json'// suffix, currently- extension of the translations
    });
    
    //static translations
    
    // $translateProvider.translations('en', {
    //   'APP_TITLE' : 'Angular Translate App',
    //   'INTRODUCTION_TEXT' : 'Trying out how this thing works'
    // });
    
    // $translateProvider.translations('da', {
    //   'APP_TITLE' : 'Angular Oversætte Appen',
    //   'INTRODUCTION_TEXT' : 'Trying out how this thing works'
    // });
    
    $translateProvider.preferredLanguage('en');
  })
  .config(function (tmhDynamicLocaleProvider) {
    tmhDynamicLocaleProvider.localeLocationPattern('bower_components/angular-i18n/angular-locale_{{locale}}.js');
});
