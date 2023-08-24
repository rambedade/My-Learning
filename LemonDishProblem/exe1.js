//Lemon DISH Exercise

const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;

// Implement getPrices()
function getPrices(taxBoolean) {
    for (d of dishData) { // don't use in // use let d of dishData
        var finalPrice;
        if (taxBoolean == true) {
            finalPrice = tax * d.price;
        }
        else if (taxBoolean == false) {
            finalPrice = d.price;
        }
        else {
            console.log("You need to pass a boolean to the getPrices call!");
            break;
        }
        console.log("Dish:",d.name,"Price: $"+finalPrice);
        // console.log(`Dish: ${d.name} Price: ${finalPrice}`);
    }
}

// Implement getDiscount()
function getDiscount(taxBoolean, guests)
{
    getPrices(taxBoolean);
    var condition =typeof(guests) == 'number' && guests > 0 && guests < 30;
    if (condition == true) {
        var discount = 0;
        if (guests < 5) {
            discount = 5;
        }
        else if (guests >= 5) {
            discount = 10;
        }
        console.log('Discount is: $' + discount);
    }
    else {
        console.log('The second argument must be a number between 0 and 30');

    }
}
// Call getDiscount()
getDiscount(true, 2);
getDiscount(false, 10);

//Dish: Italian pasta Price: $11.46
// Dish: Rice with veggies Price: $10.38
// Dish: Chicken with potatoes Price: $18.66
// Dish: Vegetarian Pizza Price: $7.74
// Discount is: $5
// Dish: Italian pasta Price: $9.55
// Dish: Rice with veggies Price: $8.65
// Dish: Chicken with potatoes Price: $15.55
// Dish: Vegetarian Pizza Price: $6.45
// Discount is: $10
