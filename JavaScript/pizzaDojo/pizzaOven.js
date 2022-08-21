function pizzaOven (bread,typeOfSauce,typeCheese,sauces ){
    let pizza={};
    pizza.bread=bread;
    pizza.typeOfSauce=typeOfSauce;
    pizza.typeCheese=typeCheese[0];
    pizza.sauces= sauces;
    return pizza;

}


let pizza=pizzaOven("Chicago Style","traditional",["mozarella"],["pepperoni","sausage"]);
console.log( JSON.stringify(pizza));

let pizza2=pizzaOven("hand-tossed","marinara",["mozzarella","feta"],["champs","onions","olives"]);
console.log( JSON.stringify(pizza2));

let pizza3=pizzaOven("hand-tossed","traditional",["mozarella"],["pepperoni","sausage"]);
console.log( JSON.stringify(pizza3));

let pizza4=pizzaOven("Chicago Style","marinara",["mozarella"],["pepperoni","sausage"]);
console.log( JSON.stringify(pizza4));


//using math,floor and random to generate a random number between 1 and 6
//and creating a new pizza whit random ingredients
var pan = ["delgado", "grueso","relleno"];
var salsas = ["tradicional", "marinara","salsa blanca"];
var proteina = ["pepperoni", "salchicha","champiñones","aceitunas","cebollas", "pinia","jamon"];
var queso = ["mozzarella", "feta","cheddar"];

function randomRange(max,min){                    
        return Math.floor(Math.random() * max - min) +min;   
}                                                      
function randomIndex(arr){                                 
    var i= Math.floor(arr.length * Math.random());       
    return arr[i];                                        
}


function crazypizza(){                                
    var pizza = {};                                       
    pizza.salsas = randomIndex(salsas);
    pizza.proteina = [];                                     
    pizza.queso = randomIndex(queso);
    for (var i=0; i<randomRange
        (6,1); i++){               
        pizza.proteina.push(randomIndex(proteina));             
    }   


    return pizza;                                         

}
console.log(JSON.stringify(crazypizza())); 