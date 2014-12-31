var testRequire = require('../test-require'),
    request = require('supertest'),
    expect = require('chai').expect;

describe('budget controller', function () {

  var app, sut;

  before(function () {
    app = require('express')();
    sut = testRequire('controllers/budget');
    sut(app);
  });

  it('returns a list of categories from the database', function (done) {
    request(app)
      .get('/budget/categories')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect(function (res) {
        
      })
      .end(done);
  });

});