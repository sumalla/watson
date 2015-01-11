'use strict';

describe('Service: watsonUserModel', function () {

  // load the service's module
  beforeEach(module('watsonApp'));

  // instantiate service
  var watsonUserModel;
  beforeEach(inject(function (_watsonUserModel_) {
    watsonUserModel = _watsonUserModel_;
  }));

  it('should do something', function () {
    expect(!!watsonUserModel).toBe(true);
  });

});
