// Reddit API thing, nicely encapsulates all the reddit search poo
angular.module('fullmoviefinder')
  .factory('redditSearch', ['$http', function redditSearch($http) {
  
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
