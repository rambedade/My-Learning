// Spread Operator
// The spread operator was introduced with ES6 and 
// allows us to merge multiple arguments or objects and
// returns a new combined value anywhere defined in your code.


let obj1 = { firstName: 'John', lastName: 'Doe', email: 'johnydoe1@domain.com' };

let obj2 = { email: 'john.doe@domain.com', phone: '012–345–6789' };

let obj3 = { city: 'Salt Lake City', state: 'Utah' }

let newObj = {...obj1,...obj2,...obj3};

console.log(newObj)

// {
//  firstName: 'John',
//  lastName: 'Doe',
//  email: 'john.doe@email.com',
//  phone: '012–345–6789',
//  city: 'Salt Lake City',
//  state: 'Utah'
// }


//If any of the objects or values added to the spread operation share the same property or
 //name (e.g. “firstName”), the last one passed into your operation will be the value taken and
//overwrites any earlier values with the same key when creating your new object.
//This can be seen in our example above.

// One important factor in using this approach is that the shape of your final value is defined by
//  the wrapping characters. 
//  That is, we use the opening and closing braces (“{ }”) to determine
//   the resulting shape of our action, in this case, an object.
//    Another result shape we can use are brackets (“[ ]”) when combining arrays to create a
//     new array.