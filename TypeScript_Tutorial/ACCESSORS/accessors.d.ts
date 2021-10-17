declare class Customers {
    private firstname;
    private lastname;
    constructor(fname: string, lname: string);
    get firstnam(): string;
    get lastnam(): string;
    set firstnam(val: string);
    set lastnam(val: string);
}
declare var c: Customers;
