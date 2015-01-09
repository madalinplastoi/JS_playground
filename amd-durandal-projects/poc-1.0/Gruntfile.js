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

        requirejs: {
            compile: {
                options: {
                    baseUrl: "public/app",
                    mainConfigFile: "public/app/main.js",
                    include: "main",
                    name: "../../node_modules/almond/almond",
                    out: "public/build/js/main-build.js",
                    findNestedDependencies: true,
                    optimize: 'uglify'
                }
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.registerTask('default', ['clean']);
    grunt.registerTask('stage', ['clean', 'cssmin']);
    grunt.registerTask('prod', ['clean', 'cssmin', 'requirejs']);
}