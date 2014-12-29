var express = require('express'),
    generateUuid = require('../util/string-util').generateUuid;

var router = express.Router();

module.exports = function (app) {
  app.use('/budget', router);
};

router.get('/categories', function (req, res, next) {
  // Stub
  res.json([
    {
      icon: 'house',
      description: 'Home',
      color: '#aaccaa',
      lineItems: [
        {
          id: generateUuid(),
          description: 'Rent',
          amount: 150000,
          frequency: 'mo.'
        }, {
          id: generateUuid(),
          description: 'SDGE',
          amount: 13000,
          frequency: 'mo.'
        }
      ]
    }, {
      icon: 'car',
      description: 'Car',
      color: '#aaaacc',
      lineItems: [
        {
          id: generateUuid(),
          description: 'Gas',
          amount: 5000,
          frequency: 'wk.'
        }
      ]
    }
  ]);
});
