'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Compress CSS files
        cssmin: {
            
            my_target2: {
                src: 'app/css/main.css',
                dest: '../dist/main-min.css'
            }
        },

        watch: {
            configFiles: {
                files: ['app/css/main.css'],
                tasks: ['cssmin']
            }
        },

        // changes to '../../css/main-min.css' will not be detected
        // changes to '../css/main.css' will be detected

        // Refresh browser
        browserSync: {
            bsFiles: {
                src: ['../../css/main-min.css', '../dist/main-min.css']
            },
            options: {
                proxy: "http://dev.example.com/gruntboiler/web",
                watchTask: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-css');

    grunt.registerTask("default", ['browserSync', 'watch']);
};