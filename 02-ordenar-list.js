"use strict";
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
var Produtos = [
    new Product('Fusca', 17000),
    new Product('Jipe', 46000),
    new Product('Smart', 46000),
    new Product('Larborgini', 1000000),
    new Product('Brasilia', 16000),
];
var buscaMenor = function (produtos, inicio, termino) {
    var maisBarato = inicio;
    for (var atual = inicio; atual < termino; atual++) {
        if (produtos[atual].getPrice < produtos[maisBarato].getPrice) {
            maisBarato = atual;
        }
    }
    return maisBarato;
};
var orderAsc = function (produtos) {
    for (var atual = 0; atual < produtos.length; atual++) {
        var menor = buscaMenor(produtos, atual, produtos.length);
        var produtoAtual = produtos[atual];
        var produtoMenor = produtos[menor];
        produtos[atual] = produtoMenor;
        produtos[menor] = produtoAtual;
    }
    produtos.forEach(function (product) { return console.log(product.getName); });
};
console.log(orderAsc(Produtos));
