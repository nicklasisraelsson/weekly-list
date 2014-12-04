module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
        dev: {
            src: 'client/client.js',
            dest: 'public/client.js',
            options: {
              browserifyOptions: {
                debug: true
              },
              transform: ['reactify'],
              extensions: ['.jsx'],
              alias: ['react:']  // Make React available externally for dev tools
            }
        },
    },
    watch: {
      browserify: {
        files: [
          "client/**/*.js",
          "client/**/*.jsx"
        ],
        tasks: [ 'browserify' ]
      },
      express: {
        files: [ "server/**/*.js"],
        tasks: ['express:dev'],
        options: {
          spawn: false
        }
      }
    },
    express: {
      dev: {
        options: {
          script: "server/server.js"
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.registerTask('default', ['browserify:dev','express:dev', 'watch']);
}