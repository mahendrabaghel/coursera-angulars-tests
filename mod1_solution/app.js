(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject=['$scope'];

function LunchCheckController($scope) {
  $scope.items="1,2,3";
  $scope.diet = "";

  $scope.checkDiet = function () {
    var locItems = $scope.items.trim();
    var itemArr = locItems.split(',');
    if(itemArr.length<=3){
      $scope.diet = "Enjoy!";
    }else{
      $scope.diet = "Too much!";
    }
  };

  $scope.clearDiet = function () {
    var locItems = $scope.items.trim();
    console.log(locItems);
    var itemArr = locItems.split(',');
    console.log(itemArr);
    if(locItems.length<1){
      $scope.diet = "";
    }
  };


}

})();
