(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
    .directive('foundItems', FoundItemsDirective);

    function FoundItemsDirective() {
      var ddo = {
        templateUrl: 'foundItems.html',
        scope: {
          items: '<',
          myTitle: '@title',
          onRemove: '&'
        },
        controller: FoundItemsDirectiveController,
        controllerAs: 'list',
        bindToController: true
      };
      return ddo;
    }

    function FoundItemsDirectiveController() {
      var list = this;
    }

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
      var menu = this;
      var searchTerm="";
      var origTitle = "Search returned";
      menu.title = "Search the menu (all lower case) e.g. chicken, noodle";
      menu.searchMenuItems = function (searchTerm) {
        var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

        promise.then(function (response) {
          menu.found=response;
          menu.lastRemoved="";
          if(menu.found.length>0){
            menu.title = origTitle + " (" + menu.found.length + " items )";
          }else{
            menu.title = "Nothing found";
          }
        })
        .catch(function (error) {
          console.log(error);
        })
      };

      menu.removeItem = function (itemIndex) {
        menu.lastRemoved = "Last menu item removed was " + menu.found[itemIndex].name;
        menu.found.splice(itemIndex,1);
        menu.title = origTitle + " (" + menu.found.length + " items )";
      };

      }




    MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    function MenuSearchService($http, ApiBasePath) {
      var service = this;

      service.getMatchedMenuItems=function (searchTerm) {
        console.log(searchTerm);
        return $http({
            method: "GET",
            url: (ApiBasePath + "/menu_items.json")
          }).then(function (result) {
            // process result and only keep items that match
            var allItems=result.data.menu_items;
            var foundItems=[];
            var j=0;
            for(var i=0;i<allItems.length;i++){
              var item = allItems[i];
              var description = item.description;
              if(description.indexOf(searchTerm)!=-1){
                console.log(description);
                foundItems[j]=allItems[i];
                j++
              }
            }
            console.log(foundItems);
            // return processed items
            return foundItems;
        });
      };

    }

    })();
