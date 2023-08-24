
//The spread operator (...) helps you expand iterables into individual elements.

//The spread syntax works within 
//array literals, function calls, and initialized property objects to spread
//the values of iterable objects into separate items.
//So effectively, it does the opposite thing from the rest operator.
  

//The main difference between rest and spread is that
//the rest operator puts the rest of some specific user-supplied values into a JavaScript array. 
//But the spread syntax expands iterables into individual elements.

// The rest operator is used to put the rest of some specific 
// user-supplied values into a JavaScript array.

const myName = ["Sofela", "is", "my"];
const aboutMe = ["Oluwatobi", ...myName, "name."];

console.log(aboutMe);

// The invocation above will return:
[ "Oluwatobi", "Sofela", "is", "my", "name." ]


let top3=[
    'vatican city','vegas','monaco'
]

function places(...top){

     let place=top.forEach((city)=>{
         console.log(city)
     })

     return place
 }

 places(...top3)

