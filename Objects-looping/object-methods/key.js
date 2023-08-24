// You can not loop objects directly
// cause objects are not iterable

// 3 Object Methods you need for object iteration

// A- Object.keys()  // it returns array of strings

let car={
    color:"Red",
    model:"Lamborgini",
    year:"1999"
}

let carInfo=Object.keys(car)

console.log(carInfo)   // [ 'color', 'model', 'year' ]