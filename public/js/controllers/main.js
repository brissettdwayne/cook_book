angular
  .module('mainController', [])
  .controller('MainController', ['$scope', '$http',  function($scope, $http){

    $scope.animals = [];
    $scope.location = '';
    $scope.locationOne = '';
    $scope.currentPage = 1;
    $scope.pageSize = 5;
    $scope.options = ['', 'M', 'F'];
    $scope.sizes = ['', 'S', 'M', 'L', 'XL'];
    $scope.types = ['', 'Barnyard', 'Bird', 'Cat', 'Dog', 'Horse', 'Pig', 'Reptile', 'Smallfurry'];
    $scope.currAnimal = {};
    $scope.class = 'ng-show';
    $scope.classOne = 'ng-hide'
    $scope.shelters = [];
    $scope.currShelter = {};

    $scope.log = function() {
      console.log($scope);
    }

    $scope.getMoreData = function() {
      $http.jsonp("https://api.petfinder.com/shelter.find?key=58471d9327fc0e1b20cf60525e2693df&count=50&format=json&location=" + $scope.locationOne + "&callback=JSON_CALLBACK").then(function(response){
        console.log(response.data.petfinder)
        var shelterData = response.data.petfinder.shelters.shelter;
        $scope.shelters = shelterData;
      })
    }

    $scope.getData = function() {
      $http.jsonp("https://api.petfinder.com/pet.find?key=58471d9327fc0e1b20cf60525e2693df&count=50&format=json&location=" + $scope.location + "&callback=JSON_CALLBACK").then(function(response){
        console.log(response.data.petfinder.pets.pet)
        var petFinderData = response.data.petfinder.pets.pet;
        $scope.animals = petFinderData;
      })
    }

    $scope.updateShelter = function(shelter){
      $scope.currShelter = shelter;
      $('#myModal-One').modal('show');
    }

    $scope.updateAnimal = function(animal) {
      $scope.currAnimal = animal
      $('#myModal').modal('show');
    }

    $scope.changeClass = function() {
      if($scope.class === 'ng-hide') {
        $scope.class = 'ng-show';
      } else {
        $scope.class = 'ng-hide';
      }
      if ($scope.classOne === 'ng-show'){
        $scope.classOne = 'ng-hide';
      } else {
        $scope.classOne = 'ng-show'
      }
    }




  }])
