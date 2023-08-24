//Common use cases

// If you only need one or more values from an object and 
// don’t want to access those values using the objectWithALongNameName.keyName syntax, 
// then you can just use simple destructuring to create new variables 
// (which will keep your code concise).

// But the best use of object destructuring is the handling of options.

// Say you have a function that handles options with default values, 
//  here’s how you can, in a simple manner, handle it:



function shipGenerator(options = {}) {
    const {
      cannons = 4,
      engines = 2,
      crew = 10
    } = options; // Default options
    
    return `This ship has ${cannons} cannons, ${engines} engines, and ${crew} crew members.`;
  }
  
  console.log(shipGenerator({ engines: 10, crew: 20 })); // Outputs 'This ship has 4 cannons, 10 engines and 20 crew members.'
  console.log(shipGenerator({ cannons: 0 })); // Outputs 'This ship has 0 cannons, 2 engines and 10 crew members.'
  console.log(shipGenerator()); // Outputs 'This ship has 4 cannons, 2 engines and 10 crew members.'

  
//   As you can see, by writing options = {} as the argument, 
//   we specify that if nothing is passed,
//   by default we will use an empty object as the passed options.

//   After that, 
//   we use destructuring to override default options with passed ones and we’re good to go.
//   We can then simply use cannons instead of options.cannons in our function, 
//   and it was super simple to setup!
