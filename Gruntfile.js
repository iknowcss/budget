'use strict';

var request = require('request');

module.exports = function (grunt) {
  // show elapsed time at the end
  require('time-grunt')(grunt);
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  var reloadPort = 35729, files;

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    env: {
      coverage: {
        APP_DIR_FOR_CODE_COVERAGE: 'test/coverage/instrument/app/'
      }
    },

    clean: {
      coverage: {
        src: ['test/coverage']
      }
    },

    develop: {
      server: {
        file: 'app.js'
      }
    },

    watch: {
      options: {
        nospawn: true,
        livereload: reloadPort
      },
      js: {
        files: [
          'app.js',
          'app/**/*.js',
          'config/*.js'
        ],
        tasks: ['develop', 'delayed-livereload']
      },
      views: {
        files: [
          'app/views/*.ejs',
          'app/views/**/*.ejs'
        ],
        options: { livereload: reloadPort }
      },
      lib: {
        files: [
          'bower.json'
        ],
        tasks: ['bower']
      }
    },

    // - Bower configuration ---------------------------------------------------

    bower: {
      install: {
        options: {
          targetDir: 'public/js/lib',
          cleanTargetDir: true,
          cleanBowerDir: true
        }
      }
    },

    // - Client-side unit testing ----------------------------------------------

    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    },

    // - Server mocha unit testing ---------------------------------------------

    mochaTest: {
      controllers: {
        src: ['test/server/controllers/**/*.js']
      },
      util: {
        src: ['test/server/util/**/*.js']
      }
    },

    // - Istanbul server coverage ----------------------------------------------

    instrument: {
      files: ['app/**/*.js'],
      options: {
        lazy: false,
        basePath: 'test/coverage/instrument/'
      }
    },

    storeCoverage: {
      options: {
        dir: 'test/coverage/reports'
      }
    },

    makeReport: {
      src: 'test/coverage/reports/**/*.json',
      options: {
        type: 'lcov',
        dir: 'test/coverage/reports',
        print: 'detail'
      }
    }

  });

  grunt.config.requires('watch.js.files');
  files = grunt.config('watch.js.files');
  files = grunt.file.expand(files);

  grunt.registerTask('delayed-livereload', 'Live reload after the node server has restarted.', function () {
    var done = this.async();
    setTimeout(function () {
      request.get('http://localhost:' + reloadPort + '/changed?files=' + files.join(','),  function(err, res) {
        var reloaded = !err && res.statusCode === 200;
        if (reloaded)
          grunt.log.ok('Delayed live reload successful.');
        else
          grunt.log.error('Unable to make a delayed live reload.');
        done(reloaded);
      });
    }, 500);
  });

  grunt.registerTask('default', ['bower', 'develop', 'watch']);

  grunt.registerTask('test:ui', function () {
    grunt.config.set('karma.unit.singleRun', true);
    grunt.task.run('karma');
  });

  grunt.registerTask('test:server', ['mochaTest']);

  grunt.registerTask('test', ['test:ui', 'test:server']);

  grunt.registerTask('coverage', ['clean:coverage', 'env:coverage', 
      'instrument', 'mochaTest', 'storeCoverage', 'makeReport']);
};
