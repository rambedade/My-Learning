



// The Object.entries() method

// Finally, there's another useful method, Object.entries()

// which returns an array listing both the keys and the values.  
// basically it return array of arrays

let bank = {
    founded:2001,
    giveLoans:true,
    city:'Londres'
}

let bankData=Object.entries(bank)

console.log(bankData)   //[ [ 'founded', 2001 ], [ 'giveLoans', true ], [ 'city', 'Londres' ] ]