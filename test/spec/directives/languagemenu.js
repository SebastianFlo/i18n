'use strict';

describe('Directive: languageMenu', function () {

  // load the directive's module
  beforeEach(module('translateApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<language-menu></language-menu>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the languageMenu directive');
  }));
});
