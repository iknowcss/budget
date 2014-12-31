var path = require('path');

module.exports = function (requestedPath) {
  var basePath = process.env.APP_DIR_FOR_CODE_COVERAGE ?
      path.join('../../', process.env.APP_DIR_FOR_CODE_COVERAGE) :
      '../../app/';
  return require(path.join(basePath, requestedPath));
};