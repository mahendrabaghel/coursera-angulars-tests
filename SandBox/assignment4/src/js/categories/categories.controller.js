(function(){
  'use strict';
  angular
    .module('restaurantApp')
    .controller('CategoriesController', CategoriesController);

    CategoriesController.$inject = ['MenuDataService'];

    function CategoriesController(MenuDataService) {
      var categoriesCtrl = this;
      console.log("Inside the CategoriesController");
      MenuDataService.getAllCategories().then(function(response) {
        categoriesCtrl.items = response.data;
        console.log("Items found",categoriesCtrl.items);
        return categoriesCtrl.items;
      });
    }
})();
