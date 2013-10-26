function MovieCtrl($scope) {
  $scope.movies = [];

  if (localStorage.getItem('moviesangular')) {
  	$scope.movies = JSON.parse(localStorage.getItem('moviesangular'));
  }

  $scope.addMovie = function() {
    $scope.movies.push({title:$scope.movieTitle});
    $scope.movieTitle = '';
    localStorage.setItem('moviesangular', JSON.stringify($scope.movies));
  };
  
}
