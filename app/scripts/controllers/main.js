'use strict';

/**
 * @ngdoc function
 * @name translateApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the translateApp
 */
angular.module('translateApp')

  .controller('MainCtrl', ['$scope', '$interval', '$translate', function ($scope, $interval, $translate) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.angularVersionData = {
    version: angular.version.full
    };
    
    $scope.countData = {
      count : 0
    };
  
    
    $translate('ANGULAR_VERSION', $scope.angularVersionData).then(function (angularVersion) {
      $scope.angularVersion = angularVersion;
  });
    
    var startCounting = function() {
      
      var go = $interval(function () {
        if ($scope.countData.count < 10) {
          $scope.countData.count = $scope.countData.count + 1; 
        } else {
          stopCounting();
        }
      }, 1000);
     
     var stopCounting = function() {
      $interval.cancel(go);
      
      $scope.count = 0;
      
      startCounting();
     };
    };
     
     
    startCounting();
  }]);
