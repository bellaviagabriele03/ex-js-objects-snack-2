const hamburger = {
    name: "Cheese Burger",
    weight: 250,
    maker: {
        name: "Anonymous Chef",
        restaurant: {
            name: "Hyur's Burgers",
            address: "Main Street, 123",
            isOpen: true,
        },
        age: 29
    }
};

const secondBurger = structuredClone(hamburger);
const thirdBurger = structuredClone(hamburger);

console.log("oggetto1", hamburger);
console.log("oggetto2", hamburger.maker);
console.log("oggetto3", hamburger.maker.restaurant);
console.log("oggetto4", secondBurger);
console.log("oggetto5", secondBurger.maker);
console.log("oggetto6", secondBurger.maker.restaurant);
console.log("oggetto7", thirdBurger);
console.log("oggetto8", thirdBurger.maker);
console.log("oggetto9", thirdBurger.maker.restaurant);




//////////////////////////////////////////////////////////////////////////////////


const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
}

const restaurant = {
    name: "Hyur's Burgers",
    address: {
        street: 'Main Street',
        number: 123,
    },
    openingDate: new Date(2025, 3, 11),
    isOpen: false,
};


//non posso usare ne JSON.parse... e nemmeno structuredClone in questo caso 
// perchè entrambi non mi copieranno le funzioni contenute in "makerBurger" e "openingDate"
// in questo caso mi conviene utilizzare lo spreed operator 
// (se voglio clonare a tutti gli effetti gli oggetti per non modificare gli originali <3)

//es: 
const copiaChef = {
    ...chef,
    makeBurger: chef.makeBurger

}

const copiaRestaurant = {
    ...restaurant,
    openingDate: restaurant.openingDate
}


console.log("chef", chef);


chef.makeBurger = "ciao"

copiaChef.makeBurger(2)

console.log(chef.makeBurger);


copiaChef.makeBurger(3)



restaurant.openingDate = "ciao"
console.log("restaurant", restaurant.openingDate);
console.log("copiaRestaurant", copiaRestaurant.openingDate);


/// con questo metodo sono riusìscito a creare degli oggetti nuovi e gli ho assegnato le proprietà degli oggetti originali.