module.exports = function (config) {
    config.set({
        basePath: './',
        files: [
            'public/components/angular/angular.js',
            'public/resources/**/*.js',
            'tests/**/*.js'
        ],
        autoWatch: false,
        frameworks: ['systemjs', 'jasmine'],
        browsers: ['PhantomJS'],
        singleRun: true,
        plugins: [
            'karma-systemjs',
            'karma-phantomjs-launcher',
            'karma-jasmine'
        ]
    });
};