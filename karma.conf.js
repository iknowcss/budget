var path = require('path');

module.exports = function (config) {
  var instrumentedPath = process.env.INSTRUMENTED_CODE_DIR ?
      path.join(process.env.INSTRUMENTED_CODE_DIR, 'public') :
      'public';

  config.set({
    files       : [
      'public/js/lib/jquery/jquery.js',
      'public/js/lib/requirejs/require.js',
      { pattern: 'public/js/**/*.js', included: false },
      { pattern: 'public/template/**/*.html', included: false },
      { pattern: 'test/ui/**/*_spec.js', included: false },
      'test/ui/test-main.js'
    ],
    exclude     : [ 'public/js/main.js' ],
    browsers    : [ 'PhantomJS' ],
    frameworks  : [ 'requirejs', 'mocha', 'chai', 'sinon' ],
    reporters   : [ 'progress' ],
    singleRun   : config.singleRun
  });
};
