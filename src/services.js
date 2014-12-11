// Reddit API thing, nicely encapsulates all the reddit search poo
angular.module('fullmoviefinder')
  .factory('redditSearch', ['$http', '$q', function redditSearch($http, $q) {
  
  var players = {
    YOUTUBE: 0,
    VIMEO: 1
    // add more
  };

  var obj = {};

  var DOMAIN = "https://www.reddit.com/";
  var SEARCH = "/search.json";

  obj.find_in = [
    "/r/FullMoviesOnYoutube"
    // add more
  ];

  obj.resultsForMovie = function(movie_name, find_in, offset) {
    if (!find_in) 
      find_in = obj.find_in;

    console.log('[redditSearch] updating search...');

    // yay for promise goodies!
    return $q.all(_.flatten(
      _.map(find_in, function(each) {
        return obj.resultsForSubreddit(each, movie_name, offset);
      })
    ));
  };


  // 
  // Get results for one subreddit.
  // Returns a list of "Entries" which contain a lot of data from the Reddit API
  // There's an example entry under misc/ that you can observe. 
  // 
  obj.resultsForSubreddit = function(subreddit, movie_name, offset) {
    if (!offset) offset = 0;
    
    console.log('[redditSearch] getting jsonp results for', 
                subreddit, movie_name, offset);

    return $q(function(resolve, reject) {

      $http.jsonp(DOMAIN + subreddit + SEARCH, {
        method: 'GET',
        params: {
          jsonp: 'JSON_CALLBACK',
          limit: 20, 
          count: offset,
          q: movie_name,
          restrict_sr: true
        }
      })


      .success(function(response, status, h, c) {
        console.log('got, resolving this promise', response, status);
        
        // Unpack the values. 
        var entries = [];
      
        if (!(response && response.data && response.data.children)) {
          console.log('response is missing some .data.children', response);
          reject('invalid data', status, h, c);
        }

        // lol O(n^2)
        for (var j = 0; j < response.data.children.length; j++) {
          entries.push(response.data.children[j].data);
        }
    
        // entries are described in "RESULT_ENTRIES"
        resolve(entries, status, h, c);

      })


      .error(function(data, status, h, c){
        console.log('fuck, it failed');
        reject(data, status, h, c);
      });

    });
  };

  return obj;
}]);
