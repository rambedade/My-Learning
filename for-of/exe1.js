// for in loops are not reliable ,let's see how





let car={                         // car - Protoype object in this code
    engine:true,
    steering:true,
    speed:'slow'
}

let sportsCar=Object.create(car)  // this is instance of the prototype 'car'
sportsCar.speed="fast"
console.log(sportsCar)     

//using for in loop

for (const key in sportsCar) {    // -- for in loop is unreliable cause ,
                                  // it iterating over object and it's prototype  
    console.log(key)             //engine
                                 //steering
                                 //speed
}

//using for of loop

for ( prop of Object.keys(sportsCar)) {

    console.log(`${prop}:${sportsCar[prop]}`)  // it only iterating the object instance not 
                                               // the protype
                                               // speed:fast
} 


