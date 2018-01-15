(function () {
    'use strict';
    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var buyList = this;

        buyList.items = ShoppingListCheckOffService.getBuyItems();

        buyList.buyItem = function(index) {
            ShoppingListCheckOffService.changeItemStatus(index);
        }

        buyList.empty = function() {
            return ShoppingListCheckOffService.getBuyItems() == 0;
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var boughtList = this;

        boughtList.items = ShoppingListCheckOffService.getBoughtItems();

        boughtList.empty = function() {
            return ShoppingListCheckOffService.getBoughtItems() == 0;
        }
    }

    function ShoppingListCheckOffService() {
        var service = this;

        var item1 = {
            name: 'Cookies',
            quantity: 10
        }

        var item2 = {
            name: 'Cookies',
            quantity: 10
        }

        var item3 = {
            name: 'Cookies',
            quantity: 10
        }

        var item4 = {
            name: 'Cookies',
            quantity: 10
        }

        var item5 = {
            name: 'Cookies',
            quantity: 10
        }

        var buyItems = [item1, item2, item3, item4, item5];
        var boughtItems = [];

        service.changeItemStatus = function (index) {
            var item = buyItems[index];
            boughtItems.push(item);
            buyItems.splice(index, 1);
        };

        service.removeItem = function (itemIdex) {
            items.splice(itemIdex, 1);
        };

        service.getBuyItems = function() {
            return buyItems;
        }

        service.getBoughtItems = function() {
            return boughtItems;
        }
    }

})();
