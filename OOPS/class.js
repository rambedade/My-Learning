

// ' CLASS ' is a just like a blueprint of the house 
// and this blueprint is used to build the other houses
// Classes are used to build the 'objects'
// Here the actual house we gonna build is 'objects'
// To Summarize >>  The Blueprint === Class
//              >>  The house ===  Object
// The 'new'  keyword is how we take a class & turn it into an object
// To do that 'constructor' is used inside the class    
//   ' CONSTRUCTOR ' ->   Constructor is goning to take all the parameters we want to put inside our 
//                        house when we create a new instance or new object of the house.

class House {
    constructor(color,area){
        this.color=color
        this.area=area
    }

    getFurniture(){
        return 'Big enough bed'
    }
}

let house1=new House ('red','Brooklyn')  // THIS IS NEW VERSION OF THE HOUSE CLASS

console.log(house1)

let house2=new House ('blue', 'Manhatten')  

console.log(house2)

console.log(house1.getFurniture())
console.log(house2.color)