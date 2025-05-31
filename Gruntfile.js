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
  // Note: These would need to be installed via npm
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task - for now just log a message since we haven't installed the plugins
  grunt.registerTask('default', function() {
    grunt.log.writeln('Grunt default task running!');
    grunt.log.writeln('To fully use Grunt, install plugins with:');
    grunt.log.writeln('npm install grunt-contrib-concat grunt-contrib-copy grunt-contrib-clean --save-dev');
  });

  // Build task
  grunt.registerTask('build', ['clean', 'concat', 'copy']);
};
