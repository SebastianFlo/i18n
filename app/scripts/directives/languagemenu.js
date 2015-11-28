'use strict';

/**
 * @ngdoc directive
 * @name translateApp.directive:languageMenu
 * @description
 * # languageMenu
 */
angular.module('translateApp')
  .directive('languageMenu', function () {
    return {
      templateUrl: '/scripts/directives/languagemenu.html',
      restrict: 'E',
      controller: 'LanguagemenuCtrl'
    };
  });
