'use strict';

describe('Service: watsonQaHealth', function () {

  // load the service's module
  beforeEach(module('watsonApp'));

  // instantiate service
  var watsonQaHealth;
  beforeEach(inject(function (_watsonQaHealth_) {
    watsonQaHealth = _watsonQaHealth_;
  }));

  it('should do something', function () {
    expect(!!watsonQaHealth).toBe(true);
  });

});
