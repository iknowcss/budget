var express = require('express'),
    router = express.Router();

module.exports = function (app) {
  app.use('/category', router);
};

router.get('/list', function (req, res, next) {
  res.json([
    {
      description: 'Home',
      color: '#aaccaa'
    },
    {
      description: 'Home',
      color: '#aaccaa'
    },
  ]);
});
