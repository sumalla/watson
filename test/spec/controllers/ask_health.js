'use strict';

describe('Controller: AskHealthCtrl', function () {

  // load the controller's module
  beforeEach(module('watsonApp'));

  var AskHealthCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AskHealthCtrl = $controller('AskHealthCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
