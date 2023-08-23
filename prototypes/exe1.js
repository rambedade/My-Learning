

// Prototype = Referred to as a original model from which it's other forms are developed
// Prototype  is an object that can hold properties that can be shared by the other objects that will be created from taking prototype
// JAVASCRIPT IMPLEMENTS A PROTOYPAL INHERITANCE MODEL
// Object.create() is a method to create a new object

let car = {                                                 // here car is a prototype object
     hasTyres: true,
     stering: 'round',
     hasRoofGlass: true,
     message: function(){
        console.log (`This car has a stering ${this.stering}`)
     }

    }                              

    // from the above car prototype object I can create many other types of car objects

    let lamborgini= Object.create(car)

    let bmw=Object.create(car)
    bmw.hasTyres=false

    console.log("lamborgini:",lamborgini)
    console.log("bmw:", bmw)

    console.log(`this is the model which has stering ${lamborgini.stering}`)
    console.log(`lamborgini:  ${JSON.stringify(lamborgini)} ` )