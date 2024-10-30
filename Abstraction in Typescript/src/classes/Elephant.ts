import Animal from "./Animal";

class Elephant extends Animal{
    noOfEyes: number = 2;
    noOfLegs: number = 4;
    noOfNose: number = 1;
    noOfTails: number = 1;
    foodBehaviour(): void {
        console.log("Pure Vegitarian");
    }
    constructor(){
        super();
        console.log("Inside Elephant Constructor");
    }
}