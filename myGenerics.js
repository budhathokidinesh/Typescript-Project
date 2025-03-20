"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = [];
var names = [];
function indentityOne(val) {
    return val;
}
function indentityTwo(val) {
    return val;
}
function indentityThree(val) {
    return val;
}
// indentityThree(true);
function indentityFour(val) {
    return val;
}
indentityFour({ brand: "naren", type: 4 });
function getSearchProducts(products) {
    //do database operations
    var myIndex = 3;
    return products[myIndex];
}
var getMoreSearchedProducts = function (products) {
    //do some dtabase operatons
    var myIndex = 4;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne: valOne,
        valTwo: valTwo,
    };
}
anotherFunction(3, { connection: "yes", username: "no", password: "jpt" });
var Sellable = /** @class */ (function () {
    function Sellable() {
        this.cart = [];
    }
    Sellable.prototype.addToCart = function (products) {
        this.cart.push(products);
    };
    return Sellable;
}());
