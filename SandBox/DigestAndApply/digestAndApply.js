(function () {
    'use strict';
    angular.module('DAApp', [])
    .controller('DAAppController', DAAppController);

    DAAppController.$inject = ['$scope','$timeout'];
    function DAAppController($scope,$timeout) {
      $scope.counter=0;
      $scope.name="Mahendra";

      $scope.upCounter = function () {
        $timeout(function () {
          $scope.counter++;
          console.log("Counter incremented: "+$scope.counter);
        },2000);
      };

      // $scope.upCounter = function () {
      //   setTimeout(function () {
      //     $scope.$apply(function () {
      //       $scope.counter++;
      //       console.log("Counter incremented: "+$scope.counter);
      //     });
      //   },2000);
      // };

      // $scope.upCounter = function () {
      //   setTimeout(function () {
      //     $scope.counter++;
      //     console.log("Counter incremented: "+$scope.counter);
      //     $scope.$digest();
      //   },2000);
      // };
    }



    })();
