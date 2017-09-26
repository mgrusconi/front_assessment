System.config({
  baseURL: './',
      // Set paths for third-party libraries as modules
  bundles: [
    'public/app'
  ],
  paths: {
    systemjs: 'node_modules/systemjs/dist/system.js',
    angular: 'public/components/angular/angular.js',
    'angular-ui-route': 'public/components/angular-ui-route/angular-ui-route.js'
  }
});
