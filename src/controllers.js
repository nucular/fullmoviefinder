

// Controller for the search box
angular.module('fullmoviefinder')
  .controller('SearchCtrl', ['$scope','redditSearch','$stateParams',
                           function($scope, redditSearch, $stateParams) {
  $scope.results = redditSearch.resultsForMovie($stateParams.movie);
}]);
