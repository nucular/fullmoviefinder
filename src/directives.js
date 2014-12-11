
var app = angular.module('fullmoviefinder');

// Custom HTML tag <reddit-post title="" url=""></reddit-post>
app.directive('redditPost', [ function() {
  return {
    restrict: 'E', // A = HTML attribute, E = HTML element, C = class name
    templateUrl: 'partials/reddit-post.partial.html',
    
    link: function(scope, el, attr) {
      _.extend(scope, attr);
    }
  };
}]);

app.directive('searchBox', [ function() {
  return {
    restrict: 'E',
    controller: 'SearchCtrl',
    templateUrl: 'partials/search-box.partial.html'
  };
}]);
