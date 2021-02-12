(function () {
    'use strict';
    angular.module('MsgApp', [])
    .controller('MsgController', MsgController)
    .filter('custom',customFilterFactory)
    .filter('truth',truthSeeker);
    
    MsgController.$inject = ['$scope','customFilter'];
    function MsgController($scope,customFilter) {
      $scope.name = "Yaakov";
      $scope.stateOfBeing = "hungry";
      $scope.cost=0.50
    
      $scope.sayMessage = function () {
        var msg = "Yaakov likes to eat healthy snacks at night!";
        var output = customFilter(msg);
        return output;
      };
    
      $scope.feedYaakov = function () {
        $scope.stateOfBeing = "fed";
      };
    }

    function customFilterFactory(){
        return function(input){
            input = input || "";
            input = input.replace("likes","loves");
            return input;
        };
    }

    function truthSeeker(){
        return function(input, target, replace){
            input = input || "";
            input = input.replace(target,replace);
            return input;
        };
    }
    
    })();

 
    