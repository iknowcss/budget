var path = require('path'),
    fs = require('fs'),
    mongoose = require('mongoose');

// TODO: make this a util
var modelsPath = path.join(__dirname, '../../app/models');
fs.readdirSync(modelsPath).forEach(function (file) {
  if (/\.js$/.test(file)) {
    require(modelsPath + '/' + file);
  }
});

module.exports = function (done) {

  // Budget data
  mongoose.model('Budget').create([
    {
     icon: 'house',
     description: 'Home',
     color: '#aaccaa',
     lineItems: [
       {
         description: 'Rent',
         amount: 150000,
         frequency: 'mo.'
       }, {
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
          description: 'Gas',
          amount: 5000,
          frequency: 'wk.'
        }
      ]
    }
  ], function () { done(); });
  
};