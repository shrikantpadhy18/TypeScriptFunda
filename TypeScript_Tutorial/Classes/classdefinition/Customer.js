//there are three type of access specifiers public,private,protected
//by default all members are public
var Customer = /** @class */ (function () {
    function Customer(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    return Customer;
}());
var myCustomer = new Customer("shrikant", 'padhy');
console.log(myCustomer.firstname);
console.log(myCustomer.lastname);
