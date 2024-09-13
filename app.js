(function () {
    'use strict';
  
    angular.module('ShoppingListApp', [])
      .controller('ShoppingListController', ShoppingListController);
  
    ShoppingListController.$inject = [];
  
    function ShoppingListController() {
      var list = this;
  
      // Initial "To Buy" items
      list.toBuyItems = [
        { name: "Apples", quantity: 10 },
        { name: "Orange", quantity: 5 },
        { name: "Banana", quantity: 2 },
        { name: "Milk", quantity: 1 },
        { name: "Cake", quantity: 7 }
      ];
  
      // Already Bought items array
      list.boughtItems = [];
  
      // Function to move item from 'To Buy' to 'Already Bought'
      list.buyItem = function (itemIndex) {
        var item = list.toBuyItems[itemIndex];
        list.boughtItems.push(item);
        list.toBuyItems.splice(itemIndex, 1);
      };
    }
  })();
  