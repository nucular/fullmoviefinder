var app = angular.module('fullmoviefinder', ['ui.router']);

// Configure routing
app.config(['$urlRouterProvider', '$stateProvider', 
            function($urlRouterProvider, $stateProvider) {
  
  // Index page - include whatever you want
  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'partials/home.partial.html'
  })
  // Results page, also directly linkable
  .state('results', {
    url: '/search/:movie',
    templateUrl: 'partials/search-results.partial.html'
  })
  // Video watch page, also directly linkable
  .state('video', {
    url: '/video/:link',
    controller: 'VideoCtrl',
    templateUrl: 'partials/video-view.partial.html',
  });

  // Default to the index page.
  $urlRouterProvider.otherwise('/');
}]);

// see controllers.js
// see directives.js
// see services.js
