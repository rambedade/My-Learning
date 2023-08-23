// By now, you should know that inheritance in JavaScript is based around the prototype object.

// All objects that are built from the prototype share the same functionality.

// When you need to code more complex OOP relationships, you can use the class keyword and its easy-to-understand and easy-to-reason-about syntax.

// Imagine that you need to code a Train class.

// Once you've coded this class, you'll be able to use the keyword new to instantiate objects of the Train class.

// For now though, you first need to define the Train class, using the following syntax:


// Here you are building a Train class

class Train {

     constructor(color,lightsOn){

         this.color=color                       // What does this "this" keyword here represent?
         this.lightsOn=lightsOn                 // It's the future object instance of the Train class.

     }

     toggleLights(){
        this.lightsOn = !this.lightsOn          // it's toggle method - means to turn the lights on and off
                                                // hence we using the ! logical not operator
     }

     lightsStatus(){
        console.log("Lights on ?",this.lightsOn)  //this method just reports the current status 
                                                  //of the lightsOn variable of a given object instance.  
     }

     getSelf(){
        console.log(this)                      // this method prints out the properties on the object instance it is called on.
     }

     getPrototype(){
        let proto=Object.getPrototypeOf(this)   //console logs the prototype of the object instance of the Train class
        console.log(proto)
     }
   


}

let myFirstTrain= new Train ('orange',false)   // this is the instance of the class 'Train'

//let mySecondTrain=new Train ('red',true)   //this is the new object you created from the class 'Train'

//let myThirdTrain=new Train ('purple',true)  // here class Train is the prototype

var train4 = new Train('red', false);

console.log(myFirstTrain)                      // Train { color: 'orange', lightsOn: false }
//console.log(mySecondTrain)           
//console.log(myThirdTrain)

train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

//It is possible to implement polymorphism using classes in JavaScript, by inheriting from the base class and then overriding the inherited behavior. 


// In the code that follows, you will observe another class being coded, which is named 'HighSpeedTrain' and inherits from the Train class.
// here the super-class is 'Train' and the sub-class is 'HighSpeedTrain'

class HighSpeedTrain extends Train {

    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn)        //In JavaScript classes, super is used to specify what property gets inherited from the super-class in the sub-class.
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }

    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}

//var myFirstTrain = new Train('red', false);
console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}
var mySecondTrain = new Train('blue', false);
var myThirdTrain = new Train('blue', false);

var train4 = new Train('red', false);
train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

train5.toggleLights(); // undefined
train5.lightsStatus(); // Lights on? true
highSpeed1.toggleLights(); // Lights on? true, Lights are 100% operational.

//Additionally, it helps to visualize what is happening by getting the prototype of both the train5 and the highSpeed1 trains:

train5.getPrototype(); // {constructor: ƒ, toggleLights: ƒ, lightsStatus: ƒ, getSelf: ƒ, getPrototype: ƒ}
highSpeed1.getPrototype(); // Train {constructor: ƒ, toggleHighSpeed: ƒ, toggleLights: ƒ}


