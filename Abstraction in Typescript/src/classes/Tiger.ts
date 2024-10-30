import Animal from "./Animal";

class Tiger extends Animal{
    noOfTails: number = 1;
    noOfEyes: number = 2;
    noOfLegs: number = 4;
    foodBehaviour(): void {
        console.log("Hunts deers and eat.")
    }
    constructor(){
        super();
        console.log("Inside Tiger Constructor");
    }
}

export default Tiger;