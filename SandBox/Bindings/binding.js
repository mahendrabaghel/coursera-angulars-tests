(function () {
  'use strict';
  angular.module('BindingApp', [])
  .controller('BindingController', BindingController);

  BindingController.$inject = ['$scope'];
  function BindingController($scope) {
    $scope.firstName = "Mahendra";

    $scope.showNumberOfWatchers = function () {
      //call it before and after setFullName function and see the difference.
        console.log("# of Watchers "+$scope.$$watchersCount);
    };

    $scope.setFullName = function () {
      //first time initialization will show up in 1 time bind.
      //As soon as the 1 time binder is initialized the watcher will disappear.
      $scope.fullName = $scope.firstName+" Baghel";
    };

    $scope.logFirstName = function () {
      console.log("First name is: "+$scope.firstName);
    };

    $scope.logFullName=function () {
      console.log("Full name is: "+$scope.fullName);
    };

  }


})();
