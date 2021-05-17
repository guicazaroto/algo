"use strict";
(function () {
    var Product = /** @class */ (function () {
        function Product(name, price) {
            this.name = name;
            this.price = price;
        }
        Object.defineProperty(Product.prototype, "getName", {
            get: function () {
                return this.name;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Product.prototype, "getPrice", {
            get: function () {
                return this.price;
            },
            enumerable: false,
            configurable: true
        });
        return Product;
    }());
    var getLowestPrice = function (products) {
        var lowestPriceIndex = 0;
        for (var i = 0; i < products.length; i++) {
            if (products[i].getPrice < products[lowestPriceIndex].getPrice) {
                lowestPriceIndex = i;
            }
        }
        return lowestPriceIndex;
    };
    var getBiggestPrice = function (produtos) {
        var biggestPriceIndex = 0;
        for (var i = 0; i < produtos.length; i++) {
            if (produtos[i].getPrice > produtos[biggestPriceIndex].getPrice) {
                biggestPriceIndex = i;
            }
        }
        return biggestPriceIndex;
    };
    new (/** @class */ (function () {
        function Main() {
            var Produtos = [
                new Product('Corolla', 95000),
                new Product('Hillux', 153900),
                new Product('Ethios', 42900),
                new Product('Renegate', 85000),
                new Product('Compass', 240000)
            ];
            var lowestIndex = getLowestPrice(Produtos);
            var biggestIndex = getBiggestPrice(Produtos);
            console.log("O produto com menor pre\u00E7o \u00E9 " + Produtos[lowestIndex].getName + " por apenas R$ " + Produtos[lowestIndex].getPrice);
            console.log("O produto com maior pre\u00E7o \u00E9 " + Produtos[biggestIndex].getName + " por R$ " + Produtos[biggestIndex].getPrice);
        }
        return Main;
    }()))();
})();
