var testRequire = require('../test-require'),
    request = require('supertest'),
    expect = require('chai').expect;

describe('string-util', function () {

  var stringUtil = testRequire('util/string-util');

  it('generates valid UUIDs', function () {
    // Version 4 UUIDs have the form xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx where
    // x is any hexadecimal digit and y is one of 8, 9, A, or B
    expect(stringUtil.generateUuid())
      .to.match(/[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/);
  });

});