function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var Pizza = {};
    Pizza.crustType = crustType;
    Pizza.sauceType =sauceType;
    Pizza.cheeses = cheeses;
    Pizza.toppings = toppings;
    return Pizza;
}
    
var pizza =[ 
    pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni","sausage"]),
    pizzaOven("hand tossed", "marinara", ["mozzarella","feta"], ["mashrooms","olives","onions"]),
    pizzaOven("Filled Sides", "Traditional", "poke", ["mashrooms","Tomato","onions"]),
    pizzaOven("hand tossed", "BBQ Sauce", "feta", ["mashrooms","olives"])

]
console.log(pizza[Math.floor(Math.random()*3)]);
