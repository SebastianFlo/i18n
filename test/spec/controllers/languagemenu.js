'use strict';

describe('Controller: LanguagemenuCtrl', function () {

  // load the controller's module
  beforeEach(module('translateApp'));

  var LanguagemenuCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LanguagemenuCtrl = $controller('LanguagemenuCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LanguagemenuCtrl.awesomeThings.length).toBe(3);
  });
});
