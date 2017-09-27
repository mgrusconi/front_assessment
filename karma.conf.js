module.exports = function (config) {
    config.set({
        basePath: './',
        files: [
            'public/components/angular/angular.js',
            'public/components/angular-mocks/angular-mocks.js',
            'node_modules/es6-promise/dist/es6-promise.js',
            'public/resources/**/*.js',
            'tests/**/*.js'
        ],
        autoWatch: false,
        frameworks: ['systemjs', 'jasmine'],
        browsers: ['Firefox'],
        singleRun: true,
        plugins: [
            'karma-systemjs',
            'karma-firefox-launcher',
            'karma-jasmine'
        ],
        systemjs: {
            configFile: 'system.conf.js',
            config: {
                transpiler: null,
                paths: {
                    'systemjs': 'node_modules/systemjs/dist/system.js',
                }                
            }
        },
        serveFiles: [
            'public/**/*.js'
        ]
    });
};