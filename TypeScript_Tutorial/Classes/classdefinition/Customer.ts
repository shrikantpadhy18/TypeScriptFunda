
//there are three type of access specifiers public,private,protected
//by default all members are public

class Customer{
    firstname:string;
    lastname:string;

    constructor(firstname:string,lastname:string)
    {
        this.firstname=firstname;
        this.lastname=lastname;
    }
}

let myCustomer=new Customer("shrikant",'padhy');


console.log(myCustomer.firstname);
console.log(myCustomer.lastname);

