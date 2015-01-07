var express = require('express'),
    mongoose = require('mongoose'),
    generateUuid = require('../util/string-util').generateUuid;

var router = express.Router(),
    Budget = mongoose.model('Budget');

module.exports = function (app) {
  app.use('/budget', router);
};

router.get('/categories', function (req, res, next) {
  Budget.find(function (err, budgets) {
    res.json(budgets);
  });
});
