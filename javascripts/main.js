var app = angular.module('MusicHistoryApp', ['ngRoute', 'firebase']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/songs/list', {
        templateUrl: 'partials/song-list.html',
        controller: 'SongListCtrl'
      })
      .when('/add', {
        templateUrl: 'partials/song-add.html',
        controller: 'AddSongCtrl'
      });
  }]);

app.controller('SongListCtrl',
  [
    '$scope',
    '$firebaseArray',
    function($scope, $firebaseArray) {
      // get initial list of songs on page load
      var ref = new Firebase("https://leh-listener.firebaseio.com/songs");
      	$scope.songs_list = $firebaseArray(ref);
	      console.log('$scope.songs_list', $scope.songs_list);

      }])
    
  


app.controller("AddSongCtrl",
  [
    "$scope",
    "$firebaseArray",
    function($scope, $firebaseArray ) {
      $scope.newSong = { title: "", album: "", artist: "" };

      $scope.addSong = function() {
        $scope.songs_list = $firebaseArray.addSong({
          artist: $scope.newSong.artist,
          title: $scope.newSong.title,
          album: $scope.newSong.album
        });
        console.log("Add song", $firebaseArray.addSong);
      };
    }
  ]
);


