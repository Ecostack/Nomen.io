module.exports = function (grunt) {

    // configure the tasks
    grunt.initConfig({
        copy: {
            build: {
                cwd: 'app',
                src: ['index.html', 'app.js', 'view1/*', 'components/**', '!**/*_test.js'],
                dest: 'build',
                expand: true
            }
        },
        clean: {
            build: {
                src: ['build']
            },
            stylesheets: {
                src: ['build/**/*.css', '!build/application.css']
            },
            scripts: {
                src: ['build/**/*.js', '!build/application.js']
            }
        },
        cssmin: {
            build: {
                files: {
                    'build/application.css': ['app/bower_components/html5-boilerplate/dist/css/normalize.css',
                        'app/bower_components/html5-boilerplate/dist/css/main.css',
                        'app/bower_components/bootstrap/dist/css/bootstrap.min.css', 'app/app.css']
                }
            }
        },
        uglify: {
            build: {
                options: {
                    mangle: false,
                    beautify: true
                },
                files: {
                    'build/application.js': [
                        //'app/bower_components/html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min.js',
                        'app/bower_components/angular/angular.min.js',
                        'app/bower_components/angular-route/angular-route.min.js',
                        'app/bower_components/jquery/dist/jquery.min.js',
                        'app/bower_components/bootstrap/dist/js/bootstrap.min.js',
                        'build/app.js',
                        'build/**/*.js'
                    ]
                }
            }
        },
        cleanempty: {
            options: {},
            src: ['build/**']
        }
    });

    // load the tasks
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-cleanempty');

    // define the tasks

    grunt.registerTask(
        'stylesheets',
        'Compiles the stylesheets.',
        ['cssmin', 'clean:stylesheets']
    );

    grunt.registerTask(
        'scripts',
        'Compiles the JavaScript files.',
        ['uglify', 'clean:scripts']
    );

    grunt.registerTask(
        'build',
        'Compiles all of the assets and copies the files to the build directory.',
        ['clean:build', 'copy', 'stylesheets', 'scripts', 'cleanempty']
    );
};