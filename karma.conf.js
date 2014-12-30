module.exports = function (config) {
  config.set({
    files       : [
      'public/js/lib/jquery/jquery.js',
      'public/js/lib/requirejs/require.js',
      { pattern: 'public/js/**/*.js', included: false },
      { pattern: 'public/template/**/*.html', included: false },
      { pattern: 'test/**/*_spec.js', included: false },
      'test/test-main.js'
    ],
    exclude     : [ 'public/js/main.js' ],
    browsers    : [ 'PhantomJS' ],
    frameworks  : [ 'requirejs', 'mocha', 'chai', 'sinon' ],
    reporters   : [ 'progress' ]
  });
};
