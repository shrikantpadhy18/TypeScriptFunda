import { Coach } from "./coach";

export class Cricketcoach implements Coach{
    getDailyWorkout(): string {
        return("Yor in cricketcoach method");
    }
    
}