import { Cricketcoach } from "./Cricketcoach";
import { Coach } from "./coach";
import { golfcoach } from "./golfcoach";


let myCricketCoach=new Cricketcoach();
let mygolfcoach=new golfcoach();


// declare an array for coaches ..initially empty

let theCoaches: Coach[]=[];

//add the coaches to the array

theCoaches.push(myCricketCoach);
theCoaches.push(mygolfcoach);


for(let mycoach of theCoaches){
    console.log(mycoach.getDailyWorkout());
}


