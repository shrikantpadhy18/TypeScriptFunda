class Customers{
    private firstname:string;
    private lastname:string;

    constructor(fname:string,lname:string){
        this.firstname=fname;
        this.lastname=lname;
    }

    //get accessor 

    public get firstnam():string{
        return this.firstname;
    }
    public get lastnam():string{
        return this.lastname;
    }

    public set firstnam(val:string){
        this.firstname=val;
    }

    public set lastnam(val:string){
        this.lastname=val;
    }

}
var c=new Customers("Shrikant","Padhy");
console.log(c.firstnam);
console.log(c.lastnam);


