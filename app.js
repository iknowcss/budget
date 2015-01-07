var express = require('express'),
    fs = require('fs'),
    mongoose = require('mongoose');

var config = require('./config/config');

mongoose.connect(config.db);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + config.db);
});

// TODO: Move this to a module
var modelsPath = __dirname + '/app/models';
fs.readdirSync(modelsPath).forEach(function (file) {
  if (/\.js$/.test(file)) {
    require(modelsPath + '/' + file);
  }
});
var app = express();

require('./config/express')(app, config);

app.listen(config.port);

