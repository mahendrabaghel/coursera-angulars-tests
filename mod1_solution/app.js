(function () {
  'use strict';

  angular.module('LunchCheck', [])

    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.items = "";
    $scope.diet = "";
    $scope.fColor="";

    $scope.checkDiet = function () {
      
      var locItems = $scope.items.trim();

      //check if there are items.
      if(locItems.length<1){
        $scope.diet = "Please enter data first";
        $scope.fColor="red";
        return;
      }

      var itemArr = locItems.split(',');
      var citemArr = [];

      //remove empty items from the textbox
      for (var i = 0; i < itemArr.length; i++) {
        if (itemArr[i].trim().length > 1) {
          citemArr[i] = itemArr[i];
        }
      }

      //finally count the legit items
      if (citemArr.length <= 3) {
        $scope.diet = "Enjoy!";
        $scope.fColor="green";
      } else {
        $scope.diet = "Too much!";
        $scope.fColor="green";
      }
    };

    $scope.clearDiet = function () {
      var locItems = $scope.items.trim();
      //console.log(locItems);
      var itemArr = locItems.split(',');
      //console.log(itemArr);
      if (locItems.length < 1) {
        $scope.diet = "Please enter data first";
        $scope.fColor="red";
      }
    };


  }

})();
