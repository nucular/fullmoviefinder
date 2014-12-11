

// Controller for the search box
app.controller('SearchCtrl', ['$scope','redditSearch','$stateParams',
                           function($scope, redditSearch, $stateParams) {

  $scope.update = function(movie) {
    console.log('[SearchCtrl#update] calling search update');
    var promise = redditSearch.resultsForMovie(movie);
    promise.then(function(results) {
    
      $scope.results = _.flatten(results);

      console.log('[SearchCtrl#update] results are in: ', $scope.results);
    });

  };

  if ($stateParams.movie)
    $scope.update($stateParams.movie);

}]);

app.controller('VideoCtrl', ['$scope', '$stateParams', 
                             function($scope, $stateParams) {
  // you can either link to this via stateParams
  if (!$stateParams.notFromLink)
    return $scope.link = $stateParams.link;

  // or call it via Javascript $state.go('video')
}]);
