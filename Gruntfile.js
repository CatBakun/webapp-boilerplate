'use strict';

module.exports = function(grunt) {

    // Private variables
    var lessMiddleware = require('less-middleware'),
        jsbeautifierFiles = [
            'src/**/*.js',
            'test/**/*.js',
            'Gruntfile.js',
            'karma.conf.js',
            'package.json'
        ];

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
        // Task configuration.
        concat: {
            options: {
                banner: '<%= banner %>',
                stripBanners: true
            },
            dist: {
                src: ['src/main.js'],
                dest: 'dist/<%= pkg.name %>.js'
            },
        },
        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            dist: {
                src: '<%= concat.dist.dest %>',
                dest: 'dist/<%= pkg.name %>.min.js'
            },
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                options: {
                    singleRun: true
                }
            },
            unitDev: {
                configFile: 'karma.conf.js',
                options: {
                    singleRun: false
                }
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            lib: {
                options: {
                    jshintrc: 'src/.jshintrc'
                },
                src: ['src/**/*.js']
            },
            test: {
                src: ['test/**/*.js']
            },
        },
        watch: {
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile']
            },
            lib: {
                files: '<%= jshint.lib.src %>',
                tasks: ['jshint:lib', 'nodeunit']
            },
            test: {
                files: '<%= jshint.test.src %>',
                tasks: ['jshint:test', 'nodeunit']
            },
            msx: {
                files: ['src/**/*.jsx'],
                tasks: ['msx'],
                options: {
                    spawn: false,
                }
            },
            less: {
                tasks: ['less'],
                files: ['src/**/*.less'],
                options: {
                    spawn: false
                }
            },
            css: {
                files: ['src/**/*.css', 'src/**/*.css.map'],
                options: {
                    livereload: true
                }
            },
            jsbeautifier: {
                tasks: ['jsbeautifier'],
                files: jsbeautifierFiles
            }
        },
        jsbeautifier: {
            files: jsbeautifierFiles
        },
        msx: {
            app: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: '**/*.jsx',
                    dest: 'src',
                }]
            }
        },
        index: {
            build: {
                dir: '.',
                src: [
                    'bower_components/requirejs/require.js',
                    'src/require.config.js',
                    'src/main.js'
                ]
            }
        },
        connect: {
            server: {
                options: {
                    port: 9000,
                    base: '.',
                    keepalive: true,
                    middleware: function(connect, options, middlewares) {
                        middlewares.unshift(lessMiddleware);
                        return middlewares;
                    }
                }
            }
        },
        webdriver: {
            options: {
                desiredCapabilities: {
                    browserName: 'chrome'
                }
            },
            base: {
                tests: ['e2e/test/**/*Spec.js'],
                options: {
                    // overwrite default settings
                    desiredCapabilities: {
                        browserName: 'chrome'
                    }
                }
            }
        },
        less: {
            options: {
                sourceMap: true,
                sourceMapBasepath: function(srcFile) {
                    var fileAbspath = '/' + srcFile;
                    this.sourceMapURL = fileAbspath.replace('.less', '.css.map');
                    return fileAbspath;
                },
                sourceMapRootpath: '/'
            },
            files: {
                expand: true,
                cwd: "src",
                src: ['**/*.less'],
                dest: "src",
                ext: ".css"
            }
        },
        concurrent: {
            code: {
                tasks: [
                    'watch:msx',
                    'watch:less',
                    'watch:jsbeautifier',
                    'connect:server',
                    'watch:css'
                ],
                options: {
                    logConcurrentOutput: true,
                    limit: 10
                }
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jsbeautifier');
    grunt.loadNpmTasks('grunt-msx');
    grunt.loadNpmTasks('grunt-index-html-template');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-webdriver');
    grunt.loadTasks('grunt-tasks');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-concurrent');

    // Default task.
    grunt.registerTask('default', [
        'jsbeautifier',
        'msx',
        'less',
        'jshint',
        'karma:unit',
        'showme-coverage',
        'concat',
        'uglify'
    ]);
    grunt.registerTask('tdd', ['karma:unitDev']);
    grunt.registerTask('code', ['default', 'concurrent:code']);
};
