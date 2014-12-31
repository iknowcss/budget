// Make the tests run async so we can use requirejs
var tests = [],
    file;
for (file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/_spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

// Configure requirejs
requirejs.config({
  // Karma serves files from '/base'
  baseUrl: '',

  paths: {
    // Directory aliases
    'vm'                : '/base/public/js/view-model',
    'util'              : '/base/public/js/util',

    // Libraries
    'knockout'          : '/base/public/lib/knockout/knockout',
    'knockout-postbox'  : '/base/public/lib/knockout-postbox/knockout-postbox.min',
    'lodash'            : '/base/public/lib/lodash/lodash.compat',
    'text'              : '/base/public/lib/requirejs-text/text'
  },

  // Make requirejs load all test files
  deps: tests,

  // Run the tests on completion
  callback: window.__karma__.start
});