module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        bump: {
            options: {
                files: ['./projects/ngx-utilitario-rclt/package.json'],
                updateConfigs: [],
                commit: false,
                createTag: true,
                tagName: 'v%VERSION%',
                tagMessage: 'Version %VERSION%',
                push: false,
                globalReplace: true,
                prereleaseName: false,
                metadata: '',
                regExp: false
            }
        },
    })

    grunt.loadNpmTasks('grunt-bump');

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['uglify']);

};