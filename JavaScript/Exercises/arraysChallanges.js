//everytime the index has value of food it will show delicius if food 
//is not found it will show "tengo hambre" once
function alwaysHungry(arr) {
    let count =0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] == "food") {
            console.log("delicius")
            count++;
        }
    }
    if(count == 0){
        console.log("I'm starving")
    }
}
alwaysHungry([3.14, "food", "cake", true, "food"]);
alwaysHungry([4,1,5,7,2]);



//return a new array that only contains greater  values than cutoff

function highPass(arr, cutoff) {
    let filteredArr = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i]>cutoff){
            filteredArr.push(arr[i]);
        }
    }
        
    return filteredArr;
    
}
let result = highPass([6, 8, 3, 10, -2, 5, 9],5);
console.log(result); 

//return how many numbers are grather that the average
function betterThanAverage(arr) { 
    let sum = 0;
    for (let i=0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    
    let count=0;
    let avg = sum/arr.length;
    for (let i=0; i<arr.length; i++){
        if (arr[i]>avg){
            count++;
        }
    }
    return count;

}


let resultBetterAvg = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(resultBetterAvg);


//invert the values from the array nad return it 

function invertValues(arr){
    let invertedArray=arr.reverse();
    return invertedArray;
    
}

let invertedResult = invertValues(["a", "b", "c", "d", "e"]);
console.log(invertedResult);


//return a fibonacci Array it formula is fib(n) = fib(n-1) + fib(n-2) sum 
//the first two values and the next value is the sum of the previous two values

function fibonacci(n){
    let fibArray = [0,1];
    for (let i=2; i<n; i++){
        fibArray[i] = fibArray[i-1] + fibArray[i-2];
    }
    return fibArray;
    
}
let fibonacciArray= fibonacci(10);
console.log(fibonacciArray);
