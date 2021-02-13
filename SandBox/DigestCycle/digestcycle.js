(function () {
    'use strict';
    angular.module('DCApp', [])
    .controller('DCAppController', DCAppController);

    DCAppController.$inject = ['$scope'];
    function DCAppController($scope) {
      $scope.onceCounter=0;
      $scope.name="Mahendra";
      $scope.showNumberOfWatchers = function () {
          console.log("# of Watchers "+$scope.$$watchersCount);
      };

      $scope.upOneCount = function () {
        $scope.onceCounter++;
      };

      $scope.$watch(function () {
        console.log("Digest Loop Fired!");
      });

      // $scope.$watch('onceCounter',function(newValue, oldValue) {
      //
      //   console.log("old Value of onceCounter: "+oldValue);
      //   console.log("new Value of onceCounter: "+newValue);
      //
      // });
    }



    })();
