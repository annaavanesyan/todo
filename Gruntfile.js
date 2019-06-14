module.exports = function(grunt) {

    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
  
      sass: {
        dist: {
          options: {
            style: 'expanded'
          },
          files: {
            'src/styles/index.css': 'src/styles/index.sass'
          }
        }
      },
  
      watch: {
        sass: {
          files: ['src/styles/**/*.sass'],
          tasks: ['sass']
        }
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
  
    grunt.registerTask('default', ['sass', 'watch']);
  };