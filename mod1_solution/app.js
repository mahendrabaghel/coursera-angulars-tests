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
      var tItem="";
      var j=0;
      //remove empty items from the textbox
      for (var i = 0; i < itemArr.length; i++) {
        tItem = itemArr[i].trim();
        // console.log(Boolean(tItem));
        // console.log("value of each item outside: "+tItem);
        if (Boolean(tItem)) {
          console.log("value of each item inside: "+tItem);
          citemArr[j] = tItem;
          j++;
        }
      }
      // console.log("final array length: "+citemArr.length);
      // console.log(citemArr);
      //finally count the legit items
      if (citemArr.length <= 3) {
        $scope.diet = "Enjoy!";
        $scope.fColor="green";
      } else if(citemArr.length > 3){
        $scope.diet = "Too much!";
        $scope.fColor="green";
      }
    };

    //this function is created to check for empty box on checkbox button up.
    //the function is not used for now.
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
