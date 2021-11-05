"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cricketcoach_1 = require("./Cricketcoach");
var golfcoach_1 = require("./golfcoach");
var myCricketCoach = new Cricketcoach_1.Cricketcoach();
var mygolfcoach = new golfcoach_1.golfcoach();
// declare an array for coaches ..initially empty
var theCoaches = [];
//add the coaches to the array
theCoaches.push(myCricketCoach);
theCoaches.push(mygolfcoach);
for (var _i = 0, theCoaches_1 = theCoaches; _i < theCoaches_1.length; _i++) {
    var mycoach = theCoaches_1[_i];
    console.log(mycoach.getDailyWorkout());
}
