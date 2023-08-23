

// Shoe price example in 
// Object Oriented programming


let purchase1={
    shoes: 1299,
    stateGst : 12.9,
    centralGst : 12.9,
    totalPrice : function (){
        let calculation= this.shoes + this.centralGst + this.stateGst
        console.log(` Total Price is ${calculation.toFixed(2)}`)
    }
}

console.log(purchase1.totalPrice())
purchase1.bags=188

console.log(purchase1.bags)