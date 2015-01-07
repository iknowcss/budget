var mongoose = require('mongoose'),
    Q = require('q');

var config = require('../../config/config');

mongoose.connect(config.db);
var db = mongoose.connection,
    dbDefer = Q.defer();
db.on('error', function () {
  dbDefer.reject(new Error('unable to connect to database at ' + config.db));
});
db.once('open', function () {
  dbDefer.resolve();
});

var dbPromise = dbDefer.promise;

module.exports = function (done) {
  // Drop the database
  dbPromise
    .then(function () {
      mongoose.connection.db.dropDatabase(function (err) {
        if (err) {
          throw err;
        }
        require('./test-data')(done);
      });
    })
    .catch(function (err) {
      console.error(err);
      done(false);
    });
};