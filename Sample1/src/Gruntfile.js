module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        //removelogging: {
        //    dist: {
        //        src: ['assets/scripts/src/**/*.js', 'assets/scripts/src/*.js'],
        //        dest: "build"
        //    }
        //},

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            all: {
                files: [{
                    expand: true,
                    cwd: 'assets/scripts/src/',
                    src: ['*.js', '**/*.js', '!**/*.min.js', '!*.min.js'],
                    dest: 'assets/scripts/build_<%= pkg.version %>/',
                    ext: '.min.js'
                }]
            }
        },
        iisexpress: {
            server: {
                options: {
                    port: 8000
                }
            }
        }
    });

    //grunt.loadTasks('grunt_tasks');

    //grunt.loadNpmTasks('grunt-remove-logging');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-iisexpress');

    // Default task(s).
    //grunt.registerTask('default', ['removelogging', 'uglify', 'iisexpress']);
    grunt.registerTask('default', ['uglify']);
};