//fruits problem


// let fruits = ['banana','apple','kiwi','strawberry']

// let fruitShow=fruits.forEach((fruit,index)=>{
//     return `${fruit},${index}`
// })

const fruits = ['kiwi','mango','apple','pear'];

function appendIndex(fruit, ind) {
    console.log(`${ind}. ${fruit}`)
}

fruits.forEach(appendIndex);