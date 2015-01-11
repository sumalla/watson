'use strict';

describe('Service: watsonQaTravel', function () {

  // load the service's module
  beforeEach(module('watsonApp'));

  // instantiate service
  var watsonQaTravel;
  beforeEach(inject(function (_watsonQaTravel_) {
    watsonQaTravel = _watsonQaTravel_;
  }));

  it('should do something', function () {
    expect(!!watsonQaTravel).toBe(true);
  });

});
