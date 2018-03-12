module.exports = function (grunt) {
    "use strict";

    // Do grunt-related things in here
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        meta : {
            project :   '<%= pkg.name %>',
            version :   '<%= pkg.version %>',
            banner  :   '/*! <%= meta.project %> - v<%= meta.version %> \n' +
                        ' *\n' +
                        ' * <%= pkg.description %>\n' +
                        ' *\n' +
                        ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %> <<%= pkg.author.email %>>\n' +
                        ' * <%= pkg.licenses.type %> Licensed\n' +
                        ' *\n' +
                        ' * Date: <%= grunt.template.today("ddd mmm dd yyyy HH:MM:ss TT Z") %>\n' +
                        ' */\n'
        },
        jshint : {
            options : {
                jshintrc     : '.jshintrc'
            },
            files        : [
                'Gruntfile.js',
                'jquery.sticky-header.js'
            ]
        },
        uglify : {
            dev : {
                options : {
                    banner      : '<%= meta.banner %>',
                    compress    : false,
                    mangle      : false,
                    beautify    : true
                },
                files : {
                    'dest/jquery.sticky-header.js' : ['src/jquery.sticky-header.js'],
                }
            },
            prod : {
                options : {
                    banner      : '<%= meta.banner %>',
                    compress    : true,
                    mangle      : true
                },
                files : {
                    'dest/jquery.sticky-header.min.js' : ['src/jquery.sticky-header.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask( 'dev', [ 'jshint', 'uglify' ] );
    grunt.registerTask( 'default', [ 'uglify' ] );
};
