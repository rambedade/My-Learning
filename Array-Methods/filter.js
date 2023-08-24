
// Returns a new Array
// Used when there is condition 



let numbers=[12,22,144,242,111,1,12,34,0]

let twelve=numbers.filter(number=>{
    return number==12
})

console.log(twelve)

let numAboveTen = numbers.filter(num=>{
    return num>10
})

console.log(numAboveTen)