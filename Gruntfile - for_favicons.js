/*
 After you have changed the settings at "Your code goes here",
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',

          sizes: /*[{
            
            width: 800,
            suffix: 1,
            quality: 109.9

          }]*/

          [{ name: 'favicon', width: 16, suffix: '-16x16', quality: 100},{ name: 'favicon', width: 32, suffix: '-32x32', quality: 100},{ name: 'favicon', width: 96, suffix: '-96x96', quality: 100},{ name: 'older-iPhone', width: 120, quality: 100},{ name: 'iPhone-6-Plus', width: 180, suffix: '_180x180', quality: 100},{ name: 'iPad-Retina', width: 152, suffix: '152x152', quality: 100},{ name: 'iPad-Pro', width: 167, suffix: '_167x167', quality: 100},{ name: 'android-chrome', width: 196, suffix: '_196x196', quality: 100}]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png,ico}'],
          cwd: 'images_src/favicon',
          dest: 'images/favicon'
        }],
        concurrency: 1        
      }
    },

    /* Clear out the images directory if it exists */
    /*clean: {
      dev: {
        src: ['images'],
      },
    },*/

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images/favicon']
        },
      },
    },

    /* Copy the "fixed" images that don't go through processing into the images/directory */
    copy: {
      dev: {
        files: [{
          expand: true,
          src: 'images_src*.{gif,jpg,png,ico}',
          dest: 'images/favicon/'
        }]
      },
    },
  });
  
  grunt.loadNpmTasks('grunt-responsive-images');
  /*grunt.loadNpmTasks('grunt-contrib-clean');*/
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', [/*'clean', */'mkdir', 'copy', 'responsive_images']);

};
