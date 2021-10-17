"use strict";
var Customers = /** @class */ (function () {
    function Customers(fname, lname) {
        this.firstname = fname;
        this.lastname = lname;
    }
    Object.defineProperty(Customers.prototype, "firstnam", {
        //get accessor 
        get: function () {
            return this.firstname;
        },
        set: function (val) {
            this.firstname = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customers.prototype, "lastnam", {
        get: function () {
            return this.lastname;
        },
        set: function (val) {
            this.lastname = val;
        },
        enumerable: false,
        configurable: true
    });
    return Customers;
}());
var c = new Customers("Shrikant", "Padhy");
console.log(c.firstnam);
console.log(c.lastnam);
