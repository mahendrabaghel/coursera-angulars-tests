(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject=["$scope"];

function MessageAppController($scope) {
  $scope.items="1,2,3";
  $scope.diet = "";

  $scope.checkDiet = function () {
    var lItems = $scope.items;
    var aItem = lItems.split(',');
    if(aItem.length<=3){
      $scope.diet = "Enjoy!";
    }else{
      $scope.diet = "Too much!"
    }
  };


}

})();
