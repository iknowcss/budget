module.exports = function (config) {
  var configOptions = {
    files       : [
      'public/lib/jquery/jquery.js',
      'public/lib/requirejs/require.js',
      { pattern: 'public/lib/**/*.js', included: false },
      { pattern: 'public/js/**/*.js', included: false },
      { pattern: 'public/template/**/*.html', included: false },
      { pattern: 'test/ui/**/*_spec.js', included: false },
      'test/ui/test-main.js'
    ],
    exclude     : ['public/js/main.js'],
    browsers    : ['PhantomJS'],
    frameworks  : ['requirejs', 'mocha', 'chai', 'sinon'],
    reporters   : ['progress'],
    singleRun   : config.singleRun
  };

  if (process.env.UI_INCLUDE_COVERAGE) {
    configOptions.reporters = ['coverage'];
    configOptions.preprocessors = {
      'public/js/**/*.js': ['coverage']
    };
    configOptions.coverageReporter = {
      dir  : 'test/coverage/ui/reports',
      reporters: [
        { type: 'text' },
        { type: 'lcov' }
      ]
    };
  }

  config.set(configOptions);
};
