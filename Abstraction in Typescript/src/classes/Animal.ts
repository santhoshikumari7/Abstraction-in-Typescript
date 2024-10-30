abstract class Animal{

    noOfNose:number = 1;
    abstract noOfEyes:number;
    abstract noOfLegs:number;
    abstract noOfTails:number;
    abstract foodBehaviour():void;

    runningSpeed = ()=>{
        console.log("Wild animals runs much faster.")
    }

    constructor(){
        console.log("Inside Animal Constructor");

       
    }

}

export default Animal;