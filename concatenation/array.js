

//ARRAY CONCATENATION

//You can concatenate/merge several arrays' content into a new array
// using the ... spread syntax. Here's an example:

let arr1=[1,2,3]
let arr2=[4,5,6]

let arr3=[...arr1,...arr2]

console.log(arr3)

//Here's another example where we create a new array
//based on the old one and add new items to it:

const items = ["Tissues", "Oranges"];

const otherItems = [...items, "Tomatoes"];

console.log(otherItems); // ["Tissues", "Oranges", "Tomatoes"]