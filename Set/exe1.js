

//A set is a collection of unique values.

//To build a new set, you can use the Set constructor:

new Set()


//The Set constructor can, for example, accept an array.

// This means that we can use it to quickly filter an array for unique members.

let numbers=[1,2,1,2,1,3,13,3,1,1,2]

let uniqueNumbers= new Set(numbers)

console.log(uniqueNumbers)   // Set(4) { 1, 2, 3, 13 }



const fruits = ['apple','banana','kiwi','apple','banana','kiwi','cucumber']

const uniqueFruits=new Set(fruits)

console.log(uniqueFruits)   // Set(4) { 'apple', 'banana', 'kiwi', 'cucumber' }