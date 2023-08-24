// OBJECT DESTRUCTURING

// We can also use the destructuring assignment syntax to assign object values to variables. 
// You’ll find it’s pretty similar to what we did with arrays.

let clubInfo={
    name:'Chelsea Football Club',
    chairman: 'Todd Boehly',
    CEO: 'Christian Stewert',
    founded: '1905',
    city:'London',
    UEFA_CUP:true
}


let {name,chairman,CEO,...restInfo}=clubInfo

console.log(name)
console.log(restInfo)


// As you can see with the example above,
// we used the same names for the variables as we did for the keys of the object.
// However we can define variables with names that differ from the keys:

const {
    name:system,
    chairman:owner,
    founded: year
     } = clubInfo

console.log(system)      // Chelsea Football Club
console.log(owner)       // Todd Boehly


// And just like with arrays, we can also set 'default values'.


const planet = {
    names: 'Hosnian Prime'
  };

  const {
    names = 'Unknown planet',
    faction = 'Unknown faction',
    weather = 'Unknown conditions'
  } = planet;
  
  console.log(names); // Outputs 'Hosnian Prime'
  console.log(faction); // Outputs 'Unknown faction'
  console.log(weather); // Outputs 'Unknown conditions'

