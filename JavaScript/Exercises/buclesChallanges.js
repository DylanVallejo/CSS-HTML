
//odd number from 1 to 20 
for(i=1; i<=20; i++){
    if(i%2 != 0){
        console.log("Impar" +" "+ i);
    }
        
}


for(i=100; i>=0; i--){
    if(i%3 == 0){
        console.log("Divisible  uniformemente para 3" +" "+ i);
    }
}

//print this sequence of number 4 , 2.5, 1, -0.5, -2, -3.5  
for (let i=4; i>=-3.5; i=i-1.5){
    console.log(i);
}

//print the total sum from a sequence of number 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++){
    sum+=i;   
}
console.log(sum);

//multiply values from 1 to 12

let product = 1;
for (let i = 1; i <= 12; i++){
    product *= i;
}
console.log(product);


    

