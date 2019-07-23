module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        meta: {
            banner: '/*! <%= pkg.description %>, <%= pkg.version %> <%= pkg.homepage %>\n' +
                'Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>, <%= pkg.license %> license */\n'
        },
        uglify:{
            dist: {
                files: {
                    'dist/jquery.popunder.min.js': ['src/jquery.popunder.js']
                },
                options: {
                    banner: '<%=meta.banner%>',
                    report: 'min',
                    preserveComments: false
                }
            },
        },
        // Put files not handled in other tasks here
        copy: {
            dist: {
                files: {
                    'dist/jquery.popunder.js': ['src/jquery.popunder.js']
                }
            }
        }
    });


    // load tasks
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['uglify', 'copy']);
};
