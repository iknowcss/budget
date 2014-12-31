var testRequire = require('../test-require'),
    request = require('supertest'),
    expect = require('chai').expect;

describe('home controller', function () {

  var app, sut;

  before(function () {
    app = require('express')();
    sut = testRequire('controllers/home');
    sut(app);
  });

  it('', function () {});

});