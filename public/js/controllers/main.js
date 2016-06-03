angular
  .module('mainController', [])
  .controller('MainController', ['$scope', '$http',  function($scope, $http){

    $scope.animals = [];
    $scope.location = '';
    $scope.currentPage = 1;
    $scope.pageSize = 5;
    $scope.options = ['Male', 'Female']

    $scope.getData = function() {
      $http.jsonp("http://api.petfinder.com/pet.find?key=58471d9327fc0e1b20cf60525e2693df&count=50&format=json&location=" + $scope.location + "&callback=JSON_CALLBACK").then(function(response){
        console.log(response.data.petfinder.pets.pet)
        var petFinderData = response.data.petfinder.pets.pet;
        $scope.animals = petFinderData;
      })
    }





  }])
