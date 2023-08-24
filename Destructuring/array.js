// Destructuring is a powerful way to create variables from values in arrays and objects.

//  If you want to assign the values of an array to separate variables, 
// you can take advantage of destructuring to achieve your goal in a simple, clean way.
//  No need to use indexes or loops!


let clubs=['Chelsea','Real Madrid','Liverpool','Arsenal','Spurs']

let [myClub, mySeconClub,...rest] = clubs

console.log(myClub)   // Chelsea
console.log(mySeconClub)  //Real madrid
console.log(rest)        // ['Liverpool','Arsenal','Spurs']

// You can also set default values if you wish! That way,
// even if the passed array doesn’t have enough values,
// all your variables will have a defined value!

const organs=['liver','heart','eyes']

const[organ1,organ2,organ3,organ4='lungs']=organs

console.log(organ1)
console.log(organ4)


//=>Common use cases

// You might be scratching your head right now wondering when you’re going to use this.
// I mean… are there any obvious cases for using array destructuring?

// There are many, actually! For instance, say you have blog posts in an array,
// but want to manipulate the first post differently than all the others,
// you could use destructuring to split the first post and the rest into two different variables.

const [starPost, ...otherPosts] = blogPosts;

// Or say you just need the first three posts of the array, 
// you can just declare three variables and the rest will be ignored.

const [post1, post2, post3] = blogPosts;