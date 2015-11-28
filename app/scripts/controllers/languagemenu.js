'use strict';

/**
 * @ngdoc function
 * @name translateApp.controller:LanguagemenuCtrl
 * @description
 * # LanguagemenuCtrl
 * Controller of the translateApp
 */
angular.module('translateApp')
  .controller('LanguagemenuCtrl', function ($scope, $translate) {
    $scope.switchLanguage = function (languageKey) {
      $translate.use(languageKey);
    };
  });
