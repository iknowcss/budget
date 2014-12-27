var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'budget'
    },
    port: 3000,
    db: 'mongodb://localhost/budget-development'
    
  },

  test: {
    root: rootPath,
    app: {
      name: 'budget'
    },
    port: 3000,
    db: 'mongodb://localhost/budget-test'
    
  },

  production: {
    root: rootPath,
    app: {
      name: 'budget'
    },
    port: 3000,
    db: 'mongodb://localhost/budget-production'
    
  }
};

module.exports = config[env];
