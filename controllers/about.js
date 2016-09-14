app.controller('AboutController', function($scope){
  $scope.toggled = false;
  $scope.toggleA = false;
  $scope.toggleB = false;
  $scope.toggledA = function(){
    $scope.toggleA = !$scope.toggleA;
  }
  $scope.toggledB = function(){
    $scope.toggleB = !$scope.toggleB;
  }
  $scope.toggleC = function(){
    $scope.toggled = !$scope.toggled;
  }

})
