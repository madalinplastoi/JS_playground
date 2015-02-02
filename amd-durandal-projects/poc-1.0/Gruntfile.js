/**
 * Created by madalin on 1/9/2015.
 */

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: ["public/build/*"],

        cssmin: {
            options: {
                banner: '/*! <%= pkg.name %>.<%= pkg.version %> built on <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            target: {
                files: [{
                    expand: true,
                    cwd: 'public/stylesheets',
                    src: ['*.css', '!*.min.css'],
                    dest: 'public/build/css',
                    ext: '.min.css'
                }]
            }
        },

        durandal: {
            dist: {
                src: [
                    "public/app/*.js",
                    "public/app/**/*.js",
                    "public/app/views/*.html",
                    "public/app/views/**/*.html",

                    "public/lib/durandal/js/**/*.js"
                ],
                options: {
                    name: '../lib/require/almond-custom',
                    baseUrl: "public/app/",
                    mainPath: "public/app/main.js",
                    out: "public/build/js/main-built.js",
                    paths: {
                        text: '../lib/require/text',
                        durandal: '../lib/durandal/js',
                        plugins: '../lib/durandal/js/plugins',
                        transitions: '../lib/durandal/js/transitions',
                        jquery: '../lib/jquery/jquery-1.9.1',
                        knockout: '../lib/knockout/knockout-3.1.0',
                        kocommand : '../lib/kolite/knockout.command'
                    },
                    optimize:'none'
                }
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-durandal');

    grunt.registerTask('stage', ['clean', 'cssmin']);
    grunt.registerTask('stage', ['clean', 'cssmin']);
    grunt.registerTask('prod', ['clean', 'cssmin', 'durandal']);
}