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

// Reddit API thing, nicely encapsulates all the reddit search poo
app.factory('redditSearch', ['$http', function redditSearch($http) {
  
  var players = {
    YOUTUBE: 0,
    VIMEO: 1
    // add more
  };

  this.find_in = [
    "/r/FullMoviesOnYoutube"
    // add more
  ];

  // represents a search result! 
  this.Result = function() {
    this.movie_name = "";
    this.video_url = "";
    this.player = players.YOUTUBE; 
  };

  this.resultsForMovie = function(movie_name, find_in) {
    if (!find_in) find_in = this.find_in;
    return Array.prototype.concat.apply([], find_in.map(function(each) {
      return this.resultsForSubreddit(each, movie_name);
    }));
  };

  this.resultsForSubreddit = function(subreddit, movie_name) {
    // TODO: implement!
    return [];
  };
}]);

// Controller for the search box
app.controller('SearchCtrl', ['$scope','redditSearch','$stateParams',
                           function($scope, redditSearch, $stateParams) {
  $scope.results = redditSearch.resultsForMovie($stateParams.movie);
}]);

// Custom HTML tag <reddit-post title="" href=""></reddit-post>
app.directive('redditPost', [ function() {
  return {
    restrict: 'E', // A = HTML attribute, E = HTML element, C = class name
    templateUrl: 'partials/reddit-post.partial.html',

    // Clear out the scope (otherwise, includes everything above the element)
    scope: {},
    
    link: function(scope, el, attr) {
      // Add more attributes here if you want to
      // scope = {{variables}} that the HTML can use
      // attr = HTML attributes on the custom tag
      scope.href = attr.href || '';
      scope.title = attr.title || '';
    }
  };
}]);

app.directive('searchBox', [ function() {
  return {
    restrict: 'E',
    templateUrl: 'partials/search-box.partial.html'
  };
}]);


