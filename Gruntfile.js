module.exports = function(grunt) {
  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    // Define tasks
    concat: {
      js: {
        src: ['js/script.js'],
        dest: 'dist/script.min.js'
      },
      css: {
        src: ['css/style.css'],
        dest: 'dist/style.min.css'
      }
    },
    
    // Simple copy task
    copy: {
      main: {
        files: [
          {
            expand: true,
            src: ['index.html'],
            dest: 'dist/'
          },
          {
            expand: true,
            src: ['gsap.min.js', 'ScrollTrigger.min.js'],
            dest: 'dist/'
          }
        ]
      }
    },
    
    // Clean build directory
    clean: {
      build: ['dist']
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task - log a message and show available tasks
  grunt.registerTask('default', function() {
    grunt.log.writeln('Grunt default task running!');
    grunt.log.writeln('Available tasks:');
    grunt.log.writeln('- build: Clean, concat, and copy files to dist folder');
    grunt.log.writeln('- clean: Remove the dist folder');
  });

  // Build task
  grunt.registerTask('build', ['clean', 'concat', 'copy']);
};
