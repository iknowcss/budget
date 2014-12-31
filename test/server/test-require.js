var path = require('path');

module.exports = function (requestedPath) {
  var basePath = process.env.INSTRUMENTED_CODE_DIR ?
      path.join('../../', process.env.INSTRUMENTED_CODE_DIR, '/app') :
      '../../app/';
  return require(path.join(basePath, requestedPath));
};