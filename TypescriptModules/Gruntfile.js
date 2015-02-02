/**
 * Created by madalin on 12/17/2014.
 */
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        /**
         * This will load in our package.json file so we can have access
         * to the project name and appVersion number.
         */
        pkg: grunt.file.readJSON('package.json'),

        BASE_PATH: '',
        DEVELOPMENT_PATH: 'src/assets/scripts/app/',

        ts: {
            options: {
                compile: true,
                comments: false,
                target: 'es3',
                module: 'amd',
                sourceMap: true,
                declaration: false,
                noImplicitAny: false,
                fast: 'never',
                failOnTypeErrors: false,
                verbose: true
            },
            common:{
                src: ["<%= DEVELOPMENT_PATH %>"+"common/**/*.ts"],          // The source typescript files, http://gruntjs.com/configuring-tasks#files
                reference: '<%= DEVELOPMENT_PATH %>'+'reference-appCommon.ts', // If specified, generate this file that you can use for your reference management
                out: "<%= DEVELOPMENT_PATH %>"+'common/appCommon.js',             // If specified, generate an out.js file which is the merged js file
                watch: '<%= DEVELOPMENT_PATH %>' + 'common/'
            }
        }
    });

    grunt.loadNpmTasks('grunt-ts');

    grunt.registerTask('default', [
        'ts'
    ]);
};