(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {

  var showList = this;
  showList.items = ShoppingListCheckOffService.getItems();

  showList.boughtItem = function (itemIndex) {
    try{
      ShoppingListCheckOffService.boughtItem(itemIndex);
    } catch (error) {
      showList.emptyMessage = error.message;
    }
  };


}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var showList = this;

  showList.goods = ShoppingListCheckOffService.getBoughtItems();

  showList.errorMessage = "";

}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var items = [{ name: "cookies", quantity: 10 },{ name: "chips", quantity: 5 },{ name: "milk", quantity: 2 },{ name: "flour", quantity: 1 },{ name: "sugar", quantity: 2 }];
  var boughtItems = [];

  service.boughtItem= function (itemIndex) {
    if(items.length>0){
      // console.log(items);
      // console.log("Index Position "+itemIndex);
      //console.log(items[itemIndex]);
      boughtItems.push(items[itemIndex]);
      items.splice(itemIndex, 1);
      if(items.length===0){
        console.log("Now in the error block");
        throw new Error("No more items to buy");
      }
    }
  };


  service.getItems = function () {
    return items;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };

  service.checkBought=function () {
    if(boughtItems.length>0){

    }
  };
}

})();
