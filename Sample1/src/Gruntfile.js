module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ["assets/scripts/build*"],
        removelogging: {
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
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %>.<%= pkg.version %> built on <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            all: {
                files: [{
                    expand: true,
                    cwd: 'assets/scripts/build_<%= pkg.version %>/',
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
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-remove-logging');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-string-replace');

    grunt.registerTask('default', ['clean', 'removelogging', 'uglify', 'string-replace']);
};