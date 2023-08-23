// JavaScript has a number of built-in object types, such as:

//  Math, Date, Object, Function, Boolean, Symbol, Array, Map, Set, Promise, JSON, etc.

// These objects are sometimes referred to as "native objects".

// Constructor functions, commonly referred to as just "constructors", are special functions that allow us to build instances of these built-in native objects. All the constructors are capitalized.

// To use a constructor function, I must prepend it with the operator new.

// For example, to create a new instance of the Date object, I can run: new Date(). What I get back is the current datetime, such as:

// Thu Feb 03 2022 11:24:08 GMT+0100 (Central European Standard Time) 

// However, not all the built-in objects come with a constructor function. An example of such an object type is the built-in Math object.

// Besides constructor functions for the built-in objects, I can also define custom constructor functions.

// Here's an example:

// Icecream example

class Icecream{
   constructor (flavor){
    this.flavor=flavor
   }

   getMelted(){
    console.log(`${this.flavor} icecream has melted`)
   }
}

let kiwiIcecream= new Icecream('kiwi')

console.log(kiwiIcecream)

console.log(kiwiIcecream.getMelted())


// Constructor example for making icecreams

function Icecreams(flavor){
    this.flavor=flavor
    this.meltIt=function(){
        console.log(`${flavor} has melted`)
    }
} 

let appleIcecream= new Icecreams('apple')  // this is new instance object of a Icecreams type
let chocoIcecream= new Icecreams('chocolate') //  this is new instance object of a Icecreams type

console.log(appleIcecream)
console.log(appleIcecream)