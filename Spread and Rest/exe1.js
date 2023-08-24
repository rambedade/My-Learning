// In this reading, you'll learn how to join arrays, objects using the rest operator.
// You will also discover how to use the spread operator to:

//  Add new members to arrays without using the push() method,

// Convert a string to an array and

// Copy either an object or an array into a separate object 

// > Recall that the push() and pop() methods are used to add and remove items from the end of an array.
// > Join arrays, objects using the rest operator
// > Using the spread operator, it's easy to concatenate arrays:


// Recall that the push() and pop() methods are used to add and remove items from 
// the end of an array.
// Join arrays, objects using the rest operator

// Using the spread operator, it's easy to concatenate arrays:
const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // concatenate
console.log(fruitsAndBerries); // outputs a single array
                               // ['apple', 'pear', 'plum', 'blueberry', 'strawberry']

//It's also easy to join objects:  
const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = {...flying, ...car}
console.log(flyingCar) // {wings: 2, wheels: 4}

//Add new members to arrays without using the push() method
//Here's how to use the spread operator to easily add one or more members to 
//an existing array:

let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies); //['onion', 'parsley', 'carrot', 'beetroot']


//Convert a string to an array using the spread operator
// Given a string, 
// it's easy to spread it out into separate array items:

const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']


//Copy either an object or an array into a separate one
// Here's how to copy an object into a completely separate object, 
// using the spread operator.

const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1}

car1.speed = 201

console.log(car1.speed, car2.speed) //201,200

//You can copy an array into a completely separate array, 
//also using the spread operator, like this:

const fruits1 = ['apples', 'pears']
const fruits2 = [...fruits]
fruits1.pop()
console.log(fruits1, "not", fruits2) //['apples'] 'not' ['apples','pears']

//Note that the spread operator only performs a shallow copy of the source array or object.


