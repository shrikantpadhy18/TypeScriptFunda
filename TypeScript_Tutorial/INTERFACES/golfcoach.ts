import { Coach } from "./coach";

export class golfcoach implements Coach{
    getDailyWorkout(): string {
        return("You are in golf coach method");
    }
    
}