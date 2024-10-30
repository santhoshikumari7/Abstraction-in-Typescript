import Animal from "./Animal";

class Lion extends Animal{
    noOfTails:number = 1;
    noOfEyes:number = 2;
    noOfLegs: number = 4;
    foodBehaviour(): void {
        console.log("Lion hunts and eat.")
    }
    constructor(){
        super();
        console.log("Inside Lion Constructor");
    }
}


export default Lion;