'use strict';

describe('Controller: AskTravelCtrl', function () {

  // load the controller's module
  beforeEach(module('watsonApp'));

  var AskTravelCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AskTravelCtrl = $controller('AskTravelCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
