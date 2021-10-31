import { Shape } from "./Shape";
import { Circle } from "./Circle";
import {Rectangle} from "./Rectangle";


let myShape=new Shape(10,15);
console.log(myShape.getInfo());

let myCircle=new Circle(5,10,20);
console.log(myCircle.getInfo());

let myRec=new Rectangle(12,15,7,8);
console.log(myRec.getInfo());