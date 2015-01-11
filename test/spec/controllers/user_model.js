'use strict';

describe('Controller: UserModelCtrl', function () {

  // load the controller's module
  beforeEach(module('watsonApp'));

  var UserModelCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserModelCtrl = $controller('UserModelCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
