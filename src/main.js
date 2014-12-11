var app = angular.module('fullmoviefinder', ['ui.router']);

// Configure routing
app.config(['$urlRouterProvider', '$stateProvider', 
            function($urlRouterProvider, $stateProvider) {
  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'partials/home.partial.html'
  })
  .state('results', {
    url: '/search/:movie',
    templateUrl: 'partials/search-results.partial.html'
  })
  .state('video', {
    url: '/video/:link',
    templateUrl: 'partials/video-view.partial.html'
  });

  $urlRouterProvider.otherwise('/');
}]);

// see controllers.js
// see directives.js
// see services.js
