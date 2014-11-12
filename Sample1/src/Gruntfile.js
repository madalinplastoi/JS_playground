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
                banner: '/*! <%= pkg.name %>.<%= pkg.version %> built on <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            all: {
                files: [{
                    expand: true,
                    cwd: 'assets/scripts/src/',
                    src: ['*.js', '**/*.js', '!**/*.min.js', '!*.min.js'],
                    dest: 'assets/scripts/build_<%= pkg.version %>/',
                    ext: '.js'
                }]
            }
        },
        'string-replace': {
            dist: {
                files: [{ 'index.html': 'index.html' }, { 'assets/scripts/build_<%= pkg.version %>/config.js': 'assets/scripts/build_<%= pkg.version %>/config.js' }],
                options: {
                    replacements: [{
                        pattern: 'assets/scripts/src/config.js',
                        replacement: 'assets/scripts/build_<%= pkg.version %>/config.js'
                    },
                    {
                        pattern: 'assets/scripts/src',
                        replacement: 'assets/scripts/build_<%= pkg.version %>'
                    }]
                }
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
    grunt.loadNpmTasks('grunt-string-replace');
    grunt.loadNpmTasks('grunt-iisexpress');

    // Default task(s).
    //grunt.registerTask('default', ['removelogging', 'uglify', 'iisexpress']);
    grunt.registerTask('default', ['uglify', 'string-replace']);
};