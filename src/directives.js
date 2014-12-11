
var app = angular.module('fullmoviefinder');

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
